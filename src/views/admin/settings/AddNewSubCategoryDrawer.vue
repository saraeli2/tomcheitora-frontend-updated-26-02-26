<script setup>
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
      title: '',
      slug: '',
      categoryID: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'subcategory',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const subcategoryData = ref(structuredClone(toRaw(props.subcategory)))

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
          title: subcategoryData.value.title,
          slug: subcategoryData.value.slug,
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
          title: subcategoryData.value.title,
          slug: subcategoryData.value.slug,
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
  title: undefined,
  slug: undefined,
  status: undefined,
})

watch(() => subcategoryData.value.title, val => {
  subcategoryData.value.slug = val.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
})
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
                  :items="categories"
                  label="Category"
                  placeholder="Select Category"
                  :error-messages="errors.categoryID"
                />
              </VCol>

              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  v-model="subcategoryData.title"
                  :rules="[requiredValidator]"
                  label="Title"
                  placeholder="Title"
                  :error-messages="errors.title"
                />
              </VCol>

              <!-- 👉 Slug -->
              <VCol cols="12">
                <AppTextField
                  v-model="subcategoryData.slug"
                  :rules="[requiredValidator]"
                  label="Slug"
                  placeholder="Slug"
                  :error-messages="errors.slug"
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
</template>
