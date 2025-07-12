<script setup>
import AddNewManufacturerDialog from '@/views/admin/manufacturers/AddNewManufacturerDialog.vue'
import AddNewCertificationDialog from '@/views/admin/settings/AddNewCertificationDialog.vue'
import AddNewPackagetypeDialog from '@/views/admin/settings/AddNewPackagetypeDialog.vue'
import AddNewQuantitytypeDialog from '@/views/admin/settings/AddNewQuantitytypeDialog.vue'
import CategoryBuilderProductNode from '@/views/admin/settings/CategoryBuilderProductNode.vue'
import AddNewSupplierDialog from '@/views/admin/suppliers/AddNewSupplierDialog.vue'
import { can } from '@layouts/plugins/casl'
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  manufacturers: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  suppliers: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  certifications: {
    type: Object,
    required: true,
  },
  packagetypes: {
    type: Object,
    required: true,
  },
  quantitytypes: {
    type: Object,
    required: true,
  },
  product: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      slug: '',
      internalSKU: '',
      externalSKU: '',
      boxSKU: '',
      manufacturerID: '',
      supplierID: '',
      certificationID: '',
      packagetypeID: '',
      quantitytypeID: '',
      purchasePrice: '',
      salePrice: null,
      maxStock: null,
      internalRemarks: '',
      remarks: '',
      description: '',
      status: 'Active',
      categoryIDs: [],
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'manufacturers',
  'suppliers',
  'certifications',
  'packagetypes',
  'quantitytypes',
  'userData',
  'product',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const isAddNewPackagetypeDrawerVisible = ref(false)
const isAddNewQuantitytypeDrawerVisible = ref(false)
const isAddNewCertificationDrawerVisible = ref(false)
const isAddNewManufacturerDrawerVisible = ref(false)
const isAddNewSupplierDrawerVisible = ref(false)
const productData = ref(structuredClone(toRaw(props.product)))

const useSelectableList = (propRef, permissionKey, addNewTitle) => {
  const updated = ref([])

  watch(
    () => propRef.value,
    newVal => {
      const cloned = structuredClone(toRaw(newVal))

      if (can(permissionKey, `Create ${permissionKey.split('-')[1]}`)) {
        cloned.unshift({
          value: '__add_new__',
          title: `➕ Create New ${addNewTitle}`,
        })
      }

      updated.value = cloned
    },
    { immediate: true, deep: true },
  )

  return updated
}

const manufacturersUpdated = useSelectableList(toRef(props, 'manufacturers'), 'admin-create-manufacturers', 'Manufacturers')
const suppliersUpdated = useSelectableList(toRef(props, 'suppliers'), 'admin-create-suppliers', 'Suppliers')
const certificationsUpdated = useSelectableList(toRef(props, 'certifications'), 'admin-create-certifications', 'Certifications')
const packagetypesUpdated = useSelectableList(toRef(props, 'packagetypes'), 'admin-create-packagetypes', 'Package Types')
const quantitytypesUpdated = useSelectableList(toRef(props, 'quantitytypes'), 'admin-create-quantitytypes', 'Quantity Types')

const onManufacturerChange = async value => {
  if (value === '__add_new__') {
    productData.value.manufacturerID = null
    isAddNewManufacturerDrawerVisible.value = true
  }
}

const modifyManufacturerDialog = async updateData => {
  emit('manufacturers')
}

const onSupplierChange = async value => {
  if (value === '__add_new__') {
    productData.value.supplierID = null
    isAddNewSupplierDrawerVisible.value = true
  }
}

const modifySupplierDialog = async updateData => {
  emit('suppliers')
}

const onCertificationChange = async value => {
  if (value === '__add_new__') {
    productData.value.certificationID = null
    isAddNewCertificationDrawerVisible.value = true
  }
}

const modifyCertificationDialog = async updateData => {
  emit('certifications')
}

const onPackagetypeChange = async value => {
  if (value === '__add_new__') {
    productData.value.packagetypeID = null
    isAddNewPackagetypeDrawerVisible.value = true
  }
}

const modifyPackagetypeDialog = async updateData => {
  emit('packagetypes')
}

const onQuantitytypeChange = async value => {
  if (value === '__add_new__') {
    productData.value.quantitytypeID = null
    isAddNewQuantitytypeDrawerVisible.value = true
  }
}

const modifyQuantitytypeDialog = async updateData => {
  emit('quantitytypes')
}

if(props.product.manufacturerID) {
  productData.value.manufacturerID = props.product.manufacturerID._id
}

if(props.product.supplierID) {
  productData.value.supplierID = props.product.supplierID._id
}

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const countryOptions = computed(() => commonsync.countryOptions)
const cityOptions = computed(() => commonsync.cityOptions)

const countries = countryOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: item.nameHe,
}))

