<script setup>
definePage({
  meta: {
    action: ['admin-view-products'],
    subject: ['View Products'],
    navActiveLink: 'admin-products',
    title: 'Product Details',
  },
})

import AddNewProductDialog from '@/views/admin/products/AddNewProductDialog.vue'
import CategoryBuilderProductDetailNode from '@/views/admin/settings/CategoryBuilderProductDetailNode.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const ability = useAbility()

const isProductDialogVisible = ref(false)

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

const route = useRoute('admin-products-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: productDetail, execute: fetchProducts, error,
} = await useApi(createUrl(`/admin/products/${ route.params.id }`))

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

const productData = computed(() => productDetail.value)

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
    console.error('Failed to fetch updated certifications, packagetypes, quantitytypes:', err)
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

const reloadTab = ref(true)

const {
  data: categoryBuilderData,
  execute: fetchCategoryBuilders,
} = await useApi(createUrl('/admin/settings/categories'))

const categories = computed(() => categoryBuilderData.value.categories)

const tree = ref([])

const checkedCategories = ref([])

const getNodeId = node => node.realId || node._id

const getAllDescendants = node => {
  let ids = [getNodeId(node)]
  if (node.children && node.children.length) {
    for (const child of node.children) {
      ids = ids.concat(getAllDescendants(child))
    }
  }
  
  return ids
}

const findNodeById = (tree, id) => {
  for (const node of tree) {
    if (getNodeId(node) === id) return node
    if (node.children) {
      const found = findNodeById(node.children, id)
      if (found) return found
    }
  }
  
  return null
}

const buildTree = categories => {
  const categoryMap = {}

  // 1. Initialize all categories with empty children array
  categories.forEach(cat => {
    categoryMap[cat._id.toString()] = { ...cat, children: [] }
  })

  const roots = []

  // 2. Build the tree by assigning children to their parents
  categories.forEach(cat => {
    if (cat.parentId) {
      const parentId = cat.parentId.toString()
      if (categoryMap[parentId]) {
        categoryMap[parentId].children.push(categoryMap[cat._id.toString()])
      } else {
        // If parent not found, consider as root or handle error
        roots.push(categoryMap[cat._id.toString()])
      }
    } else {
      // No parentId means root node
      roots.push(categoryMap[cat._id.toString()])
    }
  })

  // 3. Optionally sort children by a property, e.g. 'sortOrder'
  const sortChildren = nodes => {
    nodes.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    nodes.forEach(node => {
      if (node.children?.length) {
        sortChildren(node.children)
      }
    })
  }

  sortChildren(roots)

  return roots
}

tree.value = buildTree(categories.value)

// Check if all descendants of node are selected
const areAllDescendantsSelected = node => {
  const descendants = getAllDescendants(node)
  
  return descendants.every(id => checkedCategories.value.includes(id))
}

// Check if some (but not all) descendants of node are selected
const isIndeterminate = node => {
  const descendants = getAllDescendants(node)
  const selectedCount = descendants.filter(id => checkedCategories.value.includes(id)).length

  return selectedCount > 0 && selectedCount < descendants.length
}

const modifyProduct = async userData => {
  // refetch Organization
  fetchProducts()
  fetchCategoryBuilders()
  tree.value = buildTree(categories.value)
}

