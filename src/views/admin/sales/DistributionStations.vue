<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-sale-stations', 'admin-create-sale-stations'],
    subject: ['View Sale Stations', 'Create Sale Stations'],
    title: 'Sale Stations',
  },
})

import AddNewSaleStationDrawer from '@/views/admin/sales/AddNewSaleStationDrawer.vue'
import { can } from '@layouts/plugins/casl'

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isSaleStationDialogVisible = ref(false)
const isAddNewSaleStationDrawerVisible = ref(false)
const saleStationDetail = ref()
const selectedSale = ref(props.saleid)

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedStation = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const headers = computed(() => [
  {
    title: t('Station'),
    key: 'stationID',
    sortable: false,
  },
  {
    title: t('Date of Distribution'),
    key: 'date',
  },
  {
    title: t('HH:MM of Distribution'),
    key: 'time',
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
  data: saleStationData,
  execute: fetchSaleStations,
} = await useApi(createUrl('/admin/sale-stations', {
  query: {
    sale: selectedSale,
    station: selectedStation,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const saleStations = computed(() => saleStationData.value.saleStations)
const totalSaleStations = computed(() => saleStationData.value.total)

const commonsync = await $api('/admin/stations/respond-with/extra-options').catch(err => console.log(err))

const stationOptions = computed(() => commonsync.stationOptions)

const stations = stationOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const modifySaleStation = async userData => {
  // refetch Station
  fetchSaleStations()
  emit('tabData')
}

const editSaleStation = async value => {
  saleStationDetail.value = value
  
  isSaleStationDialogVisible.value = true
}

const deleteSaleStation = async id => {
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
        await $api(`/admin/sale-stations/${ id }`, { method: 'DELETE' })
        fetchSaleStations()
        emit('tabData')
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
              {{ $t('Sale Stations') }}
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
                { value: 5, title: '5' },
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
            v-if="can('admin-create-sale-stations', 'Create Sale Stations')"
            prepend-icon="tabler-plus"
            @click="isAddNewSaleStationDrawerVisible = true"
          >
            {{ $t('Add Sale Station') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Select status -->
          <div class="invoice-list-filter">
            <AppSelect
              v-model="selectedStation"
              :placeholder="$t('Select Station')"
              clearable
              clear-icon="tabler-x"
              single-line
              :items="stations"
            />
          </div>
        </div>
      </VCardText>

      <VDivider />

      <VDivider v-if="can('admin-view-sale-stations', 'View Sale Stations')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-sale-stations', 'View Sale Stations')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalSaleStations"
        :headers="headers"
        :items="saleStations"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- stationID -->
        <template #[`item.stationID`]="{ item }">
          <RouterLink
            v-if="can('admin-view-stations', 'View Stations') && item.stationID"
            :to="{ name: 'admin-stations-detail-id', params: { id: item.stationID._id } }"
          >
            {{ item.stationID.name }}
          </RouterLink>
          <span v-else>{{ item.stationID ? item.stationID.name : '' }}</span>
        </template>

        <!-- date -->
        <template #[`item.date`]="{ item }">
          {{ formatDate(item.distributionDate) }}
        </template>

        <!-- time -->
        <template #[`item.time`]="{ item }">
          {{ formatTime(item.distributionDate) }}
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
                <VListItem
                  v-if="can('admin-update-sale-stations', 'Update Sale Stations')"
                  @click="editSaleStation(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-sale-stations', 'Delete Sale Stations')"
                  @click="deleteSaleStation(item._id)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
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
            :total-items="totalSaleStations"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewSaleStationDrawer
      v-if="isAddNewSaleStationDrawerVisible"
      v-model:is-drawer-open="isAddNewSaleStationDrawerVisible"
      v-model:stations="stations"
      v-model:saleid="selectedSale"
      @user-data="modifySaleStation"
    />

    <AddNewSaleStationDrawer
      v-if="isSaleStationDialogVisible"
      v-model:is-drawer-open="isSaleStationDialogVisible"
      v-model:sale-station="saleStationDetail"
      v-model:stations="stations"
      v-model:saleid="selectedSale"
      @user-data="modifySaleStation"
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
}
</style>
