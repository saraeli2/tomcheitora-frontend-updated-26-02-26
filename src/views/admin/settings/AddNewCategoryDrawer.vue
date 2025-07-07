<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useAuthStore } from '@/stores'
import axios from 'axios'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  parent: {
    type: String,
    required: false,
    default: '',
  },
  category: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      description: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'parent',
  'category',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const image = ref()
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']
const categoryData = ref(structuredClone(toRaw(props.category)))

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {

  const formData = new FormData()
  if(image.value) {
    formData.append('image', image.value)
  }

  if(categoryData.value.name) {
    formData.append('name', categoryData.value.name)
  }

  if(categoryData.value.description) {
    formData.append('description', categoryData.value.description)
  }

  formData.append('status', 'Active')

  if(props.category._id) {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/categories/${ props.category._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      await nextTick(() => {
        emit('userData')
        emit('update:isDrawerOpen', false)
        refForm.value?.reset()
        refForm.value?.resetValidation()
        toast.success("Successfully updated")
      })
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  } else {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/categories`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      await nextTick(() => {
        emit('userData')
        emit('update:isDrawerOpen', false)
        refForm.value?.reset()
        refForm.value?.resetValidation()
        toast.success("Successfully saved")
      })
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
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
  name: undefined,
  description: undefined,
  image: undefined,
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
      v-if="props.category._id"
      title="Edit Category"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Category"
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
              <!-- 👉 Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="categoryData.name"
                  :rules="[requiredValidator]"
                  label="Name"
                  placeholder="Name"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <AppTextarea
                  v-model="categoryData.description"
                  :rules="[requiredValidator]"
                  label="Description"
                  placeholder="Description"
                  :error-messages="errors.description"
                />
              </VCol>

              <!-- 👉 image -->
              <VCol cols="12">
                <div class="app-picker-field">
                  <label class="v-label mb-1 text-body-2">Image</label>
                </div>
                <VFileInput
                  :rules="rules"
                  label="Image"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Pick an image"
                  prepend-icon="tabler-camera"
                  :error-messages="errors.image"
                  @change="handleImageChange"
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
