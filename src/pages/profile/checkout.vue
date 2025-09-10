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
import { ref, onMounted } from 'vue'
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
const isClickPayment = ref(false)


// for payment
const nedarimIframeUrl = ref('')  // store iframe URL
const showPaymentIframe = ref(false)
const showLoader = ref(false)

const checkoutSteps = [
  {
    title: t('Cart'),
    icon: customCart,
  },
  {
    title: t('Address'),
    icon: customAddress,
  },
  {
    title: t('Payment'),
    icon: customPayment,
  },
  {
    title: t('Confirmation'),
    icon: customTrending,
  },
]




const currentStep = ref(0)
const user = ref()

const {
  data: orderData, execute: fetchOrder,
} = await useApi(createUrl(`/pending-order?userId=${authStore.fuserData._id}`))

//const order = computed(() => orderData.value)

const order = computed(() => orderData.value)

formData.value = orderData.value
if(orderData.value){
  orderItems.value = orderData.value.orderItems
  user.value = orderData.value.userID
}


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

const validSale = ref(false)
const now = new Date()
if(order.value){
  const end = new Date(order.value.lockTime)

  const isValidTime = now <= end

  if (isValidTime) {
    validSale.value = true
  }
}


let debounceTimer = null

const onQtyChange = async () => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    
    submitQtyChange()
    
  }, 1000)
}

const submitQtyChange = async() => {
  showLoader.value = true
  try {
    const cleanedOrderItems = orderItems.value.map(item => ({
      ...item,
      productID: item.productID?._id || item.productID
    }))

    const res = await $api(`/orders/${ order.value?._id }`, {
      method: 'PATCH',
      body: {
        saleID: order.value?.saleID._id,
        orderID: order.value?._id,
        status: order.value.status,
        userID: authStore.fuserData._id,
        products: cleanedOrderItems,
      },
      onResponseError({ response }) {
        console.log(response);
        
        const firstError = Object.values(response._data.errors)[0].msg
        
        toast.error(firstError)
        setTimeout(() => fetchOrderAndSyncOrderItems(), 1500)
        showLoader.value = false
      },
    })

    await nextTick(async () => {
      toast.success(res.message)
      await fetchOrderAndSyncOrderItems()
      showLoader.value = false
    })
  } catch (err) {
    //console.log(err)
  }
}

const fetchOrderAndSyncOrderItems = async () => {
  await fetchOrder()
  orderItems.value = order.value?.orderItems || []
}

const removeItem = index => {
  orderItems.value.splice(index, 1)
  //onQtyChange()
  removeItemFromCart()
}

const removeItemFromCart = async() => {
  showLoader.value = true
  try {
    const cleanedOrderItems = orderItems.value.map(item => ({
      ...item,
      productID: item.productID?._id || item.productID
    }))

    const res = await $api(`/orders/item-remove/${ order.value?._id }`, {
      method: 'POST',
      body: {
        saleID: order.value?.saleID._id,
        orderID: order.value?._id,
        status: order.value.status,
        userID: authStore.fuserData._id,
        products: cleanedOrderItems,
      },
      onResponseError({ response }) {
        console.log(response);
        
        const firstError = Object.values(response._data.errors)[0].msg
        
        toast.error(firstError)
        setTimeout(() => fetchOrderAndSyncOrderItems(), 1500)
        showLoader.value = false
      },
    })

    await nextTick(async () => {
      toast.success(res.message)
      await fetchOrderAndSyncOrderItems()
      showLoader.value = false
    })
  } catch (err) {
    //console.log(err)
  }
}

const removeAllItems = () => {
  showLoader.value = true
  orderItems.value = [];
  onQtyChange()
}


// Address tab
const nextStep = () => {
  currentStep.value = currentStep.value + 1
}

//Payment
const cardFormData = ref({
  cardNumber: null,
  cardName: '',
  cardExpiry: '',
  cardCvv: null,
  isCardSave: true,
})

