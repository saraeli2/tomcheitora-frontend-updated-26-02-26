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
    action: ['admin-view-sale-groups', 'admin-create-sale-groups'],
    subject: ['View Sale Groups', 'Create Sale Groups'],
    title: 'Sale Groups',
  },
})

import AddNewSaleGroupDrawer from '@/views/admin/sales/AddNewSaleGroupDrawer.vue'
import { can } from '@layouts/plugins/casl'

const { t } = useI18n()

import Swal from 'sweetalert2'

const selectedRows = ref([])
const isSaleGroupDialogVisible = ref(false)
const isAddNewSaleGroupDrawerVisible = ref(false)
const saleGroupDetail = ref()
const selectedSale = ref(props.saleid)

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const selectedGroup = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

// 👉 headers
const headers = computed(() => [
  {
    title: t('Group'),
    key: 'groupID',
    sortable: false,
  },
  {
    title: t('Limit Per Customer'),
    key: 'limitPerCustomer',
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
  data: saleGroupData,
  execute: fetchSaleGroups,
} = await useApi(createUrl('/admin/sale-groups', {
  query: {
    sale: selectedSale,
    group: selectedGroup,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const saleGroups = computed(() => saleGroupData.value.saleGroups)
const totalSaleGroups = computed(() => saleGroupData.value.total)

const commonsync = await $api('/admin/groups/respond-with/extra-options').catch(err => console.log(err))

const groupOptions = computed(() => commonsync.groupOptions)

const groups = groupOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const modifySaleGroup = async userData => {
  // refetch Group
  fetchSaleGroups()
  emit('tabData')
}

const editSaleGroup = async value => {
  saleGroupDetail.value = value
  
  isSaleGroupDialogVisible.value = true
}

const deleteSaleGroup = async id => {
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
        await $api(`/admin/sale-groups/${ id }`, { method: 'DELETE' })
        fetchSaleGroups()
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
              {{ $t('Sale Groups') }}
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
          <!-- 👉 Create Group -->
          <VBtn
            v-if="can('admin-create-sale-groups', 'Create Sale Groups')"
            prepend-icon="tabler-plus"
            @click="isAddNewSaleGroupDrawerVisible = true"
          >
            {{ $t('Add Sale Group') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4">
          <!-- 👉 Select status -->
          <div class="invoice-list-filter">
            <AppSelect
              v-model="selectedGroup"
              :placeholder="$t('Select Group')"
              clearable
              clear-icon="tabler-x"
              single-line
              :items="groups"
            />
          </div>
        </div>
      </VCardText>

      <VDivider />

      <VDivider v-if="can('admin-view-sale-groups', 'View Sale Groups')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-sale-groups', 'View Sale Groups')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalSaleGroups"
        :headers="headers"
        :items="saleGroups"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- groupID -->
        <template #[`item.groupID`]="{ item }">
          {{ item.groupID ? item.groupID.name : '' }}
        </template>

        <!-- limitPerCustomer -->
        <template #[`item.limitPerCustomer`]="{ item }">
          {{ item.limitPerCustomer }}
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
                  v-if="can('admin-update-sale-groups', 'Update Sale Groups')"
                  @click="editSaleGroup(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-sale-groups', 'Delete Sale Groups')"
                  @click="deleteSaleGroup(item._id)"
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
            :total-items="totalSaleGroups"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewSaleGroupDrawer
      v-if="isAddNewSaleGroupDrawerVisible"
      v-model:is-drawer-open="isAddNewSaleGroupDrawerVisible"
      v-model:groups="groups"
      v-model:saleid="selectedSale"
      @user-data="modifySaleGroup"
    />

    <AddNewSaleGroupDrawer
      v-if="isSaleGroupDialogVisible"
      v-model:is-drawer-open="isSaleGroupDialogVisible"
      v-model:sale-group="saleGroupDetail"
      v-model:groups="groups"
      v-model:saleid="selectedSale"
      @user-data="modifySaleGroup"
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
