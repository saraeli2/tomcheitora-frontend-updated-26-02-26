<script setup>
import { useI18n } from 'vue-i18n'
import { utils, writeFile } from 'xlsx'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'tabData',
])

const showLoader = ref()

definePage({
  meta: {
    action: ['admin-view-sale-products', 'admin-create-sale-products'],
    subject: ['View Sale Products', 'Create Sale Products'],
    title: 'Sale Products',
  },
})

import AddNewSaleProductDrawer from '@/views/admin/sales/AddNewSaleProductDrawer.vue'
import AddNewImportProductDrawer from '@/views/admin/sales/AddNewImportProductDrawer.vue'
import { can } from '@layouts/plugins/casl'

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isSaleProductDialogVisible = ref(false)
const isAddNewSaleProductDrawerVisible = ref(false)
const saleProductDetail = ref()
const selectedSale = ref(props.saleid)

const isImportProductDrawerVisible = ref(false)

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedProduct = ref()
const searchQuery = ref('')
const searchSku = ref('')

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const headers = computed(() => [
  {
    title: t('Product'),
    key: 'productID',
    sortable: false,
  },
  {
    title: t('Price'),
    key: 'price',
  },
  {
    title: t('Limit Per Customer'),
    key: 'limitPerCustomer',
  },
  {
    title: t('Max Unit'),
    key: 'maxUnit',
  },
  {
    title: t('Internal SKU'),
    key: 'internalSKU',
  },
  {
    title: t('Product number'),
    key: 'productNumber',
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

const {
  data: saleProductData,
  execute: fetchSaleProducts,
} = await useApi(createUrl('/admin/sale-products', {
  query: {
    sale: selectedSale,
    search: searchQuery,
    sku: searchSku,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const saleProducts = computed(() => saleProductData.value.saleProducts)
const totalSaleProducts = computed(() => saleProductData.value.total)

const commonsync = await $api('/admin/products/respond-with/extra-options').catch(err => console.log(err))

const productOptions = computed(() => commonsync.productOptions)

const products = productOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const modifySaleProduct = async userData => {
  // refetch Product
  fetchSaleProducts()
  emit('tabData')
}

const editSaleProduct = async value => {
  saleProductDetail.value = value
  
  isSaleProductDialogVisible.value = true
}

const deleteSaleProduct = async id => {
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
        await $api(`/admin/sale-products/${ id }`, { method: 'DELETE' })
        fetchSaleProducts()
        emit('tabData')
      }
    })  
}

const downloadProductsXLSX = async (selectedSale) => {
  try {
    const response = await $api(`/admin/sale-products/export/xlsx`, {
      responseType: 'json',
      params: {
        sale: props.saleid, // pass selected sale ID
      },
    })

    const saleProductsData = response.saleProducts

    if (!saleProductsData || !saleProductsData.length) {
      Swal.fire({
        icon: 'info',
        title: 'No Sale Products',
        text: 'There are no sale products to export.',
      })
      return
    }

    const worksheet = utils.aoa_to_sheet([
      [
        'Internal SKU',
        'Product Name',
        'Category',
        'Quantity',
        'Price',
        'Max quantity for sale',
        'Max quantity of purchase'
      ]
    ])

    const data = []

    saleProductsData.forEach((sp) => {
      data.push({
        'Internal SKU': sp.productID?.internalSKU || '',
        'Product Name': sp.productID?.name || '',
        'Category': sp.productID?.categoryIDs?.map(c => c.name).join(', ') || '',
        'Quantity': sp.productID?.quantity || 0,
        'Price': sp.price || 0,
        'Max quantity for sale': sp.maxUnit || 0,
        'Max quantity of purchase': sp.limitPerCustomer || 0
      })
    })

    // Append JSON data
    utils.sheet_add_json(worksheet, data, { skipHeader: true, origin: -1 })

    // Set column widths (adjust as needed)
    worksheet['!cols'] = new Array(7).fill({ wch: 25 })

    // Create workbook and append sheet
    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, worksheet, 'SaleProducts')

    // Save file
    writeFile(workbook, 'SaleProducts.xlsx', { compression: true })
  } catch (err) {
    console.error('Failed to download Sale Products XLSX:', err)
    Swal.fire({
      icon: 'error',
      title: 'Export Failed',
      text: 'Could not download sale products XLSX.',
    })
  }
}

const addAllProducts = async() => {
  showLoader.value = true
  const res = await $api(`/admin/sale-all-products-add`, {
    method: 'POST',
    body: {
      saleID: props.saleid,
    },
    onResponseError({ response }) {
      showLoader.value = false
    },
  })

  await nextTick(async () => {
      showLoader.value = false
      fetchSaleProducts()
      emit('tabData')
  })

  
}

const panel = ref()
watch(
  [searchQuery, searchSku, selectedSale, page, itemsPerPage, sortBy, orderBy],
  () => {
    fetchSaleProducts();
  },
  { immediate: true } // fetch initially on component mount
);

</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Sale Products') }}
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
          <!-- 👉 Create Product -->
          <VBtn
            v-if="can('admin-create-sale-products', 'Create Sale Products')"
            prepend-icon="tabler-plus"
            @click="isAddNewSaleProductDrawerVisible = true"
          >
            {{ $t('Add Sale Product') }}
          </VBtn>

          <VBtn
            prepend-icon="tabler-download"
            color="primary"
            @click="downloadProductsXLSX"
          >
            {{ $t('Download XLSX') }}
          </VBtn>

          <VBtn
            prepend-icon="tabler-upload"
            @click="isImportProductDrawerVisible = true"
          >
            {{ $t('Import Products') }}
          </VBtn>

          <VBtn
            v-if="can('admin-create-sale-products', 'Create Sale Products')"
            prepend-icon="tabler-plus"
            @click="addAllProducts"
          >
            {{ $t('Add all products') }}
          </VBtn>
        </div>
      </VCardText>

      <VExpansionPanels
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
                  <AppTextField
                    v-model="searchQuery"
                    :placeholder="$t('Search Product')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchSku"
                    :placeholder="$t('Search SKU/Product Number')"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider />

      <VDivider v-if="can('admin-view-sale-products', 'View Sale Products')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-sale-products', 'View Sale Products')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalSaleProducts"
        :headers="headers"
        :items="saleProducts"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- productID -->
        <template #[`item.productID`]="{ item }">
          <RouterLink
            v-if="can('admin-view-products', 'View Products') && item.productID"
            :to="{ name: 'admin-products-detail-id', params: { id: item.productID._id } }"
          >
            {{ item.productID.name }}
          </RouterLink>
          <span v-else>{{ item.productID ? item.productID.name : '' }}</span>
        </template>

        <!-- price -->
        <template #[`item.price`]="{ item }">
          {{ item.price }}
        </template>

        <!-- price -->
        <template #[`item.productNumber`]="{ item }">
          {{ item.productID?.productNumber }}
        </template>

        <template #[`item.internalSKU`]="{ item }">
          {{ item.productID?.internalSKU }}
        </template>

        <!-- limitPerCustomer -->
        <template #[`item.limitPerCustomer`]="{ item }">
          {{ item.limitPerCustomer }}
        </template>

        <!-- maxUnit -->
        <template #[`item.maxUnit`]="{ item }">
          {{ item.maxUnit }}
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
                <VListItem
                  v-if="can('admin-update-sale-products', 'Update Sale Products')"
                  @click="editSaleProduct(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-sale-products', 'Delete Sale Products')"
                  @click="deleteSaleProduct(item._id)"
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
            :total-items="totalSaleProducts"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewSaleProductDrawer
      v-if="isAddNewSaleProductDrawerVisible"
      v-model:is-drawer-open="isAddNewSaleProductDrawerVisible"
      v-model:products="products"
      v-model:saleid="selectedSale"
      @user-data="modifySaleProduct"
    />

    <AddNewSaleProductDrawer
      v-if="isSaleProductDialogVisible"
      v-model:is-drawer-open="isSaleProductDialogVisible"
      v-model:sale-product="saleProductDetail"
      v-model:products="products"
      v-model:saleid="selectedSale"
      @user-data="modifySaleProduct"
    />

    <AddNewImportProductDrawer
      v-model="isImportProductDrawerVisible"
      v-model:saleid="selectedSale"
      v-model:is-drawer-open="isImportProductDrawerVisible"
      @update-data="modifySaleProduct"
    />

    <VDialog
    v-model="showLoader"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
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
