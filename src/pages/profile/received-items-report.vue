<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Checkout'
  },
})
import useHelper from "@/mixins/helper";
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import AppTextarea from "@/@core/components/app-form-elements/AppTextarea.vue";

const { numberFormat,numberFormatForPay } = useHelper()

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()

const formData = ref()
const orderItems = ref([])
const isFormValid = ref(false)
const refForm = ref()
const remarks = ref()

const { data: orderData, execute: fetchOrder } = await useApi(
  createUrl(`/received-items-reports`)
);

//const order = computed(() => orderData.value)

const orderItemsData = computed(() => orderData.value.allItems)
const order = computed(() => orderData.value.receivedItemsFormOrder)
const transactions = computed(() => orderData.value.transactions)

orderItems.value = orderItemsData.value

if(order.value){
  remarks.value = order.value?.comment
}

onMounted(() => {
  loadOrderItems(orderItemsData.value)
})

const loadOrderItems = (items) => {
  orderItems.value = (items || []).map(item => {
    let receivedInputs = [];

    if (item.weightUpdateItem) {
      // Prefill multiple inputs by boxWeight
      receivedInputs = Array(item.totalQuantity)
        .fill(item.boxWeight || '')
        .map((v, idx) => item.receivedInputs[idx] || v);
    } else {
      // Prefill single input by totalQuantity
      receivedInputs = [item.receivedInputs[0] || item.totalQuantity || 0];
    }

    return {
      ...item,
      receivedInputs,
      wantRefund: item.receivedItem?.wantRefund ?? false
    }
  })
}

const showLoader = ref(false)

const saveReceivedItemsForm = async () => {
  try {
    const receivedInputs = {}

    orderItems.value.forEach(item => {
      if (item.received !== undefined && item.received !== null) {
        receivedInputs[item._id] = {
          values: [item.received.toString()],
          productID: item.productID?._id,
          refund: item.refund || 0,  // 👈 add this
          wantRefund: item.wantRefund ? true : false
        }
      }
    })

    if (!Object.keys(receivedInputs).length) {
      toast.info('No received items to save.')
      return
    }

    const payload = {
      orderID: order.value?._id || null,
      receivedInputs,
      remarks: remarks.value || ''
    }

    showLoader.value = true

    await $api('/received-items-form', {
      method: 'POST',
      body: payload
    })

    await fetchOrder()
    toast.success('Received items saved successfully!')

    // optionally reload data or navigate
    // await fetchOrder()
  } catch (err) {
    console.error(err)
    toast.error(err.message || 'Failed to save received items form.')
  } finally {
    showLoader.value = false
  }
}

// Calculate total received quantity based on inputs
const totalReceived = (item) => {
  const sum = item.receivedInputs.reduce((acc, val) => acc + Number(val || 0), 0);
  // Only for display, if user checked refund, dues are 0
  return sum;
}

// Calculate dues for display
const dues = (item) => {
  if (item.wantRefund) return 0;
  const receivedSum = totalReceived(item);
  return receivedSum - item.totalQuantity;
}
</script>

