<script setup>
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'


const props = defineProps({
  stations: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      stationID: '',
    }),
  },
})


const emit = defineEmits(['update:user', 'station-success'])

const authStore = useAuthStore()

const { t } = useI18n()

const errors = ref({
  stationID: undefined,
})

const toast = useToast()
const adminData = ref(structuredClone(toRaw(props.user)))
const isFormValid = ref(false)
const refForm = ref()

//console.log(props.user.stationID)

if(props.user._id && props.user.stationId) {
  adminData.value.stationID = props.user.stationID
}

const onSubmitPopup = async () => {
  try {
    const response = await $api(`/users/${ props.user._id }/update-station`, {
      method: 'PATCH',
      body: {
        stationId: adminData.value.stationID,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    // ✅ update store / reset form here
    await authStore.updateStationId(adminData.value.stationID)

    setTimeout(() => {
      emit('update:user', response)
      emit('station-success', response)
    }, 1000)

    // ✅ emit events to parent
    

    toast.success(t('Station has been updated successfully.'))

  } catch (err) {
    console.error('Failed to update station:', err)
  }
}
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard>
        <VCardTitle class="text-h6" style="margin-bottom: 15px">
          {{ $t('Update your station') }}
        </VCardTitle>
        <VCardText>
          <VForm 
              ref="refForm"
              v-model="isFormValid"
              @submit.prevent="onSubmitPopup"
            >
            
              <!-- 👉 Current Password -->
              <VRow>
                <VCol
                  cols="12"
                  md="12"
                >
                  <!-- 👉 current password -->
                  <AppAutocomplete
                    v-model="adminData.stationID"
                    :items="stations"
                    :label="$t('Distribution Station')"
                    :placeholder="$t('Select Station')"
                    :error-messages="errors.stationID"
                    clearable
                    :rules="[requiredValidator]"
                  />
                </VCol>
              </VRow>

            <!-- 👉 Action Buttons -->
            
              <VBtn :disabled="!adminData.stationID" style="margin-top: 15px" type="submit">{{ $t('Save changes') }}</VBtn>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}

.server-close-btn {
  inset-inline-end: 0.5rem;
}
</style>
