<script setup>
definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
    style="justify-content: center;"
  >
    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText style="text-align:center">
          <img
            style="width: 200px; height: auto;"
            src="/images/logo.png"
          >
          <VRow>
            <VCol>
              <h3 class="page_title">
                תודה רבה.
              </h3>
            </VCol>
          </VRow>
          <div class="text-gray-500">
            מכירה נגמרה
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
