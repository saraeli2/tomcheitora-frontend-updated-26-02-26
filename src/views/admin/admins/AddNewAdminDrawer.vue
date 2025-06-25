<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  roles: {
    type: Object,
    required: true,
  },
  admin: {
    type: Object,
    required: false,
    default: () => ({
      _id: '',
      name: '',
      email: '',
      position: '',
      status: 'Active',
      roles: [],
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'admin',
  'roles',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const adminData = ref(structuredClone(toRaw(props.admin)))

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
    if(props.admin._id) {
      const res = await $api(`/admin/admins/${ props.admin._id }`, {
        method: 'PATCH',
        body: {
          name: adminData.value.name,
          position: adminData.value.position,
          roles: adminData.value.roles,
          status: adminData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/admins`, {
        method: 'POST',
        body: {
          name: adminData.value.name,
          email: adminData.value.email,
          position: adminData.value.position,
          roles: adminData.value.roles,
          password: password.value,
          status: adminData.value.status,
          // eslint-disable-next-line camelcase
          password_confirmation: confirmPassword.value,
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
      if(props.admin._id) {
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
  name: undefined,
  email: undefined,
  position: undefined,
  status: undefined,
  roles: undefined,
  password: undefined,
  // eslint-disable-next-line camelcase
  password_confirmation: undefined,
})

watch(props, () => {
  if (props.admin) {
    adminData.value = props.admin
  }
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
      v-if="props.admin._id"
      title="Edit Admin"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Admin"
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
              <!-- 👉 Role -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="adminData.roles"
                  :items="props.roles"
                  placeholder="Select Role"
                  label="Role"
                  multiple
                  :error-messages="errors.roles"
                  clearable
                />
              </VCol>
              <!-- 👉 Full name -->
              <VCol cols="12">
                <AppTextField
                  v-model="adminData.name"
                  :rules="[requiredValidator]"
                  label="Full Name"
                  placeholder="John Doe"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField
                  v-if="props.admin._id"
                  v-model="adminData.email"
                  label="Email"
                  placeholder="johndoe@email.com"
                  :error-messages="errors.email"
                  disabled
                />
                <AppTextField
                  v-else
                  v-model="adminData.email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  placeholder="johndoe@email.com"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- 👉 position -->
              <VCol cols="12">
                <AppTextField
                  v-model="adminData.position"
                  :rules="[requiredValidator]"
                  label="Position"
                  placeholder="Position"
                  :error-messages="errors.position"
                />
              </VCol>

              <!-- 👉 password -->
              <VCol
                v-if="!props.admin._id"
                cols="12"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>

              <!-- 👉 company -->
              <VCol
                v-if="!props.admin._id"
                cols="12"
              >
                <AppTextField
                  v-model="confirmPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password_confirmation"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
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
