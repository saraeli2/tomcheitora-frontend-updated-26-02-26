<script setup>
import { useI18n } from 'vue-i18n'
import useHelper from "@/mixins/helper";
import { useToast } from 'vue-toastification'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const toast = useToast()

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

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const headers = computed(() => [
  {
    title: t('Order Number'),
    key: 'orderNumber',
  },
  {
    title: t('User'),
    key: 'userID',
  },
  {
    title: t('Total Quantity'),
    key: 'quantity',
  },
  {
    title: t('SubTotal'),
    key: 'subTotal',
  },
  {
    title: t('Vat'),
    key: 'totalVat',
  },
  {
    title: t('Discount'),
    key: 'totalDiscount',
  },
  {
    title: t('Delivery Charge'),
    key: 'deliveryCharge',
  },
  {
    title: t('Total Amount'),
    key: 'total',
    sortable: false,
  },
  {
    title: t('Original Total Amount'),
    key: 'originalOrderedAmount',
    sortable: false,
  },
  {
    title: t('Difference'),
    key: 'amountDifference',
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
    title: t('Updated At'),
    key: 'updatedAt',
  },
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
  },
])

const phone = ref()
const israeliIDNumber = ref()
const showLoader = ref(false)
const orders = ref()
const totalOrders = ref()

const getOrderReportData = async() => {
  const res = await $api(`/admin/reports/order-report`, {
    method: 'POST',
    body: {
      saleID: selectedSale.value,
      phone: phone.value,
      israeliIDNumber: israeliIDNumber.value,
      itemsPerPage:itemsPerPage.value,
      page:page.value,
      sortBy:sortBy.value,
      orderBy:orderBy.value,
    },
    onResponseError({ response }) {
      toast.error(response._data.error)
    },
  })

  orders.value = res.report
  totalOrders.value = res.total

  console.log(orders.value);
}

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

const downloadPDF = async (order) => {
  try {
    // Set current order for the PDF template
    const container = orderPdf.value
    Object.assign(container, { order }) // assuming orderPdf template reads `order`

    await nextTick() // wait for DOM update

    const canvas = await html2canvas(container, { scale: 2 })
    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF('p', 'mm', 'a4')
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`order_${order._id}.pdf`)
  } catch (err) {
    console.error(err)
    toast.error('Failed to generate PDF')
  }
}

</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between align-center flex-wrap">
      <VRow>
        <VCol cols="12">
          <h5 class="text-h5 mb-1">
            {{ $t('Order Report') }}
          </h5>
        </VCol>
      </VRow>
    </VCardText>

    <VDivider />

    <VCardText>
      <VRow>
        <VCol cols="12" md="4">
          <AppTextField
            v-model="phone"
            :label="$t('Phone')"
            :placeholder="$t('Phone')"
          />
        </VCol>
        <VCol cols="12" md="4">
          <AppTextField
            v-model="israeliIDNumber"
            :label="$t('Israeli ID Number')"
            :placeholder="$t('Israeli ID Number')"
          />
        </VCol>
        <VCol cols="12" md="12">
          <VBtn :disabled="!phone || !israeliIDNumber" @click="getOrderReportData">{{ $t('Submit') }}</VBtn>
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
      :items-length="totalOrders"
      :headers="headers"
      :items="orders"
      item-value="id"
      class="text-no-wrap"
      @update:options="updateOptions"
    >
      <!-- userID -->

      <template #[`item.orderNumber`]="{ item }">
        <RouterLink
          v-if="can('admin-view-orders', 'Order') && item.userID"
          :to="{ name: 'admin-orders-detail-id', params: { id: item._id } }"
        >
          {{ item._id }}
        </RouterLink>
        <span v-else>{{ item._id }}</span>
      </template>


      <template #[`item.userID`]="{ item }">
        <RouterLink
          v-if="can('admin-view-users', 'User') && item.userID"
          :to="{ name: 'admin-users-detail-id', params: { id: item.userID._id } }"
        >
          {{ item.userID.firstName + ' ' + item.userID.lastName }}
        </RouterLink>
        <span v-else>{{ item.userID ? item.userID.firstName + ' ' + item.userID.lastName : '' }}</span>
      </template>

      <!-- quantity -->
      <template #[`item.quantity`]="{ item }">
        {{ item.orderItems.length }}
      </template>

      <template #[`item.subTotal`]="{ item }">
        {{ numberFormat(item.subTotal)}}
      </template>

      <template #[`item.totalDiscount`]="{ item }">
        {{ numberFormat(item.totalDiscount)}}
      </template>

      <!-- Total -->
      <template #[`item.total`]="{ item }">
        {{ numberFormat(item.total)}}
      </template>

      <!-- originalOrderedAmount -->
      <template #[`item.originalOrderedAmount`]="{ item }">
        {{ numberFormat(item.originalOrderedAmount)}}
      </template>

      <!-- amountDifference -->
      <template #[`item.amountDifference`]="{ item }">
        <span class="lesspaid" v-if="item.amountDifference && item.amountDifference > 0">{{ item.amountDifference ? numberFormat(item.amountDifference) : ''}}</span>
        <span class="overpaid" v-else-if="item.amountDifference && item.amountDifference < 0">{{ item.amountDifference ? numberFormat(item.amountDifference) : ''}}</span>
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
              <VListItem :to="{ name: 'admin-orders-detail-id', params: { id: item._id } }">
                <template #prepend>
                  <VIcon icon="tabler-eye" />
                </template>
                <VListItemTitle>{{ $t('View') }}</VListItemTitle>
              </VListItem>

              <VListItem
                v-if="can('admin-download-orders', 'Order')"
                @click="downloadOrderPDF(item._id)"
              >
                <template #prepend>
                  <VIcon icon="tabler-download" />
                </template>
                <VListItemTitle>{{ $t('Download PDF') }}</VListItemTitle>
              </VListItem>

              <!-- Send PDF -->
              <VListItem
                v-if="can('admin-send-orders', 'Order')"
                @click="sendOrderPDF(item._id)"
              >
                <template #prepend>
                  <VIcon icon="tabler-send" />
                </template>
                <VListItemTitle>{{ $t('Send PDF') }}</VListItemTitle>
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
  </VCard>
  
  <VDialog
    v-model="showLoader"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
</template>
