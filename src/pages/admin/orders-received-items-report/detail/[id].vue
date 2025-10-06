<script setup>
import useHelper from "@/mixins/helper"
import axios from 'axios';
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
const { numberFormat } = useHelper()

definePage({
  meta: {
    action: ['admin-view-orders'],
    subject: ['View Orders'],
    navActiveLink: 'admin-orders-received-items-report',
    title: 'Order Details',
  },
})

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()
const ability = useAbility()
const showLoader = ref(false)
const itemsPerPage = ref(1000)
const hasItems = ref(false)
const remarks = ref()

const resolveStatusVariantAndIcon = status => {
  if (status === 'Processing') {
    return {
      variant: 'info',
      title: status,
    }
  } else if (status === 'Delivered') {
    return {
      variant: 'primary',
      title: status,
    }
  } else if (status === 'Completed') {
    return {
      variant: 'success',
      title: status,
    }
  } else if (status === 'Cancelled') {
    return {
      variant: 'error',
      title: status,
    }
  }
  
  return {
    variant: 'secondary',
    title: status,
  }
}

const route = useRoute('admin-orders-detail-id')
const router = useRouter()

const orderItems = ref([])

const {
  data: orderData, execute: fetchOrders, error,
} = await useApi(createUrl(`/admin/orders-received-items-form/${ route.params.id }`))

if(error.value == 'Unauthorized') {
// Remove "accessToken" from cookie
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilityRules')

  // Reset ability to initial ability
  ability.update([])

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

  // Redirect to login page
  router.push({ name: 'admin-login' })

  location.href = '/admin/login'
}


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
      rowID: item.productID,
      receivedInputs,
      wantRefund: item.wantRefund ?? false
    }
  })
}

const onReset = () => {
  orderDialogShown.value = false
}



const downloadOrderPDF = async (order) => {
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/admin/orders-received-items-form-pdf-download`,
      { orderID: order._id }, // POST data
      {
        responseType: 'blob', // important for PDF
        headers: {
          'Authorization': `Bearer ${authStore.accessToken}`, // ✅ pass bearer token
          'Content-Type': 'application/json',
        },
      }
    );

    // res.data is the PDF blob
    const blob = new Blob([res.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `order_${order._id}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

    showLoader.value = false

  } catch (err) {
    console.error('Download error:', err);
    
    showLoader.value = false

    //alert('Failed to download PDF');
  }
};

// Send pdf
const isShowConfirmModal = ref(false)
const currentOrderData = ref()
const sendOrderPDF = (order) =>{
  isShowConfirmModal.value = true
  currentOrderData.value = order
}

const sendPdfToUser = async() =>{
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/admin/orders-received-items-form-pdf-send`,
      { orderID: currentOrderData.value?._id }, // POST data
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.accessToken}`, // your JWT token
        },
      }
    );
    
    
    showLoader.value = false

    if (res.data.success) {
      isShowConfirmModal.value = false
      toast.success('קובץ ה-PDF נשלח בהצלחה!');
    } else {
      toast.error('Failed to send PDF');
    }

    

  } catch (err) {
    toast.success('PDF sent successfully!');
    console.error('Download error:', err);
    
    showLoader.value = false

    //alert('Failed to download PDF');
  }
}

const recalculated = computed(() => {
  let newSubTotal = 0

  orderItems.value.forEach(item => {
    const received = item.receivedInputs.reduce((sum, v) => sum + Number(v || 0), 0)
    const ordered  = Number(item.totalQuantity || 0)
    const price    = Number(item.price || 0)

    if (item.weightUpdateItem) {
      newSubTotal += received * Number(item.pricePerKilo || item.price || 0)
    } else {
      //newSubTotal += received * Number(item.price || 0)
      const effectiveQty = item.wantRefund && received > ordered ? ordered : received
      newSubTotal += effectiveQty * price
    }
  })

  // Calculate percentage discount
  const percentageDiscount = (newSubTotal * (orderData.value.discountPercentage || 0)) / 100
  const fixedDiscount = Number(orderData.value.discountFixed || 0)

  // Apply cap rule
  const newDiscount = Math.min(percentageDiscount, fixedDiscount)

  // Final total
  const newFinalTotal = newSubTotal - newDiscount + Number(deliveryCharge.value || 0)

  // Difference from original
  const diff = newFinalTotal - originalTotal.value

  return {
    newSubTotal: (newSubTotal + Number(deliveryCharge.value || 0)).toFixed(2),
    newDiscount: newDiscount.toFixed(2),
    newFinalTotal: newFinalTotal.toFixed(2),
    diff: diff.toFixed(2),
  }
})
</script>

