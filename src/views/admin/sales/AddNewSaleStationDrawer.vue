<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  saleid: {
    type: String,
    required: true,
  },
  stations: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  saleStation: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      stationID: '',
      distributionDate: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'saleStation',
  'saleid',
  'stations',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const saleStationData = ref(structuredClone(toRaw(props.saleStation)))

if(props.saleStation._id) {
  if(props.saleStation.stationID) {
    saleStationData.value.stationID = props.saleStation.stationID._id
  }
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
    if(props.saleStation._id) {
      const res = await $api(`/admin/sale-stations/${ props.saleStation._id }`, {
        method: 'PATCH',
        body: {
          stationID: saleStationData.value.stationID,
          distributionDate: saleStationData.value.distributionDate,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/sale-stations`, {
        method: 'POST',
        body: {
          saleID: props.saleid,
          stationID: saleStationData.value.stationID,
          distributionDate: saleStationData.value.distributionDate,
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
      if(props.saleStation._id) {
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
  stationID: undefined,
  distributionDate: undefined,
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
      v-if="props.saleStation._id"
      :title="$t('Edit Sale Station')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Add Sale Station')"
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
              <!-- 👉 Station -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="saleStationData.stationID"
                  :items="props.stations"
                  :placeholder="$t('Select Station')"
                  :label="$t('Station')"
                  :error-messages="errors.stationID"
                  clearable
                />
              </VCol>

              <!-- 👉 Start Date -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="saleStationData.distributionDate"
                  :rules="[requiredValidator]"
                  :label="$t('Datetime of Distribution')"
                  :placeholder="$t('Datetime of Distribution')"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  :error-messages="errors.distributionDate"
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
