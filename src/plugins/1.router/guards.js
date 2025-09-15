import { useAuthStore } from '@/stores'
import { canNavigate } from '@layouts/plugins/casl'
import { themeConfig } from '@themeConfig'
import useHelper from '@/mixins/helper'
import axios from 'axios'

const { isAdmin } = useHelper()

export const setupGuards = (router) => {
  router.beforeEach(async (to) => {
    const authStore = useAuthStore()
    const fuserData = authStore?.fuserData || null
    const fuserToken = authStore?.faccessToken || null
    const userData = authStore?.userData || null
    const userToken = authStore?.accessToken || null

    document.title = `${themeConfig.app.title} Panel | ${to.meta.title || ''}`

    const isUserLoggedIn = !!(fuserData && fuserToken)
    const isAdminLoggedIn = !!(userData && userToken)

    // Redirect logged-in users from login page
    if ((to.path === '/' || to.path === '/login') && isUserLoggedIn) {
      return { path: '/profile/my-account/account' }
    }

    // ---------------------- Admin Routes ----------------------
    if (isAdmin()) {
      // Unauthenticated-only route for admin
      if (to.meta.unauthenticatedOnly) {
        if (isAdminLoggedIn && to.name !== 'admin-dashboards') {
          return { name: 'admin-dashboards' }
        } else {
          return true
        }
      }

      // Permission check
      try {
        if (!canNavigate(to) && to.matched.length) {
          if (isAdminLoggedIn && to.name !== 'not-authorized') {
            return { name: 'not-authorized' }
          } else if (!isAdminLoggedIn && to.name !== 'admin-login') {
            return { name: 'admin-login', query: { to: to.fullPath !== '/' ? to.path : undefined } }
          }
        }
      } catch (err) {
        console.warn('CASL Ability not ready', err)
      }

      return true
    }

    // ---------------------- Frontend User Routes ----------------------
    let saleClosed = false
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/sale-status`)
      saleClosed = data.saleClosed
    } catch (err) {
      console.error('Error fetching sale status', err)
    }

    // Redirect to sale-closed page
    if (saleClosed && to.name !== 'sale-closed') {
      return { name: 'sale-closed' }
    }

    // Redirect users without station
    if (isUserLoggedIn && !fuserData?.stationID && to.path !== '/profile/my-account/account') {
      return { path: '/profile/my-account/account' }
    }

    // Unauthenticated-only routes for users
    if (to.meta.unauthenticatedOnly) {
      if (isUserLoggedIn) return '/'
      else return true
    }

    // Permission check
    try {
      if (!canNavigate(to) && to.matched.length) {
        const allowedPaths = ['/logout', '/sale-closed']

        if (isUserLoggedIn && to.name !== 'not-authorized' && !allowedPaths.includes(to.fullPath)) {
          return { name: 'not-authorized' }
        } else if (!isUserLoggedIn && to.name !== 'login') {
          if (to.fullPath === '/logout') return { name: 'login' }
          else if (to.fullPath !== '/sale-closed') return { name: 'login', query: { to: to.fullPath } }
        }
      }
    } catch (err) {
      console.warn('CASL Ability not ready', err)
    }

    return true
  })
}
