<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-exclude-products', 'admin-create-exclude-products'],
    subject: ['View Exclude Products', 'Create Exclude Products'],
    title: 'Exclude Products',
  },
})

import AddNewExcludeProductDrawer from '@/views/admin/sales/AddNewExcludeProductDrawer.vue'
import { can } from '@layouts/plugins/casl'

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isExcludeProductDialogVisible = ref(false)
const isAddNewExcludeProductDrawerVisible = ref(false)
const excludeProductDetail = ref()
const selectedSale = ref(props.saleid)

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedProduct = ref()

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
    title: t('Community'),
    key: 'communityID',
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
  data: excludeProductData,
  execute: fetchExcludeProducts,
} = await useApi(createUrl('/admin/exclude-products', {
  query: {
    sale: selectedSale,
    product: selectedProduct,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const excludeProducts = computed(() => excludeProductData.value.excludeProducts)
const totalExcludeProducts = computed(() => excludeProductData.value.total)

const tableData = computed(() => {
  const rows = []

  excludeProducts.value.forEach(product => {
    product.communityItems.forEach((item, index) => {
      rows.push({
        ...item,
        productID: product.productID,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        _id: product._id,
        _showProductInfo: index === 0, // only first row shows product info
      })
    })
  })
  
  return rows
})

const commonsync = await $api('/admin/products/respond-with/extra-options', {
  query: {
    sale: selectedSale.value,
  },
}).catch(err => console.log(err))

const productOptions = computed(() => commonsync.productOptions)

const products = productOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const commonsyncGroups = await $api('/admin/communities/respond-with/extra-options', {
  query: {
    sale: selectedSale.value,
  },
}).catch(err => console.log(err))

const communityOptions = computed(() => commonsyncGroups.communityOptions)

const communities = communityOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const modifyExcludeProduct = async userData => {
  // refetch Product
  fetchExcludeProducts()
  emit('tabData')
}

const editExcludeProduct = async value => {
  const data = await $api(`/admin/exclude-products/${ value._id }`).catch(err => console.log(err))

  excludeProductDetail.value = data
  
  isExcludeProductDialogVisible.value = true
}

const deleteExcludeProduct = async id => {
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
        await $api(`/admin/exclude-products/${ id }`, { method: 'DELETE' })
        fetchExcludeProducts()
        emit('tabData')
      }
    })  
}
</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Exclude Products') }}
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
            v-if="can('admin-create-exclude-products', 'Create Exclude Products')"
            prepend-icon="tabler-plus"
            @click="isAddNewExcludeProductDrawerVisible = true"
          >
            {{ $t('Add Exclude Product') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Select status -->
          <div class="invoice-list-filter">
            <AppSelect
              v-model="selectedProduct"
              :placeholder="$t('Select Product')"
              clearable
              clear-icon="tabler-x"
              single-line
              :items="products"
            />
          </div>
        </div>
      </VCardText>

      <VDivider />

      <VDivider v-if="can('admin-view-exclude-products', 'View Exclude Products')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-exclude-products', 'View Exclude Products')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalExcludeProducts"
        :headers="headers"
        :items="tableData"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- productID -->
        <template #[`item.productID`]="{ item }">
          <span v-if="item._showProductInfo">
            <RouterLink
              v-if="can('admin-view-products', 'View Products') && item.productID"
              :to="{ name: 'admin-products-detail-id', params: { id: item.productID._id } }"
            >
              {{ item.productID.name }}
            </RouterLink>
            <span v-else>{{ item.productID ? item.productID.name : '' }}</span>
          </span>
        </template>

        <!-- communityID -->
        <template #[`item.communityID`]="{ item }">
          <RouterLink
            v-if="can('admin-view-communities', 'View Communities') && item.communityID"
            :to="{ name: 'admin-communities-detail-id', params: { id: item.communityID._id } }"
          >
            {{ item.communityID.name }}
          </RouterLink>
          <span v-else>{{ item.communityID ? item.communityID.name : '' }}</span>
        </template>

        <!-- Community Item info (repeats per product) -->
        <template #[`item.price`]="{ item }">
          {{ item.price }}
        </template>
        <template #[`item.limitPerCustomer`]="{ item }">
          {{ item.limitPerCustomer }}
        </template>
        <template #[`item.maxUnit`]="{ item }">
          {{ item.maxUnit }}
        </template>

        <!-- Created At -->
        <template #[`item.createdAt`]="{ item }">
          <span v-if="item._showProductInfo">{{ formatDateWithTime(item.createdAt) }}</span>
        </template>

        <!-- Updated At -->
        <template #[`item.updatedAt`]="{ item }">
          <span v-if="item._showProductInfo">{{ formatDateWithTime(item.updatedAt) }}</span>
        </template>

        <!-- Actions -->
        <template #[`item.actions`]="{ item }">
          <span v-if="item._showProductInfo">
            <VBtn
              icon
              variant="text"
              color="medium-emphasis"
            >
              <VIcon icon="tabler-dots-vertical" />
              <VMenu activator="parent">
                <VList>
                  <VListItem
                    v-if="can('admin-update-exclude-products', 'Update Exclude Products')"
                    @click="editExcludeProduct(item)"
                  >
                    <template #prepend>
                      <VIcon icon="tabler-pencil" />
                    </template>
                    <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                  </VListItem>

                  <VListItem
                    v-if="can('admin-delete-exclude-products', 'Delete Exclude Products')"
                    @click="deleteExcludeProduct(item._id)"
                  >
                    <template #prepend>
                      <VIcon icon="tabler-trash" />
                    </template>
                    <VListItemTitle>{{ $t('Delete') }}</VListItemTitle>
                  </VListItem>
                </VList>
              </VMenu>
            </VBtn>
          </span>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalExcludeProducts"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewExcludeProductDrawer
      v-if="isAddNewExcludeProductDrawerVisible"
      v-model:is-dialog-visible="isAddNewExcludeProductDrawerVisible"
      v-model:products="products"
      v-model:communities="communities"
      v-model:saleid="selectedSale"
      @user-data="modifyExcludeProduct"
    />

    <AddNewExcludeProductDrawer
      v-if="isExcludeProductDialogVisible"
      v-model:is-dialog-visible="isExcludeProductDialogVisible"
      v-model:exclude-product="excludeProductDetail"
      v-model:products="products"
      v-model:communities="communities"
      v-model:saleid="selectedSale"
      @user-data="modifyExcludeProduct"
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
