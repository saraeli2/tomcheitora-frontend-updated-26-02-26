<script setup>
import useHelper from "@/mixins/helper";
import { useI18n } from 'vue-i18n'
import debounce from "lodash/debounce";

const { numberFormat } = useHelper()

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

definePage({
  meta: {
    action: ['admin-view-orders', 'admin-create-orders'],
    subject: ['View Orders', 'Create Orders'],
    title: 'Orders',
  },
})

import OrderStationDialog from '@/views/admin/orders/OrderStationDialog.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])
const selectedSale = ref(props.saleid)
const searchText = ref('')
const selectedPaymentStatusStatus = ref()
const selectedStation = ref()

// Data table options
const itemsPerPage = ref(25)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const panel = ref()
const orderDetail = ref()
const isOrderStationDialogVisible = ref(false)

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}


const salesList = await $api('/admin/sales/respond-with/extra-options').catch(err => console.log(err))

const salesOptions = computed(() => salesList.sales)

const sales = salesOptions.value.map(item => ({
  value: item._id,
  title: `${item.name}`,
}))


if(typeof props.saleid === 'undefined'){
  //console.log(salesOptions.value)
  if(salesOptions.value.length > 0){
    const activeSale = salesOptions.value.find(sale => sale.status === "Active" && !sale.deletedAt)
    if(activeSale){
      selectedSale.value = activeSale._id
    }else{
      selectedSale.value = salesOptions.value[0]._id
    }
  }
}

const headers = computed(() => [
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
  },
  {
    title: t('Full name'),
    key: 'fullName',
  },
  {
    title: t('Israeli ID'),
    key: 'israeliID',
  },
  
  {
    title: t('Phone'),
    key: 'phone',
  },
  
  {
    title: t('Phone 2'),
    key: 'phone2',
    sortable: false,
  },
  {
    title: t('כתובת'),
    key: 'fullAddress',
    sortable: false,
  },
  {
    title: t('Status'),
    key: 'status',
  },
  {
    title: t('Created At'),
    key: 'createdAt',
  },
  {
    title: t('Refund \ Due'),
    key: 'refundDue',
  },
])

