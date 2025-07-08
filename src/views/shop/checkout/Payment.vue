<script setup>
const props = defineProps({
  currentStep: {
    type: Number,
    required: false,
  },
  checkoutData: {
    type: null,
    required: true,
  },
  deliveryCharge: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits([
  'update:currentStep',
  'update:checkout-data',
])

const prop = __props
const checkoutPaymentDataLocal = ref(prop.checkoutData)
const selectedPaymentMethod = ref('card')

const totalCost = computed(() => {
  return checkoutPaymentDataLocal.value.cartItems.reduce((acc, item) => {
    return acc + (item.online_price || item.retail_price) * item.quantity
  }, 0)
})

const updateCartData = () => {
  emit('update:checkout-data', checkoutPaymentDataLocal.value)
}

const nextStep = () => {
  updateCartData()
  emit('update:currentStep', prop.currentStep ? prop.currentStep + 1 : 1)
}

watch(() => prop.currentStep, updateCartData)
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <VTabs
        v-model="selectedPaymentMethod"
        class="v-tabs-pill"
        density="comfortable"
      >
        <VTab value="cash-on-delivery">
          Cash on Delivery
        </VTab>
      </VTabs>

      <VWindow
        v-model="selectedPaymentMethod"
        class="mt-5"
        style="max-inline-size: 600px;"
        :touch="false"
      >
        <VWindowItem value="cash-on-delivery">
          <p class="text-base text-high-emphasis my-6">
            Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance.
          </p>

          <VBtn @click="nextStep">
            Pay on delivery
          </VBtn>
        </VWindowItem>
      </VWindow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        flat
        variant="outlined"
      >
        <VCardText>
          <h6 class="text-base font-weight-medium mb-4">
            Price Details
          </h6>

          <div class="d-flex justify-space-between text-base mb-2">
            <span class="text-high-emphasis">Order Total</span>
            <span>${{ totalCost }}.00</span>
          </div>

          <div
            v-if="props.deliveryCharge"
            class="d-flex justify-space-between mb-2"
          >
            <span>Delivery charge</span>
            <span>${{ props.deliveryCharge }}</span>
          </div>
        </VCardText>

        <VDivider />

        <VCardText>
          <div class="d-flex justify-space-between text-base mb-2">
            <span class="text-high-emphasis font-weight-medium">Total</span>
            <span>${{ parseFloat(totalCost) + parseFloat(props.deliveryCharge) }}.00</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
