<script setup>
import { useAuthStore } from '@/stores'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import * as XLSX from 'xlsx'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
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
    }),
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'updateData',
  'parent',
  'category',
])

const authStore = useAuthStore()

const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const file = ref(null)
const excelJson = ref([])
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 2000000 || 'Avatar size should be less than 2 MB!']

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const submit = async () => {

  const formData = new FormData()

  formData.append('users', JSON.stringify(excelJson.value))

  const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/communities/${ props.community._id }/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${authStore.accessToken}`,
    },
  }).then(async response => {

    await nextTick(() => {
      emit('updateData')
      emit('update:isDrawerOpen', false)
      refForm.value?.reset()
      refForm.value?.resetValidation()
      toast.success("Successfully updated")
    })
  })
    .catch(e => {
      errors.value = e.response.data.errors
    })
}

const errors = ref({
  file: undefined,
})

const handleFileChange = async file => {
  const { files } = file.target
  if (files && files.length) {
    const selectedFile = files[0]
    const fileExtension = selectedFile.name.split('.').pop()

    // If Excel file
    if (['xlsx', 'xls'].includes(fileExtension)) {
      const reader = new FileReader()

      reader.onload = e => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })

        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]

        excelJson.value = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

        // Convert rows into user objects (assuming index-based fields)
        excelJson.value = excelJson.value.slice(1).map(row => ({
          firstName: row[0] ? row[0] : '',
          lastName: row[1] ? row[1] : '',
          israeliIDNumber: row[2] ? row[2] : '',
          address: row[3] ? row[3] : '',
          houseNumber: row[4] ? row[4] : '',
          street: row[5] ? row[5] : '',
          city: row[6] ? row[6] : '',
          phone: row[7] ? row[7] : '',
          noOfKids: row[8] ? row[8] : 0,
          email: row[9] ? row[9] : 0,
        }))
        console.log('Excel JSON:', excelJson.value)
      }
      reader.readAsArrayBuffer(selectedFile)
    }
  }
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
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
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      :title="$t('Import Users')"
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
              <!-- 👉 image -->
              <VCol cols="12">
                <div class="app-picker-field">
                  <label class="v-label mb-1 text-body-2">{{ $t('Upload Excel') }}</label>
                </div>
                <VFileInput
                  :rules="[requiredValidator, rules]"
                  accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  prepend-icon="tabler-camera"
                  @change="handleFileChange"
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
