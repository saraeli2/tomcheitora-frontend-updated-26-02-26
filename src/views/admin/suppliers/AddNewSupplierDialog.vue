<script setup>
import CategoryBuilderProductNode from '@/views/admin/settings/CategoryBuilderProductNode.vue'
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  countries: {
    type: Object,
    required: true,
  },
  cities: {
    type: Object,
    required: true,
  },
  supplier: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      businessID: '',
      countryID: '',
      cityID: '',
      street: '',
      houseNumber: null,
      remarks: '',
      status: 'Active',
      categoryIDs: [],
      contactInfo1: {
      // eslint-disable-next-line camelcase
        _id: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        email: '',
      },
      contactInfo2: {
      // eslint-disable-next-line camelcase
        _id: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        email: '',
      },
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'countries',
  'cities',
  'updateData',
  'supplier',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const supplierData = ref(structuredClone(toRaw(props.supplier)))

if(props.supplier._id) {
  if(props.supplier.countryID) {
    supplierData.value.countryID = props.supplier.countryID._id
  }
  
  if(props.supplier.cityID) {
    supplierData.value.cityID = props.supplier.cityID._id
  }
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {
  try {
    if(props.supplier._id) {
      const res = await $api(`/admin/suppliers/${ props.supplier._id }`, {
        method: 'PATCH',
        body: {
          name: supplierData.value.name,
          businessID: supplierData.value.businessID,
          countryID: supplierData.value.countryID ? supplierData.value.countryID : null,
          cityID: supplierData.value.cityID,
          street: supplierData.value.street,
          houseNumber: supplierData.value.houseNumber,
          remarks: supplierData.value.remarks,
          status: supplierData.value.status,
          categoryIDs: checkedCategories.value,
          contactInfo1: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo1._id,
            firstName: supplierData.value.contactInfo1.firstName,
            lastName: supplierData.value.contactInfo1.lastName,
            phone1: supplierData.value.contactInfo1.phone1,
            phone2: supplierData.value.contactInfo1.phone2,
            email: supplierData.value.contactInfo1.email,
          },
          contactInfo2: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo2._id,
            firstName: supplierData.value.contactInfo2.firstName,
            lastName: supplierData.value.contactInfo2.lastName,
            phone1: supplierData.value.contactInfo2.phone1,
            phone2: supplierData.value.contactInfo2.phone2,
            email: supplierData.value.contactInfo2.email,
          },
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/suppliers`, {
        method: 'POST',
        body: {
          name: supplierData.value.name,
          businessID: supplierData.value.businessID,
          countryID: supplierData.value.countryID ? supplierData.value.countryID : null,
          cityID: supplierData.value.cityID,
          street: supplierData.value.street,
          houseNumber: supplierData.value.houseNumber,
          remarks: supplierData.value.remarks,
          status: supplierData.value.status,
          categoryIDs: checkedCategories.value,
          contactInfo1: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo1._id,
            firstName: supplierData.value.contactInfo1.firstName,
            lastName: supplierData.value.contactInfo1.lastName,
            phone1: supplierData.value.contactInfo1.phone1,
            phone2: supplierData.value.contactInfo1.phone2,
            email: supplierData.value.contactInfo1.email,
          },
          contactInfo2: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo2._id,
            firstName: supplierData.value.contactInfo2.firstName,
            lastName: supplierData.value.contactInfo2.lastName,
            phone1: supplierData.value.contactInfo2.phone1,
            phone2: supplierData.value.contactInfo2.phone2,
            email: supplierData.value.contactInfo2.email,
          },
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('updateData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.supplier._id) {
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

const errors = ref({
  name: undefined,
  businessID: undefined,
  countryID: undefined,
  cityID: undefined,
  street: undefined,
  houseNumber: undefined,
  remarks: undefined,
  status: undefined,
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

const checkedCategories = ref(props.supplier.categoryIDs)
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
          {{ props.supplier._id ? $t('Edit Supplier') : $t('Create Supplier') }}
        </h4>

        <VDivider />
        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Country -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.countryID"
                :rules="[requiredValidator]"
                :items="props.countries"
                :label="$t('Country')"
                :placeholder="$t('Select Country')"
                :error-messages="errors.countryID"
                clearable
              />
            </VCol>

            <!-- 👉 Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.name"
                :rules="[requiredValidator]"
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 Business ID -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.businessID"
                :rules="[requiredValidator]"
                :label="$t('Business ID')"
                :placeholder="$t('Business ID')"
                :error-messages="errors.businessID"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.cityID"
                :items="props.cities"
                :label="$t('City')"
                :placeholder="$t('Select City')"
                :error-messages="errors.cityID"
                clearable
              />
            </VCol>

            <!-- 👉 Street -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.street"
                :label="$t('Street')"
                :placeholder="$t('Street')"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.houseNumber"
                :label="$t('House Number')"
                :placeholder="$t('House Number')"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.status"
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

            <!-- 👉 Remarks -->
            <VCol cols="12">
              <AppTextarea
                v-model="supplierData.remarks"
                :label="$t('Remarks')"
                :placeholder="$t('Remarks')"
                :error-messages="errors.remarks"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 1 / 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 2 / 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
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
</template>
