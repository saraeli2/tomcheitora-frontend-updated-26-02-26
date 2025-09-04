<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  sale: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      startDate: '',
      endDate: '',
      status: 'Pending',
      deliveryCharge: '',
      firstReminder: '',
      secondReminder: '',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'sale',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const saleData = ref(structuredClone(toRaw(props.sale)))

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
    if(props.sale._id) {
      const res = await $api(`/admin/sales/${ props.sale._id }`, {
        method: 'PATCH',
        body: {
          name: saleData.value.name,
          startDate: saleData.value.startDate,
          endDate: saleData.value.endDate,
          status: saleData.value.status,
          deliveryCharge: saleData.value.deliveryCharge,
          firstReminder: saleData.value.firstReminder,
          secondReminder: saleData.value.secondReminder,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/sales`, {
        method: 'POST',
        body: {
          name: saleData.value.name,
          startDate: saleData.value.startDate,
          endDate: saleData.value.endDate,
          status: saleData.value.status,
          deliveryCharge: saleData.value.deliveryCharge,
          firstReminder: saleData.value.firstReminder,
          secondReminder: saleData.value.secondReminder,
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
      if(props.sale._id) {
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
  startDate: undefined,
  endDate: undefined,
  status: undefined,
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
      v-if="props.sale._id"
      :title="$t('Edit Sale')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Sale')"
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
              <!-- 👉 Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="saleData.name"
                  :rules="[requiredValidator]"
                  :label="$t('Name')"
                  :placeholder="$t('Name')"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Start Date -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="saleData.startDate"
                  :rules="[requiredValidator]"
                  :label="$t('Start Date')"
                  :placeholder="$t('Start Date')"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  :error-messages="errors.startDate"
                />
              </VCol>

              <!-- 👉 End Date -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="saleData.endDate"
                  :rules="[requiredValidator]"
                  :label="$t('End Date')"
                  :placeholder="$t('End Date')"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  :error-messages="errors.endDate"
                />
              </VCol>

              <!-- 👉 End Date -->
              <VCol cols="12">
                <AppTextField
                  v-model="saleData.deliveryCharge"
                  :label="$t('Delivery Charge')"
                  :placeholder="$t('Delivery Charge')"
                  :error-messages="errors.deliveryCharge"
                />
              </VCol>

              <!-- 👉 End Date -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="saleData.firstReminder"
                  :label="$t('First Reminder')"
                  :placeholder="$t('First Reminder')"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  :error-messages="errors.firstReminder"
                />
              </VCol>

              <!-- 👉 End Date -->
              <VCol cols="12">
                <AppDateTimePicker
                  v-model="saleData.secondReminder"
                  :label="$t('Second Reminder')"
                  :placeholder="$t('Second Reminder')"
                  :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
                  :error-messages="errors.firstReminder"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="saleData.status"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'Pending', title: 'Pending' },
                    { value: 'Active', title: 'Active' },
                    { value: 'Closed', title: 'Closed' },
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
