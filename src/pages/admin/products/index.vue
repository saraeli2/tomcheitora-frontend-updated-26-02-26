<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import AddNewImportProductDrawer from '@/views/admin/products/AddNewImportProductDrawer.vue'
import { useI18n } from 'vue-i18n'
import Draggable from 'vuedraggable'
import { utils, writeFile } from 'xlsx'

definePage({
  meta: {
    action: ['admin-view-products', 'admin-create-products'],
    subject: ['View Products', 'Create Products'],
    title: 'Products',
  },
})

import AddNewProductDialog from '@/views/admin/products/AddNewProductDialog.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

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
const itemsPerPage = ref(25)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isProductDialogVisible = ref(false)
const isAddNewProductDialogVisible = ref(false)
const productDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const isImportProductDrawerVisible = ref(false)

const defaultColumns = [
  {
    title: t('Category'),
    key: 'categoryIDs',
    visible: true,
  },
  {
    title: t('Name'),
    key: 'name',
    visible: true,
  },
  {
    title: t('Product number'),
    key: 'productNumber',
    visible: true,
  },
  {
    title: t('Model'),
    key: 'model',
    visible: true,
  },
  {
    title: t('Selling Price'),
    key: 'salePrice',
    visible: true,
  },
  {
    title: t('Internal serial number'),
    key: 'serial_number',
    visible: true,
  },
  {
    title: t('Internal SKU'),
    key: 'internalSKU',
    visible: true,
  },
  {
    title: t('External SKU'),
    key: 'externalSKU',
    visible: true,
  },
  {
    title: t('Quantity'),
    key: 'quantity',
    visible: true,
  },
  {
    title: t('Amount in package'),
    key: 'amount_in_package',
    visible: true,
  },
  {
    title: t('Amount of packages in box'),
    key: 'packages_in_box',
    visible: true,
  },
  {
    title: t('Amount of boxes'),
    key: 'amount_of_boxes',
    visible: true,
  },
  {
    title: t('Unit price (before VAT)'),
    key: 'unit_price',
    visible: true,
  },
  {
    title: t('Unit price (including VAT)'),
    key: 'unit_price_including_vat',
    visible: true,
  },
  {
    title: t('Box price'),
    key: 'box_price',
    visible: true,
  },
  {
    title: t('Size'),
    key: 'size',
    visible: true,
  },
  {
    title: t('Color'),
    key: 'color',
    visible: true,
  },
  
  {
    title: t('Active'),
    key: 'status',
    visible: true,
  },
  {
    title: t('Created At'),
    key: 'createdAt',
    visible: true,
  },
  {
    title: t('Updated At'),
    key: 'updatedAt',
    visible: true,
  },
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
    visible: true,
  },
]

const products = ref([])
const totalProducts = ref(0)
const loadingMore = ref(false)

// const {
//   data: customerData,
//   execute: fetchProducts,
//   error,
// } = await useApi(createUrl('/admin/products', {
//   query: {
//     search: searchQuery,
//     sku: searchSku,
//     manufacturer: selectedManufacturer,
//     supplier: selectedSupplier,
//     certification: selectedCertification,
//     packagetype: selectedPackagetype,
//     quantitytype: selectedQuantitytype,
//     status: selectedStatus,
//     itemsPerPage,
//     page,
//     sortBy,
//     orderBy,
//   },
// }))

async function loadProducts(newPage = 1) {
  
  if (loadingMore.value) return
  loadingMore.value = true

  try {
    const response = await useApi(createUrl('/admin/products', {
      query: {
        search: searchQuery.value,
        sku: searchSku.value,
        manufacturer: selectedManufacturer.value,
        supplier: selectedSupplier.value,
        certification: selectedCertification.value,
        packagetype: selectedPackagetype.value,
        quantitytype: selectedQuantitytype.value,
        status: selectedStatus.value,
        itemsPerPage: itemsPerPage.value,
        page: newPage,
        sortBy: sortBy.value,
        orderBy: orderBy.value,
      },
    }))

    if (newPage === 1) {
      products.value = response.data._value.products
    } else {
      products.value.push(...response.data._value.products)
    }
    totalProducts.value = response.data._value.total
    page.value = newPage

    //console.log(response.data._value.products);
  } catch (err) {
    console.error('Failed to load products:', err)
  } finally {
    loadingMore.value = false
  }
}

// Call loadProducts initially and on filters change
onMounted(() => loadProducts(1))

