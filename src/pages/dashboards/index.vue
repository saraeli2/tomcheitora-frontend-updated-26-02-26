<script setup>
definePage({
  meta: {
    action: ['read'],
    subject: ['Dashboard List Views'],
    title: 'Dashboard',
  },
})

import congoImg from '@images/illustrations/congo-illustration.png'
import { useAuthStore } from '@/stores'

const route = useRoute()
const router = useRouter()
const ability = useAbility()

import Swal from 'sweetalert2'

const authStore = useAuthStore()

// TODO: Get type from backend
const loginData = authStore.userData
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Congratulation John -->
    <VCol
      cols="12"
      md="12"
      lg="12"
    >
      <VCard>
        <VRow no-gutters>
          <VCol cols="8">
            <VCardText>
              <h5 class="text-h5 text-no-wrap">
                Congratulations {{ loginData.name }}! 🎉
              </h5>
            </VCardText>
          </VCol>

          <VCol cols="4">
            <VCardText class="pb-0 px-0 position-relative h-100">
              <VImg
                :src="congoImg"
                height="125"
                class="congo-john-img w-100"
              />
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.congo-john-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 1.25rem;
}
</style>
