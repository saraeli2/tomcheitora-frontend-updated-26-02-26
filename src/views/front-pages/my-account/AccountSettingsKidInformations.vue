<script setup>
import { useToast } from 'vue-toastification'

const props = defineProps({
  user: {
    type: Object,
    required: false,
    default: () => ({
      // eslint-disable-next-line camelcase
      _id: '',
    }),
  },
})

import AddNewKidDrawer from '@/views/admin/users/AddNewKidDrawer.vue'
import { can } from '@layouts/plugins/casl'

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
const isKidDialogVisible = ref(false)
const isAddNewKidDrawerVisible = ref(false)
const kidDetail = ref()
const selectedUserID = ref(props.user?._id)
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = computed(() => [
  {
    title: t('First Name'),
    key: 'firstName',
  },
  {
    title: t('Last Name'),
    key: 'lastName',
  },
  {
    title: t('DoB'),
    key: 'dob',
  },
  {
    title: t('ID Number'),
    key: 'IDNumber',
  },
  {
    title: t('Marital Status'),
    key: 'maritalStatus',
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
  execute: fetchCommunities,
  error,
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
              {{ $t('Kid Informations') }}
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
          <!-- 👉 Create Kid -->
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewKidDrawerVisible = true"
          >
            {{ $t('Create Kid Information') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
     
      <!-- SECTION Datatable -->
      <VDataTableServer
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
                  @click="editKid(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
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

nav.v-navigation-drawer.v-navigation-drawer--right.v-navigation-drawer--temporary.v-navigation-drawer--active.v-theme--light.scrollable-content {
    top: 0 !important;
    z-index: 999999;
    height: 100% !important;
}
header {
    z-index: 9 !important;
}
</style>
