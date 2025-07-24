<script setup>
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

const props = defineProps({
  order: {
    type: Object,
    required: false,
    default: () => ({
      status: "",
      comment: "",
      userID: "",
      vat: "",
      vatType: "",
      discountType: "",
      discount: "",
    }),
  },
})

definePage({
  meta: {
    action: ['admin-create-orders'],
    subject: ['Create Orders'],
    navActiveLink: 'admin-sales',
    title: 'Create Order',
  },
})

import Swal from 'sweetalert2'

const toast = useToast()

const { t } = useI18n()

const formData = ref(structuredClone(toRaw(props.order)))
const orderItems = ref([])
const saleID = ref()
const isFormValid = ref(false)
const refForm = ref()
const products = ref([])
const users = ref([])

const route = useRoute('admin-orders-create')
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
    const res = await $api(`/admin/orders`, {
      method: 'POST',
      body: {
        saleID: saleID.value,
        status: formData.value.status,
        status: formData.value.status,
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
      router.push({ name: 'admin-orders-detail-id', params: { id: res.data._id } })
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
        router.push({ name: 'admin-sales-detail-id', params: { id: route.query.saleid } })
      }
    })
}

onMounted( async () => {
  if(route.query.saleid) {    
    handleUsers(route.query.saleid)
    handleProducts(route.query.saleid)
    saleID.value = route.query.saleid
  } else {
    saleID.value = ''
  }
})

const handleProductPrices = async (val, key) => {
  if(val) {
    const data = await $api(`/admin/sale-products/${ val }`).catch(err => console.log(err))

    orderItems[key].limitPerCustomer = data.limitPerCustomer
  } else {
    orderItems[key].limitPerCustomer = 0
  }
  
}
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
          :items="[{ title: $t('Sales'), to: { name: 'admin-sales' }, class: 'text-primary' }, { title: $t('Sale Details'), to: { name: 'admin-sales-detail-id', params: { id: route.query.saleid } }, class: 'text-primary' }, { title: $t('Create Order') }]"
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
            {{ $t('Create Order') }}
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
            {{ $t('Create Order') }}
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
                    v-model="formData.userID"
                    :items="users"
                    :placeholder="$t('Select User')"
                    :label="$t('User')"
                    :error-messages="errors.userID"
                    clearable
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
                      { value: 'Canceled', title: 'Canceled' },
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
                    />
                  </VCol>
                  <VCol
                    v-if="orderItems.length > 1"
                    cols="12"
                    md="2"
                    class="d-flex align-self-end"
                  >
                    <VBtn
                      color="warning"
                      class="removeBtn"
                      variant="text"
                      @click="deleteOrderItem(key)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.0833 2.33333H8.75V1.75C8.75 0.758333 7.99167 0 7 0H4.66667C3.675 0 2.91667 0.758333 2.91667 1.75V2.33333H0.583333C0.233333 2.33333 0 2.56667 0 2.91667C0 3.26667 0.233333 3.5 0.583333 3.5H1.16667V11.0833C1.16667 12.075 1.925 12.8333 2.91667 12.8333H8.75C9.74167 12.8333 10.5 12.075 10.5 11.0833V3.5H11.0833C11.4333 3.5 11.6667 3.26667 11.6667 2.91667C11.6667 2.56667 11.4333 2.33333 11.0833 2.33333ZM4.0835 1.74935C4.0835 1.39935 4.31683 1.16602 4.66683 1.16602H7.00016C7.35016 1.16602 7.5835 1.39935 7.5835 1.74935V2.33268H4.0835V1.74935ZM8.75 11.6667C9.1 11.6667 9.33333 11.4333 9.33333 11.0833V3.5H2.33333V11.0833C2.33333 11.4333 2.56667 11.6667 2.91667 11.6667H8.75Z"
                          fill="#E02127"
                        />
                      </svg>
                    </VBtn>
                  </VCol>
                </VRow>
              </template>

              <VBtn
                class="mt-6"
                prepend-icon="tabler-plus"
                @click="addItem"
              >
                {{ $t('Add another item') }}
              </VBtn>
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
