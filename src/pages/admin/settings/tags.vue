<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-tags', 'admin-create-tags'],
    subject: ['View Tags', 'Create Tags'],
    title: 'Tags',
  },
})

import AddNewTagDrawer from '@/views/admin/settings/AddNewTagDrawer.vue'
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
const isTagDialogVisible = ref(false)
const isAddNewTagDrawerVisible = ref(false)
const tagDetail = ref()
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
  execute: fetchTags,
} = await useApi(createUrl('/admin/settings/tags', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const tags = computed(() => customerData.value.tags)
const totalTags = computed(() => customerData.value.total)

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

const modifyTag = async updateData => {
  // refetch Tag
  fetchTags()
}

const editTag = async value => {
  tagDetail.value = value
  
  isTagDialogVisible.value = true
}

const deleteTag = async id => {
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
        await $api(`/admin/settings/tags/${ id }`, { method: 'DELETE' })
        fetchTags()
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
              {{ $t('Tags') }}
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
          <!-- 👉 Create Tag -->
          <VBtn
            v-if="can('admin-create-tags', 'Create Tags')"
            prepend-icon="tabler-plus"
            @click="isAddNewTagDrawerVisible = true"
          >
            {{ $t('Create Tag') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-tags', 'View Tags')"
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
                    :placeholder="$t('Search Tag')"
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

      <VDivider v-if="can('admin-view-tags', 'View Tags')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-tags', 'View Tags')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalTags"
        :headers="headers"
        :items="tags"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
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
                  v-if="can('admin-update-tags', 'Update Tags')"
                  @click="editTag(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-tags', 'Delete Tags')"
                  @click="deleteTag(item._id)"
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
            :total-items="totalTags"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewTagDrawer
      v-if="isAddNewTagDrawerVisible"
      v-model:is-drawer-open="isAddNewTagDrawerVisible"
      @update-data="modifyTag"
    />

    <AddNewTagDrawer
      v-if="isTagDialogVisible"
      v-model:is-drawer-open="isTagDialogVisible"
      v-model:tag="tagDetail"
      @update-data="modifyTag"
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
