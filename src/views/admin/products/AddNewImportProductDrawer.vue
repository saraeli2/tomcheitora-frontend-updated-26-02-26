<script setup>
import { ref, nextTick } from 'vue'
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
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'updateData',
])

const authStore = useAuthStore()
const toast = useToast()

const isFormValid = ref(false)
const refForm = ref()
const file = ref(null)
const excelJson = ref([])

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
      name: row[0] || '',
      slug: row[1] || '',
      internalSKU: row[2] || '',
      productNumber: row[3] || '',
      externalSKU: row[4] || '',
      boxSKU: row[5] || '',
      model: row[6] || '',
      quantity: Number(row[7]) || 0,
      amount_in_package: Number(row[8]) || 0,
      packages_in_box: Number(row[9]) || 0,
      amount_of_boxes: Number(row[10]) || 0,
      currency: row[11] || '',
      unit_price: Number(row[12]) || 0,
      unit_price_including_vat: Number(row[13]) || 0,
      box_price: Number(row[14]) || 0,
      purchasePrice: Number(row[15]) || 0,
      salePrice: Number(row[16]) || 0,
      maxStock: Number(row[17]) || 0,
      remainingStock: Number(row[18]) || 0,

      manufacturer: row[19] || '',
      supplier: row[20] || '',
      certification: row[21] || '',
      packageType: row[22] || '',
      quantityType: row[23] || '',

      categories: row[24] || '',
      tags: row[25] || '',
      groups: row[26] || '',

      size: row[27] || '',
      color: row[28] || '',
      sleeveLength: row[29] || '',
      pocket: row[30] || '',
      fit: row[31] || '',
      pickupOrder: row[32] || '',
      orderNumber: row[33] || '',

      internalRemarks: row[34] || '',
      collectingOrder: row[35] || '',
      printingOrder: row[36] || '',
      remarks: row[37] || '',
      description: row[38] || '',
      image: row[39] || '',

      status: row[40] || 'Active'
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

  try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/products/import/xlsx`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${authStore.accessToken}`,
      },
    })

    toast.success('Products imported successfully!')
    emit('updateData')
    closeNavigationDrawer()
  } catch (err) {
    console.error(err)
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
      title="Import Products"
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
                  <label class="v-label mb-1 text-body-2">Upload Excel</label>
                </div>
                <VFileInput
                  accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  prepend-icon="tabler-upload"
                  @change="handleFileChange"
                />
              </VCol>

              <VCol cols="12" class="mt-4 flex gap-2">
                <VBtn type="submit" variant="contained" color="primary">Submit</VBtn>
                <VBtn variant="tonal" color="error" @click="closeNavigationDrawer">Cancel</VBtn>
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