const submit = async () => {
  try {
    if(props.product._id) {
      const res = await $api(`/admin/products/${ props.product._id }`, {
        method: 'PATCH',
        body: {
          name: productData.value.name,
          slug: productData.value.slug,
          internalSKU: productData.value.internalSKU,
          externalSKU: productData.value.externalSKU,
          boxSKU: productData.value.boxSKU,
          manufacturerID: productData.value.manufacturerID ? productData.value.manufacturerID : null,
          supplierID: productData.value.supplierID ? productData.value.supplierID : null,
          certificationID: productData.value.certificationID ? productData.value.certificationID : null,
          packagetypeID: productData.value.packagetypeID ? productData.value.packagetypeID : null,
          quantitytypeID: productData.value.quantitytypeID ? productData.value.quantitytypeID : null,
          internalRemarks: productData.value.internalRemarks,
          remarks: productData.value.remarks,
          description: productData.value.description,
          purchasePrice: productData.value.purchasePrice ?? 0,
          salePrice: productData.value.salePrice ?? 0,
          maxStock: productData.value.maxStock ?? 0,
          status: productData.value.status,
          categoryIDs: checkedCategories.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/products`, {
        method: 'POST',
        body: {
          name: productData.value.name,
          slug: productData.value.slug,
          internalSKU: productData.value.internalSKU,
          externalSKU: productData.value.externalSKU,
          boxSKU: productData.value.boxSKU,
          manufacturerID: productData.value.manufacturerID ? productData.value.manufacturerID : null,
          supplierID: productData.value.supplierID ? productData.value.supplierID : null,
          certificationID: productData.value.certificationID ? productData.value.certificationID : null,
          packagetypeID: productData.value.packagetypeID ? productData.value.packagetypeID : null,
          quantitytypeID: productData.value.quantitytypeID ? productData.value.quantitytypeID : null,
          internalRemarks: productData.value.internalRemarks,
          remarks: productData.value.remarks,
          description: productData.value.description,
          purchasePrice: productData.value.purchasePrice ?? 0,
          salePrice: productData.value.salePrice ?? 0,
          maxStock: productData.value.maxStock ?? 0,
          status: productData.value.status,
          categoryIDs: checkedCategories.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('userData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.product._id) {
        toast.success("Successfully updated")
      } else {
        toast.success("Successfully saved")
      }
      
    })
  } catch (err) {
    console.log(err)
  }
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

const onReset = () => {
  emit('update:isDialogVisible', false)
  refForm.value?.reset()
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const errors = ref({
  name: undefined,
  slug: undefined,
  internalSKU: undefined,
  externalSKU: undefined,
  boxSKU: undefined,
  manufacturerID: undefined,
  supplierID: undefined,
  certificationID: undefined,
  packagetypeID: undefined,
  quantitytypeID: undefined,
  internalRemarks: undefined,
  remarks: undefined,
  description: undefined,
  purchasePrice: undefined,
  salePrice: undefined,
  maxStock: undefined,
  status: undefined,
})

watch(() => productData.value.name, val => {
  productData.value.slug = val.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
})

const {
  data: categoryBuilderData,
  execute: fetchCategoryBuilders,
} = await useApi(createUrl('/admin/settings/categories'))

const categories = computed(() => categoryBuilderData.value.categories)

const tree = ref([])

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

const checkedCategories = ref(props.product.categoryIDs)
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

const onToggleSelect = ({ id, checked }) => {
  const node = findNodeById(tree.value, id)
  if (!node) {
    console.warn('Node not found for id:', id)
    
    return
  }

  const descendants = getAllDescendants(node)

  if (checked) {
    checkedCategories.value = Array.from(new Set([
      ...checkedCategories.value,
      ...descendants,
    ]))
  } else {
    checkedCategories.value = checkedCategories.value.filter(
      catId => !descendants.includes(catId),
    )
  }
}


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
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />

    <VCard class="pa-sm-10 pa-2">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          {{ props.product._id ? $t('Edit Product') : $t('Create Product') }}
        </h4>

        <VDivider />

        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Name -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.name"
                :rules="[requiredValidator]"
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 Slug -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.slug"
                :rules="[requiredValidator]"
                :label="$t('Slug')"
                :placeholder="$t('Slug')"
                :error-messages="errors.slug"
              />
            </VCol>

            <!-- 👉 Internal SKU -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.internalSKU"
                :label="$t('Internal SKU')"
                :placeholder="$t('Internal SKU')"
                :error-messages="errors.internalSKU"
              />
            </VCol>

            <!-- 👉 External SKU -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.externalSKU"
                :label="$t('External SKU')"
                :placeholder="$t('External SKU')"
                :error-messages="errors.externalSKU"
              />
            </VCol>

            <!-- 👉 Box SKU -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.boxSKU"
                :label="$t('Box SKU')"
                :placeholder="$t('Box SKU')"
                :error-messages="errors.boxSKU"
              />
            </VCol>

            <!-- 👉 Manufacturer -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.manufacturerID"
                :items="manufacturersUpdated"
                :label="$t('Manufacturer')"
                :placeholder="$t('Select Manufacturer')"
                :error-messages="errors.manufacturerID"
                clearable
                @update:model-value="onManufacturerChange"
              />
            </VCol>

            <!-- 👉 Supplier -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.supplierID"
                :items="suppliersUpdated"
                :label="$t('Supplier')"
                :placeholder="$t('Select Supplier')"
                :error-messages="errors.supplierID"
                clearable
                @update:model-value="onSupplierChange"
              />
            </VCol>

            <!-- 👉 Certification -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.certificationID"
                :items="certificationsUpdated"
                :label="$t('Certification')"
                :placeholder="$t('Select Certification')"
                :error-messages="errors.certificationID"
                clearable
                @update:model-value="onCertificationChange"
              />
            </VCol>

            <!-- 👉 Package Type -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.packagetypeID"
                :rules="[requiredValidator]"
                :items="packagetypesUpdated"
                :label="$t('Package Type')"
                :placeholder="$t('Select Package Type')"
                :error-messages="errors.packagetypeID"
                clearable
                @update:model-value="onPackagetypeChange"
              />
            </VCol>

            <!-- 👉 Quantity Type -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.quantitytypeID"
                :rules="[requiredValidator]"
                :items="quantitytypesUpdated"
                :label="$t('Quantity Type')"
                :placeholder="$t('Select Quantity Type')"
                :error-messages="errors.quantitytypeID"
                clearable
                @update:model-value="onQuantitytypeChange"
              />
            </VCol>

            <!-- 👉 Purchase Price -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.purchasePrice"
                :rules="[numericValidator]"
                :label="$t('Purchase Price')"
                :placeholder="$t('Purchase Price')"
                :error-messages="errors.purchasePrice"
              />
            </VCol>

            <!-- 👉 Sale Price -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.salePrice"
                :rules="[numericValidator]"
                :label="$t('Sale Price')"
                :placeholder="$t('Sale Price')"
                :error-messages="errors.salePrice"
              />
            </VCol>

            <!-- 👉 Max Stock -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.maxStock"
                :rules="[integerValidator]"
                :label="$t('Max Stock')"
                :placeholder="$t('Max Stock')"
                :error-messages="errors.maxStock"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.status"
                :rules="[requiredValidator]"
                :items="[
                  { value: 'Active', title: 'Active' },
                  { value: 'Inactive', title: 'Inactive' },
                ]"
                :placeholder="$t('Select Status')"
                :label="$t('Status')"
                :error-messages="errors.status"
              />
            </VCol>

            <!-- 👉 Description -->
            <VCol cols="12">
              <AppTextarea
                v-model="productData.description"
                :label="$t('Description')"
                :placeholder="$t('Description')"
                :error-messages="errors.description"
              />
            </VCol>

            <!-- 👉 Internal Remarks -->
            <VCol cols="12">
              <AppTextarea
                v-model="productData.internalRemarks"
                :label="$t('Internal Remarks')"
                :placeholder="$t('Internal Remarks')"
                :error-messages="errors.internalRemarks"
              />
            </VCol>

            <!-- 👉 Remarks -->
            <VCol cols="12">
              <AppTextarea
                v-model="productData.remarks"
                :label="$t('Remarks')"
                :placeholder="$t('Remarks')"
                :error-messages="errors.remarks"
              />
            </VCol>
            <VCol cols="12">
              <div>
                <h6 class="text-h6 mb-2">
                  {{ $t('Category') }}
                </h6>
                <CategoryBuilderProductNode
                  v-for="node in tree"
                  :key="node.realId"
                  :node="node"
                  :selected="checkedCategories"
                  :indeterminate="isIndeterminate(node)"
                  @toggle-select="onToggleSelect"
                />
              </div>
            </VCol>
              
            <!-- 👉 Submit and Cancel -->
            <VCol cols="12">
              <VBtn
                type="submit"
                class="me-3"
              >
                {{ $t('Submit') }}
              </VBtn>
              <VBtn
                type="reset"
                variant="tonal"
                color="error"
                @click="closeNavigationDrawer"
              >
                {{ $t('Cancel') }}
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>

  <AddNewPackagetypeDialog
    v-if="isAddNewPackagetypeDrawerVisible"
    v-model:is-dialog-visible="isAddNewPackagetypeDrawerVisible"
    @update-data="modifyPackagetypeDialog"
  />

  <AddNewQuantitytypeDialog
    v-if="isAddNewQuantitytypeDrawerVisible"
    v-model:is-dialog-visible="isAddNewQuantitytypeDrawerVisible"
    @update-data="modifyQuantitytypeDialog"
  />

  <AddNewCertificationDialog
    v-if="isAddNewCertificationDrawerVisible"
    v-model:is-dialog-visible="isAddNewCertificationDrawerVisible"
    @update-data="modifyCertificationDialog"
  />

  <AddNewManufacturerDialog
    v-if="isAddNewManufacturerDrawerVisible"
    v-model:is-dialog-visible="isAddNewManufacturerDrawerVisible"
    v-model:countries="countries"
    v-model:cities="cities"
    @update-data="modifyManufacturerDialog"
  />

  <AddNewSupplierDialog
    v-if="isAddNewSupplierDrawerVisible"
    v-model:is-dialog-visible="isAddNewSupplierDrawerVisible"
    v-model:countries="countries"
    v-model:cities="cities"
    @update-data="modifySupplierDialog"
  />
</template>
