<script setup>
import { useI18n } from 'vue-i18n'
import Draggable from 'vuedraggable'

definePage({
  meta: {
    action: ['admin-view-admins', 'admin-create-admins'],
    subject: ['View Admins', 'Create Admins'],
    title: 'Admins',
  },
})
 
import AddNewAdminDialog from '@/views/admin/admins/AddNewAdminDialog.vue'
import ResetPasswordDrawer from '@/views/admin/admins/ResetPasswordDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedRole = ref()
const selectedCity = ref()
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isAdminDialogVisible = ref(false)
const isAddNewAdminDialogVisible = ref(false)
const isResetPasswordDrawerVisible = ref(false)
const adminDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const defaultColumns = [
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
    title: t('Email'),
    key: 'email',
    visible: true,
  },
  {
    title: t('Position'),
    key: 'position',
    visible: true,
  },
  {
    title: t('City'),
    key: 'cityID',
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
    title: t('Phone 1'),
    key: 'phone1',
    visible: true,
  },
  {
    title: t('Phone 2'),
    key: 'phone2',
    visible: true,
  },
  {
    title: t('Active'),
    key: 'status',
    visible: true,
  },
  {
    title: t('Role'),
    key: 'roles',
    visible: true,
    sortable: false,
  },
  {
    title: t('Created By'),
    key: 'createdBy.name',
    visible: true,
    sortable: true,
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
    visible: true,
    sortable: false,
  },
]

const {
  data: customerData,
  execute: fetchAdmins,
  error,
} = await useApi(createUrl('/admin/admins', {
  query: {
    search: searchQuery,
    status: selectedStatus,
    cityID: selectedCity,
    role: selectedRole,
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

const admins = computed(() => customerData.value.admins)
const totalAdmins = computed(() => customerData.value.total)

const commonsync = await $api('/admin/roles/respond-with/extra-options', {
  query: {
    type: 'Admin',
  },
}).catch(err => console.log(err))

const roleOptions = computed(() => commonsync.roleOptions)

const roles = roleOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

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

const modifyAdmin = async userData => {
  // refetch User
  fetchAdmins()
}

const editAdmin = async value => {
  const data = await $api(`/admin/admins/${ value._id }`).catch(err => console.log(err))

  adminDetail.value = data
  
  isAdminDialogVisible.value = true
}

const deleteAdmin = async id => {
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
        await $api(`/admin/admins/${ id }`, { method: 'DELETE' })
        fetchAdmins()
      }
    })  
}

const resetPassword = val => {
  adminDetail.value = val
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
  const saved = localStorage.getItem('admins-columns')
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
    localStorage.setItem('admins-columns', JSON.stringify(val))
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
              {{ $t('Admins') }}
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
          <!-- 👉 Create Admin -->
          <VBtn
            v-if="can('admin-create-admins', 'Create Admins')"
            prepend-icon="tabler-plus"
            @click="isAddNewAdminDialogVisible = true"
          >
            {{ $t('Create Admin') }}
          </VBtn>
        </div>
        <VIcon style="margin-left: auto" @click="showColumnDialog = true" class="tabler-settings" />

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-admins', 'View Admins')"
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
                    :placeholder="$t('Search Admin')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedRole"
                    :items="roles"
                    :placeholder="$t('Role')"
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

      <VDivider v-if="can('admin-view-admins', 'View Admins')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-admins', 'View Admins')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalAdmins"
        :key="visibleHeaders.map(h => h.key).join('-')"
        :headers="visibleHeaders"
        :items="admins"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- firstName -->
        <template #[`item.firstName`]="{ item }">
          <RouterLink :to="{ name: 'admin-admins-detail-id', params: { id: item._id } }">
            {{ item.firstName }} 
          </RouterLink>
          
          <VIcon style="margin-left:6px" @click="editAdmin(item)" class="tabler-pencil" />
        </template>

        <!-- lastName -->
        <template #[`item.lastName`]="{ item }">
          <RouterLink :to="{ name: 'admin-admins-detail-id', params: { id: item._id } }">
            {{ item.lastName }}
          </RouterLink>
        </template>

        <!-- email -->
        <template #[`item.email`]="{ item }">
          {{ item.email }}
        </template>

        <!-- position -->
        <template #[`item.position`]="{ item }">
          {{ item.position }}
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

        <!-- phone1 -->
        <template #[`item.phone1`]="{ item }">
          {{ item.phone1 }}
        </template>

        <!-- phone2 -->
        <template #[`item.phone2`]="{ item }">
          {{ item.phone2 }}
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

        <!-- roles -->
        <template #[`item.roles`]="{ item }">
          <VChip
            v-for="(role, roleindex) in item.roles"
            :key="roleindex"
            label
            color="success"
            size="small"
            class="roles"
          >
            {{ role.name }}
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
            v-if="item.email != 'dev@annanovas.com'"
            icon
            variant="text"
            color="medium-emphasis"
          >
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem :to="{ name: 'admin-admins-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-admins', 'Update Admins') && item.email != 'dev@annanovas.com'"
                  @click="resetPassword(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-password-user" />
                  </template>
                  <VListItemTitle>{{ $t('Reset Password') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-admins', 'Update Admins')"
                  @click="editAdmin(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-admins', 'Delete Admins')"
                  @click="deleteAdmin(item._id)"
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
            :total-items="totalAdmins"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <!-- 👉 Reset Password -->
    <ResetPasswordDrawer
      v-if="isResetPasswordDrawerVisible"
      v-model:is-drawer-open="isResetPasswordDrawerVisible"
      v-model:admin="adminDetail"
      @user-data="modifyAdmin"
    />
    <AddNewAdminDialog
      v-if="isAddNewAdminDialogVisible"
      v-model:is-dialog-visible="isAddNewAdminDialogVisible"
      v-model:roles="roles"
      v-model:cities="cities"
      @user-data="modifyAdmin"
    />

    <AddNewAdminDialog
      v-if="isAdminDialogVisible"
      v-model:is-dialog-visible="isAdminDialogVisible"
      v-model:roles="roles"
      v-model:cities="cities"
      v-model:admin="adminDetail"
      @user-data="modifyAdmin"
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

  .roles {
    margin-inline-end: 5px;
  }
}
</style>
