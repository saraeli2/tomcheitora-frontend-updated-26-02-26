<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  packagetype: {
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
  'packagetype',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const packagetypeData = ref(structuredClone(toRaw(props.packagetype)))

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {
  try {
    if(props.packagetype._id) {
      const res = await $api(`/admin/settings/packagetypes/${ props.packagetype._id }`, {
        method: 'PATCH',
        body: {
          name: packagetypeData.value.name,
          status: packagetypeData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/settings/packagetypes`, {
        method: 'POST',
        body: {
          name: packagetypeData.value.name,
          status: packagetypeData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('updateData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.packagetype._id) {
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

const errors = ref({
  name: undefined,
  status: undefined,
})

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
          {{ props.packagetype._id ? 'Edit' : 'Create' }} Package Type
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
                v-model="packagetypeData.name"
                :rules="[requiredValidator]"
                label="Name"
                placeholder="Name"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="packagetypeData.status"
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
  </VDialog>
</template>
