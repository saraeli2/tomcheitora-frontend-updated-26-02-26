<script setup>
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import product21 from '@images/ecommerce-images/product-21.png'
import product22 from '@images/ecommerce-images/product-22.png'
import product23 from '@images/ecommerce-images/product-23.png'
import product24 from '@images/ecommerce-images/product-24.png'

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

const orderData = ref()
const route = useRoute('front-pages-my-account-order-details')

// orderData.value = {
//     "id": 100,
//     "order": 9042,
//     "customer": "Chere Schofield",
//     "email": "cschofield2r@ucsd.edu",
//     "avatar": "",
//     "payment": 2,
//     "status": "Ready to Pickup",
//     "spent": 815.77,
//     "method": "mastercard",
//     "date": "2/1/2023",
//     "time": "4:12 PM",
//     "methodNumber": 3949
// }
const isConfirmDialogVisible = ref(false)
const isUserInfoEditDialogVisible = ref(false)
const isEditAddressDialogVisible = ref(false)

const headers = [
  {
    title: 'Product',
    key: 'productName',
  },
  {
    title: 'Price',
    key: 'price',
  },
  {
    title: 'Quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    key: 'total',
  },
]

const resolvePaymentStatus = payment => {
  if (payment === 1)
    return {
      text: 'Paid',
      color: 'success',
    }
  if (payment === 2)
    return {
      text: 'Pending',
      color: 'warning',
    }
  if (payment === 3)
    return {
      text: 'Cancelled',
      color: 'secondary',
    }
  if (payment === 4)
    return {
      text: 'Failed',
      color: 'error',
    }
}

const resolveStatus = status => {
  if (status === 'Delivered')
    return {
      text: 'Delivered',
      color: 'success',
    }
  if (status === 'Out for Delivery')
    return {
      text: 'Out for Delivery',
      color: 'primary',
    }
  if (status === 'Ready to Pickup')
    return {
      text: 'Ready to Pickup',
      color: 'info',
    }
  if (status === 'Dispatched')
    return {
      text: 'Dispatched',
      color: 'warning',
    }
}

const userData = {
  id: null,
  fullName: 'Chere Schofield',
  company: 'Pixinvent',
  role: 'Web developer',
  username: 'T1940',
  country: 'United States',
  contact: '+1 (609) 972-22-22',
  email: 'cschofield2r@ucsd.edu',
  status: 'Active',
  taxId: 'Tax-8894',
  language: 'English',
  currentPlan: '',
  avatar: '',
  taskDone: null,
  projectDone: null,
}

const currentBillingAddress = {
  fullName: 'Chere Schofield',
  firstName: 'Chere',
  lastName: 'Schofield',
  selectedCountry: 'USA',
  addressLine1: '45 Rocker Terrace',
  addressLine2: 'Latheronwheel',
  landmark: 'KW5 8NW, London',
  contact: '+1 (609) 972-22-22',
  country: 'USA',
  city: 'London',
  state: 'London',
  zipCode: 110001,
}

const orderDetail = [
  {
    productName: 'OnePlus 7 Pro',
    productImage: product21,
    subtitle: 'Storage: 128gb',
    price: 799,
    quantity: 1,
    total: 799,
  },
  {
    productName: 'Face Cream',
    productImage: product22,
    subtitle: 'Gender: Women',
    price: 89,
    quantity: 1,
    total: 89,
  },
  {
    productName: 'Wooden Chair',
    productImage: product23,
    subtitle: 'Material: Woodem',
    price: 289,
    quantity: 2,
    total: 578,
  },
  {
    productName: 'Nike Jorden',
    productImage: product24,
    subtitle: 'Size: 8UK',
    price: 299,
    quantity: 2,
    total: 598,
  },
]
</script>

