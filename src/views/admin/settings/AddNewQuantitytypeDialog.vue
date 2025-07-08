<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  quantitytype: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      quantity: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'updateData',
  'quantitytype',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const quantitytypeData = ref(structuredClone(toRaw(props.quantitytype)))

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
    if(props.quantitytype._id) {
      const res = await $api(`/admin/settings/quantitytypes/${ props.quantitytype._id }`, {
        method: 'PATCH',
        body: {
          name: quantitytypeData.value.name,
          quantity: quantitytypeData.value.quantity,
          status: quantitytypeData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/settings/quantitytypes`, {
        method: 'POST',
        body: {
          name: quantitytypeData.value.name,
          quantity: quantitytypeData.value.quantity,
          status: quantitytypeData.value.status,
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
      if(props.quantitytype._id) {
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
  quantity: undefined,
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
          {{ props.quantitytype._id ? $t('Edit Quantity Type') : $t('Create Quantity Type') }}
        </h4>

        <VDivider />
        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 name -->
            <VCol cols="12">
              <AppTextField
                v-model="quantitytypeData.name"
                :rules="[requiredValidator]"
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>
            <!-- 👉 quantity -->
            <VCol cols="12">
              <AppTextField
                v-model="quantitytypeData.quantity"
                :rules="[requiredValidator, numericValidator]"
                :label="$t('Quantity')"
                :placeholder="$t('Quantity')"
                :error-messages="errors.quantity"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="quantitytypeData.status"
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
