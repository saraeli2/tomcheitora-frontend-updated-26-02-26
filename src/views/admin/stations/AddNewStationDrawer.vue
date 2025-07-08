<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
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
  'update:isDrawerOpen',
  'admins',
  'userData',
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
  admins: undefined,
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
      :title="$t('Edit Station')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Station')"
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
                  v-model="stationData.admins"
                  :items="props.admins"
                  :placeholder="$t('Select Distribution Manager')"
                  :label="$t('Distribution Manager')"
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
                  :label="$t('Name')"
                  :placeholder="$t('Name')"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Neighbourhood -->
              <VCol cols="12">
                <AppTextField
                  v-model="stationData.neighbourhood"
                  :rules="[requiredValidator]"
                  :label="$t('Neighbourhood')"
                  :placeholder="$t('Neighbourhood')"
                  :error-messages="errors.neighbourhood"
                />
              </VCol>

              <!-- 👉 City ID -->
              <VCol cols="12">
                <AppTextField
                  v-model="stationData.cityId"
                  :label="$t('City ID')"
                  :placeholder="$t('City ID')"
                  :error-messages="errors.cityId"
                />
              </VCol>

              <!-- 👉 City Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="stationData.cityName"
                  :label="$t('City Name')"
                  :placeholder="$t('City Name')"
                  :error-messages="errors.cityName"
                />
              </VCol>

              <!-- 👉 Street -->
              <VCol cols="12">
                <AppTextField
                  v-model="stationData.street"
                  :label="$t('Street')"
                  :placeholder="$t('Street')"
                  :error-messages="errors.street"
                />
              </VCol>

              <!-- 👉 House Number -->
              <VCol cols="12">
                <AppTextField
                  v-model="stationData.houseNumber"
                  :label="$t('House Number')"
                  :placeholder="$t('House Number')"
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
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
