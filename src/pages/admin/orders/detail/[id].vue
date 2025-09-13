<script setup>
import useHelper from "@/mixins/helper"
import axios from 'axios';
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
const { numberFormat } = useHelper()

definePage({
  meta: {
    action: ['admin-view-orders'],
    subject: ['Order'],
    navActiveLink: 'admin-sales',
    title: 'Order Details',
  },
})

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()
const ability = useAbility()
const showLoader = ref(false)
const itemsPerPage = ref(1000)

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
  data: orderDetail, execute: fetchOrders, error,
} = await useApi(createUrl(`/admin/orders/${ route.params.id }`))

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

const orderData = computed(() => orderDetail.value.order)
const transactions = computed(() => orderDetail.value.transactions)

const orderItems = ref(orderDetail.value.order.orderItems)
const changedItems = ref([])
const orderDialogShown =  ref(false)

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

const orderHeaders = computed(() => [
  {
    title: t('Product'),
    key: 'productID',
    sortable: false,
  },
  {
    title: t('Old Quantity'),
    key: 'oldQuantity',
    sortable: false,
  },
  {
    title: t('New Quantity'),
    key: 'newQuantity',
    sortable: false,
  },
  {
    title: t('Action'),
    key: 'action',
    sortable: false,
  },
])

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

// Increase quantity
const increaseQuantity = item => {
  const oldQuantity = item.quantity

  item.quantity += 1
  orderItems.value = [...orderItems.value]
  addToChangedItems(item, oldQuantity, 'Increased')
  recalculateTotal()
}

// Decrease quantity
const decreaseQuantity = item => {
  if (item.quantity > 1) {
    const oldQuantity = item.quantity

    item.quantity -= 1
    orderItems.value = [...orderItems.value]
    addToChangedItems(item, oldQuantity, 'Decreased')
    recalculateTotal()
  }
}

// Remove Item
const removeProduct = item => {
  // Remove the product from the array
  const oldQuantity = item.quantity

  item.quantity = 0
  addToChangedItems(item, oldQuantity, 'Removed')
  orderItems.value = orderItems.value.filter(i => i.productID._id !== item.productID._id)
  recalculateTotal()
}

// Helper to track changes
const addToChangedItems = (item, oldQuantity, action) => {
  const existing = changedItems.value.find(i => i.productID._id === item.productID._id)
  if (existing) {
    // Update existing entry
    existing.newQuantity = item.quantity
    existing.action = action
  } else {
    changedItems.value.push({
      productID: item.productID,
      oldQuantity,
      newQuantity: item.quantity,
      price: item.price,
      action,
    })
  }
}

