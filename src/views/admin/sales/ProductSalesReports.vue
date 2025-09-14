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
    action: ['admin-view-product-sales-reports'],
    subject: ['View Product Sales Report'],
    title: 'Product Sales Report',
  },
})

import { can } from '@layouts/plugins/casl'

const { t } = useI18n()
const { numberFormat } = useHelper()

const selectedSale = ref(props.saleid)
const selectedStations = ref([])
const selectedCities = ref([])

// 👉 headers
const headers = computed(() => [
  {
    title: t('Product Name'),
    key: 'productID',
    sortable: false,
  },
  {
    title: t('Product Number'),
    key: 'productNumber',
    sortable: false,
  },
  {
    title: t('Station Name'),
    key: 'stationID',
    sortable: false,
  },
  {
    title: t('City'),
    key: 'cityName',
    sortable: false,
  },
  {
    title: t('Quantity'),
    key: 'quantity',
    sortable: false,
  },
])
 const stations = ref([])

const commonsyncCities = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))


// 👉 fetch stations depending on city + sale
const handleStations = async () => {
  const commonsync = await $api('/admin/stations/respond-with/extra-options', {
    query: {
      sale: selectedSale.value,
      cities: selectedCities.value, // <-- pass selected cities
      selected: 1,
    },
  }).catch(err => console.log(err))

  stations.value = commonsync.stationOptions.map(item => ({
    value: item._id,
    title: item.name,
  }))

  // Reset station selection if stations no longer match
  selectedStations.value = selectedStations.value.filter(st =>
    stations.value.some(opt => opt.value === st)
  )
}

const {
  data: productSaleReportData,
  execute: fetchProductReport,
} = useApi(createUrl('/admin/reports/product-sales-report', {
  query: {
    sale: selectedSale,
    stations: selectedStations,
    cities: selectedCities,
  },
}))

const productSalesReports = computed(() => (productSaleReportData.value || {}).report || [])
</script>

<template>
  <div>
    <VCard>
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Product Sales Report') }}
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
              v-model="selectedCities"
              :items="cities"
              :placeholder="$t('Select City')"
              :label="$t('City')"
              clearable
              multiple
              @update:model-value="handleStations"
            />
          </VCol>
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
        :items-length="productSalesReports.length"
        :headers="headers"
        :items="productSalesReports"
        class="text-no-wrap"
      >
        <template #[`item.productID`]="{ item }">
          <RouterLink
            v-if="can('admin-view-products', 'View Products') && item.productID"
            :to="{ name: 'admin-products-detail-id', params: { id: item.productID } }"
          >
            {{ item.productName }}
          </RouterLink>
          <span v-else>{{ item.productName }}</span>
        </template>

        <template #[`item.productNumber`]="{ item }">
          <RouterLink
            v-if="can('admin-view-products', 'View Products') && item.productID"
            :to="{ name: 'admin-products-detail-id', params: { id: item.productID } }"
          >
            {{ item.productNumber }}
          </RouterLink>
          <span v-else>{{ item.productNumber }}</span>
        </template>

        <template #[`item.stationID`]="{ item }">
          <RouterLink
            v-if="can('admin-view-stations', 'View Stations') && item.stationID"
            :to="{ name: 'admin-stations-detail-id', params: { id: item.stationID } }"
          >
            {{ item.stationName }}
          </RouterLink>
          <span v-else>{{ item.stationName }}</span>
        </template>

        <!-- cityName -->
        <template #[`item.cityName`]="{ item }">
          {{ item.cityName }}
        </template>

        <template #[`item.quantity`]="{ item }">
          {{ item.totalQuantity }}
        </template>

        <!-- pagination -->
        <template #bottom />
      </VDataTableServer>
    </VCard>
  </div>
</template>
