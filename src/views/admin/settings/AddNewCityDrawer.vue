<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  city: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      cityId: '',
      nameEn: '',
      nameHe: '',
      regionID: '',
      regionName: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'city',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const cityData = ref(structuredClone(toRaw(props.city)))

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
    if(props.city._id) {
      const res = await $api(`/admin/settings/cities/${ props.city._id }`, {
        method: 'PATCH',
        body: {
          cityId: cityData.value.cityId,
          nameEn: cityData.value.nameEn,
          nameHe: cityData.value.nameHe,
          regionID: cityData.value.regionID,
          regionName: cityData.value.regionName,
          status: cityData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/settings/cities`, {
        method: 'POST',
        body: {
          cityId: cityData.value.cityId,
          nameEn: cityData.value.nameEn,
          nameHe: cityData.value.nameHe,
          regionID: cityData.value.regionID,
          regionName: cityData.value.regionName,
          status: cityData.value.status,
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
      if(props.city._id) {
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
  cityId: undefined,
  nameEn: undefined,
  nameHe: undefined,
  regionID: undefined,
  regionName: undefined,
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
      v-if="props.city._id"
      :title="$t('Edit City')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create City')"
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
              <!-- 👉 ID -->
              <VCol cols="12">
                <AppTextField
                  v-model="cityData.cityId"
                  :rules="[numericValidator]"
                  :label="$t('ID')"
                  :placeholder="$t('ID')"
                  :error-messages="errors.cityId"
                />
              </VCol>
              
              <!-- 👉 Name (Hebrew) -->
              <VCol cols="12">
                <AppTextField
                  v-model="cityData.nameHe"
                  :rules="[requiredValidator]"
                  :label="$t('Name (Hebrew)')"
                  :placeholder="$t('Name (Hebrew)')"
                  :error-messages="errors.nameHe"
                />
              </VCol>
              
              <!-- 👉 Name (English) -->
              <VCol cols="12">
                <AppTextField
                  v-model="cityData.nameEn"
                  :label="$t('Name (English)')"
                  :placeholder="$t('Name (English)')"
                  :error-messages="errors.nameEn"
                />
              </VCol>
              
              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  v-model="cityData.regionID"
                  :rules="[numericValidator]"
                  :label="$t('Region ID')"
                  :placeholder="$t('Region ID')"
                  :error-messages="errors.regionID"
                />
              </VCol>

              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  v-model="cityData.regionName"
                  :label="$t('Region Name')"
                  :placeholder="$t('Region Name')"
                  :error-messages="errors.regionName"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="cityData.status"
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
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