<template>
  <div class="checkout-page">
    <Navbar />
    <div class="subpage-banner landing-hero landing-hero-light-bg">
      <VContainer>
        <VCardText class="text-center subpage-tittle">
          <h2>Order Details</h2>
        </VCardText>
      </VContainer>
    </div>
      <VContainer>
        <div class="checkout-card">
          <div class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6">
            <div>
              <div class="d-flex gap-2 align-center mb-2 flex-wrap">
                <h5 class="text-h5">
                  Order #78454
                </h5>
                <div class="d-flex gap-x-2">
                  <VChip
                    variant="tonal"
                    :color="resolvePaymentStatus(2)?.color"
                    label
                    size="small"
                  >
                    {{ resolvePaymentStatus(2)?.text }}
                  </VChip>
                  <VChip
                    v-bind="resolveStatus('Ready to Pickup')"
                    label
                    size="small"
                  />
                </div>
              </div>
              <div class="text-body-1">
                Aug 17, 2020, 5:48 (ET)
              </div>
            </div>
          </div>

          <VRow>
            <VCol
              cols="12"
              md="8"
            >
              <!-- 👉 Order Details -->
              <VCard class="mb-6">
                <VCardItem>
                  <template #title>
                    <h5 class="text-h5">
                      Order Details
                    </h5>
                  </template>
                  <template #append>
                    <div class="text-base font-weight-medium text-primary cursor-pointer">
                      Edit
                    </div>
                  </template>
                </VCardItem>

                <VDivider />
                <VDataTable
                  :headers="headers"
                  :items="orderDetail"
                  item-value="productName"
                  show-select
                  class="text-no-wrap"
                >
                  <template #item.productName="{ item }">
                    <div class="d-flex gap-x-3 align-center">
                      <VAvatar
                        size="34"
                        :image="item.productImage"
                        :rounded="0"
                      />

                      <div class="d-flex flex-column align-start">
                        <h6 class="text-h6">
                          {{ item.productName }}
                        </h6>

                        <span class="text-body-2">
                          {{ item.subtitle }}
                        </span>
                      </div>
                    </div>
                  </template>

                  <template #item.price="{ item }">
                    <div class="text-body-1">
                      ${{ item.price }}
                    </div>
                  </template>

                  <template #item.total="{ item }">
                    <div class="text-body-1">
                      ${{ item.total }}
                    </div>
                  </template>

                  <template #item.quantity="{ item }">
                    <div class="text-body-1">
                      {{ item.quantity }}
                    </div>
                  </template>

                  <template #bottom />
                </VDataTable>
                <VDivider />

                <VCardText>
                  <div class="d-flex align-end flex-column">
                    <table class="text-high-emphasis">
                      <tbody>
                        <tr>
                          <td width="200px">
                            Subtotal:
                          </td>
                          <td class="font-weight-medium">
                            $2,093
                          </td>
                        </tr>
                        <tr>
                          <td>Shipping Total: </td>
                          <td class="font-weight-medium">
                            $2
                          </td>
                        </tr>
                        <tr>
                          <td>Tax: </td>
                          <td class="font-weight-medium">
                            $28
                          </td>
                        </tr>
                        <tr>
                          <td class="text-high-emphasis font-weight-medium">
                            Total:
                          </td>
                          <td class="font-weight-medium">
                            $2,113
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </VCardText>
              </VCard>

             
            </VCol>

            <VCol
              cols="12"
              md="4"
            >
              
              <VCard class="mb-6">
                <VCardItem>
                  <VCardTitle>Shipping Address</VCardTitle>
                  <template #append>
                    <div class="d-flex align-center justify-space-between">
                      <div
                        class="text-base font-weight-medium text-primary cursor-pointer"
                        @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
                      >
                        Edit
                      </div>
                    </div>
                  </template>
                </VCardItem>

                <VCardText>
                  <div class="text-body-1">
                    45 Rocker Terrace <br> Latheronwheel <br> KW5 8NW, London <br> UK
                  </div>
                </VCardText>
              </VCard>

              <!-- 👉 Billing Address -->
              <VCard>
                <VCardText>
                  <div class="d-flex align-center justify-space-between mb-2">
                    <h5 class="text-h5">
                      Billing Address
                    </h5>
                    <div
                      class="text-base font-weight-medium text-primary cursor-pointer"
                      @click="isEditAddressDialogVisible = !isEditAddressDialogVisible"
                    >
                      Edit
                    </div>
                  </div>
                  <div>
                    45 Rocker Terrace <br> Latheronwheel <br> KW5 8NW, London <br> UK
                  </div>

                  <div class="mt-6">
                    <h5 class="text-h5 mb-1">
                      Mastercard
                    </h5>
                    <div class="text-body-1">
                      Card Number: ******{{ orderData?.methodNumber }}
                    </div>
                  </div>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>

          <ConfirmDialog
            v-model:is-dialog-visible="isConfirmDialogVisible"
            confirmation-question="Are you sure to cancel your Order?"
            cancel-msg="Order cancelled!!"
            cancel-title="Cancelled"
            confirm-msg="Your order cancelled successfully."
            confirm-title="Cancelled!"
          />

          <UserInfoEditDialog
            v-model:is-dialog-visible="isUserInfoEditDialogVisible"
            :user-data="userData"
          />

          <AddEditAddressDialog
            v-model:is-dialog-visible="isEditAddressDialogVisible"
            :billing-address="currentBillingAddress"
          />
        </div>
      </VContainer>
      <Footer />
  </div>
</template>
