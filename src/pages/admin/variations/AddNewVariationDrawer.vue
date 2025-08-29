<script setup>
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { nextTick, ref, toRaw, reactive } from 'vue'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
  variation: {
    type: Object,
    required: false,
    default: () => ({
      _id: '',
      name: '',
      status: 'active',
      items: [], // variation items
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'variation-saved',
  'variation',
])

const toast = useToast()
const isFormValid = ref(false)
const refForm = ref()
const variationData = ref(structuredClone(toRaw(props.variation)))
const errors = reactive({ name: undefined, status: undefined })

// 👉 drawer close
const closeDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

// Variation items logic
const newItemName = ref('')
const addItem = () => {
  if (newItemName.value.trim() !== '') {
    variationData.value.items.push({ name: newItemName.value.trim() })
    newItemName.value = ''
  }
}
const removeItem = index => {
  variationData.value.items.splice(index, 1)
}

// submit logic
const submit = async () => {
  try {
    if (props.variation._id) {
      await $api(`/admin/variations/${props.variation._id}`, {
        method: 'PATCH',
        body: variationData.value,
        onResponseError({ response }) {
          Object.assign(errors, response._data.errors)
        },
      })
    } else {
      await $api(`/admin/variations`, {
        method: 'POST',
        body: variationData.value,
        onResponseError({ response }) {
          Object.assign(errors, response._data.errors)
        },
      })
    }

    await nextTick(() => {
      emit('variation-saved')
      emit('update:isDrawerOpen', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      toast.success(props.variation._id ? 'Variation updated successfully' : 'Variation created successfully')
    })
  } catch (err) {
    console.log(err)
  }
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) submit()
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
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
    <!-- Drawer Header -->
    <AppDrawerHeaderSection
      v-if="props.variation._id"
      :title="$t('Edit Variation')"
      @cancel="closeDrawer"
    />
    <AppDrawerHeaderSection
      v-else
      :title="$t('Create Variation')"
      @cancel="closeDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <VForm ref="refForm" v-model="isFormValid" @submit.prevent="onSubmit">
            <VRow>
              <!-- Variation Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="variationData.name"
                  :rules="[requiredValidator]"
                  :label="$t('Variation Name')"
                  :placeholder="$t('Enter variation name')"
                  :error-messages="errors.name"
                />
              </VCol>

              <!-- Status -->
              <VCol cols="12">
                <AppAutocomplete
                  v-model="variationData.status"
                  :rules="[requiredValidator]"
                  :items="[
                    { value: 'active', title: 'Active' },
                    { value: 'inactive', title: 'Inactive' },
                  ]"
                  :placeholder="$t('Select Status')"
                  :label="$t('Status')"
                  :error-messages="errors.status"
                />
              </VCol>

              <!-- Variation Items -->
              <VCol cols="12">
                <h6>{{ $t('Variation Items') }}</h6>
                <VRow class="mb-2" v-for="(item, index) in variationData.items" :key="index">
                  <VCol cols="8">
                    <AppTextField v-model="item.name" :placeholder="$t('Item Name')" />
                  </VCol>
                  <VCol cols="4">
                    <VBtn color="error" @click="removeItem(index)">
                      {{ $t('Remove') }}
                    </VBtn>
                  </VCol>
                </VRow>

                <VRow>
                  <VCol cols="8">
                    <AppTextField v-model="newItemName" :placeholder="$t('New Item Name')" />
                  </VCol>
                  <VCol cols="4">
                    <VBtn color="primary" @click="addItem">{{ $t('Add Item') }}</VBtn>
                  </VCol>
                </VRow>
              </VCol>

              <!-- Submit and Cancel -->
              <VCol cols="12">
                <VBtn type="submit" class="me-3">{{ $t('Submit') }}</VBtn>
                <VBtn type="reset" variant="tonal" color="error" @click="closeDrawer">{{ $t('Cancel') }}</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
