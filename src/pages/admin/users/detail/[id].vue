<script setup>
definePage({
  meta: {
    action: ['admin-view-users'],
    subject: ['View Users'],
    navActiveLink: 'admin-users',
    title: 'User Details',
  },
})

import AddNewUserDrawer from '@/views/admin/users/AddNewUserDrawer.vue'
import KidModule from '@/pages/admin/users/kids.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const isUserDialogVisible = ref(false)

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

const route = useRoute('admin-users-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: adminDetail, execute: fetchUsers,
} = await useApi(createUrl(`/admin/users/${ route.params.id }`))

const adminData = computed(() => adminDetail.value)
const adminFromData = computed(() => adminDetail.value)

adminFromData.value.communityID = adminData.value.communityID._id

const commonsync = await $api('/admin/communities/respond-with/extra-options').catch(err => console.log(err))

const communityOptions = computed(() => commonsync.communityOptions)

const communities = communityOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const reloadTab = ref(true)

const modifyUser = async userData => {
  // refetch Organization
  fetchUsers()
}

const deleteUser = async () => {
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
        await $api(`/admin/users/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-users' })
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
            :items="[{ title: 'Users', to: { name: 'admin-users' }, class: 'text-primary' }, { title: 'User Details of ' + adminData.firstName + ' ' + adminData.lastName }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          User ID #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          Created At: {{ formatDateWithTime(adminData.createdAt) }}, Updated At: {{ formatDateWithTime(adminData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-users', 'Delete Users')"
          variant="tonal"
          color="error"
          @click="deleteUser"
        >
          Delete User
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

          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-bookmarks"
            />
            Kids
          </VTab>
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="adminData">
              <VCardText
                v-if="adminData.imageID"
                class="text-center pt-12"
              >
                <VAvatar
                  rounded
                  :size="100"
                  color="primary"
                  variant="tonal"
                >
                  <VImg :src="adminData.imageID" />
                </VAvatar>
              </VCardText>

              <VCardText class="text-center pt-12">
                <!-- 👉 Customer fullName -->
                <div class="text-body-1">
                  User ID #{{ adminData._id }}
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
                      Phone:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.phone }}
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
                      Nationality:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.nationality }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Israeli ID Number:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.israeliIDNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Passport Number:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.passportNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      No. Of Kids:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.noOfKids }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Marital Status:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.maritalStatus }}
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
                      Created By:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && adminData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: adminData.createdBy._id } }"
                        >
                          {{ adminData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ adminData.createdBy ? adminData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Updated By:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && adminData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: adminData.updatedBy._id } }"
                        >
                          {{ adminData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ adminData.updatedBy ? adminData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-users', 'Update Users')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isUserDialogVisible = !isUserDialogVisible"
                >
                  Edit User
                </VBtn>
              </VCardText>
            </VCard>
          </VWindowItem>

          <VWindowItem>
            <KidModule
              :userid="route.params.id"
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
        User with ID  {{ route.params.id }} not found!
      </VAlert>
    </div>

    <AddNewUserDrawer
      v-if="isUserDialogVisible"
      v-model:is-drawer-open="isUserDialogVisible"
      v-model:user="adminFromData"
      v-model:communities="communities"
      @user-data="modifyUser"
    />
  </div>
</template>
