<script setup>
definePage({
  meta: {
    action: ['admin-view-suppliers'],
    subject: ['View Suppliers'],
    navActiveLink: 'admin-suppliers',
    title: 'Supplier Details',
  },
})

import AddNewSupplierDialog from '@/views/admin/suppliers/AddNewSupplierDialog.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const isSupplierDialogVisible = ref(false)

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

const route = useRoute('admin-suppliers-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: supplierDetail, execute: fetchSuppliers,
} = await useApi(createUrl(`/admin/suppliers/${ route.params.id }`))

const supplierData = computed(() => supplierDetail.value)

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

const reloadTab = ref(true)

const modifySupplier = async updateData => {
  // refetch Organization
  fetchSuppliers()
}

const deleteSupplier = async () => {
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
        await $api(`/admin/suppliers/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-suppliers' })
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
      v-if="supplierData"
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
            :items="[{ title: $t('Suppliers'), to: { name: 'admin-suppliers' }, class: 'text-primary' }, { title: supplierData.name }]"
          />
        </VCol>
      </VRow>

      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Supplier ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(supplierData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(supplierData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-suppliers', 'Delete Suppliers')"
          variant="tonal"
          color="error"
          @click="deleteSupplier"
        >
          {{ $t('Delete Supplier') }}
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
            <VCard v-if="supplierData">
              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  {{ $t('Details') }}
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Business ID') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.businessID }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Country') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.countryID ? supplierData.countryID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('City') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.cityID ? supplierData.cityID.nameHe : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Street') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('House Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.houseNumber }}
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
                        :color="resolveStatusVariantAndIcon(supplierData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(supplierData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Remarks') }}:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="supplierData?.remarks" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Created By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && supplierData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: supplierData.createdBy._id } }"
                        >
                          {{ supplierData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ supplierData.createdBy ? supplierData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Updated By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && supplierData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: supplierData.updatedBy._id } }"
                        >
                          {{ supplierData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ supplierData.updatedBy ? supplierData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText>
                <VDivider class="my-4" />

                <h5 class="text-h5">
                  {{ $t('Contact information 1') }}
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('First Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo1.firstName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Last Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo1.lastName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone 1') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo1.phone1 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone 2') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo1.phone2 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Email') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo1.email }}
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText>
                <VDivider class="my-4" />

                <h5 class="text-h5">
                  {{ $t('Contact information 2') }}
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('First Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo2.firstName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Last Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo2.lastName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone 1') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo2.phone1 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Phone 2') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo2.phone2 }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Email') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ supplierData.contactInfo2.email }}
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-suppliers', 'Update Suppliers')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isSupplierDialogVisible = !isSupplierDialogVisible"
                >
                  {{ $t('Edit Supplier') }}
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

    <AddNewSupplierDialog
      v-if="isSupplierDialogVisible"
      v-model:is-dialog-visible="isSupplierDialogVisible"
      v-model:supplier="supplierData"
      v-model:countries="countries"
      v-model:cities="cities"
      @update-data="modifySupplier"
    />
  </div>
</template>
