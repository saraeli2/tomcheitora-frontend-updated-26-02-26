<script setup>
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'

const props = defineProps({
  user: {
    type: Object,
    required: false,
    default: () => ({
      _id: '',
      name: '',
      email: '',
      position: '',
    }),
  },
})

const emit = defineEmits([
  'user',
  'userData',
])

import axios from 'axios'

const authStore = useAuthStore()

const toast = useToast()

const accountData = ref(structuredClone(toRaw(props.user)))

const refInputEl = ref()
const isFormValid = ref(false)
const refForm = ref()
const image = ref()

const errors = ref({
  name: undefined,
  email: undefined,
  position: undefined,
})

const resetForm = () => {
  accountData.value = structuredClone(toRaw(props.user))
  errors.value.name = undefined
  errors.value.email = undefined
  errors.value.position = undefined
}

const submit = async () => {
  const formData = new FormData()

  if(accountData.value.name) {
    formData.append('name', accountData.value.name)
  }
  if(accountData.value.position) {
    formData.append('position', accountData.value.position)
  }
  
  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/admins/${props.user._id}/update/profile`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authStore.accessToken}`,
    },
  }).then(response => {
    emit('userData')
    toast.success("Successfully updated")
  })
    .catch(e => {
      console.log(e)
      console.log(e.response)
      errors.value = e.response.data.errors
    })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

watch(props, () => {
  if (props.user) {
    accountData.value = props.user
  }
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard>
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VCardText class="d-flex">
            <!-- 👉 Avatar -->
            <VAvatar
              rounded
              size="100"
              class="me-6"
              :image="accountData.imageFullPath"
            />
          </VCardText>

          <VCardText class="pt-2">
            <!-- 👉 Form -->
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.name"
                  :rules="[requiredValidator]"
                  label="Full Name"
                  placeholder="John Doe"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.email"
                  disabled
                  label="Email"
                  placeholder="johndoe@email.com"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- 👉 Mobile -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="accountData.position"
                  :rules="[requiredValidator]"
                  label="Position"
                  placeholder="Position"
                  :error-messages="errors.position"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Save changes
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>
