<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-stations', 'admin-create-stations'],
    subject: ['View Stations', 'Create Stations'],
    title: 'Stations',
  },
})

import AddNewStationDrawer from '@/views/admin/stations/AddNewStationDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedCity = ref()
const selectedDM = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isStationDialogVisible = ref(false)
const isAddNewStationDrawerVisible = ref(false)
const stationDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = computed(() => [
  {
    title: t('Name'),
    key: 'name',
  },
  {
    title: t('Neighbourhood'),
    key: 'neighbourhood',
  },
  {
    title: t('City'),
    key: 'cityID',
  },
  {
    title: t('Street'),
    key: 'street',
  },
  {
    title: t('House Number'),
    key: 'houseNumber',
  },
  {
    title: t('Active'),
    key: 'status',
  },
  {
    title: t('Distribution Manager'),
    key: 'admins',
    sortable: false,
  },
  {
    title: t('Created At'),
    key: 'createdAt',
  },
  {
    title: t('Updated At'),
    key: 'updatedAt',
  },
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
  },
])

const {
  data: customerData,
  execute: fetchStations,
  error,
} = await useApi(createUrl('/admin/stations', {
  query: {
    search: searchQuery,
    status: selectedStatus,
    cityID: selectedCity,
    dm: selectedDM,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

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

const stations = computed(() => customerData.value.stations)
const totalStations = computed(() => customerData.value.total)

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

const modifyStation = async userData => {
  // refetch Station
  fetchStations()
}

const editStation = async value => {
  stationDetail.value = value
  
  isStationDialogVisible.value = true
}

const deleteStation = async id => {
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
        await $api(`/admin/stations/${ id }`, { method: 'DELETE' })
        fetchStations()
      }
    })  
}
</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Stations') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>{{ $t('Show') }}</span>
            <AppSelect
              :model-value="itemsPerPage"
              :items="[
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPage = parseInt($event, 10)"
            />
          </div>
          <!-- 👉 Create Station -->
          <VBtn
            v-if="can('admin-create-stations', 'Create Stations')"
            prepend-icon="tabler-plus"
            @click="isAddNewStationDrawerVisible = true"
          >
            {{ $t('Create Station') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-stations', 'View Stations')"
        v-model="panel"
      >
        <VExpansionPanel>
          <VExpansionPanelTitle>{{ $t('Search') }}</VExpansionPanelTitle>

          <VExpansionPanelText>
            <VCardText>
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    :placeholder="$t('Search Station')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedCity"
                    :items="cities"
                    :placeholder="$t('City')"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="3"
                >
                  <AppAutocomplete
                    v-model="selectedDM"
                    :items="admins"
                    :placeholder="$t('Distribution Manager')"
                    clearable
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 'Active', title: 'Active' },
                      { value: 'Inactive', title: 'Inactive' },
                    ]"
                    :placeholder="$t('Status')"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-stations', 'View Stations')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-stations', 'View Stations')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalStations"
        :headers="headers"
        :items="stations"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-stations-detail-id', params: { id: item._id } }">
            {{ item.name }}
          </RouterLink>
        </template>

        <!-- neighbourhood -->
        <template #[`item.neighbourhood`]="{ item }">
          {{ item.neighbourhood }}
        </template>

        <!-- cityID -->
        <template #[`item.cityID`]="{ item }">
          {{ item.cityID ? item.cityID.nameHe : '' }}
        </template>

        <!-- street -->
        <template #[`item.street`]="{ item }">
          {{ item.street }}
        </template>

        <!-- houseNumber -->
        <template #[`item.houseNumber`]="{ item }">
          {{ item.houseNumber }}
        </template>

        <!-- status -->
        <template #[`item.status`]="{ item }">
          <VChip
            label
            :color="resolveStatusVariantAndIcon(item.status).variant"
            size="small"
          >
            {{ resolveStatusVariantAndIcon(item.status).title }}
          </VChip>
        </template>

        <!-- admins -->
        <template #[`item.admins`]="{ item }">
          <VChip
            v-for="(admin, adminindex) in item.admins"
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
        </template>

        <!-- Created At -->
        <template #[`item.createdAt`]="{ item }">
          {{ formatDateWithTime(item.createdAt) }}
        </template>

        <!-- Updated At -->
        <template #[`item.updatedAt`]="{ item }">
          {{ formatDateWithTime(item.updatedAt) }}
        </template>

        <!-- Actions -->
        <template #[`item.actions`]="{ item }">
          <VBtn
            icon
            variant="text"
            color="medium-emphasis"
          >
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'admin-stations-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-stations', 'Update Stations')"
                  @click="editStation(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-stations', 'Delete Stations')"
                  @click="deleteStation(item._id)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>{{ $t('Delete') }}</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalStations"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewStationDrawer
      v-if="isAddNewStationDrawerVisible"
      v-model:is-drawer-open="isAddNewStationDrawerVisible"
      v-model:admins="admins"
      v-model:cities="cities"
      @user-data="modifyStation"
    />

    <AddNewStationDrawer
      v-if="isStationDialogVisible"
      v-model:is-drawer-open="isStationDialogVisible"
      v-model:station="stationDetail"
      v-model:admins="admins"
      v-model:cities="cities"
      @user-data="modifyStation"
    />
  </section>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-filter {
    inline-size: 12rem;
  }

  .roles {
    margin-inline-end: 5px;
  }
}
</style>
