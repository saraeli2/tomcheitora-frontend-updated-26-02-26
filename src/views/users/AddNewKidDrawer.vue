<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  kid: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      firstName: '',
      lastName: '',
      phone1: '',
      phone2: '',
      maritalStatus: '',
      email: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'userid',
  'kid',
])

const { t } = useI18n()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const kidData = ref(structuredClone(toRaw(props.kid)))

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
    if(props.kid._id) {
      const res = await $api(`/kids/${ props.kid._id }`, {
        method: 'PATCH',
        body: {
          firstName: kidData.value.firstName,
          lastName: kidData.value.lastName,
          dob: kidData.value.dob,
          IDNumber: kidData.value.IDNumber,
          maritalStatus: kidData.value.maritalStatus,
          userID: props.userid,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/kids`, {
        method: 'POST',
        body: {
          firstName: kidData.value.firstName,
          lastName: kidData.value.lastName,
          dob: kidData.value.dob,
          IDNumber: kidData.value.IDNumber,
          maritalStatus: kidData.value.maritalStatus,
          userID: props.userid,
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
      if(props.kid._id) {
        toast.success(t('Successfully updated'))
      } else {
        toast.success(t('Successfully saved'))
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
  dob: undefined,
  IDNumber: undefined,
  maritalStatus: undefined,
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
      v-if="props.kid._id"
      :title="$t('Edit Kid Information')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Kid Information')"
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
              <!-- 👉 First Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="kidData.firstName"
                  :rules="[requiredValidator]"
                  :label="$t('First Name')"
                  :placeholder="$t('First Name')"
                  :error-messages="errors.firstName"
                />
              </VCol>
              
              <!-- 👉 Last Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="kidData.lastName"
                  :rules="[requiredValidator]"
                  :label="$t('Last Name')"
                  :placeholder="$t('Last Name')"
                  :error-messages="errors.lastName"
                />
              </VCol>

              <!-- 👉 DoB -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="kidData.dob"
                  :label="$t('DoB')"
                  :placeholder="$t('DoB')"
                  :error-messages="errors.dob"
                />
              </VCol>

              <!-- 👉 ID number -->
              <VCol cols="12">
                <AppTextField
                  v-model="kidData.IDNumber"
                  :label="$t('ID number')"
                  :placeholder="$t('ID number')"
                  :error-messages="errors.IDNumber"
                />
              </VCol>

              <!-- 👉 maritalStatus -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="kidData.maritalStatus"
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
