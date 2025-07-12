<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  countries: {
    type: Object,
    required: true,
  },
  cities: {
    type: Object,
    required: true,
  },
  supplier: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      businessID: '',
      countryID: '',
      cityID: '',
      street: '',
      houseNumber: null,
      remarks: '',
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
  'countries',
  'cities',
  'updateData',
  'supplier',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const supplierData = ref(structuredClone(toRaw(props.supplier)))

if(props.supplier._id) {
  if(props.supplier.countryID) {
    supplierData.value.countryID = props.supplier.countryID._id
  }
  
  if(props.supplier.cityID) {
    supplierData.value.cityID = props.supplier.cityID._id
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
    if(props.supplier._id) {
      const res = await $api(`/admin/suppliers/${ props.supplier._id }`, {
        method: 'PATCH',
        body: {
          name: supplierData.value.name,
          businessID: supplierData.value.businessID,
          countryID: supplierData.value.countryID ? supplierData.value.countryID : null,
          cityID: supplierData.value.cityID,
          street: supplierData.value.street,
          houseNumber: supplierData.value.houseNumber,
          remarks: supplierData.value.remarks,
          status: supplierData.value.status,
          contactInfo1: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo1._id,
            firstName: supplierData.value.contactInfo1.firstName,
            lastName: supplierData.value.contactInfo1.lastName,
            phone1: supplierData.value.contactInfo1.phone1,
            phone2: supplierData.value.contactInfo1.phone2,
            email: supplierData.value.contactInfo1.email,
          },
          contactInfo2: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo2._id,
            firstName: supplierData.value.contactInfo2.firstName,
            lastName: supplierData.value.contactInfo2.lastName,
            phone1: supplierData.value.contactInfo2.phone1,
            phone2: supplierData.value.contactInfo2.phone2,
            email: supplierData.value.contactInfo2.email,
          },
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/suppliers`, {
        method: 'POST',
        body: {
          name: supplierData.value.name,
          businessID: supplierData.value.businessID,
          countryID: supplierData.value.countryID ? supplierData.value.countryID : null,
          cityID: supplierData.value.cityID,
          street: supplierData.value.street,
          houseNumber: supplierData.value.houseNumber,
          remarks: supplierData.value.remarks,
          status: supplierData.value.status,
          contactInfo1: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo1._id,
            firstName: supplierData.value.contactInfo1.firstName,
            lastName: supplierData.value.contactInfo1.lastName,
            phone1: supplierData.value.contactInfo1.phone1,
            phone2: supplierData.value.contactInfo1.phone2,
            email: supplierData.value.contactInfo1.email,
          },
          contactInfo2: {
            // eslint-disable-next-line camelcase
            _id: supplierData.value.contactInfo2._id,
            firstName: supplierData.value.contactInfo2.firstName,
            lastName: supplierData.value.contactInfo2.lastName,
            phone1: supplierData.value.contactInfo2.phone1,
            phone2: supplierData.value.contactInfo2.phone2,
            email: supplierData.value.contactInfo2.email,
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
      if(props.supplier._id) {
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
  businessID: undefined,
  countryID: undefined,
  cityID: undefined,
  street: undefined,
  houseNumber: undefined,
  remarks: undefined,
  status: undefined,
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
          {{ props.supplier._id ? $t('Edit Supplier') : $t('Create Supplier') }}
        </h4>

        <VDivider />
        <!-- 👉 Form -->
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Country -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.countryID"
                :rules="[requiredValidator]"
                :items="props.countries"
                :label="$t('Country')"
                :placeholder="$t('Select Country')"
                :error-messages="errors.countryID"
                clearable
              />
            </VCol>

            <!-- 👉 Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.name"
                :rules="[requiredValidator]"
                :label="$t('Name')"
                :placeholder="$t('Name')"
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 Business ID -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.businessID"
                :rules="[requiredValidator]"
                :label="$t('Business ID')"
                :placeholder="$t('Business ID')"
                :error-messages="errors.businessID"
              />
            </VCol>

            <!-- 👉 City -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.cityID"
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
                v-model="supplierData.street"
                :label="$t('Street')"
                :placeholder="$t('Street')"
                :error-messages="errors.street"
              />
            </VCol>

            <!-- 👉 House Number -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.houseNumber"
                :label="$t('House Number')"
                :placeholder="$t('House Number')"
                :error-messages="errors.houseNumber"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="supplierData.status"
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
                v-model="supplierData.remarks"
                :label="$t('Remarks')"
                :placeholder="$t('Remarks')"
                :error-messages="errors.remarks"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 1') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo1.email"
                :label="$t('Email')"
                :placeholder="$t('Email')"
              />
            </VCol>

            <VDivider />

            <VCol cols="12">
              <h6 class="text-h6 my-6">
                {{ $t('Contact information 2') }}
              </h6>
            </VCol>

            <!-- 👉 First Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.firstName"
                :label="$t('First Name')"
                :placeholder="$t('First Name')"
              />
            </VCol>
            
            <!-- 👉 Last Name -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.lastName"
                :label="$t('Last Name')"
                :placeholder="$t('Last Name')"
              />
            </VCol>

            <!-- 👉 Phone1 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.phone1"
                :label="$t('Phone 1')"
                :placeholder="$t('Phone 1')"
              />
            </VCol>

            <!-- 👉 Phone2 -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.phone2"
                :label="$t('Phone 2')"
                :placeholder="$t('Phone 2')"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <AppTextField
                v-model="supplierData.contactInfo2.email"
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
