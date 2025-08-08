<script setup>
import { useI18n } from 'vue-i18n'
import Draggable from 'vuedraggable'

definePage({
  meta: {
    action: ['admin-view-communities', 'admin-create-communities'],
    subject: ['View Community', 'Create Community'],
    title: 'Community',
  },
})

import AddNewCommunityDialog from '@/views/admin/communities/AddNewCommunityDialog.vue'
import AddNewImportUserDrawer from '@/views/admin/communities/AddNewImportUserDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedCity = ref()
const selectedRows = ref([])
const selectedDiscountPercentage = ref()
const selectedDiscountFixed = ref()

// Data table options
const itemsPerPage = ref(50)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isCommunityDialogVisible = ref(false)
const isAddNewCommunityDialogVisible = ref(false)
const isImportUserDialogVisible = ref(false)
const communityDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const defaultColumns = [
  {
    title: t('Name'),
    key: 'name',
    visible: true,
  },
  {
    title: t('House Number'),
    key: 'houseNumber',
    visible: true,
  },
  {
    title: t('Discount in %'),
    key: 'discountPercentage',
    visible: true,
  },
  {
    title: t('Discount Fixed Number'),
    key: 'discountFixed',
    visible: true,
  },
  {
    title: t('Active'),
    key: 'status',
    visible: true,
  },
  {
    title: t('Users Count'),
    key: 'totalUsers',
    sortable: false,
    visible: true,
  },
  {
    title: t('Active User Count'),
    key: 'activeUsers',
    sortable: false,
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
  execute: fetchCommunities,
  error,
} = await useApi(createUrl('/admin/communities', {
  query: {
    search: searchQuery,
    status: selectedStatus,
    discountPercentage: selectedDiscountPercentage,
    discountFixed: selectedDiscountFixed,
    cityID: selectedCity,
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

const communities = computed(() => customerData.value.communities)
const totalCommunities = computed(() => customerData.value.total)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsync.cityOptions)

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

const modifyCommunity = async updateData => {
  // refetch Community
  fetchCommunities()
}

const editCommunity = async value => {
  const data = await $api(`/admin/communities/${ value._id }`).catch(err => console.log(err))

  communityDetail.value = data
  
  isCommunityDialogVisible.value = true
}

const importUsers = async value => {

  communityDetail.value = value
  
  isImportUserDialogVisible.value = true
}

const deleteCommunity = async id => {
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
    confirmButtonText: t('delete.Delete all users as well'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        deleteCommunitywithUser(id)
      }
    })  
}

const deleteCommunitywithUser = async id => {
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
    confirmButtonText: t('delete.Are You Sure?'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/communities/${ id }`, { method: 'DELETE' })
        fetchCommunities()
      }
    })  
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
  const saved = localStorage.getItem('community-columns')
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
    localStorage.setItem('community-columns', JSON.stringify(val))
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
              {{ $t('Community') }}
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
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
                { value: 200, title: '200' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPage = parseInt($event, 10)"
            />
          </div>
          <!-- 👉 Create Community -->
          <VBtn
            v-if="can('admin-create-communities', 'Create Community')"
            prepend-icon="tabler-plus"
            @click="isAddNewCommunityDialogVisible = true"
          >
            {{ $t('Create Community') }}
          </VBtn>
        </div>
        <VIcon style="margin-left: auto" @click="showColumnDialog = true" class="tabler-settings" />

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-communities', 'View Community')"
        v-model="panel"
      >
        <VExpansionPanel>
          <VExpansionPanelTitle>{{ $t('Search') }}</VExpansionPanelTitle>

          <VExpansionPanelText>
            <VCardText style="padding: 0;">
              <VRow>
                <VCol
                  cols="12"
                  sm="3"
                >
                  <AppTextField
                    v-model="searchQuery"
                    :placeholder="$t('Search Community')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="3"
                >
                  <AppTextField
                    v-model="selectedDiscountPercentage"
                    :placeholder="$t('Discount in')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="3"
                >
                  <AppTextField
                    v-model="selectedDiscountFixed"
                    :placeholder="$t('Discount Fixed Number')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="3"
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
                  sm="3"
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

      <VDivider v-if="can('admin-view-communities', 'View Community')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-communities', 'View Community')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalCommunities"
        :headers="visibleHeaders"
        :items="communities"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-communities-detail-id', params: { id: item._id } }">
            {{ item.name }}
          </RouterLink>
          <VIcon style="margin-left:6px" @click="editCommunity(item)" class="tabler-pencil" />
        </template>

        <!-- houseNumber -->
        <template #[`item.houseNumber`]="{ item }">
          {{ item.houseNumber }}
        </template>

        <!-- discountPercentage -->
        <template #[`item.discountPercentage`]="{ item }">
          {{ item.discountPercentage }}
        </template>

        <!-- discountFixed -->
        <template #[`item.discountFixed`]="{ item }">
          {{ item.discountFixed }}
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
                <VListItem :to="{ name: 'admin-communities-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-create-users', 'Create Users')"
                  @click="importUsers(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-upload" />
                  </template>
                  <VListItemTitle>{{ $t('Import') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-communities', 'Update Community')"
                  @click="editCommunity(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-communities', 'Delete Community')"
                  @click="deleteCommunity(item._id)"
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
            :total-items="totalCommunities"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewCommunityDialog
      v-if="isAddNewCommunityDialogVisible"
      v-model:is-dialog-visible="isAddNewCommunityDialogVisible"
      v-model:cities="cities"
      @update-data="modifyCommunity"
    />

    <AddNewCommunityDialog
      v-if="isCommunityDialogVisible"
      v-model:is-dialog-visible="isCommunityDialogVisible"
      v-model:community="communityDetail"
      v-model:cities="cities"
      @update-data="modifyCommunity"
    />

    <AddNewImportUserDrawer
      v-if="isImportUserDialogVisible"
      v-model:is-drawer-open="isImportUserDialogVisible"
      v-model:community="communityDetail"
      @update-data="modifyCommunity"
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
