<script setup>
definePage({
  meta: {
    action: ['admin-view-orders'],
    subject: ['View Orders'],
    navActiveLink: 'admin-sales',
    title: 'Order Details',
  },
})

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isOrderDialogVisible = ref(false)

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

const route = useRoute('admin-orders-detail-id')
const router = useRouter()

const {
  data: orderDetail, execute: fetchOrders,
} = await useApi(createUrl(`/admin/orders/${ route.params.id }`))

const orderData = computed(() => orderDetail.value)

const reloadTab = ref(true)

const modifyOrder = async userData => {
  // refetch Order
  fetchOrders()
}

const cancelOrder = async () => {
  Swal.fire({
    title: t('cancel.Are You Sure?'),
    html: t('cancel.confirmMessage', {
      action: `<strong>${t('cancel.confirmaction')}</strong>`,
    }),
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: t('cancel.No'),
    confirmButtonText: t('cancel.Yes, Cancel!'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/orders/update-status/${ route.params.id }`, { 
          method: 'POST',
          body: {
            status: 'Canceled',
          },
        })
        fetchOrders()
      }
    })
}

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}

const headers = computed(() => [
  {
    title: t('Product'),
    key: 'productID',
  },
  {
    title: t('Quantity'),
    key: 'quantity',
  },
  {
    title: t('Price'),
    key: 'price',
  },
  {
    title: t('Total'),
    key: 'total',
    sortable: false,
  },
])
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="orderData"
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
            :items="[{ title: $t('Sales'), to: { name: 'admin-sales' }, class: 'text-primary' }, { title: orderData.saleID.name, to: { name: 'admin-sales-detail-id', params: { id: orderData.saleID._id } }, class: 'text-primary' }, { title: orderData._id }]"
          />
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Order ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(orderData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(orderData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-orders', 'Delete Orders') && orderData.status != 'Canceled'"
          variant="tonal"
          color="error"
          @click="cancelOrder"
        >
          {{ $t('Cancel Order') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Order Details  -->
    <VRow
      v-if="reloadTab"
      class="match-height"
    >
      <VCol
        cols="12"
        md="4"
        lg="4"
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
                      {{ $t('User') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-users', 'View Users') && orderData.userID"
                          :to="{ name: 'admin-users-detail-id', params: { id: orderData.userID._id } }"
                        >
                          {{ orderData.userID.firstName + ' ' + orderData.userID.lastName }}
                        </RouterLink>
                        <span v-else>{{ orderData.userID ? orderData.userID.firstName + ' ' + orderData.userID.lastName : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Comment') }}:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="orderData?.comment" />
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
                        :color="resolveStatusVariantAndIcon(orderData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(orderData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-orders', 'Update Orders')"
                class="text-center"
              >
                <VBtn
                  block
                  :to="{ name: 'admin-orders-edit-id', params: { id: orderData._id } }"
                >
                  {{ $t('Edit Order') }}
                </VBtn>
              </VCardText>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
      <VCol
        cols="12"
        md="8"
        lg="8"
      >
        <VCard class="mb-6">
          <VCardItem>
            <template #title>
              <h5 class="text-h5">
                {{ $t('Order Items') }}
              </h5>
            </template>
          </VCardItem>

          <VDivider />

          <VDataTable
            :headers="headers"
            :items="orderData.orderItems"
            item-value="productID"
            class="text-no-wrap"
          >
            <template #[`item.productID`]="{ item }">
              <div class="d-flex gap-x-3 align-center">
                <div class="d-flex flex-column align-start">
                  <h6 class="text-h6">
                    <RouterLink
                      v-if="can('admin-view-products', 'View Products') && item.productID"
                      :to="{ name: 'admin-products-detail-id', params: { id: item.productID._id } }"
                    >
                      {{ item.productID.name }}
                    </RouterLink>
                    <span v-else>{{ item.productID ? item.productID.name : '' }}</span>
                  </h6>
                </div>
              </div>
            </template>

            <template #[`item.quantity`]="{ item }">
              <div class="text-body-1">
                {{ item.quantity }}
              </div>
            </template>

            <template #[`item.price`]="{ item }">
              <div class="text-body-1">
                {{ item.price }}
              </div>
            </template>

            <template #[`item.total`]="{ item }">
              <div class="text-body-1">
                {{ item.price * item.quantity }}
              </div>
            </template>

            <template #bottom />
          </VDataTable>

          <VDivider />

          <VCardText>
            <div class="d-flex align-end flex-column">
              <table class="text-high-emphasis">
                <tbody>
                  <tr>
                    <td width="200px">
                      {{ $t('SubTotal') }}:
                    </td>
                    <td class="font-weight-medium">
                      {{ orderData.subTotal }}
                    </td>
                  </tr>
                  <tr>
                    <td>{{ $t('Vat') }}: </td>
                    <td class="font-weight-medium">
                      {{ orderData.totalVat }}
                    </td>
                  </tr>
                  <tr>
                    <td>{{ $t('Discount') }}: </td>
                    <td class="font-weight-medium">
                      -{{ orderData.totalDiscount }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-high-emphasis font-weight-medium">
                      {{ $t('Total') }}:
                    </td>
                    <td class="font-weight-medium">
                      {{ orderData.subTotal + orderData.totalVat - orderData.totalDiscount }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </VCardText>
        </VCard>
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
  </div>
</template>
