<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  distributionManagers: {
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
      distributionManagers: [],
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'distributionManagers',
  'userData',
  'station',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const stationData = ref(structuredClone(toRaw(props.station)))

if(props.station.distributionManagers.length > 0) {
  stationData.value.distributionManagers = props.station.distributionManagers.map(admin => admin._id)
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
          distributionManagers: stationData.value.distributionManagers,
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
          distributionManagers: stationData.value.distributionManagers,
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

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

const errors = ref({
  name: undefined,
  neighbourhood: undefined,
  status: undefined,
  cityName: undefined,
  street: undefined,
  houseNumber: undefined,
  distributionManagers: undefined,
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
      v-if="props.station._id"
      title="Edit Station"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Station"
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
              <!-- 👉 Admin -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="stationData.distributionManagers"
                  :items="props.distributionManagers"
                  placeholder="Select Distribution Manager"
                  label="Distribution Manager"
                  multiple
                  :error-messages="errors.distributionManagers"
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
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
