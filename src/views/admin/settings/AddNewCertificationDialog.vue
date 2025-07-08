<script setup>
import { useAuthStore } from '@/stores'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
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
  'update:isDialogVisible',
  'updateData',
  'certification',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const logo = ref()
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']
const certificationData = ref(structuredClone(toRaw(props.certification)))

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {
  const formData = new FormData()
  if(logo.value) {
    formData.append('logo', logo.value)
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
      await nextTick(() => {
        emit('updateData')
        emit('update:isDialogVisible', false)
        refForm.value?.reset()
        refForm.value?.resetValidation()
        toast.success("Successfully updated")
      })
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
      await nextTick(() => {
        emit('updateData')
        emit('update:isDialogVisible', false)
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

const onReset = () => {
  emit('update:isDialogVisible', false)
  refForm.value?.reset()
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
          {{ props.certification._id ? $t('Edit Certification') : $t('Create Certification') }}
        </h4>

        <VDivider />
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
  </VDialog>
</template>
