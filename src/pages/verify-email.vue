<script setup>
import { useAuthStore } from '@/stores'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})


const { t } = useI18n()
const ability = useAbility()

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()
const token = route.query.token

const userStore = useAuthStore()
const verifying = ref(true)
const error = ref(null)


onMounted(async () => {
  try {
    const res = await $api(`verify-email/${token}`)

    const { userData, accessToken, userAbilityRules } = res
    
    ability.update(userAbilityRules)
    await authStore.login(accessToken, userData, userAbilityRules)
    await nextTick(() => {
      console.log(userData.userRedirectURL)
      router.replace(route.query.to ? String(route.query.to) : userData.userRedirectURL)
    })

  } catch (err) {
    //console.log(err)
    error.value = err.response?.data?.message || 'Invalid or expired token'
  } finally {
    verifying.value = false
  }
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen verifing_page">
    <div v-if="verifying">{{ $t('Verifying your email...') }}</div>
    <div v-else-if="error" class="text-red-600">{{ $t(error) }}</div>
    <div v-else>{{ $t('Email verified successfully! Redirecting...') }}</div>
  </div>
</template>


<style>
  .verifing_page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: 40px;
    color: #000;
}
</style>
