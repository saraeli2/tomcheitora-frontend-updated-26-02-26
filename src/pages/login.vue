<!-- ❗Errors in the form are set on line 60 -->
<script setup>
import { useAuthStore } from '@/stores'
import { VForm } from 'vuetify/components/VForm'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { useConfigStore } from '@core/stores/config'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { israelPhoneValidator } from '@/utils/customValidation'

const toast = useToast()

const { t } = useI18n()

const configStore = useConfigStore()

//configStore.isAppRTL = true

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAbility()
const authStore = useAuthStore()

const errors = ref({
  username: undefined,
  password: undefined,
  phone: undefined,
})

const refVForm = ref()

const credentials = ref({
  username: '',
  password: '',
})

const rememberMe = ref(false)

const login = async () => {
  try {
    const res = await $api('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: {
        username: credentials.value.username,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        //console.log(response);
        //errors.value = response._data.message
        toast.error(t(response._data.message))
      },
    })

    const { fuserData, faccessToken, fuserAbilityRules } = res
    
    ability.update(fuserAbilityRules)
    await authStore.loginAsUser(faccessToken, fuserData, fuserAbilityRules)
    await nextTick(() => {
      router.replace(route.query.to ? String(route.query.to) : fuserData.userRedirectURL)
    })

    
  } catch (err) {
    console.error(err)
  }
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}

document.title = themeConfig.app.title + ' Panel | ' + 'Login'



const isShowLoginWithPhone = ref(false)
const refVFormWithPhone = ref()
const phone = ref();
const isShowOTPModal = ref()
const phoneOtp = ref()

const onSubmitWithPhone = () =>{
  refVFormWithPhone.value?.validate().then(({ valid: isValid }) => {
    
    if (isValid) {
      submitLoginWithPhone()
    } else {
      const items = document.getElementsByClassName('v-input--error')
      if (items && items.length) {
        window.scrollTo({
          top: items[0].offsetTop,
          behavior: 'smooth',
        })
      }
    }
  })
}

const submitLoginWithPhone = async() =>{
  const res = await $api(`/login-with-phone`, {
    method: 'POST',
    body: {
      phone: phone.value,
    },
    onResponseError({ response }) {
      toast.error(response._data.message)
    },
  }).then(async response => {
    await nextTick(() => {
      if(response.hasError){
        toast.error(t(response.message))
      }else{
        toast.success(t(response.message))
        isShowLoginWithPhone.value = false
        isShowOTPModal.value = true
      }
    })
  })
}

const onSubmitVerifyLoginOTP = async() => {
  const res = await $api(`/verify-login-otp`, {
    method: 'POST',
    body: {
      phone: phone.value,
      phoneOtp: phoneOtp.value,
    },
    onResponseError({ response }) {
      toast.error('קוד שגוי')
    },
  }).then(async response => {
    await nextTick(() => {
      if(response.hasError){
        toast.error('קוד שגוי')
      }else{
        isShowOTPModal.value = false
      }
    })

    //console.log(response);

    const { fuserData, faccessToken, fuserAbilityRules } = response
    
    ability.update(fuserAbilityRules)
    await authStore.loginAsUser(faccessToken, fuserData, fuserAbilityRules)
    await nextTick(() => {
      router.replace(route.query.to ? String(route.query.to) : fuserData.userRedirectURL)
    })
  })

  
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
    style="justify-content: center;"
  >
    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText style="text-align:center">
          <img style="width: 200px; height: auto;" src="/images/logo.png">
        </VCardText>
        <VCardText style="width: 300px;">
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.username"
                  :label="$t('שם משתמש')"
                  :placeholder="$t('שם משתמש')"
                  autofocus
                  :rules="[requiredValidator]"
                  :error-messages="errors.username"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  :label="$t('סיסמא')"
                  placeholder="············"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between my-6">
                  <RouterLink
                    class="text-primary ms-2 mb-1"
                    :to="{ name: 'forgot-password' }"
                  >
                    {{ $t('שכחתי סיסמא') }}
                  </RouterLink>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  {{ $t('כניסה') }}
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
          <VBtn @click="isShowLoginWithPhone = true" style="margin-top: 15px; color: #32A744!important; border: 1px solid #32A744 !important" block type="button" variant="outline">כניסה באמצעות טלפון</VBtn>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <VDialog  
    v-model="isShowLoginWithPhone" 
    class="verify_modal" 
    max-width="500"
  >
    <VCard>
      <VForm
        ref="refVFormWithPhone"
        @submit.prevent="onSubmitWithPhone"
      >
        <VCardTitle class="text-h6" style="margin-bottom: 15px">
          כניסה באמצעות טלפון
        </VCardTitle>

        <VCardText>
          <VRow>
            <VCol cols="12">
              <label class="v-label mb-1 text-body-2 text-wrap"> הכנס מספר טלפון</label>
              <AppTextField
                v-model="phone"
                placeholder="הכנס מספר טלפון"
                :rules="[israelPhoneValidator]"
                :error-messages="errors.phone"
              />

              <!-- <AppTextField
                v-model="phone"
                placeholder="הכנס מספר טלפון"
                :error-messages="errors.phone"
              /> -->
            </VCol>

            <VCol cols="12">
              <div class="action_block">
                <VBtn type="submit" variant="outlined" style="color: #fff!important; background-color: #32A744!important; border-color:#32A744">
                   חייג אלי
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VForm>
    </VCard>
  </VDialog>

  <VDialog class="verify_modal" v-model="isShowOTPModal" max-width="500">
    <VCard>
      <VForm 
        ref="refFormVerifyPass"
        @submit.prevent="onSubmitVerifyLoginOTP"
      >
        <VCardTitle class="text-h6">
          בקרוב תקבל הודעה עם קוד חד-פעמי
        </VCardTitle>

        <VCardText>
          <AppTextField
            v-model="phoneOtp"
            label="הזן את הקוד"
            :rules="[requiredValidator]"
          />
        </VCardText>

        <VCardActions>
          <VSpacer />
          <VBtn :disabled="!phoneOtp" type="submit">
            אמת קוד
          </VBtn>
        </VCardActions>
      </VForm>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
