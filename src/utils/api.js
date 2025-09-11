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

const router = useRouter()

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
    
  }
})

