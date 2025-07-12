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
  cities: {
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
      cityID: '',
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
  'cities',
  'updateData',
  'station',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const stationData = ref(structuredClone(toRaw(props.station)))

if(props.station._id) {
  if(props.station.admins.length > 0) {
    stationData.value.admins = props.station.admins.map(admin => admin._id)
  }
  
  if(props.station.cityID) {
    stationData.value.cityID = props.station.cityID._id
  }
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
          cityID: stationData.value.cityID,
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
          cityID: stationData.value.cityID,
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
          {{ props.station._id ? $t('Edit Station') : $t('Create Station') }}
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

            <!-- 👉 City -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="stationData.cityID"
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
  </VDialog>
</template>
