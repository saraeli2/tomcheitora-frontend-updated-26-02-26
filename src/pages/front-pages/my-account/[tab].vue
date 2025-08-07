<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import AccountSettingsAccount from '@/views/front-pages/my-account/AccountSettingsAccount.vue'
import AccountSettingsBillingAndPlans from '@/views/front-pages/my-account/AccountSettingsKidInformations.vue'
import OrderHistory from '@/views/front-pages/my-account/OrderHistory.vue'
import AccountSettingsSecurity from '@/views/front-pages/my-account/AccountSettingsSecurity.vue'

const route = useRoute('front-pages-my-account-tab')

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
    title: 'Billing',
    icon: 'tabler-file-text',
    tab: 'billing',
  },
  {
    title: 'Order History',
    icon: 'tabler-bell',
    tab: 'order-history',
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
  },
})
</script>

<template>
  <div class="checkout-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>My Account</h2>
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
          :to="{ name: 'front-pages-my-account-tab', params: { tab: item.tab } }"
        >
          <VIcon
            size="20"
            start
            :icon="item.icon"
          />
          {{ item.title }}
        </VTab>
      </VTabs>

      <VWindow
        v-model="activeTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <!-- Account -->
        <VWindowItem value="account">
          <AccountSettingsAccount />
        </VWindowItem>

        <!-- Security -->
        <VWindowItem value="security">
          <AccountSettingsSecurity />
        </VWindowItem>

        <!-- Billing -->
        <VWindowItem value="billing">
          <AccountSettingsBillingAndPlans />
        </VWindowItem>

        <!-- Notification -->
        <VWindowItem value="order-history">
          <OrderHistory />
        </VWindowItem>
      </VWindow>
      </div>
    </VContainer>
    <Footer />
  </div>
</template>
