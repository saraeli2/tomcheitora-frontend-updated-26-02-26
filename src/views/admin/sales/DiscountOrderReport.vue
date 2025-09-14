<script setup>
import { useI18n } from 'vue-i18n'
import useHelper from "@/mixins/helper";

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const { numberFormat } = useHelper()

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-discount-reports'],
    subject: ['View Discount Report'],
    title: 'Discount Reports',
  },
})

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isSaleStationDialogVisible = ref(false)
const isAddNewSaleStationDrawerVisible = ref(false)
const saleStationDetail = ref()
const selectedSale = ref(props.saleid)

// Data table options
const itemsPerPage = ref(25)
const itemsPerPageSales = ref(25)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedStation = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const discountReportHeader = computed(() => [
  {
    title: t('שם מלא'),
    key: 'FullName',
    sortable: false,
  },
  {
    title: t('ת.ז.'),
    key: 'israeliID',
    sortable: false,
  },
  {
    title: t('כתובת'),
    key: 'fullAddress',
    sortable: false,
  },
  {
    title: t('עיר'),
    key: 'city',
    sortable: false,
  },
  {
    title: t('טלפון 1'),
    key: 'phone1',
    sortable: false,
  },
  {
    title: t('טלפון 2'),
    key: 'phone2',
    sortable: false,
  },
  {
    title: t('מייל'),
    key: 'email',
    sortable: false,
  },
  {
    title: t('הנחה'),
    key: 'totalDiscount',
    sortable: false,
  },

])

const {
  data: discountReportData,
  execute: fetchDiscountReport,
} = await useApi(createUrl('/admin/reports/discount-report', {
  query: {
    sale: selectedSale,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const discountReports = computed(() => discountReportData.value.report)
const totalDisoucntRows = computed(() => discountReportData.value.total)
</script>

<template>
  
  
    <VCard>
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Discount Report') }}
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
        </div>
      </VCardText>
      <VDivider />

      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalDisoucntRows"
        :headers="discountReportHeader"
        :items="discountReports"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- stationID -->
        
        <template #[`item.totalDiscount`]="{ item }">
          {{ numberFormat(item.totalDiscount) }}
        </template>

        <!-- time -->
        <template #[`item.FullName`]="{ item }">
          {{ item.user?.firstName }} {{ item.user?.lasttName }}
        </template>

        <!-- Created At -->
        <template #[`item.israeliID`]="{ item }">
          {{ item.user?.israeliIDNumber }}
        </template>

        <template #[`item.fullAddress`]="{ item }">
          {{ item.user?.street }} {{ item.user?.houseNumber }}<span v-if="(item.user?.street || item.user?.houseNumber) && item.user?.flatNo">,</span> {{ item.user?.flatNo }}
        </template>

        <template #[`item.city`]="{ item }">
          {{ item.user?.cityID?.nameHe }}
        </template>

        <template #[`item.phone1`]="{ item }">
          {{ item.user?.phone1 }}
        </template>
        <template #[`item.phone2`]="{ item }">
          {{ item.user?.phone2 }}
        </template>
        <template #[`item.email`]="{ item }">
          {{ item.user?.email }}
        </template>
      

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalDisoucntRows"
          />
        </template>
      </VDataTableServer>
    </VCard>
    
</template>
