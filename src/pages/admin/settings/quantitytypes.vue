<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-quantitytypes', 'admin-create-quantitytypes'],
    subject: ['View Quantity Types', 'Create Quantity Types'],
    title: 'Quantity Types',
  },
})

import AddNewQuantitytypeDrawer from '@/views/admin/settings/AddNewQuantitytypeDrawer.vue'
import { can } from '@layouts/plugins/casl'

const ability = useAbility()

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
const isQuantitytypeDialogVisible = ref(false)
const isAddNewQuantitytypeDrawerVisible = ref(false)
const quantitytypeDetail = ref()
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
    title: t('Quantity'),
    key: 'quantity',
  },
  {
    title: t('Active'),
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
  execute: fetchQuantitytypes,
} = await useApi(createUrl('/admin/settings/quantitytypes', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const quantitytypes = computed(() => customerData.value.quantitytypes)
const totalQuantitytypes = computed(() => customerData.value.total)

const resolveStatusVariantAndIcon = status => {
  if (status === 'Active')
    return {
      variant: 'success',
      title: 'Yes',
    }
  
  return {
    variant: 'secondary',
    title: 'No',
  }
}

const modifyQuantitytype = async updateData => {
  // refetch Quantitytype
  fetchQuantitytypes()
}

const editQuantitytype = async value => {
  quantitytypeDetail.value = value
  
  isQuantitytypeDialogVisible.value = true
}

const deleteQuantitytype = async id => {
  Swal.fire({
    title: 'Are You Sure?',
    html: 'Selecting Delete will <strong>permanently delete</strong> this item. This action cannot be undone.',
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'No, Cancel',
    confirmButtonText: 'Yes, Delete!',
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/settings/quantitytypes/${ id }`, { method: 'DELETE' })
        fetchQuantitytypes()
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
              {{ $t('Quantity Types') }}
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
          <!-- 👉 Create Quantity Type -->
          <VBtn
            v-if="can('admin-create-quantitytypes', 'Create Quantity Types')"
            prepend-icon="tabler-plus"
            @click="isAddNewQuantitytypeDrawerVisible = true"
          >
            {{ $t('Create Quantity Type') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-quantitytypes', 'View Quantity Types')"
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
                    :placeholder="$t('Search Quantity Type')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 1, title: 'Active' },
                      { value: 0, title: 'Inactive' },
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

      <VDivider v-if="can('admin-view-quantitytypes', 'View Quantity Types')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-quantitytypes', 'View Quantity Types')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalQuantitytypes"
        :headers="headers"
        :items="quantitytypes"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          {{ item.name }}
        </template>

        <!-- quantity -->
        <template #[`item.quantity`]="{ item }">
          {{ item.quantity }}
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
                <VListItem
                  v-if="can('admin-update-quantitytypes', 'Update Quantity Types')"
                  @click="editQuantitytype(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-quantitytypes', 'Delete Quantity Types')"
                  @click="deleteQuantitytype(item._id)"
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
            :total-items="totalQuantitytypes"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewQuantitytypeDrawer
      v-if="isAddNewQuantitytypeDrawerVisible"
      v-model:is-drawer-open="isAddNewQuantitytypeDrawerVisible"
      @update-data="modifyQuantitytype"
    />

    <AddNewQuantitytypeDrawer
      v-if="isQuantitytypeDialogVisible"
      v-model:is-drawer-open="isQuantitytypeDialogVisible"
      v-model:quantitytype="quantitytypeDetail"
      @update-data="modifyQuantitytype"
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
