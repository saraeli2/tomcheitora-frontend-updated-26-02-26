<script setup>
import { useI18n } from 'vue-i18n'
import useHelper from "@/mixins/helper";
import DiscountOrderReport from '@/views/admin/sales/DiscountOrderReport.vue'
import SalesReport from '@/views/admin/sales/SalesReport.vue'
import OrderReport from '@/views/admin/sales/OrderReport.vue'

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
    action: ['admin-view-sale-orders'],
    subject: ['View Sale Orders'],
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
  },
  {
    title: t('Sales Report'),
    tab: 'sales_report',
  },
  {
    title: t('Order Report'),
    tab: 'order_report',
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
                <VTab :value="item.tab">
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
