<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import authV2ForgotPasswordIllustrationDark from '@images/pages/auth-v2-forgot-password-illustration-dark.png'
import authV2ForgotPasswordIllustrationLight from '@images/pages/auth-v2-forgot-password-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'

import { useConfigStore } from '@core/stores/config'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

const toast = useToast()

const { t } = useI18n()

const configStore = useConfigStore()

const route = useRoute()
const router = useRouter()

configStore.isAppRTL = true

const recoveryMethod = ref(null)
const email = ref()
const phone = ref()
const sentOtp = ref(false)
const otp = ref()
const otpVerified = ref(false)

const authThemeImg = useGenerateImageVariant(authV2ForgotPasswordIllustrationLight, authV2ForgotPasswordIllustrationDark)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
    title: 'Reset Password',
  },
})

const errors = ref({
  recoveryMethod: undefined,
  email: undefined,
  phone: undefined,
})

const refForm = ref()

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

const submit = async() =>{
  try {
    const res = await $api('/send-otp', {
      method: 'POST',
      body: {
        method: recoveryMethod.value,
        identifier: (recoveryMethod.value == 'email') ?  email.value : phone.value,
      },
      credentials: 'include',
      onResponseError({ response }) {
        toast.error(t(response._data.message))
      },
    })

    await nextTick(() => {
      sentOtp.value = true
      toast.success(t(res.message))
      
    })
  } catch (err) {
    console.log(err)
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
  try {
    const res = await $api('/verify-otp', {
      method: 'POST',
      body: {
        otp: otp.value,
        identifier: (recoveryMethod.value == 'email') ?  email.value : phone.value,
      },
      credentials: 'include',
      onResponseError({ response }) {
        toast.error(t(response._data.message))
      },
    })

    await nextTick(() => {
      otpVerified.value = true
      toast.success(t(res.message))
      
    })
  } catch (err) {
    console.log(err)
  }
}

const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const confirmPassword = ref('')
const password = ref('')

const passwordRequirements = [
  'נא להזין סיסמא באורך 8 תוים לפחות שמכילה',
  'לפחות אות אחת',
  'מספר אחד',
  'תו מיוחד מהרשימה - ^ % $ # @ ! *',
]

const onSubmitReset = async () => {
  try {
    const res = await $api(`reset-password`, {
      method: 'POST',
      body: {
        confirmPassword: confirmPassword.value,
        password: password.value,
        identifier: (recoveryMethod.value == 'email') ?  email.value : phone.value,
      },
      onResponseError({ response }) {
        toast.error(response._data.message)
      },
    })

    await nextTick(() => {
      toast.success(t(res.message))
      router.replace('/login')
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow
    class="auth-wrapper bg-surface"
    no-gutters
  >
    <VCol
      v-if="!otpVerified"
      cols="12"
      md="4"
      class="d-flex align-center justify-center"
    >
      <VCard
        v-if="!sentOtp"
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ $t('Forgot Password') }}? 🔒
          </h4>
          <p class="mb-0">
            {{ $t("Enter your email and we'll send you instructions to reset your password") }}
          </p>
        </VCardText>

        <VCardText>
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol cols="12">
                <AppSelect
                  v-model="recoveryMethod"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'sms', title: 'SMS' },
                    { value: 'email', title: 'Email' },
                  ]"
                  :placeholder="$t('Select Option')"
                  :label="$t('Recovery Method')"
                />
              </VCol>
              <!-- email -->
              <VCol 
                v-if="recoveryMethod && recoveryMethod=='email'"
                cols="12" 
              >
                <AppTextField
                  v-model="email"
                  autofocus
                  :label="$t('Email')"
                  type="email"
                  placeholder="johndoe@email.com"
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <VCol 
                v-else-if="recoveryMethod && recoveryMethod=='sms'"
                cols="12" 
              >
                <AppTextField
                  v-model="phone"
                  autofocus
                  :label="$t('Phone')"
                  placeholder="Phone no"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- Reset link -->
              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                >
                  {{ $t('Submit') }}
                </VBtn>
              </VCol>

              <!-- back to login -->
              <VCol cols="12">
                <RouterLink
                  class="d-flex align-center justify-center"
                  :to="{ name: 'login' }"
                >
                  <VIcon
                    icon="tabler-chevron-left"
                    size="20"
                    class="me-1 flip-in-rtl"
                  />
                  <span>{{ $t('Back to login') }}</span>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
      <VCard
        v-else-if="sentOtp"
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ $t('Verify your OTP') }}
          </h4>
        </VCardText>

        <VCardText>
          <VForm
            ref="refFormVerify"
            @submit.prevent="onSubmitVerify"
          >
            <VRow>
              <VCol cols="12">
                <AppTextField
                  v-model="otp"
                  autofocus
                  :label="$t('OTP')"
                  :placeholder="$t('Enter your otp')"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VBtn
                  block
                  type="submit"
                >
                  {{ $t('Submit') }}
                </VBtn>
              </VCol>

              <!-- back to login -->
              <VCol cols="12">
                <RouterLink
                  class="d-flex align-center justify-center"
                  :to="{ name: 'login' }"
                >
                  <VIcon
                    icon="tabler-chevron-left"
                    size="20"
                    class="me-1 flip-in-rtl"
                  />
                  <span>{{ $t('Back to login') }}</span>
                </RouterLink>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
    <VCol
      v-else
      cols="12"
      md="4"
      class="d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ $t('Reset your password') }} 🔒
          </h4>
        </VCardText>

        <VCardText>
          <VForm 
            ref="refFormReset"
            @submit.prevent="onSubmitReset"
          >
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
              <VBtn type="submit">
                {{ $t('Submit') }}
              </VBtn>
            </VCardText>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol
      md="8"
      class="d-none d-md-flex"
    >
      <div class="position-relative bg-background w-100 me-0">
        <div
          class="d-flex align-center justify-center w-100 h-100"
          style="padding-inline: 150px;"
        >
          <VImg
            max-width="468"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <img
          class="auth-footer-mask"
          :src="authThemeMask"
          alt="auth-footer-mask"
          height="280"
          width="100"
        >
      </div>
    </VCol>
    
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
