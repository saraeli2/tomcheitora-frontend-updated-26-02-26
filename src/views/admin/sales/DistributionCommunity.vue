<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  saleid: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([
  'tabData',
])

definePage({
  meta: {
    action: ['admin-view-sale-communities', 'admin-create-sale-communities'],
    subject: ['View Sale Community', 'Create Sale Community'],
    title: 'Sale Community',
  },
})

import AddNewSaleCommunityDrawer from '@/views/admin/sales/AddNewSaleCommunityDrawer.vue'
import { can } from '@layouts/plugins/casl'

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isSaleCommunityDialogVisible = ref(false)
const isAddNewSaleCommunityDrawerVisible = ref(false)
const saleCommunityDetail = ref()
const selectedSale = ref(props.saleid)

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedCommunity = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const headers = computed(() => [
  {
    title: t('Community'),
    key: 'communityID',
    sortable: false,
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
  data: saleCommunityData,
  execute: fetchSaleCommunities,
} = await useApi(createUrl('/admin/sale-communities', {
  query: {
    sale: selectedSale,
    community: selectedCommunity,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const saleCommunities = computed(() => saleCommunityData.value.saleCommunities)
const totalSaleCommunities = computed(() => saleCommunityData.value.total)

const commonsync = await $api('/admin/communities/respond-with/extra-options').catch(err => console.log(err))

const communityOptions = computed(() => commonsync.communityOptions)

const communities = communityOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const modifySaleCommunity = async userData => {
  fetchSaleCommunities()
  emit('tabData')
}

const editSaleCommunity = async value => {
  saleCommunityDetail.value = value
  
  isSaleCommunityDialogVisible.value = true
}

const deleteSaleCommunity = async id => {
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
        await $api(`/admin/sale-communities/${ id }`, { method: 'DELETE' })
        fetchSaleCommunities()
        emit('tabData')
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
              {{ $t('Sale Communities') }}
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
                { value: 5, title: '5' },
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPage = parseInt($event, 10)"
            />
          </div>
          <VBtn
            v-if="can('admin-create-sale-communities', 'Create Sale Communities')"
            prepend-icon="tabler-plus"
            @click="isAddNewSaleCommunityDrawerVisible = true"
          >
            {{ $t('Add Sale Community') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Select status -->
          <div class="invoice-list-filter">
            <AppSelect
              v-model="selectedCommunity"
              :placeholder="$t('Select Community')"
              clearable
              clear-icon="tabler-x"
              single-line
              :items="communities"
            />
          </div>
        </div>
      </VCardText>

      <VDivider />

      <VDivider v-if="can('admin-view-sale-communities', 'View Sale Communities')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-sale-communities', 'View Sale Communities')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalSaleCommunities"
        :headers="headers"
        :items="saleCommunities"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #[`item.communityID`]="{ item }">
          {{ item.communityID ? item.communityID.name : '' }}
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
                  v-if="can('admin-update-sale-communities', 'Update Sale Communities')"
                  @click="editSaleCommunity(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-sale-communities', 'Delete Sale Communities')"
                  @click="deleteSaleCommunity(item._id)"
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
            :total-items="totalSaleCommunities"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewSaleCommunityDrawer
      v-if="isAddNewSaleCommunityDrawerVisible"
      v-model:is-drawer-open="isAddNewSaleCommunityDrawerVisible"
      v-model:communities="communities"
      v-model:saleid="selectedSale"
      @user-data="modifySaleCommunity"
    />

    <AddNewSaleCommunityDrawer
      v-if="isSaleCommunityDialogVisible"
      v-model:is-drawer-open="isSaleCommunityDialogVisible"
      v-model:sale-community="saleCommunityDetail"
      v-model:communities="communities"
      v-model:saleid="selectedSale"
      @user-data="modifySaleCommunity"
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
