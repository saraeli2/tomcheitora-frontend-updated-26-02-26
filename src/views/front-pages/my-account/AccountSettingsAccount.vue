<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import { ref, nextTick, computed } from 'vue'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import { useAuthStore } from '@/stores'
import { useI18n } from 'vue-i18n'


const props = defineProps({
  cities: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      communityID: '',
      cityID: '',
      street: '',
      houseNumber: '',
      nationality: '',
      israeliIDNumber: '',
      passportNumber: '',
      username: '',
      password: '',
      noOfKids: '',
      status: 'Active',
      maritalStatus: '',
      address: '',
    }),
  },
})

const emit = defineEmits(['update:user'])

const { t } = useI18n()
const authStore = useAuthStore()
const isNewPasswordVisible = ref(false)
const toast = useToast()

const isFormValid = ref(false)
const isAddNewCommunityDialogVisible = ref(false)
const refForm = ref()
const imageID = ref()
const imageUrl = ref()
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']
const adminData = ref(structuredClone(toRaw(props.user)))
const cities = ref(structuredClone(toRaw(props.cities)))

const showOtpDialog = ref(false)
const needsEmailOtp = ref(false)
const needsPhoneOtp = ref(false)
const phoneOtp = ref()
const emailOtp = ref()


if(props.user._id) {
  if(props.user.cityID) {
    adminData.value.cityID = props.user.cityID._id
  }
  
  if(props.user.communityID) {
    adminData.value.communityID = props.user.communityID._id
  }
}