// Watch filters, reset page to 1 and reload products
watch(
  [
    searchQuery,
    searchSku,
    selectedManufacturer,
    selectedSupplier,
    selectedCertification,
    selectedPackagetype,
    selectedQuantitytype,
    selectedStatus,
    itemsPerPage,
    sortBy,
    orderBy,
  ],
  () => {
    loadProducts(1)
  }
)

function handleWindowScroll() {
  if (loadingMore.value) return
  if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
    // If not loaded all yet
    if (products.value.length < totalProducts.value) {
      loadProducts(page.value + 1)
    }
  }
}

// Add and remove scroll listener
onMounted(() => window.addEventListener('scroll', handleWindowScroll))
onUnmounted(() => window.removeEventListener('scroll', handleWindowScroll))

// if(error.value == 'Unauthorized') {
// // Remove "accessToken" from cookie
//   localStorage.removeItem('userData')
//   localStorage.removeItem('accessToken')
//   localStorage.removeItem('userAbilityRules')

//   // Reset ability to initial ability
//   ability.update([])

//   // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

//   // Redirect to login page
//   router.push({ name: 'admin-login' })

//   location.href = '/admin/login'
// }



const commonsyncCities = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const tagOptions = computed(() => commonsyncCities.tagOptions)
const groupOptions = computed(() => commonsyncCities.groupOptions)

const tags = tagOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const groups = groupOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const certifications = ref([])
const packagetypes = ref([])
const quantitytypes = ref([])
const manufacturers = ref([])
const suppliers = ref([])

const handleUpdatedSync = async () => {
  try {
    const commonsync = await $api('/admin/settings/commonsync/extra-options')

    certifications.value = commonsync.certificationOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))

    packagetypes.value = commonsync.packagetypeOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))

    quantitytypes.value = commonsync.quantitytypeOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))
  } catch (err) {
    console.error('Failed to fetch updated certifications, packagetypes, quantitytypes :', err)
  }
}

const handleUpdatedManufacturers = async () => {
  try {
    const manufacturersync = await $api('/admin/manufacturers/respond-with/extra-options')

    manufacturers.value = manufacturersync.manufacturerOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))
  } catch (err) {
    console.error('Failed to fetch updated manufacturers:', err)
  }
}

const handleUpdatedSuppliers = async () => {
  try {
    const suppliersync = await $api('/admin/suppliers/respond-with/extra-options')

    suppliers.value = suppliersync.supplierOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))
  } catch (err) {
    console.error('Failed to fetch updated suppliers:', err)
  }
}

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
  loadProducts(1)
}

const editProduct = async value => {
  const data = await $api(`/admin/products/${ value._id }`).catch(err => console.log(err))

  productDetail.value = data
  
  isProductDialogVisible.value = true
}

const deleteProduct = async id => {
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
        await $api(`/admin/products/${ id }`, { method: 'DELETE' })
        loadProducts(1)
      }
    })  
}

onMounted(async () => {
  await handleUpdatedSync()
  await handleUpdatedManufacturers()
  await handleUpdatedSuppliers()
})

const showColumnDialog = ref(false)
const allColumns = ref([...defaultColumns])

const visibleHeaders = computed(() =>
  allColumns.value
    .filter(col => col.visible)
    .map(col => ({
      key: col.key,
      title: t(col.title),
      sortable: col.sortable !== false, // default true
    }))
)

onMounted(() => {
  const saved = localStorage.getItem('products-columns')
  if (saved) {
    try {
      allColumns.value = JSON.parse(saved)
    } catch {
      allColumns.value = [...defaultColumns]
    }
  }
})

watch(
  allColumns,
  val => {
    localStorage.setItem('products-columns', JSON.stringify(val))
  },
  { deep: true }
)

