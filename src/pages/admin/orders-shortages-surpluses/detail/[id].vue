<script setup>
import useHelper from "@/mixins/helper"
import axios from 'axios';
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
const { numberFormat } = useHelper()

definePage({
  meta: {
    action: ['admin-view-orders'],
    subject: ['View Orders'],
    navActiveLink: 'admin-orders-shortages-surpluses',
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
const hasItems = ref(false)
const remarks = ref()

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

const orderItems = ref([])

const {
  data: orderDetail, execute: fetchOrders, error,
} = await useApi(createUrl(`/admin/orders-received-items-form/${ route.params.id }`))

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


const orderItemsData = computed(() => orderDetail.value.allItems)
const order = computed(() => orderDetail.value.receivedItemsFormOrder)
const transactions = computed(() => orderDetail.value.transactions)

orderItems.value = orderItemsData.value

if(order.value){
  remarks.value = order.value?.comment
}

onMounted(() => {
  loadOrderItems(orderItemsData.value)
})

const loadOrderItems = (items) => {
  orderItems.value = (items || []).map(item => {
    // total received from dynamicInputs
    const totalReceived = (item.dynamicInputs || [])
      .filter(v => v !== '' && !isNaN(v))
      .reduce((sum, v) => sum + Number(v), 0)

    // Use nullish coalescing to allow 0
    const received = totalReceived ?? item.quantity

    return {
      ...item,
      received,
      refund: item.receivedItem?.refund ?? 0,          // amount to refund
      wantRefund: item.receivedItem?.wantRefund ?? false // checkbox state
    }
  })
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





const onReset = () => {
  orderDialogShown.value = false
}



const downloadOrderPDF = async (order) => {
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/admin/reports/weight-update-pdf-download`,
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
      `${import.meta.env.VITE_API_BASE_URL}/admin/reports/weight-update-pdf-send`,
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
  <div class="checkout-page product-page recived_items_report admin_area">
    <!-- 👉 Header  -->
    <div 
      v-if="order"
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
            :items="[{ title: 'עדכון חוסרים\עודפים', to: { name: 'admin-orders-shortages-surpluses' }, class: 'text-primary' }, { title: order._id }]"
          />
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Order ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(order.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(order.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <!-- <VBtn @click="sendOrderPDF(order)" prepend-icon="tabler-send">{{ $t('Send PDF') }}</VBtn>
        <VBtn @click="downloadOrderPDF(order)" prepend-icon="tabler-download">{{ $t('Download PDF') }}</VBtn> -->
        <VBtn
          v-if="can('admin-delete-orders', 'Delete Orders') && order.status != 'Canceled'"
          variant="tonal"
          color="error"
          @click="cancelOrder"
        >
          {{ $t('Cancel Order') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Order Details  -->
    <VContainer v-if="orderItems.length">
      <VForm>
        <VTable dense>
          <thead>
            <tr>
              <th>מק”ט</th>
              <th>שם מוצר</th>
              <th>מחיר פריט</th>
              <th>כמות שהוזמנה</th>
              <th>סה''כ שולם</th>
              <th class="bg-light">כמות שהתקבלה</th>
              <th>הפרש כמותי</th>
              <th>סכום לתשלום / זיכוי</th>
              <th class="bg-light">החזרה</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, idx) in orderItems"
              :key="item.productID._id"
              :class="idx % 2 === 0 ? 'bg-gray-50' : ''"
            >
              <td>{{ item.productID?.productNumber }}</td>
              <td>{{ item.productID?.name }}</td>
              <td>₪ {{ numberFormat(item.price) }}</td>
              <td>{{ item.quantity }}</td>
              <td>₪ {{ numberFormat(item.quantity * item.price) }}</td>

              <td class="bg-light">
                <!-- <VTextField v-model="item.received" type="number" dense /> -->
                <AppTextField
                  type="number"
                  v-model="item.received"
                  class="rounded p-1 w-full"
                  :rules="[requiredValidator]"
                  disabled
                />
              </td>

              <td>{{ item.received - item.quantity }}</td>

              <td>
                <!-- Extra payment -->
                <span v-if="item.received > item.quantity" class="text-error">
                  לתשלום ₪ {{ numberFormat((item.received - item.quantity) * item.price) }}
                </span>

                <!-- Refund -->
                <span v-else-if="item.received < item.quantity" class="text-success">
                  {{ $t('זיכוי') }} ₪ {{ numberFormat((item.quantity - item.received) * item.price) }}
                </span>

                <!-- No difference -->
                <span v-else>-</span>
              </td>

              <!-- Refund checkbox -->
              <td class="bg-light">
                <VCheckbox
                  v-if="item.received < item.quantity"
                  v-model="item.wantRefund"
                  :label="$t('ברצוני להחזיר')"
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </VTable>

        <!-- Totals -->
        <VCard class="mt-6 pa-4">
          
        </VCard>

        <!-- Remarks -->
        <AppTextarea disabled v-model="remarks" label="הערות" class="mt-6" />
      </VForm>
    </VContainer>

    <VContainer v-else>
      <VCard>
        <VCardText>{{ $t('No order items available') }}</VCardText>
      </VCard>
    </VContainer>
    

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
