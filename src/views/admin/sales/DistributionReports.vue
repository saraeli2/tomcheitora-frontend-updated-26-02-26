<script setup>
import { useI18n } from 'vue-i18n'
import useHelper from "@/mixins/helper";
import DiscountOrderReport from '@/views/admin/sales/DiscountOrderReport.vue'
import SalesReport from '@/views/admin/sales/SalesReport.vue'
import OrderReport from '@/views/admin/sales/OrderReport.vue'
import ProductReports from '@/views/admin/sales/productReports.vue'
import ProductSalesReports from '@/views/admin/sales/ProductSalesReports.vue'
import StationUsersReports from '@/views/admin/sales/StationUsersReports.vue'

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
    action: ['admin-view-orders'],
    subject: ['View Orders'],
    title: 'Sale Reports',
  },
})

import { can } from '@layouts/plugins/casl'

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

const currentTab = ref('discount_report')

const tabs = [
  {
    title: t('Discount Report'),
    tab: 'discount_report',
    subject: 'View Discount Report',
    action: 'admin-view-discount-reports',
  },
  {
    title: t('Sales Report'),
    tab: 'sales_report',
    subject: 'View Sales Report',
    action: 'admin-view-sales-reports',
  },
  {
    title: t('Order Report'),
    tab: 'order_report',
    subject: 'View Order Report',
    action: 'admin-view-order-reports',
  },
  {
    title: t('Product Report'),
    tab: 'product_report',
    subject: 'View Product Report',
    action: 'admin-view-product-reports',
  },
  {
    title: t('Product Sales Report'),
    tab: 'product_sales_report',
    subject: 'View Product Sales Report',
    action: 'admin-view-product-sales-reports',
  },
  {
    title: t('Station Users Report'),
    tab: 'station_users_report',
    subject: 'View Station Users Report',
    action: 'admin-view-station-users-reports',
  },
  
]

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}
</script>

<template>
  <section style="position:relative; z-index: 99;">
    <VCard id="invoice-list" style="overflow: visible; z-index: 9;">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Reports') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <VRow>
          <VCol md="12">
            <VTabs
              v-model="currentTab"
              class="v-tabs-pill"
            >
              <template v-for="item in tabs" :key="item.tab">
                <VTab
                    v-if="can(item.action, item.subject)"
                    :value="item.tab"
                >
                  {{ $t(item.title) }}
                </VTab>
              </template>
            </VTabs>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
    <VWindow
      v-model="currentTab"
      class="mt-6 disable-tab-transition"
      :touch="false"
    >
      <VWindowItem value="discount_report">
        <DiscountOrderReport
          :saleid="props.saleid" 
          @tab-data="refreshTab"
        />
      </VWindowItem>
      <VWindowItem value="sales_report">
        <SalesReport
          :saleid="props.saleid" 
          @tab-data="refreshTab"
        />
      </VWindowItem>

      <VWindowItem value="order_report">
        <OrderReport
          :saleid="props.saleid" 
          @tab-data="refreshTab"
        />
      </VWindowItem>

      <VWindowItem value="product_report">
        <ProductReports
          :saleid="props.saleid" 
          @tab-data="refreshTab"
        />
      </VWindowItem>

      <VWindowItem value="product_sales_report">
        <ProductSalesReports
          :saleid="props.saleid" 
          @tab-data="refreshTab"
        />
      </VWindowItem>

      <VWindowItem value="station_users_report">
        <StationUsersReports
          :saleid="props.saleid" 
          @tab-data="refreshTab"
        />
      </VWindowItem>
    </VWindow>
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
