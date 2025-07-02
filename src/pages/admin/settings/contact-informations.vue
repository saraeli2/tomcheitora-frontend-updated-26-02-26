<script setup>
const props = defineProps({
  morphableid: {
    type: String,
    required: true,
  },
  morphabletype: {
    type: String,
    required: true,
  },
})

definePage({
  meta: {
    action: ['admin-view-contact-informations', 'admin-create-contact-informations'],
    subject: ['View Contact Informations', 'Create Contact Informations'],
    title: 'Contact Informations',
  },
})

import AddNewContactInfoDrawer from '@/views/admin/settings/AddNewContactInfoDrawer.vue'
import { can } from '@layouts/plugins/casl'

const ability = useAbility()

import Swal from 'sweetalert2'

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isContactInfoDialogVisible = ref(false)
const isAddNewContactInfoDrawerVisible = ref(false)
const contactInformationDetail = ref()
const selectedMorphableID = ref(props.morphableid)
const selectedMorphableType = ref(props.morphabletype)
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const headers = [
  {
    title: 'First Name',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    key: 'lastName',
  },
  {
    title: 'Phone1',
    key: 'phone1',
  },
  {
    title: 'Phone2',
    key: 'phone2',
  },
  {
    title: 'Email',
    key: 'email',
  },
  {
    title: 'Created At',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    key: 'updatedAt',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const {
  data: customerData,
  execute: fetchCommunities,
} = await useApi(createUrl('/admin/contact-informations', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    morphableID: selectedMorphableID,
    morphableType: selectedMorphableType,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

const contactInformations = computed(() => customerData.value.contactInformations)
const totalContactInformations = computed(() => customerData.value.total)

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

const modifyContactInfo = async userData => {
  // refetch ContactInfo
  fetchCommunities()
}

const editContactInfo = async value => {
  contactInformationDetail.value = value
  
  isContactInfoDialogVisible.value = true
}

const deleteContactInfo = async id => {
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
        await $api(`/admin/contact-informations/${ id }`, { method: 'DELETE' })
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
              Contact Informations
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>Show</span>
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
          <!-- 👉 Create ContactInfo -->
          <VBtn
            v-if="can('admin-create-contact-informations', 'Create Contact Informations')"
            prepend-icon="tabler-plus"
            @click="isAddNewContactInfoDrawerVisible = true"
          >
            Create Contact Information
          </VBtn>
        </div>

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      
      <VExpansionPanels
        v-if="can('admin-view-contact-informations', 'View Contact Informations')"
        v-model="panel"
      >
        <VExpansionPanel>
          <VExpansionPanelTitle>Search</VExpansionPanelTitle>

          <VExpansionPanelText>
            <VCardText>
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <AppTextField
                    v-model="searchQuery"
                    placeholder="Search Contact Information"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>

      <VDivider v-if="can('admin-view-contact-informations', 'View Contact Informations')" />

      <!-- SECTION Datatable -->
      <VDataTableServer
        v-if="can('admin-view-contact-informations', 'View Contact Informations')"
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalContactInformations"
        :headers="headers"
        :items="contactInformations"
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

        <!-- phone1 -->
        <template #[`item.phone1`]="{ item }">
          {{ item.phone1 }}
        </template>

        <!-- phone2 -->
        <template #[`item.phone2`]="{ item }">
          {{ item.phone2 }}
        </template>

        <!-- email -->
        <template #[`item.email`]="{ item }">
          {{ item.email }}
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
                  v-if="can('admin-update-contact-informations', 'Update Contact Informations')"
                  @click="editContactInfo(item)"
                >
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem
                  v-if="can('admin-delete-contact-informations', 'Delete Contact Informations')"
                  @click="deleteContactInfo(item._id)"
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
            :total-items="totalContactInformations"
          />
        </template>
      </VDataTableServer>
    <!-- !SECTION -->
    </VCard>
    <AddNewContactInfoDrawer
      v-if="isAddNewContactInfoDrawerVisible"
      v-model:is-drawer-open="isAddNewContactInfoDrawerVisible"
      v-model:morphableid="selectedMorphableID"
      v-model:morphabletype="selectedMorphableType"
      @user-data="modifyContactInfo"
    />

    <AddNewContactInfoDrawer
      v-if="isContactInfoDialogVisible"
      v-model:is-drawer-open="isContactInfoDialogVisible"
      v-model:contact-information="contactInformationDetail"
      v-model:morphableid="selectedMorphableID"
      v-model:morphabletype="selectedMorphableType"
      @user-data="modifyContactInfo"
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
