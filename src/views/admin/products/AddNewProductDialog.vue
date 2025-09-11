<script setup>
import AddNewManufacturerDialog from '@/views/admin/manufacturers/AddNewManufacturerDialog.vue'
import AddNewCertificationDialog from '@/views/admin/settings/AddNewCertificationDialog.vue'
import AddNewPackagetypeDialog from '@/views/admin/settings/AddNewPackagetypeDialog.vue'
import AddNewQuantitytypeDialog from '@/views/admin/settings/AddNewQuantitytypeDialog.vue'
import CategoryTreeNode from '@/views/admin/settings/CategoryTreeNode.vue'
import AddNewSupplierDialog from '@/views/admin/suppliers/AddNewSupplierDialog.vue'
import CategoryBuilderProductDetailNodeList from '@/views/admin/settings/CategoryBuilderProductDetailNodeList.vue'
import { can } from '@layouts/plugins/casl'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '@/stores'
import axios from 'axios'


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
  tags: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  groups: {
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
      quantity: '',
      amount_in_package: '',
      packages_in_box: '',
      amount_of_boxes: '',
      currency: 'nis',
      unit_price: '',
      unit_price_including_vat: '',
      box_price: '',
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
      productNumber: '',
      remarks: '',
      description: '',
      status: 'Active',
      categoryIDs: [],
      tags: [],
      groups: [],
      size: '',
      color: '',
      sleeveLength: '',
      pocket: '',
      fit: '',
      collectingOrder: '',
      printingOrder: '',
      customFields: []
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'manufacturers',
  'suppliers',
  'tags',
  'groups',
  'certifications',
  'packagetypes',
  'quantitytypes',
  'userData',
  'product',
])

const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const isAddNewPackagetypeDialogVisible = ref(false)
const isAddNewQuantitytypeDialogVisible = ref(false)
const isAddNewCertificationDialogVisible = ref(false)
const isAddNewManufacturerDialogVisible = ref(false)
const isAddNewSupplierDialogVisible = ref(false)
const productData = ref(structuredClone(toRaw(props.product)))
const image = ref()
const imageUrl = ref()
const productId = ref()

if(props.product.tags.length > 0) {
  productData.value.tags = props.product.tags.map(tag => tag._id)
}

if(props.product.groups.length > 0) {
  productData.value.groups = props.product.groups.map(group => group._id)
}

if(props.product.customFields.length > 0) {
  productData.value.customFields = props.product.customFields
}
//console.log(props.product.customFields)

