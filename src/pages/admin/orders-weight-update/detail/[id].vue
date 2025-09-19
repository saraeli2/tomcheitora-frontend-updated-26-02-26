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
    navActiveLink: 'admin-orders-weight-update',
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
} = await useApi(createUrl(`/admin/orders-weight-update/${ route.params.id }`))

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

const order = computed(() => orderDetail.value.order)
const transactions = computed(() => orderDetail.value.transactions)

const orderItemsData = computed(() => orderDetail.value.allItems)

//console.log(orderItemsData.value)

orderItems.value = orderItemsData.value



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

const totalDues = computed(() => {
  return orderItems.value.reduce((sum, item) => {
    const price = Number(item.price || 0)
    const pricePerKilo = Number(item.productID?.pricePerKilo || 0)
    const quantity = Number(item.quantity || 0)
    const expectedAmount = quantity * price
    const receivedWeight = (item.dynamicInputs || []).reduce((s, w) => s + Number(w || 0), 0)
    const receivedAmount = receivedWeight * pricePerKilo

    // positive → extra to pay, negative → return
    return sum + (receivedAmount - expectedAmount)
  }, 0)
})

onMounted(async () => {
  // if (order.value) {
  //   await loadNedarimIframe()
  // }
  orderItems.value.forEach(item => {
    if(item.receivedItem){
      hasItems.value = true
    }
  })
})
</script>

