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
import AddressContent from '@/views/wizard-examples/checkout/Address.vue'
import CartContent from '@/views/wizard-examples/checkout/Cart.vue'
import ConfirmationContent from '@/views/wizard-examples/checkout/Confirmation.vue'
import PaymentContent from '@/views/wizard-examples/checkout/Payment.vue'
import googleHome from '@images/pages/google-home.png'
import iphone11 from '@images/pages/iphone-11.png'
import customAddress from '@images/svg/address.svg'
import customCart from '@images/svg/cart.svg'
import customPayment from '@images/svg/payment.svg'
import customTrending from '@images/svg/trending.svg'
import { useConfigStore } from '@core/stores/config'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
import axios from 'axios'

const { numberFormat,numberFormatForPay } = useHelper()

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()

const formData = ref()
const orderItems = ref([])
const isFormValid = ref(false)
const refForm = ref()
const products = ref([])
const route = useRoute('profile-checkout')
const router = useRouter()
const user = ref()
user.value = authStore.fuserData

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/get-user-details`))

const userData = computed(() => adminDetail.value)
//console.log(userData.value)

const checkoutSteps = [
  {
    title: 'Cart',
    icon: customCart,
  },
  {
    title: 'Address',
    icon: customAddress,
  },
  {
    title: 'Payment',
    icon: customPayment,
  },
  {
    title: 'Confirmation',
    icon: customTrending,
  },
]




const currentStep = ref(0)

const { data: orderData, execute: fetchOrder } = await useApi(
  createUrl(`/received-items-list`)
);

//const order = computed(() => orderData.value)

const orderItemsData = computed(() => orderData.value.allItems)
const order = computed(() => orderData.value.weightAdjustOrders)
const transactions = computed(() => orderData.value.transactions)

orderItems.value = orderItemsData.value




const errors = ref({
  status: undefined,
  comment: undefined,
  userID: undefined,
  vat: undefined,
  vatType: undefined,
  discountType: undefined,
  discount: undefined,

  // NEW: For per-item errors
  products: [],
})


const showLoader = ref(false)




const isShowPay = ref(false)
const hasItems = ref(false)

const saveReceivedItems = async () => {
  const receivedInputs = {};

  // Collect all dynamicInputs for items that can receive
  orderItems.value.forEach(item => {
    if (item.dynamicInputs && item.dynamicInputs.length) {
      receivedInputs[item._id] = {
        values: item.dynamicInputs,
        price: item.price,
        quantity: item.quantity,
        productID: item.productID?._id,
        productID: item.productID?._id,
        pricePerKilo: Number(item.productID?.pricePerKilo ?? 0),
      };
    }
  });

  if (Object.keys(receivedInputs).length === 0) {
    toast.info('No inputs to save.');
    return;
  }

  showLoader.value = true;

  try {
    const res = await $api(`/update/received-items`, {
      method: 'POST',
      body: { receivedInputs, orderID: order.value?._id || null },
      onResponseError({ response }) {
        const firstError = Object.values(response._data.errors || {})[0]?.msg;
        if (firstError) toast.error(firstError);
        showLoader.value = false;
      }
    });
    fetchOrder()
    loadNedarimIframe()

    hasItems.value = true
    isShowPay.value = true
    toast.success(t('Received items saved successfully!'));

  } catch (err) {
    toast.error(err.message || 'Failed to save received items.');
  } finally {
    showLoader.value = false;
  }
};




// const totalDues = computed(() => {
//   const total = orderItems.value.reduce((sum, item) => {
//     const price = Number(item.price || 0)
//     const pricePerKilo = Number(item.productID?.pricePerKilo || 0)
//     const quantity = Number(item.quantity || 0)
//     const expectedAmount = quantity * price
//     const receivedWeight = (item.dynamicInputs || []).reduce((s, w) => s + Number(w || 0), 0)
//     const receivedAmount = receivedWeight * pricePerKilo

//     // positive → extra to pay, negative → return
//     return sum + (receivedAmount - expectedAmount)
//   }, 0)

//   return parseFloat(total.toFixed(2))
// })

const totalDues = computed(() => {
  const total = (orderItems.value || []).reduce((sum, item) => {
    const price = Number(item?.price) || 0
    const pricePerKilo = Number(item?.productID?.pricePerKilo) || 0
    const quantity = Number(item?.quantity) || 0
    const expectedAmount = quantity * price

    // normalize inputs: ensure it's always an array of clean numbers
    const inputs = Array.isArray(item?.dynamicInputs) ? item.dynamicInputs : []
    const numbers = inputs.map(w => Number(w) || 0)

    const hasValidWeight = numbers.some(n => n > 0)
    if (!hasValidWeight) {
      return sum // skip item
    }

    const receivedWeight = numbers.reduce((s, n) => s + n, 0)
    const receivedAmount = receivedWeight * pricePerKilo

    return sum + (receivedAmount - expectedAmount)
  }, 0)

  return Number(total.toFixed(2))
})





const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      saveReceivedItems()
  })
}

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
        FirstName: userData.value.firstName,
        LastName: userData.value.lastName,
        Street: userData.value.street,
        City: userData.value.cityID?.nameHe,
        Phone: userData.value.phone,
        Mail: userData.value.email,
        Amount: numberFormatForPay(order.value.total),
        Tashlumim: '1',
        Param1: userData.value.israeliIDNumber,
        Param2: order.value._id,
        Comment: 'עדכון משקל',
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
        israeliIDNumber: userData.value.israeliIDNumber,      
        orderId: order.value?._id,
        paymentStatus: 'Pending',  
        Value: data.Value         
      }

      createTransaction(payload)
    }
  }
}

onMounted(async () => {
  if (order.value) {
    await loadNedarimIframe()
  }
  orderItems.value.forEach(item => {
    if(item.receivedItem){
      hasItems.value = true
    }
  })
})

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
  <div class="checkout-page product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ $t('Order Details') }}</h2>
        </VCardText>
      </VContainer>
    </div>
    <VContainer v-if="orderItems && orderItems.length">
      <div class="checkout-card hideArrow">
        <VCard>
          <VCardText>
            <VForm 
              ref="refForm"
              v-model="isFormValid"
              @submit.prevent="onSubmit"
            >
              <VRow v-if="orderItems">
                <VCol
                  cols="12"
                  lg="8"
                >
                  <div
                    v-if="orderItems.length"
                    class="border rounded"
                  >
                    <template
                      v-for="(item, index) in orderItems"
                      :key="item.productID._id"
                    >
                      <div
                        v-if="item.dynamicInputs.length"
                        class="d-flex align-center gap-4 pa-6 position-relative flex-column flex-sm-row"
                        :class="index ? 'border-t' : ''"
                      >
                        <div v-if="item.productID?.image">
                          <VImg
                            width="140"
                            :src="item.productID?.image"
                          />
                        </div>
                        <div v-else>
                          <VImg
                            width="140"
                            src="/images/no-img.jpg"
                          />
                        </div>

                        <div class="d-flex w-100 flex-column flex-md-row">
                          <div class="d-flex flex-column gap-y-2" style="min-width: 200px;">
                            <h6 class="text-h6">
                              {{ item.productID?.name }}
                            </h6>
                            <div v-if="item.variations">
                              <p v-if="item.variations.size">{{ $t('Size') }}: {{ item.variations.size }}</p>
                              <p v-if="item.variations.color">{{ $t('Color') }}: {{ item.variations.color }}</p>
                              <p v-if="item.variations.sleeveLength">{{ $t('Sleeve Length') }}: {{ item.variations.sleeveLength }}</p>
                              <p v-if="item.variations.pocket">{{ $t('Pocket') }}: {{ item.variations.pocket }}</p>
                            </div>
                            <p>
                              {{ $t('Qty') }}: {{ item.quantity }}
                            </p>

                            <div v-if="item.dynamicInputs.length" style="max-width: 200px;">
                              <div v-for="(input, index) in item.dynamicInputs" :key="index" class="mb-4">
                                <label class="block font-medium mb-1">{{ $t('משקל קופסא') }}</label>
                                <AppTextField
                                  type="number"
                                  v-model="item.dynamicInputs[index]"
                                  :placeholder="$t('Enter weight')"
                                  class="rounded p-1 w-full"
                                  :rules="[requiredValidator]"
                                  :disabled="order && (order.status!='Pending' || transactions.length)"
                                />
                              </div>
                            </div>
                          </div>

                          <VSpacer />

                          <div
                            class="d-flex flex-column mt-5 text-start text-md-end"
                            :class="$vuetify.display.mdAndDown ? 'gap-2' : 'gap-4'"
                          >
                            <div class="d-flex text-base align-self-md-end" style="flex-direction: column;">
                              <div class="text-primary">
                                <span style="text-transform: uppercase;">₪</span> {{ item.price }}
                              </div>
                              
                              <div v-if="item.dynamicInputs && item.dynamicInputs.some(w => Number(w) > 0)">
                                <div v-if="item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo !== item.quantity * item.price">
                                  <span style="white-space: nowrap;" v-if="item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo > item.quantity * item.price" class="text-error">
                                    {{ $t('לתשלום') }}: ₪ {{ (item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo - item.quantity * item.price).toFixed(2) }}
                                  </span>
                                  <span v-else class="text-success" style="white-space: nowrap;">
                                    {{ $t('Refund') }}: ₪ {{ (item.quantity * item.price - item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo).toFixed(2) }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>

                  <!-- 👉 Empty Cart -->
                  <div v-else>
                    <VImg :src="emptyCartImg" />
                  </div>
                </VCol>

                <VCol
                  cols="12"
                  lg="4"
                >
                  <VCard
                    v-if="totalDues"
                    flat
                    variant="outlined"
                  >
                    

                    <!-- 👉 Price details -->
                    <VCardText>
                      <h6 class="text-h6 mb-4">
                        {{ $t('פרטים') }}
                      </h6>
                      <div class="d-flex justify-space-between mb-2">
                        <span v-if="totalDues > 0" class="text-error">{{ $t('לתשלום') }}</span>
                        <span v-else-if="totalDues < 0" class="text-success">{{ $t('Refund') }}</span>
                        <span v-else>{{ $t('No dues') }}</span>
                        <span v-if="totalDues">₪ {{ Math.abs(totalDues).toFixed(2) }}</span>
                      </div>
                    </VCardText>

                    <VDivider v-if="totalDues" />

                    <VCardText class="d-flex justify-space-between pa-6" v-if="totalDues">
                      <h6 v-if="totalDues > 0" class="text-error text-h6">
                        {{ $t('Total') }}
                      </h6>
                      <h6 v-else-if="totalDues < 0" class="text-success text-h6">
                        {{ $t('Total') }}
                      </h6>
                      <h6 class="text-h6" v-if="totalDues">
                        ₪ {{ Math.abs(totalDues).toFixed(2) }}
                      </h6>
                    </VCardText>
                  </VCard>

                  

                  <div v-if="!transactions.length && order && order.status === 'Pending'">
                    <VBtn
                      block
                      class="mt-4"
                      :disabled="order && (order.status!='Pending' || transactions.length)"
                      type="submit"
                    >
                      {{ $t('Update weight') }}
                    </VBtn>
                  </div>
                  <div v-if="order && transactions.length">
                    <p style="text-align: center; margin-top: 20px;"> תודה רבה על העדכון משקלים

<br>התשלום נקלט בהצלחה
<br>מספר אישור: {{ transactions[0].transactionId }}
</p>
                  </div>
                  <div v-else-if="order && totalDues > 0 && order.total == totalDues && order.status=='Pending'">
                    <div v-if="nedarimIframeHtml" v-html="nedarimIframeHtml"></div>

                    <VBtn v-if="nedarimIframeHtml" type="button" @click="pay" :disabled="isClickPayment" class="TextBox">{{ $t('Make Payment') }}</VBtn>

                    <div v-if="errorMessage" style="color: #f00">{{ errorMessage }}</div>
                  </div>
                  <div v-else-if="order && totalDues < 0 && order.total == totalDues">
                    <p style="text-align: center; margin-top: 20px;">תודה רבה על העדכון משקלים <br>

אנחנו נבצע לכם זיכוי לכרטיס אשראי שבאמצעותינו בצעתם את ההזמנה בהקדם האפשרי<br>

תודה רבה</p>
                  </div>
                  <div v-else-if="order && order.total == totalDues">
                    <p style="text-align: center; margin-top: 20px;">תודה רבה על העדכון משקלים</p>
                  </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
          <VDivider />
        </VCard>
      </div>
    </VContainer>

    <VContainer v-else>
      <div class="checkout-card">
        <VCard>
          <VCardText>
            <h3>{{ $t('You are not eligible to view this page content') }}</h3>
          </VCardText>
        </VCard>
      </div>
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

  <VDialog
    v-model="isClickPayment"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
</template>

<style lang="scss">
.checkout-card {
  margin-block: 10.5rem 5.25rem;
}

@media (max-width: 960px) and (min-width: 600px) {
  .checkout-page {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}

@media (max-width: 600px) {
  .checkout-card {
    margin-block-start: 6rem;
  }
}
</style>