const useSelectableList = (propRef, permissionKey, addNewTitle) => {
  const updated = ref([])

  watch(
    () => propRef.value,
    newVal => {
      const cloned = structuredClone(toRaw(newVal))
      
      if (can(permissionKey, `Create ${addNewTitle}`)) {
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
    isAddNewManufacturerDialogVisible.value = true
  }
}

const modifyManufacturerDialog = async updateData => {
  emit('manufacturers')
}

const onSupplierChange = async value => {
  if (value === '__add_new__') {
    productData.value.supplierID = null
    isAddNewSupplierDialogVisible.value = true
  }
}

const modifySupplierDialog = async updateData => {
  emit('suppliers')
}

const onCertificationChange = async value => {
  if (value === '__add_new__') {
    productData.value.certificationID = null
    isAddNewCertificationDialogVisible.value = true
  }
}

const modifyCertificationDialog = async updateData => {
  emit('certifications')
}

const onPackagetypeChange = async value => {
  if (value === '__add_new__') {
    productData.value.packagetypeID = null
    isAddNewPackagetypeDialogVisible.value = true
  }
}

const modifyPackagetypeDialog = async updateData => {
  emit('packagetypes')
}

const onQuantitytypeChange = async value => {
  if (value === '__add_new__') {
    productData.value.quantitytypeID = null
    isAddNewQuantitytypeDialogVisible.value = true
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
    if(image.value) {
      // const formDataImage = new FormData()
      
      // formDataImage.append('file', image.value)
      // formDataImage.append('upload_preset', import.meta.env.VITE_IMAGE_PRESET)

      // try {
      //   const response = await fetch(import.meta.env.VITE_CLOUDINARY_ENDPOINT, {
      //     method: 'POST',
      //     body: formDataImage,
      //   })

      //   const data = await response.json()

      //   imageUrl.value = data.secure_url

      // Cloudinar
      const formDataImage = new FormData()
      const signatureRes = await $api('/signature')
      const { signature, timestamp, apiKey, cloudName } = signatureRes;

      // Prepare form data for Cloudinary

      formDataImage.append('file', image.value)
      formDataImage.append('api_key', apiKey)
      formDataImage.append('timestamp', timestamp)
      formDataImage.append('signature', signature)

      // Upload to Cloudinary
      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: formDataImage,
      })

      const data = await uploadRes.json()

      imageUrl.value = data.secure_url
      
    }else if(productData.value.image){
      imageUrl.value = productData.value.image
    }

    

    if(props.product._id) {
      productId.value = props.product._id

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
          tags: productData.value.tags,
          groups: productData.value.groups,
          internalRemarks: productData.value.internalRemarks,
          remarks: productData.value.remarks,
          description: productData.value.description,
          pickupOrder: productData.value.pickupOrder,
          orderNumber: productData.value.orderNumber,
          purchasePrice: productData.value.purchasePrice ?? 0,
          salePrice: productData.value.salePrice ?? 0,
          maxStock: productData.value.maxStock ?? 0,
          status: productData.value.status,
          quantity: productData.value.quantity,
          categoryIDs: checkedCategories.value,
          amount_in_package: productData.value.amount_in_package,
          packages_in_box: productData.value.packages_in_box,
          amount_of_boxes: productData.value.amount_of_boxes,
          currency: productData.value.currency,
          unit_price: productData.value.unit_price,
          unit_price_including_vat: productData.value.unit_price_including_vat,
          box_price: productData.value.box_price,
          model: productData.value.model,
          productNumber: productData.value.productNumber,
          size: productData.value.size,
          color: productData.value.color,
          customFields: productData.value.customFields,
          sleeveLength: productData.value.sleeveLength,
          pocket: productData.value.pocket,
          fit: productData.value.fit,
          collectingOrder: productData.value.collectingOrder,
          printingOrder: productData.value.printingOrder,
          imageUrl: imageUrl.value,
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
          tags: productData.value.tags,
          groups: productData.value.groups,
          internalRemarks: productData.value.internalRemarks,
          remarks: productData.value.remarks,
          description: productData.value.description,
          pickupOrder: productData.value.pickupOrder,
          orderNumber: productData.value.orderNumber,
          purchasePrice: productData.value.purchasePrice ?? 0,
          salePrice: productData.value.salePrice ?? 0,
          maxStock: productData.value.maxStock ?? 0,
          status: productData.value.status,
          categoryIDs: checkedCategories.value,
          quantity: productData.value.quantity,
          amount_in_package: productData.value.amount_in_package,
          packages_in_box: productData.value.packages_in_box,
          amount_of_boxes: productData.value.amount_of_boxes,
          currency: productData.value.currency,
          unit_price: productData.value.unit_price,
          unit_price_including_vat: productData.value.unit_price_including_vat,
          box_price: productData.value.box_price,
          model: productData.value.model,
          productNumber: productData.value.productNumber,
          
          size: productData.value.size,
          color: productData.value.color,
          customFields: productData.value.customFields,
          sleeveLength: productData.value.sleeveLength,
          pocket: productData.value.pocket,
          fit: productData.value.fit,
          collectingOrder: productData.value.collectingOrder,
          printingOrder: productData.value.printingOrder,
          imageUrl: imageUrl.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })

      if(res){
        //console.log(res.data)
        productId.value = res.data._id
      }
    }

    await nextTick(() => {

      if(imageUrl.value){
        //updateProduct()
      }
      emit('userData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.product._id) {
        toast.success("הפריט עודכן בהצלחה")
      } else {
        toast.success("הפריט נשמר בהצלחה")
      }
      
    })
    
  } catch (err) {
    console.log(err)
  }
}

