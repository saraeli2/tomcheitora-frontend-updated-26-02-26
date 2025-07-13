<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  cities: {
    type: Object,
    required: true,
  },
  community: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      cityID: '',
      street: '',
      houseNumber: '',
      remarks: '',
      website: '',
      discountFixed: '',
      discountPercentage: '',
      status: 'Active',
      contactInfo1: {
      // eslint-disable-next-line camelcase
        _id: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        email: '',
      },
      contactInfo2: {
      // eslint-disable-next-line camelcase
        _id: '',
        firstName: '',
        lastName: '',
        phone1: '',
        phone2: '',
        email: '',
      },
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'updateData',
  'cities',
  'community',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const communityData = ref(structuredClone(toRaw(props.community)))

if(props.community._id) {
  if(props.community.cityID) {
    communityData.value.cityID = props.community.cityID._id
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
    if(props.community._id) {
      const res = await $api(`/admin/communities/${ props.community._id }`, {
        method: 'PATCH',
        body: {
          name: communityData.value.name,
          cityID: communityData.value.cityID,
          street: communityData.value.street,
          houseNumber: communityData.value.houseNumber,
          website: communityData.value.website,
          discountPercentage: communityData.value.discountPercentage,
          discountFixed: communityData.value.discountFixed,
          remarks: communityData.value.remarks,
          status: communityData.value.status,
          contactInfo1: {
            // eslint-disable-next-line camelcase
            _id: communityData.value.contactInfo1._id,
            firstName: communityData.value.contactInfo1.firstName,
            lastName: communityData.value.contactInfo1.lastName,
            phone1: communityData.value.contactInfo1.phone1,
            phone2: communityData.value.contactInfo1.phone2,
            email: communityData.value.contactInfo1.email,
          },
          contactInfo2: {
            // eslint-disable-next-line camelcase
            _id: communityData.value.contactInfo2._id,
            firstName: communityData.value.contactInfo2.firstName,
            lastName: communityData.value.contactInfo2.lastName,
            phone1: communityData.value.contactInfo2.phone1,
            phone2: communityData.value.contactInfo2.phone2,
            email: communityData.value.contactInfo2.email,
          },
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/communities`, {
        method: 'POST',
        body: {
          name: communityData.value.name,
          cityID: communityData.value.cityID,
          street: communityData.value.street,
          houseNumber: communityData.value.houseNumber,
          website: communityData.value.website,
          discountPercentage: communityData.value.discountPercentage,
          discountFixed: communityData.value.discountFixed,
          remarks: communityData.value.remarks,
          status: communityData.value.status,
          contactInfo1: {
            // eslint-disable-next-line camelcase
            firstName: communityData.value.contactInfo1.firstName,
            lastName: communityData.value.contactInfo1.lastName,
            phone1: communityData.value.contactInfo1.phone1,
            phone2: communityData.value.contactInfo1.phone2,
            email: communityData.value.contactInfo1.email,
          },
          contactInfo2: {
            // eslint-disable-next-line camelcase
            firstName: communityData.value.contactInfo2.firstName,
            lastName: communityData.value.contactInfo2.lastName,
            phone1: communityData.value.contactInfo2.phone1,
            phone2: communityData.value.contactInfo2.phone2,
            email: communityData.value.contactInfo2.email,
          },
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
      if(props.community._id) {
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

const errors = ref({
  name: undefined,
  cityID: undefined,
  street: undefined,
  houseNumber: undefined,
  website: undefined,
  discountPercentage: undefined,
  discountFixed: undefined,
  remarks: undefined,
  status: undefined,
})

const onReset = () => {
  emit('update:isDialogVisible', false)
  refForm.value?.reset()
}
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
          {{ props.community._id ? $t('Edit Community') : $t('Create Community') }}
        </h4>

        <VDivider />
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
                v-model="communityData.name"
                :rules="[requiredValidator]"
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="communityData.cityID"
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
                v-model="communityData.street"
                :label="$t('Street')"
                :placeholder="$t('Street')"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.houseNumber"
                :label="$t('House Number')"
                :placeholder="$t('House Number')"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 Website -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.website"
                :label="$t('Website')"
                :placeholder="$t('Website')"
                :error-messages="errors.website"
              />
            </VCol>

            <!-- 👉 Discount in % -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.discountPercentage"
                :rules="[numericValidator]"
                :label="$t('Discount in %')"
                :placeholder="$t('Discount in %')"
                :error-messages="errors.discountPercentage"
              />
            </VCol>

            <!-- 👉 Discount Fixed Number -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.discountFixed"
                :rules="[numericValidator]"
                :label="$t('Discount Fixed Number')"
                :placeholder="$t('Discount Fixed Number')"
                :error-messages="errors.discountFixed"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="communityData.status"
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

            <!-- 👉 Remarks -->
            <VCol cols="12">
              <AppTextarea
                v-model="communityData.remarks"
                :label="$t('Remarks')"
                :placeholder="$t('Remarks')"
                :error-messages="errors.remarks"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 1 / 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo1.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo1.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo1.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo1.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo1.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 2 / 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo2.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo2.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo2.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo2.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="communityData.contactInfo2.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
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
