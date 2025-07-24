<script setup>
import { useAuthStore } from '@/stores'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

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
      shownImageName: false,
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'updateData',
  'parent',
  'category',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const image = ref()
const imageUrl = ref()
const categoryId = ref()
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
    const formDataImage = new FormData()
    
    formDataImage.append('file', image.value)
    formDataImage.append('upload_preset', import.meta.env.VITE_IMAGE_PRESET)

    try {
      const response = await fetch(import.meta.env.VITE_CLOUDINARY_ENDPOINT, {
        method: 'POST',
        body: formDataImage,
      })

      const data = await response.json()

      imageUrl.value = data.secure_url
    } catch (error) {
      console.error('Cloudinary upload error:', error)
    }
  }else if(categoryData.value.image){
    formData.append('imageUrl', categoryData.value.image)
  }

  if(categoryData.value.name) {
    formData.append('name', categoryData.value.name)
  }

  if(categoryData.value.description) {
    formData.append('description', categoryData.value.description)
  }

  if(categoryData.value.shownImageName) {
    formData.append('shownImageName', categoryData.value.shownImageName)
  }

  if(props.parent) {
    formData.append('parentId', props.parent)
  }

  formData.append('status', 'Active')

  if(props.category._id) {

    categoryId.value = props.category._id

    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/categories/${ props.category._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      if(imageUrl.value){
        formData.append('imageUrl', imageUrl.value)
        updateCategory(formData, categoryId.value)
      }
      
      await nextTick(() => {
        emit('updateData')
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
      categoryId.value = response.data.data._id
      if(imageUrl.value){
        formData.append('imageUrl', imageUrl.value)
        updateCategory(formData, categoryId.value)
      }
      await nextTick(() => {
        emit('updateData')
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

// update after image added
const updateCategory = async (formData, categoryId) => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/categories/${ categoryId }`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authStore.accessToken}`,
    },
  }).then(async response => {
    await nextTick(() => {
      emit('updateData')
      emit('update:isDrawerOpen', false)
    })
  })
    .catch(e => {
      errors.value = e.response.data.errors
    })
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
      :title="$t('Edit Category')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Category')"
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
                  :label="$t('Name')"
                  :placeholder="$t('Name')"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Description -->
              <VCol cols="12">
                <AppTextarea
                  v-model="categoryData.description"
                  :label="$t('Description')"
                  :placeholder="$t('Description')"
                  :error-messages="errors.description"
                />
              </VCol>

              <!-- 👉 statusLabel -->
              <VCol cols="12">
                <VSwitch
                  v-model="categoryData.shownImageName"
                  :label="$t('Show Image & Name')"
                />
              </VCol>

              <!-- 👉 image -->
              <VCol cols="12">
                <div class="app-picker-field">
                  <label class="v-label mb-1 text-body-2">{{ $t('Image') }}</label>
                </div>
                <div v-if="categoryData?.image">
                  <VImg
                    :src="categoryData.image"
                    alt="Category Image"
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
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
