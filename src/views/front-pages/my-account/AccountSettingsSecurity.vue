<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  user: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
    }),
  },
})

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const adminData = ref(structuredClone(toRaw(props.user)))
const password = ref('')

const passwordRequirements = [
  'נא להזין סיסמא באורך 8 תוים לפחות שמכילה',
  'לפחות אות אחת',
  'מספר אחד',
  'תו מיוחד מהרשימה - ^ % $ # @ ! *',
]

const errors = ref({
  password: undefined,
  confirmPassword: undefined,
})

const onSubmit = async () => {
  try {
    const res = await $api(`/users/${ props.user._id }/update/password`, {
      method: 'PATCH',
      body: {
        confirmPassword: confirmPassword.value,
        password: password.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    await nextTick(() => {
      refForm.value?.reset()
      refForm.value?.resetValidation()
      
      toast.success("Successfully reset password")
      
    })
  } catch (err) {
    console.log(err)
  }
}

const isOneTimePasswordDialogVisible = ref(false)
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard :title="$t('Change Password')">
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
                <AppTextField
                  v-model="password"
                  :label="$t('Password')"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <AppTextField
                  v-model="confirmPassword"
                  :label="$t('Confirm Password')"
                  :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  :error-messages="errors.password_confirmation"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <h6 class="text-h6 text-medium-emphasis mb-4">
              {{ $t('Password Requirements') }}:
            </h6>

            <VList class="card-list">
              <VListItem
                v-for="item in passwordRequirements"
                :key="item"
                :title="item"
                class="text-medium-emphasis"
              >
                <template #prepend>
                  <VIcon
                    size="10"
                    icon="tabler-circle-filled"
                  />
                </template>
              </VListItem>
            </VList>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn type="submit">{{ $t('Save changes') }}</VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->

  </VRow>

  <!-- SECTION Enable One time password -->
  <TwoFactorAuthDialog v-model:is-dialog-visible="isOneTimePasswordDialogVisible" />
  <!-- !SECTION -->
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}

.server-close-btn {
  inset-inline-end: 0.5rem;
}
</style>
