<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
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
  communities: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  excludeProduct: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      productID: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'userData',
  'excludeProduct',
  'saleid',
  'products',
  'communities',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const excludeProductData = ref(structuredClone(toRaw(props.excludeProduct)))
const communityItems = ref([])
const selectedProduct = ref()

if(props.excludeProduct._id) {
  communityItems.value = props.excludeProduct.communityItems
}




const handleProductPrices = async (val, key) => {

  if(val) {
    const data = await $api(`/admin/sale-products/${ val }`).catch(err => console.log(err))
    selectedProduct.value = data
  } else {
    selectedProduct.value = ''
  }
  
}

const addItem = () => {
  const selectedIds = communityItems.value.map(item => item.communityID)
  const available = props.communities.filter(p => !selectedIds.includes(p.value))

  console.log(props.communities);

  if (available.length === 0) {
    toast.warning("All available communities have already been added.")
    
    return
  }
  if(!selectedProduct.value) {
    communityItems.value.push({
      'communityID': '',
      'price': '',
      'limitPerCustomer': '',
      'maxUnit': '',
    })
  } else {
    communityItems.value.push({
      'communityID': '',
      'price': selectedProduct.value.price,
      'limitPerCustomer': selectedProduct.value.limitPerCustomer,
      'maxUnit': selectedProduct.value.maxUnit,
    })
  }
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const availableCommunities = index => {
  const selectedIds = communityItems.value
    .filter((_, i) => i !== index)
    .map(item => item.communityID)

  return props.communities.filter(
    community => !selectedIds.includes(community.value),
  )
}

const deleteOrderItem = async index => {
  communityItems.value.splice(index, 1)
}

const submit = async () => {
  try {
    if(props.excludeProduct._id) {
      const res = await $api(`/admin/exclude-products/${ props.excludeProduct._id }`, {
        method: 'PATCH',
        body: {
          productID: excludeProductData.value.productID,
          communityItems: communityItems.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/exclude-products`, {
        method: 'POST',
        body: {
          saleID: props.saleid,
          productID: excludeProductData.value.productID,
          communityItems: communityItems.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('userData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.excludeProduct._id) {
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

const onReset = () => {
  emit('update:isDialogVisible', false)
  refForm.value?.reset()
}

const errors = ref({
  productID: undefined,
  communities: [],
})
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          {{ props.excludeProduct._id ? $t('Edit Exclude Product') : $t('Create Exclude Product') }}
        </h4>

        <VDivider />
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
                v-model="excludeProductData.productID"
                :rules="[requiredValidator]"
                :items="props.products"
                :placeholder="$t('Select Product')"
                :label="$t('Product')"
                :error-messages="errors.productID"
                clearable
                @update:model-value="handleProductPrices"
              />
            </VCol>

            <VCol
              v-if="excludeProductData.productID"
              cols="12"
              md="12"
              lg="12"
            >
              <!-- 👉 Order Items -->
              <VCard
                :title="$t('Communities')"
                class="mb-6"
              >
                <VCardText>
                  <template
                    v-for="(orderItem, key) in communityItems"
                    :key="key"
                  >
                    <VRow>
                      <VCol
                        cols="12"
                        md="4"
                      >
                        <AppAutocomplete
                          v-model="orderItem.communityID"
                          :rules="[requiredValidator]"
                          :items="availableCommunities(key)"
                          :placeholder="$t('Select Community')"
                          :label="$t('Community')"
                          :error-messages="errors.communities?.[key]?.communityID || ''"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <AppTextField
                          v-model="orderItem.price"
                          :rules="[requiredValidator, numericValidator]"
                          :placeholder="$t('Price')"
                          :label="$t('Price')"
                          :error-messages="errors.communities?.[key]?.price || ''"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="3"
                      >
                        <AppTextField
                          v-model="orderItem.limitPerCustomer"
                          :rules="[requiredValidator, integerValidator]"
                          :placeholder="$t('Limit Per Customer')"
                          :label="$t('Limit Per Customer')"
                          :error-messages="errors.communities?.[key]?.limitPerCustomer || ''"
                        />
                      </VCol>
                      <VCol
                        cols="12"
                        md="2"
                      >
                        <AppTextField
                          v-model="orderItem.maxUnit"
                          :rules="[requiredValidator, integerValidator]"
                          :placeholder="$t('Max Unit')"
                          :label="$t('Max Unit')"
                          :error-messages="errors.communities?.[key]?.maxUnit || ''"
                        />
                      </VCol>
                      <VCol
                        v-if="communityItems.length > 1"
                        cols="12"
                        md="1"
                        class="d-flex align-self-end"
                      >
                        <VBtn
                          color="warning"
                          class="removeBtn"
                          variant="text"
                          @click="deleteOrderItem(key)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.0833 2.33333H8.75V1.75C8.75 0.758333 7.99167 0 7 0H4.66667C3.675 0 2.91667 0.758333 2.91667 1.75V2.33333H0.583333C0.233333 2.33333 0 2.56667 0 2.91667C0 3.26667 0.233333 3.5 0.583333 3.5H1.16667V11.0833C1.16667 12.075 1.925 12.8333 2.91667 12.8333H8.75C9.74167 12.8333 10.5 12.075 10.5 11.0833V3.5H11.0833C11.4333 3.5 11.6667 3.26667 11.6667 2.91667C11.6667 2.56667 11.4333 2.33333 11.0833 2.33333ZM4.0835 1.74935C4.0835 1.39935 4.31683 1.16602 4.66683 1.16602H7.00016C7.35016 1.16602 7.5835 1.39935 7.5835 1.74935V2.33268H4.0835V1.74935ZM8.75 11.6667C9.1 11.6667 9.33333 11.4333 9.33333 11.0833V3.5H2.33333V11.0833C2.33333 11.4333 2.56667 11.6667 2.91667 11.6667H8.75Z"
                              fill="#E02127"
                            />
                          </svg>
                        </VBtn>
                      </VCol>
                    </VRow>
                  </template>

                  <VBtn
                    class="mt-6"
                    prepend-icon="tabler-plus"
                    @click="addItem"
                  >
                    {{ $t('Add another item') }}
                  </VBtn>
                </VCardText>
              </VCard>
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
  </VDialog>
</template>
