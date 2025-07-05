<script setup>
definePage({
  meta: {
    action: ['admin-view-manufacturers'],
    subject: ['View Manufacturers'],
    navActiveLink: 'admin-manufacturers',
    title: 'Manufacturer Details',
  },
})

import ContactInformationModule from '@/pages/admin/settings/contact-informations.vue'
import AddNewManufacturerDrawer from '@/views/admin/manufacturers/AddNewManufacturerDrawer.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const isManufacturerDialogVisible = ref(false)

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

const route = useRoute('admin-manufacturers-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: manufacturerDetail, execute: fetchManufacturers,
} = await useApi(createUrl(`/admin/manufacturers/${ route.params.id }`))

const manufacturerData = computed(() => manufacturerDetail.value)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const countryOptions = computed(() => commonsync.countryOptions)

const countries = countryOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const reloadTab = ref(true)

const modifyManufacturer = async userData => {
  // refetch Organization
  fetchManufacturers()
}

const deleteManufacturer = async () => {
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
        await $api(`/admin/manufacturers/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-manufacturers' })
      }
    })
}

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}

onMounted( async () => {
  if(route.query.detailstab) {
    userTab.value = route.query.detailstab
  }
})
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="manufacturerData"
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <VRow>
        <VCol
          cols="12"
          md="12"
          lg="12"
        >
          <VBreadcrumbs
            class="px-0 pb-2 pt-0 help-center-breadcrumbs"
            :items="[{ title: 'Manufacturers', to: { name: 'admin-manufacturers' }, class: 'text-primary' }, { title: 'Manufacturer Details of ' + manufacturerData.name }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          Manufacturer ID #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          Created At: {{ formatDateWithTime(manufacturerData.createdAt) }}, Updated At: {{ formatDateWithTime(manufacturerData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-manufacturers', 'Delete Manufacturers')"
          variant="tonal"
          color="error"
          @click="deleteManufacturer"
        >
          Delete Manufacturer
        </VBtn>
      </div>
    </div>
    <!-- 👉 Customer Profile  -->
    <VRow v-if="reloadTab">
      <VCol
        cols="12"
        md="12"
        lg="12"
      >
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-eye"
            />
            Details
          </VTab>

          <VTab v-if="can('admin-view-contact-informations', 'View Contact Informations')">
            <VIcon
              size="20"
              start
              icon="tabler-bookmarks"
            />
            Contact Informations
          </VTab>
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="manufacturerData">
              <VCardText class="text-center pt-12">
                <!-- 👉 Customer fullName -->
                <div class="text-body-1">
                  Manufacturer ID #{{ manufacturerData._id }}
                </div>
              </VCardText>

              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  Details
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      Name:
                      <span class="text-body-1 d-inline-block">
                        {{ manufacturerData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Business ID:
                      <span class="text-body-1 d-inline-block">
                        {{ manufacturerData.businessID }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Country:
                      <span class="text-body-1 d-inline-block">
                        {{ manufacturerData.countryID ? manufacturerData.countryID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      City:
                      <span class="text-body-1 d-inline-block">
                        {{ manufacturerData.city }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Street:
                      <span class="text-body-1 d-inline-block">
                        {{ manufacturerData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      House Number:
                      <span class="text-body-1 d-inline-block">
                        {{ manufacturerData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        Status:
                      </h6>
                      <VChip
                        label
                        :color="resolveStatusVariantAndIcon(manufacturerData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(manufacturerData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Remarks:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="manufacturerData?.remarks" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Created By:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && manufacturerData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: manufacturerData.createdBy._id } }"
                        >
                          {{ manufacturerData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ manufacturerData.createdBy ? manufacturerData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Updated By:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && manufacturerData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: manufacturerData.updatedBy._id } }"
                        >
                          {{ manufacturerData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ manufacturerData.updatedBy ? manufacturerData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-manufacturers', 'Update Manufacturers')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isManufacturerDialogVisible = !isManufacturerDialogVisible"
                >
                  Edit Manufacturer
                </VBtn>
              </VCardText>
            </VCard>
          </VWindowItem>

          <VWindowItem v-if="can('admin-view-contact-informations', 'View Contact Informations')">
            <ContactInformationModule
              :morphableid="route.params.id"
              morphabletype="Manufacturer"
              @tab-data="refreshTab"
            />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert
        type="error"
        variant="tonal"
      >
        Manufacturer with ID  {{ route.params.id }} not found!
      </VAlert>
    </div>

    <AddNewManufacturerDrawer
      v-if="isManufacturerDialogVisible"
      v-model:is-drawer-open="isManufacturerDialogVisible"
      v-model:manufacturer="manufacturerData"
      v-model:countries="countries"
      @user-data="modifyManufacturer"
    />
  </div>
</template>
