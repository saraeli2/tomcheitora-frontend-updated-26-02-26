<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
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
  'update:isDialogVisible',
  'updateData',
  'community',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const communityData = ref(structuredClone(toRaw(props.community)))

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
      emit('updateData')
      emit('update:isDialogVisible', false)
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

const onReset = () => {
  emit('update:isDialogVisible', false)
  refForm.value?.reset()
}
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
          {{ props.community._id ? $t('Edit Community') : $t('Create Community') }}
        </h4>

        <VDivider />
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
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 City ID -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.cityId"
                :label="$t('City ID')"
                :placeholder="$t('City ID')"
                :error-messages="errors.cityId"
              />
            </VCol>

            <!-- 👉 City Name -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.cityName"
                :label="$t('City Name')"
                :placeholder="$t('City Name')"
                :error-messages="errors.cityName"
              />
            </VCol>

            <!-- 👉 Street -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.street"
                :label="$t('Street')"
                :placeholder="$t('Street')"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.houseNumber"
                :label="$t('House Number')"
                :placeholder="$t('House Number')"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 Website -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.website"
                :label="$t('Website')"
                :placeholder="$t('Website')"
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
                :placeholder="$t('Select Discount Type')"
                :label="$t('Discount Type')"
                :error-messages="errors.discountType"
              />
            </VCol>

            <!-- 👉 Discount -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.discount"
                :rules="[numericValidator]"
                :label="$t('Discount')"
                :placeholder="$t('Discount')"
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
                :placeholder="$t('Select Status')"
                :label="$t('Status')"
                :error-messages="errors.status"
              />
            </VCol>

            <!-- 👉 Remarks -->
            <VCol cols="12">
              <AppTextarea
                v-model="communityData.remarks"
                :label="$t('Remarks')"
                :placeholder="$t('Remarks')"
                :error-messages="errors.remarks"
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
  </VDialog>
</template>
