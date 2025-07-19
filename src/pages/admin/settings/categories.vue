<script setup>
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import Draggable from 'vuedraggable'

definePage({
  meta: {
    action: ['admin-create-categories'],
    subject: ['Create Categories'],
    navActiveLink: 'categories',
    title: 'Categories',
  },
})

import AddNewCategoryDrawer from '@/views/admin/settings/AddNewCategoryDrawer.vue'
import CategoryBuilderNode from '@/views/admin/settings/CategoryBuilderNode.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const { t } = useI18n()

const toast = useToast()

const parentId = ref()
const isAddNewCategoryDrawerVisible = ref(false)
const isCategoryDialogVisible = ref(false)
const categoryDetail = ref()

const {
  data: categoryBuilderData,
  execute: fetchCategoryBuilders,
} = await useApi(createUrl('/admin/settings/categories'))

const categories = computed(() => categoryBuilderData.value.categories)

const tree = ref([])

const buildTree = categories => {
  const categoryMap = {}
  const roots = []

  // Normalize and initialize
  categories.forEach(category => {
    const id = category._id.toString()

    categoryMap[id] = { ...category, children: [] }
  })

  // Build tree structure
  categories.forEach(category => {
    const id = category._id.toString()
    const parentId = category.parentId?.toString()

    if (parentId && categoryMap[parentId]) {
      // Add to parent's children
      categoryMap[parentId].children.push(categoryMap[id])
    } else {
      // No parentId = root node
      roots.push(categoryMap[id])
    }
  })

  // Sort children by sortOrder
  Object.values(categoryMap).forEach(cat => {
    if (cat.children?.length) {
      cat.children.sort((a, b) => a.sortOrder - b.sortOrder)
    }
  })

  return roots
}

const modifyCategoryBuilder = async updateData => {
  // refetch Category
  fetchCategoryBuilders()
}

const editForm = async value => {
  const data = await $api(`/admin/settings/categories/${ value._id }`).catch(err => console.log(err))

  categoryDetail.value = data
  isCategoryDialogVisible.value = true
}

const openForm = async (item = null) => {
  parentId.value = item._id
  isAddNewCategoryDrawerVisible.value = true
}

const createParentCategory = async () => {
  parentId.value = null
  isAddNewCategoryDrawerVisible.value = true
}

const deleteItem = item => {
  Swal.fire({
    title: t('delete.Are You Sure?'),
    html: t('delete.confirmMessage', {
      action: `<strong>${t('delete.confirmaction')}</strong>`,
    }),
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: t('delete.No, Cancel'),
    confirmButtonText: t('delete.Yes, Delete!'),
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/settings/categories/${ item._id }`, { method: 'DELETE' })
        fetchCategoryBuilders()
      }
    })
}

const onDrag = async evt => {
  if (!evt?.moved) return
  console.log(evt.moved)

  const parentNode = evt.moved.element.parentId // adjust based on your data structure
  const newChildren = tree.value.find(node => node._id === parentNode)?.children || []

  const payload = newChildren.map((child, index) => ({
    id: child._id,            // ID of the relation (CategoryBuilder ID)
    sortOrder: index,             // New order
  }))

  await $api('/admin/settings/categories/update/sort-order', {
    method: 'POST',
    body: payload,
  })

  // You can handle drag result here (persist changes)
  toast.success('Drag completed')
}

const checkMove = ({ draggedContext, relatedContext }) => {
  const fromParent = draggedContext.componentInstance?.node || null
  const toParent = relatedContext.componentInstance?.node || null

  console.log('Dragged from:', draggedContext.componentInstance?.node)
  console.log('Dropped to:', relatedContext.componentInstance?.node)

  const isRootToRoot = !fromParent && !toParent
  const isSameParent = fromParent?._id === toParent?._id

  return isRootToRoot || isSameParent
}

watch(categoryBuilderData, newVal => {
  if (newVal?.categories) {
    tree.value = buildTree(newVal.categories)
  }
}, { immediate: true })
</script>

<template>
  <div>
    <VCard id="invoice-list">
      <VCardText class="d-flex justify-space-between align-center flex-wrap">
        <VRow>
          <VCol cols="12">
            <h5 class="text-h5 mb-1">
              {{ $t('Categories') }}
            </h5>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex justify-space-between align-center flex-wrap gap-4">
        <div class="d-flex gap-4 align-center flex-wrap">
          <VBtn
            v-if="can('admin-create-categories', 'Create Categories')"
            prepend-icon="tabler-plus"
            @click="createParentCategory"
          >
            {{ $t('Create Category') }}
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <VCard
      :title="$t('Category Manager')"
      class="mb-6"
    >
      <VCardText class="cb_wrapper">
        <Draggable
          v-model="tree"
          group="categoryBuilders"
          item-key="_id"
          fallback-on-body
          :animation="200"
          @change="onDrag"
        >
          <template #item="{ element }">
            <CategoryBuilderNode
              :node="element"
              :level="0"
              @add="openForm"
              @edit="editForm"
              @delete="deleteItem"
              @change="onDrag"
            />
          </template>
        </Draggable>
      </VCardText>
    </VCard>

    <AddNewCategoryDrawer
      v-if="isAddNewCategoryDrawerVisible"
      v-model:is-drawer-open="isAddNewCategoryDrawerVisible"
      v-model:parent="parentId"
      @update-data="modifyCategoryBuilder"
    />

    <AddNewCategoryDrawer
      v-if="isCategoryDialogVisible"
      v-model:is-drawer-open="isCategoryDialogVisible"
      v-model:parent="parentId"
      v-model:category="categoryDetail"
      @update-data="modifyCategoryBuilder"
    />
  </div>
</template>
