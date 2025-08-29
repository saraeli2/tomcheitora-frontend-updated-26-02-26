<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Draggable from 'vuedraggable'
import Swal from 'sweetalert2'
import { can } from '@layouts/plugins/casl'

import AddNewVariationDrawer from './AddNewVariationDrawer.vue'
import { useRouter } from 'vue-router'

definePage({
  meta: {
    action: ['admin-view-variations', 'admin-create-variations'],
    subject: ['View Variations', 'Create Variations'],
    title: 'Variations',
  },
})

const { t } = useI18n()
const ability = useAbility()
const router = useRouter()

const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()
const isVariationDrawerVisible = ref(false)
const variationDetail = ref()
const panel = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const defaultColumns = [
  { title: t('Name'), key: 'name', visible: true },
  { title: t('Status'), key: 'status', visible: true },
  { title: t('Created At'), key: 'createdAt', visible: true },
  { title: t('Updated At'), key: 'updatedAt', visible: true },
  { title: t('Actions'), key: 'actions', sortable: false, visible: true },
]

const {
  data: variationData,
  execute: fetchVariations,
  error,
} = await useApi(createUrl('/admin/variations', {
  query: {
    keyword: searchQuery,
    status: selectedStatus,
    itemsPerPage,
    page,
    sortBy,
    orderBy,
  },
}))

if (error.value === 'Unauthorized') {
  localStorage.removeItem('userData')
  localStorage.removeItem('accessToken')
  ability.update([])
  router.push({ name: 'admin-login' })
  location.href = '/admin/login'
}

const variations = computed(() => variationData.value?.variations ?? [])
const totalVariations = computed(() => variationData.value?.total ?? 0)

const resolveStatusVariantAndIcon = status => {
  return status === 'active'
    ? { variant: 'success', title: t('Active') }
    : { variant: 'secondary', title: t('Inactive') }
}

const editVariation = variation => {
  variationDetail.value = variation
  isVariationDrawerVisible.value = true
}

const deleteVariation = async id => {
  Swal.fire({
    title: t('delete.Are You Sure?'),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: t('Yes, Delete!'),
    cancelButtonText: t('No, Cancel'),
    customClass: { confirmButton: 'btn btn-primary ml-1', cancelButton: 'btn btn-outline-primary' },
    buttonsStyling: false,
  }).then(async result => {
    if (result.value) {
      await $api(`/admin/variations/${id}`, { method: 'DELETE' })
      fetchVariations()
    }
  })
}

const showColumnDialog = ref(false)
const allColumns = ref([...defaultColumns])

const visibleHeaders = computed(() =>
  allColumns.value
    .filter(col => col.visible)
    .map(col => ({ key: col.key, title: t(col.title), sortable: col.sortable !== false }))
)

onMounted(() => {
  const saved = localStorage.getItem('variation-columns')
  if (saved) {
    try { allColumns.value = JSON.parse(saved) } catch { allColumns.value = [...defaultColumns] }
  }
})

watch(allColumns, val => {
  localStorage.setItem('variation-columns', JSON.stringify(val))
}, { deep: true })
</script>

<template>
  <section>
    <VCard>
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Variations') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <div class="d-flex align-center gap-2">
            <span>{{ $t('Show') }}</span>
            <AppSelect
              :model-value="itemsPerPage"
              :items="[
                { value: 10, title: '10' },
                { value: 25, title: '25' },
                { value: 50, title: '50' },
                { value: 100, title: '100' },
              ]"
              style="inline-size: 5.5rem;"
              @update:model-value="itemsPerPage = parseInt($event, 10)"
            />
          </div>
          <!-- 👉 Create Group -->
          <VBtn v-if="can('admin-create-variations','Create Variations')" prepend-icon="tabler-plus" @click="isVariationDrawerVisible = true">
            {{ t('Create Variation') }}
          </VBtn>
        </div>

        <VIcon style="margin-left: auto" @click="showColumnDialog = true" class="tabler-settings" />

        <div class="d-flex align-center flex-wrap gap-4" />
      </VCardText>

      <VDivider />

      <VDataTableServer
        v-model="selectedRows"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :items-length="totalVariations"
        :headers="visibleHeaders"
        :items="variations"
        item-value="_id"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #[`item.status`]="{ item }">
          <VChip label :color="resolveStatusVariantAndIcon(item.status).variant" size="small">
            {{ resolveStatusVariantAndIcon(item.status).title }}
          </VChip>
        </template>

        <template #[`item.actions`]="{ item }">
          <VBtn icon variant="text">
            <VMenu activator="parent">
              <VList>
                <VListItem @click="editVariation(item)" v-if="can('admin-update-variations','Update Variations')">
                  <template #prepend><VIcon icon="tabler-pencil" /></template>
                  <VListItemTitle>{{ t('Edit') }}</VListItemTitle>
                </VListItem>
                <VListItem @click="deleteVariation(item._id)" v-if="can('admin-delete-variations','Delete Variations')">
                  <template #prepend><VIcon icon="tabler-trash" /></template>
                  <VListItemTitle>{{ t('Delete') }}</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>
      </VDataTableServer>

      <AddNewVariationDrawer
        v-if="isVariationDrawerVisible"
        v-model:is-drawer-open="isVariationDrawerVisible"
        v-model:variation="variationDetail"
        @variation-saved="fetchVariations"
      />
    </VCard>

    <VDialog v-model="showColumnDialog" max-width="500">
      <VCard>
        <VCardTitle>{{ t('Manage Columns') }}</VCardTitle>
        <VCardText>
          <Draggable v-model="allColumns" item-key="key" tag="div">
            <template #item="{ element }">
              <div class="d-flex align-center mb-2">
                <VIcon icon="tabler-arrows-down-up" class="mr-2" />
                <VCheckbox v-model="element.visible" :label="$t(element.title)" hide-details density="compact" />
              </div>
            </template>
          </Draggable>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn variant="text" @click="showColumnDialog = false">{{ t('Close') }}</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </section>
</template>
