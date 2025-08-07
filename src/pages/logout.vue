<script setup>
import { useAuthStore } from '@/stores'
import { useAbility } from '@casl/vue'

definePage({
  meta: {
    layout: 'default',
    public: true,
  },
})

const route = useRoute()
const router = useRouter()
const ability = useAbility()
const authStore = useAuthStore()

// TODO: Get type from backend
const logout = async () => {
  if(userData) {
    try {
      await $api('/logout', {
        method: 'POST',
        credentials: 'include',
      })

      // Remove "userData" from cookie
      userData.value = null
    } catch (err) {
      console.error('Router push failed:', err)
    }
  }

  // Remove "accessToken" from cookie
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilityRules')
  localStorage.setItem('logoutEvent', Date.now())

  // Reset ability to initial ability

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

  // Redirect to login page
  router.push({ name: 'login' })
  
  location.href = '/login'
}
</script>


