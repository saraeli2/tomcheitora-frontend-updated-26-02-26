<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  saleid: {
    type: String,
    required: true,
  },
  products: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  saleProduct: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      productID: '',
      price: '',
      limitPerCustomer: '',
      maxUnit: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'saleProduct',
  'saleid',
  'products',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const saleProductData = ref(structuredClone(toRaw(props.saleProduct)))

if(props.saleProduct._id) {
  if(props.saleProduct.productID) {
    saleProductData.value.productID = props.saleProduct.productID._id
  }
}

const handleProductPrices = async val => {
  if(val) {
    const data = await $api(`/admin/products/${ val }`).catch(err => console.log(err))
    saleProductData.value.price = data.unit_price
  } else {
    saleProductData.value.price = ''
  }
  
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {
  try {
    if(props.saleProduct._id) {
      const res = await $api(`/admin/sale-products/${ props.saleProduct._id }`, {
        method: 'PATCH',
        body: {
          productID: saleProductData.value.productID,
          price: saleProductData.value.price,
          limitPerCustomer: saleProductData.value.limitPerCustomer,
          maxUnit: saleProductData.value.maxUnit,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/sale-products`, {
        method: 'POST',
        body: {
          saleID: props.saleid,
          productID: saleProductData.value.productID,
          price: saleProductData.value.price,
          limitPerCustomer: saleProductData.value.limitPerCustomer,
          maxUnit: saleProductData.value.maxUnit,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('userData')
      emit('update:isDrawerOpen', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.saleProduct._id) {
        toast.success("Successfully updated")
      } else {
        toast.success("Successfully saved")
      }
      
    })
  } catch (err) {
    console.log(err)
  }
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

const errors = ref({
  productID: undefined,
  price: undefined,
  limitPerCustomer: undefined,
  maxUnit: undefined,
})
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      v-if="props.saleProduct._id"
      :title="$t('Edit Sale Product')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Add Sale Product')"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm 
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Product -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="saleProductData.productID"
                  :rules="[requiredValidator]"
                  :items="props.products"
                  :placeholder="$t('Select Product')"
                  :label="$t('Product')"
                  :error-messages="errors.productID"
                  clearable
                  @update:model-value="handleProductPrices"
                />
              </VCol>

              <!-- 👉 Price -->
              <VCol cols="12">
                <AppTextField
                  v-model="saleProductData.price"
                  :rules="[requiredValidator, numericValidator]"
                  :label="$t('Price')"
                  :placeholder="$t('Price')"
                  :error-messages="errors.price"
                />
              </VCol>

              <!-- 👉 Limit Per Customer -->
              <VCol cols="12">
                <AppTextField
                  v-model="saleProductData.limitPerCustomer"
                  :rules="[requiredValidator, integerValidator]"
                  :label="$t('Limit Per Customer')"
                  :placeholder="$t('Limit Per Customer')"
                  :error-messages="errors.limitPerCustomer"
                />
              </VCol>

              <!-- 👉 Max Unit -->
              <VCol cols="12">
                <AppTextField
                  v-model="saleProductData.maxUnit"
                  :rules="[requiredValidator, integerValidator]"
                  :label="$t('Max Unit')"
                  :placeholder="$t('Max Unit')"
                  :error-messages="errors.maxUnit"
                />
              </VCol>
              
              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  {{ $t('Submit') }}
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="error"
                  @click="closeNavigationDrawer"
                >
                  {{ $t('Cancel') }}
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
