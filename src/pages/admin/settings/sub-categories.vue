<script setup>
definePage({
  meta: {
    action: ['admin-view-categories', 'admin-create-categories'],
    subject: ['View Categories', 'Create Categories'],
    title: 'Categories',
  },
})

import AddNewSubCategoryDrawer from '@/views/admin/settings/AddNewSubCategoryDrawer.vue'
import { can } from '@layouts/plugins/casl'

const ability = useAbility()

import Swal from 'sweetalert2'

const searchQuery = ref('')
const selectedStatus = ref()
const selectedCategory = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isCategoryDialogVisible = ref(false)
const isAddNewCategoryDrawerVisible = ref(false)
const categoryDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Category',
    key: 'categoryID',
  },
  {
    title: 'Name',
    key: 'name',
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
  execute: fetchCategories,
} = await useApi(createUrl('/admin/settings/sub-categories', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    categoryID: selectedCategory,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const subcategories = computed(() => customerData.value.subCategories)
const totalCategories = computed(() => customerData.value.total)

const commonsync = await $api('/admin/settings/categories/respond-with/extra-options').catch(err => console.log(err))
const categoryOptions = computed(() => commonsync.categoryOptions)

const categories = categoryOptions.value.map(item => ({
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

const modifyCategory = async userData => {
  // refetch Category
  fetchCategories()
}

const editCategory = async value => {
  categoryDetail.value = value
  
  isCategoryDialogVisible.value = true
}

const deleteCategory = async id => {
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
        await $api(`/admin/settings/sub-categories/${ id }`, { method: 'DELETE' })
        fetchCategories()
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
              Sub Categories
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
          <!-- 👉 Create Category -->
          <VBtn
            v-if="can('admin-create-categories', 'Create Categories')"
            prepend-icon="tabler-plus"
            @click="isAddNewCategoryDrawerVisible = true"
          >
            Create Sub Category
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-categories', 'View Categories')"
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
                  <AppAutocomplete
                    v-model="selectedCategory"
                    :items="categories"
                    placeholder="Category"
                    clearable
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    placeholder="Search Sub Category"
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

      <VDivider v-if="can('admin-view-categories', 'View Categories')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-categories', 'View Categories')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalCategories"
        :headers="headers"
        :items="subcategories"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- categoryID -->
        <template #[`item.categoryID`]="{ item }">
          {{ item.categoryID ? item.categoryID.name : '' }}
        </template>

        <!-- name -->
        <template #[`item.name`]="{ item }">
          {{ item.name }}
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
                  v-if="can('admin-update-categories', 'Update Categories')"
                  @click="editCategory(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-categories', 'Delete Categories')"
                  @click="deleteCategory(item._id)"
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
            :total-items="totalCategories"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewSubCategoryDrawer
      v-if="isAddNewCategoryDrawerVisible"
      v-model:is-drawer-open="isAddNewCategoryDrawerVisible"
      v-model:categories="categories"
      @user-data="modifyCategory"
    />

    <AddNewSubCategoryDrawer
      v-if="isCategoryDialogVisible"
      v-model:is-drawer-open="isCategoryDialogVisible"
      v-model:subcategory="categoryDetail"
      v-model:categories="categories"
      @user-data="modifyCategory"
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
