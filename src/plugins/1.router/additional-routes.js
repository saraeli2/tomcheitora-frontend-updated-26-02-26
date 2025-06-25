import { useAuthStore } from '@/stores'

// 👉 Redirects
export const redirects = [
  // ℹ️ We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    meta: {
      public: true,
      layout: 'default', // or 'blank' if you don’t want sidebar/navbar
    }
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: to => {
      // TODO: Get type from backend
      const authStore = useAuthStore()
      const userData = authStore.userData
      if (userData)
        return { name: 'admin-dashboards' }
      
      return { name: 'admin-login', query: to.query }
    }
  },
]