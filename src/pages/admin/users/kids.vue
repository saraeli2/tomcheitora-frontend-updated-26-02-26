<script setup>
const props = defineProps({
  userid: {
    type: String,
    required: true,
  },
})

definePage({
  meta: {
    action: ['admin-view-users', 'admin-create-users'],
    subject: ['View Users', 'Create Users'],
    title: 'User',
  },
})

import AddNewKidDrawer from '@/views/admin/users/AddNewKidDrawer.vue'
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
const isKidDialogVisible = ref(false)
const isAddNewKidDrawerVisible = ref(false)
const kidDetail = ref()
const selectedUserID = ref(props.userid)
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'First Name',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    key: 'lastName',
  },
  {
    title: 'DoB',
    key: 'dob',
  },
  {
    title: 'ID number',
    key: 'IDNumber',
  },
  {
    title: 'Marital Status',
    key: 'maritalStatus',
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
  execute: fetchCommunities,
} = await useApi(createUrl('/admin/kids', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    communityID: selectedUserID,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const kids = computed(() => customerData.value.kids)
const totalKids = computed(() => customerData.value.total)

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

const modifyKid = async userData => {
  // refetch Kid
  fetchCommunities()
}

const editKid = async value => {
  kidDetail.value = value
  
  isKidDialogVisible.value = true
}

const deleteKid = async id => {
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
        await $api(`/admin/kids/${ id }`, { method: 'DELETE' })
        fetchCommunities()
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
              Kid Infromations
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
          <!-- 👉 Create Kid -->
          <VBtn
            v-if="can('admin-create-users', 'Create Users')"
            prepend-icon="tabler-plus"
            @click="isAddNewKidDrawerVisible = true"
          >
            Create Kid Infromation
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-users', 'View Users')"
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
                    placeholder="Search Kid Infromation"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-users', 'View Users')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-users', 'View Users')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalKids"
        :headers="headers"
        :items="kids"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- firstName -->
        <template #[`item.firstName`]="{ item }">
          {{ item.firstName }}
        </template>

        <!-- lastName -->
        <template #[`item.lastName`]="{ item }">
          {{ item.lastName }}
        </template>

        <!-- dob -->
        <template #[`item.dob`]="{ item }">
          {{ item.dob ? formatDate(item.dob) : '' }}
        </template>

        <!-- IDNumber -->
        <template #[`item.IDNumber`]="{ item }">
          {{ item.IDNumber }}
        </template>

        <!-- maritalStatus -->
        <template #[`item.maritalStatus`]="{ item }">
          {{ item.maritalStatus }}
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
                  v-if="can('admin-update-users', 'Update Users')"
                  @click="editKid(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-users', 'Delete Users')"
                  @click="deleteKid(item._id)"
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
            :total-items="totalKids"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewKidDrawer
      v-if="isAddNewKidDrawerVisible"
      v-model:is-drawer-open="isAddNewKidDrawerVisible"
      v-model:userid="selectedUserID"
      @user-data="modifyKid"
    />

    <AddNewKidDrawer
      v-if="isKidDialogVisible"
      v-model:is-drawer-open="isKidDialogVisible"
      v-model:kid="kidDetail"
      v-model:userid="selectedUserID"
      @user-data="modifyKid"
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