// update after image added
const updateProduct = async () => {
  const res = await $api(`/admin/products/${ productId.value }`, {
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
      tags: productData.value.tags,
      groups: productData.value.groups,
      internalRemarks: productData.value.internalRemarks,
      remarks: productData.value.remarks,
      description: productData.value.description,
      pickupOrder: productData.value.pickupOrder,
      orderNumber: productData.value.orderNumber,
      purchasePrice: productData.value.purchasePrice ?? 0,
      salePrice: productData.value.salePrice ?? 0,
      maxStock: productData.value.maxStock ?? 0,
      status: productData.value.status,
      quantity: productData.value.quantity,
      amount_in_package: productData.value.amount_in_package,
      packages_in_box: productData.value.packages_in_box,
      amount_of_boxes: productData.value.amount_of_boxes,
      currency: productData.value.currency,
      unit_price: productData.value.unit_price,
      unit_price_including_vat: productData.value.unit_price_including_vat,
      box_price: productData.value.box_price,
      model: productData.value.model,
      productNumber: productData.value.productNumber,
      size: productData.value.size,
      color: productData.value.color,
      customFields: productData.value.customFields,
      sleeveLength: productData.value.sleeveLength,
      pocket: productData.value.pocket,
      fit: productData.value.fit,
      collectingOrder: productData.value.collectingOrder,
      printingOrder: productData.value.printingOrder,
      imageUrl: imageUrl.value,
    },
    onResponseError({ response }) {
      errors.value = response._data.errors
    },
  })

  await nextTick(() => {
    emit('userData')
    emit('update:isDialogVisible', false)
  })
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
  pickupOrder: undefined,
  orderNumber: undefined,
  purchasePrice: undefined,
  salePrice: undefined,
  maxStock: undefined,
  status: undefined,

  quantity: undefined,
  amount_in_package: undefined,
  packages_in_box: undefined,
  amount_of_boxes: undefined,
  currency: undefined,
  unit_price: undefined,
  unit_price_including_vat: undefined,
  box_price: undefined,
})

watch(() => productData.value.name, val => {
  const baseSlug = val
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  const timestamp = Date.now()

  productData.value.slug = `${baseSlug}-${timestamp}`;
})

const {
  data: categoryBuilderData,
  execute: fetchCategoryBuilders,
} = await useApi(createUrl('/admin/settings/categories'))

const categories = computed(() => categoryBuilderData.value.categories)

const searchTerm = ref('')
const showList = ref(false)
const dropdownWrapper = ref(null)

const buildTree = (categories, searchTerm = '') => {
  const categoryMap = {}

  // Initialize categories with children array
  categories.forEach(cat => {
    categoryMap[cat._id.toString()] = { ...cat, children: [] }
  })

  const roots = []

  // Assign children to their parents
  categories.forEach(cat => {
    if (cat.parentId) {
      const parentId = cat.parentId.toString()
      if (categoryMap[parentId]) {
        categoryMap[parentId].children.push(categoryMap[cat._id.toString()])
      } else {
        roots.push(categoryMap[cat._id.toString()])
      }
    } else {
      roots.push(categoryMap[cat._id.toString()])
    }
  })

  // Recursive sort by sortOrder
  const sortChildren = nodes => {
    nodes.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    nodes.forEach(node => {
      if (node.children?.length) sortChildren(node.children)
    })
  }

  sortChildren(roots)

  // ✅ Apply search filter
  if (!searchTerm) return roots

  const term = searchTerm.toLowerCase()

  const filterTree = nodes => {
    return nodes
      .map(node => {
        const matchedChildren = node.children ? filterTree(node.children) : []
        const isMatch = node.name.toLowerCase().includes(term)

        if (isMatch || matchedChildren.length > 0) {
          return {
            ...node,
            children: matchedChildren,
          }
        }

        return null
      })
      .filter(Boolean)
  }

  return filterTree(roots)
}

