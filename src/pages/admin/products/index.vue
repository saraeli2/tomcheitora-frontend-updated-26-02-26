<script setup>
definePage({
  meta: {
    action: ['admin-view-products', 'admin-create-products'],
    subject: ['View Products', 'Create Products'],
    title: 'Products',
  },
})

import AddNewProductDrawer from '@/views/admin/products/AddNewProductDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const searchQuery = ref('')
const searchSku = ref('')
const selectedManufacturer = ref()
const selectedSupplier = ref()
const selectedCertification = ref()
const selectedPackagetype = ref()
const selectedQuantitytype = ref()
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isProductDialogVisible = ref(false)
const isAddNewProductDrawerVisible = ref(false)
const productDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Slug',
    key: 'slug',
  },
  {
    title: 'Internal SKU',
    key: 'internalSKU',
  },
  {
    title: 'External SKU',
    key: 'externalSKU',
  },
  {
    title: 'Box SKU',
    key: 'boxSKU',
  },
  {
    title: 'Manufacturer',
    key: 'manufacturerID',
  },
  {
    title: 'Supplier',
    key: 'supplierID',
  },
  {
    title: 'Certification',
    key: 'certificationID',
  },
  {
    title: 'Package Type',
    key: 'packagetypeID',
  },
  {
    title: 'Quantity Type',
    key: 'quantitytypeID',
  },
  {
    title: 'Purchase Price',
    key: 'purchasePrice',
  },
  {
    title: 'Sale Price',
    key: 'salePrice',
  },
  {
    title: 'Max Stock',
    key: 'maxStock',
  },
  {
    title: 'Remaining Stock',
    key: 'remainingStock',
  },
  {
    title: 'Active',
    key: 'status',
  },
  {
    title: 'Created At',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    key: 'updatedAt',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const {
  data: customerData,
  execute: fetchProducts,
} = await useApi(createUrl('/admin/products', {
  query: {
    search: searchQuery,
    sku: searchSku,
    manufacturer: selectedManufacturer,
    supplier: selectedSupplier,
    certification: selectedCertification,
    packagetype: selectedPackagetype,
    quantitytype: selectedQuantitytype,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const products = computed(() => customerData.value.products)
const totalProducts = computed(() => customerData.value.total)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const certificationOptions = computed(() => commonsync.certificationOptions)
const packagetypeOptions = computed(() => commonsync.packagetypeOptions)
const quantitytypeOptions = computed(() => commonsync.quantitytypeOptions)

const certifications = certificationOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const packagetypes = packagetypeOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const quantitytypes = quantitytypeOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const manufacturersync = await $api('/admin/manufacturers/respond-with/extra-options').catch(err => console.log(err))
const manufacturerOptions = computed(() => manufacturersync.manufacturerOptions)

const manufacturers = manufacturerOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const suppliersync = await $api('/admin/suppliers/respond-with/extra-options').catch(err => console.log(err))
const supplierOptions = computed(() => suppliersync.supplierOptions)

const suppliers = supplierOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const resolveStatusVariantAndIcon = status => {
  if (status === 'Active')
    return {
      variant: 'success',
      title: 'Yes',
    }
  
  return {
    variant: 'secondary',
    title: 'No',
  }
}

const modifyProduct = async userData => {
  // refetch Product
  fetchProducts()
}

const editProduct = async value => {
  productDetail.value = value
  
  isProductDialogVisible.value = true
}

const deleteProduct = async id => {
  Swal.fire({
    title: 'Are You Sure?',
    html: 'Selecting Delete will <strong>permanently delete</strong> this item. This action cannot be undone.',
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'No, Cancel',
    confirmButtonText: 'Yes, Delete!',
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/products/${ id }`, { method: 'DELETE' })
        fetchProducts()
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
              Products
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>Show</span>
            <AppSelect
              :model-value="itemsPerPage"
              :items="[
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
            v-if="can('admin-create-products', 'Create Products')"
            prepend-icon="tabler-plus"
            @click="isAddNewProductDrawerVisible = true"
          >
            Create Product
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-products', 'View Products')"
        v-model="panel"
      >
        <VExpansionPanel>
          <VExpansionPanelTitle>Search</VExpansionPanelTitle>

          <VExpansionPanelText>
            <VCardText>
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    placeholder="Search Product"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchSku"
                    placeholder="Search SKU"
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedManufacturer"
                    :items="manufacturers"
                    placeholder="Manufacturer"
                    clearable
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedSupplier"
                    :items="suppliers"
                    placeholder="Supplier"
                    clearable
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedCertification"
                    :items="certifications"
                    placeholder="Certification"
                    clearable
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedPackagetype"
                    :items="packagetypes"
                    placeholder="Package Type"
                    clearable
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedQuantitytype"
                    :items="quantitytypes"
                    placeholder="Quantity Type"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 'Active', title: 'Active' },
                      { value: 'Inactive', title: 'Inactive' },
                    ]"
                    placeholder="Status"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-products', 'View Products')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-products', 'View Products')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalProducts"
        :headers="headers"
        :items="products"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-products-detail-id', params: { id: item._id } }">
            {{ item.name }}
          </RouterLink>
        </template>

        <!-- slug -->
        <template #[`item.slug`]="{ item }">
          {{ item.slug }}
        </template>

        <!-- internalSKU -->
        <template #[`item.internalSKU`]="{ item }">
          {{ item.internalSKU }}
        </template>

        <!-- externalSKU -->
        <template #[`item.externalSKU`]="{ item }">
          {{ item.externalSKU }}
        </template>

        <!-- boxSKU -->
        <template #[`item.boxSKU`]="{ item }">
          {{ item.boxSKU }}
        </template>

        <!-- manufacturerID -->
        <template #[`item.manufacturerID`]="{ item }">
          {{ item.manufacturerID ? item.manufacturerID.name : '' }}
        </template>

        <!-- supplierID -->
        <template #[`item.supplierID`]="{ item }">
          {{ item.supplierID ? item.supplierID.name : '' }}
        </template>

        <!-- certificationID -->
        <template #[`item.certificationID`]="{ item }">
          {{ item.certificationID ? item.certificationID.name : '' }}
        </template>

        <!-- packagetypeID -->
        <template #[`item.packagetypeID`]="{ item }">
          {{ item.packagetypeID ? item.packagetypeID.name : '' }}
        </template>

        <!-- quantitytypeID -->
        <template #[`item.quantitytypeID`]="{ item }">
          {{ item.quantitytypeID ? item.packagetypeID.name : '' }}
        </template>

        <!-- purchasePrice -->
        <template #[`item.purchasePrice`]="{ item }">
          {{ item.purchasePrice }}
        </template>

        <!-- salePrice -->
        <template #[`item.salePrice`]="{ item }">
          {{ item.salePrice }}
        </template>

        <!-- maxStock -->
        <template #[`item.maxStock`]="{ item }">
          {{ item.maxStock }}
        </template>

        <!-- remainingStock -->
        <template #[`item.remainingStock`]="{ item }">
          {{ item.remainingStock }}
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
                <VListItem :to="{ name: 'admin-products-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-products', 'Update Products')"
                  @click="editProduct(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-products', 'Delete Products')"
                  @click="deleteProduct(item._id)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
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
            :total-items="totalProducts"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewProductDrawer
      v-if="isAddNewProductDrawerVisible"
      v-model:is-drawer-open="isAddNewProductDrawerVisible"
      v-model:manufacturers="manufacturers"
      v-model:suppliers="suppliers"
      v-model:certifications="certifications"
      v-model:packagetypes="packagetypes"
      v-model:quantitytypes="quantitytypes"
      @user-data="modifyProduct"
    />

    <AddNewProductDrawer
      v-if="isProductDialogVisible"
      v-model:is-drawer-open="isProductDialogVisible"
      v-model:product="productDetail"
      v-model:manufacturers="manufacturers"
      v-model:suppliers="suppliers"
      v-model:certifications="certifications"
      v-model:packagetypes="packagetypes"
      v-model:quantitytypes="quantitytypes"
      @user-data="modifyProduct"
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
