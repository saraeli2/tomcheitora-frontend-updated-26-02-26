<script setup>
import { useI18n } from 'vue-i18n'
import Draggable from 'vuedraggable'

definePage({
  meta: {
    action: ['admin-view-users', 'admin-create-users'],
    subject: ['View Users', 'Create Users'],
    title: 'Users',
  },
})

import AddNewUserDialog from '@/views/admin/users/AddNewUserDialog.vue'
import ResetPasswordDrawer from '@/views/admin/users/ResetPasswordDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

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
const isResetPasswordDrawerVisible = ref(false)
const userDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const defaultColumns = [
  {
    title: t('Community'),
    key: 'communityID',
    visible: true,
  },
  {
    title: t('Israeli ID Number'),
    key: 'israeliIDNumber',
    visible: true,
  },
  {
    title: t('First Name'),
    key: 'firstName',
    visible: true,
  },
  {
    title: t('Last Name'),
    key: 'lastName',
    visible: true,
  },
  {
    title: t('Birth Date'),
    key: 'birthDate',
    visible: true,
  },
  {
    title: t('Phone'),
    key: 'phone',
    visible: true,
  },
  {
    title: t('Phone 2'),
    key: 'phone2',
    visible: true,
  },
  {
    title: t('Land Phone'),
    key: 'landPhone',
    visible: true,
  },
  {
    title: t('Email'),
    key: 'email',
    visible: true,
  },
  {
    title: t('City'),
    key: 'cityID',
    visible: true,
  },
  {
    title: t('Neighbourhood'),
    key: 'neighbourhood',
    visible: true,
  },
  {
    title: t('Street'),
    key: 'street',
    visible: true,
  },
  {
    title: t('House Number'),
    key: 'houseNumber',
    visible: true,
  },
  {
    title: t('No. Of Kids'),
    key: 'noOfKids',
    visible: true,
  },
  {
    title: t('Married kids'),
    key: 'marriedKids',
    visible: true,
  },
  {
    title: t('School name'),
    key: 'schoolName',
    visible: true,
  },
  {
    title: t('Address'),
    key: 'address',
    visible: true,
  },
  {
    title: t('Nationality'),
    key: 'nationality',
    visible: true,
  },
  
  {
    title: t('Passport Number'),
    key: 'passportNumber',
    visible: true,
  },
  
  {
    title: t('Active'),
    key: 'status',
    visible: true,
  },
  {
    title: t('Created By'),
    key: 'createdBy.name',
    sortable: true,
    visible: true,
  },
  {
    title: t('Created At'),
    key: 'createdAt',
    visible: true,
  },
  {
    title: t('Updated At'),
    key: 'updatedAt',
    visible: true,
  },
  {
    title: t('Actions'),
    key: 'actions',
    sortable: false,
    visible: true,
  },
]

const {
  data: customerData,
  execute: fetchUsers,
  error,
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

if(error.value == 'Unauthorized') {
// Remove "accessToken" from cookie
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('userAbilityRules')

  // Reset ability to initial ability
  ability.update([])

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page

  // Redirect to login page
  router.push({ name: 'admin-login' })

  location.href = '/admin/login'
}

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

const resetPassword = val => {
  userDetail.value = val
  isResetPasswordDrawerVisible.value = true
}

const showColumnDialog = ref(false)
const allColumns = ref([...defaultColumns])

const visibleHeaders = computed(() =>
  allColumns.value
    .filter(col => col.visible)
    .map(col => ({
      key: col.key,
      title: t(col.title),
      sortable: col.sortable !== false, // default true
    }))
)

onMounted(() => {
  const saved = localStorage.getItem('users-columns')
  if (saved) {
    try {
      allColumns.value = JSON.parse(saved)
    } catch {
      allColumns.value = [...defaultColumns]
    }
  }
})

watch(
  allColumns,
  val => {
    localStorage.setItem('users-columns', JSON.stringify(val))
  },
  { deep: true }
)
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
        <VIcon style="margin-left: auto" @click="showColumnDialog = true" class="tabler-settings" />

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
                  <AppTextField
                    v-model="searchQuery"
                    :placeholder="$t('Search User')"
                  />
                </VCol>
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
        :headers="visibleHeaders"
        :items="users"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- communityID -->
        <template #[`item.communityID`]="{ item }">
          <RouterLink
            v-if="can('admin-update-communities', 'Update Community') && item.communityID && !item.communityID?.deletedAt"
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

          <VIcon 
            style="margin-left:6px" 
            @click="editUser(item)" class="tabler-pencil" 
          />
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

        <!-- address -->
        <template #[`item.address`]="{ item }">
          {{ item.address }}
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
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-users', 'Update Users')"
                  @click="resetPassword(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-password-user" />
                  </template>
                  <VListItemTitle>{{ $t('Reset Password') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-users', 'Update Users')"
                  @click="editUser(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
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
      v-model:cities="cities"
      @communities="handleUpdatedCommunities"
      @user-data="modifyUser"
    />

    <AddNewUserDialog
      v-if="isUserDialogVisible"
      v-model:is-dialog-visible="isUserDialogVisible"
      v-model:communities="communities"
      v-model:user="userDetail"
      v-model:cities="cities"
      @communities="handleUpdatedCommunities"
      @user-data="modifyUser"
    />
    <!-- 👉 Reset Password -->
    <ResetPasswordDrawer
      v-if="isResetPasswordDrawerVisible"
      v-model:is-drawer-open="isResetPasswordDrawerVisible"
      v-model:user="userDetail"
      @user-data="modifyUser"
    />
  </section>
  <VDialog class="reorderDialog" v-model="showColumnDialog" max-width="500">
    <VCard>
      <VCardTitle class="text-h6">
        {{ $t('Manage Columns') }}
      </VCardTitle>

      <VCardText>
        <!-- Only render draggable when dialog is active -->
         <Draggable
          v-model="allColumns"
          item-key="key"
          tag="div"
          @end="onSortEnd"
        >
          <template #item="{ element }">
            <div class="d-flex align-center mb-2">
              <VIcon icon="tabler-arrows-down-up" class="mr-2" />
              <VCheckbox
                v-model="element.visible"
                :label="$t(element.title)"
                hide-details
                density="compact"
              />
            </div>
          </template>
        </Draggable>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn variant="text" @click="showColumnDialog = false">{{ $t('Close') }}</VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
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