<template>
  <div class="checkout-page product-page recived_items_report admin_area">
    <!-- 👉 Header  -->
    <div 
      v-if="order"
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <VRow>
        <VCol
          cols="12"
          md="12"
          lg="12"
        >
          <VBreadcrumbs
            class="px-0 pb-2 pt-0 help-center-breadcrumbs"
            :items="[{ title: $t('Received Items report'), to: { name: 'admin-orders-received-items-report' }, class: 'text-primary' }, { title: order._id }]"
          />
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Order ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(order.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(order.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn @click="sendOrderPDF(order)" prepend-icon="tabler-send">{{ $t('Send PDF') }}</VBtn>
        <VBtn @click="downloadOrderPDF(order)" prepend-icon="tabler-download">{{ $t('Download PDF') }}</VBtn>
        
      </div>
    </div>
    <!-- 👉 Order Details  -->
    <VContainer v-if="orderItems.length">
      <VForm>
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
                      :disabled="order"
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
                    :disabled="order"
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
                  :disabled="order"
                />
              </td>
            </tr>
          </tbody>

        </VTable>

        <VCard class="mt-6 pa-4">
          <VRow style="justify-content: flex-end;">
            <VCol md="6">
              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('סה”כ במקור') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(orginalSubtotal) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('הנחה שהתקבלה') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(originalDiscount) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('משלוח') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(deliveryCharge) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('שולם במקור') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(originalTotal) }}
                </VCol>
              </VRow>

              <VDivider class="my-5" />

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('סה”כ') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(recalculated.newSubTotal) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>הנחה:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(recalculated.newDiscount) }}
                </VCol>
              </VRow>

              <VRow justify="space-between">
                <VCol cols="auto">
                  <strong>{{ $t('סה”כ הזמנות') }}:</strong>
                </VCol>
                <VCol cols="auto">
                  ₪{{ numberFormat(recalculated.newFinalTotal) }}
                </VCol>
              </VRow>

              <VDivider class="my-5" />

              <VRow justify="space-between">
                <VCol cols="auto" v-if="Number(recalculated.diff) < 0">
                  <strong class="text-success">הפרש תשלום\זיכוי:</strong>
                </VCol>
                <VCol cols="auto" v-else-if="Number(recalculated.diff) > 0">
                  <strong class="text-error">הפרש תשלום\זיכוי:</strong>
                </VCol>
                <VCol cols="auto" v-else>
                  <strong class="text-error">הפרש תשלום\זיכוי:</strong>
                </VCol>
                <VCol
                  cols="auto"
                  :class="Number(recalculated.diff) < 0 ? 'text-success' : 'text-error'"
                >
                  <template v-if="Number(recalculated.diff) < 0">
                    -₪{{ numberFormat(Math.abs(recalculated.diff)) }}
                  </template>
                  <template v-else>
                    ₪{{ numberFormat(recalculated.diff) }}
                  </template>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VCard>

        <VCard
          v-if="transactions.length"
          class="mb-6"
          style="margin-top: 30px"
        >
          <VCardItem>
            <template #title>
              <h5 class="text-h5">
                {{ $t('Transactions') }}
              </h5>
            </template>
          </VCardItem>

          <VDivider />

          <VDataTable
            :headers="[
              { title: t('Transaction ID'), key: 'transactionId' },
              { title: t('Amount'), key: 'amount' },
              { title: t('Status'), key: 'paymentStatus' },
              { title: t('Date'), key: 'transactionTime' }
            ]"
            :items="transactions"
            item-value="transactionId"
            class="text-no-wrap"
          >
            <template #[`item.amount`]="{ item }">
              {{ item.amount }}
            </template>

            <template #[`item.currency`]="{ item }">
              {{ item.currency }}
            </template>

            <template #[`item.paymentStatus`]="{ item }">
              <VChip
                label
                :color="item.paymentStatus === 'Paid' ? 'success' : item.paymentStatus === 'Failed' ? 'error' : 'warning'"
                size="small"
              >
                {{ item.paymentStatus }}
              </VChip>
            </template>

            <template #[`item.transactionTime`]="{ item }">
              {{ new Date(item.transactionTime).toLocaleString() }}
            </template>
          </VDataTable>
        </VCard>
      </VForm>
    </VContainer>

    <VContainer v-else>
      <VCard>
        <VCardText>{{ $t('No order items available') }}</VCardText>
      </VCard>
    </VContainer>
    

    <VDialog
      v-model="showLoader"
      persistent
    >
      <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
    </VDialog>

    <VDialog
    v-model="isShowConfirmModal"
    class="v-dialog-sm"
  >
    
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isShowConfirmModal = !isShowConfirmModal" />

    <!-- Dialog Content -->
    <VCard :title="$t('Send PDF')">
      <VCardText>
        {{ $t('We are sending email in') }} <strong>{{ currentOrderData.userID?.email }}</strong>
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isShowConfirmModal = false"
        >
          {{ $t('Cancel') }}
        </VBtn>
        <VBtn @click="sendPdfToUser">
          {{ $t('Submit') }}
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  </div>
</template>
