<script setup>
definePage({
  meta: {
    action: ['admin-view-admins'],
    subject: ['View Admins'],
    navActiveLink: 'admin-admins',
    title: 'Admin Details',
  },
})

import AddNewAdminDrawer from '@/views/admin/admins/AddNewAdminDrawer.vue'
import ResetPasswordDrawer from '@/views/admin/admins/ResetPasswordDrawer.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const isAdminDialogVisible = ref(false)
const isResetPasswordDrawerVisible = ref(false)

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

const route = useRoute('admin-admins-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: adminDetail, execute: fetchAdmins,
} = await useApi(createUrl(`/admin/admins/${ route.params.id }`))

const adminData = computed(() => adminDetail.value)

const reloadTab = ref(true)

const modifyAdmin = async userData => {
  // refetch Organization
  fetchAdmins()
}

const deleteAdmin = async () => {
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
        await $api(`/admin/admins/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-admins' })
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
      v-if="adminData"
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
            :items="[{ title: 'Admins', to: { name: 'admin-admins' }, class: 'text-primary' }, { title: 'Admin Details of ' + adminData.firstName + ' ' + adminData.lastName }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          Admin ID #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          Created At: {{ formatDateWithTime(adminData.createdAt) }}, Updated At: {{ formatDateWithTime(adminData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-admins', 'Delete Admin')"
          variant="tonal"
          color="error"
          @click="deleteAdmin"
        >
          Delete Admin
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
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="adminData">
              <VCardText class="text-center pt-12">
                <!-- 👉 Customer fullName -->
                <div class="text-body-1">
                  Admin ID #{{ adminData._id }}
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
                      First Name:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.firstName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Last Name:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.lastName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Email:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.email }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Position:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.position }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      City ID:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.cityId }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      City Name:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.cityName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Street:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      House Number:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Phone 1:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.phone1 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Phone 2:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.phone2 }}
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
                        :color="resolveStatusVariantAndIcon(adminData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(adminData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Remarks:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="adminData?.remarks" />
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-admins', 'Update Admin') && adminData.email != 'dev@annanovas.com'"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isAdminDialogVisible = !isAdminDialogVisible"
                >
                  Edit Admin
                </VBtn>
              </VCardText>

              <VCardText
                v-if="can('admin-update-admins', 'Update Admin') && adminData.email != 'dev@annanovas.com'"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isResetPasswordDrawerVisible = !isResetPasswordDrawerVisible"
                >
                  Reset Password
                </VBtn>
              </VCardText>
            </VCard>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert
        type="error"
        variant="tonal"
      >
        Admin with ID  {{ route.params.id }} not found!
      </VAlert>
    </div>
    
    <ResetPasswordDrawer
      v-if="isResetPasswordDrawerVisible"
      v-model:is-drawer-open="isResetPasswordDrawerVisible"
      v-model:admin="adminDetail"
      @user-data="modifyAdmin"
    />

    <AddNewAdminDrawer
      v-if="isAdminDialogVisible"
      v-model:is-drawer-open="isAdminDialogVisible"
      v-model:admin="adminData"
      v-model:roles="roles"
      @user-data="modifyAdmin"
    />
  </div>
</template>
