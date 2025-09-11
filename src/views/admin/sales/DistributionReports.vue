<script setup>
import { useI18n } from 'vue-i18n'
import useHelper from "@/mixins/helper";
import CategoryTreeNode from '@/views/admin/settings/CategoryTreeNode.vue'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const { numberFormat } = useHelper()

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-sale-orders'],
    subject: ['View Sale Orders'],
    title: 'Sale Reports',
  },
})


import { can } from '@layouts/plugins/casl'

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isSaleStationDialogVisible = ref(false)
const isAddNewSaleStationDrawerVisible = ref(false)
const saleStationDetail = ref()
const selectedSale = ref(props.saleid)

// Data table options
const itemsPerPage = ref(25)
const itemsPerPageSales = ref(25)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedStation = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const discountReportHeader = computed(() => [
  {
    title: t('שם מלא'),
    key: 'FullName',
    sortable: false,
  },
  {
    title: t('ת.ז.'),
    key: 'israeliID',
    sortable: false,
  },
  {
    title: t('כתובת'),
    key: 'fullAddress',
    sortable: false,
  },
  {
    title: t('עיר'),
    key: 'city',
    sortable: false,
  },
  {
    title: t('טלפון 1'),
    key: 'phone1',
    sortable: false,
  },
  {
    title: t('טלפון 2'),
    key: 'phone2',
    sortable: false,
  },
  {
    title: t('מייל'),
    key: 'email',
    sortable: false,
  },
  {
    title: t('הנחה'),
    key: 'totalDiscount',
    sortable: false,
  },

])