const commonsyncCities = await $api('/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const stationOptions = computed(() => commonsyncCities.stationOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const stations = stationOptions.value.map(item => ({
  value: item._id,
  title: `${item.cityID?.nameHe} - ${item.name}`,
}))

const cityID = ref(null)
const flatNo = ref()
const houseNumber = ref()
const stationID = ref()
const street = ref()

if(user.value) {
  cityID.value = user.value.cityID
  flatNo.value = user.value.flatNo
  houseNumber.value = user.value.houseNumber
  street.value = user.value.street
  stationID.value = user.value.stationID
}

const isAgreeModalShow = ref(false);
const agree = ref()


const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

const submit = async () => {

  const formData = new FormData()

  if(cityID.value) {
    formData.append('cityID', cityID.value)
  }

  if(flatNo.value) {
    formData.append('flatNo', flatNo.value)
  }

  if(houseNumber.value) {
    formData.append('houseNumber', houseNumber.value)
  }

  if(stationID.value) {
    formData.append('stationID', stationID.value)
  }

  if(street.value) {
    formData.append('street', street.value)
  }

  

  if(user.value.communityID) {
    formData.append('communityID', user.value.communityID)
  }

  if(user.value._id) {
    try {
      const response = await $api(`/users/order-address/${ user.value._id }`, {
        method: 'PATCH',
        body: {
          cityID: cityID.value,
          flatNo: flatNo.value,
          houseNumber: houseNumber.value,
          stationID: stationID.value,
          orderID: order.value?._id,
          street: street.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })

      isAgreeModalShow.value = true;

      //currentStep.value = currentStep.value + 1

      //console.log('dfdf')

    } catch (err) {
      console.error('Failed to update station:', err)
    }


    // const response = await $api(`/users/order-address/${ user.value._id }`, {
    //   method: 'PATCH',
    //   formData,
    //   onResponseError({ response }) {
    //     errors.value = response._data.errors
    //   },
    // })

    // const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/order-address/${ user.value._id }`, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': `Bearer ${authStore.faccessToken}`,
    //   },
    // }).then(async response => {
    //   await nextTick(() => {
    //     currentStep.value = currentStep.value + 1
    //   })

    // })
    //   .catch(e => {
    //     errors.value = e.response.data.errors
    //   })
  }
}

const gotoNextStep = () => {
  isAgreeModalShow.value = false
  currentStep.value = currentStep.value + 1
}

const paymentMethod = ref('Credit/debit card')

if(order.value){
  const {
    data: orderDataupdate, execute: fetchOrderUpdatedOrder,
  } = await useApi(createUrl(`/orders/${ order.value?._id }`))

  order.value = computed(() => orderDataupdate.value)
  user.value = order.value.userID
}



const transactionStatus = ref('') // success, error, or ''
const errorMessage = ref('')

const onSubmitPayment = async() =>{
  try {
    const res = await $api(`/orders/update-status/${ order.value?._id }`, {
      method: 'POST',
      body: {
        paymentMethod: paymentMethod.value,
        status: 'Pending',
      },
      onResponseError({ response }) {
        //console.log(response._data.message)
        
        toast.error(t(response._data.message))
      },
    })

    await nextTick(async () => {
      currentStep.value = currentStep.value + 1
      fetchOrderUpdatedOrder()
      
    })
  } catch (err) {
  }
}

onMounted(async () => {
  if (order.value) {
    await loadNedarimIframe()
  }
})

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
        userId: user.value._id,      
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
    currentStep.value = currentStep.value + 1
    // Navigate to order details page
    //router.replace(`/profile/orders/${order.value?._id}`)
    //console.log('Transaction created');

  } catch (err) {
    console.error('Failed to save transaction:', err)
    //toast.error('Failed to save transaction. Please try again.')
    showLoader.value = false
    transactionStatus.value = 'error'
  }
}


