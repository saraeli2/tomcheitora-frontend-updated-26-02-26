<script setup>
import { useToast } from 'vue-toastification'

definePage({
  meta: {
    action: ['admin-update-orders'],
    subject: ['Order'],
    navActiveLink: 'admin-sales',
    title: 'Update Order',
  },
})

import Swal from 'sweetalert2'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const ability = useAbility()

const toast = useToast()

const formData = ref()
const orderItems = ref([])
const saleID = ref()
const isFormValid = ref(false)
const refForm = ref()
const products = ref([])
const users = ref([])

const route = useRoute('admin-orders-edit-id')
const router = useRouter()

const handleUsers = async val => {
  if(val) {
    const commonsync = await $api('/admin/users/respond-with/extra-options', {
      query: {
        sale: val,
      },
    }).catch(err => console.log(err))
    
    users.value = commonsync.userOptions.map(item => ({
      value: item._id,
      title: `${ item.firstName } ${ item.lastName }`,
    }))
  } else {
    users.value = []
  }
}

const handleProducts = async val => {
  if(val) {
    const productdata = await $api('/admin/products/respond-with/extra-options', {
      query: {
        sale: val,
      },
    }).catch(err => console.log(err))
    
    products.value = productdata.productOptions.map(item => ({
      value: item._id,
      title: item.name,
    }))
  } else {
    products.value = []
  }
}

