<script setup>
import { useI18n } from 'vue-i18n'

definePage({
  meta: {
    action: ['admin-view-certifications', 'admin-create-certifications'],
    subject: ['View Certifications', 'Create Certifications'],
    title: 'Certifications',
  },
})

import AddNewCertificationDrawer from '@/views/admin/settings/AddNewCertificationDrawer.vue'
import { can } from '@layouts/plugins/casl'

const ability = useAbility()

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
const isCertificationDialogVisible = ref(false)
const isAddNewCertificationDrawerVisible = ref(false)
const certificationDetail = ref()
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
    title: t('Active'),
    key: 'status',
  },
  {
    title: t('Logo'),
    key: 'logo',
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
  execute: fetchCertifications,
} = await useApi(createUrl('/admin/settings/certifications', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const certifications = computed(() => customerData.value.certifications)
const totalCertifications = computed(() => customerData.value.total)

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

const modifyCertification = async updateData => {
  // refetch Certification
  fetchCertifications()
}

const editCertification = async value => {
  certificationDetail.value = value
  
  isCertificationDialogVisible.value = true
}

const deleteCertification = async id => {
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
        await $api(`/admin/settings/certifications/${ id }`, { method: 'DELETE' })
        fetchCertifications()
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
              {{ $t('Certifications') }}
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
          <!-- 👉 Create Certification -->
          <VBtn
            v-if="can('admin-create-certifications', 'Create Certifications')"
            prepend-icon="tabler-plus"
            @click="isAddNewCertificationDrawerVisible = true"
          >
            {{ $t('Create Certification') }}
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-certifications', 'View Certifications')"
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
                    :placeholder="$t('Search Certification')"
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

      <VDivider v-if="can('admin-view-certifications', 'View Certifications')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-certifications', 'View Certifications')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalCertifications"
        :headers="headers"
        :items="certifications"
        item-value="id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- name -->
        <template #[`item.name`]="{ item }">
          {{ item.name }}
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

        <!-- logo -->
        <template #[`item.logo`]="{ item }">
          <VAvatar
            v-if="item.logo"
            variant="tonal"
            rounded
            size="44"
          >
            <VImg
              :src="item.logo"
              size="28"
              class="text-high-emphasis"
            />
          </VAvatar>
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
                  v-if="can('admin-update-certifications', 'Update Certifications')"
                  @click="editCertification(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>{{ $t('Edit') }}</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-certifications', 'Delete Certifications')"
                  @click="deleteCertification(item._id)"
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
            :total-items="totalCertifications"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewCertificationDrawer
      v-if="isAddNewCertificationDrawerVisible"
      v-model:is-drawer-open="isAddNewCertificationDrawerVisible"
      @update-data="modifyCertification"
    />

    <AddNewCertificationDrawer
      v-if="isCertificationDialogVisible"
      v-model:is-drawer-open="isCertificationDialogVisible"
      v-model:certification="certificationDetail"
      @update-data="modifyCertification"
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
