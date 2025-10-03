<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Checkout'
  },
})
import useHelper from "@/mixins/helper";
import Footer from '@/views/front-pages/front-page-footer.vue'
import Navbar from '@/views/front-pages/front-page-navbar.vue'
import { useConfigStore } from '@core/stores/config'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
import axios from 'axios'
import AppTextarea from "@/@core/components/app-form-elements/AppTextarea.vue";

const { numberFormat,numberFormatForPay } = useHelper()

const authStore = useAuthStore()
const toast = useToast()

const { t } = useI18n()

const formData = ref()
const orderItems = ref([])
const isFormValid = ref(false)
const refForm = ref()
const remarks = ref()

const { data: orderData, execute: fetchOrder } = await useApi(
  createUrl(`/received-items-reports-order`)
);

//const order = computed(() => orderData.value)

const order = computed(() => orderData.value.receivedItemsFormOrder)
const transactions = computed(() => orderData.value.transactions)

const {
  data: adminDetail, execute: fetchUsers, error,
} = await useApi(createUrl(`/get-user-details`))

const user = computed(() => adminDetail.value)
const showLoader = ref(false)
</script>

<template>
  <div class="checkout-page product-page recived_items_report paymentPage">
    <Navbar />
    

    <VContainer class="page_container" v-if="order && user.allowedIsraelUser">

      <div v-if="order && (transactions && transactions.length)">
        <p style="text-align: center; margin-top: 20px; font-size: 18px">תודה רבה על העדכון פריטים

<br>התשלום נקלט בהצלחה
<br>מספר אישור: {{ transactions[0].transactionId }}
<br>בברכת חג שמח, תומכי תורה
</p>
      </div>
    </VContainer>

    <VContainer v-else>
      <VCard>
        <VCardText>{{ $t('No order items available') }}</VCardText>
      </VCard>
    </VContainer>

    <Footer />
  </div>

  <VDialog
    v-model="showLoader"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
</template>
