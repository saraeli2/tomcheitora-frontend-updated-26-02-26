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
  data: stationDetail, execute: fetchStations,
} = await useApi(createUrl(`/admin/stations/${ route.params.id }`))

const stationData = computed(() => stationDetail.value)

const commonsync = await $api('/admin/admins/respond-with/extra-options').catch(err => console.log(err))
const adminOptions = computed(() => commonsync.adminOptions)

const admins = adminOptions.value.map(item => ({
  value: item._id,
  title: `${item.firstName} ${item.lastName}`,
}))

const reloadTab = ref(true)

const modifyStation = async userData => {
  // refetch Organization
  fetchStations()
}

const deleteStation = async () => {
  Swal.fire({
    title: 'Are You Sure?',
    html: 'Selecting Delete will <strong>permanently delete</strong> this item. This action cannot be undone.',
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'No, Cancel',
    confirmButtonText: 'Yes, Delete!',
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
            :items="[{ title: 'Stations', to: { name: 'admin-stations' }, class: 'text-primary' }, { title: 'Station Details of ' + stationData.name }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          Station ID #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          Created At: {{ formatDateWithTime(stationData.createdAt) }}, Updated At: {{ formatDateWithTime(stationData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-stations', 'Delete Stations')"
          variant="tonal"
          color="error"
          @click="deleteStation"
        >
          Delete Station
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
            Details
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

              <VCardText class="text-center pt-12">
                <!-- 👉 Customer fullName -->
                <div class="text-body-1">
                  Station ID #{{ stationData._id }}
                </div>
              </VCardText>

              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  Details
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      Name:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Neighbourhood:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.neighbourhood }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      City ID:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.cityId }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      City Name:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.cityName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Street:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      House Number:
                      <span class="text-body-1 d-inline-block">
                        {{ stationData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        Admin:
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
                          v-if="can('admin-view-admins', 'View Admins')"
                          :to="{ name: 'admin-admins-detail-id', params: { id: admin._id } }"
                        >
                          {{ admin.firstName }} {{ admin.lastName }}
                        </RouterLink>
                        <span v-else>{{ admin.name }}</span>
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        Status:
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
                      Created By:
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
                      Updated By:
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
                  Edit Station
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
        Station with ID  {{ route.params.id }} not found!
      </VAlert>
    </div>

    <AddNewStationDrawer
      v-if="isStationDialogVisible"
      v-model:is-drawer-open="isStationDialogVisible"
      v-model:station="stationData"
      v-model:admins="admins"
      @user-data="modifyStation"
    />
  </div>
</template>
