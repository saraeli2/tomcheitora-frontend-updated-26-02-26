<script setup>
definePage({
  meta: {
    action: ['admin-view-sales'],
    subject: ['View Sales'],
    navActiveLink: 'admin-sales',
    title: 'Sale Details',
  },
})

import DistributionOrders from '@/pages/admin/orders/index.vue'
import AddNewSaleDrawer from '@/views/admin/sales/AddNewSaleDrawer.vue'
import DistributionGroups from '@/views/admin/sales/DistributionGroups.vue'
import DistributionProducts from '@/views/admin/sales/DistributionProducts.vue'
import DistributionStations from '@/views/admin/sales/DistributionStations.vue'

import { can } from '@layouts/plugins/casl'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const ability = useAbility()

import { hexToRgb } from '@layouts/utils'
import Swal from 'sweetalert2'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()


const isSaleDialogVisible = ref(false)

const resolveStatusVariantAndIcon = status => {
  if (status === 'Active') {
    return {
      variant: 'success',
      title: status,
    }
  } else if (status === 'Closed') {
    return {
      variant: 'error',
      title: status,
    }
  }
  
  return {
    variant: 'secondary',
    title: status,
  }
}

const route = useRoute('admin-sales-detail-id')
const router = useRouter()

const {
  data: saleDetail, execute: fetchSales, error,
} = await useApi(createUrl(`/admin/sales/${ route.params.id }`))

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

const saleData = computed(() => saleDetail.value)

const reloadTab = ref(true)

const modifySale = async userData => {
  // refetch Sale
  fetchSales()
}

