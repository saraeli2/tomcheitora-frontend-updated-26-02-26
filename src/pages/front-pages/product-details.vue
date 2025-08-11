<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import laptopGirl from '@images/illustrations/laptop-girl.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const columnRadio = ref('radio-1')
const columnRadio2 = ref('radio-1')
const quantity = ref(1)

const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'

const store = useConfigStore()

store.skin = 'default'
definePage({
  meta: {
    layout: 'blank',
    public: true,
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
          <h2>Smart watch</h2>
        </VCardText>
      </VContainer>
    </div>

    <div class="product-details-wrapper">
      <VContainer>
        <VRow class="product-info-detail-wrapper">
          <VCol cols="12" md="6" sm="6" lg="7">
            <div class="product-details-slider">
              <div class="product-large-photo">
                <VImg src="/images/product-large.png"/>
              </div>
            </div>
          </VCol>
          <VCol cols="12" md="6" sm="6" lg="5">
            <div class="product-details-content">
              <div class="product-dt-tittle">
                <h5 class="text-h5">Xiomi Smart Watch</h5>
              </div>
              <div class="product-price-label">
                <h4>
                  <span class="product-price text-h5">Tk 1800.00</span>
                  <span class="regular-price text-h5">Tk 2100.00</span>
                </h4>
              </div>
              <div class="product-description">
                <p class="text-body-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
              <div class="product-size">
                <div class="dt-block-tittle">
                  <h3>Size:</h3>
                </div>
                <div class="dt-radio-block">
                  <VRadioGroup v-model="columnRadio">
                    <VRadio
                      label="S"
                      value="radio-1"
                      checeked
                    />
                    <VRadio
                      label="M"
                      value="radio-2"
                    />
                    <VRadio
                      label="L"
                      value="radio-3"
                      
                    />
                    <VRadio
                      label="XL"
                      value="radio-4"
                    />
                  </VRadioGroup>
                </div>
              </div>
              <div class="product-Color">
                <div class="dt-block-tittle">
                  <h3>Color:</h3>
                </div>
                <div class="dt-radio-block">
                  <VRadioGroup v-model="columnRadio2">
                    <VRadio
                      label="Black"
                      value="radio-5"
                      checeked
                    />
                    <VRadio
                      label="Grey"
                      value="radio-6"
                    />
                    <VRadio
                      label="Golden"
                      value="radio-7"
                      
                    />
                  </VRadioGroup>
                </div>
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
                  
                  <VBtn to="/front-pages/checkout" prepend-icon="tabler-shopping-cart" class="cart-btn-dt">
                      {{ $t('Add To CART') }}
                  </VBtn>
                  <VBtn to="/front-pages/shop" class="cart-btn-dt">
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
