// import axios from '@axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : '',
    accessToken: localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : '',
    userAbilityRules: localStorage.getItem('userAbilityRules') ? JSON.parse(localStorage.getItem('userAbilityRules')) : [],

    fuserData: localStorage.getItem('fuserData') ? JSON.parse(localStorage.getItem('fuserData')) : '',
    faccessToken: localStorage.getItem('faccessToken') ? JSON.parse(localStorage.getItem('faccessToken')) : '',
    fuserAbilityRules: localStorage.getItem('fuserAbilityRules') ? JSON.parse(localStorage.getItem('fuserAbilityRules')) : [],
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

    logoutAsUser() {
      this.fuserData = ''
      this.faccessToken = ''
      this.fuserAbilityRules = []
      localStorage.removeItem('fuserData')
      localStorage.removeItem('faccessToken')
      localStorage.removeItem('fuserAbilityRules')

      localStorage.removeItem('verificationPopupShown')
      localStorage.removeItem('updateEmailPhonePopupShown')
      localStorage.removeItem('passwordResetPopupShown')
      localStorage.removeItem('generalInfoPopupShown')
      localStorage.removeItem('kidsInfoPopupShown')
      localStorage.removeItem('stationPopupShown')

    },

    loginAsUser(faccessToken, fuserData, fuserAbilityRules) {
      localStorage.setItem('fuserAbilityRules', JSON.stringify(fuserAbilityRules))
      localStorage.setItem('fuserData', JSON.stringify(fuserData))
      localStorage.setItem('faccessToken', JSON.stringify(faccessToken))

      this.fuserData = fuserData
      this.faccessToken = faccessToken
      this.fuserAbilityRules = fuserAbilityRules
    },

    updateStation(userData) {
      if (this.fuserData) {
        this.fuserData.stationID = userData.stationID
        localStorage.setItem('fuserData', JSON.stringify(this.fuserData))
      }
    },

    updateStationId(stationID) {
      if (this.fuserData) {
        this.fuserData.stationID = stationID
        localStorage.setItem('fuserData', JSON.stringify(this.fuserData))
      }
    },
  },
})
