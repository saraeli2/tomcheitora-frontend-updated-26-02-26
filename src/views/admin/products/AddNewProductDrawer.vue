<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  manufacturers: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  suppliers: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  certifications: {
    type: Object,
    required: true,
  },
  packagetypes: {
    type: Object,
    required: true,
  },
  quantitytypes: {
    type: Object,
    required: true,
  },
  product: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      slug: '',
      internalSKU: '',
      externalSKU: '',
      boxSKU: '',
      manufacturerID: '',
      supplierID: '',
      certificationID: '',
      packagetypeID: '',
      purchasePrice: '',
      quantitytypeID: '',
      salePrice: null,
      maxStock: null,
      internalRemarks: '',
      remarks: '',
      description: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'manufacturers',
  'suppliers',
  'certifications',
  'packagetypes',
  'quantitytypes',
  'userData',
  'product',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const productData = ref(structuredClone(toRaw(props.product)))

if(props.product.manufacturerID) {
  productData.value.manufacturerID = props.product.manufacturerID._id
}

if(props.product.supplierID) {
  productData.value.supplierID = props.product.supplierID._id
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
    if(props.product._id) {
      const res = await $api(`/admin/products/${ props.product._id }`, {
        method: 'PATCH',
        body: {
          name: productData.value.name,
          slug: productData.value.slug,
          internalSKU: productData.value.internalSKU,
          externalSKU: productData.value.externalSKU,
          boxSKU: productData.value.boxSKU,
          manufacturerID: productData.value.manufacturerID ? productData.value.manufacturerID : null,
          supplierID: productData.value.supplierID ? productData.value.supplierID : null,
          certificationID: productData.value.certificationID ? productData.value.certificationID : null,
          packagetypeID: productData.value.packagetypeID ? productData.value.packagetypeID : null,
          quantitytypeID: productData.value.quantitytypeID ? productData.value.quantitytypeID : null,
          internalRemarks: productData.value.internalRemarks,
          remarks: productData.value.remarks,
          description: productData.value.description,
          purchasePrice: productData.value.purchasePrice ?? 0,
          salePrice: productData.value.salePrice ?? 0,
          maxStock: productData.value.maxStock ?? 0,
          status: productData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/products`, {
        method: 'POST',
        body: {
          name: productData.value.name,
          slug: productData.value.slug,
          internalSKU: productData.value.internalSKU,
          externalSKU: productData.value.externalSKU,
          boxSKU: productData.value.boxSKU,
          manufacturerID: productData.value.manufacturerID ? productData.value.manufacturerID : null,
          supplierID: productData.value.supplierID ? productData.value.supplierID : null,
          certificationID: productData.value.certificationID ? productData.value.certificationID : null,
          packagetypeID: productData.value.packagetypeID ? productData.value.packagetypeID : null,
          quantitytypeID: productData.value.quantitytypeID ? productData.value.quantitytypeID : null,
          internalRemarks: productData.value.internalRemarks,
          remarks: productData.value.remarks,
          description: productData.value.description,
          purchasePrice: productData.value.purchasePrice ?? 0,
          salePrice: productData.value.salePrice ?? 0,
          maxStock: productData.value.maxStock ?? 0,
          status: productData.value.status,
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
      if(props.product._id) {
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
  name: undefined,
  slug: undefined,
  internalSKU: undefined,
  externalSKU: undefined,
  boxSKU: undefined,
  manufacturerID: undefined,
  supplierID: undefined,
  certificationID: undefined,
  packagetypeID: undefined,
  quantitytypeID: undefined,
  internalRemarks: undefined,
  remarks: undefined,
  description: undefined,
  purchasePrice: undefined,
  salePrice: undefined,
  maxStock: undefined,
  status: undefined,
})

watch(() => productData.value.name, val => {
  productData.value.slug = val.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
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
      v-if="props.product._id"
      title="Edit Product"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Product"
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
              <!-- 👉 Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.name"
                  :rules="[requiredValidator]"
                  label="Name"
                  placeholder="Name"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Slug -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.slug"
                  :rules="[requiredValidator]"
                  label="Slug"
                  placeholder="Slug"
                  :error-messages="errors.slug"
                />
              </VCol>

              <!-- 👉 Internal SKU -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.internalSKU"
                  label="Internal SKU"
                  placeholder="Internal SKU"
                  :error-messages="errors.internalSKU"
                />
              </VCol>

              <!-- 👉 External SKU -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.externalSKU"
                  label="External SKU"
                  placeholder="External SKU"
                  :error-messages="errors.externalSKU"
                />
              </VCol>

              <!-- 👉 Box SKU -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.boxSKU"
                  label="Box SKU"
                  placeholder="Box SKU"
                  :error-messages="errors.boxSKU"
                />
              </VCol>

              <!-- 👉 Manufacturer -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="productData.manufacturerID"
                  :items="props.manufacturers"
                  label="Manufacturer"
                  placeholder="Select Manufacturer"
                  :error-messages="errors.manufacturerID"
                  clearable
                />
              </VCol>

              <!-- 👉 Supplier -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="productData.supplierID"
                  :items="props.suppliers"
                  label="Supplier"
                  placeholder="Select Supplier"
                  :error-messages="errors.supplierID"
                  clearable
                />
              </VCol>

              <!-- 👉 Certification -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="productData.certificationID"
                  :items="props.certifications"
                  label="Certification"
                  placeholder="Select Certification"
                  :error-messages="errors.certificationID"
                  clearable
                />
              </VCol>

              <!-- 👉 Package Type -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="productData.packagetypeID"
                  :rules="[requiredValidator]"
                  :items="props.packagetypes"
                  label="Package Type"
                  placeholder="Select Package Type"
                  :error-messages="errors.packagetypeID"
                  clearable
                />
              </VCol>

              <!-- 👉 Quantity Type -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="productData.quantitytypeID"
                  :rules="[requiredValidator]"
                  :items="props.quantitytypes"
                  label="Quantity Type"
                  placeholder="Select Quantity Type"
                  :error-messages="errors.quantitytypeID"
                  clearable
                />
              </VCol>

              <!-- 👉 Purchase Price -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.purchasePrice"
                  :rules="[numericValidator]"
                  label="Purchase Price"
                  placeholder="Purchase Price"
                  :error-messages="errors.purchasePrice"
                />
              </VCol>

              <!-- 👉 Sale Price -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.salePrice"
                  :rules="[numericValidator]"
                  label="Sale Price"
                  placeholder="Sale Price"
                  :error-messages="errors.salePrice"
                />
              </VCol>

              <!-- 👉 Max Stock -->
              <VCol cols="12">
                <AppTextField
                  v-model="productData.maxStock"
                  :rules="[integerValidator]"
                  label="Max Stock"
                  placeholder="Max Stock"
                  :error-messages="errors.maxStock"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="productData.status"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'Active', title: 'Active' },
                    { value: 'Inactive', title: 'Inactive' },
                  ]"
                  placeholder="Select Status"
                  label="Status"
                  :error-messages="errors.status"
                />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <AppTextarea
                  v-model="productData.description"
                  label="Description"
                  placeholder="Description"
                  :error-messages="errors.description"
                />
              </VCol>

              <!-- 👉 Internal Remarks -->
              <VCol cols="12">
                <AppTextarea
                  v-model="productData.internalRemarks"
                  label="Internal Remarks"
                  placeholder="Internal Remarks"
                  :error-messages="errors.internalRemarks"
                />
              </VCol>

              <!-- 👉 Remarks -->
              <VCol cols="12">
                <AppTextarea
                  v-model="productData.remarks"
                  label="Remarks"
                  placeholder="Remarks"
                  :error-messages="errors.remarks"
                />
              </VCol>
              
              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="error"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
