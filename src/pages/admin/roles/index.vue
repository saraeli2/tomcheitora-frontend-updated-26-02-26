<script setup>
import { useI18n } from 'vue-i18n'

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-roles', 'admin-create-roles'],
    subject: ['View Roles', 'Create Roles'],
    title: 'Roles',
  },
})

import AddEditRoleDialog from '@/views/admin/roles/AddEditRoleDialog.vue'
import { can } from '@layouts/plugins/casl'

const isAddNewRoleDrawerVisible = ref(false)
const isRoleDialogVisible = ref(false)

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const roleDetail = ref()
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
    title: t('Modules'),
    key: 'modules',
  },
  {
    title: t('Description'),
    key: 'description',
  },
  {
    title: t('Redirect URL'),
    key: 'redirectURL',
  },
  {
    title: t('Admins'),
    key: 'admins',
    sortable: false,
  },
  {
    title: t('Active'),
    key: 'status',
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
  data: roleData,
  execute: fetchRoles,
  error,
} = await useApi(createUrl('/admin/roles', {
  query: {
    search: searchQuery,
    status: selectedStatus,
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

const roles = computed(() => roleData.value.roles)
const totalRoles = computed(() => roleData.value.total)

const commonsync = await $api('/admin/permissions').catch(err => console.log(err))

const permissions = computed(() => commonsync.permissions)

const modifyRole = async userData => {
  // refetch Role
  fetchRoles()
  emit('tabData')
}

const editRole = async value => {
  roleDetail.value = value
  
  isRoleDialogVisible.value = true
}

const deleteRole = async id => {
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
        await $api(`/admin/roles/${ id }`, { method: 'DELETE' })
        fetchRoles()
        emit('tabData')
      }
    })  
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
</script>

<template>
  <section>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Roles') }}
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
          <!-- 👉 Create invoice -->
          <VBtn
            v-if="can('admin-create-roles', 'Create Roles')"
            prepend-icon="tabler-plus"
            @click="isAddNewRoleDrawerVisible = true"
          >
            {{ $t('Create Role') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-roles', 'View Roles')"
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
                    :placeholder="$t('Search Role')"
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

      <VDivider v-if="can('admin-view-roles', 'View Roles')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-roles', 'View Roles')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalRoles"
        :headers="headers"
        :items="roles"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- id -->
        <template #[`item.id`]="{ item }">
          {{ item.id }}
        </template>

        <!-- name -->
        <template #[`item.name`]="{ item }">
          {{ item.name }}
          <VIcon 
            style="margin-left:6px" 
            @click="editRole(item)" class="tabler-pencil" 
          />
        </template>

        <!-- modules -->
        <template #[`item.modules`]="{ item }">
          {{ item.modules }}
        </template>

        <!-- redirectURL -->
        <template #[`item.redirectURL`]="{ item }">
          {{ item.redirectURL }}
        </template>

        <!-- description -->
        <template #[`item.description`]="{ item }">
          {{ item.description }}
        </template>

        <!-- admins -->
        <template #[`item.admins`]="{ item }">
          {{ item.admins.length }}
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
                  v-if="can('admin-update-roles', 'Update Roles')"
                  @click="editRole(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-roles', 'Delete Roles')"
                  @click="deleteRole(item._id)"
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
            :total-items="totalRoles"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <!-- 👉 Add New User -->
    <AddEditRoleDialog
      v-if="isAddNewRoleDrawerVisible"
      v-model:is-dialog-visible="isAddNewRoleDrawerVisible"
      v-model:permissions="permissions"
      @user-data="modifyRole"
    />

    <AddEditRoleDialog
      v-if="isRoleDialogVisible"
      v-model:is-dialog-visible="isRoleDialogVisible"
      v-model:permissions="permissions"
      v-model:role="roleDetail"
      @user-data="modifyRole"
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