const tree = computed(() => buildTree(categories.value, searchTerm.value))

//const checkedCategories = ref(props.product.categoryIDs)
const checkedCategories = ref(Array.isArray(props.product.categoryIDs) ? [...props.product.categoryIDs] : [])
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
  const idStr = String(id)
  const list = checkedCategories.value.map(String)

  if (checked) {
    if (!list.includes(idStr)) checkedCategories.value.push(id)
  } else {
    checkedCategories.value = checkedCategories.value.filter(x => String(x) !== idStr)
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

// Hide on outside click
const handleClickOutside = e => {
  if (dropdownWrapper.value && !dropdownWrapper.value.contains(e.target)) {
    showList.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
const handleImageChange = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        image.value = fileReader.result
    }
  }
}

const addCustomField = () => {
  productData.value.customFields.push({ title: "", value: "" })
}

const removeCustomField = index => {
  productData.value.customFields.splice(index, 1)
}

const removeCategory = id => {
  checkedCategories.value = checkedCategories.value.filter(x => String(x) !== String(id))
}

const filteredTree = computed(() => {
  if (!searchTerm.value) return tree.value
  const term = searchTerm.value.toLowerCase()
  const flatten = (nodes) => nodes.flatMap(node => [node, ...(node.children ? flatten(node.children) : [])])
  return flatten(tree.value).filter(node => node.name.toLowerCase().includes(term))
})

