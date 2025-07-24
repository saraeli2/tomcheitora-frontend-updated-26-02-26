<script setup>
definePage({
  meta: {
    action: ['admin-view-users'],
    subject: ['View Users'],
    navActiveLink: 'admin-users',
    title: 'User Details',
  },
})

import KidModule from '@/pages/admin/users/kids.vue'
import AddNewUserDialog from '@/views/admin/users/AddNewUserDialog.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const ability = useAbility()

const isUserDialogVisible = ref(false)
const isResetPasswordDrawerVisible = ref(false)

const resolveStatusVariantAndIcon = status => {
  if (status === 'Active')
    return {
      variant: 'success',
      title: 'Yes',
    }
  
  return {
    variant: 'secondary',
    title: 'No',
  }
}

const route = useRoute('admin-users-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/admin/users/${ route.params.id }`))

if(error.value == 'Unauthorized') {
// Remove "accessToken" from cookie
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilityRules')

  // Reset ability to initial ability
  ability.update([])

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

  // Redirect to login page
  router.push({ name: 'admin-login' })

  location.href = '/admin/login'
}

const adminData = computed(() => adminDetail.value)
const adminFromData = computed(() => adminDetail.value)

const commonsyncCities = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const communities = ref([])

const handleUpdatedCommunities = async () => {
  try {
    const commonsync = await $api('/admin/communities/respond-with/extra-options')

    communities.value = commonsync.communityOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))
  } catch (err) {
    console.error('Failed to fetch updated communities:', err)
  }
}

const reloadTab = ref(true)

const modifyUser = async userData => {
  // refetch Organization
  fetchUsers()
}

const deleteUser = async () => {
  Swal.fire({
    title: t('delete.Are You Sure?'),
    html: t('delete.confirmMessage', {
      action: `<strong>${t('delete.confirmaction')}</strong>`,
    }),
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: t('delete.No, Cancel'),
    confirmButtonText: t('delete.Yes, Delete!'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/users/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-users' })
      }
    })
}

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}

onMounted( async () => {
  if(route.query.detailstab) {
    userTab.value = route.query.detailstab
  }
  await handleUpdatedCommunities()
})
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="adminData"
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <VRow>
        <VCol
          cols="12"
          md="12"
          lg="12"
        >
          <VBreadcrumbs
            class="px-0 pb-2 pt-0 help-center-breadcrumbs"
            :items="[{ title: $t('Users'), to: { name: 'admin-users' }, class: 'text-primary' }, { title: adminData.firstName + ' ' + adminData.lastName }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('User ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(adminData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(adminData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-users', 'Delete Users')"
          variant="tonal"
          color="error"
          @click="deleteUser"
        >
          {{ $t('Delete User') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Customer Profile  -->
    <VRow v-if="reloadTab">
      <VCol
        cols="12"
        md="12"
        lg="12"
      >
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-eye"
            />
            {{ $t('Details') }}
          </VTab>

          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-bookmarks"
            />
            {{ $t('Kid Informations') }}
          </VTab>
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="adminData">
              <VCardText
                v-if="adminData.imageID"
                class="text-center pt-12"
              >
                <VAvatar
                  rounded
                  :size="100"
                  color="primary"
                  variant="tonal"
                >
                  <VImg :src="adminData.imageID" />
                </VAvatar>
              </VCardText>

              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  {{ $t('Details') }}
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('First Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.firstName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Last Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.lastName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Email') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.email }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.phone }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('City') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.cityID ? adminData.cityID.nameHe : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Street') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('House Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Nationality') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.nationality }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Israeli ID Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.israeliIDNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Passport Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.passportNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('No. Of Kids') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.noOfKids }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Marital Status') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.maritalStatus }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        {{ $t('Status') }}:
                      </h6>
                      <VChip
                        label
                        :color="resolveStatusVariantAndIcon(adminData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(adminData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Created By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && adminData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: adminData.createdBy._id } }"
                        >
                          {{ adminData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ adminData.createdBy ? adminData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Updated By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && adminData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: adminData.updatedBy._id } }"
                        >
                          {{ adminData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ adminData.updatedBy ? adminData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-users', 'Update Users')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isUserDialogVisible = !isUserDialogVisible"
                >
                  {{ $t('Edit User') }}
                </VBtn>
              </VCardText>

              <VCardText
                v-if="can('admin-update-users', 'Update Users')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isResetPasswordDrawerVisible = !isResetPasswordDrawerVisible"
                >
                  {{ $t('Reset Password') }}
                </VBtn>
              </VCardText>
            </VCard>
          </VWindowItem>

          <VWindowItem>
            <KidModule
              :userid="route.params.id"
              @tab-data="refreshTab"
            />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert
        type="error"
        variant="tonal"
      >
        {{ route.params.id }} {{ $t('Not Found!') }}
      </VAlert>
    </div>

    <AddNewUserDialog
      v-if="isUserDialogVisible"
      v-model:is-dialog-visible="isUserDialogVisible"
      v-model:user="adminFromData"
      v-model:communities="communities"
      v-model:cities="cities"
      @communities="handleUpdatedCommunities"
      @user-data="modifyUser"
    />
  </div>
</template>
