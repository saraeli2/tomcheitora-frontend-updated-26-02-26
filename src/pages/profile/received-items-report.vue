<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Checkout'
  },
})
import { useRouter } from 'vue-router'
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
const router = useRouter()

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

//console.log(order.value)

orderItems.value = orderItemsData.value

if(order.value){
  remarks.value = order.value?.comment
}

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/get-user-details`))

const user = computed(() => adminDetail.value)

onMounted(async () => {
  loadOrderItems(orderItemsData.value)
  if (order.value) {
    await loadNedarimIframe()
  }
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

const showLoader = ref(false)

const saveReceivedItemsForm = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      saveReceivedItemsFormSubmit()
  })
}

const saveReceivedItemsFormSubmit = async () => {
  //console.log(orderItems.value);
  try {
    const receivedInputs = {}

    orderItems.value.forEach(item => {
      receivedInputs[item.rowID] = {
        values: item.receivedInputs.map(String),
        productID: item.productID?._id,
        wantRefund: item.wantRefund ? true : false
      }
    })

    if (!Object.keys(receivedInputs).length) {
      toast.info('No received items to save.')
      return
    }

    const payload = {
      orderID: order.value?._id || null,
      receivedInputs,
      diff: parseFloat(recalculated.value.diff),
      orderItems: orderItems.value,
      recalculated: recalculated.value,
      orginalSubtotal: orginalSubtotal.value,
      originalDiscount: originalDiscount.value,
      deliveryCharge: deliveryCharge.value,
      originalTotal: originalTotal.value,
    }

    showLoader.value = true

    await $api('/received-items-form', {
      method: 'POST',
      body: payload
    })

    await fetchOrder()
    //toast.success('Received items saved successfully!')
    if(order.value.total != 0){
      router.replace(`/profile/payment-refund`)
    }
    
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


// For payment
const transactionStatus = ref('') // success, error, or ''
const errorMessage = ref('')
const loadNedarimIframe = async () => {
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/payment/iframe`,
      {
        firstName: user.value.firstName,
        lastName: user.value.lastName,
        email: user.value.email,
        street: user.value.street,
        uniqueKey: order.value?.orderNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${authStore.faccessToken}`,  // 👈 frontend token
        },
      }
    )

    nedarimIframeHtml.value = res.data.iframeHtml
  } catch (err) {
    console.error('Failed to load payment iframe:', err)
    toast.error('Payment page could not be loaded.')
  } finally {
    showLoader.value = false
  }

  window.addEventListener('message', handleIframeMessage, false)
}

const isClickPayment = ref(false)

const pay = () => {
  
  isClickPayment.value = true;
  //showLoader.value = true

  const iframeWindow = document.getElementById('NedarimFrame').contentWindow

  iframeWindow.postMessage(
    {
      Name: 'FinishTransaction2',
      Value: {
        Mosad: import.meta.env.VITE_NEDARIM_TERMINAL,
        ApiValid: import.meta.env.VITE_NEDARIM_API_PASS,
        PaymentType: 'Ragil', // or HK, CreateToken
        Currency: '1',
        Zeout: order.value?.orderNumber,
        FirstName: user.value.firstName,
        LastName: user.value.lastName,
        Street: user.value.street,
        City: user.value.cityID?.nameHe,
        Phone: user.value.phone,
        Mail: user.value.email,
        Amount: numberFormatForPay(order.value.total),
        Tashlumim: '1',
        Param1: user.value.israeliIDNumber,
        Param2: order.value._id,
        Comment: 'עדכון חוסרים\עודפים',
        CallBack: `${import.meta.env.VITE_API_BASE_URL}/payment/callback`,
        CallBackMailError: import.meta.env.VITE_PAYMENTCHECKEMAIL
      },
    },
    '*'
  )
}

const nedarimIframeHtml = ref('')

const handleIframeMessage = (event) => {
  const data = event.data
  showLoader.value = false

  //onsole.log(data);

  if (data.Name === 'Height') {
    document.getElementById('NedarimFrame').style.height =
      parseInt(data.Value) + 15 + 'px'
  }

  if (data.Name === 'TransactionResponse') {
    isClickPayment.value = false

    if (data.Value.Status === 'Error') {
      transactionStatus.value = 'error'
      errorMessage.value = data.Value.Message
      showLoader.value = false

    } else {
      errorMessage.value = ''

      const payload = {
        israeliIDNumber: user.value.israeliIDNumber,      
        orderId: order.value?._id,
        paymentStatus: 'Pending',  
        Value: data.Value         
      }

      createTransaction(payload)
    }
  }
}


const createTransaction = async payload => {
  showLoader.value = false
  try {
    const response = await $api('/transactions', {
      method: 'POST',
      body: payload,
      credentials: 'include',
      onResponseError({ response }) {
        //toast.error(response?._data?.message || 'Failed to save transaction')
        showLoader.value = false
      }
    })
   
    window.location.reload()

  } catch (err) {
    console.error('Failed to save transaction:', err)
    showLoader.value = false
    transactionStatus.value = 'error'
  }
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

    <VContainer v-if="orderItems.length && user.allowedIsraelUser">
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

        <!-- Totals -->
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

        <div class="button_wrapper text-center">
          <VBtn v-if="!order && recalculated.diff > 0" type="submit" class="mt-4">
            לתשלום
          </VBtn>
          <VBtn v-if="!order && recalculated.diff <= 0" type="submit" class="mt-4">
            המשך
          </VBtn>
        </div>
      </VForm>
      <div class="button_wrapper text-center" v-if="order && recalculated.diff > 0 && (!transactions || !transactions.length)">
        <VBtn type="button" to="/profile/payment-refund" class="mt-4">
          לתשלום
        </VBtn>
      </div>

      <div v-if="order && (transactions && transactions.length)">
        <p style="text-align: center; margin-top: 20px;">תודה רבה על העדכון פריטים

<br>התשלום נקלט בהצלחה
<br>מספר אישור: {{ transactions[0].transactionId }}
<br>בברכת חג שמח, תומכי תורה
</p>
      </div>
      
      <div v-else-if="order && recalculated.diff < 0">
        <p style="text-align: center; margin-top: 20px;"><br>תודה רבה על העדכון משקלים
<br>
אנחנו נבצע לכם זיכוי לכרטיס אשראי שבאמצעותינו בצעתם את ההזמנה בהקדם האפשרי<br>

בברכת חג שמח, תומכי תורה<br>

תודה רבה</p>
      </div>
      <div v-else-if="order && order.total == 0">
        <p style="text-align: center; margin-top: 20px;">
      תודה רבה כל העדכון
              <br>בברכת חג שמח, תומכי תורה</p>
      </div>
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
