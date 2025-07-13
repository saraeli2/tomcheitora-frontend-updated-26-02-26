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
  cities: {
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
      cityID: '',
      street: '',
      houseNumber: null,
      remarks: '',
      status: 'Active',
      contactInfo1: {
      // eslint-disable-next-line camelcase
        _id: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        email: '',
      },
      contactInfo2: {
      // eslint-disable-next-line camelcase
        _id: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        email: '',
      },
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'countries',
  'cities',
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

if(props.manufacturer._id) {
  if(props.manufacturer.countryID) {
    manufacturerData.value.countryID = props.manufacturer.countryID._id
  }
  
  if(props.manufacturer.cityID) {
    manufacturerData.value.cityID = props.manufacturer.cityID._id
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

const submit = async () => {
  const formData = new FormData()

  if(logo.value) {
    formData.append('logo', logo.value)
  }

  formData.append('name', manufacturerData.value.name || '')

  formData.append('countryID', manufacturerData.value.countryID || '')

  formData.append('cityID', manufacturerData.value.cityID || '')

  formData.append('street', manufacturerData.value.street || '')

  formData.append('houseNumber', manufacturerData.value.houseNumber || '')

  formData.append('remarks', manufacturerData.value.remarks || '')

  formData.append('status', manufacturerData.value.status || '')

  formData.append('businessID', manufacturerData.value.businessID || '')

  if (manufacturerData.value.contactInfo1) {
    formData.append('contactInfo1[_id]', manufacturerData.value.contactInfo1._id || '')
    formData.append('contactInfo1[firstName]', manufacturerData.value.contactInfo1.firstName || '')
    formData.append('contactInfo1[lastName]', manufacturerData.value.contactInfo1.lastName || '')
    formData.append('contactInfo1[phone1]', manufacturerData.value.contactInfo1.phone1 || '')
    formData.append('contactInfo1[phone2]', manufacturerData.value.contactInfo1.phone2 || '')
    formData.append('contactInfo1[email]', manufacturerData.value.contactInfo1.email || '')
  }

  // Append contactInfo2 if it exists
  if (manufacturerData.value.contactInfo2) {
    formData.append('contactInfo2[_id]', manufacturerData.value.contactInfo2._id || '')
    formData.append('contactInfo2[firstName]', manufacturerData.value.contactInfo2.firstName || '')
    formData.append('contactInfo2[lastName]', manufacturerData.value.contactInfo2.lastName || '')
    formData.append('contactInfo2[phone1]', manufacturerData.value.contactInfo2.phone1 || '')
    formData.append('contactInfo2[phone2]', manufacturerData.value.contactInfo2.phone2 || '')
    formData.append('contactInfo2[email]', manufacturerData.value.contactInfo2.email || '')
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
  cityID: undefined,
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
              <AppAutocomplete
                v-model="manufacturerData.cityID"
                :items="props.cities"
                :label="$t('City')"
                :placeholder="$t('Select City')"
                :error-messages="errors.cityID"
                clearable
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

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 1 / 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo1.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo1.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo1.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo1.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo1.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 2 / 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo2.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo2.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo2.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo2.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="manufacturerData.contactInfo2.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
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
