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
const itemsPerPage = ref(15)
const page = ref(1)


const {
  data: saleDetail, execute: fetchSales, error,
} = await useApi(createUrl(`/sales/${ route.params.id }`))

const saleData = computed(() => saleDetail.value.saleObj)
const saleGroups = computed(() => saleDetail.value.saleGroups)

products.value = saleDetail.value.saleProducts
totalProducts.value = saleDetail.value.totalProducts

//console.log(saleProducts)
const validSale = ref(false)
const userValid = ref(false)

const exists = saleGroups.value.some(group =>
  group.groupID?.communities?.includes(authStore.userData.communityID)
)

if (exists) {
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
        search: searchQuery.value,
        itemsPerPage: itemsPerPage.value,
        page: newPage,
        saleId: saleData.value?._id,
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

watch(
  [
    searchQuery,
    itemsPerPage,
  ],
  () => {
    loadProducts(1)
  }
)



function handleWindowScroll() {
  if (loadingMore.value) return

  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
    if (products.value.length < totalProducts.value) {
      loadProducts(page.value + 1);
    }
  }
}

// Add and remove scroll listener
onMounted(() => window.addEventListener('scroll', handleWindowScroll))
onUnmounted(() => window.removeEventListener('scroll', handleWindowScroll))
</script>

<template>
  <div class="product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ $t('Product List') }}</h2>
        </VCardText>
      </VContainer>
    </div>
    <div 
      v-if="userValid && validSale"
      class="product-wrapper"
    >
      <VContainer>
        <VRow class="filter-area">
          <VCol cols="12" md="4" sm="4" lg="4">
            <div class="filter-btn">
              <VBtn prepend-icon="tabler-filter" color="primary" @click="isFilterDialogOpen = true">{{ $t('Filter') }}</VBtn>
            </div>
          </VCol>
          <VCol cols="12" md="8" sm="8" lg="4">
            <div class="product-search">
              <AppTextField
                :placeholder="$t('Search Product')"
                class="search-input-custom"
              />
              <div class="search-btn-th">
                <VBtn prepend-icon="tabler-search" color="primary" ></VBtn>
              </div>
            </div>
          </VCol>
        </VRow>
        <VRow class="product-area">
          <VCol cols="12" md="4" sm="6" lg="4" v-for="product in products">
            <div class="custom-single-product">
              <RouterLink
                :to="{
                  name: 'sales-id-products-pid',
                  params: { id: saleData._id, pid: product._id },
                }"
              >
                <div class="product-photo" v-if="product.image">
                  <VImg class="active-photo" :src="product.image"/>
                  <VImg class="hover-photo" :src="product.image"/>
                </div>
                <div class="product-photo" v-else>
                  <VImg class="active-photo" src="/images/no-img.jpg"/>
                  <VImg class="hover-photo" src="/images/no-img.jpg"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">{{ product.productID?.name }}</h5>
                  <h4>
                    <span class="product-price text-body-1">{{ product.price }} <span style="text-transform: uppercase; padding:0;">{{ product.productID?.currency }}</span></span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </div>

    <div 
      v-else
      class="product-wrapper"
    >
      <VContainer>
        <VRow class="filter-area">
          <VCol md="12">
            <h3>{{ $t('You are not allowed to view this page.') }}</h3>
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