<template>
  <div class="checkout-page product-page recived_items_report">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>פרטי הזמנה</h2>
        </VCardText>
      </VContainer>
    </div>

    <VContainer v-if="orderItems.length">
      <VForm ref="refForm" v-model="isFormValid" @submit.prevent="saveReceivedItemsForm">
        <VTable dense>
          <thead>
            <tr>
              <th>מק”ט</th>
              <th>שם מוצר</th>
              <th>מחיר פריט</th>
              <th>כמות שהוזמנה</th>
              <th>סה''כ שולם</th>
              <th class="bg-light2">כמות שהתקבלה</th>
              <th>הפרש כמותי</th>
              <th>סכום לתשלום / זיכוי</th>
              <th class="bg-light">החזרה</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, idx) in orderItems"
              :key="item.productID._id"
              :class="idx % 2 === 0 ? 'bg-gray-50' : ''"
            >
              <!-- Product info -->
              <td>{{ item.productNumber }}</td>
              <td>{{ item.name }}</td>
              <td>₪{{ numberFormat(item.price) }}</td>
              <td v-if="item.weightUpdateItem">
                {{ item.totalQuantity }}({{ item.boxWeight }}kg)
              </td>
              <td v-else>{{ item.totalQuantity }}</td>
              <td>
                <span v-if="!item.weightUpdateItem">₪{{ numberFormat(item.totalQuantity * item.price) }}</span>
                <span v-else>₪{{ numberFormat(item.totalQuantity * item.price) }}</span>
              </td>

              <!-- Received inputs -->
              <td class="bg-light2">
                <div v-if="item.weightUpdateItem">
                  <div
                    v-for="(val, inputIdx) in item.receivedInputs"
                    :key="inputIdx"
                    class="mb-1"
                  >
                    <AppTextField
                      type="number"
                      v-model="item.receivedInputs[inputIdx]"
                      class="rounded p-1 w-full"
                      :rules="[requiredValidator]"
                      placeholder="Box Weight"
                    />
                  </div>
                </div>
                <div v-else>
                  <AppTextField
                    type="number"
                    v-model="item.receivedInputs[0]"
                    class="rounded p-1 w-full"
                    :rules="[requiredValidator]"
                    placeholder="Quantity"
                  />
                </div>
              </td>

              <!-- Difference -->
              <td>
                <span v-if="item.weightUpdateItem">
                  
                </span>
                <span v-else>
                  {{ item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) - item.totalQuantity }}
                </span>
              </td>

              <!-- Amount to pay / refund -->
              <td>
                <!-- Weight based items -->
                <div v-if="item.weightUpdateItem && item.receivedInputs.some(w => Number(w) > 0)">
                  <div v-if="item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.pricePerKilo !== item.totalQuantity * item.price">
                    <span
                      v-if="item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.pricePerKilo > item.totalQuantity * item.price"
                      class="text-error"
                      style="white-space: nowrap;"
                    >
                      {{ $t('לתשלום') }}: ₪
                      {{ (item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.pricePerKilo - item.totalQuantity * item.price).toFixed(2) }}
                    </span>
                    <span
                      v-else
                      class="text-success"
                      style="white-space: nowrap;"
                    >
                      {{ $t('Refund') }}: ₪
                      {{ (item.totalQuantity * item.price - item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.pricePerKilo).toFixed(2) }}
                    </span>
                  </div>
                </div>

                <!-- Normal items -->
                <div v-else>
                  <span
                    v-if="!item.wantRefund && item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) - item.totalQuantity > 0"
                    class="text-error"
                  >
                    לתשלום ₪
                    {{ numberFormat((item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) - item.totalQuantity) * item.price) }}
                  </span>
                  <span
                    v-else-if="item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) - item.totalQuantity < 0"
                    class="text-success"
                  >
                    {{ $t('זיכוי') }} ₪
                    {{ numberFormat((item.totalQuantity - item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0)) * item.price) }}
                  </span>
                  <span v-else>-</span>
                </div>
              </td>

              <!-- Refund checkbox -->
              <td class="bg-light">
                <VCheckbox
                  v-if="!item.weightUpdateItem && item.receivedInputs.reduce((sum, v) => sum + Number(v || 0), 0) > item.totalQuantity"
                  v-model="item.wantRefund"
                  :label="$t('ברצוני להחזיר')"
                />
              </td>
            </tr>
          </tbody>

        </VTable>

        <!-- Totals -->
        <VCard class="mt-6 pa-4">
          
        </VCard>

        <VBtn type="submit" class="mt-4">{{ $t('שליחה') }}</VBtn>
      </VForm>
    </VContainer>

    <VContainer v-else>
      <VCard>
        <VCardText>{{ $t('No order items available') }}</VCardText>
      </VCard>
    </VContainer>

    <Footer />
  </div>

  <VDialog
    v-model="showLoader"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
</template>
