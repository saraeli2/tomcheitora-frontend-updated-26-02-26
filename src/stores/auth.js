// import axios from '@axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : '',
    accessToken: localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : '',
    userAbilityRules: localStorage.getItem('userAbilityRules') ? JSON.parse(localStorage.getItem('userAbilityRules')) : [],
  }),
  actions: {
    login(accessToken, userData, userAbilityRules) {
      localStorage.setItem('userAbilityRules', JSON.stringify(userAbilityRules))
      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('accessToken', JSON.stringify(accessToken))
      localStorage.removeItem('logoutEvent')
      this.userData = userData
      this.accessToken = accessToken
      this.userAbilityRules = userAbilityRules
    },
    logout() {
      this.userData = ''
      this.accessToken = ''
      this.userAbilityRules = []
      localStorage.removeItem('userData')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userAbilityRules')
    },
  },
})
