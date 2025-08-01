<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import laptopGirl from '@images/illustrations/laptop-girl.png'

const isFilterDialogOpen = ref(false)
const isChecked = ref(false)

const store = useConfigStore()

store.skin = 'default'
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
  },
})

const features = [
  {
    feature: '14-days free trial',
    starter: true,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'No user limit',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Product Support',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Email Support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false,
    },
  },
  {
    feature: 'Integrations',
    starter: false,
    pro: true,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Removal of Front branding',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: true,
      enterprise: false,
    },
  },
  {
    feature: 'Active maintenance & support',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
  {
    feature: 'Data storage for 365 days',
    starter: false,
    pro: false,
    enterprise: true,
    addOnAvailable: {
      starter: false,
      pro: false,
      enterprise: false,
    },
  },
]

const faqs = [
  {
    question: 'How do you process payments?',
    answer: 'We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.',
  },
  {
    question: 'What counts towards the 100 responses limit?',
    answer: 'We count all responses submitted through all forms in a month.If you already received 100 responses this month, you won\'t be able to receive any more of them until next month when the counter resets.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Checkout accepts all type of credit and debit cards.',
  },
]
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
    <div class="product-wrapper">
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
                v-model="firstName"
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
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rice-1.png"/>
                  <VImg class="hover-photo" src="/images/rice-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Aarong Natural Nazirshail Rice</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rupchanda-oil-1.png"/>
                  <VImg class="hover-photo" src="/images/rupchanda-oil-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Rupchanda Fortified Soyabean Oil</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/tata-tea-1.png"/>
                  <VImg class="hover-photo" src="/images/teat-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Tata Tea Premium</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/teat-2.png"/>
                  <VImg class="hover-photo" src="/images/tata-tea-1.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Seylon Family Blend Black Tea</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>

          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/teat-2.png"/>
                  <VImg class="hover-photo" src="/images/tata-tea-1.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Seylon Family Blend Black Tea</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>         
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/tata-tea-1.png"/>
                  <VImg class="hover-photo" src="/images/teat-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Tata Tea Premium</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rice-1.png"/>
                  <VImg class="hover-photo" src="/images/rice-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Aarong Natural Nazirshail Rice</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rupchanda-oil-1.png"/>
                  <VImg class="hover-photo" src="/images/rupchanda-oil-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Rupchanda Fortified Soyabean Oil</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>

          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rice-1.png"/>
                  <VImg class="hover-photo" src="/images/rice-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Aarong Natural Nazirshail Rice</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rupchanda-oil-1.png"/>
                  <VImg class="hover-photo" src="/images/rupchanda-oil-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Rupchanda Fortified Soyabean Oil</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/tata-tea-1.png"/>
                  <VImg class="hover-photo" src="/images/teat-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Tata Tea Premium</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/teat-2.png"/>
                  <VImg class="hover-photo" src="/images/tata-tea-1.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Seylon Family Blend Black Tea</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>

          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/teat-2.png"/>
                  <VImg class="hover-photo" src="/images/tata-tea-1.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Seylon Family Blend Black Tea</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>         
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/tata-tea-1.png"/>
                  <VImg class="hover-photo" src="/images/teat-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Tata Tea Premium</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="6" lg="4">
            <div class="custom-single-product">
              <RouterLink
                to="/front-pages/product-details"
              >
                <div class="product-photo">
                  <VImg class="active-photo" src="/images/rice-1.png"/>
                  <VImg class="hover-photo" src="/images/rice-2.png"/>
                </div>
                <div class="product-info-block">
                  <h5 class="text-h5">Aarong Natural Nazirshail Rice</h5>
                  <h4>
                    <span class="product-price text-body-1">Tk 1800.00</span>
                    <span class="regular-price text-body-1">Tk 2100.00</span>
                  </h4>
                </div>
              </RouterLink>
            </div>
          </VCol>

          
        </VRow>
        <VRow class="product-footer">
          <VCol md="12" cols="12">
            <div class="see-more-btn">
              <v-btn>See More</v-btn>
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
