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
  cities: {
    type: Object,
    required: true,
  },
  admin: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      cityID: '',
      street: '',
      houseNumber: '',
      remarks: '',
      phone1: '',
      phone2: '',
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
  'cities',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const adminData = ref(structuredClone(toRaw(props.admin)))
const adminRole = ref()

if(props.admin._id) {
  if(props.admin.cityID) {
    adminData.value.cityID = props.admin.cityID._id
  }
}

if(props.roles){
  adminRole.value = props.roles.find(role => role.title === 'DSM')?.value ?? null
}

if(props.admin.roles.length > 0) {
  adminData.value.roles = props.admin.roles.map(role => role._id)
} else {
  adminData.value.roles = adminRole.value
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
    if(props.admin._id) {
      const res = await $api(`/admin/distribution-managers/${ props.admin._id }`, {
        method: 'PATCH',
        body: {
          firstName: adminData.value.firstName,
          lastName: adminData.value.lastName,
          position: adminData.value.position,
          roles: adminData.value.roles,
          status: adminData.value.status,
          cityID: adminData.value.cityID,
          street: adminData.value.street,
          houseNumber: adminData.value.houseNumber,
          remarks: adminData.value.remarks,
          phone1: adminData.value.phone1,
          phone2: adminData.value.phone2,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/distribution-managers`, {
        method: 'POST',
        body: {
          firstName: adminData.value.firstName,
          lastName: adminData.value.lastName,
          email: adminData.value.email,
          position: adminData.value.position,
          roles: adminData.value.roles,
          password: password.value,
          status: adminData.value.status,
          cityID: adminData.value.cityID,
          street: adminData.value.street,
          houseNumber: adminData.value.houseNumber,
          remarks: adminData.value.remarks,
          phone1: adminData.value.phone1,
          phone2: adminData.value.phone2,
          confirmPassword: confirmPassword.value,
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
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  position: undefined,
  status: undefined,
  roles: undefined,
  password: undefined,
  cityID: undefined,
  street: undefined,
  houseNumber: undefined,
  remarks: undefined,
  phone1: undefined,
  phone2: undefined,
  confirmPassword: undefined,
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
      :title="$t('Edit Distribution Manager')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Distribution Manager')"
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
                  :placeholder="$t('Select Role')"
                  :label="$t('Role')"
                  multiple
                  :error-messages="errors.roles"
                  clearable
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
                  v-if="props.admin._id"
                  v-model="adminData.email"
                  :label="$t('Email')"
                  :placeholder="$t('Email')"
                  :error-messages="errors.email"
                  disabled
                />
                <AppTextField
                  v-else
                  v-model="adminData.email"
                  :rules="[requiredValidator, emailValidator]"
                  ::label="$t('Email')"
                  :placeholder="$t('Email')"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- 👉 position -->
              <VCol cols="12">
                <AppTextField
                  v-model="adminData.position"
                  :rules="[requiredValidator]"
                  :label="$t('Position')"
                  :placeholder="$t('Position')"
                  :error-messages="errors.position"
                />
              </VCol>

              <!-- 👉 City -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="adminData.cityID"
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

              <!-- 👉 Phone 1 -->
              <VCol cols="12">
                <AppTextField
                  v-model="adminData.phone1"
                  :rules="[requiredValidator]"
                  :label="$t('Phone 1')"
                  :placeholder="$t('Phone 1')"
                  :error-messages="errors.phone1"
                />
              </VCol>

              <!-- 👉 Phone 2 -->
              <VCol cols="12">
                <AppTextField
                  v-model="adminData.phone2"
                  :label="$t('Phone 2')"
                  :placeholder="$t('Phone 2')"
                  :error-messages="errors.phone2"
                />
              </VCol>

              <!-- 👉 password -->
              <VCol
                v-if="!props.admin._id"
                cols="12"
              >
                <AppTextField
                  v-model="password"
                  :label="$t('Password')"
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
                  :label="$t('Confirm Password')"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.confirmPassword"
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
                  :placeholder="$t('Select Status')"
                  :label="$t('Status')"
                  :error-messages="errors.status"
                />
              </VCol>

              <!-- 👉 Remarks -->
              <VCol cols="12">
                <AppTextarea
                  v-model="adminData.remarks"
                  :label="$t('Remarks')"
                  :placeholder="$t('Remarks')"
                  :error-messages="errors.remarks"
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
