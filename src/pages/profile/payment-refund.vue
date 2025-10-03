<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Read'],
    layout: 'blank',
    title: 'Checkout'
  },
})
import { useRouter } from 'vue-router'
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
const router = useRouter()

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

onMounted(async () => {
  if (order.value) {
    await loadNedarimIframe()
  }
})



const showLoader = ref(false)

// For payment
const transactionStatus = ref('') // success, error, or ''
const errorMessage = ref('')
const loadNedarimIframe = async () => {
  try {
    showLoader.value = true

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/payment/iframe`,
      {
        firstName: user.value.firstName,
        lastName: user.value.lastName,
        email: user.value.email,
        street: user.value.street,
        uniqueKey: order.value?.orderNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${authStore.faccessToken}`,  // 👈 frontend token
        },
      }
    )

    nedarimIframeHtml.value = res.data.iframeHtml
  } catch (err) {
    console.error('Failed to load payment iframe:', err)
    toast.error('Payment page could not be loaded.')
  } finally {
    showLoader.value = false
  }

  window.addEventListener('message', handleIframeMessage, false)
}

const isClickPayment = ref(false)

const pay = () => {
  
  isClickPayment.value = true;
  const iframeWindow = document.getElementById('NedarimFrame').contentWindow

  iframeWindow.postMessage(
    {
      Name: 'FinishTransaction2',
      Value: {
        Mosad: import.meta.env.VITE_NEDARIM_TERMINAL,
        ApiValid: import.meta.env.VITE_NEDARIM_API_PASS,
        PaymentType: 'Ragil', // or HK, CreateToken
        Currency: '1',
        Zeout: order.value?.orderNumber,
        FirstName: user.value.firstName,
        LastName: user.value.lastName,
        Street: user.value.street,
        City: user.value.cityID?.nameHe,
        Phone: user.value.phone,
        Mail: user.value.email,
        Amount: numberFormatForPay(order.value.total),
        Tashlumim: '1',
        Param1: user.value.israeliIDNumber,
        Param2: order.value._id,
        Comment: 'עדכון פריטים',
        CallBack: `${import.meta.env.VITE_API_BASE_URL}/payment/callback`,
        CallBackMailError: import.meta.env.VITE_PAYMENTCHECKEMAIL
      },
    },
    '*'
  )
}

const nedarimIframeHtml = ref('')

const handleIframeMessage = (event) => {
  const data = event.data
  showLoader.value = false

  //onsole.log(data);

  if (data.Name === 'Height') {
    document.getElementById('NedarimFrame').style.height =
      parseInt(data.Value) + 15 + 'px'
  }

  if (data.Name === 'TransactionResponse') {
    isClickPayment.value = false

    if (data.Value.Status === 'Error') {
      transactionStatus.value = 'error'
      errorMessage.value = data.Value.Message
      showLoader.value = false

    } else {
      errorMessage.value = ''

      const payload = {
        israeliIDNumber: user.value.israeliIDNumber,      
        orderId: order.value?._id,
        paymentStatus: 'Pending',  
        Value: data.Value         
      }

      createTransaction(payload)
    }
  }
}


const createTransaction = async payload => {
  showLoader.value = false
  try {
    const response = await $api('/transactions', {
      method: 'POST',
      body: payload,
      credentials: 'include',
      onResponseError({ response }) {
        //toast.error(response?._data?.message || 'Failed to save transaction')
        showLoader.value = false
      }
    })
   
    //window.location.reload()
    router.replace(`/profile/payment-success`)

  } catch (err) {
    console.error('Failed to save transaction:', err)
    showLoader.value = false
    transactionStatus.value = 'error'
  }
}
</script>

<template>
  <div class="checkout-page product-page recived_items_report paymentPage">
    <Navbar />
    

    <VContainer class="page_container" v-if="order && user.allowedIsraelUser">

      <div v-if="order && (transactions && transactions.length)">
        <p style="text-align: center; margin-top: 20px; font-size: 18px;">תודה רבה על העדכון פריטים

<br>התשלום נקלט בהצלחה
<br>מספר אישור: {{ transactions[0].transactionId }}
<br>בברכת חג שמח, תומכי תורה
</p>
      </div>
      
      <div v-else-if="order && order.total < 0">
        <p style="text-align: center; margin-top: 20px; font-size: 18px"><br>תודה רבה על העדכון משקלים
<br>
אנחנו נבצע לכם זיכוי לכרטיס אשראי שבאמצעותינו בצעתם את ההזמנה בהקדם האפשרי<br>

בברכת חג שמח, תומכי תורה<br>

תודה רבה</p>
      </div>
      <div v-else-if="order && order.total > 0 && order.status=='Pending'">
        <h2 class="text-right">לתשלום : ₪{{ order.total.toFixed(2) }}</h2>
        <div v-if="nedarimIframeHtml" v-html="nedarimIframeHtml"></div>

        <VBtn v-if="nedarimIframeHtml" type="button" @click="pay" :disabled="isClickPayment" class="TextBox">{{ $t('Make Payment') }}</VBtn>

        <div v-if="errorMessage" style="color: #f00">{{ errorMessage }}</div>
      </div>
      <div v-else-if="order && order.total == 0">
        <p style="text-align: center; margin-top: 20px; font-size: 20px;">
      תודה רבה כל העדכון
              <br>בברכת חג שמח, תומכי תורה</p>
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

  <VDialog
    v-model="isClickPayment"
  >
    <VProgressCircular
        :size="40"
        color="white"
        indeterminate
      />
  </VDialog>
</template>
