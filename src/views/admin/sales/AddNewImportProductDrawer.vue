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
  saleid: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'updateData',
  'update:isDrawerOpen',
  'userData',
  'sale',
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
      internalSKU: row[0] || '',
      name: row[1] || '',
      categories: row[2] || '',
      quanity: row[3] || 0,
      price: row[4] || 0,
      limitPerCustomer: row[5] || 0,
      maxUnit: row[6] || 0,
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

  formData.append('products', JSON.stringify(excelJson.value))
  formData.append('saleID', props.saleid)

  try {
    showLoader.value = true
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/sale-products/import/xlsx`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    })

    toast.success('Products imported successfully!')
    emit('updateData')
    emit('userData')
    emit('update:isDrawerOpen', false)
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
                  @change="handleFileChange"
                  :rules="[requiredValidator, rules]"
                />
              </VCol>

              <VCol cols="12" class="mt-4 flex gap-2">
                <VBtn type="submit" class="ml-3">{{ $t('Submit') }}</VBtn>
                <VBtn variant="tonal" color="error" @click="closeNavigationDrawer">{{ $t('Cancel') }}</VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>

  <VDialog
    v-model="showLoader"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
</template>

<style scoped>
.scrollable-content {
  overflow-y: auto;
}
</style>
