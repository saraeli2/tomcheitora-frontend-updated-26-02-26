<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Sales'
  },
})
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import laptopGirl from '@images/illustrations/laptop-girl.png'
import { useAuthStore } from '@/stores'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import CategoryTree from './CategoryTree.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const toast = useToast()

const { t } = useI18n()

const authStore = useAuthStore()

const isFilterDialogOpen = ref(false)
const isChecked = ref(false)

const store = useConfigStore()
const router = useRouter()
const route = useRoute('sales-id')

store.skin = 'default'

const products = ref([])
const totalProducts = ref(0)
const loadingMore = ref(false)
const searchQuery = ref()
const itemsPerPage = ref(60)
const page = ref(1)
const showLoader = ref(false)

const search = ref('')
const selectedCategories = ref([])
const selectedCat = ref()


const category_ids = ref()

const {
  data: saleDetail,
  execute: fetchSales,
  onFetchResponse,
} = await useApi(
  createUrl(`/sales/${route.params.id}`, {
    query: {
      categoryIDs: category_ids,
      communityID: authStore.fuserData.communityID?._id || authStore.fuserData.communityID
    },
  })
)

watch(selectedCategories, (newVal) => {

  const ids = newVal.length ? newVal.join(",") : ""

  category_ids.value = ids
  showLoader.value = true
  fetchSales()
})

const saleData = computed(() => saleDetail.value.saleObj)
const saleCommunities = computed(() => saleDetail.value.saleCommunities)


products.value = saleDetail.value.saleProducts
totalProducts.value = saleDetail.value.totalProducts

watch(saleDetail, (newVal) => {
  showLoader.value = false
  if (newVal) {
    products.value = newVal.saleProducts || []
    totalProducts.value = newVal.totalProducts || 0
  }
}, { immediate: true })

//console.log(saleProducts)
const validSale = ref(false)
const userValid = ref(false)

let exists = '';
let existsDefault = '';

if(authStore.fuserData.communityID && authStore.fuserData.communityID._id){
  //exists = saleCommunities.value.includes(authStore.fuserData.communityID._id)

  exists = saleCommunities.value.some(
    c => c.communityID?._id === authStore.fuserData.communityID._id
  )
}

if (authStore.fuserData.communityID) {
  existsDefault = saleCommunities.value.some(
    c => c.communityID?._id === authStore.fuserData.communityID
  )
}



if (exists || existsDefault) {
  userValid.value = true
}

const now = new Date()
const start = new Date(saleData.value.startDate)
const end = new Date(saleData.value.endDate)

const isValidTime = now >= start && now <= end

if (isValidTime) {
  validSale.value = true
}


async function loadProducts(newPage = 1) {
  
  if (loadingMore.value) return
  loadingMore.value = true

  try {
    const response = await useApi(createUrl('/sale-products', {
      query: {
        categoryIDs: category_ids,
        itemsPerPage: itemsPerPage.value,
        page: newPage,
        saleId: saleData.value?._id,
        communityID: authStore.fuserData.communityID?._id || authStore.fuserData.communityID
      },
    }))

    if (newPage === 1) {
      products.value = response.data._value.saleProducts
    } else {
      products.value.push(...response.data._value.saleProducts)
    }
    totalProducts.value = response.data._value.totalProducts
    page.value = newPage

  } catch (err) {
    console.error('Failed to load products:', err)
  } finally {
    loadingMore.value = false
  }
}

// watch(
//   [
//     itemsPerPage,
//   ],
//   () => {
//     loadProducts(1)
//   }
// )



function handleWindowScroll() {
  if (loadingMore.value) return

  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && products.value.length > 0) {
    if (products.value.length < totalProducts.value) {
      loadProducts(page.value + 1);
    }
  }
}

// Add and remove scroll listener
onMounted(() => window.addEventListener('scroll', handleWindowScroll))
onUnmounted(() => window.removeEventListener('scroll', handleWindowScroll))

const orderItems = ref([])
const {
  data: orderData, execute: fetchOrder,
} = await useApi(createUrl(`/sales/${ route.params.id }/orders?userId=${authStore.fuserData._id}`))

const order = computed(() => orderData.value)

if(order.value){
  orderItems.value = order.value.orderItems
}

const getProductStatus = productId =>{
  const index = orderItems.value.findIndex(item => item.productID === productId)
  if (index !== -1) {
    return true
  }else{
    return false
  }
}

