<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  morphableid: {
    type: String,
    required: true,
  },
  morphabletype: {
    type: String,
    required: true,
  },
  contactInformation: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      firstName: '',
      lastName: '',
      phone1: '',
      phone2: '',
      email: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'morphableid',
  'morphabletype',
  'contactInformation',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const contactInformationData = ref(structuredClone(toRaw(props.contactInformation)))

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
    if(props.contactInformation._id) {
      const res = await $api(`/admin/contact-informations/${ props.contactInformation._id }`, {
        method: 'PATCH',
        body: {
          firstName: contactInformationData.value.firstName,
          lastName: contactInformationData.value.lastName,
          phone1: contactInformationData.value.phone1,
          phone2: contactInformationData.value.phone2,
          email: contactInformationData.value.email,
          morphableid: props.morphableid,
          morphabletype: props.morphabletype,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/contact-informations`, {
        method: 'POST',
        body: {
          firstName: contactInformationData.value.firstName,
          lastName: contactInformationData.value.lastName,
          phone1: contactInformationData.value.phone1,
          phone2: contactInformationData.value.phone2,
          email: contactInformationData.value.email,
          morphableid: props.morphableid,
          morphabletype: props.morphabletype,
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
      if(props.contactInformation._id) {
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
  phone1: undefined,
  phone2: undefined,
  email: undefined,
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
      v-if="props.contactInformation._id"
      title="Edit Contact Information"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Contact Information"
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
                  v-model="contactInformationData.firstName"
                  :rules="[requiredValidator]"
                  label="First Name"
                  placeholder="First Name"
                  :error-messages="errors.firstName"
                />
              </VCol>
              
              <!-- 👉 Last Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="contactInformationData.lastName"
                  :rules="[requiredValidator]"
                  label="Last Name"
                  placeholder="Last Name"
                  :error-messages="errors.lastName"
                />
              </VCol>

              <!-- 👉 Phone1 -->
              <VCol cols="12">
                <AppTextField
                  v-model="contactInformationData.phone1"
                  label="Phone1"
                  placeholder="Phone1"
                  :error-messages="errors.phone1"
                />
              </VCol>

              <!-- 👉 Phone2 -->
              <VCol cols="12">
                <AppTextField
                  v-model="contactInformationData.phone2"
                  label="Phone2"
                  placeholder="Phone2"
                  :error-messages="errors.phone2"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField
                  v-model="contactInformationData.email"
                  label="Email"
                  placeholder="Email"
                  :error-messages="errors.email"
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
