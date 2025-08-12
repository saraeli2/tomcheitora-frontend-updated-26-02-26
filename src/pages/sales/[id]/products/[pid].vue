<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Product Details',
  },
})
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import laptopGirl from '@images/illustrations/laptop-girl.png'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()

const columnRadio = ref('radio-1')
const columnRadio2 = ref('radio-1')
const quantity = ref(1)

const store = useConfigStore()
const orderItems = ref([])

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

store.skin = 'default'

const router = useRouter()
const route = useRoute('sales-id-products-pid')

const {
  data: productData, execute: fetctProduct, error,
} = await useApi(createUrl(`/sales/${ route.params.id }/products/${ route.params.pid }`))

const productId = ref(route.params.pid || '')
const saleId = ref(route.params.id || '')

const productDetails = computed(() => productData.value)

const goBack = () => {
  window.history.back()
}

onMounted(() => fetchOrder())

const {
  data: orderData, execute: fetchOrder,
} = await useApi(createUrl(`/sales/${ route.params.id }/orders?userId=${authStore.userData._id}`))

const order = computed(() => orderData.value)

orderItems.value = order.value.orderItems




const productAddToCart = (productID, quantity) => {
  const index = orderItems.value.findIndex(item => item.productID === productID);

  if (index !== -1) {
    // Product exists, update quantity (e.g., add new quantity)
    orderItems.value[index].quantity += parseInt(quantity);
  } else {
    // New product, push to array
    orderItems.value.push({
      productID,
      quantity,
    })
  }

  if(order.value && order.value?._id){
    //console.log(orderItems.value)
    updateOrder()
  }else{
    createOrder()
  }
  
}

const createOrder = async () => {
  try {
    const res = await $api(`/sales/${ route.params.id }/orders`, {
      method: 'POST',
      body: {
        saleID: saleId.value,
        products: orderItems.value,
        status: 'Pending',
        userID: authStore.userData._id,
      },
      onResponseError({ response }) {
        //errors.value = response._data.errors
        fetchOrder()
        const firstError = Object.values(response._data.errors)[0].msg
        
        toast.error(firstError)
        
      },
    })

    await nextTick(() => {
      orderItems.value = []

      // refForm.value?.reset()
      // refForm.value?.resetValidation()
      toast.success(res.message)

      fetchOrder()

      // router.push({ name: 'admin-orders-detail-id', params: { id: res.data._id } })
    })
  } catch (err) {
    console.log(err)
  }
}

// Update Order
const updateOrder = async () => {
  try {
    const res = await $api(`/orders/${ order.value?._id }`, {
      method: 'PATCH',
      body: {
        saleID: saleId.value,
        status: order.value.status,
        userID: authStore.userData._id,
        products: orderItems.value,
      },
      onResponseError({ response }) {
        const firstError = Object.values(response._data.errors)[0].msg
        
        toast.error(firstError)
      },
    })

    await nextTick(() => {
      toast.success(res.message)
      fetchOrder()
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ productDetails.productID?.name }}</h2>
        </VCardText>
      </VContainer>
    </div>

    <div class="product-details-wrapper">
      <VContainer>
        <VRow class="product-info-detail-wrapper">
          <VCol cols="12" md="6" sm="6" lg="7">
            <div class="product-details-slider">
              <div class="product-large-photo" v-if="productDetails.productID?.image">
                <VImg :src="productDetails.productID?.image"/>
              </div>
              <div class="product-large-photo" v-else>
                <VImg src="/images/no-img.jpg"/>
              </div>
            </div>
          </VCol>
          <VCol cols="12" md="6" sm="6" lg="5">
            <div class="product-details-content">
              <div class="product-dt-tittle">
                <h5 class="text-h5">{{ productDetails.productID?.name }}</h5>
              </div>
              <div class="product-price-label">
                <h4>
                  <span class="product-price text-h5">{{ productDetails.price }} <span style="text-transform: uppercase; padding:0;">{{ productDetails.productID?.currency }}</span></span>
                </h4>
              </div>
              <div class="product-description" v-if="productDetails.productID?.description">
                <p class="text-body-1">{{ productDetails.productID?.description }}</p>
              </div>
              
              <div class="product-quantity">
                <div class="dt-block-tittle">
                  <h3>{{ $t('Quantity') }}:</h3>
                </div>
                <div class="quantity-block">
                  <AppTextField
                    v-model="quantity"
                    type="number"
                    placeholder="1"
                  />
                </div>
              </div>
              <div class="product-btn-group-dt">
                <div class="product-cart-btn">
                  <VBtn 
                    prepend-icon="tabler-shopping-cart" 
                    class="cart-btn-dt"
                    @click="productAddToCart(productDetails.productID?._id, quantity)"
                  >
                    {{ $t('Add To CART') }}
                  </VBtn>
                  <VBtn 
                    class="cart-btn-dt"
                    @click="goBack" 
                  >
                    {{ $t('Previous page') }}
                  </VBtn>
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    

    <VCard class="pricing-card">
      <div style="background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));">
        <Footer />
      </div>
    </VCard>
  </div>









</template>

<style lang="scss" scoped>
.pricing-section {
  padding-block: 5.25rem !important;
  padding-inline: 0 !important;
}

.page-pricing-free-trial-banner-bg {
  /* stylelint-disable-next-line color-function-notation */
  background-color: rgba(var(--v-theme-primary), var(--v-activated-opacity));
  margin-block-start: 8.9375rem !important;
}

.pricing-card {
  padding-block-start: 10.5rem !important;
}

@media screen and (min-width: 960px) {
  .free-trial-illustrator {
    position: absolute;
    inset-block-end: -1rem !important;
    inset-inline-end: 0%;
  }
}

@media screen and (max-width: 959px) {
  .free-trial-illustrator {
    position: relative;
    inset-block-end: -1rem !important;
  }
}

.pricing-table {
  tr:nth-child(even) {
    background: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
  }
}
</style>

<style lang="scss">
.pricing-page {
  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}
</style>