const loadNedarimIframe = async () => {
  try {
    showLoader.value = true

    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/payment/iframe`, {
      firstName: user.value.firstName,
      lastName: user.value.lastName,
      email: user.value.email,
      city: cityID.value,
      street: street.value,
      uniqueKey: order.value?.orderNumber
    })

    nedarimIframeHtml.value = res.data.iframeHtml
  } catch (err) {
    console.error('Failed to load payment iframe:', err)
    toast.error('Payment page could not be loaded.')
  } finally {
    showLoader.value = false
  }

  window.addEventListener('message', handleIframeMessage, false)
}

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
        Street: street.value,
        City: cityID.value,
        Phone: user.value.phone,
        Mail: user.value.email,
        Amount: numberFormatForPay(order.value.total),
        Tashlumim: '1',
        Param1: user.value._id,
        Param2: order.value._id,
        CallBack: `${import.meta.env.VITE_API_BASE_URL}/payment/callback`,
        CallBackMailError: import.meta.env.VITE_PAYMENTCHECKEMAIL
      },
    },
    '*'
  )
}


// const handleAddAddress = async () => {
//   const isValid = await validateStock(orderItems)
//   if (isValid) {
//     nextStep() // move to next page/step only if stock is valid
//   }
// }

const validating = ref(false)

const handleAddAddress = async () => {
  showLoader.value = true
  validating.value = true
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/orders/validate-before-payment`, {
      orderID: order.value._id,
      userID: order.value.userID._id,
    })

    if (data.success) {
      showLoader.value = false
      nextStep() // proceed to payment step
    } else {
      toast.error(data.message)
      showLoader.value = false
    }
  } catch (err) {
    toast.error(err.response?.data?.message || 'Validation failed')
    showLoader.value = false
  } finally {
    validating.value = false
    showLoader.value = false
  }
}


</script>

