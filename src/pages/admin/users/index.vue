<script setup>
import { useI18n } from 'vue-i18n'
definePage({
  meta: {
    action: ['admin-view-users', 'admin-create-users'],
    subject: ['View Users', 'Create Users'],
    title: 'Users',
  },
})

import AddNewUserDialog from '@/views/admin/users/AddNewUserDialog.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()

const searchQuery = ref('')
const israeliIDNumber = ref('')
const passportNumber = ref('')
const selectedCommunity = ref()
const selectedStatus = ref()
const selectedCity = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isUserDialogVisible = ref(false)
const isAddNewUserDialogVisible = ref(false)
const userDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = computed(() => [
  {
    title: t('Community'),
    key: 'communityID',
  },
  {
    title: t('First Name'),
    key: 'firstName',
  },
  {
    title: t('Last Name'),
    key: 'lastName',
  },
  {
    title: t('Email'),
    key: 'email',
  },
  {
    title: t('Phone'),
    key: 'phone',
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
    title: t('Nationality'),
    key: 'nationality',
  },
  {
    title: t('Israeli ID Number'),
    key: 'israeliIDNumber',
  },
  {
    title: t('Passport Number'),
    key: 'passportNumber',
  },
  {
    title: t('No. Of Kids'),
    key: 'noOfKids',
  },
  {
    title: t('Active'),
    key: 'status',
  },
  {
    title: t('Created By'),
    key: 'createdBy.name',
    sortable: true,
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
  execute: fetchUsers,
} = await useApi(createUrl('/admin/users', {
  query: {
    search: searchQuery,
    israeliIDNumber: israeliIDNumber,
    passportNumber: passportNumber,
    status: selectedStatus,
    cityID: selectedCity,
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

const commonsyncCities = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
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

const modifyUser = async userData => {
  // refetch User
  fetchUsers()
}

const editUser = async value => {
  const data = await $api(`/admin/users/${ value._id }`).catch(err => console.log(err))

  userDetail.value = data
  
  isUserDialogVisible.value = true
}

const deleteUser = async id => {
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
              {{ $t('Users') }}
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
          <!-- 👉 Create User -->
          <VBtn
            v-if="can('admin-create-users', 'Create Users')"
            prepend-icon="tabler-plus"
            @click="isAddNewUserDialogVisible = true"
          >
            {{ $t('Create User') }}
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
          <VExpansionPanelTitle>{{ $t('Search') }}</VExpansionPanelTitle>

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
                    :placeholder="$t('Community')"
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
                  <AppTextField
                    v-model="searchQuery"
                    :placeholder="$t('Search User')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="israeliIDNumber"
                    :placeholder="$t('Search Israeli ID Number')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="passportNumber"
                    :placeholder="$t('Search Passport Number')"
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

    <AddNewUserDialog
      v-if="isAddNewUserDialogVisible"
      v-model:is-dialog-visible="isAddNewUserDialogVisible"
      v-model:communities="communities"
      @communities="handleUpdatedCommunities"
      v-model:cities="cities"
      @user-data="modifyUser"
    />

    <AddNewUserDialog
      v-if="isUserDialogVisible"
      v-model:is-dialog-visible="isUserDialogVisible"
      v-model:communities="communities"
      v-model:user="userDetail"
      @communities="handleUpdatedCommunities"
      v-model:cities="cities"
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
