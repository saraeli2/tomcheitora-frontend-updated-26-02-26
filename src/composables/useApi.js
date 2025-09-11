import { useAuthStore } from '@/stores';
import { createFetch } from '@vueuse/core'
import { destr } from 'destr'
import useHelper from '@/mixins/helper'

const authStore = useAuthStore()
const { isAdmin } = useHelper()

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  fetchOptions: {
    headers: {
      Accept: 'application/json',
    },
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      if(isAdmin()) {
        const accessToken = authStore.accessToken
        if (accessToken) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
          }
        }
      }else{
        const faccessToken = authStore.faccessToken
        if (faccessToken) {
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${faccessToken}`,
          }
        }
      }
      
      return { options }
    },
    afterFetch(ctx) {
      const { data, response } = ctx

      // Parse data if it's JSON
      let parsedData = null
      try {
        parsedData = destr(data)
      }
      catch (error) {
        console.error(error)
      }
      
      return { data: parsedData, response }
    },
  },
})
