<script setup>
import { useAuthStore } from '@/stores'
import axios from 'axios'
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
  manufacturer: {
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
  'manufacturer',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const logo = ref()
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']
const manufacturerData = ref(structuredClone(toRaw(props.manufacturer)))

if(props.manufacturer.countryID) {
  manufacturerData.value.countryID = props.manufacturer.countryID._id
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
  const formData = new FormData()

  if(logo.value) {
    formData.append('logo', logo.value)
  }

  if(manufacturerData.value.name) {
    formData.append('name', manufacturerData.value.name)
  } else {
    formData.append('name', '')
  }

  if(manufacturerData.value.businessID) {
    formData.append('businessID', manufacturerData.value.businessID)
  } else {
    formData.append('businessID', '')
  }

  if(manufacturerData.value.countryID) {
    formData.append('countryID', manufacturerData.value.countryID)
  } else {
    formData.append('countryID', '')
  }

  if(manufacturerData.value.city) {
    formData.append('city', manufacturerData.value.city)
  } else {
    formData.append('city', '')
  }

  if(manufacturerData.value.street) {
    formData.append('street', manufacturerData.value.street)
  } else {
    formData.append('street', '')
  }

  if(manufacturerData.value.houseNumber) {
    formData.append('houseNumber', manufacturerData.value.houseNumber)
  } else {
    formData.append('houseNumber', '')
  }

  if(manufacturerData.value.remarks) {
    formData.append('remarks', manufacturerData.value.remarks)
  } else {
    formData.append('remarks', '')
  }

  if(manufacturerData.value.status) {
    formData.append('status', manufacturerData.value.status)
  } else {
    formData.append('status', '')
  }

  if(manufacturerData.value.businessID) {
    formData.append('businessID', manufacturerData.value.businessID)
  } else {
    formData.append('businessID', '')
  }

  if(props.manufacturer._id) {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/manufacturers/${ props.manufacturer._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      await nextTick(() => {
        emit('updateData')
        emit('update:isDialogVisible', false)
        refForm.value?.reset()
        refForm.value?.resetValidation()
        toast.success("Successfully updated")
      })
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  } else {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/manufacturers`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      await nextTick(() => {
        emit('updateData')
        emit('update:isDialogVisible', false)
        refForm.value?.reset()
        refForm.value?.resetValidation()
        toast.success("Successfully saved")
      })
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
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
  logo: undefined,
})

const handleLogoChange = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        logo.value = fileReader.result
    }
  }
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
          {{ props.manufacturer._id ? $t('Edit Manufacturer') : $t('Create Manufacturer') }}
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
                v-model="manufacturerData.countryID"
                :rules="[requiredValidator]"
                :items="props.countries"
                :label="$t('Country')"
                :placeholder="$t('Select Country')"
                :error-messages="errors.countryID"
                clearable
              />
            </VCol>

            <!-- 👉 Name -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.name"
                :rules="[requiredValidator]"
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 Business ID -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.businessID"
                :rules="[requiredValidator]"
                :label="$t('Business ID')"
                :placeholder="$t('Business ID')"
                :error-messages="errors.businessID"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.city"
                :label="$t('City')"
                :placeholder="$t('City')"
                :error-messages="errors.city"
              />
            </VCol>

            <!-- 👉 Street -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.street"
                :label="$t('Street')"
                :placeholder="$t('Street')"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.houseNumber"
                :label="$t('House Number')"
                :placeholder="$t('House Number')"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="manufacturerData.status"
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
                v-model="manufacturerData.remarks"
                :label="$t('Remarks')"
                :placeholder="$t('Remarks')"
                :error-messages="errors.remarks"
              />
            </VCol>

            <!-- 👉 logo -->
            <VCol cols="12">
              <div class="app-picker-field">
                <label class="v-label mb-1 text-body-2">{{ $t('Logo') }}</label>
              </div>
              <VFileInput
                :rules="rules"
                :label="$t('Logo')"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="tabler-camera"
                :error-messages="errors.logo"
                @change="handleLogoChange"
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
