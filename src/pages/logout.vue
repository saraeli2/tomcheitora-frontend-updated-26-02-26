<script setup>

definePage({
  meta: {
    layout: 'blank',
    public: true
  },
})

const route = useRoute()
const router = useRouter()

// TODO: Get type from backend
const logout = async () => {
  // Remove "accessToken" from cookie
  localStorage.removeItem('fuserData')
  localStorage.removeItem('faccessToken')
  localStorage.removeItem('fuserAbilityRules')
  localStorage.removeItem('verificationPopupShown')
  localStorage.removeItem('updateEmailPhonePopupShown')
  localStorage.removeItem('passwordResetPopupShown')
  localStorage.removeItem('generalInfoPopupShown')
  localStorage.removeItem('kidsInfoPopupShown')
  localStorage.removeItem('stationPopupShown')

  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilityRules')
  localStorage.setItem('logoutEvent', Date.now())

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

  // Redirect to login page
  router.push({ name: 'login' })
  
  location.href = '/login'
}
logout() // Immediately trigger logout
</script>

<template>
  <!-- Empty template for logout page -->
  <div>Logging out...</div>
</template>

