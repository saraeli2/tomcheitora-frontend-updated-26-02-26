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
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.username"
                  :label="$t('Login Username')"
                  :placeholder="$t('Login Username')"
                  autofocus
                  :rules="[requiredValidator]"
                  :error-messages="errors.username"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  :label="$t('Login Password')"
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
                    {{ $t('Forgot Password?') }}
                  </RouterLink>
                </div>

                <VBtn
                  block
                  type="submit"
                >
                  {{ $t('Login') }}
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
