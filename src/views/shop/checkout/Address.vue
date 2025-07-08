<script setup>
import { useShoppingCartStore } from '@/stores'
import { useToast } from 'vue-toastification'

const props = defineProps({
  currentStep: {
    type: Number,
    required: false,
  },
  checkoutData: {
    type: null,
    required: true,
  },
  shopInfo: {
    type: null,
    required: true,
  },
})

const emit = defineEmits([
  'update:currentStep',
  'update:checkout-data',
  'deliveryType',
])

const storeData = useShoppingCartStore()

const toast = useToast()

//console.log(props.deliveryType)

const checkoutAddressDataLocal = ref(props.checkoutData)



const totalCost = computed(() => {
  return checkoutAddressDataLocal.value.cartItems.reduce((acc, item) => {
    return acc + (item.online_price || item.retail_price) * item.quantity
  }, 0)
})




const updateAddressData = () => {
  emit('update:checkout-data', checkoutAddressDataLocal.value)
}

const nextStep = () => {
  updateAddressData()
  emit('update:currentStep', props.currentStep ? props.currentStep + 1 : 1)
}

const backStep = () => {
  emit('update:currentStep', props.currentStep ? props.currentStep - 1 : 0)
}

watch(() => props.currentStep, updateAddressData)

const refCreateForm = ref()
const items = []
const name = ref('')
const email = ref('')
const address = ref('')
const paymentMethod = ref('cod')
const toc = ref(false)
const delivery_type = ref('')
const deliveryCharge = ref(0)
//console.log(deliveryCharge.value)

const getDeliveyCharge = () =>{
  delivery_type.value = checkoutAddressDataLocal.value.deliveryType

  if(checkoutAddressDataLocal.value.deliveryType == 'inside_dhaka'){
    deliveryCharge.value = props.shopInfo.inside_dhaka
    
    return props.shopInfo.inside_dhaka
  }else{
    deliveryCharge.value = props.shopInfo.outside_dhaka
    
    return props.shopInfo.outside_dhaka
  }
  
}

const submitBtnDisabled = computed(() => !name.value || !email.value || !address.value || !toc.value)

const errors = ref({
  name: undefined,
  email: undefined,
  address: undefined,
  toc: undefined,
})

const placeOrder = async () => {
  const formData = new FormData

  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('deliveryLocation', address.value)
  formData.append('totalAmount', totalCost.value)
  formData.append('delivery_charge', deliveryCharge.value)


  checkoutAddressDataLocal.value.cartItems.forEach(item => {
    const cartItem = {
      product_id: item.id,
      quantity: item.quantity,
      price: item.online_price || item.retail_price,
    }

    items.push(cartItem)
  })

  const objectForm = {
    items: items,
  }

  formData.append('objectForm', JSON.stringify(objectForm))

  const res = await $api('/shop/order/store', {
    method: 'POST',
    body: formData,
    onResponseError({ response }) {
      if (response._data && response._data.errors) {
        errors.value = response._data.errors
      } else {
        toast.error(import.meta.env.VITE_DEFAULT_ERROR)
      }
    },
  })

  if (res.success) {
    toast.success(res.message)
    storeData.addLocalStorageData(name.value, email.value, address.value, true)
    nextStep()
  } else {
    toast.error(res.message || import.meta.env.VITE_DEFAULT_ERROR)
  }
}

const onSubmit = () => {
  refCreateForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      placeOrder()
  })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VBtn
        color="error" 
        @click="backStep"
      >
        <VIcon
          start
          icon="tabler-arrow-left"
        />
        Back to cart
      </VBtn>
    </VCol>
    <VCol
      cols="12"
      md="8"
    >
      <!-- 👉 Address options -->
      <h6 class="text-base font-weight-regular mb-4">
        Select your preferable address
      </h6>
      <!-- 👉 Form -->
      <VForm
        ref="refCreateForm"
        class="mt-4"
        @submit.prevent="onSubmit"
      >
        <VRow>
          <!-- 👉 Company Name -->
          <VCol cols="12">
            <AppTextField
              v-model="name"
              label="Name"
              placeholder="Name"
              :rules="[requiredValidator]"
              :error-messages="errors.name"
            />
          </VCol>
          <VCol cols="12">
            <AppTextField
              v-model="email"
              label="Email"
              placeholder="example@email.com"
              :rules="[requiredValidator, emailValidator]"
              :error-messages="errors.email"
            />
          </VCol>
          <VCol cols="12">
            <AppTextarea
              v-model="address"
              rows="2"
              label="Address"
              placeholder="Address"
              :rules="[requiredValidator]"
              :error-messages="errors.address"
            />
          </VCol>
          <VCol cols="12">
            <VRadioGroup v-model="paymentMethod">
              <VLabel
                class="custom-input custom-radio rounded cursor-pointer"
                :class="paymentMethod === 'cod' ? 'active' : ''"
              >
                <div>
                  <VRadio value="cod" />
                </div>
                <div class="w-100">
                  <div class="d-flex justify-space-between mb-1">
                    <h6 class="text-base font-weight-medium">
                      Cash On Delivery
                    </h6>
                  </div>

                  <p class="mb-0 text-sm">
                    Pay with cash after receiving your product.
                  </p>
                </div>
              </VLabel>
            </VRadioGroup>
          </VCol>
          <VCol cols="12">
            <VCheckbox
              v-model="toc"
              :rules="[requiredValidator]"
              :error-messages="errors.toc"
            >
              <template #label>
                <div>
                  Yes, I agree with the 
                  <VTooltip location="top">
                    <template #activator="{ props }">
                      <a
                        href="javascript:void(0);"
                        target="_blank"
                        rel="noopener noreferrer"
                        v-bind="props"
                        @click.stop
                      >
                        Terms & Conditions
                      </a>
                    </template>
                    Opens in new window
                  </VTooltip>
                  ,
                  <VTooltip location="top">
                    <template #activator="{ props }">
                      <a
                        href="javascript:void(0);"
                        target="_blank"
                        rel="noopener noreferrer"
                        v-bind="props"
                        @click.stop
                      >
                        Privacy Policy
                      </a>
                    </template>
                    Opens in new window
                  </VTooltip>
                  and
                  <VTooltip location="top">
                    <template #activator="{ props }">
                      <a
                        href="javascript:void(0);"
                        target="_blank"
                        rel="noopener noreferrer"
                        v-bind="props"
                        @click.stop
                      >
                        Return Refund Policy
                      </a>
                    </template>
                    Opens in new window
                  </VTooltip>
                  .
                </div>
              </template>
            </VCheckbox>
          </VCol>
          <VBtn
            block
            class="mt-4"
            type="submit"
            :disabled="submitBtnDisabled ? true : false"
          >
            Place Order
          </VBtn>
        </VRow>
      </VForm>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        flat
        variant="outlined"
      >
        <!-- 👉 Price details -->
        <VCardText>
          <h6 class="text-base font-weight-medium mb-5">
            Price Details
          </h6>

          <div class="d-flex align-center justify-space-between mb-2">
            <span class="text-high-emphasis">Order Total</span>
            <span>${{ totalCost }}</span>
          </div>

          <div class="d-flex justify-space-between mb-2">
            <span>Delivery charge</span>
            <span>${{ getDeliveyCharge() }}</span>
          </div>
        </VCardText>

        <VDivider />

        <VCardText class="d-flex align-center justify-space-between text-high-emphasis py-3">
          <span class="text-base font-weight-medium">Total</span>
          <span class="text-base font-weight-medium">
            ${{ parseFloat(totalCost) + parseFloat(deliveryCharge) }}.00
          </span>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
