<script setup>
import { useI18n } from 'vue-i18n'
import useHelper from "@/mixins/helper"

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
    action: ['admin-view-sale-orders'],
    subject: ['Order'],
    title: 'Stations Users Report',
  },
})

import { can } from '@layouts/plugins/casl'

const { t } = useI18n()
const { numberFormat } = useHelper()

const selectedSale = ref(props.saleid)
const selectedStations = ref([])

// 👉 headers
const headers = computed(() => [
  {
    title: t('Israeli ID Number'),
    key: 'israeliID',
    sortable: false,
  },
  {
    title: t('Full Name'),
    key: 'fullName',
    sortable: false,
  },
  {
    title: t('Created At'),
    key: 'createdAt',
    sortable: false,
  },
  {
    title: t('Updated At'),
    key: 'updatedAt',
    sortable: false,
  },
  {
    title: t('SubTotal'),
    key: 'subTotal',
    sortable: false,
  },
  {
    title: t('Discount'),
    key: 'discount',
    sortable: false,
  },
  {
    title: t('Total'),
    key: 'total',
    sortable: false,
  },
  {
    title: t('Total Items'),
    key: 'totalItems',
    sortable: false,
  },
])


const commonsync = await $api('/admin/stations/respond-with/extra-options', {
  query: {
    sale: selectedSale.value,
    selected: 1,
  },
}).catch(err => console.log(err))

const stationOptions = computed(() => commonsync.stationOptions)

const stations = stationOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const {
  data: productSaleReportData,
  execute: fetchProductReport,
} = useApi(createUrl('/admin/reports/station-users-report', {
  query: {
    sale: selectedSale,
    stations: selectedStations,
  },
}))

const stationUsersReports = computed(() => (productSaleReportData.value || {}).report || [])
</script>

<template>
  <div>
    <VCard>
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Stations Users Report') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>
      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <VRow>
          <VCol
            cols="12"
            md="6"
          >
            <AppAutocomplete
              v-model="selectedStations"
              :items="stations"
              :placeholder="$t('Select Station')"
              :label="$t('Station')"
              clearable
              multiple
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VDataTableServer
        :items-length="stationUsersReports.length"
        :headers="headers"
        :items="stationUsersReports"
        class="text-no-wrap"
      >
        <template #[`item.israeliID`]="{ item }">
          <RouterLink
            v-if="can('admin-view-users', 'User') && item.userID"
            :to="{ name: 'admin-users-detail-id', params: { id: item.userID } }"
          >
            {{ item.israeliID }}
          </RouterLink>
          <span v-else>{{ item.israeliID }}</span>
        </template>

        <template #[`item.fullName`]="{ item }">
          <RouterLink
            v-if="can('admin-view-users', 'User') && item.userID"
            :to="{ name: 'admin-users-detail-id', params: { id: item.userID } }"
          >
            {{ item.fullName }}
          </RouterLink>
          <span v-else>{{ item.fullName }}</span>
        </template>

        <!-- Created At -->
        <template #[`item.createdAt`]="{ item }">
          {{ formatDateWithTime(item.createdAt) }}
        </template>

        <!-- Updated At -->
        <template #[`item.updatedAt`]="{ item }">
          {{ formatDateWithTime(item.updatedAt) }}
        </template>

        <!-- cityName -->
        <template #[`item.cityName`]="{ item }">
          {{ item.cityName }}
        </template>

        <template #[`item.subTotal`]="{ item }">
          {{ numberFormat(item.subTotal) }}
        </template>

        <template #[`item.discount`]="{ item }">
          {{ numberFormat(item.discount) }}
        </template>

        <template #[`item.total`]="{ item }">
          {{ numberFormat(item.total) }}
        </template>

        <!-- pagination -->
        <template #bottom />
      </VDataTableServer>
    </VCard>
  </div>
</template>