const downloadProductsXLSX = async () => {
  try {
    const response = await $api(`/admin/products/export/xlsx`, {
      responseType: 'json', // get JSON array of products
    })

    const productsData = response.products

    if (!productsData || !productsData.length) {
      Swal.fire({
        icon: 'info',
        title: 'No Products',
        text: 'There are no products to export.',
      })
      return
    }

    const worksheet = utils.aoa_to_sheet([
      [
        'Name',
        'Slug',
        'InternalSKU',
        'ProductNumber',
        'ExternalSKU',
        'BoxSKU',
        'Model',
        'Quantity',
        'AmountInPackage',
        'PackagesInBox',
        'AmountOfBoxes',
        'Currency',
        'UnitPrice',
        'UnitPriceIncludingVAT',
        'BoxPrice',
        'PurchasePrice',
        'SalePrice',
        'MaxStock',
        'RemainingStock',

        'Manufacturer',
        'Supplier',
        'Certification',
        'PackageType',
        'QuantityType',

        'Categories',
        'Tags',
        'Groups',

        'Size',
        'Color',
        'SleeveLength',
        'Pocket',
        'Fit',
        'PickupOrder',
        'OrderNumber',

        'InternalRemarks',
        'CollectingOrder',
        'PrintingOrder',
        'Remarks',
        'Description',
        'Image',

        'Status'
      ]
    ]);

    const data = []

    productsData.forEach((p) => {
      data.push({
        Name: p.name,
        Slug: p.slug,
        InternalSKU: p.internalSKU || '',
        ProductNumber: p.productNumber || '',
        ExternalSKU: p.externalSKU || '',
        BoxSKU: p.boxSKU || '',
        Model: p.model || '',
        Quantity: p.quantity || 0,
        AmountInPackage: p.amount_in_package || 0,
        PackagesInBox: p.packages_in_box || 0,
        AmountOfBoxes: p.amount_of_boxes || 0,
        Currency: p.currency || '',
        UnitPrice: p.unit_price || 0,
        UnitPriceIncludingVAT: p.unit_price_including_vat || 0,
        BoxPrice: p.box_price || 0,
        PurchasePrice: p.purchasePrice || 0,
        SalePrice: p.salePrice || 0,
        MaxStock: p.maxStock || 0,
        RemainingStock: p.remainingStock || 0,

        Manufacturer: p.manufacturerID?.name || '',
        Supplier: p.supplierID?.name || '',
        Certification: p.certificationID?.name || '',
        PackageType: p.packagetypeID?.name || '',
        QuantityType: p.quantitytypeID?.name || '',

        Categories: p.categoryIDs?.map(c => c.name).join(', ') || '',
        Tags: p.tags?.map(t => t.title).join(', ') || '',
        Groups: p.groups?.map(g => g.title).join(', ') || '',

        Size: p.size || '',
        Color: p.color || '',
        SleeveLength: p.sleeveLength || '',
        Pocket: p.pocket || '',
        Fit: p.fit || '',
        PickupOrder: p.pickupOrder || '',
        OrderNumber: p.orderNumber || '',

        InternalRemarks: p.internalRemarks || '',
        CollectingOrder: p.collectingOrder || '',
        PrintingOrder: p.printingOrder || '',
        Remarks: p.remarks || '',
        Description: p.description || '',
        Image: p.image || '',

        Status: p.status || 'Active'
      })
    })

    // 2️⃣ Append JSON data
    utils.sheet_add_json(worksheet, data, { skipHeader: true, origin: -1 })

    // 3️⃣ Set column widths (adjust as needed)
    worksheet['!cols'] = new Array(32).fill({ wch: 20 }) // all columns width 20

    // 4️⃣ Create workbook and append sheet
    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, worksheet, 'Products')

    // 5️⃣ Save file
    writeFile(workbook, 'Products.xlsx', { compression: true })
  } catch (err) {
    console.error('Failed to download XLSX:', err)
    Swal.fire({
      icon: 'error',
      title: 'Export Failed',
      text: 'Could not download products XLSX.',
    })
  }
}

const fetchProducts = () => {
  loadProducts(1)
}

</script>

