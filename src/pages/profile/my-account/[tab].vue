<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import AccountSettingsAccount from '@/views/front-pages/my-account/AccountSettingsAccount.vue'
import AccountSettingsKidInformations from '@/views/front-pages/my-account/AccountSettingsKidInformations.vue'
import DistributionStation from '@/views/front-pages/my-account/DistributionStation.vue'
import AccountSettingsSecurity from '@/views/front-pages/my-account/AccountSettingsSecurity.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { useAuthStore } from '@/stores'

const authStore = useAuthStore()
const route = useRoute('profile-my-account-tab')

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/users/${ authStore.fuserData._id }`))

const adminData = computed(() => adminDetail.value)
const adminFromData = computed(() => adminDetail.value)

const commonsyncCities = await $api('/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const stationOptions = computed(() => commonsyncCities.stationOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const stations = stationOptions.value.map(item => ({
  value: item._id,
  title: `${item.name}`,
}))

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  {
    title: 'Account',
    icon: 'tabler-users',
    tab: 'account',
  },
  {
    title: 'Security',
    icon: 'tabler-lock',
    tab: 'security',
  },
  {
    title: 'Kid Informations',
    icon: 'tabler-file-text',
    tab: 'kid-informations',
  },
  {
    title: 'Distribution station',
    icon: 'tabler-truck',
    tab: 'distribution-station',
  },
]

//definePage({ meta: { navActiveLink: 'front-pages-my-account-tab' } })
// definePage({
//   meta: {
//     layout: 'blank',
//     public: false,
//   },
// })

definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'My Account',
  },
})
</script>

<template>
  <div class="checkout-page product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ $t('My Account') }}</h2>
        </VCardText>
      </VContainer>
    </div>

    <VContainer>
      <div class="checkout-card">
      <VTabs
        v-model="activeTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="item in tabs"
          :key="item.icon"
          :value="item.tab"
          :to="{ name: 'profile-my-account-tab', params: { tab: item.tab } }"
        >
          <VIcon
            size="20"
            start
            :icon="item.icon"
          />
          {{ $t(item.title) }}
        </VTab>
      </VTabs>

      <VWindow
        v-model="activeTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <!-- Account -->
        <VWindowItem value="account">
          <AccountSettingsAccount :user="adminData" :cities="cities" @update:user="user = $event"/>
        </VWindowItem>

        <!-- Security -->
        <VWindowItem value="security">
          <AccountSettingsSecurity :user="adminData" />
        </VWindowItem>

        <!-- Billing -->
        <VWindowItem value="kid-informations">
          <AccountSettingsKidInformations :user="adminData"/>
        </VWindowItem>

        <!-- Notification -->
        <VWindowItem value="distribution-station">
          <DistributionStation :user="adminData" :stations="stations"/>
        </VWindowItem>
      </VWindow>
      </div>
    </VContainer>
    <Footer />
  </div>
</template>
