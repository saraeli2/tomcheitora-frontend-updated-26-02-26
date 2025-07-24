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
  certification: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'updateData',
  'certification',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const logo = ref()
const imageUrl = ref()
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']
const certificationData = ref(structuredClone(toRaw(props.certification)))

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
  if(logo.value) {
    //formData.append('logo', logo.value)
    const formDataImage = new FormData()
    
    formDataImage.append('file', logo.value)
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
  }else if(certificationData.value.logo){
    formData.append('imageUrl', certificationData.value.logo)
  }

  if(certificationData.value.name) {
    formData.append('name', certificationData.value.name)
  }

  if(certificationData.value.status) {
    formData.append('status', certificationData.value.status)
  }

  if(props.certification._id) {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/certifications/${ props.certification._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      if(imageUrl.value){
        formData.append('imageUrl', imageUrl.value)
        updateImage(formData, props.certification._id)

        await nextTick(() => {
          //emit('updateData')
          //emit('update:isDrawerOpen', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully updated")
        })
      }else{
        await nextTick(() => {
          emit('updateData')
          emit('update:isDrawerOpen', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully updated")
        })
      }
      
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  } else {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/certifications`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      if(imageUrl.value){
        formData.append('imageUrl', imageUrl.value)
        updateImage(formData, response.data.data._id)

        await nextTick(() => {
          //emit('updateData')
          //emit('update:isDrawerOpen', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully saved")
        })
      }else{
        await nextTick(() => {
          emit('updateData')
          emit('update:isDrawerOpen', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully saved")
        })
      }
      
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  }
}

const updateImage = async (formData, modelId) => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/settings/certifications/${ modelId }`, formData, {
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
  logo: undefined,
  status: undefined,
})

const handleLogoChange = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        logo.value = fileReader.result
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
      v-if="props.certification._id"
      :title="$t('Edit Certification')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Certification')"
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
              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  v-model="certificationData.name"
                  :rules="[requiredValidator]"
                  :label="$t('Name')"
                  :placeholder="$t('Name')"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="certificationData.status"
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

              <!-- 👉 logo -->
              <VCol cols="12">
                <div class="app-picker-field">
                  <label class="v-label mb-1 text-body-2">{{ $t('Logo') }}</label>
                </div>
                <div v-if="certificationData?.logo">
                  <VImg
                    :src="certificationData.logo"
                    alt="logo"
                    width="120"
                    height="120"
                  />
                </div>
                <VFileInput
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="tabler-camera"
                  :error-messages="errors.logo"
                  @change="handleLogoChange"
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
