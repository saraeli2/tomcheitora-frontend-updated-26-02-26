<script setup>
import { ref, nextTick } from 'vue'
import { useAuthStore } from '@/stores'
import axios from 'axios'
import { useToast } from 'vue-toastification'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import * as XLSX from 'xlsx'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'updateData',
])

const { t } = useI18n()

const authStore = useAuthStore()
const toast = useToast()
const showLoader = ref(false)

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
    file.value = null
    excelJson.value = []
  })
}

const handleFileChange = async event => {
  const { files } = event.target
  if (!files || !files.length) return

  const selectedFile = files[0]
  const fileExtension = selectedFile.name.split('.').pop()

  if (!['xlsx', 'xls'].includes(fileExtension)) {
    toast.error('Invalid file format. Please upload XLSX or XLS.')
    
    return
  }

  const reader = new FileReader()

  reader.onload = e => {
    const data = new Uint8Array(e.target.result)
    const workbook = XLSX.read(data, { type: 'array' })
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]

    const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

    if (!rows.length) return
    
    // Convert rows into product objects (skip headers, index-based)
    excelJson.value = rows.slice(1).map(row => ({
      phone: row[3] || '',
      email: row[4] || '',
      total: Number(row[5]) || 0,
      confirmation: row[8] || '',
      lastNum: row[9] || '',
      transactionId: row[19] || '',
      voucherNumber: row[20] || '',
    }))
  }
  reader.readAsArrayBuffer(selectedFile)
}

const submit = async () => {

  if (!excelJson.value.length) {
    toast.warning('No products found in the file.')
    
    return
  }

  const formData = new FormData()

  formData.append('transactions', JSON.stringify(excelJson.value))

  try {
    showLoader.value = true
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/transactions/import/xlsx`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    })

    toast.success('Products imported successfully!')
    emit('updateData')
    closeNavigationDrawer()
    showLoader.value = false
  } catch (err) {
    console.error(err)
    showLoader.value = false
    toast.error(err.response?.data?.message || 'Failed to import products.')
  }
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) submit()
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
    <AppDrawerHeaderSection
      :title="$t('Import Products')"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol cols="12">
                <div class="app-picker-field">
                  <label class="v-label mb-1 text-body-2">{{ $t('Upload Excel') }}</label>
                </div>
                <VFileInput
                  accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  prepend-icon="tabler-upload"
                  :rules="[requiredValidator, rules]"
                  @change="handleFileChange"
                />
              </VCol>

              <VCol
                cols="12"
                class="mt-4 flex gap-2"
              >
                <VBtn type="submit">
                  {{ $t('Submit') }}
                </VBtn>
                <VBtn
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

<style scoped>
.scrollable-content {
  overflow-y: auto;
}
</style>
