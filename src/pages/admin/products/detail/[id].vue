<script setup>
definePage({
  meta: {
    action: ['admin-view-products'],
    subject: ['View Products'],
    navActiveLink: 'admin-products',
    title: 'Product Details',
  },
})

import AddNewProductDrawer from '@/views/admin/products/AddNewProductDrawer.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const isProductDialogVisible = ref(false)

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

const route = useRoute('admin-products-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: productDetail, execute: fetchProducts,
} = await useApi(createUrl(`/admin/products/${ route.params.id }`))

const productData = computed(() => productDetail.value)

const commonsync = await $api('/admin/settings/commonsync/extra-options').catch(err => console.log(err))
const certificationOptions = computed(() => commonsync.certificationOptions)
const packagetypeOptions = computed(() => commonsync.packagetypeOptions)
const quantitytypeOptions = computed(() => commonsync.quantitytypeOptions)

const certifications = certificationOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const packagetypes = packagetypeOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const quantitytypes = quantitytypeOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const manufacturersync = await $api('/admin/manufacturers/respond-with/extra-options').catch(err => console.log(err))
const manufacturerOptions = computed(() => manufacturersync.manufacturerOptions)

const manufacturers = manufacturerOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const suppliersync = await $api('/admin/suppliers/respond-with/extra-options').catch(err => console.log(err))
const supplierOptions = computed(() => suppliersync.supplierOptions)

const suppliers = supplierOptions.value.map(item => ({
  value: item._id,
  title: item.name,
}))

const reloadTab = ref(true)

const modifyProduct = async userData => {
  // refetch Organization
  fetchProducts()
}

const deleteProduct = async () => {
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
        await $api(`/admin/products/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-products' })
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
      v-if="productData"
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
            :items="[{ title: 'Products', to: { name: 'admin-products' }, class: 'text-primary' }, { title: 'Product Details of ' + productData.name }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          Product ID #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          Created At: {{ formatDateWithTime(productData.createdAt) }}, Updated At: {{ formatDateWithTime(productData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-products', 'Delete Products')"
          variant="tonal"
          color="error"
          @click="deleteProduct"
        >
          Delete Product
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
            <VCard v-if="productData">
              <VCardText class="text-center pt-12">
                <!-- 👉 Customer fullName -->
                <div class="text-body-1">
                  Product ID #{{ productData._id }}
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
                        {{ productData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Slug:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.slug }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Internal SKU:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.internalSKU }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      External SKU:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.externalSKU }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Box SKU:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.boxSKU }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Manufacturer:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.manufacturerID ? productData.manufacturerID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Manufacturer:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.supplierID ? productData.supplierID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Certification:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.certificationID ? productData.certificationID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Package Type:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.packagetypeID ? productData.packagetypeID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Quantity Type:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.quantitytypeID ? productData.quantitytypeID.name : '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Purchase Price:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.purchasePrice }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Sale Price:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.salePrice }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Max Stock:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.maxStock }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Remaining Stock:
                      <span class="text-body-1 d-inline-block">
                        {{ productData.remainingStock }}
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
                        :color="resolveStatusVariantAndIcon(productData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(productData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Description:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="productData?.description" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Internal Remarks:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="productData?.internalRemarks" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Remarks:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="productData?.remarks" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Created By:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && productData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: productData.createdBy._id } }"
                        >
                          {{ productData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ productData.createdBy ? productData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      Updated By:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && productData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: productData.updatedBy._id } }"
                        >
                          {{ productData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ productData.updatedBy ? productData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-products', 'Update Products')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isProductDialogVisible = !isProductDialogVisible"
                >
                  Edit Product
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
        Product with ID  {{ route.params.id }} not found!
      </VAlert>
    </div>

    <AddNewProductDrawer
      v-if="isProductDialogVisible"
      v-model:is-drawer-open="isProductDialogVisible"
      v-model:product="productData"
      v-model:manufacturers="manufacturers"
      v-model:suppliers="suppliers"
      v-model:certifications="certifications"
      v-model:packagetypes="packagetypes"
      v-model:quantitytypes="quantitytypes"
      @user-data="modifyProduct"
    />
  </div>
</template>
