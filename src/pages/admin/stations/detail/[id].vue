<script setup>
definePage({
  meta: {
    action: ['admin-view-stations'],
    subject: ['View Stations'],
    navActiveLink: 'admin-stations',
    title: 'Station Details',
  },
})

import AddNewStationDrawer from '@/views/admin/stations/AddNewStationDrawer.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const ability = useAbility()

const isStationDialogVisible = ref(false)

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

const route = useRoute('admin-stations-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: stationDetail, execute: fetchStations, error,
} = await useApi(createUrl(`/admin/stations/${ route.params.id }`))

if(error.value) {
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

const stationData = computed(() => stationDetail.value)

const commonsync = await $api('/admin/distribution-managers/respond-with/extra-options').catch(err => console.log(err))
const adminOptions = computed(() => commonsync.adminOptions)

const admins = adminOptions.value.map(item => ({
  value: item._id,
  title: `${item.firstName} ${item.lastName}, ${item.phone1}`,
}))

const commonsyncCities = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const reloadTab = ref(true)

const modifyStation = async userData => {
  // refetch Organization
  fetchStations()
}

const deleteStation = async () => {
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
        await $api(`/admin/stations/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-stations' })
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
})
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="stationData"
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
            :items="[{ title: $t('Stations'), to: { name: 'admin-stations' }, class: 'text-primary' }, { title: stationData.name }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Station ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(stationData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(stationData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-stations', 'Delete Stations')"
          variant="tonal"
          color="error"
          @click="deleteStation"
        >
          {{ $t('Delete Station') }}
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
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="stationData">
              <VCardText
                v-if="stationData.logo"
                class="text-center pt-12"
              >
                <VAvatar
                  rounded
                  :size="100"
                  color="primary"
                  variant="tonal"
                >
                  <VImg :src="stationData.logo" />
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
                      {{ $t('Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Neighbourhood') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.neighbourhood }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('City') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.cityID ? stationData.cityID.nameHe : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Street') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('House Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        {{ $t('Distribution Manager') }}:
                      </h6>
                      <VChip
                        v-for="(admin, adminindex) in stationData.admins"
                        :key="adminindex"
                        label
                        color="success"
                        size="small"
                        class="roles"
                      >
                        <RouterLink
                          v-if="can('admin-view-distribution-managers', 'View Distribution Managers')"
                          :to="{ name: 'admin-distribution-managers-detail-id', params: { id: admin._id } }"
                        >
                          {{ admin.firstName }} {{ admin.lastName }}, {{ admin.phone1 }}
                        </RouterLink>
                        <span v-else>{{ admin.firstName }} {{ admin.lastName }}, {{ admin.phone1 }}</span>
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        {{ $t('Status') }}:
                      </h6>
                      <VChip
                        label
                        :color="resolveStatusVariantAndIcon(stationData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(stationData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Created By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && stationData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: stationData.createdBy._id } }"
                        >
                          {{ stationData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ stationData.createdBy ? stationData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Updated By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && stationData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: stationData.updatedBy._id } }"
                        >
                          {{ stationData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ stationData.updatedBy ? stationData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-stations', 'Update Stations')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isStationDialogVisible = !isStationDialogVisible"
                >
                  {{ $t('Edit Station') }}
                </VBtn>
              </VCardText>
            </VCard>
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

    <AddNewStationDrawer
      v-if="isStationDialogVisible"
      v-model:is-drawer-open="isStationDialogVisible"
      v-model:station="stationData"
      v-model:admins="admins"
      v-model:cities="cities"
      @user-data="modifyStation"
    />
  </div>
</template>
