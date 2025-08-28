<script setup>
import { ref, onMounted } from 'vue'
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import AccountSettingsAccount from '@/views/front-pages/my-account/AccountSettingsAccount.vue'
import AccountSettingsAccountGeneral from '@/views/front-pages/my-account/AccountSettingsAccountGeneral.vue'
import AccountSettingsAccountEmailPhone from '@/views/front-pages/my-account/AccountSettingsAccountEmailPhone.vue'
import AccountSettingsKidInformations from '@/views/front-pages/my-account/AccountSettingsKidInformations.vue'
import DistributionStation from '@/views/front-pages/my-account/DistributionStation.vue'
import DistributionStationPopup from '@/views/front-pages/my-account/DistributionStationPopup.vue'
import AccountSettingsSecurity from '@/views/front-pages/my-account/AccountSettingsSecurity.vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

const { t } = useI18n()
const toast = useToast()

import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const route = useRoute('profile-my-account-tab')

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/users/${ authStore.fuserData._id }`))

const adminData = computed(() => adminDetail.value)
const adminFromData = computed(() => adminDetail.value)

const commonsyncCities = await $api('/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const stationOptions = computed(() => commonsyncCities.stationOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const stations = stationOptions.value.map(item => ({
  value: item._id,
  title: `${item.name}`,
}))

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  {
    title: 'Account',
    icon: 'tabler-users',
    tab: 'account',
  },
  {
    title: 'Security',
    icon: 'tabler-lock',
    tab: 'security',
  },
  {
    title: 'Kid Informations',
    icon: 'tabler-file-text',
    tab: 'kid-informations',
  },
  {
    title: 'Distribution station',
    icon: 'tabler-truck',
    tab: 'distribution-station',
  },
]

//definePage({ meta: { navActiveLink: 'front-pages-my-account-tab' } })
// definePage({
//   meta: {
//     layout: 'blank',
//     public: false,
//   },
// })

definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'My Account',
  },
})



const showVerifyOtpDialog = ref(false)
const needsEmailOtp = ref(false)
const needsPhoneOtp = ref(false)
const phoneOtp = ref()
const emailOtp = ref()

const errors = ref({
  email: undefined,
  phone: undefined,
  password: undefined,
  confirmPassword: undefined,
})

const showVerificationPopup = ref(false)
const showPasswordResetPopup = ref(false)
const showUpdateEmailPhonePopupShown = ref(false)
const showGeneralInfoPopupShown = ref(false)
const showKidsInfoPopupShown = ref(false)
const showStationPopupShown = ref(false)

const popupShown = localStorage.getItem('verificationPopupShown')
const resetPopupShown = localStorage.getItem('passwordResetPopupShown')
const updateEPPopupShown = localStorage.getItem('updateEmailPhonePopupShown')
const generalInfoPopupShown = localStorage.getItem('generalInfoPopupShown')
const kidsInfoPopupShown = localStorage.getItem('kidsInfoPopupShown')
const stationPopupShown = localStorage.getItem('stationPopupShown')

onMounted(() => {
  if ((!adminData.value.emailVerified || !adminData.value.phoneVerified) && !popupShown) {
    showVerificationPopup.value = true
    localStorage.setItem('verificationPopupShown', 'true')
  }else if(!adminData.value.emailUpdated && !adminData.value.phoneUpdated && !adminData.value.phoneEmailUpdateSkip  && !updateEPPopupShown){
    showUpdateEmailPhonePopupShown.value = true
    localStorage.setItem('updateEmailPhonePopupShown', 'true')
  }else if(!adminData.value.passwordReset){
    showPasswordResetPopup.value = true
    localStorage.setItem('passwordResetPopupShown', 'true')
  }else if(!adminData.value.generalInfoUpdate && !generalInfoPopupShown){
    showGeneralInfoPopupShown.value = true
    localStorage.setItem('generalInfoPopupShown', 'true')
  }else if(!adminData.value.kidsInfoUpdate && !kidsInfoPopupShown){
    showKidsInfoPopupShown.value = true
    localStorage.setItem('kidsInfoPopupShown', 'true')
  }else if(!adminData.value.stationID){
    showStationPopupShown.value = true
    localStorage.setItem('kidsInfoPopupShown', 'true')
  }
})

const passwordRequirements = [
  'נא להזין סיסמא באורך 8 תוים לפחות שמכילה',
  'לפחות אות אחת',
  'מספר אחד',
  'תו מיוחד מהרשימה - ^ % $ # @ ! *',
]

const refFormVerifyPass = ref()

const onSubmitVerifyEmailPass = async() => {
  const res = await $api(`/users/verify-user-otp/${ adminData.value._id }`, {
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
        showVerifyOtpDialog.value = false
        toast.success(t(response.message))
        emailOtp.value = ''
        phoneOtp.value = ''
      }
    })
  })
}

const emailValidator = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value) || 'Invalid email address'
}

const isEmailValid = computed(() => emailValidator(adminData.value.email) === true)

const verifyEmailAddress = async() => {
  const res = await $api(`/users/verify-otp-send/${ adminData.value._id }`, {
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
        showVerificationPopup.value = false
        needsPhoneOtp.value = false
        toast.success(t(response.message))
        
        if(response.otpRequired){
          showVerifyOtpDialog.value = true
        }
        if(response.needsEmailOtp){
          needsEmailOtp.value = true
        }
      }
    })
  })
}

const verifyPhoneNo = async() => {
  const res = await $api(`/users/verify-otp-send/${ adminData.value._id }`, {
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
        showVerificationPopup.value = false
        needsEmailOtp.value = false
        toast.success(t(response.message))
        if(response.otpRequired){
          showVerifyOtpDialog.value = true
        }
        if(response.needsPhoneOtp){
          needsPhoneOtp.value = true
        }
      }
    })
  })
}

const confirmPassword = ref('')
const password = ref('')
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const isFormValidPassword = ref(false)
const refFormPassword = ref()

const onSubmitPassword = async () => {
  try {
    const res = await $api(`/users/${ adminData.value._id }/update/password`, {
      method: 'PATCH',
      body: {
        confirmPassword: confirmPassword.value,
        password: password.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    await nextTick(() => {
      refFormPassword.value?.reset()
      refFormPassword.value?.resetValidation()
      showPasswordResetPopup.value = false
      
      toast.success("Successfully reset password")


      if(!adminData.value.generalInfoUpdate && !generalInfoPopupShown){
        showGeneralInfoPopupShown.value = true
        localStorage.setItem('generalInfoPopupShown', 'true')
      }else if(!adminData.value.kidsInfoUpdate && !kidsInfoPopupShown){
        showKidsInfoPopupShown.value = true
        localStorage.setItem('kidsInfoPopupShown', 'true')
      }else if(!adminData.value.stationID){
        showStationPopupShown.value = true
        localStorage.setItem('kidsInfoPopupShown', 'true')
      }else{
        window.location.href = '/profile/sales'
      }
      
    })
  } catch (err) {
    console.log(err)
  }
}

const closeVerificationPopup = () =>{
  showVerificationPopup.value = false
  if(!adminData.value.emailUpdated && !adminData.value.phoneUpdated && !adminData.value.phoneEmailUpdateSkip  && !updateEPPopupShown){
    showUpdateEmailPhonePopupShown.value = true
    localStorage.setItem('updateEmailPhonePopupShown', 'true')
  }else if(!adminData.value.passwordReset){
    showPasswordResetPopup.value = true
    localStorage.setItem('passwordResetPopupShown', 'true')
  }else if(!adminData.value.generalInfoUpdate && !generalInfoPopupShown){
    showGeneralInfoPopupShown.value = true
    localStorage.setItem('generalInfoPopupShown', 'true')
  }else if(!adminData.value.kidsInfoUpdate && !kidsInfoPopupShown){
    showKidsInfoPopupShown.value = true
    localStorage.setItem('kidsInfoPopupShown', 'true')
  }else if(!adminData.value.stationID){
    showStationPopupShown.value = true
    localStorage.setItem('kidsInfoPopupShown', 'true')
  }
}
</script>

<template>
  <div class="checkout-page product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ $t('My Account') }}</h2>
        </VCardText>
      </VContainer>
    </div>

    <VContainer>
      <div class="checkout-card">
        <VTabs
          v-model="activeTab"
          class="v-tabs-pill"
        >
          <VTab
            v-for="item in tabs"
            :key="item.icon"
            :value="item.tab"
            :to="{ name: 'profile-my-account-tab', params: { tab: item.tab } }"
          >
            <VIcon
              size="20"
              start
              :icon="item.icon"
            />
            {{ $t(item.title) }}
          </VTab>
        </VTabs>

        <VWindow
          v-model="activeTab"
          class="mt-6 disable-tab-transition"
          :touch="false"
        >
          <!-- Account -->
          <VWindowItem value="account">
            <AccountSettingsAccount :user="adminData" :cities="cities" @update:user="user = $event"/>
          </VWindowItem>

          <!-- Security -->
          <VWindowItem value="security">
            <AccountSettingsSecurity :user="adminData" />
          </VWindowItem>

          <!-- Billing -->
          <VWindowItem value="kid-informations">
            <AccountSettingsKidInformations :user="adminData"/>
          </VWindowItem>

          <!-- Notification -->
          <VWindowItem value="distribution-station">
            <DistributionStation :user="adminData" :stations="stations"/>
          </VWindowItem>
        </VWindow>
      </div>
    </VContainer>

    <VDialog  
      v-model="showVerificationPopup" 
      class="verify_modal" 
      max-width="500"
      persistent
    >
      <VCard>
        <VForm>
          <VCardTitle class="text-h6" style="margin-bottom: 15px">
            {{ $t('Verify Your Contact Info') }}
          </VCardTitle>

          <VCardText>
            <VRow>
              <VCol cols="12" v-if="adminData.email">
                <label class="v-label mb-1 text-body-2 text-wrap">{{ $t('Email') }} </label><span class="verified_tag" v-if="adminData.emailVerified">{{ $t('Verified') }}</span>
                <div class="field_block">
                  <AppTextField
                    ref="emailInput"
                    v-model="adminData.email"
                    :rules="[emailValidator]"
                    :placeholder="$t('Email')"
                    :error-messages="errors.email"
                    readonly
                  />
                
                  <div class="action_block">
                    <VBtn variant="outlined" style="color: #333!important; border-color:#333" @click="verifyEmailAddress">
                      {{ $t('Verify') }}
                    </VBtn>
                  </div>
                </div>
              </VCol>

              <VCol cols="12" v-if="adminData.phone">
                <label class="v-label mb-1 text-body-2 text-wrap">{{ $t('Phone') }}</label>
                <div class="field_block">
                  <AppTextField
                    ref="phoneInput"
                    v-model="adminData.phone"
                    :placeholder="$t('Phone')"
                    :error-messages="errors.phone"
                    readonly
                  />
                
                  <div class="action_block">
                    <VBtn style="color: #333!important; border-color:#333" variant="outlined" @click="verifyPhoneNo">
                      {{ $t('Verify') }}
                    </VBtn>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCardText>

          <VCardActions>
            <VSpacer />
            <VBtn style="color: #333!important;" @click="closeVerificationPopup">{{ $t('Skip Now') }}</VBtn>
          </VCardActions>
        </VForm>
      </VCard>
    </VDialog>

    <VDialog class="verify_modal" v-model="showVerifyOtpDialog" max-width="500">
      <VCard>
        <VForm 
          ref="refFormVerifyPass"
          @submit.prevent="onSubmitVerifyEmailPass"
        >
          <VCardTitle class="text-h6">
            {{ $t('Verify Your Contact Info') }}
          </VCardTitle>

          <VCardText>
            <p v-if="needsEmailOtp">{{ $t('Enter the OTP sent to your email') }}</p>
            <AppTextField
              v-if="needsEmailOtp"
              v-model="emailOtp"
              :label="$t('Email OTP')"
              :rules="[requiredValidator]"
            />

            <p v-if="needsPhoneOtp">{{ $t('Enter the OTP sent to your phone') }}</p>
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
            <VBtn style="color: #333!important;" variant="text" @click="clsoeShowVerifyOtpDialog">{{ $t('Cancel') }}</VBtn>
            <VBtn type="submit">
              {{ $t('Verify') }}
            </VBtn>
          </VCardActions>
        </VForm>
      </VCard>
    </VDialog>

    <VDialog persistent class="verify_modal" v-model="showPasswordResetPopup" max-width="500">
      <VCard>
        <VForm
          ref="refFormPassword"
          v-model="isFormValidPassword"
          @submit.prevent="onSubmitPassword"
        >
          <VCardTitle class="text-h6" style="margin-bottom: 15px">
            {{ $t('Change Password') }}
          </VCardTitle>
          <VCardText class="pt-0">
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                cols="12"
              >
                <!-- 👉 current password -->
                <AppTextField
                  v-model="password"
                  :label="$t('Password')"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
              >
                <!-- 👉 new password -->
                <AppTextField
                  v-model="confirmPassword"
                  :label="$t('Confirm Password')"
                  :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password_confirmation"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <h6 class="text-h6 text-medium-emphasis mb-4">
              {{ $t('Password Requirements') }}:
            </h6>

            <VList class="card-list">
              <VListItem
                v-for="item in passwordRequirements"
                :key="item"
                :title="item"
                class="text-medium-emphasis"
              >
                <template #prepend>
                  <VIcon
                    size="10"
                    icon="tabler-circle-filled"
                  />
                </template>
              </VListItem>
            </VList>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn type="submit">{{ $t('Save changes') }}</VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VDialog>

    <VDialog persistent class="verify_modal" v-model="showUpdateEmailPhonePopupShown" max-width="500">
      <AccountSettingsAccountEmailPhone :user="adminData" @update:user="user = $event"/>
    </VDialog>

    <VDialog persistent scrollable class="verify_modal" v-model="showGeneralInfoPopupShown" max-width="800">
      <AccountSettingsAccountGeneral :user="adminData" :cities="cities" @update:user="user = $event"/>
    </VDialog>

    <VDialog persistent scrollable class="verify_modal" v-model="showKidsInfoPopupShown" max-width="1200">
      <AccountSettingsKidInformations :user="adminData"/>
    </VDialog>

    <VDialog persistent class="verify_modal" v-model="showStationPopupShown" max-width="500">
      <DistributionStationPopup :user="adminData" :stations="stations"/>
    </VDialog>

    
    

    <Footer />
  </div>
</template>
