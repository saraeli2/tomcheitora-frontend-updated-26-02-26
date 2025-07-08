<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useShoppingCartStore } from '@/stores'
const storeData = useShoppingCartStore()
definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

const products = [
  { id: 1, name: 'Apple', price: 1.25 },
  { id: 2, name: 'Banana', price: 0.99 },
  { id: 3, name: 'Orange', price: 1.50 },
  { id: 4, name: 'Grapes', price: 2.10 },
  { id: 5, name: 'Mango', price: 2.50 },
  { id: 6, name: 'Watermelon', price: 3.75 },
]
</script>

<template>
  <div class="page-content">
    <Navbar />
    <div class="checkout-card">
      <VContainer>
        <VRow>
          <VCol
            v-for="(item, index) in products"
            :key="index"
            cols="12"
            md="4"
            sm="6"
            lg="3"
          >
            <!-- 👉 Cart items -->
            <div
              class="border border-primary rounded custom-single-product"
              :class="$vuetify.theme.name == 'dark' ? 'card__dark-hover border-opacity-100' : 'card__light-hover'"
            >
              <div class="d-flex gap-3 pa-5 position-relative flex-column">
                <div class="mx-auto">
                  <VImg
                    width="140"
                    height="180"
                    :src="item.image"
                  />
                </div>

                <div :class="(($vuetify.display.width <= 1280 && $vuetify.display.width >= 960) || $vuetify.display.width <= 700) ? 'flex-column' : 'flex-row'">
                  <div>
                    <h6 class="text-base font-weight-regular mb-4">
                      {{ item.name }}
                    </h6>
                    <div class="d-flex justify-space-between text-no-wrap gap-2 text-base">
                      <VChip
                        color="success"
                        label
                      >
                        <span class="text-xs font-weight-medium">
                          In Stock
                        </span>
                      </VChip>
                      <p class="text-base">
                        <span class="text-primary">${{ item.price }}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="d-flex justify-space-between"
                  :class="(($vuetify.display.width <= 1919 && $vuetify.display.width >= 960)) ? 'flex-column gap-2' : ''"
                >
                  <VBtn
                    variant="outlined"
                    color="primary"
                    size="small"
                    class="text-uppercase cart-button"
                    rounded
                    @click="storeData.addToCart(item)"
                  >
                    <VIcon
                      start
                      icon="tabler-shopping-cart"
                    />
                    Add To Cart
                  </VBtn>
                </div>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </div>
    <Footer />
  </div>
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
.page-content {
    float: left;
    width: 100%;
    height: auto;
}
</style>
