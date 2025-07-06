<script setup>
import AddNewCategoryDialog from '@/views/admin/settings/AddNewCategoryDialog.vue'
import { can } from '@layouts/plugins/casl'
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  categories: {
    type: Object,
    required: true,
  },
  subcategory: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      categoryID: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'categories',
  'subcategory',
])

const toast = useToast()

const isFormValid = ref(false)
const isAddNewCategoryDrawerVisible = ref(false)
const refForm = ref()
const subcategoryData = ref(structuredClone(toRaw(props.subcategory)))
const categoriesWithAddNew = ref([])

const onCategoryChange = async value => {
  if (value === '__add_new__') {
    subcategoryData.value.categoryID = null
    isAddNewCategoryDrawerVisible.value = true
  }
}

const modifyCategoryDialog = async updateData => {
  emit('categories')
}

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {
  try {
    if(props.subcategory._id) {
      const res = await $api(`/admin/settings/sub-categories/${ props.subcategory._id }`, {
        method: 'PATCH',
        body: {
          categoryID: subcategoryData.value.categoryID,
          name: subcategoryData.value.name,
          status: subcategoryData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/settings/sub-categories`, {
        method: 'POST',
        body: {
          categoryID: subcategoryData.value.categoryID,
          name: subcategoryData.value.name,
          status: subcategoryData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('userData')
      emit('update:isDrawerOpen', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.subcategory._id) {
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

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

const errors = ref({
  categoryID: undefined,
  name: undefined,
  status: undefined,
})

watch(() => props.categories,
  newVal => {
    const cloned = structuredClone(toRaw(newVal))

    if (can('admin-create-categories', 'Create Categories')) {
      cloned.unshift({
        value: '__add_new__',
        title: '➕ Create New Category',
      })
    }

    categoriesWithAddNew.value = cloned
  }, { immediate: true, deep: true },
)
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      v-if="props.subcategory._id"
      title="Edit Sub Category"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Sub Category"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm 
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Category -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="subcategoryData.categoryID"
                  :rules="[requiredValidator]"
                  :items="categoriesWithAddNew"
                  label="Category"
                  placeholder="Select Category"
                  :error-messages="errors.categoryID"
                  @update:model-value="onCategoryChange"
                />
              </VCol>

              <!-- 👉 name -->
              <VCol cols="12">
                <AppTextField
                  v-model="subcategoryData.name"
                  :rules="[requiredValidator]"
                  label="Name"
                  placeholder="Name"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="subcategoryData.status"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'Active', title: 'Active' },
                    { value: 'Inactive', title: 'Inactive' },
                  ]"
                  placeholder="Select Status"
                  label="Status"
                  :error-messages="errors.status"
                />
              </VCol>
              
              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="error"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>

  <AddNewCategoryDialog
    v-if="isAddNewCategoryDrawerVisible"
    v-model:is-dialog-visible="isAddNewCategoryDrawerVisible"
    @update-data="modifyCategoryDialog"
  />
</template>