const {
  data: shopDetail, execute: fetchOrders, error,
} = await useApi(createUrl(`/admin/orders/${ route.params.id }`, {
  query: {
    edit: 1,
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

const orderData = computed(() => shopDetail.value.order)

formData.value = orderData.value
orderItems.value = orderData.value.orderItems

if(orderData.value.stationID){
  formData.value.stationID = orderData.value.stationID?._id
}

handleUsers(orderData.value.saleID._id)
handleProducts(orderData.value.saleID._id)

const errors = ref({
  status: undefined,
  comment: undefined,
  userID: undefined,
  vat: undefined,
  vatType: undefined,
  discountType: undefined,
  discount: undefined,

  // NEW: For per-item errors
  products: [],
})

const availableProducts = index => {
  const selectedIds = orderItems.value
    .filter((_, i) => i !== index)
    .map(item => item.productID)

  return products.value.filter(
    product => !selectedIds.includes(product.value),
  )
}

const addItem = () => {
  const selectedIds = orderItems.value.map(item => item.productID)
  const available = products.value.filter(p => !selectedIds.includes(p.value))

  if (available.length === 0) {
    toast.warning("All available products have already been added.")
    
    return
  }

  orderItems.value.push({
    'productID': '',
    'quantity': '',
  })
}

const deleteOrderItem = async index => {
  orderItems.value.splice(index, 1)
}

const submit = async () => {
  try {
    const res = await $api(`/admin/orders/${ route.params.id }`, {
      method: 'PATCH',
      body: {
        status: formData.value.status,
        stationID: formData.value.stationID,
        vat: formData.value.vat,
        vatType: formData.value.vatType,
        discount: formData.value.discount,
        discountType: formData.value.discountType,
        userID: formData.value.userID,
        comment: formData.value.comment,
        products: orderItems.value,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    await nextTick(() => {
      refForm.value?.reset()
      refForm.value?.resetValidation()
      toast.success("Successfully saved")
      router.push({ name: 'admin-orders-detail-id', params: { id: route.params.id } })
    })
  } catch (err) {
    console.log(err)
  }
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      submit()
  })
}

const cancel = async () => {
  
  Swal.fire({
    title: t('delete.Are You Sure?'),
    html: t('delete.cancelMessage', {
      action: `<strong>${t('delete.confirmaction')}</strong>`,
    }),
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: t('delete.No'),
    confirmButtonText: t('delete.Yes!'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        router.push({ name: 'admin-orders-detail-id', params: { id: route.params.id } })
      }
    })
}

const handleProductPrices = async (val, key) => {
  if(val) {
    const data = await $api(`/admin/sale-products/${ val }`).catch(err => console.log(err))

    orderItems[key].limitPerCustomer = data.limitPerCustomer
  } else {
    orderItems[key].limitPerCustomer = 0
  }
  
}

const commonsync = await $api('/admin/stations/respond-with/extra-options').catch(err => console.log(err))

const stationOptions = computed(() => commonsync.stationOptions)

const stations = stationOptions.value.map(item => ({
  value: item._id,
  title: `${item.cityID?.nameHe} - ${item.name}`,
}))
</script>

<template>
  <div>
    <VRow>
      <VCol
        cols="12"
        md="12"
        lg="12"
      >
        <VBreadcrumbs
          class="px-0 pb-2 pt-0 help-center-breadcrumbs"
          :items="[{ title: $t('Sales'), to: { name: 'admin-sales' }, class: 'text-primary' }, { title: orderData.saleID.name, to: { name: 'admin-sales-detail-id', params: { id: orderData.saleID._id } }, class: 'text-primary' }, { title: $t('Order Details') + ' ' + orderData._id, to: { name: 'admin-orders-detail-id', params: { id: orderData._id } }, class: 'text-primary' }, { title: $t('Edit Order') }]"
        />
      </VCol>
    </VRow>

    <VForm 
      ref="refForm"
      v-model="isFormValid"
      @submit.prevent="onSubmit"
    >
      <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
        <div class="d-flex flex-column justify-center">
          <h4 class="text-h4 font-weight-medium">
            {{ $t('Edit Order') }}
          </h4>
        </div>

        <div class="d-flex gap-4 align-center flex-wrap">
          <VBtn
            variant="tonal"
            color="secondary"
            @click="cancel"
          >
            {{ $t('Cancel') }}
          </VBtn>
          <VBtn type="submit">
            {{ $t('Edit Order') }}
          </VBtn>
        </div>
      </div>
      <VRow>
        <VCol
          cols="12"
          md="6"
          lg="6"
        >
          <!-- 👉 Product Information -->
          <VCard
            class="mb-6"
            :title="$t('Order Information')"
          >
            <VCardText>
              <VRow>
                <VCol cols="12">
                  <AppAutocomplete
                    v-model="formData.stationID"
                    :items="stations"
                    :placeholder="$t('Select Station')"
                    :label="$t('Station')"
                    :error-messages="errors.status"
                  />
                </VCol>

                <VCol cols="12">
                  <AppAutocomplete
                    v-model="formData.status"
                    :items="[
                      { value: 'Pending', title: 'Pending' },
                      { value: 'Processing', title: 'Processing' },
                      { value: 'Delivered', title: 'Delivered' },
                      { value: 'Completed', title: 'Completed' },
                      { value: 'Cancelled', title: 'Cancelled' },
                    ]"
                    :placeholder="$t('Select Status')"
                    :label="$t('Status')"
                    :error-messages="errors.status"
                    clearable
                  />
                </VCol>
                <VCol cols="12">
                  <AppTextarea
                    v-model="formData.comment"
                    :label="$t('Comment')"
                    :placeholder="$t('Comment')"
                    :error-messages="errors.comment"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>
        <VCol
          cols="12"
          md="6"
          lg="6"
        >
          <!-- 👉 Discount Information -->
          <VCard
            class="mb-6"
            :title="$t('Discount & Vat Information')"
          >
            <VCardText>
              <VRow>
                <VCol cols="12">
                  <AppTextField
                    v-model="formData.discount"
                    :label="$t('Discount')"
                    :placeholder="$t('Discount')"
                    :error-messages="errors.discount"
                    disabled
                  />
                </VCol>

                <VCol cols="12">
                  <AppAutocomplete
                    v-model="formData.discountType"
                    :items="[
                      { value: 'Fixed', title: 'Fixed' },
                      { value: 'Percentage', title: 'Percentage' },
                    ]"
                    :placeholder="$t('Select Discount Type')"
                    :label="$t('Discount Type')"
                    :error-messages="errors.discountType"
                    clearable
                    disabled
                  />
                </VCol>

                <VCol cols="12">
                  <AppTextField
                    v-model="formData.vat"
                    :label="$t('Vat')"
                    :placeholder="$t('Vat')"
                    :error-messages="errors.vat"
                  />
                </VCol>

                <VCol cols="12">
                  <AppAutocomplete
                    v-model="formData.vatType"
                    :items="[
                      { value: 'Fixed', title: 'Fixed' },
                      { value: 'Percentage', title: 'Percentage' },
                    ]"
                    :placeholder="$t('Select Vat Type')"
                    :label="$t('Vat Type')"
                    :error-messages="errors.vatType"
                    clearable
                    disabled
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>

        <VCol
          cols="12"
          md="6"
          lg="6"
        >
          <!-- 👉 Order Items -->
          <VCard
            :title="$t('Order Items')"
            class="mb-6"
          >
            <VCardText>
              <template
                v-for="(orderItem, key) in orderItems"
                :key="key"
              >
                <VRow>
                  <VCol
                    cols="12"
                    md="6"
                  >
                    <AppAutocomplete
                      v-model="orderItem.productID"
                      :rules="[requiredValidator]"
                      :items="availableProducts(key)"
                      :placeholder="$t('Select Product')"
                      :label="$t('Product')"
                      :error-messages="errors.products?.[key]?.productID || ''"
                      @update:model-value="(val) => handleProductPrices(val, key)"
                      disabled
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="4"
                  >
                    <AppTextField
                      v-model="orderItem.quantity"
                      :rules="[requiredValidator, integerValidator]"
                      :placeholder="$t('Quantity')"
                      type="number"
                      :label="$t('Quantity')"
                      :max="orderItem.limitPerCustomer || ''"
                      :error-messages="errors.products?.[key]?.quantity || ''"
                      disabled
                    />
                  </VCol>
                </VRow>
              </template>
            </VCardText>
          </VCard>
        </VCol>

        <!-- 👉 Submit and Cancel -->
        <VCol cols="12">
          <VBtn
            type="submit"
            class="me-3"
          >
            {{ $t('Submit') }}
          </VBtn>
          <VBtn
            type="reset"
            variant="tonal"
            color="error"
            @click="cancel"
          >
            {{ $t('Cancel') }}
          </VBtn>
        </VCol>
      </VRow>
    </VForm>
  </div>
</template>
