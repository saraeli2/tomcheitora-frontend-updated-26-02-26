<script setup>
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'

const props = defineProps({
  user: {
    type: Object,
    required: false,
    default: () => ({
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      cityId: '',
      cityName: '',
      street: '',
      houseNumber: '',
      remarks: '',
      phone1: '',
      phone2: '',
    }),
  },
})

const emit = defineEmits([
  'user',
  'userData',
])

import axios from 'axios'

const authStore = useAuthStore()

const toast = useToast()

const accountData = ref(structuredClone(toRaw(props.user)))

const refInputEl = ref()
const isFormValid = ref(false)
const refForm = ref()
const image = ref()

const errors = ref({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  position: undefined,
  cityId: undefined,
  cityName: undefined,
  street: undefined,
  houseNumber: undefined,
  remarks: undefined,
  phone1: undefined,
  phone2: undefined,
})

const resetForm = () => {
  accountData.value = structuredClone(toRaw(props.user))
  errors.value.name = undefined
  errors.value.email = undefined
  errors.value.position = undefined
}

const submit = async () => {
  const formData = new FormData()

  if(accountData.value.firstName) {
    formData.append('firstName', accountData.value.firstName)
  }

  if(accountData.value.lastName) {
    formData.append('lastName', accountData.value.lastName)
  }

  if(accountData.value.position) {
    formData.append('position', accountData.value.position)
  } else {
    formData.append('position', '')
  }

  if(accountData.value.cityId) {
    formData.append('cityId', accountData.value.cityId)
  } else {
    formData.append('cityId', '')
  }

  if(accountData.value.cityName) {
    formData.append('cityName', accountData.value.cityName)
  } else {
    formData.append('cityName', '')
  }

  if(accountData.value.street) {
    formData.append('street', accountData.value.street)
  } else {
    formData.append('street', '')
  }

  if(accountData.value.houseNumber) {
    formData.append('houseNumber', accountData.value.houseNumber)
  } else {
    formData.append('houseNumber', '')
  }

  if(accountData.value.phone1) {
    formData.append('phone1', accountData.value.phone1)
  } else {
    formData.append('phone1', '')
  }

  if(accountData.value.phone2) {
    formData.append('phone2', accountData.value.phone2)
  } else {
    formData.append('phone2', '')
  }

  if(accountData.value.remarks) {
    formData.append('remarks', accountData.value.remarks)
  } else {
    formData.append('remarks', '')
  }
  
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/admins/${props.user._id}/update/profile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authStore.accessToken}`,
    },
  }).then(response => {
    emit('userData')
    toast.success("Successfully updated")
  })
    .catch(e => {
      console.log(e)
      console.log(e.response)
      errors.value = e.response.data.errors
    })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

watch(props, () => {
  if (props.user) {
    accountData.value = props.user
  }
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VCardText class="pt-2">
            <!-- 👉 Form -->
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.firstName"
                  :rules="[requiredValidator]"
                  :label="$t('First Name')"
                  :placeholder="$t('First Name')"
                  :error-messages="errors.firstName"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.lastName"
                  :rules="[requiredValidator]"
                  :label="$t('Last Name')"
                  :placeholder="$t('Last Name')"
                  :error-messages="errors.lastName"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.email"
                  disabled
                  :label="$t('Email')"
                  :placeholder="$t('Email')"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- 👉 Position -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.position"
                  :rules="[requiredValidator]"
                  :label="$t('Position')"
                  :placeholder="$t('Position')"
                  :error-messages="errors.position"
                />
              </VCol>


              <!-- 👉 City ID -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.cityId"
                  :label="$t('City ID')"
                  :placeholder="$t('City ID')"
                  :error-messages="errors.cityId"
                />
              </VCol>

              <!-- 👉 City Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.cityName"
                  :label="$t('City Name')"
                  :placeholder="$t('City Name')"
                  :error-messages="errors.cityName"
                />
              </VCol>

              <!-- 👉 Street -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.street"
                  :label="$t('Street')"
                  :placeholder="$t('Street')"
                  :error-messages="errors.street"
                />
              </VCol>

              <!-- 👉 House Number -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.houseNumber"
                  :label="$t('House Number')"
                  :placeholder="$t('House Number')"
                  :error-messages="errors.houseNumber"
                />
              </VCol>

              <!-- 👉 Phone 1 -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.phone1"
                  :label="$t('Phone 1')"
                  :placeholder="$t('Phone 1')"
                  :error-messages="errors.phone1"
                />
              </VCol>

              <!-- 👉 Phone 2 -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.phone2"
                  :label="$t('Phone 2')"
                  :placeholder="$t('Phone 2')"
                  :error-messages="errors.phone2"
                />
              </VCol>

              <!-- 👉 Remarks -->
              <VCol cols="12">
                <AppTextarea
                  v-model="accountData.remarks"
                  :label="$t('Remarks')"
                  :placeholder="$t('Remarks')"
                  :error-messages="errors.remarks"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  {{ $t('Save changes') }}
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  {{ $t('Cancel') }}
                </VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>
