<script setup>
import axios from 'axios'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-sale-orders'],
    subject: ['Order'],
    title: 'Product Reports',
  },
})

import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

const selectedSale = ref(props.saleid)
const showLoader = ref(false)
const selectedProducts = ref([])

const commonsync = await $api('/admin/products/respond-with/extra-options', {
  query: {
    sale: selectedSale.value,
  },
}).catch(err => console.log(err))

const productOptions = computed(() => commonsync.productOptions)

const products = productOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const {
  data: productReportData,
  execute: fetchProductReport,
  loading: productReportLoading,
} = useApi(createUrl('/admin/reports/product-report', {
  query: {
    sale: selectedSale,
    products: selectedProducts,
  },
}))

const productHeaders = computed(() => (productReportData.value || {}).fields || [])
const productRows = computed(() => (productReportData.value || {}).data || [])

watch(productReportLoading, val => {
  showLoader.value = val
})

const exportUrl = computed(() => {
  let url = `${import.meta.env.VITE_API_BASE_URL}/admin/reports/product-report/export?`

  if (selectedProducts.value?.length) {
    selectedProducts.value.forEach((id, index) => {
      url += `products=${id}${index < selectedProducts.value.length - 1 ? '&' : ''}`
    })
  }

  if (selectedSale.value) {
    url += (url.endsWith('?') ? '' : '&') + `sale=${selectedSale.value}`
  }

  return url
})

// Function to download CSV
const exportReport = async () => {
  try {
    const response = await axios.get(exportUrl.value, {
      headers: {
        Authorization: `Bearer ${authStore.accessToken}`,
      },
      responseType: 'blob', // ensures CSV is received as Blob
    })

    const url = window.URL.createObjectURL(response.data)
    const link = document.createElement('a')

    link.href = url
    link.setAttribute('download', 'product-report.csv')
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  } catch (err) {
    console.error('Export failed:', err)
  }
}
</script>

<template>
  <div>
    <VCard>
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Product Report') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>
      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <VRow>
          <VCol
            cols="12"
            md="8"
          >
            <AppAutocomplete
              v-model="selectedProducts"
              :items="products"
              :placeholder="$t('Select Product')"
              clearable
              multiple
            />
          </VCol>
          <VCol
            cols="12"
            md="4"
          >
            <VBtn
              append-icon="tabler-upload"
              variant="tonal"
              @click="exportReport"
            >
              {{ $t('Export') }}
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VTable class="text-no-wrap">
        <thead>
          <tr>
            <th
              v-for="(header, key) in productHeaders"
              :key="key"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(rows, index) in productRows"
            :key="index"
          >
            <td
              v-for="(row, ikey) in rows"
              :key="ikey"
            >
              {{ row }}
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCard>
  
    <VDialog v-model="showLoader">
      <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
    </VDialog>
  </div>
</template>
