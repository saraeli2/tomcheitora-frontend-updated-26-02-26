<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Product Details',
  },
})

import { ref, onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()
const toast = useToast()

const showLoader = ref(false)
const { t } = useI18n()
const quantity = ref(1)

const selectedVariations = ref({
  size: null,
  color: null,
  sleeveLength: null,
  pocket: null,
})

const availableOptions = ref({
  size: [],
  color: [],
  sleeveLength: [],
  pocket: [],
})

const store = useConfigStore()
const orderItems = ref([])
const router = useRouter()
const route = useRoute('sales-id-products-pid')

const productId = ref(route.params.pid || '')
const saleId = ref(route.params.id || '')

store.skin = 'default'

// ----------------------
// Fetch Product
// ----------------------
const productData = ref(null)
const error = ref(null)

const fetchProduct = async () => {
  try {
    showLoader.value = true
    const res = await $api(`/sales/${route.params.id}/products/${route.params.pid}?userID=${authStore.fuserData._id}&saleID=${saleId.value}`)
    productData.value = res
    if (res?.quantity) quantity.value = res.quantity
  } catch (err) {
    error.value = err
  } finally {
    showLoader.value = false
  }
}
await fetchProduct()

const productDetails = computed(() => productData.value?.productObj)
const saleProduct = computed(() => productData.value?.saleProduct)

const sizeOptions = computed(() => productData.value?.attributes?.size || [])
const colorOptions = computed(() => productData.value?.attributes?.color || [])
const sleeveOptions = computed(() => productData.value?.attributes?.sleeveLength || [])
const pocketOptions = computed(() => productData.value?.attributes?.pocket || [])

// ----------------------
// Variant handling
// ----------------------
const matchedVariant = computed(() => {
  if (!productData.value?.variants?.length) return null
  return productData.value.variants.find(v =>
    (!selectedVariations.value.size || v.productID.size === selectedVariations.value.size) &&
    (!selectedVariations.value.color || v.productID.color === selectedVariations.value.color) &&
    (!selectedVariations.value.sleeveLength || v.productID.sleeveLength === selectedVariations.value.sleeveLength) &&
    (!selectedVariations.value.pocket || v.productID.pocket === selectedVariations.value.pocket)
  ) || null
})

// Update available options like WooCommerce
const updateAvailableOptions = () => {
  if (!productData.value?.variants) return
  const selected = selectedVariations.value
  let filteredVariants = productData.value.variants

  Object.keys(selected).forEach(attr => {
    if (selected[attr]) {
      filteredVariants = filteredVariants.filter(v => v.productID[attr] === selected[attr])
    }
  })

  const newAvailable = { size: [], color: [], sleeveLength: [], pocket: [] }
  filteredVariants.forEach(v => {
    Object.keys(newAvailable).forEach(attr => {
      if (v.productID[attr] && !newAvailable[attr].includes(v.productID[attr])) {
        newAvailable[attr].push(v.productID[attr])
      }
    })
  })

  Object.keys(newAvailable).forEach(attr => newAvailable[attr].sort())
  availableOptions.value = newAvailable

  // Auto-correct invalid selections
  Object.keys(selected).forEach(attr => {
    if (selected[attr] && !newAvailable[attr].includes(selected[attr])) {
      selectedVariations.value[attr] = newAvailable[attr][0] || null
    }
  })

  // Update saleProduct price and stock
  if(matchedVariant.value){
    saleProduct.value.price = matchedVariant.value.price
    saleProduct.value.remainingUnits = matchedVariant.value.remainingUnits
    saleProduct.value.limitPerCustomer = matchedVariant.value.limitPerCustomer
    saleProduct.value._id = matchedVariant.value._id // Show variant ID
  }
}

// Init defaults on mount
onMounted(() => {
  if (sizeOptions.value.length) selectedVariations.value.size = sizeOptions.value[0]
  if (colorOptions.value.length) selectedVariations.value.color = colorOptions.value[0]
  if (sleeveOptions.value.length) selectedVariations.value.sleeveLength = sleeveOptions.value[0]
  if (pocketOptions.value.length) selectedVariations.value.pocket = pocketOptions.value[0]

  updateAvailableOptions()
})

watch(selectedVariations, () => updateAvailableOptions(), { deep: true })

// ----------------------
const {
  data: orderData, execute: fetchOrder,
} = await useApi(createUrl(`/sales/${ route.params.id }/orders?userId=${authStore.fuserData._id}`))

const order = computed(() => orderData.value)

if(order.value){
  orderItems.value = order.value.orderItems
}

//console.log(order.value)


const productAddToCart = (cartproductID, qty) => {
  const index = orderItems.value.findIndex(item => item.productID.toString() === cartproductID.toString())
  const itemPayload = { productID: cartproductID, quantity: qty, variations: { ...selectedVariations.value } }

  if (index !== -1) {
    orderItems.value[index] = { ...orderItems.value[index], ...itemPayload }
  } else {
    orderItems.value.push(JSON.parse(JSON.stringify(itemPayload)))
  }

  console.log(orderItems.value);

  if (order.value && order.value?._id) updateOrder()
  else createOrder()
}

const createOrder = async () => {
  try {
    showLoader.value = true
    const res = await $api(`/sales/${route.params.id}/orders`, {
      method: 'POST',
      body: {
        saleID: saleId.value,
        products: orderItems.value,
        status: 'Pending',
        userID: authStore.fuserData._id,
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
    toast.success(res.message)
    await fetchOrderAndSyncOrderItems()
  } catch (err) {
    console.error(err)
  } finally {
    showLoader.value = false
  }
}

const updateOrder = async () => {
  try {
    showLoader.value = true
    const res = await $api(`/orders/${order.value?._id}`, {
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
    toast.success(t(res.message))
    await fetchOrderAndSyncOrderItems()
  } catch (err) {
    console.error(err)
  } finally {
    showLoader.value = false
  }
}

const fetchOrderAndSyncOrderItems = async () => {
  const freshOrder = await $api(`/sales/${route.params.id}/orders?userId=${authStore.fuserData._id}`)
  orderItems.value = freshOrder?.orderItems || []
}

// ----------------------
// Quantity & Navigation
// ----------------------
const increaseQuantity = () => { quantity.value++ }
const decreaseQuantity = () => { if (quantity.value > 1) quantity.value-- }
const goBack = () => window.history.back()




const {
  data: categoryData, execute: fetchCategories, caterror,
} = await useApi(createUrl(`/categories`))

const categoriesAll = computed(() => categoryData.value.categoriesAll)

const productDefaultImage = ref()

const childParentCategory = computed(() => {
  //console.log(productDetails.value?.categoryIDs[0])
  const targetId = productDetails.value?.categoryIDs[0]
  if (!targetId || !categoriesAll.value.length) return null

  return categoriesAll.value.find(cat => cat._id === targetId || cat.id === targetId)
})

productDefaultImage.value = childParentCategory.value?.image
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
              <div class="product-large-photo" v-if="matchedVariant && productDefaultImage && (sizeOptions.length > 0 || colorOptions.length > 0 || sleeveOptions.length > 0 || pocketOptions.length > 0)">
                <VImg :src="productDefaultImage"/>
              </div>
              <div class="product-large-photo" v-else-if="productDetails.image">
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

              <!-- ✅ Show Selected Variant Product ID -->
            <div style="display:none" class="variant-selected mb-4" v-if="matchedVariant && (sizeOptions.length > 0 || colorOptions.length > 0 || sleeveOptions.length > 0 || pocketOptions.length > 0) ">
              <small class="text-sm text-gray-500">
                Selected Variant Product ID:
                <span class="font-mono font-bold text-indigo-600">
                  {{ matchedVariant.productID?._id || matchedVariant._id }}
                </span>
              </small>
            </div>


              <!-- ✅ Price dynamically updates with selectedVariant -->
              <div class="product-price-label">
                <h4>
                  <span class="product-price text-h5">
                    {{ matchedVariant?.price || saleProduct.price }}
                    <span style="text-transform: uppercase; padding:0;">₪</span>
                  </span>
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
                    :class="{ 'opacity-50': !availableOptions.size.includes(size) }"
                    @click="selectedVariations.size = size"
                  />
                </VRadioGroup>
              </VListItem>

              <!-- ✅ Color -->
              <VListItem v-if="colorOptions.length">
                <h6 class="text-h6">{{ $t('Color') }}:</h6>
                <VRadioGroup v-model="selectedVariations.color">
                  <VRadio
                    v-for="color in colorOptions"
                    :key="color"
                    :label="color"
                    :value="color"
                    :class="{ 'opacity-50': !availableOptions.color.includes(color) }"
                    @click="selectedVariations.color = color"
                  />
                </VRadioGroup>
              </VListItem>

              <!-- ✅ Sleeve -->
              <VListItem v-if="sleeveOptions.length">
                <h6 class="text-h6">{{ $t('Sleeve Length') }}:</h6>
                <VRadioGroup v-model="selectedVariations.sleeveLength">
                  <VRadio
                    v-for="sleeve in sleeveOptions"
                    :key="sleeve"
                    :label="sleeve"
                    :value="sleeve"
                    :class="{ 'opacity-50': !availableOptions.sleeveLength.includes(sleeve) }"
                    @click="selectedVariations.sleeveLength = sleeve"
                  />
                </VRadioGroup>
              </VListItem>

              <!-- ✅ Pocket -->
              <VListItem v-if="pocketOptions.length">
                <h6 class="text-h6">{{ $t('Pocket') }}:</h6>
                <VRadioGroup v-model="selectedVariations.pocket">
                  <VRadio
                    v-for="pocket in pocketOptions"
                    :key="pocket"
                    :label="pocket"
                    :value="pocket"
                    :class="{ 'opacity-50': !availableOptions.pocket.includes(pocket) }"
                    @click="selectedVariations.pocket = pocket"
                  />
                </VRadioGroup>
              </VListItem>
              <!-- ✅ Rest of product details (unchanged) -->
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
                    <span>{{ productDetails.manufacturerID?.name }}</span>
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.supplierID">
                <h6 class="text-h6">
                  {{ $t('Supplier') }}:
                  <span class="text-body-1 d-inline-block">
                    <span>{{ productDetails.supplierID?.name }}</span>
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.certificationID">
                <h6 class="text-h6">
                  {{ $t('Certification') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.certificationID?.name }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.packagetypeID">
                <h6 class="text-h6">
                  {{ $t('Package Type') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.packagetypeID?.name }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.quantitytypeID">
                <h6 class="text-h6">
                  {{ $t('Quantity Type') }}:
                  <span class="text-body-1 d-inline-block">
                    {{ productDetails.quantitytypeID?.name }}
                  </span>
                </h6>
              </VListItem>

              <VListItem v-if="productDetails.tags?.length">
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

              <VListItem v-if="productDetails.groups?.length">
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

              <VListItem v-if="productDetails.customFields?.length">
                <h4>{{ $t('Custom Fields') }}</h4>
                <h6
                  v-for="(field, index) in productDetails.customFields"
                  :key="index"
                  class="text-h6 pt-4"
                >
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

              <!-- ✅ Quantity -->
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

              <!-- ✅ Buttons -->
              <div class="product-btn-group-dt">
               
                <div class="product-cart-btn" v-if="sizeOptions.length > 0 || colorOptions.length > 0 || sleeveOptions.length > 0 || pocketOptions.length > 0">
                  <VBtn
                    prepend-icon="tabler-shopping-cart" 
                    class="cart-btn-dt"
                    @click="productAddToCart(matchedVariant.productID?._id || matchedVariant._id, quantity)"
                  >
                    {{ $t('Add To CART') }}
                  </VBtn>

                  <VBtn class="cart-btn-dt" @click="goBack">
                    {{ $t('Previous page') }}
                  </VBtn>
                </div>

                <div v-else>
                  <span v-if="saleProduct.limitPerCustomer > 0">
                    <VBtn
                      prepend-icon="tabler-shopping-cart" 
                      class="cart-btn-dt"
                      @click="productAddToCart(matchedVariant.productID, quantity)"
                    >
                      {{ $t('Add To CART') }}
                    </VBtn>
                  </span>
                  <span v-else>
                    <span class="stock_out" style="position: relative;
    right: auto;
    top: auto;
    margin-right: 0px;
    left: auto;
    margin: 0 10px 0; ">{{ $t('Out of stock') }}</span>
                  </span>
                  <VBtn class="cart-btn-dt" @click="goBack">
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