<template>
  <div>
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
            :items="[{ title: $t('Orders Weight Update'), to: { name: 'admin-orders-weight-update' }, class: 'text-primary' }, { title: order._id }]"
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
        <VBtn @click="sendOrderPDF(order)" prepend-icon="tabler-send">{{ $t('Send PDF') }}</VBtn>
        <VBtn @click="downloadOrderPDF(order)" prepend-icon="tabler-download">{{ $t('Download PDF') }}</VBtn>
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
    <VContainer v-if="orderItems && orderItems.length">
      <div class="checkout-card">
        <VCard>
          <VCardText>
            <VForm>
              <VRow v-if="orderItems">
                <VCol
                  cols="12"
                  lg="8"
                >
                  <div
                    v-if="orderItems.length"
                    class="border rounded"
                  >
                    <template
                      v-for="(item, index) in orderItems"
                      :key="item.productID._id"
                    >
                      <div
                        v-if="item.dynamicInputs.length"
                        class="d-flex align-center gap-4 pa-6 position-relative flex-column flex-sm-row"
                        :class="index ? 'border-t' : ''"
                      >
                        <div v-if="item.productID?.image">
                          <VImg
                            width="140"
                            :src="item.productID?.image"
                          />
                        </div>
                        <div v-else>
                          <VImg
                            width="140"
                            src="/images/no-img.jpg"
                          />
                        </div>

                        <div class="d-flex w-100 flex-column flex-md-row">
                          <div class="d-flex flex-column gap-y-2" style="min-width: 200px;">
                            <h6 class="text-h6">
                              {{ item.productID?.name }}
                            </h6>
                            <div v-if="item.variations">
                              <p v-if="item.variations.size">{{ $t('Size') }}: {{ item.variations.size }}</p>
                              <p v-if="item.variations.color">{{ $t('Color') }}: {{ item.variations.color }}</p>
                              <p v-if="item.variations.sleeveLength">{{ $t('Sleeve Length') }}: {{ item.variations.sleeveLength }}</p>
                              <p v-if="item.variations.pocket">{{ $t('Pocket') }}: {{ item.variations.pocket }}</p>
                            </div>
                            <p>
                              {{ $t('Qty') }}: {{ item.quantity }}
                            </p>

                            <div v-if="item.dynamicInputs.length" style="max-width: 200px;">
                              <div v-for="(input, index) in item.dynamicInputs" :key="index" class="mb-4">
                                <label class="block font-medium mb-1">{{ $t('משקל קופסא') }}</label>
                                <AppTextField
                                  type="number"
                                  v-model="item.dynamicInputs[index]"
                                  :placeholder="$t('Enter weight')"
                                  class="rounded p-1 w-full"
                                  :rules="[requiredValidator]"
                                  disabled
                                />
                              </div>
                            </div>
                          </div>

                          <VSpacer />

                          <div
                            class="d-flex flex-column mt-5 text-start text-md-end"
                            :class="$vuetify.display.mdAndDown ? 'gap-2' : 'gap-4'"
                          >
                            <div class="d-flex text-base align-self-md-end" style="flex-direction: column;">
                              <div class="text-primary">
                                <span style="text-transform: uppercase;">₪</span> {{ item.price }}
                              </div>
                              
                              <div v-if="hasItems">
                                <div v-if="item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo !== item.quantity * item.price">
                                  <span style="white-space: nowrap;" v-if="item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo > item.quantity * item.price" class="text-error">
                                    {{ $t('Dues') }}: ₪ {{ (item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo - item.quantity * item.price).toFixed(2) }}
                                  </span>
                                  <span v-else class="text-success" style="white-space: nowrap;">
                                    {{ $t('Refund') }}: ₪ {{ (item.quantity * item.price - item.dynamicInputs.reduce((sum, w) => sum + Number(w || 0), 0) * item.productID?.pricePerKilo).toFixed(2) }}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </template>
                  </div>

                  <!-- 👉 Empty Cart -->
                  <div v-else>
                    <VImg :src="emptyCartImg" />
                  </div>
                </VCol>

                <VCol
                  cols="12"
                  lg="4"
                >
                  <VCard
                    v-if="hasItems"
                    flat
                    variant="outlined"
                  >
                    

                    <!-- 👉 Price details -->
                    <VCardText>
                      <h6 class="text-h6 mb-4">
                        {{ $t('Price Details') }}
                      </h6>
                      <div class="d-flex justify-space-between mb-2">
                        <span v-if="totalDues > 0" class="text-error">{{ $t('Dues') }}</span>
                        <span v-else-if="totalDues < 0" class="text-success">{{ $t('Refund') }}</span>
                        <span v-else>{{ $t('No dues') }}</span>
                        <span v-if="totalDues">₪ {{ Math.abs(totalDues).toFixed(2) }}</span>
                      </div>
                    </VCardText>

                    <VDivider v-if="hasItems" />

                    <VCardText class="d-flex justify-space-between pa-6" v-if="hasItems">
                      <h6 v-if="totalDues > 0" class="text-error text-h6">
                        {{ $t('Total') }}
                      </h6>
                      <h6 v-else-if="totalDues < 0" class="text-success text-h6">
                        {{ $t('Total') }}
                      </h6>
                      <h6 class="text-h6" v-if="totalDues">
                        ₪ {{ Math.abs(totalDues).toFixed(2) }}
                      </h6>
                    </VCardText>
                  </VCard>

                  <div v-if="order && totalDues > 0 && order.total == totalDues && order.status=='Pending'">
                    <div v-if="nedarimIframeHtml" v-html="nedarimIframeHtml"></div>

                    <VBtn v-if="nedarimIframeHtml" type="button" @click="pay" :disabled="isClickPayment" class="TextBox">{{ $t('Make Payment') }}</VBtn>

                    <div v-if="errorMessage" style="color: #f00">{{ errorMessage }}</div>
                  </div>
                  <div v-else-if="order && totalDues < 0 && order.total == totalDues">
                    <p style="text-align: center; margin-top: 20px;">תודה על העדכון<br>
בימים הקרובים יתבצע זיכוי לכרטיס אשראי ממנו שילמת<br>

תקבלו הודעו לאחר ביצוע הזיכוי.

</p>
                  </div>
                  <div v-else-if="order.total == totalDues">
                    <p style="text-align: center; margin-top: 20px;">תודה על העדכון</p>
                  </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
          <VDivider />
        </VCard>
      </div>
    </VContainer>
    

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
