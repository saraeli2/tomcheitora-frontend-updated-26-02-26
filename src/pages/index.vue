<script setup>
import { useConfigStore } from '@core/stores/config'

const store = useConfigStore()

store.skin = 'default'
definePage({
  meta: {
    layout: 'default',
    public: true,
  },
})

</script>

<template>
  <div class="help-center-page">
    <div>
      <AppSearchHeader
        custom-class="rounded-0"
        placeholder="Search"
      >
        <template #title>
          <h4
            class="text-h4 font-weight-medium"
            style="color: rgba(var(--v-theme-primary), 1);"
          >
            Hello, how can we help?
          </h4>
        </template>
      </AppSearchHeader>
    </div>
  </div>
</template>

<style lang="scss">
.help-center-page {
  .search-header {
    background-size: cover !important;
    padding-block: 9.25rem 4.75rem !important;
  }

  .help-center-section {
    padding-block: 5.25rem;
  }
}

@media (max-width: 960px) and (min-width: 600px) {
  .help-center-page {
    .v-container {
      padding-inline: 2rem !important;
    }
  }
}

@media (max-width: 599px) {
  .help-center-page {
    .search-header {
      padding-block: 7rem 2rem !important;
      padding-inline: 2rem !important;
    }

    .help-center-section {
      padding-block: 3.5rem;
    }
  }
}
</style>
