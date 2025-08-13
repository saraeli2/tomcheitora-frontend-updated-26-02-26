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

const {
  data: orderData, execute: fetchOrder,
} = await useApi(createUrl(`/pending-order?userId=${authStore.userData._id}`))

//const order = computed(() => orderData.value)

const order = computed(() => orderData.value)

formData.value = orderData.value
orderItems.value = orderData.value.orderItems

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
const end = new Date(order.value.lockTime)

const isValidTime = now <= end

if (isValidTime) {
  validSale.value = true
}
const showLoader = ref(false)

const onQtyChange = async () => {
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
        userID: authStore.userData._id,
        products: cleanedOrderItems,
      },
      onResponseError({ response }) {
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
</script>

<template>
  <div class="checkout-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>Order Details</h2>
        </VCardText>
      </VContainer>
    </div>
    <VContainer v-if="order">
      <div class="checkout-card">
        <VCard>
          <VCardText>
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

                      

                      <div class="d-flex justify-space-between mb-2">
                        <span>{{ $t('Order Total') }}</span>
                        <span class="text-medium-emphasis">{{ numberFormat(order.subTotal) }}</span>
                      </div>
                    </div>
                  </VCardText>

                  <VDivider />

                  <VCardText class="d-flex justify-space-between pa-6">
                    <h6 class="text-h6">
                      {{ $t('Total') }}
                    </h6>
                    <h6 class="text-h6">
                      {{ numberFormat(order.subTotal) }}
                    </h6>
                  </VCardText>
                </VCard>

                <div v-if="order.status == 'Pending'">
                  <VBtn
                    block
                    class="mt-4"
                    to="/profile/checkout"
                  >
                    Edit Order
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VCardText>
          <VDivider />
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