const updateOrder = async () => {
  try {
    const res = await $api(`/admin/orders/update-quantity/${route.params.id}`, {
      method: 'PATCH',
      body: {
        products: orderItems.value,
        changedItems: changedItems.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    orderDialogShown.value = false
    changedItems.value = []

    fetchOrders()
  } catch (err) {
    console.log(err)
  }
}

const onReset = () => {
  orderDialogShown.value = false
}

const recalculateTotal = () => {
  const subTotal = orderItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  orderData.value.subTotal = subTotal
  orderData.value.total = subTotal - orderData.value.totalDiscount + orderData.value.totalVat + orderData.value.deliveryCharge
  orderData.value.amountDifference = orderData.value.total - orderData.value.originalOrderedAmount
}

const downloadOrderPDF = async (order) => {
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/admin/reports/pdf-download`,
      { orderID: order._id }, // POST data
      {
        responseType: 'blob', // important for PDF
        headers: {
          'Authorization': `Bearer ${authStore.accessToken}`, // ✅ pass bearer token
          'Content-Type': 'application/json',
        },
      }
    );

    // res.data is the PDF blob
    const blob = new Blob([res.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `order_${order._id}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();

    window.URL.revokeObjectURL(url);

    showLoader.value = false

  } catch (err) {
    console.error('Download error:', err);
    
    showLoader.value = false

    //alert('Failed to download PDF');
  }
};

// Send pdf
const isShowConfirmModal = ref(false)
const currentOrderData = ref()
const sendOrderPDF = (order) =>{
  isShowConfirmModal.value = true
  currentOrderData.value = order
}

const sendPdfToUser = async() =>{
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/admin/reports/pdf-send`,
      { orderID: currentOrderData.value?._id }, // POST data
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.accessToken}`, // your JWT token
        },
      }
    );
    
    
    showLoader.value = false

    if (res.data.success) {
      isShowConfirmModal.value = false
      toast.success('קובץ ה-PDF נשלח בהצלחה!');
    } else {
      toast.error('Failed to send PDF');
    }

    

  } catch (err) {
    toast.success('PDF sent successfully!');
    console.error('Download error:', err);
    
    showLoader.value = false

    //alert('Failed to download PDF');
  }
}
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
        <VBtn @click="sendOrderPDF(orderData)" prepend-icon="tabler-send">{{ $t('Send PDF') }}</VBtn>
        <VBtn @click="downloadOrderPDF(orderData)" prepend-icon="tabler-download">{{ $t('Download PDF') }}</VBtn>
        <VBtn
          v-if="can('admin-delete-orders', 'Order') && orderData.status != 'Canceled'"
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
      class=""
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
                          v-if="can('admin-view-users', 'User') && orderData.userID"
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
                v-if="can('admin-update-orders', 'Order')"
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
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="orderItems"
            item-value="productID"
            class="text-no-wrap"
          >
            <template #[`item.productID`]="{ item }">
              <div class="d-flex gap-x-3 align-center">
                <div class="d-flex flex-column align-start">
                  <h6 class="text-h6">
                    <IconBtn
                      v-if="can('admin-update-orders', 'Order')"
                      class="checkout-item-remove-btn"
                    >
                      <VIcon

                        size="18"
                        icon="tabler-x"
                        class="text-disabled"
                        @click="removeProduct(item)"
                      />
                    </IconBtn>

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
                <button
                  v-if="can('admin-update-orders', 'Order')"
                  type="button"
                  class="px-2 py-1 bg-primary text-white rounded"
                  @click="decreaseQuantity(item)"
                >
                  -
                </button>

                <input
                  v-model.number="item.quantity"
                  min="1"
                  class="w-16 text-center border rounded px-2 py-1"
                  readonly
                >

                <button
                  v-if="can('admin-update-orders', 'Order')"
                  type="button"
                  class="px-2 py-1 bg-primary text-white rounded"
                  @click="increaseQuantity(item)"
                >
                  +
                </button>
              </div>
            </template>

            <template #[`item.price`]="{ item }">
              <div class="text-body-1">
                {{ item.price }}
              </div>
            </template>

            <template #[`item.total`]="{ item }">
              <div class="text-body-1">
                {{ numberFormat(item.price * item.quantity) }}
              </div>
            </template>

            <template #bottom />
          </VDataTable>

          <VDivider />

          <VCardText>
            <div
              v-if="changedItems.length"
              class="d-flex gap-4 align-center flex-wrap"
            >
              <!-- 👉 Create Product -->
              <VBtn
                v-if="can('admin-update-orders', 'Order')"
                prepend-icon="tabler-check"
                @click="orderDialogShown = true"
              >
                {{ $t('Update Order') }}
              </VBtn>
            </div>
            <div class="d-flex align-end flex-column">
              <table class="text-high-emphasis">
                <tbody>
                  <tr>
                    <td width="200px">
                      {{ $t('SubTotal') }}:
                    </td>
                    <td class="font-weight-medium">
                      {{ numberFormat(orderData.subTotal) }}
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
                      -{{ numberFormat(orderData.totalDiscount) }}
                    </td>
                  </tr>

                  <tr>
                    <td>{{ $t('Delivery Charge') }}: </td>
                    <td class="font-weight-medium">
                      {{ numberFormat(orderData.deliveryCharge) }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-high-emphasis font-weight-medium">
                      {{ $t('Total') }}:
                    </td>
                    <td class="font-weight-medium">
                      {{ numberFormat(orderData.total) }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-high-emphasis font-weight-medium">
                      {{ $t('Original Total Amount') }}:
                    </td>
                    <td class="font-weight-medium">
                      {{ numberFormat(orderData.originalOrderedAmount) }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-high-emphasis font-weight-medium">
                      <span
                        v-if="orderData.amountDifference"
                        style="color: #f00;"
                      >{{ $t('Difference') }}:</span>
                      <span v-else>{{ $t('Difference') }}:</span>
                    </td>
                    <td class="font-weight-medium">
                      {{ numberFormat(orderData.amountDifference) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </VCardText>
        </VCard>

        <VCard
          v-if="transactions.length"
          class="mb-6"
        >
          <VCardItem>
            <template #title>
              <h5 class="text-h5">
                {{ $t('Transactions') }}
              </h5>
            </template>
          </VCardItem>

          <VDivider />

          <VDataTable
            :headers="[
              { title: t('Transaction ID'), key: 'transactionId' },
              { title: t('Amount'), key: 'amount' },
              { title: t('Status'), key: 'paymentStatus' },
              { title: t('Date'), key: 'transactionTime' }
            ]"
            :items="transactions"
            item-value="transactionId"
            class="text-no-wrap"
          >
            <template #[`item.amount`]="{ item }">
              {{ item.amount }}
            </template>

            <template #[`item.currency`]="{ item }">
              {{ item.currency }}
            </template>

            <template #[`item.paymentStatus`]="{ item }">
              <VChip
                label
                :color="item.paymentStatus === 'Paid' ? 'success' : item.paymentStatus === 'Failed' ? 'error' : 'warning'"
                size="small"
              >
                {{ item.paymentStatus }}
              </VChip>
            </template>

            <template #[`item.transactionTime`]="{ item }">
              {{ new Date(item.transactionTime).toLocaleString() }}
            </template>
          </VDataTable>
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

    <VDialog
      v-model="orderDialogShown"
      :width="$vuetify.display.smAndDown ? 'auto' : 900"
      @update:model-value="onReset"
    >
      <!-- 👉 Dialog close btn -->
      <DialogCloseBtn @click="onReset" />
      <VCard class="pa-sm-10 pa-2">
        <VCardText>
          <!-- 👉 Title -->
          <h4 class="text-h4 text-center mb-2">
            {{ $t('Confirm Order') }}
          </h4>
          <VDivider />
          <VDataTable
            :headers="orderHeaders"
            :items="changedItems"
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

            <template #bottom />
          </VDataTable>
          <VDivider />
        </VCardText>
        <VCardText>
          <div class="d-flex align-end flex-column">
            <!-- 👉 Create Product -->
            <VBtn
              prepend-icon="tabler-pencil"
              @click="updateOrder"
            >
              {{ $t('Update Order') }}
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VDialog>

    <VDialog
      v-model="showLoader"
      persistent
    >
      <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
    </VDialog>

    <VDialog
    v-model="isShowConfirmModal"
    class="v-dialog-sm"
  >
    
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isShowConfirmModal = !isShowConfirmModal" />

    <!-- Dialog Content -->
    <VCard :title="$t('Send PDF')">
      <VCardText>
        {{ $t('We are sending email in') }} <strong>{{ currentOrderData.userID?.email }}</strong>
      </VCardText>

      <VCardText class="d-flex justify-end gap-3 flex-wrap">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="isShowConfirmModal = false"
        >
          {{ $t('Cancel') }}
        </VBtn>
        <VBtn @click="sendPdfToUser">
          {{ $t('Submit') }}
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  </div>
</template>
