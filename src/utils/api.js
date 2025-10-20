// import { useAuthStore } from '@/stores'
// import { ofetch } from 'ofetch'

// const authStore = useAuthStore()

// export const $api = ofetch.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
//   async onRequest({ options }) {
//     const accessToken = authStore.accessToken
//     if (accessToken)
//       options.headers.append('Authorization', `Bearer ${accessToken}`)
//   },
// })

import { useAuthStore } from '@/stores'
import { ofetch } from 'ofetch'
import useHelper from '@/mixins/helper'
import Cookies from 'js-cookie'

const { isAdmin } = useHelper()
const authStore = useAuthStore()

export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  async onRequest({ options }) {
    if(isAdmin()) {
      const accessToken = authStore.accessToken
      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        }
      }
    } else {
      const faccessToken = authStore.faccessToken
      if (faccessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${faccessToken}`,
        }
      }
    }
    
  },
  async onResponseError({ response }) {
    const authStore = useAuthStore()
    const status = response?.status

    console.log(status);

    if (status === 401 || status === 419 || status === 403 || status === 500) {
      // Clear user session
      if(isAdmin()) {
        localStorage.removeItem('userData')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('userAbilityRules')

        const authStore = useAuthStore()
        authStore.$reset?.() // reset pinia store if defined

        // Redirect to login
        window.location.href = '/admin/login'
      }else{
        localStorage.removeItem('fuserData')
        localStorage.removeItem('faccessToken')
        localStorage.removeItem('fuserAbilityRules')

        const authStore = useAuthStore()
        authStore.$reset?.() // reset pinia store if defined

        // Redirect to login
        window.location.href = '/login'
      }
      
    }
  },
})

