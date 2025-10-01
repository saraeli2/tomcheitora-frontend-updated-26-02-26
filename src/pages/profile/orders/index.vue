<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Orders',
  },
})

import useHelper from "@/mixins/helper"
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'

const { numberFormat } = useHelper()

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()
const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(20)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/get-user-details`))

const userData = computed(() => adminDetail.value)

const headers = [
  {
    title: t('Order'),
    key: 'order',
  },
  {
    title: t('Sale'),
    key: 'sale',
  },
  {
    title: t('Date'),
    key: 'date',
  },
  {
    title: t('Status'),
    key: 'status',
  },
  {
    title: t( 'Total Amount'),
    key: 'spent',
  },
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
  },
]

const resolveStatus = status => {
  if (status === 'Processing')
    return { color: 'success' }
  if (status === 'Out for Delivery')
    return { color: 'primary' }
  if (status === 'Ready to Pickup')
    return { color: 'info' }
  if (status === 'Pending')
    return { color: 'warning' }
}

const {
  data: ordersData,
  execute: fetchOrders,
} = await useApi(createUrl('/orders', {
  query: {
    page,
    itemsPerPage,
    sortBy,
    orderBy
  },
}))

const orders = computed(() => ordersData.value.orders)
const totalOrder = computed(() => ordersData.value.total)
const hasReceivable = computed(() => ordersData.value.hasReceivable)

const hasReceivedFormItem = computed(() => ordersData.value.hasReceivedFormItem)

</script>

<template>
  <div class="product-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>{{ $t('Orders') }}</h2>
        </VCardText>
      </VContainer>
    </div>

    <div class="order-tables" style="margin: 30px 0">
      <VContainer v-if="orders && orders.length">
        <VCard>
          <VCardText>
            <div class="d-flex justify-space-between flex-wrap align-center gap-4">
              <h5 class="text-h5">
                {{ $t('Orders placed') }}

                <!-- <span v-if="hasReceivable">
                  <RouterLink :to="`/profile/received-weight-update`" style="background: rgb(255 91 24);color: #fff !important;margin: 0 10px;display: inline-block;padding: 4px 10px;border-radius: 3px;">
                    {{ $t('עדכון משקלים') }}
                  </RouterLink>
                </span> -->

                <span v-if="(hasReceivable || hasReceivedFormItem) && userData.allowedIsraelUser">
                  <RouterLink :to="`/profile/received-items-report`" style="background: #32A744;color: #fff !important;margin: 0 10px;display: inline-block;padding: 4px 10px;border-radius: 3px;">
                    עדכון חוסרים\עודפים
                  </RouterLink>
                </span>
              </h5>
              <!-- <div>
                <AppTextField
                  v-model="searchQuery"
                  placeholder="Search Order"
                  style=" max-inline-size: 200px; min-inline-size: 200px;"
                />
              </div> -->
            </div>
          </VCardText>

          <VDivider />
          <VDataTableServer
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :headers="headers"
            :items="orders"
            item-value="id"
            :items-length="totalOrder"
            class="text-no-wrap"
            @update:options="updateOptions"
          >
            <!-- Order ID -->
            <template #item.order="{ item }">
              <RouterLink v-if="item?.orderType == 'Weight Adjust'" :to="`#`">
                #{{ item._id }}
              </RouterLink>
              <RouterLink v-else-if="item?.orderType == 'Received Items Form'" :to="`/profile/received-items-report`">
                #{{ item._id }}
              </RouterLink>
              <RouterLink v-else :to="`/profile/orders/${item._id}`">
                #{{ item._id }} 
              </RouterLink>
            </template>

            <!-- Date -->
            <template #item.sale="{ item }">
              <RouterLink :to="`/sales/${item.saleID?._id}`">
                {{ item.saleID?.name }}
              </RouterLink>
            </template>

            <!-- Date -->
            <template #item.date="{ item }">
              {{ new Date(item.createdAt).toLocaleString() }}
            </template>

            <!-- Status -->
            <template #item.status="{ item }">
              <VChip
                label
                :color="resolveStatus(item.status)?.color"
                size="small"
              >
                {{ item.status }}
              </VChip>
            </template>

            <!-- Spent -->
            <template #item.spent="{ item }">
              {{ numberFormat(item.subTotal) }}
            </template>

            <!-- Actions -->
            <template #item.actions="{ item }">
              <IconBtn>
                <VIcon icon="tabler-dots-vertical" />
                <VMenu activator="parent">
                  <VList>
                    <VListItem
                      v-if="item?.orderType == 'Weight Adjust'"
                      value="view"
                      to="#"
                    >
                      {{ $t('Edit Order') }}
                    </VListItem>

                    <VListItem
                      v-else-if="item?.orderType == 'Received Items Form'"
                      value="view"
                      to="/profile/received-items-report"
                    >
                      {{ $t('Edit Order') }}
                    </VListItem>
                    <VListItem
                      v-else-if="item.status == 'Pending'"
                      value="view"
                      to="/profile/checkout"
                    >
                      {{ $t('Edit Order') }}
                    </VListItem>

                    <VListItem
                      v-if="item?.orderType == 'Weight Adjust'"
                      value="view"
                      to="#"
                    >
                      {{ $t('View Order') }}
                    </VListItem>

                    <VListItem
                      v-else-if="item?.orderType == 'Received Items Form'"
                      value="view"
                      to="/profile/received-items-report"
                    >
                      {{ $t('View Order') }}
                    </VListItem>

                    <VListItem
                      v-else
                      value="view"
                      :to="`/profile/orders/${item._id}`"
                    >
                      {{ $t('View Order') }}
                    </VListItem>
                  </VList>
                </VMenu>
              </IconBtn>
            </template>

            <!-- pagination -->
            <template #bottom>
              <TablePagination
                v-model:page="page"
                :items-per-page="itemsPerPage"
                :total-items="totalOrder"
              />
            </template>
          </VDataTableServer>
        </VCard>
      </VContainer>
      <VContainer v-else>
        <div class="checkout-card" style="margin:100px 0 150px">
          <h1>{{ $t('You have no order') }}</h1>
        </div>
      </VContainer>
    </div>
    <VCard class="pricing-card">
      <div style="background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));">
        <Footer />
      </div>
    </VCard>
  </div>
</template>
