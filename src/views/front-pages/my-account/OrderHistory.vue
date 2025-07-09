<script setup>
const searchQuery = ref('')

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Order',
    key: 'order',
  },
  {
    title: 'Date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Spent',
    key: 'spent',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const resolveStatus = status => {
  if (status === 'Delivered')
    return { color: 'success' }
  if (status === 'Out for Delivery')
    return { color: 'primary' }
  if (status === 'Ready to Pickup')
    return { color: 'info' }
  if (status === 'Dispatched')
    return { color: 'warning' }
}

const {
  data: ordersData,
  execute: fetchOrders,
} = await useApi(createUrl('/apps/ecommerce/orders', {
  query: {
    q: searchQuery,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

const orders = [
        {
            "id": 100,
            "order": 9042,
            "customer": "Chere Schofield",
            "email": "cschofield2r@ucsd.edu",
            "avatar": "",
            "payment": 2,
            "status": "Ready to Pickup",
            "spent": 815.77,
            "method": "mastercard",
            "date": "2/1/2023",
            "time": "4:12 PM",
            "methodNumber": 3949
        },
        {
            "id": 99,
            "order": 7189,
            "customer": "Boycie Hartmann",
            "email": "bhartmann2q@addthis.com",
            "avatar": "",
            "payment": 3,
            "status": "Out for Delivery",
            "spent": 704.86,
            "method": "paypalLogo",
            "date": "1/2/2023",
            "time": "8:55 PM",
            "methodNumber": 6424
        },
        {
            "id": 98,
            "order": 8114,
            "customer": "Ulysses Goodlife",
            "email": "ugoodlife2p@blogger.com",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-2-D5OQ4OGs.png",
            "payment": 3,
            "status": "Ready to Pickup",
            "spent": 746.38,
            "method": "mastercard",
            "date": "4/8/2023",
            "time": "3:39 AM",
            "methodNumber": 4509
        },
        {
            "id": 97,
            "order": 7064,
            "customer": "Carmon Vasiljevic",
            "email": "cvasiljevic2o@odnoklassniki.ru",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-8-BK_zJ7wP.png",
            "payment": 3,
            "status": "Delivered",
            "spent": 595.25,
            "method": "paypalLogo",
            "date": "3/20/2023",
            "time": "3:11 PM",
            "methodNumber": 4892
        },
        {
            "id": 96,
            "order": 5911,
            "customer": "Hilliard Merck",
            "email": "hmerck2n@printfriendly.com",
            "avatar": "",
            "payment": 4,
            "status": "Out for Delivery",
            "spent": 237.91,
            "method": "paypalLogo",
            "date": "8/14/2022",
            "time": "3:26 PM",
            "methodNumber": 3196
        },
        {
            "id": 95,
            "order": 6111,
            "customer": "Chad Cock",
            "email": "ccock2m@g.co",
            "avatar": "",
            "payment": 4,
            "status": "Ready to Pickup",
            "spent": 669.45,
            "method": "mastercard",
            "date": "3/11/2023",
            "time": "10:43 AM",
            "methodNumber": 1014
        },
        {
            "id": 94,
            "order": 8767,
            "customer": "Lyndsey Dorey",
            "email": "ldorey2l@barnesandnoble.com",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-2-D5OQ4OGs.png",
            "payment": 3,
            "status": "Ready to Pickup",
            "spent": 738.42,
            "method": "mastercard",
            "date": "8/29/2022",
            "time": "5:24 AM",
            "methodNumber": 3432
        },
        {
            "id": 93,
            "order": 7931,
            "customer": "Octavius Whitchurch",
            "email": "owhitchurch2k@google.ca",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-7-L2C9lfhq.png",
            "payment": 3,
            "status": "Dispatched",
            "spent": 383.52,
            "method": "mastercard",
            "date": "12/26/2022",
            "time": "9:49 AM",
            "methodNumber": 8585
        },
        {
            "id": 92,
            "order": 7280,
            "customer": "Sibley Braithwait",
            "email": "sbraithwait2j@webmd.com",
            "avatar": "",
            "payment": 1,
            "status": "Ready to Pickup",
            "spent": 554.91,
            "method": "mastercard",
            "date": "12/6/2022",
            "time": "2:11 AM",
            "methodNumber": 8535
        },
        {
            "id": 91,
            "order": 7094,
            "customer": "Damara Figgins",
            "email": "dfiggins2i@de.vu",
            "avatar": "",
            "payment": 2,
            "status": "Delivered",
            "spent": 62.62,
            "method": "mastercard",
            "date": "6/29/2022",
            "time": "6:51 AM",
            "methodNumber": 8321
        },
        {
            "id": 100,
            "order": 9042,
            "customer": "Chere Schofield",
            "email": "cschofield2r@ucsd.edu",
            "avatar": "",
            "payment": 2,
            "status": "Ready to Pickup",
            "spent": 815.77,
            "method": "mastercard",
            "date": "2/1/2023",
            "time": "4:12 PM",
            "methodNumber": 3949
        },
        {
            "id": 99,
            "order": 7189,
            "customer": "Boycie Hartmann",
            "email": "bhartmann2q@addthis.com",
            "avatar": "",
            "payment": 3,
            "status": "Out for Delivery",
            "spent": 704.86,
            "method": "paypalLogo",
            "date": "1/2/2023",
            "time": "8:55 PM",
            "methodNumber": 6424
        },
        {
            "id": 98,
            "order": 8114,
            "customer": "Ulysses Goodlife",
            "email": "ugoodlife2p@blogger.com",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-2-D5OQ4OGs.png",
            "payment": 3,
            "status": "Ready to Pickup",
            "spent": 746.38,
            "method": "mastercard",
            "date": "4/8/2023",
            "time": "3:39 AM",
            "methodNumber": 4509
        },
        {
            "id": 97,
            "order": 7064,
            "customer": "Carmon Vasiljevic",
            "email": "cvasiljevic2o@odnoklassniki.ru",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-8-BK_zJ7wP.png",
            "payment": 3,
            "status": "Delivered",
            "spent": 595.25,
            "method": "paypalLogo",
            "date": "3/20/2023",
            "time": "3:11 PM",
            "methodNumber": 4892
        },
        {
            "id": 96,
            "order": 5911,
            "customer": "Hilliard Merck",
            "email": "hmerck2n@printfriendly.com",
            "avatar": "",
            "payment": 4,
            "status": "Out for Delivery",
            "spent": 237.91,
            "method": "paypalLogo",
            "date": "8/14/2022",
            "time": "3:26 PM",
            "methodNumber": 3196
        },
        {
            "id": 95,
            "order": 6111,
            "customer": "Chad Cock",
            "email": "ccock2m@g.co",
            "avatar": "",
            "payment": 4,
            "status": "Ready to Pickup",
            "spent": 669.45,
            "method": "mastercard",
            "date": "3/11/2023",
            "time": "10:43 AM",
            "methodNumber": 1014
        },
        {
            "id": 94,
            "order": 8767,
            "customer": "Lyndsey Dorey",
            "email": "ldorey2l@barnesandnoble.com",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-2-D5OQ4OGs.png",
            "payment": 3,
            "status": "Ready to Pickup",
            "spent": 738.42,
            "method": "mastercard",
            "date": "8/29/2022",
            "time": "5:24 AM",
            "methodNumber": 3432
        },
        {
            "id": 93,
            "order": 7931,
            "customer": "Octavius Whitchurch",
            "email": "owhitchurch2k@google.ca",
            "avatar": "/vuexy-vuejs-admin-template/demo-1/assets/avatar-7-L2C9lfhq.png",
            "payment": 3,
            "status": "Dispatched",
            "spent": 383.52,
            "method": "mastercard",
            "date": "12/26/2022",
            "time": "9:49 AM",
            "methodNumber": 8585
        },
        {
            "id": 92,
            "order": 7280,
            "customer": "Sibley Braithwait",
            "email": "sbraithwait2j@webmd.com",
            "avatar": "",
            "payment": 1,
            "status": "Ready to Pickup",
            "spent": 554.91,
            "method": "mastercard",
            "date": "12/6/2022",
            "time": "2:11 AM",
            "methodNumber": 8535
        },
        {
            "id": 91,
            "order": 7094,
            "customer": "Damara Figgins",
            "email": "dfiggins2i@de.vu",
            "avatar": "",
            "payment": 2,
            "status": "Delivered",
            "spent": 62.62,
            "method": "mastercard",
            "date": "6/29/2022",
            "time": "6:51 AM",
            "methodNumber": 8321
        }
    ];
const totalOrder = computed(() => 20)

const deleteOrder = async id => {
  await $api(`/apps/ecommerce/orders/${ id }`, { method: 'DELETE' })
  fetchOrders()
}
</script>

<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap align-center gap-4">
        <h5 class="text-h5">
          Orders placed
        </h5>
        <div>
          <AppTextField
            v-model="searchQuery"
            placeholder="Search Order"
            style=" max-inline-size: 200px; min-inline-size: 200px;"
          />
        </div>
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
        <RouterLink to="/front-pages/my-account/order-details">
          #{{ item.order }}
        </RouterLink>
      </template>

      <!-- Date -->
      <template #item.date="{ item }">
        {{ new Date(item.date).toDateString() }}
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
        ${{ item.spent }}
      </template>

      <!-- Actions -->
      <template #item.actions="{ item }">
        <IconBtn>
          <VIcon icon="tabler-dots-vertical" />
          <VMenu activator="parent">
            <VList>
              <VListItem
                value="view"
                to="/front-pages/my-account/order-details"
              >
                View
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
</template>
