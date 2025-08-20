<script setup>
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

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

const onSubmit = async () => {
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
      refForm.value?.resetValidation()
      
      toast.success(t('Station has been updated successfully.'));
      
    })
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard>
        <VCardText>
          <VForm 
              ref="refForm"
              v-model="isFormValid"
              @submit.prevent="onSubmit"
            >
            <VCardText class="pt-0">
              <!-- 👉 Current Password -->
              <VRow>
                <VCol
                  cols="12"
                  md="6"
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
            </VCardText>

            <!-- 👉 Action Buttons -->
            <VCardText class="d-flex flex-wrap gap-4">
              <VBtn type="submit">{{ $t('Save changes') }}</VBtn>
            </VCardText>
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
