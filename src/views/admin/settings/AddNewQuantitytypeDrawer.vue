<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  quantitytype: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      title: '',
      slug: '',
      status: 'Active',
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
  'quantitytype',
])

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const quantitytypeData = ref(structuredClone(toRaw(props.quantitytype)))

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
    if(props.quantitytype._id) {
      const res = await $api(`/admin/settings/quantitytypes/${ props.quantitytype._id }`, {
        method: 'PATCH',
        body: {
          title: quantitytypeData.value.title,
          slug: quantitytypeData.value.slug,
          status: quantitytypeData.value.status,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/settings/quantitytypes`, {
        method: 'POST',
        body: {
          title: quantitytypeData.value.title,
          slug: quantitytypeData.value.slug,
          status: quantitytypeData.value.status,
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
      if(props.quantitytype._id) {
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
  title: undefined,
  slug: undefined,
  status: undefined,
})

watch(() => quantitytypeData.value.title, val => {
  quantitytypeData.value.slug = val.toLowerCase().trim().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
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
      v-if="props.quantitytype._id"
      title="Edit Category"
      @cancel="closeNavigationDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      title="Add New Category"
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
              <!-- 👉 Title -->
              <VCol cols="12">
                <AppTextField
                  v-model="quantitytypeData.title"
                  :rules="[requiredValidator]"
                  label="Title"
                  placeholder="Title"
                  :error-messages="errors.title"
                />
              </VCol>

              <!-- 👉 Slug -->
              <VCol cols="12">
                <AppTextField
                  v-model="quantitytypeData.slug"
                  :rules="[requiredValidator]"
                  label="Slug"
                  placeholder="Slug"
                  :error-messages="errors.slug"
                />
              </VCol>

              <!-- 👉 status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="quantitytypeData.status"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'Active', title: 'Active' },
                    { value: 'Inactive', title: 'Inactive' },
                  ]"
                  placeholder="Select Status"
                  label="Status"
                  :error-messages="errors.status"
                />
              </VCol>
              
              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="error"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
