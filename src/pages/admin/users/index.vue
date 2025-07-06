<script setup>
definePage({
  meta: {
    action: ['admin-view-users', 'admin-create-users'],
    subject: ['View Users', 'Create Users'],
    title: 'Users',
  },
})

import AddNewUserDrawer from '@/views/admin/users/AddNewUserDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const searchQuery = ref('')
const israeliIDNumber = ref('')
const passportNumber = ref('')
const selectedCommunity = ref()
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isUserDialogVisible = ref(false)
const isAddNewUserDrawerVisible = ref(false)
const userDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'Community',
    key: 'communityID',
  },
  {
    title: 'First Name',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    key: 'lastName',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Phone',
    key: 'phone',
  },
  {
    title: 'City ID',
    key: 'cityId',
  },
  {
    title: 'City Name',
    key: 'cityName',
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
    title: 'Nationality',
    key: 'nationality',
  },
  {
    title: 'Israeli ID Number',
    key: 'israeliIDNumber',
  },
  {
    title: 'Passport Number',
    key: 'passportNumber',
  },
  {
    title: 'No. Of Kids',
    key: 'noOfKids',
  },
  {
    title: 'Active',
    key: 'status',
  },
  {
    title: 'created by',
    key: 'createdBy.name',
    sortable: true,
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
  execute: fetchUsers,
} = await useApi(createUrl('/admin/users', {
  query: {
    search: searchQuery,
    israeliIDNumber: israeliIDNumber,
    passportNumber: passportNumber,
    status: selectedStatus,
    communityID: selectedCommunity,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const users = computed(() => customerData.value.users)
const totalUsers = computed(() => customerData.value.total)

const communities = ref([])

const handleUpdatedCommunities = async () => {
  try {
    const commonsync = await $api('/admin/communities/respond-with/extra-options')

    communities.value = commonsync.communityOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))
  } catch (err) {
    console.error('Failed to fetch updated communities:', err)
  }
}

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

const modifyUser = async userData => {
  // refetch User
  fetchUsers()
}

const editUser = async value => {
  const data = await $api(`/admin/users/${ value._id }`).catch(err => console.log(err))

  userDetail.value = data
  userDetail.value.communityID = userDetail.value.communityID._id
  
  isUserDialogVisible.value = true
}

const deleteUser = async id => {
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
        await $api(`/admin/users/${ id }`, { method: 'DELETE' })
        fetchUsers()
      }
    })  
}

onMounted(async () => {
  await handleUpdatedCommunities()
})
</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              Users
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
          <!-- 👉 Create User -->
          <VBtn
            v-if="can('admin-create-users', 'Create Users')"
            prepend-icon="tabler-plus"
            @click="isAddNewUserDrawerVisible = true"
          >
            Create User
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
                  <!-- 👉 Select Community -->
                  <AppAutocomplete
                    v-model="selectedCommunity"
                    :items="communities"
                    placeholder="Community"
                    clearable
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    placeholder="Search User"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="israeliIDNumber"
                    placeholder="Search Israeli ID Number"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="passportNumber"
                    placeholder="Search Passport Number"
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

      <VDivider v-if="can('admin-view-users', 'View Users')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-users', 'View Users')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalUsers"
        :headers="headers"
        :items="users"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- communityID -->
        <template #[`item.communityID`]="{ item }">
          <RouterLink
            v-if="can('admin-update-communities', 'Update Community') && item.communityID"
            :to="{ name: 'admin-communities-detail-id', params: { id: item.communityID._id } }"
          >
            {{ item.communityID.name }}
          </RouterLink>
          <span v-else>{{ item.communityID ? item.communityID.name : '' }}</span>
        </template>

        <!-- firstName -->
        <template #[`item.firstName`]="{ item }">
          <RouterLink :to="{ name: 'admin-users-detail-id', params: { id: item._id } }">
            {{ item.firstName }}
          </RouterLink>
        </template>

        <!-- lastName -->
        <template #[`item.lastName`]="{ item }">
          <RouterLink :to="{ name: 'admin-users-detail-id', params: { id: item._id } }">
            {{ item.lastName }}
          </RouterLink>
        </template>

        <!-- email -->
        <template #[`item.email`]="{ item }">
          {{ item.email }}
        </template>

        <!-- phone -->
        <template #[`item.phone`]="{ item }">
          {{ item.phone }}
        </template>

        <!-- cityId -->
        <template #[`item.cityId`]="{ item }">
          {{ item.cityId }}
        </template>

        <!-- cityName -->
        <template #[`item.cityName`]="{ item }">
          {{ item.cityName }}
        </template>

        <!-- street -->
        <template #[`item.street`]="{ item }">
          {{ item.street }}
        </template>

        <!-- houseNumber -->
        <template #[`item.houseNumber`]="{ item }">
          {{ item.houseNumber }}
        </template>

        <!-- nationality -->
        <template #[`item.nationality`]="{ item }">
          {{ item.nationality }}
        </template>

        <!-- israeliIDNumber -->
        <template #[`item.israeliIDNumber`]="{ item }">
          {{ item.israeliIDNumber }}
        </template>

        <!-- passportNumber -->
        <template #[`item.passportNumber`]="{ item }">
          {{ item.passportNumber }}
        </template>

        <!-- noOfKids -->
        <template #[`item.noOfKids`]="{ item }">
          {{ item.noOfKids ?? '' }}
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
                <VListItem :to="{ name: 'admin-users-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-users', 'Update Users')"
                  @click="editUser(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-users', 'Delete Users')"
                  @click="deleteUser(item._id)"
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
            :total-items="totalUsers"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewUserDrawer
      v-if="isAddNewUserDrawerVisible"
      v-model:is-drawer-open="isAddNewUserDrawerVisible"
      v-model:communities="communities"
      @communities="handleUpdatedCommunities"
      @user-data="modifyUser"
    />

    <AddNewUserDrawer
      v-if="isUserDialogVisible"
      v-model:is-drawer-open="isUserDialogVisible"
      v-model:communities="communities"
      v-model:user="userDetail"
      @communities="handleUpdatedCommunities"
      @user-data="modifyUser"
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