<template>
  <div class="checkout-page product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ $t('Checkout') }}</h2>
        </VCardText>
      </VContainer>
    </div>
    <VContainer v-if="order">
      <div class="checkout-card">
        <VCard>
          <VCardText>
            <!-- 👉 Stepper -->
            <AppStepper
              v-model:current-step="currentStep"
              class="checkout-stepper"
              :items="checkoutSteps"
              :direction="$vuetify.display.mdAndUp ? 'horizontal' : 'vertical'"
              align="center"
            />
          </VCardText>
          <VDivider />
          <VCardText>
            <!-- 👉 stepper content -->
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
              :touch="false"
            >
              <VWindowItem>
                <VRow>
                  <VCol md="12">
                    <h5 class="text-h5 my-4">
                      {{ $t('My Shopping Bag') }} ({{ orderItems.length }}) <VBtn @click="removeAllItems" style="height: 32px;padding: 3px 12px !important;line-height: 15px;min-height: unset;font-size: 13px;" v-if="orderItems.length">{{ $t('Clear cart') }}</VBtn>
                    </h5>
                  </VCol>
                </VRow>
                <VRow v-if="orderItems.length">
                  <VCol
                    cols="12"
                    lg="8"
                  >
                    <!-- 👉 Offers alert -->

                    

                    <!-- 👉 Cart items -->
                    <div
                      v-if="orderItems.length"
                      class="border rounded"
                    >
                      <template
                        v-for="(item, index) in orderItems"
                        :key="item.productID._id"
                      >
                        <div
                          class="d-flex align-center gap-4 pa-6 position-relative flex-column flex-sm-row"
                          :class="index ? 'border-t' : ''"
                        >
                          <IconBtn
                            :disabled="!validSale"
                            class="checkout-item-remove-btn"
                            @click="removeItem(index)"
                          >
                            <VIcon

                              size="18"
                              icon="tabler-x"
                              class="text-disabled"
                            />
                          </IconBtn>

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
                            <div class="d-flex flex-column gap-y-2">
                              <h6 class="text-h6">
                                {{ item.productID?.name }}
                              </h6>

                              <div v-if="item.variations">
                                <p v-if="item.variations.size">{{ $t('Size') }}: {{ item.variations.size }}</p>
                                <p v-if="item.variations.color">{{ $t('Color') }}: {{ item.variations.color }}</p>
                                <p v-if="item.variations.sleeveLength">{{ $t('Sleeve Length') }}: {{ item.variations.sleeveLength }}</p>
                                <p v-if="item.variations.pocket">{{ $t('Pocket') }}: {{ item.variations.pocket }}</p>
                              </div>
                              

                              <AppTextField
                                v-model="item.quantity"
                                type="number"
                                style="inline-size: 9.375rem;"
                                density="compact"
                                :disabled="!validSale"
                                @update:modelValue="onQtyChange"
                              />
                            </div>

                            <VSpacer />

                            <div
                              class="d-flex flex-column mt-5 text-start text-md-end"
                              :class="$vuetify.display.mdAndDown ? 'gap-2' : 'gap-4'"
                            >
                              <div class="d-flex text-base align-self-md-end">
                                <div class="text-primary">
                                  <span style="text-transform: uppercase;">₪</span> {{ item.price }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>

                    
                    <!-- 👉 Add more from wishlist -->
                    <div
                      class="d-flex align-center justify-space-between rounded py-2 px-5 text-base mt-4"
                      style="border: 1px solid #ddd;"
                    >
                      <a
                        :href="`/sales/${order.saleID?._id}`"
                        class="font-weight-medium"
                      >{{ $t('Add more products') }}</a>
                      <VIcon
                        icon="tabler-arrow-right"
                        size="16"
                        class="flip-in-rtl text-primary"
                      />
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    lg="4"
                  >
                    <VCard
                      flat
                      variant="outlined"
                    >
                      

                      <!-- 👉 Price details -->
                      <VCardText>
                        <h6 class="text-h6 mb-4">
                          {{ $t('Price Details') }}
                        </h6>

                        <div class="text-high-emphasis">
                          <div class="d-flex justify-space-between mb-2">
                            <span>{{ $t('Bag Total') }}</span>
                            <span class="text-medium-emphasis">{{ numberFormat(order.subTotal) }}</span>
                          </div>

                          

                          <div class="d-flex justify-space-between mb-2" v-if="order.totalDiscount">
                            <span>{{ $t('Discount') }}</span>
                            <span class="text-medium-emphasis">- {{ numberFormat(order.totalDiscount) }}</span>
                          </div>

                          <div class="d-flex justify-space-between mb-2">
                            <span>{{ $t('Delivery Charge') }}</span>
                            <span class="text-medium-emphasis" v-if="order.deliveryCharge">{{ numberFormat(order.deliveryCharge) }}</span>
                            <span class="text-medium-emphasis" v-else>{{ $t('Order processing') }}</span>
                          </div>
                        </div>
                      </VCardText>

                      <VDivider />

                      <VCardText class="d-flex justify-space-between pa-6">
                        <h6 class="text-h6">
                          {{ $t('Total') }}
                        </h6>
                        <h6 class="text-h6">
                          {{ numberFormat(order.total) }}
                        </h6>
                      </VCardText>
                    </VCard>

                    <div>
                      <VBtn
                        v-if="order.status == 'Pending'"
                        block
                        class="mt-4"
                        @click="handleAddAddress"
                      >
                        {{ $t('Add Address') }}
                      </VBtn>
                    </div>
                  </VCol>
                </VRow>
                <VRow v-else>
                  <VCol>
                    <h3>{{ $t('Your shopping cart is empty') }}</h3>
                  </VCol>
                </VRow>
              </VWindowItem>
              <VWindowItem>
                <VForm 
                  ref="refForm"
                  v-model="isFormValid"
                  @submit.prevent="onSubmit"
                >
                  <VRow>
                    <VCol cols="12">
                      <h6 class="text-h6 font-weight-medium">
                        {{ $t('Enter Your Address') }}
                      </h6>
                    </VCol>
                  </VRow>
                  <VRow v-if="orderItems">
                    <VCol
                      cols="12"
                      lg="8"
                    >
                      <VRow>
                        <VCol 
                          cols="12" 
                          lg="6"
                        >
                          <AppAutocomplete
                            v-model="cityID"
                            :items="cities"
                            :label="$t('City')"
                            :placeholder="$t('Select City')"
                            :error-messages="errors.cityID"
                            :rules="[requiredValidator]"
                            clearable
                          />
                        </VCol>

                        <!-- 👉 Flat No. -->
                        <VCol 
                          cols="12" 
                          lg="6"
                        >
                          <AppTextField
                            v-model="street"
                            :label="$t('Street')"
                            :placeholder="$t('Street')"
                            :error-messages="errors.street"
                            :rules="[requiredValidator]"
                          />
                        </VCol>


                        <!-- 👉 Flat No. -->
                        <VCol 
                          cols="12" 
                          lg="6"
                        >
                          <AppTextField
                            v-model="flatNo"
                            :label="$t('Flat No.')"
                            :placeholder="$t('Flat No.')"
                            :error-messages="errors.flatNo"
                            :rules="[requiredValidator]"
                          />
                        </VCol>

                        <!-- 👉 House Number -->
                        <VCol 
                          cols="12" 
                          lg="6"
                        >
                          <AppTextField
                            v-model="houseNumber"
                            :label="$t('House Number')"
                            :placeholder="$t('House Number')"
                            :error-messages="errors.houseNumber"
                          />
                        </VCol>

                        <!-- 👉 Address -->
                        <VCol 
                          cols="12" 
                          lg="6"
                        >
                          <AppAutocomplete
                            v-model="stationID"
                            :items="stations"
                            :label="$t('בחר תחנת חלוקה')"
                            :placeholder="$t('בחר תחנת חלוקה')"
                            :error-messages="errors.stationID"
                            :rules="[requiredValidator]"
                          />
                        </VCol>
                      </VRow>
                      <div>
                        <VBtn
                          class="mt-4"
                          type="submit"
                        >
                          {{ $t('Save Changes') }}
                        </VBtn>
                      </div>
                    </VCol>

                    <VCol
                      cols="12"
                      lg="4"
                    >
                      <VCard
                        flat
                        variant="outlined"
                      >
                        

                        <!-- 👉 Price details -->
                        <VCardText>
                          <h6 class="text-h6 mb-4">
                            {{ $t('Price Details') }}
                          </h6>

                          <div class="text-high-emphasis">
                            <div class="d-flex justify-space-between mb-2">
                              <span>{{ $t('Bag Total') }}</span>
                              <span class="text-medium-emphasis">{{ numberFormat(order.subTotal) }}</span>
                            </div>

                            

                            <div class="d-flex justify-space-between mb-2" v-if="order.totalDiscount">
                              <span>{{ $t('Discount') }}</span>
                              <span class="text-medium-emphasis">- {{ numberFormat(order.totalDiscount) }}</span>
                            </div>

                            <div class="d-flex justify-space-between mb-2">
                              <span>{{ $t('Delivery Charge') }}</span>
                              <span class="text-medium-emphasis" v-if="order.deliveryCharge">{{ numberFormat(order.deliveryCharge) }}</span>
                              <span class="text-medium-emphasis" v-else>{{ $t('Order processing') }}</span>
                            </div>
                          </div>
                        </VCardText>

                        <VDivider />

                        <VCardText class="d-flex justify-space-between pa-6">
                          <h6 class="text-h6">
                            {{ $t('Total') }}
                          </h6>
                          <h6 class="text-h6">
                            {{ numberFormat(order.total) }}
                          </h6>
                        </VCardText>
                      </VCard>
                    </VCol>
                  </VRow>
                </VForm>
              </VWindowItem>
              <VWindowItem>
                <VForm 
                  ref="refForm"
                  v-model="isFormValid"
                  @submit.prevent="pay"
                >
                  <VRow>
                    <VCol cols="12">
                      <h6 class="text-h6 font-weight-medium">
                        {{ $t('Payment Methods') }}
                      </h6>
                    </VCol>
                  </VRow>
                  <VRow v-if="orderItems">
                    <VCol cols="12" lg="8">
                      <div v-if="showLoader">Loading payment page...</div>

                      <!-- Iframe container -->
                      <div v-else v-html="nedarimIframeHtml"></div>

                      <VBtn type="submit" :disabled="isClickPayment" class="TextBox">Make Payment</VBtn>

                      <div v-if="errorMessage" style="color: #f00">{{ errorMessage }}</div>
                    </VCol>

                    <VCol
                      cols="12"
                      lg="4"
                    >
                      <VCard
                        flat
                        variant="outlined"
                      >
                        <VCardText>
                          <h6 class="text-h6 mb-4">
                            {{ $t('Price Details') }}
                          </h6>

                          <div class="text-high-emphasis">
                            <div class="d-flex justify-space-between mb-2">
                              <span>{{ $t('Bag Total') }}</span>
                              <span class="text-medium-emphasis">{{ numberFormat(order.subTotal) }}</span>
                            </div>

                            

                            <div class="d-flex justify-space-between mb-2" v-if="order.totalDiscount">
                              <span>{{ $t('Discount') }}</span>
                              <span class="text-medium-emphasis">- {{ numberFormat(order.totalDiscount) }}</span>
                            </div>

                            <div class="d-flex justify-space-between mb-2">
                              <span>{{ $t('Delivery Charge') }}</span>
                              <span class="text-medium-emphasis" v-if="order.deliveryCharge">{{ numberFormat(order.deliveryCharge) }}</span>
                              <span class="text-medium-emphasis" v-else>{{ $t('Order processing') }}</span>
                            </div>
                          </div>
                        </VCardText>

                        <VDivider />

                        <VCardText class="d-flex justify-space-between pa-6">
                          <h6 class="text-h6">
                            {{ $t('Total') }}
                          </h6>
                          <h6 class="text-h6">
                            {{ numberFormat(order.total) }}
                          </h6>
                        </VCardText>
                      </VCard>
                    </VCol>
                  </VRow>
                </VForm>
              </VWindowItem>
              <VWindowItem>
                <VRow>
                  <VCol>
                    <div class="text-center">
                      <h2>התשלום נקלט בהצלחה</h2>
                      <p>

<br>תודה על הקניה

<br>חג שמח שנה טובה ומתוקה.

<br>ניתן להתעדכן עבור מועד החלוקה בקו המידע

<br>073-888-1871<br>
*8591
                      </p>
                    </div>
                  </VCol>
                </VRow>
                  
              </VWindowItem>
            </VWindow>
          </VCardText>
        </VCard>
      </div>
    </VContainer>
    <VContainer v-else>
      <div class="checkout-card" style="margin:100px 0 150px">
        <h1>{{ $t('You have no open order.') }}</h1>
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

  

  <VDialog persistent class="verify_modal" v-model="isAgreeModalShow" max-width="500">
      <VCard>
        <VForm>
          
          <VCardText>
            <h2 style="margin-bottom: 10px">שים לב!</h2>
            <p style="font-size: 14px;">עם סיום ההזמנה וביצוע התשלום הנך מאשר כי ההזמנה אינה ניתנת יותר לשינוי 

או לביטול וכי ההזמנה סופית</p>

            <VCheckbox
              v-model="agree"
              label="אני מאשר ומסכים"
              :rules="[requiredValidator]"
              style="margin-left:-8px"
            />
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn :disabled="!agree" @click="gotoNextStep" type="button">לְהַסכִּים</VBtn>
          </VCardText>
        </VForm>
      </VCard>
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
