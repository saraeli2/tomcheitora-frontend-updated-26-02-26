<script setup>
import { useAuthStore } from '@/stores'

definePage({
  meta: {
    action: ['read'],
    subject: ['Dashboard'],
    title: 'Account Settings',
  },
})

const authStore = useAuthStore()

import AccountSettingsAccount from '@/views/admin/profiles/AccountSettingsAccount.vue'
import AccountSettingsSecurity from '@/views/admin/profiles/AccountSettingsSecurity.vue'

const activeTab = ref(null)

const {
  data: userData,
  execute: fetchUsers,
} = await useApi(createUrl(`/admin/admins/${authStore.userData._id}`))

const customerData = computed(() => userData.value)

const modifyUser = async userData => {
  // refetch User
  fetchUsers()
}
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill"
    >
      <VTab>
        <VIcon
          size="20"
          start
          icon="tabler-users"
        />
        {{ $t('Account') }}
      </VTab>
      <VTab>
        <VIcon
          size="20"
          start
          icon="tabler-lock"
        />
        {{ $t('Security') }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem>
        <AccountSettingsAccount
          v-model:user="customerData"
          @user-data="modifyUser"
        />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem>
        <AccountSettingsSecurity @user-data="modifyUser" />
      </VWindowItem>
    </VWindow>
  </div>
</template>
