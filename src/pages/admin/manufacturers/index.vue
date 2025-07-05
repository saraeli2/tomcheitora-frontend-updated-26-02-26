<script setup>
definePage({
  meta: {
    action: ['admin-view-manufacturers', 'admin-create-manufacturers'],
    subject: ['View Manufacturers', 'Create Manufacturers'],
    title: 'Manufacturers',
  },
})

import AddNewManufacturerDrawer from '@/views/admin/manufacturers/AddNewManufacturerDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const searchQuery = ref('')
const selectedStatus = ref()
const selectedCountry = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isManufacturerDialogVisible = ref(false)
const isAddNewManufacturerDrawerVisible = ref(false)
const manufacturerDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Business ID',
    key: 'businessID',
  },
  {
    title: 'Country',
    key: 'countryID',
  },
  {
    title: 'City',
    key: 'city',
  },
  {
    title: 'Street',
    key: 'street',
  },
  {
    title: 'House Number',
    key: 'houseNumber',
  },
  {
    title: 'Active',
    key: 'status',
  },
  {
    title: 'created by',
    key: 'createdBy',
  },
  {
    title: 'Created At',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    key: 'updatedAt',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const {
  data: customerData,
  execute: fetchManufacturers,
} = await useApi(createUrl('/admin/manufacturers', {
  query: {
    search: searchQuery,
    status: selectedStatus,
    country: selectedCountry,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const manufacturers = computed(() => customerData.value.manufacturers)
const totalManufacturers = computed(() => customerData.value.total)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const countryOptions = computed(() => commonsync.countryOptions)

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

const modifyManufacturer = async userData => {
  // refetch Manufacturer
  fetchManufacturers()
}

const editManufacturer = async value => {
  manufacturerDetail.value = value

  isManufacturerDialogVisible.value = true
}

const deleteManufacturer = async id => {
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
        await $api(`/admin/manufacturers/${ id }`, { method: 'DELETE' })
        fetchManufacturers()
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
              Manufacturers
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>Show</span>
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
          <!-- 👉 Create Manufacturer -->
          <VBtn
            v-if="can('admin-create-manufacturers', 'Create Manufacturers')"
            prepend-icon="tabler-plus"
            @click="isAddNewManufacturerDrawerVisible = true"
          >
            Create Manufacturer
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-manufacturers', 'View Manufacturers')"
        v-model="panel"
      >
        <VExpansionPanel>
          <VExpansionPanelTitle>Search</VExpansionPanelTitle>

          <VExpansionPanelText>
            <VCardText>
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    placeholder="Search Manufacturer"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedCountry"
                    :items="countries"
                    placeholder="Country"
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
                    placeholder="Status"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-manufacturers', 'View Manufacturers')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-manufacturers', 'View Manufacturers')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalManufacturers"
        :headers="headers"
        :items="manufacturers"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-manufacturers-detail-id', params: { id: item._id } }">
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

        <!-- city -->
        <template #[`item.city`]="{ item }">
          {{ item.city }}
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
                <VListItem :to="{ name: 'admin-manufacturers-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-manufacturers', 'Update Manufacturers')"
                  @click="editManufacturer(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-manufacturers', 'Delete Manufacturers')"
                  @click="deleteManufacturer(item._id)"
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
            :total-items="totalManufacturers"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewManufacturerDrawer
      v-if="isAddNewManufacturerDrawerVisible"
      v-model:is-drawer-open="isAddNewManufacturerDrawerVisible"
      v-model:countries="countries"
      @user-data="modifyManufacturer"
    />

    <AddNewManufacturerDrawer
      v-if="isManufacturerDialogVisible"
      v-model:is-drawer-open="isManufacturerDialogVisible"
      v-model:countries="countries"
      v-model:manufacturer="manufacturerDetail"
      @user-data="modifyManufacturer"
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
