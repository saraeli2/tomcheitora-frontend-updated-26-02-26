<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  stations: {
    type: Object,
    required: true,
  },
  order: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'userData',
  'order',
  'stations',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const adminData = ref(structuredClone(toRaw(props.order.userDetail)))
const orderData = ref(structuredClone(toRaw(props.order)))

if(props.order._id) {
  if(props.order.stationID) {
    orderData.value.stationID = props.order.stationID._id
  }
}

const submit = async () => {
  try {
    const res = await $api(`/admin/orders/update-stations/${ props.order._id }`, {
      method: 'PATCH',
      body: {
        stationID: orderData.value.stationID,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    await nextTick(() => {
      emit('userData')
      emit('update:isDialogVisible', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      toast.success("Successfully updated")      
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

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDialogVisible', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const errors = ref({
  stationID: undefined,
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
          {{ $t('User Details') }}
        </h4>

        <VList class="card-list mt-2">
          <VListItem>
            <h6 class="text-h6">
              {{ $t('First Name') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.firstName }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Last Name') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.lastName }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Email') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.email }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Phone') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.phone }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('City') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.cityID ? adminData.cityID.nameHe : '' }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Flat No.') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.street }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('House Number') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.houseNumber }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Address') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.address }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Nationality') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.nationality }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Israeli ID Number') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.israeliIDNumber }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('Passport Number') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.passportNumber }}
              </span>
            </h6>
          </VListItem>

          <VListItem>
            <h6 class="text-h6">
              {{ $t('No. Of Kids') }}:
              <span class="text-body-1 d-inline-block">
                {{ adminData.noOfKids }}
              </span>
            </h6>
          </VListItem>
        </VList>

        <VDivider />

        <h4 class="text-h4 text-center mb-2">
          {{ $t('Add Station') }}
        </h4>
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
                v-model="orderData.stationID"
                :items="props.stations"
                :rules="[requiredValidator]"
                :placeholder="$t('Select Station')"
                :label="$t('Station')"
                :error-messages="errors.stationID"
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
  </VDialog>
</template>
