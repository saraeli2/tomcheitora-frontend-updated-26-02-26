<script setup>
definePage({
  meta: {
    action: ['admin-view-packagetypes', 'admin-create-packagetypes'],
    subject: ['View Package Types', 'Create Package Types'],
    title: 'Package Types',
  },
})

import AddNewPackagetypeDrawer from '@/views/admin/settings/AddNewPackagetypeDrawer.vue'
import { can } from '@layouts/plugins/casl'

const ability = useAbility()

import Swal from 'sweetalert2'

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isPackagetypeDialogVisible = ref(false)
const isAddNewPackagetypeDrawerVisible = ref(false)
const packagetypeDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Slug',
    key: 'slug',
  },
  {
    title: 'Active',
    key: 'status',
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
  execute: fetchPackagetypes,
} = await useApi(createUrl('/admin/settings/packagetypes', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const packagetypes = computed(() => customerData.value.packagetypes)
const totalPackagetypes = computed(() => customerData.value.total)

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

const modifyPackagetype = async userData => {
  // refetch Packagetype
  fetchPackagetypes()
}

const editPackagetype = async value => {
  packagetypeDetail.value = value
  
  isPackagetypeDialogVisible.value = true
}

const deletePackagetype = async id => {
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
        await $api(`/admin/settings/packagetypes/${ id }`, { method: 'DELETE' })
        fetchPackagetypes()
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
              Package Types
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
          <!-- 👉 Create Package Type -->
          <VBtn
            v-if="can('admin-create-packagetypes', 'Create Package Types')"
            prepend-icon="tabler-plus"
            @click="isAddNewPackagetypeDrawerVisible = true"
          >
            Create Package Type
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-packagetypes', 'View Package Types')"
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
                    placeholder="Search Package Type"
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
                    placeholder="Status"
                    clearable
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-packagetypes', 'View Package Types')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-packagetypes', 'View Package Types')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalPackagetypes"
        :headers="headers"
        :items="packagetypes"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- title -->
        <template #[`item.title`]="{ item }">
          {{ item.title }}
        </template>

        <!-- slug -->
        <template #[`item.slug`]="{ item }">
          {{ item.slug }}
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
                  v-if="can('admin-update-packagetypes', 'Update Package Types')"
                  @click="editPackagetype(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-packagetypes', 'Delete Package Types')"
                  @click="deletePackagetype(item._id)"
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
            :total-items="totalPackagetypes"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewPackagetypeDrawer
      v-if="isAddNewPackagetypeDrawerVisible"
      v-model:is-drawer-open="isAddNewPackagetypeDrawerVisible"
      @user-data="modifyPackagetype"
    />

    <AddNewPackagetypeDrawer
      v-if="isPackagetypeDialogVisible"
      v-model:is-drawer-open="isPackagetypeDialogVisible"
      v-model:packagetype="packagetypeDetail"
      @user-data="modifyPackagetype"
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
