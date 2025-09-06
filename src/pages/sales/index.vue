<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Sales',
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
const route = useRoute('sales')

store.skin = 'default'

const products = ref([])
const totalProducts = ref(0)
const loadingMore = ref(false)
const searchQuery = ref()
const itemsPerPage = ref(15)
const page = ref(1)


const {
  data: saleData, execute: fetchSales, error,
} = await useApi(createUrl(`/sales`))

const sales = saleData.value.data

if (sales.length > 0) {
  // 👇 assuming sales are sorted newest → oldest
  const latestSale = sales[0]  
  const latestSaleId = latestSale._id
  router.push(`/sales/${latestSaleId}`)
}

</script>

<template>
  <div class="product-page">
    <Navbar />
    
    <div
      class="sales-wrapper"
    >
      <VContainer>
        <VRow>
          <VCol>
            <h3 class="page_title">{{ $t('Our Sales') }}</h3>
          </VCol>
        </VRow>
        <div v-if="sales.length === 0" class="text-gray-500">
          {{ $t('No active sales right now.') }}
        </div>

        <VRow v-else>
          <VCol v-for="sale in sales" :key="sale._id" md="4">
            <RouterLink
              :to="{
                name: 'sales-id',
                params: { id: sale._id },
              }"
            >
              <div class="sale_item">
                <h3 class="font-semibold text-primary">{{ sale.name }}</h3>
                <p class="text-sm text-gray-600">
                  {{ $t('Start Date') }}: {{ sale.endDate ? formatDateWithTime(sale.startDate) : '-' }} <br>
                  
                  {{ $t('End Date') }}: {{ sale.endDate ? formatDateWithTime(sale.endDate) : 'Ongoing' }}
                </p>
              </div>
            </RouterLink>
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