function addToCart(productId) {
  const index = orderItems.value.findIndex(item => item.productID === productId)
  if (index !== -1) {
    // Product already in cart, increment quantity
    orderItems.value[index].quantity += 1
  } else {
    // Add new product
    orderItems.value.push({
      productID: productId,
      quantity: 1
    })
  }

  if(order.value && order.value?._id){
    //console.log(orderItems.value)
    updateOrder()
  }else{
    createOrder()
  }
}

function decrementCart(productId) {
  const index = orderItems.value.findIndex(item => item.productID === productId)
  if (index !== -1) {
    if (orderItems.value[index].quantity > 1) {
      orderItems.value[index].quantity -= 1
    } else {
      // Remove item if quantity is 1
      orderItems.value.splice(index, 1)
    }
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
    showLoader.value = true

    const res = await $api(`/sales/${ route.params.id }/orders`, {
      method: 'POST',
      body: {
        saleID: saleData.value?._id,
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
        saleID: saleData.value?._id,
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

const {
  data: categoryData, execute: fetchCategories, caterror,
} = await useApi(createUrl(`/categories`))

const categories = computed(() => categoryData.value.categories)
const categoriesAll = computed(() => categoryData.value.categoriesAll)

const tree = ref([])

const checkedCategories = ref([])

const getNodeId = node => node.realId || node._id

const getAllDescendants = node => {
  let ids = [getNodeId(node)]
  if (node.children && node.children.length) {
    for (const child of node.children) {
      ids = ids.concat(getAllDescendants(child))
    }
  }
  
  return ids
}

const findNodeById = (tree, id) => {
  for (const node of tree) {
    if (getNodeId(node) === id) return node
    if (node.children) {
      const found = findNodeById(node.children, id)
      if (found) return found
    }
  }
  
  return null
}

const buildTree = categories => {
  const categoryMap = {}

  // 1. Initialize all categories with empty children array
  categories.forEach(cat => {
    categoryMap[cat._id.toString()] = { ...cat, children: [] }
  })

  const roots = []

  // 2. Build the tree by assigning children to their parents
  categories.forEach(cat => {
    if (cat.parentId) {
      const parentId = cat.parentId.toString()
      if (categoryMap[parentId]) {
        categoryMap[parentId].children.push(categoryMap[cat._id.toString()])
      } else {
        // If parent not found, consider as root or handle error
        roots.push(categoryMap[cat._id.toString()])
      }
    } else {
      // No parentId means root node
      roots.push(categoryMap[cat._id.toString()])
    }
  })

  // 3. Optionally sort children by a property, e.g. 'sortOrder'
  const sortChildren = nodes => {
    nodes.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    nodes.forEach(node => {
      if (node.children?.length) {
        sortChildren(node.children)
      }
    })
  }

  sortChildren(roots)

  return roots
}

tree.value = buildTree(categories.value)

const isIndeterminate = node => {
  const descendants = getAllDescendants(node)
  const selectedCount = descendants.filter(id => checkedCategories.value.includes(id)).length

  return selectedCount > 0 && selectedCount < descendants.length
}

const isShowChildCat = ref(false)
const childCategories = ref([]);
const childCategoryIds = import.meta.env.VITE_CHILD_CATEGORIES.split(",");
const selectedChildCat = ref(false)

const productDefaultImage = ref()




//console.log(productDefaultImage.value);


const updateSelectedCategory = catId => {
  if (catId === import.meta.env.VITE_PARENT_CATEGORY) {
    // Parent category clicked
    isShowChildCat.value = true
    selectedCat.value = catId
    
    // Filter child categories
    childCategories.value = categoriesAll.value.filter(c =>
      childCategoryIds.includes(c._id)
    );

    products.value = []
  } else {
    // Check if catId is one of the child categories
    const isChild = childCategories.value.some(c => c._id === catId);

    if (isChild) {
      isShowChildCat.value = true
      selectedChildCat.value = catId

      category_ids.value = catId
      showLoader.value = true

      const childParentCategory = computed(() => {
        const targetId = selectedChildCat.value
        if (!targetId || !categoriesAll.value.length) return null

        return categoriesAll.value.find(cat => cat._id === targetId || cat.id === targetId)
      })

      productDefaultImage.value = childParentCategory.value?.image

      //console.log('test 1')
      fetchSales()
    } else {
     
      isShowChildCat.value = false
      selectedCat.value = catId
      category_ids.value = catId
      showLoader.value = true
      fetchSales()
    }
  }
}


const showAllProducts = () => {
  category_ids.value = ''
  showLoader.value = true
  selectedCat.value = ''
  isShowChildCat.value = false
  fetchSales()
}
</script>

<template>
  <div class="product-page sale_page">
    <Navbar />

    <div
      class="sales-wrapper category_slider"
    >
      <VContainer>
        <VRow>
          <VCol md="12">
            <VRow v-if="userValid && validSale && categories && categories.length > 0">
              <VCol md="12">
                <Swiper
                  :modules="[Navigation, Pagination, Autoplay]"
                  :slides-per-view="8"
                  :loop="false"
                  :autoplay="false"
                  navigation
                  :breakpoints="{
                    320: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 5, spaceBetween: 15 },
                    1024: { slidesPerView: 8, spaceBetween: 20 }
                  }"
                  class="rounded-lg shadow-lg"
                >
                  <SwiperSlide v-for="category in categories" :key="category._id">
                    <div class="cat_item" :class="selectedCat == category._id ? 'activeCat' : ''" @click="updateSelectedCategory(category._id)">
                      <div class="cat_thumb">
                        <img v-if="category.image" :src="category.image">
                        <img v-else src="/images/no-img.jpg">
                      </div>
                      <h3 class="font-semibold">{{ category.name }}</h3>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </VCol>
            </VRow>

            <div 
              v-if="userValid && validSale"
              class="product-wrapper"
            >
              <VRow>
                <VCol v-if="isShowChildCat">
                  <h3 class="page_title">{{ $t('Product Categories') }} <VBtn v-if="selectedCat" @click="showAllProducts">{{ $t('All Products') }}</VBtn></h3>
                </VCol>
              </VRow>

              <VRow class="product-area cat_items" v-if="isShowChildCat">
                <VCol
                  v-for="child in childCategories"
                  :key="child._id"
                  cols="12" md="4" sm="6" lg="3"
                >
                  <div class="custom-single-product" :class="selectedChildCat == child._id ? 'activeCat' : ''" style="padding-bottom:10px;" @click="updateSelectedCategory(child._id)">
                    <div class="product-photo">
                      <VImg
                        v-if="child.image"
                        :src="child.image"
                        alt="child.name"
                        class="w-full h-48 object-cover rounded"
                      />
                      <VImg
                        v-else
                        src="/images/no-img.jpg"
                        alt="No image"
                        class="w-full h-48 object-cover rounded"
                      />
                    </div>
                    <h3 class="font-semibold text-lg text-center">{{ child.name }}</h3>
                    <!-- optional: add description, price, or button -->
                  </div>
                </VCol>
              </VRow>

              <VRow>
                <VCol v-if="products.length > 0">
                  <h3 class="page_title">{{ $t('Our Products') }} <VBtn v-if="selectedCat && !isShowChildCat" @click="showAllProducts">{{ $t('All Products') }}</VBtn></h3>
                </VCol>
              </VRow>

              <VRow class="product-area" v-if="products.length > 0">
                <VCol cols="12" md="4" sm="6" lg="3" v-for="product in products">
                  <div class="custom-single-product">
                    <div class="stock_out" v-if="product.variants?.length > 1" style="display:none;">
                      
                    </div>
                    <div class="stock_out" v-else-if="!product.remainingUnits">
                      {{ $t('Out of stock') }}
                    </div>

                    <div 
                      v-if="isShowChildCat && product.variants?.length"  
                      class="product-photo"
                    >
                      <RouterLink
                        :to="{
                          name: 'sales-id-products-pid',
                          params: { id: saleData._id, pid: product._id },
                        }"
                      >
                        <VImg v-if="productDefaultImage" :src="productDefaultImage"/>
                        <VImg v-else src="/images/no-img.jpg" />
                      </RouterLink>
                    </div>
                    <div 
                      v-else-if="product.productID?.image"  
                      class="product-photo"
                    >
                      <RouterLink
                        :to="{
                          name: 'sales-id-products-pid',
                          params: { id: saleData._id, pid: product._id },
                        }"
                      >
                        <VImg :src="product.productID?.image"/>
                      </RouterLink>
                    </div>
                    <div 
                      v-else
                      class="product-photo"
                    >
                      <RouterLink
                        :to="{
                          name: 'sales-id-products-pid',
                          params: { id: saleData._id, pid: product._id },
                        }"
                      >
                        <VImg src="/images/no-img.jpg" />
                      </RouterLink>
                    </div>
                    <div class="product-info-block">
                      <h5 class="text-h5">
                        <RouterLink
                          :to="{
                            name: 'sales-id-products-pid',
                            params: { id: saleData._id, pid: product._id },
                          }"
                        >
                        {{ product.productID?.name }}
                        </RouterLink>
                      </h5>
                      <div class="product-action-block">
                        <h4>
                          <span class="product-price text-body-1">{{ product.price }} <span style="text-transform: uppercase; padding:0;">₪</span></span>
                        </h4>

                        <div class="action_block" v-if="!isShowChildCat">
                          <div v-if="getProductStatus(product.productID?._id)" class="flex items-center space-x-2">
                            <button @click="decrementCart(product.productID?._id)" class="px-2 py-1 bg-primary text-white rounded">-</button>
                            <span>{{ orderItems.find(item => item.productID === product.productID?._id)?.quantity }}</span>
                            <button @click="addToCart(product.productID?._id)" class="px-2 py-1 bg-primary text-white rounded">+</button>
                          </div>

                          <div v-else>
                            <button :class="product.maxUnit == product.reservedQty ? 'addToCart_disable' : ''" @click="addToCart(product.productID?._id)" class="px-4 py-2 bg-primary text-white rounded initial_plus"> + </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </VCol>
              </VRow>

              

              <VRow v-else-if="!isShowChildCat">
                <VCol>
                  <h3>{{ $t('Products not found.') }}</h3>
                </VCol>
              </VRow>
            </div>

            <div 
              v-else
              class="product-wrapper"
            >
              <VRow class="filter-area">
                <VCol md="12">
                  <h3 class="text-center">{{ $t('You are not allowed to view this page.') }}</h3>
                </VCol>
              </VRow>
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




  <VDialog class="filter-overlay" v-model="isFilterDialogOpen" max-width="420">
    <VCard>
      <VCardTitle class="text-h5">Filter Options</VCardTitle>
      <VCardText class="filter-content">
        <div class="category-list">
          <h3>Category Tittle</h3>
          <ul>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox1"
                />
                <label class="form-check-label" for="checkbox1">
                  Summer Collection
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label class="form-check-label" for="checkbox2">
                  Flash Sales 
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox3"
                />
                <label class="form-check-label" for="checkbox3">
                  Food
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox4"
                />
                <label class="form-check-label" for="checkbox4">
                  Cleaning Supplies
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox5"
                />
                <label class="form-check-label" for="checkbox5">
                  Personal Care
                </label>
              </div>
            </li>
          </ul>
          <h3>Category Tittle</h3>
          <ul>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox6"
                />
                <label class="form-check-label" for="checkbox6">
                  Health & Wellness
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox7"
                />
                <label class="form-check-label" for="checkbox7">
                  Baby Care
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox8"
                />
                <label class="form-check-label" for="checkbox8">
                  Home & Kitchen
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox9"
                />
                <label class="form-check-label" for="checkbox9">
                  Stationery & Office
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox10"
                />
                <label class="form-check-label" for="checkbox10">
                  Pet Care
                </label>
              </div>
            </li>
          </ul>
          <h3>Price Range</h3>
          <ul>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox11"
                />
                <label class="form-check-label" for="checkbox11">
                  0$ - 50$
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox12"
                />
                <label class="form-check-label" for="checkbox12">
                  51$ - 100$
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox13"
                />
                <label class="form-check-label" for="checkbox13">
                  151$ - 200$
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="checkbox14"
                />
                <label class="form-check-label" for="checkbox14">
                  201$ - 250$
                </label>
              </div>
            </li>
            
          </ul>
        </div>
      </VCardText>
      <VCardActions class="dialog-footer">
        <div class="button-group-footer">
          <div class="apply-btn"><v-btn class="btn-apply">Apply Filter</v-btn></div>
          <div class="close-btn-block"><VBtn color="secondary" text @click="isFilterDialogOpen = false">Close</VBtn></div>
        </div>
      </VCardActions>
    </VCard>
  </VDialog>



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
