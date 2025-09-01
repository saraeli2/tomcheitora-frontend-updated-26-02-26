import { useAuthStore } from '@/stores'
import { canNavigate } from '@layouts/plugins/casl'
import { themeConfig } from '@themeConfig'
import useHelper from '@/mixins/helper'

const { isAdmin } = useHelper()

export const setupGuards = router => {
  // 👉 router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {

    //console.log(to.meta.public)

    /*
         * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
         * Examples of public routes are, 404, under maintenance, etc.
         */
    // if (to.meta.public)
    //   return

    const authStore = useAuthStore()
    let fuserData = ''
    let fuserToken = ''
    let userData = ''
    let userToken = ''
    if(authStore) {
      if(authStore.faccessToken) {
        fuserData = authStore.fuserData
        fuserToken = authStore.faccessToken
      }
      if(authStore.userToken) {
        userData = authStore.userData
        userToken = authStore.accessToken
      }
    }

    document.title = themeConfig.app.title + ' Panel | ' + to.meta.title

    /**
    * Check if user is logged in by checking if token & user data exists in local storage
    * Feel free to update this logic to suit your needs
    */
    const isUserLoggedIn = !!(fuserData && fuserToken)
    const isAdminLoggedIn = !!(userData && userToken)

    /*
    If user is logged in and is trying to access login like page, redirect to home
    else allow visiting the page
    (WARN: Don't allow executing further by return statement because next code will check for permissions)
   */
    
   // console.log((to.path));
   //console.log(isUserLoggedIn);

    if ((to.path === '/' || to.path === '/login') && isUserLoggedIn) {
      return { path: '/profile/my-account/account' }  // 👈 redirect to profile
    }

    

    if(isAdmin()) {
      if (to.meta.unauthenticatedOnly) {
        if (isAdminLoggedIn)
          return '/admin/dashboards'
        else
          return undefined
      }
      if (!canNavigate(to) && to.matched.length) {
        if(isAdminLoggedIn) {
            return { name: 'not-authorized' }
        } else {
            return {
                name: 'admin-login',
                query: {
                    ...to.query,
                    to: to.fullPath !== '/' ? to.path : undefined,
                },
            }
        }
      }
    } else {
      const stationRedirect = '/profile/my-account/account'

      if (
        isUserLoggedIn && !fuserData.stationID && to.path !== '/profile/my-account/account'
      ) {
        return { path: '/profile/my-account/account' }
      }
      if (to.meta.unauthenticatedOnly) {
        if (isUserLoggedIn)
          return '/'
        else
          return undefined
      }
      
      //console.log(to);

      if (!canNavigate(to) && to.matched.length) {
        if(isUserLoggedIn) {
            return { name: 'not-authorized' }
        } else {
            return {
                name: 'login',
                query: { to: to.fullPath }
            }
        }
      }
    }
  })
}
