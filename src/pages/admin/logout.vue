<script setup>
import { useAuthStore } from '@/stores'

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
const userData = authStore.userData
if(userData) {
// Remove "userData" from cookie
  userData.value = null
}

// Remove "accessToken" from cookie
localStorage.removeItem('userData')
localStorage.removeItem('accessToken')
localStorage.removeItem('userAbilityRules')

// Reset ability to initial ability
ability.update([])

// ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

location.href = '/admin/login'

// Redirect to login page
try {
  router.push({ name: 'admin-login' })
} catch (err) {
  console.error('Router push failed:', err)
}
</script>


