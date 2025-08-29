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

const { numberFormat } = useHelper()

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

const showLoader = ref(false)

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

const cityID = ref(null)
const flatNo = ref()
const houseNumber = ref()
const address = ref()

if(user.value) {
  cityID.value = user.value.cityID
  flatNo.value = user.value.flatNo
  houseNumber.value = user.value.houseNumber
  address.value = user.value.address
}


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

  if(address.value) {
    formData.append('address', address.value)
  }

  if(user.value.communityID) {
    formData.append('communityID', user.value.communityID)
  }

  if(user.value._id) {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/${ user.value._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.faccessToken}`,
      },
    }).then(async response => {
      await nextTick(() => {
        currentStep.value = currentStep.value + 1
      })

    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  }
}

const paymentMethod = ref('Cash on Delivery')

if(order.value){
  const {
    data: orderDataupdate, execute: fetchOrderUpdatedOrder,
  } = await useApi(createUrl(`/orders/${ order.value?._id }`))

  order.value = computed(() => orderDataupdate.value)
  user.value = order.value.userID
}


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
                      {{ $t('My Shopping Bag') }} ({{ orderItems.length }} {{ $t('Items') }})
                    </h5>
                  </VCol>
                </VRow>
                <VRow v-if="orderItems">
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
                                <p v-if="item.variations.size">Size: {{ item.variations.size }}</p>
                                <p v-if="item.variations.color">Color: {{ item.variations.color }}</p>
                                <p v-if="item.variations.sleeveLength">Sleeve: {{ item.variations.sleeveLength }}</p>
                                <p v-if="item.variations.pocket">Pocket: {{ item.variations.pocket }}</p>
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
                                  <span style="text-transform: uppercase;">{{ item.productID?.currency }}</span> {{ item.price }}
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
                        @click="nextStep"
                      >
                        {{ $t('Add Address') }}
                      </VBtn>
                    </div>
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
                          <AppTextField
                            v-model="address"
                            :label="$t('Address')"
                            :placeholder="$t('Address')"
                            :error-messages="errors.address"
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
                  @submit.prevent="onSubmitPayment"
                >
                  <VRow>
                    <VCol cols="12">
                      <h6 class="text-h6 font-weight-medium">
                        {{ $t('Payment Methods') }}
                      </h6>
                    </VCol>
                  </VRow>
                  <VRow v-if="orderItems">
                    <VCol
                      cols="12"
                      lg="8"
                    >
                      <VRow>
                        <VCol>
                          <VRadio
                            v-model="paymentMethod"
                            :label="$t('Cash on Delivery')"
                            value="Cash on Delivery"
                          />
                          <p>{{ $t('Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance.') }}</p>
                        </VCol>
                      </VRow>
                      <div>
                        <VBtn
                          class="mt-4"
                          type="submit"
                        >
                          {{ $t('Place Order') }}
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
                      <h4 class="text-h4 mb-4">
                        Thank You!
                      </h4>
                      <p>
                        Your order <span class="text-body-1 font-weight-medium text-high-emphasis">#{{ order?._id }}</span> has been placed!
                      </p>
                      
                      <div class="d-flex align-center gap-2 justify-center">
                        <VIcon
                          size="20"
                          icon="tabler-clock"
                          class="text-high-emphasis"
                        />
                        <span>Time placed: {{ new Date(order.updatedAt).toLocaleString() }}</span>
                      </div>
                    </div>
                  </VCol>
                </VRow>
                <VRow class="border rounded ma-0 mt-6">
                  <VCol
                    cols="12"
                    md="4"
                    class="pa-6"
                    :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
                  >
                    <div class="d-flex align-center gap-2 text-high-emphasis mb-4">
                      <VIcon
                        icon="tabler-map-pin"
                        size="20"
                      />
                      <span class="text-base font-weight-medium">
                        {{ $t('Shipping') }}
                      </span>
                    </div>

                    <p class="mb-0">
                      {{ user.firstName }} {{ user.lastName }}
                    </p>
                    <p class="mb-4">
                      {{ address }}, {{ houseNumber }}, {{ flatNo }}
                    </p>

                    <div class="text-base" v-if="user.phone">
                      {{ user.phone }}
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="4"
                    class="pa-6"
                    :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
                  >
                    <div class="d-flex align-center gap-2 text-high-emphasis mb-4">
                      <VIcon
                        icon="tabler-credit-card"
                        size="20"
                      />
                      <span class="text-base font-weight-medium">
                        {{ $t('Billing Address') }}
                      </span>
                    </div>

                    <p class="mb-0">
                      {{ user.firstName }} {{ user.lastName }}
                    </p>
                    <p class="mb-4">
                      {{ address }}, {{ houseNumber }}, {{ flatNo }}
                    </p>

                    <div class="text-base" v-if="user.phone">
                      {{ user.phone }}
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="4"
                    class="pa-6"
                  >
                    <p class="font-weight-medium">
                      Payment Method:
                    </p>
                    <p class="mb-0">
                      {{ paymentMethod }}
                    </p>
                  </VCol>
                </VRow>
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
                            <div class="d-flex flex-column gap-y-2">
                              <h6 class="text-h6">
                                {{ item.productID?.name }}
                              </h6>

                              <div v-if="item.variations">
                                <p v-if="item.variations.size">Size: {{ item.variations.size }}</p>
                                <p v-if="item.variations.color">Color: {{ item.variations.color }}</p>
                                <p v-if="item.variations.sleeveLength">Sleeve: {{ item.variations.sleeveLength }}</p>
                                <p v-if="item.variations.pocket">Pocket: {{ item.variations.pocket }}</p>
                              </div>

                              <p>
                                Qty: {{ item.quantity }}
                              </p>
                            </div>

                            <VSpacer />

                            <div
                              class="d-flex flex-column mt-5 text-start text-md-end"
                              :class="$vuetify.display.mdAndDown ? 'gap-2' : 'gap-4'"
                            >
                              <div class="d-flex text-base align-self-md-end">
                                <div class="text-primary">
                                  <span style="text-transform: uppercase;">{{ item.productID?.currency }}</span> {{ item.price }}
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
