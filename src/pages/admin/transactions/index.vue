<script setup>
import TransactionImportDrawer from '@/views/admin/transasctions/TransactionImportDrawer.vue'

definePage({
  meta: {
    action: ['admin-view-orders'],
    subject: ['View Orders'],
    title: 'Transactions',
  },
})

const isTransactionImportDrawerVisible = ref(false)
</script>

<template>
  <section class="no-pagination">
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Transactions') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <VBtn
            prepend-icon="tabler-upload"
            @click="isTransactionImportDrawerVisible = true"
          >
            {{ $t('Import Transactions') }}
          </VBtn>
        </div>
        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />
      <!-- Loading spinner or text while loading more -->
    <!-- !SECTION -->
    </VCard>

    <TransactionImportDrawer
      v-model="isTransactionImportDrawerVisible"
      v-model:is-drawer-open="isTransactionImportDrawerVisible"
    />
  </section>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-filter {
    inline-size: 12rem;
  }
}
</style>
