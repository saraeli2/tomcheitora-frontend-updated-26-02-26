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
    const res = await $api(`/users/${ props.user._id }/update-station`, {
      method: 'PATCH',
      body: {
        stationId: adminData.value.stationID,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    await nextTick(() => {
      authStore.updateStation(adminData.value.stationID)
      refForm.value?.resetValidation()
      window.location.href = '/sales'
      toast.success(t('Station has been updated successfully.'));

    })
  } catch (err) {
    
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
                  />
                </VCol>
              </VRow>

            <!-- 👉 Action Buttons -->
            
              <VBtn style="margin-top: 15px" type="submit">{{ $t('Save changes') }}</VBtn>
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