// Flattened helper to get category name by id
const findCategoryNameById = (id) => {
  // const flattenCategories = (nodes) => {
  //   return nodes.reduce((acc, node) => {
  //     acc.push(node)
  //     if (node.children?.length) acc.push(...flattenCategories(node.children))
  //     return acc
  //   }, [])
  // }

  // const flat = flattenCategories(tree.value)
  const cat = categories.value.find(node => String(node._id || node.realId) === String(id))
  return cat ? cat.name : id
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    :model-value="props.isDialogVisible"
    @update:model-value="onReset"
    scrollable
    content-class="scrollable-dialog"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />
    <VForm 
      ref="refForm"
      v-model="isFormValid"
      @submit.prevent="onSubmit"
    >
    <VCard class="pa-sm-10 pa-2">
      <VCardText style="padding:0">
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">
          {{ props.product._id ? $t('Edit Product') : $t('Create Product') }}
        </h4>

        <VDivider style="margin:10px 0 20px" />

        <!-- 👉 Form -->
        
          <VRow>
            <VCol cols="12">
              <div
                ref="dropdownWrapper"
                class="relative w-full max-w-xl"
              >
                <div
                  class="flex flex-wrap items-center gap-1 px-2 py-1 border border-gray-300 rounded"
                  @click="showList = true"
                >
                  <!-- Selected categories as chips -->
                  <span
                    v-for="id in checkedCategories"
                    :key="id"
                    class="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-full text-sm s_items"
                  >
                    {{ findCategoryNameById(id) }}
                    <button
                      type="button"
                      @click.stop="removeCategory(id)"
                      class="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </span>

                  <!-- Search input -->
                  <AppTextField
                    v-model="searchTerm"
                    type="text"
                    class="flex-1 outline-none border-none"
                    :placeholder="$t('Search Category')"
                  />
                </div>

                <!-- Category dropdown -->
                <div
                  v-if="showList"
                  class="absolute-category z-50 w-full bg-white border border-gray-300 rounded mt-1 max-h-80 overflow-y-auto shadow"
                  @mousedown.prevent
                >
                  <ul class="p-3">
                    <CategoryTreeNode
                      v-for="node in tree"
                      :key="node.realId || node._id"
                      :node="node"
                      :selected="checkedCategories"
                      @toggle-select="onToggleSelect"
                    />
                  </ul>
                </div>
              </div>
            </VCol>
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
            <VCol cols="12">
              <AppTextField
                v-model="productData.productNumber"
                :label="$t('Product number')"
                :placeholder="$t('Product number')"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.model"
                :label="$t('Model')"
                :placeholder="$t('Model')"
                :error-messages="errors.model"
              />
            </VCol>

            <!-- 👉 Sale Price -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.salePrice"
                :label="$t('Selling Price')"
                :placeholder="$t('Selling Price')"
                :error-messages="errors.salePrice"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.quantity"
                :label="$t('Quantity')"
                :placeholder="$t('Quantity')"
                :error-messages="errors.quantity"
                type="number"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.amount_in_package"
                :label="$t('Amount in package')"
                :placeholder="$t('Amount in package')"
                :error-messages="errors.amount_in_package"
                type="number"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.packages_in_box"
                :label="$t('Packages in box')"
                :placeholder="$t('Packages in box')"
                :error-messages="errors.packages_in_box"
                type="number"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.amount_of_boxes"
                :label="$t('Amount of boxes')"
                :placeholder="$t('Amount of boxes')"
                :error-messages="errors.amount_of_boxes"
                type="number"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.currency"
                :items="[
                  { value: 'nis', title: 'NIS' },
                  { value: 'usd', title: 'US Dollar' },
                  { value: 'EUR', title: 'Euro' },
                ]"
                :placeholder="$t('Select Currency')"
                :label="$t('Currency')"
                :error-messages="errors.currency"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.unit_price"
                :label="$t('Unit price')"
                :placeholder="$t('Unit price')"
                :error-messages="errors.unit_price"
                type="number"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.unit_price_including_vat"
                :label="$t('Unit price including VAT')"
                :placeholder="$t('Unit price including VAT')"
                :error-messages="errors.unit_price_including_vat"
                type="number"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.box_price"
                :label="$t('Box price')"
                :placeholder="$t('Box price')"
                :error-messages="errors.box_price"
                type="number"
              />
            </VCol>

            <VCol cols="12">
              <div class="app-picker-field">
                <label class="v-label mb-1 text-body-2">{{ $t('Image') }}</label>
              </div>
              <div v-if="productData?.image">
                <VImg
                  :src="productData.image"
                  alt="Product Image"
                  width="120"
                  height="120"
                />
              </div>
              <VFileInput
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="tabler-camera"
                :error-messages="errors.image"
                @change="handleImageChange"
              />
            </VCol>

            <!-- 👉 Slug -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.slug"
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

            

            <!-- 👉 Package Type -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.packagetypeID"
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
                :items="quantitytypesUpdated"
                :label="$t('Quantity Type')"
                :placeholder="$t('Select Quantity Type')"
                :error-messages="errors.quantitytypeID"
                clearable
                @update:model-value="onQuantitytypeChange"
              />
            </VCol>

            <!-- 👉 Tag -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.tags"
                :items="props.tags"
                :label="$t('Tags')"
                :placeholder="$t('Select Tag')"
                clearable
                multiple
              />
            </VCol>

            <!-- 👉 Group -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.groups"
                :items="props.groups"
                :label="$t('Groups')"
                :placeholder="$t('Select Group')"
                clearable
                multiple
              />
            </VCol>

            <!-- 👉 Product Order number in invoice -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.pickupOrder"
                :label="$t('Pickup Order')"
                :placeholder="$t('Pickup Order')"
                :error-messages="errors.pickupOrder"
              />
            </VCol>

            <!-- 👉 Pickup order -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.orderNumber"
                :label="$t('Product Order Number in Invoice')"
                :placeholder="$t('Product Order Number in Invoice')"
                :error-messages="errors.orderNumber"
              />
            </VCol>

            <!-- 👉 Purchase Price -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.purchasePrice"
                :label="$t('Purchase Price')"
                :placeholder="$t('Purchase Price')"
                :error-messages="errors.purchasePrice"
              />
            </VCol>

            

            <!-- 👉 Max Stock -->
            <VCol cols="12">
              <AppTextField
                v-model="productData.maxStock"
                :label="$t('Max Stock')"
                :placeholder="$t('Max Stock')"
                :error-messages="errors.maxStock"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="productData.status"
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
              <AppTextField
                v-model="productData.size"
                :label="$t('Size')"
                :placeholder="$t('Size')"
                :error-messages="errors.size"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                v-model="productData.color"
                :label="$t('Color')"
                :placeholder="$t('Color')"
                :error-messages="errors.color"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.sleeveLength"
                :label="$t('Sleeve length')"
                :placeholder="$t('Sleeve length')"
                :error-messages="errors.sleeveLength"
              />
            </VCol>

            
            <VCol cols="12">
              <AppTextField
                v-model="productData.pocket"
                :placeholder="$t('Add Yes/No or both')"
                :label="$t('Pocket')"
                :error-messages="errors.pocket"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.fit"
                :label="$t('Fit')"
                :placeholder="$t('Fit')"
                :error-messages="errors.fit"
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

            <VCol cols="12">
              <AppTextField
                v-model="productData.collectingOrder"
                :label="$t('Collecting Order')"
                :placeholder="$t('Collecting Order')"
                :error-messages="errors.collectingOrder"
              />
            </VCol>

            <VCol cols="12">
              <AppTextField
                v-model="productData.printingOrder"
                :label="$t('Printing Order')"
                :placeholder="$t('Printing Order')"
                :error-messages="errors.printingOrder"
              />
            </VCol>

            <VCol cols="12">
              <div class="custom_field">
                <h4 class="mb-3">{{ $t('Custom Fields') }}</h4>
                <VRow v-for="(field, index) in productData.customFields" :key="index" class="d-flex">
                  <VCol md="5">
                    <AppTextField 
                      v-model="field.title" 
                      :placeholder="$t('Title')" 
                      class="form-control me-1" 
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol md="5">
                    <AppTextField 
                      v-model="field.value" 
                      :placeholder="$t('Value')" 
                      class="form-control me-1"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol md="2">
                    <VIcon type="button" class="btn btn-danger" @click="removeCustomField(index)" icon="tabler-trash">

                    </VIcon>
                  </VCol>
                </VRow>

                <VBtn type="button" class="mt-3" @click="addCustomField">
                  + {{ $t('Add Field') }}
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </VCardText>

        <VDivider />
        <VCardText style="padding-right: 0; padding-bottom:0;" class="d-flex justify-end flex-wrap gap-3 overflow-visible">
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
      </VCardText>
      
    </VCard>
    </VForm>
  </VDialog>

  <AddNewPackagetypeDialog
    v-if="isAddNewPackagetypeDialogVisible"
    v-model:is-dialog-visible="isAddNewPackagetypeDialogVisible"
    @update-data="modifyPackagetypeDialog"
  />

  <AddNewQuantitytypeDialog
    v-if="isAddNewQuantitytypeDialogVisible"
    v-model:is-dialog-visible="isAddNewQuantitytypeDialogVisible"
    @update-data="modifyQuantitytypeDialog"
  />

  <AddNewCertificationDialog
    v-if="isAddNewCertificationDialogVisible"
    v-model:is-dialog-visible="isAddNewCertificationDialogVisible"
    @update-data="modifyCertificationDialog"
  />

  <AddNewManufacturerDialog
    v-if="isAddNewManufacturerDialogVisible"
    v-model:is-dialog-visible="isAddNewManufacturerDialogVisible"
    v-model:countries="countries"
    v-model:cities="cities"
    @update-data="modifyManufacturerDialog"
  />

  <AddNewSupplierDialog
    v-if="isAddNewSupplierDialogVisible"
    v-model:is-dialog-visible="isAddNewSupplierDialogVisible"
    v-model:countries="countries"
    v-model:cities="cities"
    @update-data="modifySupplierDialog"
  />
</template>
<style lang="scss">
.scrollable-dialog {
  overflow: visible !important;
}
.v-dialog--scrollable > .v-overlay__content > form > .v-card > .v-card-text{
  overflow-x: hidden;
}
</style>