const deleteSale = async () => {
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
        await $api(`/admin/sales/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-sales' })
      }
    })
}

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}

// Define fallback color values
const fallbackColors = {
  warning: '#FFA500',
  info: '#00BFFF',
  primary: '#1976D2',
  success: '#4CAF50',
  error: '#F44336',
  secondary: '#9E9E9E',
}

// Function to resolve the variant and label for each status
const resolveOrderStatusVariantAndIcon = status => {
  const normalizedStatus = status?.toString().trim()

  switch (normalizedStatus) {
  case 'Pending':
    return { variant: 'warning', title: status }
  case 'Processing':
    return { variant: 'info', title: status }
  case 'Delivered':
    return { variant: 'primary', title: status }
  case 'Completed':
    return { variant: 'success', title: status }
  case 'Cancelled':
    return { variant: 'error', title: status }
  default:
    return { variant: 'secondary', title: status }
  }
}

const series = [{
  data: [
    saleData.value.pendingOrders,
    saleData.value.processingOrders,
    saleData.value.deliveredOrders,
    saleData.value.completedOrders,
    saleData.value.canceledOrders,
  ],
}]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const labelColor = `rgba(${hexToRgb(currentTheme['on-background'])}, ${variableTheme['disabled-opacity']})`
  const statusList = ['Pending', 'Processing', 'Delivered', 'Completed', 'Cancelled']

  const resolveStatusColor = status => {
    const variant = resolveOrderStatusVariantAndIcon(status).variant
    const hexColor = currentTheme[variant] || fallbackColors[variant] || currentTheme.primary

    return `rgba(${hexToRgb(hexColor)}, 1)`
  }
  
  return {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    plotOptions: {
      bar: {
        barHeight: '60%',
        columnWidth: '60%',
        startingShape: 'rounded',
        endingShape: 'rounded',
        borderRadius: 4,
        distributed: true,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: 0,
        left: -10,
        right: -10,
      },
    },
    colors: statusList.map(resolveStatusColor),
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: statusList,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '13px',
        },
      },
    },
    yaxis: { labels: { show: false } },
  }
})
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="saleData"
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
            :items="[{ title: $t('Sales'), to: { name: 'admin-sales' }, class: 'text-primary' }, { title: saleData.name }]"
          />
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Sale ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(saleData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(saleData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-sales', 'Delete Sales')"
          variant="tonal"
          color="error"
          @click="deleteSale"
        >
          {{ $t('Delete Sale') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Sale Details  -->
    <VRow
      v-if="reloadTab"
      class="match-height"
    >
      <VCol
        cols="12"
        md="6"
        lg="6"
      >
        <VCard>
          <VRow no-gutters>
            <VCol cols="12">
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
                        {{ saleData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Start Date') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ formatDateWithTime(saleData.startDate) }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('End Date') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ formatDateWithTime(saleData.endDate) }}
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
                        :color="resolveStatusVariantAndIcon(saleData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(saleData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Created By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && saleData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: saleData.createdBy._id } }"
                        >
                          {{ saleData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ saleData.createdBy ? saleData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Updated By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && saleData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: saleData.updatedBy._id } }"
                        >
                          {{ saleData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ saleData.updatedBy ? saleData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-sales', 'Update Sales')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isSaleDialogVisible = !isSaleDialogVisible"
                >
                  {{ $t('Edit Sale') }}
                </VBtn>
              </VCardText>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
        lg="6"
      >
        <VCard :title="$t('Statistics')">
          <VCardText class="h-100">
            <VDivider class="my-4" />

            <VRow>
              <VCol
                cols="6"
                md="3"
              >
                <div class="d-flex align-center gap-4 mt-md-9 mt-0">
                  <VAvatar
                    color="primary"
                    variant="tonal"
                    rounded
                    size="40"
                  >
                    <VIcon icon="tabler-user-hexagon" />
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <h5 class="text-h5">
                      {{ saleData.totalGroups }}
                    </h5>
                    <div class="text-sm">
                      {{ $t('Groups') }}
                    </div>
                  </div>
                </div>
              </VCol>
              <VCol
                cols="6"
                md="3"
              >
                <div class="d-flex align-center gap-4 mt-md-9 mt-0">
                  <VAvatar
                    color="info"
                    variant="tonal"
                    rounded
                    size="40"
                  >
                    <VIcon icon="tabler-building-airport" />
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <h5 class="text-h5">
                      {{ saleData.totalStations }}
                    </h5>
                    <div class="text-sm">
                      {{ $t('Stations') }}
                    </div>
                  </div>
                </div>
              </VCol>
              <VCol
                cols="6"
                md="3"
              >
                <div class="d-flex align-center gap-4 mt-md-9 mt-0">
                  <VAvatar
                    color="error"
                    variant="tonal"
                    rounded
                    size="40"
                  >
                    <VIcon icon="tabler-brand-producthunt" />
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <h5 class="text-h5">
                      {{ saleData.totalProducts }}
                    </h5>
                    <div class="text-sm">
                      {{ $t('Products') }}
                    </div>
                  </div>
                </div>
              </VCol>
              <VCol
                cols="6"
                md="3"
              >
                <div class="d-flex align-center gap-4 mt-md-9 mt-0">
                  <VAvatar
                    color="success"
                    variant="tonal"
                    rounded
                    size="40"
                  >
                    <VIcon icon="tabler-shopping-cart" />
                  </VAvatar>

                  <div class="d-flex flex-column">
                    <h5 class="text-h5">
                      {{ saleData.totalOrders }}
                    </h5>
                    <div class="text-sm">
                      {{ $t('Total Orders') }}
                    </div>
                  </div>
                </div>
              </VCol>
            </VRow>

            <VDivider class="my-6" />

            <VRow>
              <VCol cols="12">
                <h6 class="text-h6 mb-1">
                  {{ $t('Order Status Report') }}
                </h6>
                <VueApexCharts
                  :options="chartOptions"
                  :series="series"
                  :height="196"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="6"
        lg="6"
      >
        <DistributionStations
          :saleid="route.params.id" 
          @tab-data="refreshTab"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
        lg="6"
      >
        <DistributionGroups
          :saleid="route.params.id" 
          @tab-data="refreshTab"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
        lg="6"
      >
        <DistributionProducts
          :saleid="route.params.id" 
          @tab-data="refreshTab"
        />
      </VCol>
      <VCol
        cols="12"
        md="6"
        lg="6"
      >
        <DistributionOrders
          :saleid="route.params.id" 
          @tab-data="refreshTab"
        />
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

    <AddNewSaleDrawer
      v-if="isSaleDialogVisible"
      v-model:is-drawer-open="isSaleDialogVisible"
      v-model:sale="saleData"
      @user-data="modifySale"
    />
  </div>
</template>
