<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  countries: {
    type: Object,
    required: true,
  },
  supplier: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      businessID: '',
      countryID: '',
      city: '',
      street: '',
      houseNumber: null,
      remarks: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'countries',
  'updateData',
  'supplier',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const supplierData = ref(structuredClone(toRaw(props.supplier)))

if(props.supplier.countryID) {
  supplierData.value.countryID = props.supplier.countryID._id
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {
  try {
    if(props.supplier._id) {
      const res = await $api(`/admin/suppliers/${ props.supplier._id }`, {
        method: 'PATCH',
        body: {
          name: supplierData.value.name,
          businessID: supplierData.value.businessID,
          countryID: supplierData.value.countryID ?? null,
          city: supplierData.value.city,
          street: supplierData.value.street,
          houseNumber: supplierData.value.houseNumber,
          remarks: supplierData.value.remarks,
          status: supplierData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/suppliers`, {
        method: 'POST',
        body: {
          name: supplierData.value.name,
          businessID: supplierData.value.businessID,
          countryID: supplierData.value.countryID ?? null,
          city: supplierData.value.city,
          street: supplierData.value.street,
          houseNumber: supplierData.value.houseNumber,
          remarks: supplierData.value.remarks,
          status: supplierData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('updateData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.supplier._id) {
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
  name: undefined,
  businessID: undefined,
  countryID: undefined,
  city: undefined,
  street: undefined,
  houseNumber: undefined,
  remarks: undefined,
  status: undefined,
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
          {{ props.supplier._id ? 'Edit' : 'Create' }} Supplier
        </h4>

        <VDivider />
        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Country -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.countryID"
                :rules="[requiredValidator]"
                :items="props.countries"
                label="Country"
                placeholder="Select Country"
                :error-messages="errors.countryID"
                clearable
              />
            </VCol>

            <!-- 👉 Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.name"
                :rules="[requiredValidator]"
                label="Name"
                placeholder="Name"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 Business ID -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.businessID"
                :rules="[requiredValidator]"
                label="Business ID"
                placeholder="Business ID"
                :error-messages="errors.businessID"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.city"
                label="City"
                placeholder="City"
                :error-messages="errors.city"
              />
            </VCol>

            <!-- 👉 Street -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.street"
                label="Street"
                placeholder="Street"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.houseNumber"
                label="House Number"
                placeholder="House Number"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.status"
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

            <!-- 👉 Remarks -->
            <VCol cols="12">
              <AppTextarea
                v-model="supplierData.remarks"
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
  </VDialog>
</template>
