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

const showLoader = ref(false)

const { t } = useI18n()

const columnRadio = ref('radio-1')
const columnRadio2 = ref('radio-1')
const quantity = ref(1)

const selectedVariations = ref({
  size: null,
  color: null,
  sleeveLength: null,
  pocket: null,
})

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

const router = useRouter()

const route = useRoute('sales-id-products-pid')
const productId = ref(route.params.pid || '')
const saleId = ref(route.params.id || '')

store.skin = 'default'



const {
  data: productData, execute: fetctProduct, error,
} = await useApi(createUrl(`/sales/${ route.params.id }/products/${ route.params.pid }?userID=${authStore.fuserData._id}&saleID=${saleId.value}`))



const productDetails = computed(() => productData.value.productObj)
const saleProduct = computed(() => productData.value.saleProductObj)
if(productData.value){
  const preQuantity = computed(() => productData.value.quantity)

  if(preQuantity.value){
    quantity.value = preQuantity.value
  }

}

const sizeOptions = computed(() => productDetails.value?.size?.split(',').map(s => s.trim()) || [])
const colorOptions = computed(() => productDetails.value?.color?.split(',').map(c => c.trim()) || [])
const sleeveOptions = computed(() => productDetails.value?.sleeveLength?.split(',').map(s => s.trim()) || [])
const pocketOptions = computed(() => productDetails.value?.pocket?.split(',').map(p => p.trim()) || [])

onMounted(() => {
  if (sizeOptions.value.length) selectedVariations.value.size = sizeOptions.value[0]
  if (colorOptions.value.length) selectedVariations.value.color = colorOptions.value[0]
  if (sleeveOptions.value.length) selectedVariations.value.sleeveLength = sleeveOptions.value[0]
  if (pocketOptions.value.length) selectedVariations.value.pocket = pocketOptions.value[0]
})

const goBack = () => {
  window.history.back()
}

onMounted(() => fetchOrder())

const {
  data: orderData, execute: fetchOrder,
} = await useApi(createUrl(`/sales/${ route.params.id }/orders?userId=${authStore.fuserData._id}`))

const order = computed(() => orderData.value)

if(order.value){
  orderItems.value = order.value.orderItems
}




// const productAddToCart = (productID, quantity) => {
//   const index = orderItems.value.findIndex(item => item.productID === productID)

//   if (index !== -1) {
//     orderItems.value[index].quantity = parseInt(quantity)
//   } else {
//     orderItems.value.push({
//       productID,
//       quantity,
//     })
//   }

//   if(order.value && order.value?._id){
//     //console.log(orderItems.value)
//     updateOrder()
//   }else{
//     createOrder()
//   }
  
// }

const productAddToCart = (productID, quantity) => {
  console.log('Selected variations:', selectedVariations.value);

  const index = orderItems.value.findIndex(
    item => item.productID.toString() === productID.toString()
  );

  // Prepare the payload with variations
  const itemPayload = {
    productID,
    quantity,
    variations: { ...selectedVariations.value }, // spread to create a new object
  };

  if (index !== -1) {
    // Merge quantity & variations explicitly
    orderItems.value[index] = {
      ...orderItems.value[index],
      quantity: quantity,
      variations: { ...selectedVariations.value },
    };
  } else {
    // Push a fresh reactive object
    orderItems.value.push(JSON.parse(JSON.stringify(itemPayload)));
  }

  console.log('Order items after add:', orderItems.value);

  if (order.value && order.value?._id) {
    updateOrder();
  } else {
    createOrder();
  }
};

const createOrder = async () => {
  try {
    showLoader.value = true

    const res = await $api(`/sales/${ route.params.id }/orders`, {
      method: 'POST',
      body: {
        saleID: saleId.value,
        products: orderItems.value,
        status: 'Pending',
        userID: authStore.fuserData._id,
      },
      onResponseError({ response }) {
        showLoader.value = false

        const firstError = Object.values(response._data.errors)[0].msg

        toast.error(firstError)
        setTimeout(() => fetchOrderAndSyncOrderItems(), 1500)
      },
    })

    await nextTick(async () => {
      showLoader.value = false
      toast.success(res.message)
      await fetchOrderAndSyncOrderItems()
    })
  } catch (err) {
    console.log(err)
  }
}

