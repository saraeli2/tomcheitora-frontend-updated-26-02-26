<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-cities', 'admin-create-cities'],
    subject: ['View Cities', 'Create Cities'],
    title: 'Cities',
  },
})

import AddNewCityDrawer from '@/views/admin/settings/AddNewCityDrawer.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isCityDialogVisible = ref(false)
const isAddNewCityDrawerVisible = ref(false)
const cityDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = computed(() => [
  {
    title: t('ID'),
    key: 'cityId',
  },
  {
    title: t('Name (Hebrew)'),
    key: 'nameHe',
  },
  {
    title: t('Name (English)'),
    key: 'nameEn',
  },
  {
    title: t('Region ID'),
    key: 'regionID',
  },
  {
    title: t('Region Name'),
    key: 'regionName',
  },
  {
    title: t('Active'),
    key: 'status',
  },
  {
    title: t('Created By'),
    key: 'createdBy',
  },
  {
    title: t('Updated By'),
    key: 'updatedBy',
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
  execute: fetchCities,
} = await useApi(createUrl('/admin/settings/cities', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const cities = computed(() => customerData.value.cities)
const totalCities = computed(() => customerData.value.total)

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

const modifyCity = async userData => {
  // refetch City
  fetchCities()
}

const editCity = async value => {
  cityDetail.value = value
  
  isCityDialogVisible.value = true
}

const deleteCity = async id => {
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
        await $api(`/admin/settings/cities/${ id }`, { method: 'DELETE' })
        fetchCities()
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
              {{ $t('Cities') }}
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
          <!-- 👉 Create City -->
          <VBtn
            v-if="can('admin-create-cities', 'Create Cities')"
            prepend-icon="tabler-plus"
            @click="isAddNewCityDrawerVisible = true"
          >
            {{ $t('Create City') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-cities', 'View Cities')"
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
                    :placeholder="$t('Search City')"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedStatus"
                    :items="[
                      { value: 1, title: 'Active' },
                      { value: 0, title: 'Inactive' },
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

      <VDivider v-if="can('admin-view-cities', 'View Cities')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-cities', 'View Cities')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalCities"
        :headers="headers"
        :items="cities"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- cityId -->
        <template #[`item.cityId`]="{ item }">
          {{ item.cityId }}
        </template>
        
        <!-- nameHe -->
        <template #[`item.nameHe`]="{ item }">
          {{ item.nameHe }}
        </template>
        
        <!-- nameEn -->
        <template #[`item.nameEn`]="{ item }">
          {{ item.nameEn }}
        </template>
        
        <!-- regionID -->
        <template #[`item.regionID`]="{ item }">
          {{ item.regionID }}
        </template>
        
        <!-- regionName -->
        <template #[`item.regionName`]="{ item }">
          {{ item.regionName }}
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

        <!-- createdBy -->
        <template #[`item.createdBy`]="{ item }">
          <RouterLink
            v-if="can('admin-view-admins', 'View Admins') && item.createdBy"
            :to="{ name: 'admin-admins-detail-id', params: { id: item.createdBy._id } }"
          >
            {{ item.createdBy.name }}
          </RouterLink>
          <span v-else>{{ item.createdBy ? item.createdBy.name : '' }}</span>
        </template>

        <!-- updatedBy -->
        <template #[`item.updatedBy`]="{ item }">
          <RouterLink
            v-if="can('admin-view-admins', 'View Admins') && item.updatedBy"
            :to="{ name: 'admin-admins-detail-id', params: { id: item.updatedBy._id } }"
          >
            {{ item.updatedBy.name }}
          </RouterLink>
          <span v-else>{{ item.updatedBy ? item.updatedBy.name : '' }}</span>
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
                  v-if="can('admin-update-cities', 'Update Cities')"
                  @click="editCity(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-cities', 'Delete Cities')"
                  @click="deleteCity(item._id)"
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
            :total-items="totalCities"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewCityDrawer
      v-if="isAddNewCityDrawerVisible"
      v-model:is-drawer-open="isAddNewCityDrawerVisible"
      @user-data="modifyCity"
    />

    <AddNewCityDrawer
      v-if="isCityDialogVisible"
      v-model:is-drawer-open="isCityDialogVisible"
      v-model:city="cityDetail"
      @user-data="modifyCity"
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