const {
  data: customerData,
  execute: fetchOrders,
  error,
} = await useApi(createUrl('/admin/orders-received-items-form', {
  query: {
    sale: selectedSale,
    search: searchQuery,
    status: selectedStatus,
    paymentStatus: selectedPaymentStatusStatus,
    station: selectedStation,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

// debounce API call by 400ms
const debouncedFetch = debounce(() => {
  searchQuery.value = searchText.value
  fetchOrders()
}, 400)

// watch input and trigger debounced API
watch(searchText, () => {
  debouncedFetch()
})

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

const orders = computed(() => customerData.value.orders)
const totalOrders = computed(() => customerData.value.total)

// const commonsync = await $api('/admin/users/respond-with/extra-options').catch(err => console.log(err))

// const userOptions = computed(() => commonsync.userOptions)

// const users = userOptions.value.map(item => ({
//   value: item._id,
//   title: `${ item.firstName } ${ item.lastName }`,
// }))

const commonsync = await $api('/admin/stations/respond-with/extra-options', {
  query: {
    sale: selectedSale.value,
    selected: 1,
  },
}).catch(err => console.log(err))

const stationOptions = computed(() => commonsync.stationOptions)

const stations = computed(() => [
  { value: 'unknown', title: 'Unknown' }, // always first
  ...stationOptions.value.map(item => ({
    value: item._id,
    title: item.name,
  })),
])

const dialogStations = computed(() =>
  stationOptions.value.map(item => ({
    value: item._id,
    title: item.name,
  })),
)

const resolveStatusVariantAndIcon = status => {
  if (status === 'Processing') {
    return {
      variant: 'info',
      title: status,
    }
  } else if (status === 'Delivered') {
    return {
      variant: 'primary',
      title: status,
    }
  } else if (status === 'Completed') {
    return {
      variant: 'success',
      title: status,
    }
  } else if (status === 'Cancelled') {
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

const modifyOrder = async userData => {
  // refetch Order
  fetchOrders()
}

const deleteOrder = async id => {
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
        await $api(`/admin/orders/${ id }`, { method: 'DELETE' })
        fetchOrders()
      }
    })  
}

const editStation = async value => {
  orderDetail.value = value
  if(value.userID) {
    const data = await $api(`/admin/users/${ value.userID._id }`).catch(err => console.log(err))

    orderDetail.value.userDetail = data
  } else {
    orderDetail.value.userDetail = {
      'firstName': '',
      'lastName': '',
      'email': '',
      'phone': '',
      'cityID': '',
      'street': '',
      'houseNumber': '',
      'address': '',
      'nationality': '',
      'israeliIDNumber': '',
    }
  }
  
  isOrderStationDialogVisible.value = true
}
</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              חוסרים\עודפים
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
          <!-- 👉 Create Order -->
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-orders', 'View Orders')"
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
                  <AppAutocomplete
                    v-model="selectedSale"
                    :items="sales"
                    :placeholder="$t('Select Sale')"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchText"
                    :placeholder="$t('Search Order')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 'Pending', title: 'Pending' },
                      { value: 'Processing', title: 'Processing' },
                      { value: 'Delivered', title: 'Delivered' },
                      { value: 'Completed', title: 'Completed' },
                      { value: 'Canceled', title: 'Canceled' },
                    ]"
                    :placeholder="$t('Status')"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedPaymentStatusStatus"
                    :items="[
                      { value: 'Dues', title: 'Dues' },
                      { value: 'Refund', title: 'Refund' },
                    ]"
                    :placeholder="$t('Differences')"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-orders', 'View Orders')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-orders', 'View Orders')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalOrders"
        :headers="headers"
        :items="orders"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- userID -->

        <template #[`item.orderNumber`]="{ item }">
          <RouterLink :to="{ name: 'admin-orders-weight-update-detail-id', params: { id: item._id } }">
            {{ item._id }}
          </RouterLink>
        </template>

        <template #[`item.fullName`]="{ item }">
          <RouterLink
            v-if="can('admin-view-users', 'View Users') && item.userID"
            :to="{ name: 'admin-users-detail-id', params: { id: item.userID._id } }"
          >
            {{ item.userID.firstName + ' ' + item.userID.lastName }}
          </RouterLink>
          <span v-else>{{ item.userID ? item.userID.firstName + ' ' + item.userID.lastName : '' }}</span>
        </template>

        <template #[`item.israeliID`]="{ item }">
          {{ item.userID?.israeliIDNumber }}
        </template>

        <!-- quantity -->
        <template #[`item.phone`]="{ item }">
          {{ item.userID?.phone }}
        </template>
        <template #[`item.phone2`]="{ item }">
          {{ item.userID?.phone2 }}
        </template>

        <template #[`item.fullAddress`]="{ item }">
          {{ item.userID?.street }} {{ item.userID?.houseNumber }}<span v-if="(item.userID?.street || item.userID?.houseNumber) && item.userID?.flatNo">,</span> {{ item.userID?.flatNo }}
        </template>

        

        <template #[`item.subTotal`]="{ item }">
          {{ numberFormat(item.subTotal)}}
        </template>

        <template #[`item.totalDiscount`]="{ item }">
          {{ numberFormat(item.totalDiscount)}}
        </template>

        <!-- Total -->
        <template #[`item.total`]="{ item }">
          <span v-if="item.total > 0" class="lesspaid">{{ numberFormat(item.total)}}</span>
          <span v-else-if="item.total < 0" class="overpaid">{{ numberFormat(item.total)}}</span>
        </template>

        <!-- originalOrderedAmount -->
        <template #[`item.originalOrderedAmount`]="{ item }">
          {{ numberFormat(item.originalOrderedAmount)}}
        </template>

        <!-- amountDifference -->
        <template #[`item.amountDifference`]="{ item }">
          <span
            v-if="item.amountDifference && item.amountDifference > 0" 
            class="lesspaid"
          >
            {{ item.amountDifference ? numberFormat(item.amountDifference) : ''}}
          </span>
          <span 
            v-else-if="item.amountDifference && item.amountDifference < 0"
            class="overpaid"
          >
            {{ item.amountDifference ? numberFormat(item.amountDifference) : ''}}
          </span>
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
                <VListItem :to="{ name: 'admin-orders-shortages-surpluses-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-orders', 'Update Orders')"
                  :to="{ name: 'admin-orders-shortages-surpluses-edit-id', params: { id: item._id } }"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-orders', 'Delete Orders')"
                  @click="deleteOrder(item._id)"
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
            :total-items="totalOrders"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <OrderStationDialog
      v-if="isOrderStationDialogVisible"
      v-model:is-dialog-visible="isOrderStationDialogVisible"
      v-model:stations="dialogStations"
      v-model:order="orderDetail"
      @user-data="modifyOrder"
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