const {
  data: discountReportData,
  execute: fetchDiscountReport,
} = await useApi(createUrl('/admin/reports/discount-report', {
  query: {
    sale: selectedSale,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const discountReports = computed(() => discountReportData.value.report)
const totalDisoucntRows = computed(() => discountReportData.value.total)



// const modifySaleStation = async userData => {
//   // refetch Station
//   fetchSaleStations()
//   emit('tabData')
// }

const reportType = ref(null)

const onReportTypeChange = () =>{
  if(reportType.value == 'discount_report'){
    fetchDiscountReport()
  }else if(reportType.value == 'sales_report'){
    fetchSalesReport()
  }
}


// Sales Report
const checkedCategories = ref([])
const showLoader = ref(false)



// 👉 headers
const salesReportHeader = computed(() => [
  {
    title: t('בר קוד'),
    key: 'InternalSKU',
    sortable: false,
  },
  {
    title: t('מק”ט'),
    key: 'productNumber',
    sortable: false,
  },
  {
    title: t('שם מוצר'),
    key: 'name',
    sortable: false,
  },
  {
    title: t('כמותת שנמכרה'),
    key: 'soldCount',
    sortable: false,
  },
  {
    title: t('נשאר במלאי'),
    key: 'leftInStock',
    sortable: false,
  },
])

const {
  data: salesReportData,
  execute: fetchSalesReport,
  loading: salesReportLoading,
} = useApi(createUrl('/admin/reports/sales-report', {
  query: {
    sale: selectedSale,
    categoryIDs: checkedCategories,
    itemsPerPageSales,
    page,
    sortBy,
    orderBy,
  },
}))



const salesReports = computed(() => salesReportData.value.report)
const totalSalesRows = computed(() => salesReportData.value.total)

watch(salesReportLoading, (val) => {
  showLoader.value = val
})

const {
  data: categoryBuilderData,
  execute: fetchCategoryBuilders,
} = await useApi(createUrl('/admin/settings/categories'))

const categories = computed(() => categoryBuilderData.value.categories)

const searchTerm = ref('')
const showList = ref(false)
const dropdownWrapper = ref(null)

const buildTree = (categories, searchTerm = '') => {
  const categoryMap = {}

  // Initialize categories with children array
  categories.forEach(cat => {
    categoryMap[cat._id.toString()] = { ...cat, children: [] }
  })

  const roots = []

  // Assign children to their parents
  categories.forEach(cat => {
    if (cat.parentId) {
      const parentId = cat.parentId.toString()
      if (categoryMap[parentId]) {
        categoryMap[parentId].children.push(categoryMap[cat._id.toString()])
      } else {
        roots.push(categoryMap[cat._id.toString()])
      }
    } else {
      roots.push(categoryMap[cat._id.toString()])
    }
  })

  // Recursive sort by sortOrder
  const sortChildren = nodes => {
    nodes.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    nodes.forEach(node => {
      if (node.children?.length) sortChildren(node.children)
    })
  }

  sortChildren(roots)

  // ✅ Apply search filter
  if (!searchTerm) return roots

  const term = searchTerm.toLowerCase()

  const filterTree = nodes => {
    return nodes
      .map(node => {
        const matchedChildren = node.children ? filterTree(node.children) : []
        const isMatch = node.name.toLowerCase().includes(term)

        if (isMatch || matchedChildren.length > 0) {
          return {
            ...node,
            children: matchedChildren,
          }
        }

        return null
      })
      .filter(Boolean)
  }

  return filterTree(roots)
}

const tree = computed(() => buildTree(categories.value, searchTerm.value))

//const checkedCategories = ref(props.product.categoryIDs)

const getNodeId = node => node.realId || node._id

const getAllDescendants = node => {
  let ids = [getNodeId(node)]
  if (node.children && node.children.length) {
    for (const child of node.children) {
      ids = ids.concat(getAllDescendants(child))
    }
  }
  
  return ids
}

const findNodeById = (tree, id) => {
  for (const node of tree) {
    if (getNodeId(node) === id) return node
    if (node.children) {
      const found = findNodeById(node.children, id)
      if (found) return found
    }
  }
  
  return null
}



const onToggleSelect = ({ id, checked }) => {
  const idStr = String(id)
  const list = checkedCategories.value.map(String)

  if (checked) {
    if (!list.includes(idStr)) checkedCategories.value.push(id)
  } else {
    checkedCategories.value = checkedCategories.value.filter(x => String(x) !== idStr)
  }
  fetchSalesReport()
  console.log(checkedCategories.value);
  
}




const removeCategory = id => {
  checkedCategories.value = checkedCategories.value.filter(x => String(x) !== String(id))

  fetchCategoryBuilders()
}

const filteredTree = computed(() => {
  if (!searchTerm.value) return tree.value
  const term = searchTerm.value.toLowerCase()
  const flatten = (nodes) => nodes.flatMap(node => [node, ...(node.children ? flatten(node.children) : [])])
  return flatten(tree.value).filter(node => node.name.toLowerCase().includes(term))
})

// Flattened helper to get category name by id
const findCategoryNameById = (id) => {
  // const flat = flattenCategories(tree.value)
  const cat = categories.value.find(node => String(node._id || node.realId) === String(id))
  return cat ? cat.name : id
}

const handleClickOutside = e => {
  if (dropdownWrapper.value && !dropdownWrapper.value.contains(e.target)) {
    showList.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <section style="position:relative; z-index: 99;">
    <VCard id="invoice-list" style="overflow: visible; z-index: 9;">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Reports') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <VRow>
          <VCol cols="12" md="4">
            <div>{{ $t('Report Type') }}</div>
            <AppSelect
              v-model="reportType"
              :items="[
                { value: 'discount_report', title: t('Discount Report') },
                { value: 'sales_report', title: t('Sales Report') },
                
              ]"
              style="inline-size: 100%"
              clearable
              :placeholder="$t('Select Report')"
              @update:model-value="onReportTypeChange"
            />
          </VCol>

          <VCol cols="12" md="4" v-if="reportType == 'sales_report'">
            <div>{{ $t('Categories') }}</div>
            <div
              ref="dropdownWrapper"
              class="relative w-full max-w-xl"
            >
              <div
                class="flex flex-wrap items-center gap-1 px-2 py-1 border border-gray-300 rounded"
                @click="showList = true"
              >
                <!-- Selected categories as chips -->
                <span
                  v-for="id in checkedCategories"
                  :key="id"
                  class="flex items-center gap-1 px-2 py-1 bg-gray-200 rounded-full text-sm s_items"
                >
                  {{ findCategoryNameById(id) }}
                  <button
                    type="button"
                    @click.stop="removeCategory(id)"
                    class="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </span>

                <!-- Search input -->
                <AppTextField
                  v-model="searchTerm"
                  type="text"
                  class="flex-1 outline-none border-none"
                  :placeholder="$t('Search Category')"
                />
              </div>

              <!-- Category dropdown -->
              <div
                v-if="showList"
                class="absolute-category z-50 w-full bg-white border border-gray-300 rounded mt-1 max-h-80 overflow-y-auto shadow"
                @mousedown.prevent
              >
                <ul class="p-3">
                  <CategoryTreeNode
                    v-for="node in tree"
                    :key="node.realId || node._id"
                    :node="node"
                    :selected="checkedCategories"
                    @toggle-select="onToggleSelect"
                  />
                </ul>
              </div>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard v-if="reportType=='discount_report'" style="margin-top:20px">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Discount Report') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>{{ $t('Show') }}</span>
            <AppSelect
              :model-value="itemsPerPage"
              :items="[
                { value: 5, title: '5' },
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPage = parseInt($event, 10)"
            />
          </div>
         
        </div>
      </VCardText>
      <VDivider />

      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalDisoucntRows"
        :headers="discountReportHeader"
        :items="discountReports"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- stationID -->
        
        <template #[`item.totalDiscount`]="{ item }">
          {{ numberFormat(item.totalDiscount) }}
        </template>

        <!-- time -->
        <template #[`item.FullName`]="{ item }">
          {{ item.user?.firstName }} {{ item.user?.lasttName }}
        </template>

        <!-- Created At -->
        <template #[`item.israeliID`]="{ item }">
          {{ item.user?.israeliIDNumber }}
        </template>

        <template #[`item.fullAddress`]="{ item }">
          {{ item.user?.street }} {{ item.user?.houseNumber }}<span v-if="(item.user?.street || item.user?.houseNumber) && item.user?.flatNo">,</span> {{ item.user?.flatNo }}
        </template>

        <template #[`item.city`]="{ item }">
          {{ item.user?.cityID?.nameHe }}
        </template>

        <template #[`item.phone1`]="{ item }">
          {{ item.user?.phone1 }}
        </template>
        <template #[`item.phone2`]="{ item }">
          {{ item.user?.phone2 }}
        </template>
        <template #[`item.email`]="{ item }">
          {{ item.user?.email }}
        </template>
       

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalDisoucntRows"
          />
        </template>
      </VDataTableServer>
    </VCard>

    <VCard v-if="reportType=='sales_report'" style="margin-top:20px">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Sales Report') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>{{ $t('Show') }}</span>
            <AppSelect
              :model-value="itemsPerPageSales"
              :items="[
                { value: 5, title: '5' },
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPageSales = parseInt($event, 10)"
            />
          </div>
         
        </div>
      </VCardText>
      <VDivider />

      <VDataTableServer
        v-model:items-per-page="itemsPerPageSales"
        v-model:page="page"
        :items-length="totalSalesRows"
        :headers="salesReportHeader"
        :items="salesReports"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- stationID -->
        
        <template #[`item.totalDiscount`]="{ item }">
          {{ numberFormat(item.totalDiscount) }}
        </template>

        <!-- time -->
        <template #[`item.productNumber`]="{ item }">
          {{ item.ProductNumber }}
        </template>

        <template #[`item.name`]="{ item }">
          {{ item.Name }}
        </template>

        <template #[`item.soldCount`]="{ item }">
          {{ item.SoldCount }}
        </template>

        <template #[`item.leftInStock`]="{ item }">
          {{ item.LeftInStock }}
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPageSales"
            :total-items="totalSalesRows"
          />
        </template>
      </VDataTableServer>
    </VCard>


  </section>

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

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-filter {
    inline-size: 12rem;
  }
}
</style>
