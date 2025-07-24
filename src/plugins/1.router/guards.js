import { useAuthStore } from '@/stores'
import { canNavigate } from '@layouts/plugins/casl'
import { themeConfig } from '@themeConfig'

export const setupGuards = router => {
  // 👉 router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {
    /*
         * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
         * Examples of public routes are, 404, under maintenance, etc.
         */
    if (to.meta.public)
      return
    
    
    const router = useRouter()

    window.addEventListener('storage', event => {
        if (event.key === 'logoutEvent') {
          const authStore = useAuthStore()
          localStorage.removeItem('logoutEvent')
          authStore.logout() // If you have a defined logout() action to clear state
          router.push({ name: 'admin-login' })
          location.href = '/admin/login'
        }
    })

    const authStore = useAuthStore()
    let userData = ''
    let accessToken = ''
    if(authStore) {
      userData = authStore.userData
      accessToken = authStore.accessToken
    }
    
    const { title } = to.meta;

    document.title = themeConfig.app.title + ' Panel | ' + title

    /**
         * Check if user is logged in by checking if token & user data exists in local storage
         * Feel free to update this logic to suit your needs
         */
    const isLoggedIn = !!(userData && accessToken)

    /*
          If user is logged in and is trying to access login like page, redirect to home
          else allow visiting the page
          (WARN: Don't allow executing further by return statement because next code will check for permissions)
         */
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }
    if (!canNavigate(to) && to.matched.length) {
      /* eslint-disable indent */
            return isLoggedIn
                ? { name: 'not-authorized' }
                : {
                    name: 'admin-login',
                    query: {
                        ...to.query,
                        to: to.fullPath !== '/' ? to.path : undefined,
                    },
                }
            /* eslint-enable indent */
    }
  })
}