const updateOrder = async () => {
  try {
    showLoader.value = true

    const res = await $api(`/orders/${ order.value?._id }`, {
      method: 'PATCH',
      body: {
        saleID: saleId.value,
        orderID: order.value?._id,
        status: order.value.status,
        userID: authStore.fuserData._id,
        products: orderItems.value,
      },
      onResponseError({ response }) {
        showLoader.value = false
        if(response._data.message){
          toast.error(t(response._data.message))
        }else{
          const firstError = Object.values(response._data.errors)[0].msg
        
          toast.error(firstError)
          setTimeout(() => fetchOrderAndSyncOrderItems(), 1500)
        }
        
      },
    })

    await nextTick(async () => {
      showLoader.value = false
      toast.success(t(res.message))
      await fetchOrderAndSyncOrderItems()
    })
  } catch (err) {
    console.log(err)
  }
}

// Helper to fetch fresh order and sync orderItems local state
const fetchOrderAndSyncOrderItems = async () => {
  await fetchOrder()
  orderItems.value = order.value?.orderItems || []
}

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<template>
  <div class="product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ productDetails?.name }}</h2>
        </VCardText>
      </VContainer>
    </div>

    <div class="product-details-wrapper">
      <VContainer>
        <VRow class="product-info-detail-wrapper">
          <VCol cols="12" md="6" sm="6" lg="6">
            <div class="product-details-slider">
              <div class="product-large-photo" v-if="productDetails.image">
                <VImg :src="productDetails.image"/>
              </div>
              <div class="product-large-photo" v-else>
                <VImg src="/images/no-img.jpg"/>
              </div>
            </div>
          </VCol>
          <VCol cols="12" md="6" sm="6" lg="6">
            <div class="product-details-content">
              <div class="product-dt-tittle">
                <h5 class="text-h5">{{ productDetails.name }}</h5>
              </div>
              <div class="product-price-label">
                <h4>
                  <span class="product-price text-h5">{{ saleProduct.price }} <span style="text-transform: uppercase; padding:0;">₪</span></span>
                </h4>
              </div>
              <div class="product-description" v-if="productDetails.description">
                <p class="text-body-1">{{ productDetails.description }}</p>
              </div>

              <VListItem v-if="sizeOptions.length">
                <h6 class="text-h6">{{ $t('Size') }}:</h6>
                <VRadioGroup v-model="selectedVariations.size">
                  <VRadio
                    v-for="size in sizeOptions"
                    :key="size"
                    :label="size"
                    :value="size"
                  />
                </VRadioGroup>
              </VListItem>

              <VListItem v-if="colorOptions.length">
                <h6 class="text-h6">{{ $t('Color') }}:</h6>
                <VRadioGroup v-model="selectedVariations.color">
                  <VRadio
                    v-for="color in colorOptions"
                    :key="color"
                    :label="color"
                    :value="color"
                  />
                </VRadioGroup>
              </VListItem>

              <VListItem v-if="sleeveOptions.length">
                <h6 class="text-h6">{{ $t('Sleeve Length') }}:</h6>
                <VRadioGroup v-model="selectedVariations.sleeveLength">
                  <VRadio
                    v-for="sleeve in sleeveOptions"
                    :key="sleeve"
                    :label="sleeve"
                    :value="sleeve"
                  />
                </VRadioGroup>
              </VListItem>

              <VListItem v-if="pocketOptions.length">
                <h6 class="text-h6">{{ $t('Pocket') }}:</h6>
                <VRadioGroup v-model="selectedVariations.pocket">
                  <VRadio
                    v-for="pocket in pocketOptions"
                    :key="pocket"
                    :label="pocket"
                    :value="pocket"
                  />
                </VRadioGroup>
              </VListItem>

              <VListItem v-if="productDetails.model">
                <h6 class="text-h6">
                  {{ $t('Model') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.model }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.amount_in_package">
                <h6 class="text-h6">
                  {{ $t('Amount in package') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.amount_in_package }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.packages_in_box">
                <h6 class="text-h6">
                  {{ $t('Packages in box') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.packages_in_box }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.internalSKU">
                <h6 class="text-h6">
                  {{ $t('Internal SKU') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.internalSKU }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.externalSKU">
                <h6 class="text-h6">
                  {{ $t('External SKU') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.externalSKU }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.boxSKU">
                <h6 class="text-h6">
                  {{ $t('Box SKU') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.boxSKU }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.manufacturerID">
                <h6 class="text-h6">
                  {{ $t('Manufacturer') }}:
                  <span class="text-body-1 d-inline-block">
                    <span>{{ productDetails.manufacturerID ? productDetails.manufacturerID.name : '' }}</span>
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.supplierID">
                <h6 class="text-h6">
                  {{ $t('Supplier') }}:
                  <span class="text-body-1 d-inline-block">
                    <span>{{ productDetails.supplierID ? productDetails.supplierID.name : '' }}</span>
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.certificationID">
                <h6 class="text-h6">
                  {{ $t('Certification') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.certificationID ? productDetails.certificationID.name : '' }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.packagetypeID">
                <h6 class="text-h6">
                  {{ $t('Package Type') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.packagetypeID ? productDetails.packagetypeID.name : '' }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.quantitytypeID">
                <h6 class="text-h6">
                  {{ $t('Quantity Type') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.quantitytypeID ? productDetails.quantitytypeID.name : '' }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.tags && productDetails.tags.length > 0">
                <h6 class="text-h6">
                  {{ $t('Tags') }}:
                  <span class="text-body-1 d-inline-block">
                    <VChip
                      v-for="(tag, index) in productDetails.tags"
                      :key="index"
                      label
                      color="primary"
                      size="small"
                      class="roles"
                    >
                      {{ tag.name }}
                    </VChip>
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.groups && productDetails.groups.length > 0">
                <h6 class="text-h6">
                  {{ $t('Groups') }}:
                  <span class="text-body-1 d-inline-block">
                    <VChip
                      v-for="(group, index) in productDetails.groups"
                      :key="index"
                      label
                      color="success"
                      size="small"
                      class="roles"
                    >
                      {{ group.name }}
                    </VChip>
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.fit">
                <h6 class="text-h6">
                  {{ $t('Fit') }}:
                  <span class="text-body-1 d-inline-block">
                    <div v-html="productDetails.fit" />
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.customFields && productDetails.customFields.length > 0">
                <h4 class="">
                  {{ $t('Custom Fields') }}
                </h4>
                  <h6 style="padding-top: 20px" class="text-h6" v-for="(field, index) in productDetails.customFields" :key="index">
                    {{ field.title }}: {{ field.value }}
                  </h6>
              </VListItem>

              <VListItem v-if="productDetails.internalRemarks">
                <h6 class="text-h6">
                  {{ $t('Internal Remarks') }}:
                  <span class="text-body-1 d-inline-block">
                    <div v-html="productDetails.internalRemarks" />
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.remarks">
                <h6 class="text-h6">
                  {{ $t('Remarks') }}:
                  <span class="text-body-1 d-inline-block">
                    <div v-html="productDetails.remarks" />
                  </span>
                </h6>
              </VListItem>


              
              <div class="product-quantity">
                <div class="dt-block-tittle">
                  <h3>{{ $t('Quantity') }}:</h3>
                </div>
                <div class="quantity-block">
                  <div class="action_block">
                    <div class="flex items-center space-x-2">
                      <button
                        type="button"
                        @click="decreaseQuantity"
                        class="px-2 py-1 bg-primary text-white rounded"
                      >-</button>

                      <input
                        v-model.number="quantity"
                        type="number"
                        min="1"
                        class="w-16 text-center border rounded px-2 py-1"
                      />

                      <button
                        type="button"
                        @click="increaseQuantity"
                        class="px-2 py-1 bg-primary text-white rounded"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-btn-group-dt">
                <div class="product-cart-btn">
                  <VBtn 
                    prepend-icon="tabler-shopping-cart" 
                    class="cart-btn-dt"
                    @click="productAddToCart(productDetails._id, quantity)"
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
