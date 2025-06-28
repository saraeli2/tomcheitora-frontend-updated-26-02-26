<script setup>
import { useToast } from 'vue-toastification'
import { VForm } from 'vuetify/components/VForm'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  permissions: {
    type: Object,
    required: true,
  },
  role: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
      name: '',
      modules: '',
      redirectURL: '',
      description: '',
      status: 'Active',
      permissions: [],
    }),
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'update:permissions',
  'update:role',
  'userData',
])

const errors = ref({
  role: undefined,
  description: undefined,
  modules: undefined,
  redirectURL: undefined,
  status: undefined,
})

const toast = useToast()

const roleData = ref(structuredClone(toRaw(props.role)))
const permissionData = ref(structuredClone(toRaw(props.role.permissions)))
const groupselectData = ref(structuredClone(toRaw(props.groupselects)))

const isFormValid = ref(false)
const refForm = ref()
const isSelectAll = ref(false)

const isIndeterminate = computed(() => permissionData.value.length > 0 && permissionData.value.length < props.permissions.length)

watch(isIndeterminate, () => {
  if (!isIndeterminate.value)
    isSelectAll.value = false
})
watch(permissionData, () => {
  if (props.permissions.length === permissionData.value.length)
    isSelectAll.value = true
}, { deep: true })

watch(isSelectAll, val => {
  var checkedval = []
  if (val) {
    props.permissions.forEach(category => {
      const key = Object.keys(category)[0]
      const permissions = category[key]

      permissions.forEach(permission => {
        checkedval.push(permission._id)
      })
    })
  }

  permissionData.value = checkedval
})

const submit = async () => {
  try {
    if(props.role._id) {
      const res = await $api(`/admin/roles/${ props.role._id }`, {
        method: 'PATCH',
        body: {
          name: roleData.value.name,
          description: roleData.value.description,
          modules: roleData.value.modules,
          redirectURL: roleData.value.redirectURL,
          status: roleData.value.status,
          permissions: permissionData.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    } else {
      const res = await $api(`/admin/roles`, {
        method: 'POST',
        body: {
          name: roleData.value.name,
          description: roleData.value.description,
          modules: roleData.value.modules,
          redirectURL: roleData.value.redirectURL,
          status: roleData.value.status,
          permissions: permissionData.value,
        },
        onResponseError({ response }) {
          errors.value = response._data.errors
        },
      })
    }

    await nextTick(() => {
      emit('userData')
      emit('update:isDialogVisible', false)
      isSelectAll.value = false
      refForm.value?.reset()
      refForm.value?.resetValidation()
      if(props.role._id) {
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
  isSelectAll.value = false
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
          {{ props.role._id ? 'Edit' : 'Add New' }} Role
        </h4>
        <p class="text-body-1 text-center mb-6">
          Set Role Permissions
        </p>
        
        <VForm 
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Role -->
            <VCol cols="12">
              <AppTextField
                v-model="roleData.name"
                :rules="[requiredValidator]"
                label="Name"
                placeholder=""
                :error-messages="errors.name"
              />
            </VCol>

            <!-- 👉 modules -->
            <VCol cols="12">
              <AppTextField
                v-model="roleData.modules"
                :rules="[requiredValidator]"
                label="Module"
                placeholder=""
                :error-messages="errors.modules"
              />
            </VCol>

            <!-- 👉 redirectURL -->
            <VCol cols="12">
              <AppTextField
                v-model="roleData.redirectURL"
                label="Redirect URL"
                placeholder=""
                :error-messages="errors.redirectURL"
              />
            </VCol>

            <!-- 👉 description -->
            <VCol cols="12">
              <AppTextarea
                v-model="roleData.description"
                label="Description"
                placeholder=""
                :rules="[requiredValidator]"
                :error-messages="errors.description"
              />
            </VCol>

            <!-- 👉 status -->
            <VCol cols="12">
              <AppAutocomplete
                v-model="roleData.status"
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

            <VCol cols="12">
              <h5 class="text-h5 my-6">
                Permissions
              </h5>
                
              <VCol cols="12">
                <VCheckbox
                  v-model="isSelectAll"
                  label="Select All"
                />
              </VCol>

              <VCol
                v-for="(mainKey, index) in props.permissions"
                :key="index"
                cols="12"
              >
                <template
                  v-for="(options, secondIndex) in mainKey"
                  :key="secondIndex"
                >
                  <h5 class="text-h5 my-6">
                    {{ secondIndex }}
                  </h5>

                  <VRow class="ma-0 mt-n1">
                    <VCol
                      v-for="(option, key) in options"
                      :key="key"
                      cols="3"
                    >
                      <VCheckbox
                        v-model="permissionData"
                        :value="option._id"
                        :label="option.name"
                      />
                    </VCol>
                  </VRow>
                </template>
              </VCol>
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
                @click="onReset"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