const submit = async () => {

  const formData = new FormData()

  if(imageID.value) {
    
    // Cloudinar
    const signatureRes = await $api('/signature')
    const { signature, timestamp, apiKey, cloudName } = signatureRes;

    // Prepare form data for Cloudinary
    const formData = new FormData()

    formData.append('file', imageID.value)
    formData.append('api_key', apiKey)
    formData.append('timestamp', timestamp)
    formData.append('signature', signature)

    // Upload to Cloudinary
    const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: formData,
    })

    const data = await uploadRes.json()

    imageUrl.value = data.secure_url
    adminData.value.imageID = data.secure_url


  }else if(adminData.value.imageID){
    formData.append('imageUrl', adminData.value.imageID)
  }

  if(adminData.value.email) {
    formData.append('email', adminData.value.email)
  }

  if(adminData.value.username) {
    formData.append('username', adminData.value.username)
  }
  if(adminData.value.password) {
    formData.append('password', adminData.value.password)
  }


  if(adminData.value.firstName) {
    formData.append('firstName', adminData.value.firstName)
  }

  if(adminData.value.lastName) {
    formData.append('lastName', adminData.value.lastName)
  }

  if(adminData.value.maritalStatus) {
    formData.append('maritalStatus', adminData.value.maritalStatus)
  } else {
    formData.append('maritalStatus', '')
  }

  if(adminData.value.communityID) {
    formData.append('communityID', adminData.value.communityID)
  } else {
    formData.append('communityID', '')
  }

  if(adminData.value.cityID) {
    formData.append('cityID', adminData.value.cityID)
  } else {
    formData.append('cityID', '')
  }

  if(adminData.value.street) {
    formData.append('street', adminData.value.street)
  } else {
    formData.append('street', '')
  }

  if(adminData.value.houseNumber) {
    formData.append('houseNumber', adminData.value.houseNumber)
  } else {
    formData.append('houseNumber', '')
  }

  if(adminData.value.phone) {
    formData.append('phone', adminData.value.phone)
  } else {
    formData.append('phone', '')
  }

  if(adminData.value.nationality) {
    formData.append('nationality', adminData.value.nationality)
  } else {
    formData.append('nationality', '')
  }

  if(adminData.value.israeliIDNumber) {
    formData.append('israeliIDNumber', adminData.value.israeliIDNumber)
  } else {
    formData.append('israeliIDNumber', '')
  }

  if(adminData.value.passportNumber) {
    formData.append('passportNumber', adminData.value.passportNumber)
  } else {
    formData.append('passportNumber', '')
  }

  if(adminData.value.noOfKids) {
    formData.append('noOfKids', adminData.value.noOfKids)
  } else {
    formData.append('noOfKids', 0)
  }

  if(adminData.value.status) {
    formData.append('status', adminData.value.status)
  }
  if(adminData.value.address) {
    formData.append('address', adminData.value.address)
  }

  if(props.user._id) {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/${ props.user._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.faccessToken}`,
      },
    }).then(async response => {
      if(imageUrl.value){
        formData.append('imageUrl', imageUrl.value)
        updateImage(formData, props.user._id)

        await nextTick(() => {
          refForm.value?.resetValidation()

          toast.success(t(response.data.message))
          
        })
      }else{
        await nextTick(() => {
          refForm.value?.resetValidation()
          toast.success(t(response.data.message))
         
          window.location.reload()
        })
      }

    })
      .catch(e => {
        //console.log(e.response)
        //errors.value = e.response.data.errors
      })
  }
}

const updateImage = async (formData, modelId) => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/users/${ modelId }`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authStore.accessToken}`,
    },
  }).then(async response => {
    await nextTick(() => {
    })
  })
    .catch(e => {
      errors.value = e.response.data.errors
    })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}



const errors = ref({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  status: undefined,
  maritalStatus: undefined,
  communityID: undefined,
  cityID: undefined,
  street: undefined,
  houseNumber: undefined,
  nationality: undefined,
  israeliIDNumber: undefined,
  passportNumber: undefined,
  noOfKids: undefined,
  address: undefined,
  username: undefined,
  password: undefined,
  imageID: undefined,
})

const handleImageChange = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        imageID.value = fileReader.result
    }
  }
}



const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

const refFormVerify = ref()

const onSubmitVerify = () => {
  refFormVerify.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submitVerify()
  })
}

const submitVerify = async() =>{
  
  const res = await $api(`/users/verify-otp/${ props.user._id }`, {
    method: 'POST',
    body: {
      emailOtp: emailOtp.value,
      phoneOtp: phoneOtp.value,
    },
    onResponseError({ response }) {
      errors.value = response._data.errors
    },
  }).then(async response => {
    await nextTick(() => {
      

      if(response.hasError){
        adminData.value.email = response.data.email
        adminData.value.phone = response.data.phone
        toast.error(t(response.message))
      }else{
        isEmailEdit.value = false

        showOtpDialog.value = false
        adminData.value.email = response.data.email
        adminData.value.phone = response.data.phone
        toast.success(t(response.message))
        emailOtp.value = ''
        phoneOtp.value = ''

        setTimeout(() => {
          window.location.reload()
        }, 2000) // 1000ms = 1 second
        

      }
    })
  })
}

const closeOtpModal = () => {
  showOtpDialog.value = false
  adminData.value.email = props.user.email
  adminData.value.phone = props.user.phone
  needsPhoneOtp.value = false
  needsEmailOtp.value = false
}

const isEmailEdit = ref(false)

const emailInput = ref(null) // template ref

const editEmail = () => {
  isEmailEdit.value = true
  nextTick(() => {
    // Access the internal input of AppTextField
    const inputEl = emailInput.value?.$el?.querySelector('input')
    inputEl?.focus()
  })
}

const isPhoneEdit = ref(false)

const phoneInput = ref(null) // template ref

const editPhone = () => {
  isPhoneEdit.value = true
  nextTick(() => {
    // Access the internal input of AppTextField
    const inputPh = phoneInput.value?.$el?.querySelector('input')
    inputPh?.focus()
  })
}

const emailValidator = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value) || 'Invalid email address'
}

const isEmailValid = computed(() => emailValidator(adminData.value.email) === true)

const verifyEmailAddress = async() => {
  const res = await $api(`/users/opt-send/${ props.user._id }`, {
    method: 'POST',
    body: {
      email: adminData.value.email,
    },
    onResponseError({ response }) {
      errors.value = response._data.errors
    },
  }).then(async response => {
    await nextTick(() => {
      if(response.hasError){
        adminData.value.email = response.data.email
        toast.error(t(response.message))
      }else{
        // showOtpDialog.value = true
        needsPhoneOtp.value = false
        toast.success(t(response.message))
        if(response.otpRequired == true){
          showOtpDialog.value = true
        }
        if(response.needsEmailOtp == true){
          needsEmailOtp.value = true
        }
      }
    })
  })
}

const verifyPhoneNo = async() => {
  const res = await $api(`/users/opt-send/${ props.user._id }`, {
    method: 'POST',
    body: {
      phone: adminData.value.phone,
    },
    onResponseError({ response }) {
      errors.value = response._data.errors
    },
  }).then(async response => {
    await nextTick(() => {
      if(response.hasError){
        adminData.value.phone = response.data.phone
        toast.error(t(response.message))
      }else{
        // showOtpDialog.value = true
        needsEmailOtp.value = false
        toast.success(t(response.message))
        if(response.otpRequired == true){
          showOtpDialog.value = true
        }
        if(response.needsPhoneOtp == true){
          needsPhoneOtp.value = true
        }
      }
    })
  })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VCardText>
          <VForm 
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.firstName"
                  :rules="[requiredValidator]"
                  :label="$t('First Name')"
                  :placeholder="$t('First Name')"
                  :error-messages="errors.firstName"
                />
              </VCol>

              <!-- 👉 Last name -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.lastName"
                  :rules="[requiredValidator]"
                  :label="$t('Last Name')"
                  :placeholder="$t('Last Name')"
                  :error-messages="errors.lastName"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12" md="6">
                <label class="v-label mb-1 text-body-2 text-wrap">{{ $t('Email') }} 
                  <VIcon 
                    style="margin-left:6px" 
                    @click="editEmail" class="tabler-pencil" 
                  />
                </label>
                <span v-if="adminData.emailVerified" style="font-size: 12px; color:#32A744">
                  <VIcon
                      class="tabler-check" 
                  /> Verified
                </span>

                <div class="field_block">
                  <AppTextField
                    ref="emailInput"
                    v-model="adminData.email"
                    :rules="[emailValidator]"
                    :placeholder="$t('Email')"
                    :error-messages="errors.email"
                    :disabled="!isEmailEdit"
                    :autofocus="isEmailEdit"
                  />
                
                  <div class="action_block" v-if="isEmailEdit">
                    <VBtn style="color: #333!important;" variant="text" @click="isEmailEdit=false, adminData.email = $props.user.email ">{{ $t('Cancel') }}</VBtn>
                    <VBtn :disabled="!isEmailValid || props.user.email == adminData.email" variant="outlined" @click="verifyEmailAddress">
                      {{ $t('Verify') }}
                    </VBtn>
                  </div>
                </div>
              </VCol>

              <VCol cols="12" md="6">
                <label class="v-label mb-1 text-body-2 text-wrap">{{ $t('Phone') }} 
                  <VIcon 
                    style="margin-left:6px" 
                    @click="editPhone" class="tabler-pencil" 
                  />
                </label>

                <span v-if="adminData.phoneVerified" style="font-size: 12px; color:#32A744">
                  <VIcon
                      class="tabler-check" 
                  /> Verified
                </span>
                <div class="field_block">
                  <AppTextField
                    ref="phoneInput"
                    v-model="adminData.phone"
                    :placeholder="$t('Phone')"
                    :error-messages="errors.phone"
                    :disabled="!isPhoneEdit"
                    :autofocus="isPhoneEdit"
                  />
                
                  <div class="action_block" v-if="isPhoneEdit">
                    <VBtn style="color: #333!important;" variant="text" @click="isPhoneEdit=false">{{ $t('Cancel') }}</VBtn>
                    <VBtn :disabled="!adminData.phone || adminData.phone == props.user.phone " variant="outlined" @click="verifyPhoneNo">
                      {{ $t('Verify') }}
                    </VBtn>
                  </div>
                </div>
              </VCol>

              
              <!-- 👉 City -->
              <VCol cols="12" md="6">
                <AppAutocomplete
                  v-model="adminData.cityID"
                  :items="cities"
                  :label="$t('City')"
                  :placeholder="$t('Select City')"
                  :error-messages="errors.cityID"
                  clearable
                />
              </VCol>

              <!-- 👉 Flat No. -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.street"
                  :label="$t('Flat No.')"
                  :placeholder="$t('Flat No.')"
                  :error-messages="errors.street"
                />
              </VCol>

              <!-- 👉 House Number -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.houseNumber"
                  :label="$t('House Number')"
                  :placeholder="$t('House Number')"
                  :error-messages="errors.houseNumber"
                />
              </VCol>

              <!-- 👉 Address -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.address"
                  :label="$t('Address')"
                  :placeholder="$t('Address')"
                  :error-messages="errors.address"
                />
              </VCol>

              <!-- 👉 Nationality -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.nationality"
                  :label="$t('Nationality')"
                  :placeholder="$t('Nationality')"
                  :error-messages="errors.nationality"
                />
              </VCol>

              <!-- 👉 Israeli ID Number -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.israeliIDNumber"
                  :label="$t('Israeli ID Number')"
                  :placeholder="$t('Israeli ID Number')"
                  disabled
                  :error-messages="errors.israeliIDNumber"
                />
              </VCol>

              <!-- 👉 Passport Number -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.passportNumber"
                  :label="$t('Passport Number')"
                  :placeholder="$t('Passport Number')"
                  :error-messages="errors.passportNumber"
                />
              </VCol>

              <!-- 👉 No. Of Kids -->
              <VCol cols="12" md="6">
                <AppTextField
                  v-model="adminData.noOfKids"
                  :rules="[integerValidator]"
                  :label="$t('No. Of Kids')"
                  :placeholder="$t('No. Of Kids')"
                  :error-messages="errors.noOfKids"
                />
              </VCol>

              <!-- 👉 maritalStatus -->
              <VCol cols="12" md="6">
                <AppAutocomplete
                  v-model="adminData.maritalStatus"
                  :items="[
                    { value: 'רווק', title: 'רווק' },
                    { value: 'נשוי', title: 'נשוי' },
                    { value: 'גרוש', title: 'גרוש' },
                    { value: 'אלמן', title: 'אלמן' },
                  ]"
                  :placeholder="$t('Select Marital Status')"
                  :label="$t('Marital Status')"
                  :error-messages="errors.maritalStatus"
                  clearable
                />
              </VCol>

              <!-- 👉 imageID -->
              <VCol cols="12">
                <div class="app-picker-field">
                  <label class="v-label mb-1 text-body-2">{{ $t('Image of ID') }}</label>
                </div>
                <div v-if="adminData?.imageID">
                  <VImg
                    :src="adminData.imageID"
                    alt="logo"
                    width="120"
                    height="120"
                  />
                </div>
                <VFileInput
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="tabler-camera"
                  :error-messages="errors.imageID"
                  @change="handleImageChange"
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
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VDialog class="verify_modal" v-model="showOtpDialog" max-width="500">
    <VCard>
      <VForm 
        ref="refFormVerify"
        @submit.prevent="onSubmitVerify"
      >
        <VCardTitle class="text-h6">
          {{ $t('Verify Your Contact Info') }}
        </VCardTitle>

        <VCardText>
          <p v-if="needsEmailOtp">{{ $t('Enter the OTP sent to your new email') }}</p>
          <AppTextField
            v-if="needsEmailOtp"
            v-model="emailOtp"
            :label="$t('Email OTP')"
            :rules="[requiredValidator]"
          />

          <p v-if="needsPhoneOtp">{{ $t('Enter the OTP sent to your new phone') }}</p>
          <AppTextField
            v-if="needsPhoneOtp"
            v-model="phoneOtp"
            :label="$t('Phone OTP')"
            :rules="[requiredValidator]"
          />

          <p v-if="!needsEmailOtp && !needsPhoneOtp">{{ $t('No OTP required') }}</p>
        </VCardText>

        <VCardActions>
          <VSpacer />
          <VBtn style="color: #333!important;" variant="text" @click="closeOtpModal">{{ $t('Cancel') }}</VBtn>
          <VBtn type="submit">
            {{ $t('Verify') }}
          </VBtn>
        </VCardActions>
      </VForm>
    </VCard>
  </VDialog>
</template>
