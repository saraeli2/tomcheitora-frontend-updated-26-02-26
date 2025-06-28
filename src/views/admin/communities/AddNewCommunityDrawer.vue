<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  community: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      cityId: '',
      cityName: '',
      street: '',
      houseNumber: '',
      remarks: '',
      website: '',
      discountType: '',
      discount: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'community',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const communityData = ref(structuredClone(toRaw(props.community)))

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
    if(props.community._id) {
      const res = await $api(`/admin/communities/${ props.community._id }`, {
        method: 'PATCH',
        body: {
          name: communityData.value.name,
          cityId: communityData.value.cityId,
          cityName: communityData.value.cityName,
          street: communityData.value.street,
          houseNumber: communityData.value.houseNumber,
          website: communityData.value.website,
          discountType: communityData.value.discountType,
          discount: communityData.value.discount,
          remarks: communityData.value.remarks,
          status: communityData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/communities`, {
        method: 'POST',
        body: {
          name: communityData.value.name,
          cityId: communityData.value.cityId,
          cityName: communityData.value.cityName,
          street: communityData.value.street,
          houseNumber: communityData.value.houseNumber,
          website: communityData.value.website,
          discountType: communityData.value.discountType,
          discount: communityData.value.discount,
          remarks: communityData.value.remarks,
          status: communityData.value.status,
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
      if(props.community._id) {
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
  cityId: undefined,
  cityName: undefined,
  street: undefined,
  houseNumber: undefined,
  website: undefined,
  discountType: undefined,
  discount: undefined,
  remarks: undefined,
  status: undefined,
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
      v-if="props.community._id"
      title="Edit Community"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Community"
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
                  v-model="communityData.name"
                  :rules="[requiredValidator]"
                  label="Name"
                  placeholder="Name"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 City ID -->
              <VCol cols="12">
                <AppTextField
                  v-model="communityData.cityId"
                  label="City ID"
                  placeholder="City ID"
                  :error-messages="errors.cityId"
                />
              </VCol>

              <!-- 👉 City Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="communityData.cityName"
                  label="City Name"
                  placeholder="City Name"
                  :error-messages="errors.cityName"
                />
              </VCol>

              <!-- 👉 Street -->
              <VCol cols="12">
                <AppTextField
                  v-model="communityData.street"
                  label="Street"
                  placeholder="Street"
                  :error-messages="errors.street"
                />
              </VCol>

              <!-- 👉 House Number -->
              <VCol cols="12">
                <AppTextField
                  v-model="communityData.houseNumber"
                  label="House Number"
                  placeholder="House Number"
                  :error-messages="errors.houseNumber"
                />
              </VCol>

              <!-- 👉 Website -->
              <VCol cols="12">
                <AppTextField
                  v-model="communityData.website"
                  label="Website"
                  placeholder="Website"
                  :error-messages="errors.website"
                />
              </VCol>

              <!-- 👉 Discount Type -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="communityData.discountType"
                  :items="[
                    { value: 'Fixed', title: 'Fixed' },
                    { value: 'Percentage', title: 'Percentage' },
                  ]"
                  placeholder="Select Discount Type"
                  label="Discount Type"
                  :error-messages="errors.discountType"
                />
              </VCol>

              <!-- 👉 Discount -->
              <VCol cols="12">
                <AppTextField
                  v-model="communityData.discount"
                  :rules="[numericValidator]"
                  label="Discount"
                  placeholder="Discount"
                  :error-messages="errors.discount"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="communityData.status"
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
                  v-model="communityData.remarks"
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
