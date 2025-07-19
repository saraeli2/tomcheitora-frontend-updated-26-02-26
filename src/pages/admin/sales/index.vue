<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-sales', 'admin-create-sales'],
    subject: ['View Sales', 'Create Sales'],
    title: 'Sales',
  },
})

import AddNewSaleDrawer from '@/views/admin/sales/AddNewSaleDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isSaleDialogVisible = ref(false)
const isAddNewSaleDrawerVisible = ref(false)
const saleDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = computed(() => [
  {
    title: t('Name'),
    key: 'name',
  },
  {
    title: t('Start Date'),
    key: 'startDate',
  },
  {
    title: t('End Date'),
    key: 'endDate',
  },
  {
    title: t('Status'),
    key: 'status',
  },
  {
    title: t('Created By'),
    key: 'createdBy',
  },
  {
    title: t('Updated By'),
    key: 'updatedBy',
  },
  {
    title: t('Created At'),
    key: 'createdAt',
  },
  {
    title: t('Updated At'),
    key: 'updatedAt',
  },
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
  },
])

const {
  data: customerData,
  execute: fetchSales,
} = await useApi(createUrl('/admin/sales', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const sales = computed(() => customerData.value.sales)
const totalSales = computed(() => customerData.value.total)

const resolveStatusVariantAndIcon = status => {
  if (status === 'Active') {
    return {
      variant: 'success',
      title: status,
    }
  } else if (status === 'Closed') {
    return {
      variant: 'error',
      title: status,
    }
  }
  
  return {
    variant: 'secondary',
    title: status,
  }
}

const modifySale = async userData => {
  // refetch Sale
  fetchSales()
}

const editSale = async value => {
  saleDetail.value = value
  
  isSaleDialogVisible.value = true
}

const deleteSale = async id => {
  Swal.fire({
    title: t('delete.Are You Sure?'),
    html: t('delete.confirmMessage', {
      action: `<strong>${t('delete.confirmaction')}</strong>`,
    }),
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: t('delete.No, Cancel'),
    confirmButtonText: t('delete.Yes, Delete!'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/sales/${ id }`, { method: 'DELETE' })
        fetchSales()
      }
    })  
}
</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Sales') }}
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
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPage = parseInt($event, 10)"
            />
          </div>
          <!-- 👉 Create Sale -->
          <VBtn
            v-if="can('admin-create-sales', 'Create Sales')"
            prepend-icon="tabler-plus"
            @click="isAddNewSaleDrawerVisible = true"
          >
            {{ $t('Create Sale') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-sales', 'View Sales')"
        v-model="panel"
      >
        <VExpansionPanel>
          <VExpansionPanelTitle>{{ $t('Search') }}</VExpansionPanelTitle>

          <VExpansionPanelText>
            <VCardText>
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    :placeholder="$t('Search Sale')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 'Pending', title: 'Pending' },
                      { value: 'Active', title: 'Active' },
                      { value: 'Closed', title: 'Closed' },
                    ]"
                    :placeholder="$t('Status')"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-sales', 'View Sales')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-sales', 'View Sales')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalSales"
        :headers="headers"
        :items="sales"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-sales-detail-id', params: { id: item._id } }">
            {{ item.name }}
          </RouterLink>
        </template>
        
        <!-- startDate -->
        <template #[`item.startDate`]="{ item }">
          {{ formatDateWithTime(item.startDate) }}
        </template>
        
        <!-- endDate -->
        <template #[`item.endDate`]="{ item }">
          {{ formatDateWithTime(item.endDate) }}
        </template>

        <!-- status -->
        <template #[`item.status`]="{ item }">
          <VChip
            label
            :color="resolveStatusVariantAndIcon(item.status).variant"
            size="small"
          >
            {{ resolveStatusVariantAndIcon(item.status).title }}
          </VChip>
        </template>

        <!-- createdBy -->
        <template #[`item.createdBy`]="{ item }">
          <RouterLink
            v-if="can('admin-view-admins', 'View Admins') && item.createdBy"
            :to="{ name: 'admin-admins-detail-id', params: { id: item.createdBy._id } }"
          >
            {{ item.createdBy.name }}
          </RouterLink>
          <span v-else>{{ item.createdBy ? item.createdBy.name : '' }}</span>
        </template>

        <!-- updatedBy -->
        <template #[`item.updatedBy`]="{ item }">
          <RouterLink
            v-if="can('admin-view-admins', 'View Admins') && item.updatedBy"
            :to="{ name: 'admin-admins-detail-id', params: { id: item.updatedBy._id } }"
          >
            {{ item.updatedBy.name }}
          </RouterLink>
          <span v-else>{{ item.updatedBy ? item.updatedBy.name : '' }}</span>
        </template>

        <!-- Created At -->
        <template #[`item.createdAt`]="{ item }">
          {{ formatDateWithTime(item.createdAt) }}
        </template>

        <!-- Updated At -->
        <template #[`item.updatedAt`]="{ item }">
          {{ formatDateWithTime(item.updatedAt) }}
        </template>

        <!-- Actions -->
        <template #[`item.actions`]="{ item }">
          <VBtn
            icon
            variant="text"
            color="medium-emphasis"
          >
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'admin-sales-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-sales', 'Update Sales')"
                  @click="editSale(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-sales', 'Delete Sales')"
                  @click="deleteSale(item._id)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalSales"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewSaleDrawer
      v-if="isAddNewSaleDrawerVisible"
      v-model:is-drawer-open="isAddNewSaleDrawerVisible"
      @user-data="modifySale"
    />

    <AddNewSaleDrawer
      v-if="isSaleDialogVisible"
      v-model:is-drawer-open="isSaleDialogVisible"
      v-model:sale="saleDetail"
      @user-data="modifySale"
    />
  </section>
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
