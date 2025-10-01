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
const orginalSubtotal = computed(() => orderData.value.subTotal)
const deliveryCharge = computed(() => orderData.value.deliveryCharge)
const originalTotal = computed(() => orderData.value.total)
const originalDiscount = computed(() => orderData.value.totalDiscount)

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

const totals = computed(() => {
  let due = 0      // customer must pay
  let refund = 0   // customer will receive

  orderItems.value.forEach(item => {
    const received = item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0)
    const ordered  = Number(item.totalQuantity || 0)
    const price    = Number(item.price || 0)

    if (item.weightUpdateItem) {
      // ---- weight based ----
      const unitPrice = Number(item.pricePerKilo || item.price || 0)
      const diff = received * unitPrice - ordered * price
      if (diff > 0) due += diff
      else if (diff < 0) refund += Math.abs(diff)
    } else {
      // ---- normal items ----
      const qtyDiff = received - ordered
      if (!item.wantRefund && qtyDiff > 0) {
        // received more → pay
        due += qtyDiff * price
      } else if (qtyDiff < 0) {
        // received less → refund
        refund += Math.abs(qtyDiff) * price
      }
    }
  })

  return { due, refund }
})
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
                  <div v-if="item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * (item.pricePerKilo || item.price) !== item.totalQuantity * item.price">
                    <span
                      v-if="item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * (item.pricePerKilo || item.price) > item.totalQuantity * item.price"
                      class="text-error"
                      style="white-space: nowrap;"
                    >
                      {{ $t('לתשלום') }}: ₪
                      {{ (item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * (item.pricePerKilo || item.price) - item.totalQuantity * item.price).toFixed(2) }}
                    </span>
                    <span
                      v-else
                      class="text-success"
                      style="white-space: nowrap;"
                    >
                      {{ $t('Refund') }}: ₪
                      {{ ( (Number(item.totalQuantity || 0) * Number(item.price || 0)) - (item.receivedInputs.reduce((sum, w) => sum + Number(w || 0), 0) * Number((item.pricePerKilo || item.price) || 0)) ).toFixed(2) }}
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
          <VRow style="justify-content: flex-end;">
            <VCol md="6">
              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Total Payed') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(orginalSubtotal) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Original Discount') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(originalDiscount) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Delivery Payed') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(deliveryCharge) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Original payed') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(originalTotal) }}
                </VCol>
              </VRow>

              <VDivider class="my-5" />

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Total to Pay') }}:</strong>
                </VCol>
                <VCol cols="auto" class="text-error">
                  ₪{{ numberFormat(totals.due) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Total Refund') }}:</strong>
                </VCol>
                <VCol cols="auto" class="text-success">
                  ₪{{ numberFormat(totals.refund) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('Total') }}:</strong>
                </VCol>
                <VCol cols="auto" :class="(totals.due - totals.refund) < 0 ? 'text-success' : 'text-error'">
                  <template v-if="(totals.due - totals.refund) < 0">
                    -₪{{ numberFormat(Math.abs(totals.due - totals.refund)) }}
                  </template>
                  <template v-else>
                    ₪{{ numberFormat(totals.due - totals.refund) }}
                  </template>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
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