const deleteProduct = async () => {
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
        await $api(`/admin/products/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-products' })
      }
    })
}

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}

onMounted( async () => {
  if(route.query.detailstab) {
    userTab.value = route.query.detailstab
  }
  await handleUpdatedSync()
  await handleUpdatedManufacturers()
  await handleUpdatedSuppliers()
})

watch(productData, newVal => {
  checkedCategories.value = newVal?.categoryIDs || []
})

const isShowImageDialog = ref(false)
const showImageDialog = () => {
  isShowImageDialog.value = true
}

</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="productData"
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
            :items="[{ title: $t('Products'), to: { name: 'admin-products' }, class: 'text-primary' }, { title: productData.name }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Product ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(productData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(productData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          @click="isProductDialogVisible = !isProductDialogVisible"
        >
          {{ $t('Edit Product') }}
        </VBtn>
        <VBtn
          v-if="can('admin-delete-products', 'Delete Products')"
          variant="tonal"
          color="error"
          @click="deleteProduct"
        >
          {{ $t('Delete Product') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Customer Profile  -->
    <VRow v-if="reloadTab">
      <VCol
        cols="12"
        md="12"
        lg="12"
      >
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-eye"
            />
            {{ $t('Details') }}
          </VTab>
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="productData">
              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  {{ $t('Details') }}
                </h5>

                <VDivider class="my-4" />
                <VRow>
                  <VCol md="6">
                    <VList class="card-list mt-2">
                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Name') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.name }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Product number') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.productNumber }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Model') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.model }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Selling Price') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.salePrice }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Quantity') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.quantity }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Amount in package') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.amount_in_package }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Packages in box') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.packages_in_box }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Amount of boxes') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.amount_of_boxes }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Currency') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.currency }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Unit price') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.unit_price }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Unit price including VAT') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.unit_price_including_vat }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Box price') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.box_price }}
                          </span>
                        </h6>
                      </VListItem>

                      

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Slug') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.slug }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Internal SKU') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.internalSKU }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('External SKU') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.externalSKU }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Box SKU') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.boxSKU }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Manufacturer') }}:
                          <span class="text-body-1 d-inline-block">
                            <RouterLink
                              v-if="can('admin-view-manufacturers', 'View Manufacturers') && productData.manufacturerID"
                              :to="{ name: 'admin-manufacturers-detail-id', params: { id: productData.manufacturerID._id } }"
                            >
                              {{ productData.manufacturerID.name }}
                            </RouterLink>
                            <span v-else>{{ productData.manufacturerID ? productData.manufacturerID.name : '' }}</span>
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Supplier') }}:
                          <span class="text-body-1 d-inline-block">
                            <RouterLink
                              v-if="can('admin-view-suppliers', 'View Suppliers') && productData.supplierID"
                              :to="{ name: 'admin-suppliers-detail-id', params: { id: productData.supplierID._id } }"
                            >
                              {{ productData.supplierID.name }}
                            </RouterLink>
                            <span v-else>{{ productData.supplierID ? productData.supplierID.name : '' }}</span>
                          </span>
                        </h6>
                      </VListItem>

                      

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Package Type') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.packagetypeID ? productData.packagetypeID.name : '' }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Quantity Type') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.quantitytypeID ? productData.quantitytypeID.name : '' }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Tags') }}:
                          <span class="text-body-1 d-inline-block">
                            <VChip
                              v-for="(tag, index) in productData.tags"
                              :key="index"
                              label
                              color="primary"
                              size="small"
                              class="roles"
                            >
                              {{ tag.name }}
                            </VChip>
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Groups') }}:
                          <span class="text-body-1 d-inline-block">
                            <VChip
                              v-for="(group, index) in productData.groups"
                              :key="index"
                              label
                              color="success"
                              size="small"
                              class="roles"
                            >
                              {{ group.name }}
                            </VChip>
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Pickup Order') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.pickupOrder }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Product Order Number in Invoice') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.orderNumber }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Purchase Price') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.purchasePrice }}
                          </span>
                        </h6>
                      </VListItem>

                      

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Max Stock') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.maxStock }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Remaining Stock') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.remainingStock }}
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
                            :color="resolveStatusVariantAndIcon(productData.status).variant"
                            size="small"
                          >
                            {{ resolveStatusVariantAndIcon(productData.status).title }}
                          </VChip>
                        </div>
                      </VListItem>

                      <VListItem>
                        <div class="mb-2">
                          <h6 class="text-h6 mb-1">
                            {{ $t('Category') }}:
                          </h6>
                          <div class="ps-2">
                            <CategoryBuilderProductDetailNode
                              v-for="node in tree"
                              :key="node.realId || node._id"
                              :node="node"
                              :selected="productData.categoryIDs"
                              :indeterminate="isIndeterminate(node)"
                            />
                          </div>
                        </div>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Description') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.description" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Size') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.size" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Color') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.color" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Sleeve length') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.sleeveLength" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Pocket') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.pocket" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Fit') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.fit" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Certification') }}:
                          <span class="text-body-1 d-inline-block">
                            {{ productData.certificationID ? productData.certificationID.name : '' }}
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem v-if="productData.customFields && productData.customFields.length > 0">
                        <h4 class="">
                          {{ $t('Custom Fields') }}
                        </h4>
                          <h6 style="padding-top: 20px" class="text-h6" v-for="(field, index) in productData.customFields" :key="index">
                            {{ field.title }}: {{ field.value }}
                          </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Internal Remarks') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.internalRemarks" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Remarks') }}:
                          <span class="text-body-1 d-inline-block">
                            <div v-html="productData?.remarks" />
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Created By') }}:
                          <span class="text-body-1 d-inline-block">
                            <RouterLink
                              v-if="can('admin-view-admins', 'View Admins') && productData.createdBy"
                              :to="{ name: 'admin-admins-detail-id', params: { id: productData.createdBy._id } }"
                            >
                              {{ productData.createdBy.name }}
                            </RouterLink>
                            <span v-else>{{ productData.createdBy ? productData.createdBy.name : '' }}</span>
                          </span>
                        </h6>
                      </VListItem>

                      <VListItem>
                        <h6 class="text-h6">
                          {{ $t('Updated By') }}:
                          <span class="text-body-1 d-inline-block">
                            <RouterLink
                              v-if="can('admin-view-admins', 'View Admins') && productData.updatedBy"
                              :to="{ name: 'admin-admins-detail-id', params: { id: productData.updatedBy._id } }"
                            >
                              {{ productData.updatedBy.name }}
                            </RouterLink>
                            <span v-else>{{ productData.updatedBy ? productData.updatedBy.name : '' }}</span>
                          </span>
                        </h6>
                      </VListItem>
                    </VList>
                  </VCol>
                  <VCol md="6">
                    <div v-if="productData?.image">
                      <h3 style="margin:0 0 10px">{{ $t('Image') }}</h3>
                      <VImg
                        :src="productData.image"
                        alt="Product Image"
                        width="120"
                        height="120"
                        @click="showImageDialog"
                        style="cursor: pointer;"
                      />
                    </div>
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>
          </VWindowItem>
        </VWindow>
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

    <AddNewProductDialog
      v-if="isProductDialogVisible"
      v-model:is-dialog-visible="isProductDialogVisible"
      v-model:product="productData"
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
  </div>

  <VDialog class="reorderDialog" v-model="isShowImageDialog">
    <DialogCloseBtn @click="isShowImageDialog = false" />
    <VCard>
      <VCardText>
        <div v-if="productData?.image">
          <VImg
            :src="productData.image"
          />
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
  .roles {
    margin-inline-end: 5px;
  }
</style>