<template>
  <section class="no-pagination">
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Products') }}
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
            @click="isAddNewProductDialogVisible = true"
          >
            {{ $t('Create Product') }}
          </VBtn>

          <VBtn
            v-if="can('admin-view-products', 'View Products')"
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
        </div>
        <VIcon style="margin-left: auto" @click="showColumnDialog = true" class="tabler-settings" />
        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-products', 'View Products')"
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
                    :placeholder="$t('Search SKU')"
                  />
                </VCol>
                
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedManufacturer"
                    :items="manufacturers"
                    :placeholder="$t('Manufacturer')"
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
                    :placeholder="$t('Supplier')"
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
                    :placeholder="$t('Certification')"
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
                    :placeholder="$t('Package Type')"
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
                    :placeholder="$t('Quantity Type')"
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
                    :placeholder="$t('Status')"
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
          :headers="visibleHeaders"
          :items="products"
          item-value="id"
          class="text-no-wrap"
          :disable-pagination="true"
          @update:options="updateOptions"
        >
          <!-- name -->
          <template #[`item.name`]="{ item }">
            <RouterLink :to="{ name: 'admin-products-detail-id', params: { id: item._id } }">
              {{ item.name }}
            </RouterLink>
            <VIcon 
              style="margin-left:6px" 
              @click="editProduct(item)" class="tabler-pencil" 
            />
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

          <template #[`item.categoryIDs`]="{ item }">
            <ul class="cat_list" v-if="item.categoryIDs && item.categoryIDs.length">
              <li v-for="cat in item.categoryIDs">
                {{ cat.name }}
              </li>
            </ul>
          </template>

          <!-- boxSKU -->
          <template #[`item.boxSKU`]="{ item }">
            {{ item.boxSKU }}
          </template>

          <!-- manufacturerID -->
          <template #[`item.manufacturerID`]="{ item }">
            <RouterLink
              v-if="can('admin-view-manufacturers', 'View Manufacturers') && item.manufacturerID"
              :to="{ name: 'admin-manufacturers-detail-id', params: { id: item.manufacturerID._id } }"
            >
              {{ item.manufacturerID.name }}
            </RouterLink>
            <span v-else>{{ item.manufacturerID ? item.manufacturerID.name : '' }}</span>
          </template>

          <!-- supplierID -->
          <template #[`item.supplierID`]="{ item }">
            <RouterLink
              v-if="can('admin-view-suppliers', 'View Suppliers') && item.supplierID"
              :to="{ name: 'admin-suppliers-detail-id', params: { id: item.supplierID._id } }"
            >
              {{ item.supplierID.name }}
            </RouterLink>
            <span v-else>{{ item.supplierID ? item.supplierID.name : '' }}</span>
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
                    <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                  </VListItem>

                  <VListItem
                    v-if="can('admin-update-products', 'Update Products')"
                    @click="editProduct(item)"
                  >
                    <template #prepend>
                      <VIcon icon="tabler-pencil" />
                    </template>
                    <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                  </VListItem>

                  <VListItem
                    v-if="can('admin-delete-products', 'Delete Products')"
                    @click="deleteProduct(item._id)"
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
        </VDataTableServer>
        <!-- Loading spinner or text while loading more -->
    <!-- !SECTION -->
    </VCard>

    <AddNewProductDialog
      v-if="isAddNewProductDialogVisible"
      v-model:is-dialog-visible="isAddNewProductDialogVisible"
      v-model:manufacturers="manufacturers"
      v-model:suppliers="suppliers"
      v-model:tags="tags"
      v-model:groups="groups"
      v-model:certifications="certifications"
      v-model:packagetypes="packagetypes"
      v-model:quantitytypes="quantitytypes"
      @quantitytypes="handleUpdatedSync"
      @packagetypes="handleUpdatedSync"
      @certifications="handleUpdatedSync"
      @manufacturers="handleUpdatedManufacturers"
      @suppliers="handleUpdatedSuppliers"
      @user-data="modifyProduct"
    />

    <AddNewProductDialog
      v-if="isProductDialogVisible"
      v-model:is-dialog-visible="isProductDialogVisible"
      v-model:product="productDetail"
      v-model:manufacturers="manufacturers"
      v-model:suppliers="suppliers"
      v-model:tags="tags"
      v-model:groups="groups"
      v-model:certifications="certifications"
      v-model:packagetypes="packagetypes"
      v-model:quantitytypes="quantitytypes"
      @quantitytypes="handleUpdatedSync"
      @packagetypes="handleUpdatedSync"
      @certifications="handleUpdatedSync"
      @manufacturers="handleUpdatedManufacturers"
      @suppliers="handleUpdatedSuppliers"
      @user-data="modifyProduct"
    />
  </section>

  <VDialog class="reorderDialog" v-model="showColumnDialog" max-width="500">
    <VCard>
      <VCardTitle class="text-h6">
        {{ $t('Manage Columns') }}
      </VCardTitle>

      <VCardText>
        <!-- Only render draggable when dialog is active -->
         <Draggable
          v-model="allColumns"
          item-key="key"
          tag="div"
          @end="onSortEnd"
        >
          <template #item="{ element }">
            <div class="d-flex align-center mb-2">
              <VIcon icon="tabler-arrows-down-up" class="mr-2" />
              <VCheckbox
                v-model="element.visible"
                :label="$t(element.title)"
                hide-details
                density="compact"
              />
            </div>
          </template>
        </Draggable>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn variant="text" @click="showColumnDialog = false">{{ $t('Close') }}</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <AddNewImportProductDrawer
    v-model="isImportProductDrawerVisible"
    v-model:is-drawer-open="isImportProductDrawerVisible"
    @update-data="fetchProducts"
  />
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
