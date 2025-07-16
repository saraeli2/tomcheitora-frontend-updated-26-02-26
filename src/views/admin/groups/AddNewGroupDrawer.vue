<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  communities: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  cities: {
    type: Object,
    required: false,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: () => ([]),
  },
  group: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      saleID: '',
      type: 'Fixed',
      amount: '',
      status: 'Active',
      communities: [],
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'communities',
  'cities',
  'group',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const groupData = ref(structuredClone(toRaw(props.group)))
const cities = ref(structuredClone(toRaw(props.cities)))

if(props.group.communities.length > 0) {
  groupData.value.communities = props.group.communities.map(role => role._id)
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
    if(props.group._id) {
      const res = await $api(`/admin/groups/${ props.group._id }`, {
        method: 'PATCH',
        body: {
          name: groupData.value.name,
          saleID: groupData.value.saleID,
          type: groupData.value.type,
          amount: groupData.value.amount,
          status: groupData.value.status,
          communities: groupData.value.communities,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/groups`, {
        method: 'POST',
        body: {
          name: groupData.value.name,
          saleID: groupData.value.saleID,
          type: groupData.value.type,
          amount: groupData.value.amount,
          status: groupData.value.status,
          communities: groupData.value.communities,
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
      if(props.group._id) {
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
  saleID: undefined,
  type: undefined,
  amount: undefined,
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
      v-if="props.group._id"
      :title="$t('Edit Group')"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Group')"
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
              <!-- 👉 Role -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="groupData.communities"
                  :items="props.communities"
                  :placeholder="$t('Select Community')"
                  :label="$t('Community')"
                  multiple
                  clearable
                />
              </VCol>
              <!-- 👉 Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="groupData.name"
                  :rules="[requiredValidator]"
                  :label="$t('Name')"
                  :placeholder="$t('Name')"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- 👉 Sale ID -->
              <VCol cols="12">
                <AppTextField
                  v-model="groupData.saleID"
                  :rules="[requiredValidator]"
                  :label="$t('Sale ID')"
                  :placeholder="$t('Sale ID')"
                  :error-messages="errors.saleID"
                />
              </VCol>

              <!-- 👉 type -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="groupData.type"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'Fixed', title: 'Fixed' },
                    { value: 'Percentage', title: 'Percentage' },
                  ]"
                  :placeholder="$t('Select Type')"
                  :label="$t('Type')"
                  :error-messages="errors.type"
                />
              </VCol>

              <!-- 👉 Amount -->
              <VCol cols="12">
                <AppTextField
                  v-model="groupData.amount"
                  :rules="[requiredValidator, numericValidator]"
                  :label="$t('Amount')"
                  :placeholder="$t('Amount')"
                  :error-messages="errors.amount"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="groupData.status"
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
