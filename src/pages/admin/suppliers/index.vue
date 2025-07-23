<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-suppliers', 'admin-create-suppliers'],
    subject: ['View Suppliers', 'Create Suppliers'],
    title: 'Suppliers',
  },
})

import AddNewSupplierDialog from '@/views/admin/suppliers/AddNewSupplierDialog.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedCountry = ref()
const selectedCity = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isSupplierDialogVisible = ref(false)
const isAddNewSupplierDialogVisible = ref(false)
const supplierDetail = ref()
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
    title: t('Business ID'),
    key: 'businessID',
  },
  {
    title: t('Country'),
    key: 'countryID',
  },
  {
    title: t('City'),
    key: 'cityID',
  },
  {
    title: t('Street'),
    key: 'street',
  },
  {
    title: t('House Number'),
    key: 'houseNumber',
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
  execute: fetchSuppliers,
} = await useApi(createUrl('/admin/suppliers', {
  query: {
    search: searchQuery,
    status: selectedStatus,
    cityID: selectedCity,
    country: selectedCountry,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const suppliers = computed(() => customerData.value.suppliers)
const totalSuppliers = computed(() => customerData.value.total)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const countryOptions = computed(() => commonsync.countryOptions)
const cityOptions = computed(() => commonsync.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const countries = countryOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

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

const modifySupplier = async updateData => {
  // refetch Supplier
  fetchSuppliers()
}

const editSupplier = async value => {
  const data = await $api(`/admin/suppliers/${ value._id }`).catch(err => console.log(err))

  supplierDetail.value = data
  
  isSupplierDialogVisible.value = true
}

const deleteSupplier = async id => {
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
        await $api(`/admin/suppliers/${ id }`, { method: 'DELETE' })
        fetchSuppliers()
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
              {{ $t('Suppliers') }}
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
          <!-- 👉 Create Supplier -->
          <VBtn
            v-if="can('admin-create-suppliers', 'Create Suppliers')"
            prepend-icon="tabler-plus"
            @click="isAddNewSupplierDialogVisible = true"
          >
            {{ $t('Create Supplier') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-suppliers', 'View Suppliers')"
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
                    :placeholder="$t('Search Supplier')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedCountry"
                    :items="countries"
                    :placeholder="$t('Country')"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedCity"
                    :items="cities"
                    :placeholder="$t('City')"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 'Active', title: 'Active' },
                      { value: 'Inactive', title: 'Inactive' },
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

      <VDivider v-if="can('admin-view-suppliers', 'View Suppliers')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-suppliers', 'View Suppliers')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalSuppliers"
        :headers="headers"
        :items="suppliers"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-suppliers-detail-id', params: { id: item._id } }">
            {{ item.name }}
          </RouterLink>
        </template>

        <!-- businessID -->
        <template #[`item.businessID`]="{ item }">
          {{ item.businessID }}
        </template>

        <!-- countryID -->
        <template #[`item.countryID`]="{ item }">
          {{ item.countryID ? item.countryID.name : '' }}
        </template>

        <!-- cityID -->
        <template #[`item.cityID`]="{ item }">
          {{ item.cityID ? item.cityID.nameHe : '' }}
        </template>

        <!-- street -->
        <template #[`item.street`]="{ item }">
          {{ item.street }}
        </template>

        <!-- houseNumber -->
        <template #[`item.houseNumber`]="{ item }">
          {{ item.houseNumber }}
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
          {{ item.createdBy ? item.createdBy.name : '' }}
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
                <VListItem :to="{ name: 'admin-suppliers-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-suppliers', 'Update Suppliers')"
                  @click="editSupplier(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-suppliers', 'Delete Suppliers')"
                  @click="deleteSupplier(item._id)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>{{ $t('Delete') }}</VListItemTitle>
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
            :total-items="totalSuppliers"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewSupplierDialog
      v-if="isAddNewSupplierDialogVisible"
      v-model:is-dialog-visible="isAddNewSupplierDialogVisible"
      v-model:countries="countries"
      v-model:cities="cities"
      @update-data="modifySupplier"
    />

    <AddNewSupplierDialog
      v-if="isSupplierDialogVisible"
      v-model:is-dialog-visible="isSupplierDialogVisible"
      v-model:countries="countries"
      v-model:cities="cities"
      v-model:supplier="supplierDetail"
      @update-data="modifySupplier"
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
