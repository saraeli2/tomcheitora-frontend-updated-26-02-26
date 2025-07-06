<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  admins: {
    type: Object,
    required: true,
  },
  station: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      neighbourhood: '',
      cityId: '',
      cityName: '',
      street: '',
      houseNumber: '',
      status: 'Active',
      admins: [],
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'admins',
  'updateData',
  'station',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const stationData = ref(structuredClone(toRaw(props.station)))

if(props.station.admins.length > 0) {
  stationData.value.admins = props.station.admins.map(admin => admin._id)
}

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
    if(props.station._id) {
      const res = await $api(`/admin/stations/${ props.station._id }`, {
        method: 'PATCH',
        body: {
          name: stationData.value.name,
          neighbourhood: stationData.value.neighbourhood,
          cityId: stationData.value.cityId,
          cityName: stationData.value.cityName,
          street: stationData.value.street,
          houseNumber: stationData.value.houseNumber,
          status: stationData.value.status,
          admins: stationData.value.admins,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/stations`, {
        method: 'POST',
        body: {
          name: stationData.value.name,
          neighbourhood: stationData.value.neighbourhood,
          cityId: stationData.value.cityId,
          cityName: stationData.value.cityName,
          street: stationData.value.street,
          houseNumber: stationData.value.houseNumber,
          status: stationData.value.status,
          admins: stationData.value.admins,
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
      if(props.station._id) {
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

const onReset = () => {
  emit('update:isDialogVisible', false)
  refForm.value?.reset()
}

const errors = ref({
  name: undefined,
  neighbourhood: undefined,
  status: undefined,
  cityName: undefined,
  street: undefined,
  houseNumber: undefined,
  admins: undefined,
})
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
          {{ props.station._id ? 'Edit' : 'Create' }} Station
        </h4>

        <VDivider />
        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Admin -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="stationData.admins"
                :items="props.admins"
                placeholder="Select Admin"
                label="Admin"
                multiple
                :error-messages="errors.admins"
                clearable
              />
            </VCol>

            <!-- 👉 Name -->
            <VCol cols="12">
              <AppTextField
                v-model="stationData.name"
                :rules="[requiredValidator]"
                label="Name"
                placeholder="Name"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 Neighbourhood -->
            <VCol cols="12">
              <AppTextField
                v-model="stationData.neighbourhood"
                :rules="[requiredValidator]"
                label="Neighbourhood"
                placeholder="Neighbourhood"
                :error-messages="errors.neighbourhood"
              />
            </VCol>

            <!-- 👉 City ID -->
            <VCol cols="12">
              <AppTextField
                v-model="stationData.cityId"
                label="City ID"
                placeholder="City ID"
                :error-messages="errors.cityId"
              />
            </VCol>

            <!-- 👉 City Name -->
            <VCol cols="12">
              <AppTextField
                v-model="stationData.cityName"
                label="City Name"
                placeholder="City Name"
                :error-messages="errors.cityName"
              />
            </VCol>

            <!-- 👉 Street -->
            <VCol cols="12">
              <AppTextField
                v-model="stationData.street"
                label="Street"
                placeholder="Street"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="stationData.houseNumber"
                label="House Number"
                placeholder="House Number"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="stationData.status"
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
