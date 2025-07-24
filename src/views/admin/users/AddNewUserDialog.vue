<script setup>
import { useAuthStore } from '@/stores'
import AddNewCommunityDialog from '@/views/admin/communities/AddNewCommunityDialog.vue'
import { can } from '@layouts/plugins/casl'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  communities: {
    type: Object,
    required: true,
  },
  cities: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      communityID: '',
      cityID: '',
      street: '',
      houseNumber: '',
      nationality: '',
      israeliIDNumber: '',
      passportNumber: '',
      noOfKids: '',
      status: 'Active',
      maritalStatus: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'userData',
  'user',
  'communities',
  'cities',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const isAddNewCommunityDialogVisible = ref(false)
const refForm = ref()
const imageID = ref()
const imageUrl = ref()
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']
const adminData = ref(structuredClone(toRaw(props.user)))
const cities = ref(structuredClone(toRaw(props.cities)))

if(props.user._id) {
  if(props.user.cityID) {
    adminData.value.cityID = props.user.cityID._id
  }
  
  if(props.user.communityID) {
    adminData.value.communityID = props.user.communityID._id
  }
}

const communitiesWithAddNew = ref([])

const submit = async () => {

  const formData = new FormData()

  if(imageID.value) {
    //formData.append('imageID', imageID.value)
    const formDataImage = new FormData()
    
    formDataImage.append('file', imageID.value)
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
  }else if(adminData.value.imageID){
    formData.append('imageUrl', adminData.value.imageID)
  }

  if(adminData.value.email) {
    formData.append('email', adminData.value.email)
  }

  if(adminData.value.firstName) {
    formData.append('firstName', adminData.value.firstName)
  }

  if(adminData.value.lastName) {
    formData.append('lastName', adminData.value.lastName)
  }

  if(adminData.value.maritalStatus) {
    formData.append('maritalStatus', adminData.value.maritalStatus)
  } else {
    formData.append('maritalStatus', '')
  }

  if(adminData.value.communityID) {
    formData.append('communityID', adminData.value.communityID)
  } else {
    formData.append('communityID', '')
  }

  if(adminData.value.cityID) {
    formData.append('cityID', adminData.value.cityID)
  } else {
    formData.append('cityID', '')
  }

  if(adminData.value.street) {
    formData.append('street', adminData.value.street)
  } else {
    formData.append('street', '')
  }

  if(adminData.value.houseNumber) {
    formData.append('houseNumber', adminData.value.houseNumber)
  } else {
    formData.append('houseNumber', '')
  }

  if(adminData.value.phone) {
    formData.append('phone', adminData.value.phone)
  } else {
    formData.append('phone', '')
  }

  if(adminData.value.nationality) {
    formData.append('nationality', adminData.value.nationality)
  } else {
    formData.append('nationality', '')
  }

  if(adminData.value.israeliIDNumber) {
    formData.append('israeliIDNumber', adminData.value.israeliIDNumber)
  } else {
    formData.append('israeliIDNumber', '')
  }

  if(adminData.value.passportNumber) {
    formData.append('passportNumber', adminData.value.passportNumber)
  } else {
    formData.append('passportNumber', '')
  }

  if(adminData.value.noOfKids) {
    formData.append('noOfKids', adminData.value.noOfKids)
  } else {
    formData.append('noOfKids', 0)
  }

  if(adminData.value.status) {
    formData.append('status', adminData.value.status)
  }

  if(props.user._id) {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/users/${ props.user._id }`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${authStore.accessToken}`,
      },
    }).then(async response => {
      if(imageUrl.value){
        formData.append('imageUrl', imageUrl.value)
        updateImage(formData, props.user._id)

        await nextTick(() => {
          //emit('updateData')
          //emit('update:isDrawerOpen', false)
          emit('update:isDialogVisible', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully updated")
        })
      }else{
        await nextTick(() => {
          emit('userData')
          emit('update:isDialogVisible', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully updated")
        })
      }

      // await nextTick(() => {
      //   emit('userData')
      //   emit('update:isDialogVisible', false)
      //   refForm.value?.reset()
      //   refForm.value?.resetValidation()
      //   toast.success("Successfully updated")
      // })
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  } else {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/users`, formData, {
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
          emit('update:isDialogVisible', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully saved")
        })
      }else{
        await nextTick(() => {
          emit('userData')
          emit('update:isDialogVisible', false)
          refForm.value?.reset()
          refForm.value?.resetValidation()
          toast.success("Successfully saved")
        })
      }

      // await nextTick(() => {
      //   emit('userData')
      //   emit('update:isDialogVisible', false)
      //   refForm.value?.reset()
      //   refForm.value?.resetValidation()
      //   toast.success("Successfully saved")
      // })
    })
      .catch(e => {
        errors.value = e.response.data.errors
      })
  }
}

const updateImage = async (formData, modelId) => {
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/users/${ modelId }`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authStore.accessToken}`,
    },
  }).then(async response => {
    await nextTick(() => {
      emit('userData')
      emit('update:isDialogVisible', false)
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

const onCommunityChange = async value => {
  if (value === '__add_new__') {
    adminData.value.communityID = null
    isAddNewCommunityDialogVisible.value = true
  }
}

const errors = ref({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  status: undefined,
  maritalStatus: undefined,
  communityID: undefined,
  cityID: undefined,
  street: undefined,
  houseNumber: undefined,
  nationality: undefined,
  israeliIDNumber: undefined,
  passportNumber: undefined,
  noOfKids: undefined,
  imageID: undefined,
})

const handleImageChange = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        imageID.value = fileReader.result
    }
  }
}

const modifyCommunityDialog = async updateData => {
  emit('communities')
}

watch(() => props.communities,
  newVal => {
    const cloned = structuredClone(toRaw(newVal))

    if (can('admin-create-communities', 'Create Community')) {
      cloned.unshift({
        value: '__add_new__',
        title: '➕ Create New Community',
      })
    }

    communitiesWithAddNew.value = cloned
  }, { immediate: true, deep: true },
)
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
          {{ props.user._id ? $t('Edit User') : $t('Create User') }}
        </h4>

        <VDivider />
        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Role -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="adminData.communityID"
                :items="communitiesWithAddNew"
                :placeholder="$t('Select Community')"
                :label="$t('Community')"
                :error-messages="errors.communityID"
                clearable
                @update:model-value="onCommunityChange"
              />
            </VCol>
            <!-- 👉 First name -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.firstName"
                :rules="[requiredValidator]"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
                :error-messages="errors.firstName"
              />
            </VCol>

            <!-- 👉 Last name -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.lastName"
                :rules="[requiredValidator]"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
                :error-messages="errors.lastName"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.email"
                :rules="[requiredValidator, emailValidator]"
                :label="$t('Email')"
                :placeholder="$t('Email')"
                :error-messages="errors.email"
              />
            </VCol>

            <!-- 👉 phone -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.phone"
                :label="$t('Phone')"
                :placeholder="$t('Phone')"
                :error-messages="errors.phone"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="adminData.cityID"
                :items="cities"
                :label="$t('City')"
                :placeholder="$t('Select City')"
                :error-messages="errors.cityID"
                clearable
              />
            </VCol>

            <!-- 👉 Street -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.street"
                :label="$t('Street')"
                :placeholder="$t('Street')"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.houseNumber"
                :label="$t('House Number')"
                :placeholder="$t('House Number')"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 Nationality -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.nationality"
                :label="$t('Nationality')"
                :placeholder="$t('Nationality')"
                :error-messages="errors.nationality"
              />
            </VCol>

            <!-- 👉 Israeli ID Number -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.israeliIDNumber"
                :label="$t('Israeli ID Number')"
                :placeholder="$t('Israeli ID Number')"
                :error-messages="errors.israeliIDNumber"
              />
            </VCol>

            <!-- 👉 Passport Number -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.passportNumber"
                :label="$t('Passport Number')"
                :placeholder="$t('Passport Number')"
                :error-messages="errors.passportNumber"
              />
            </VCol>

            <!-- 👉 No. Of Kids -->
            <VCol cols="12">
              <AppTextField
                v-model="adminData.noOfKids"
                :rules="[integerValidator]"
                :label="$t('No. Of Kids')"
                :placeholder="$t('No. Of Kids')"
                :error-messages="errors.noOfKids"
              />
            </VCol>

            <!-- 👉 maritalStatus -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="adminData.maritalStatus"
                :items="[
                  { value: 'Single', title: 'Single' },
                  { value: 'Married', title: 'Married' },
                  { value: 'Divorced', title: 'Divorced' },
                  { value: 'Widowed', title: 'Widowed' },
                  { value: 'Separated', title: 'Separated' },
                  { value: 'In a civil partnership', title: 'In a civil partnership' },
                  { value: 'Cohabiting', title: 'Cohabiting' },
                ]"
                :placeholder="$t('Select Marital Status')"
                :label="$t('Marital Status')"
                :error-messages="errors.maritalStatus"
                clearable
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="adminData.status"
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

            <!-- 👉 imageID -->
            <VCol cols="12">
              <div class="app-picker-field">
                <label class="v-label mb-1 text-body-2">{{ $t('Image of ID') }}</label>
              </div>
              <div v-if="adminData?.imageID">
                <VImg
                  :src="adminData.imageID"
                  alt="logo"
                  width="120"
                  height="120"
                />
              </div>
              <VFileInput
                :rules="rules"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="tabler-camera"
                :error-messages="errors.imageID"
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
  </VDialog>

  <AddNewCommunityDialog
    v-if="isAddNewCommunityDialogVisible"
    v-model:is-dialog-visible="isAddNewCommunityDialogVisible"
    v-model:cities="cities"
    @update-data="modifyCommunityDialog"
  />
</template>
