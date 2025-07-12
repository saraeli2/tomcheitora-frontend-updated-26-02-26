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

const commonsync = await $api('/admin/roles/respond-with/extra-options', {
  query: {
    type: 'Admin',
  }
}).catch(err => console.log(err))

const roleOptions = computed(() => commonsync.roleOptions)

const roles = roleOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const commonsyncCities = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const cityOptions = computed(() => commonsyncCities.cityOptions)

const cities = cityOptions.value.map(item => ({
  value: item._id,
  title: `${item.nameHe}`,
}))

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
            :items="[{ title: $t('Admins'), to: { name: 'admin-admins' }, class: 'text-primary' }, { title: 'Admin Details of ' + adminData.firstName + ' ' + adminData.lastName }]"
          />
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Admin ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(adminData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(adminData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-admins', 'Delete Admins')"
          variant="tonal"
          color="error"
          @click="deleteAdmin"
        >
          {{ $t('Delete Admin') }}
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
            {{ $t('Details') }}
          </VTab>
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="adminData">
              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  {{ $t('Details') }}
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('First Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.firstName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Last Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.lastName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Email') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.email }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Position') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.position }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('City') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.cityID ? adminData.cityID.nameHe : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Street') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('House Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone 1') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.phone1 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone 2') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ adminData.phone2 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        {{ $t('Status') }}:
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
                      {{ $t('Remarks') }}:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="adminData?.remarks" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Created By') }}:
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
                      {{ $t('Updated By') }}:
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
                v-if="can('admin-update-admins', 'Update Admins') && adminData.email != 'dev@annanovas.com'"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isAdminDialogVisible = !isAdminDialogVisible"
                >
                  {{ $t('Edit Admin') }}
                </VBtn>
              </VCardText>

              <VCardText
                v-if="can('admin-update-admins', 'Update Admins') && adminData.email != 'dev@annanovas.com'"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isResetPasswordDrawerVisible = !isResetPasswordDrawerVisible"
                >
                  {{ $t('Reset Password') }}
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
        {{ route.params.id }} {{ $t('Not Found!') }}
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
      v-model:cities="cities"
      @user-data="modifyAdmin"
    />
  </div>
</template>
