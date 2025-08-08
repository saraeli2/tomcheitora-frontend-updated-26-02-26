<script setup>
import { useI18n } from 'vue-i18n'
import Draggable from 'vuedraggable'

definePage({
  meta: {
    action: ['admin-view-manufacturers', 'admin-create-manufacturers'],
    subject: ['View Manufacturers', 'Create Manufacturers'],
    title: 'Manufacturers',
  },
})

import AddNewManufacturerDialog from '@/views/admin/manufacturers/AddNewManufacturerDialog.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedCity = ref()
const selectedCountry = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isManufacturerDialogVisible = ref(false)
const isAddNewManufacturerDialogVisible = ref(false)
const manufacturerDetail = ref()
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
    title: t('Business ID'),
    key: 'businessID',
    visible: true,
  },
  {
    title: t('Country'),
    key: 'countryID',
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
    title: t('Active'),
    key: 'status',
    visible: true,
  },
  {
    title: t('Created By'),
    key: 'createdBy',
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
  execute: fetchManufacturers,
  error,
} = await useApi(createUrl('/admin/manufacturers', {
  query: {
    search: searchQuery,
    status: selectedStatus,
    cityID: selectedCity,
    country: selectedCountry,
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

const manufacturers = computed(() => customerData.value.manufacturers)
const totalManufacturers = computed(() => customerData.value.total)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const countryOptions = computed(() => commonsync.countryOptions)
const cityOptions = computed(() => commonsync.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

const countries = countryOptions.value.map(item => ({
  value: item._id,
  title: item.name,
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

const modifyManufacturer = async updateData => {
  // refetch Manufacturer
  fetchManufacturers()
}

const editManufacturer = async value => {
  const data = await $api(`/admin/manufacturers/${ value._id }`).catch(err => console.log(err))

  manufacturerDetail.value = data

  isManufacturerDialogVisible.value = true
}

const deleteManufacturer = async id => {
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
        await $api(`/admin/manufacturers/${ id }`, { method: 'DELETE' })
        fetchManufacturers()
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
  const saved = localStorage.getItem('manu-columns')
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
    localStorage.setItem('manu-columns', JSON.stringify(val))
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
              {{ $t('Manufacturers') }}
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
          <!-- 👉 Create Manufacturer -->
          <VBtn
            v-if="can('admin-create-manufacturers', 'Create Manufacturers')"
            prepend-icon="tabler-plus"
            @click="isAddNewManufacturerDialogVisible = true"
          >
            {{ $t('Create Manufacturer') }}
          </VBtn>
        </div>
        <VIcon style="margin-left: auto" @click="showColumnDialog = true" class="tabler-settings" />
        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-manufacturers', 'View Manufacturers')"
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
                    :placeholder="$t('Search Manufacturer')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppAutocomplete
                    v-model="selectedCountry"
                    :items="countries"
                    :placeholder="$t('Country')"
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

      <VDivider v-if="can('admin-view-manufacturers', 'View Manufacturers')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-manufacturers', 'View Manufacturers')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalManufacturers"
        :headers="visibleHeaders"
        :items="manufacturers"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          <RouterLink :to="{ name: 'admin-manufacturers-detail-id', params: { id: item._id } }">
            {{ item.name }}
          </RouterLink>
          <VIcon 
            style="margin-left:6px" 
            @click="editManufacturer(item)" class="tabler-pencil" 
          />
        </template>

        <!-- businessID -->
        <template #[`item.businessID`]="{ item }">
          {{ item.businessID }}
        </template>

        <!-- countryID -->
        <template #[`item.countryID`]="{ item }">
          {{ item.countryID ? item.countryID.name : '' }}
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
          {{ item.createdBy ? item.createdBy.name : '' }}
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
                <VListItem :to="{ name: 'admin-manufacturers-detail-id', params: { id: item._id } }">
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>
                  <VListItemTitle>{{ $t('View') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-update-manufacturers', 'Update Manufacturers')"
                  @click="editManufacturer(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-manufacturers', 'Delete Manufacturers')"
                  @click="deleteManufacturer(item._id)"
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
            :total-items="totalManufacturers"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>

    <AddNewManufacturerDialog
      v-if="isAddNewManufacturerDialogVisible"
      v-model:is-dialog-visible="isAddNewManufacturerDialogVisible"
      v-model:countries="countries"
      v-model:cities="cities"
      @update-data="modifyManufacturer"
    />

    <AddNewManufacturerDialog
      v-if="isManufacturerDialogVisible"
      v-model:is-dialog-visible="isManufacturerDialogVisible"
      v-model:countries="countries"
      v-model:cities="cities"
      v-model:manufacturer="manufacturerDetail"
      @update-data="modifyManufacturer"
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
