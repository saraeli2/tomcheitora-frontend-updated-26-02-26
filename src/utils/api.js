import { useAuthStore } from '@/stores'
import { ofetch } from 'ofetch'

const authStore = useAuthStore()

export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  async onRequest({ options }) {
    const accessToken = authStore.accessToken
    if (accessToken)
      options.headers.append('Authorization', `Bearer ${accessToken}`)
  },
})
