<script setup>
import { useToast } from 'vue-toastification'
import Draggable from 'vuedraggable'

definePage({
  meta: {
    action: ['admin-create-categories'],
    subject: ['Create Categories'],
    navActiveLink: 'categories',
    title: 'Create Category',
  },
})

import AddNewCategoryBuilderDrawer from '@/views/admin/settings/AddNewCategoryBuilderDrawer.vue'
import AddNewCategoryDrawer from '@/views/admin/settings/AddNewCategoryDrawer.vue'
import CategoryBuilderNode from '@/views/admin/settings/CategoryBuilderNode.vue'
import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const toast = useToast()

const parentId = ref()
const isCategoryBuilderDialogVisible = ref(false)
const isAddNewCategoryDrawerVisible = ref(false)

const categoryOptions = ref([])
const categories = ref([])

const {
  data: categoryBuilderData,
  execute: fetchCategoryBuilders,
} = await useApi(createUrl('/admin/settings/category-builders'))

const categoryBuilders = computed(() => categoryBuilderData.value.categoryBuilders)

const addCategory = async () => {
  const data = await $api('/admin/settings/category-builders/respond-with/extra-options').catch(err => console.log(err))

  categoryOptions.value = data.categories

  categories.value = categoryOptions.value.map(item => ({
    value: item._id,
    title: item.name,
  }))
  parentId.value = ''
  isCategoryBuilderDialogVisible.value = true
}

const tree = ref([])
const showForm = ref(false)

const buildTree = relations => {
  const categoryMap = {}

  // First pass: normalize and initialize all unique categories
  relations.forEach(rel => {
    const parent = rel.parentId
    const child = rel.childId

    if (parent && parent._id) {
      const parentId = parent._id.toString()
      if (!categoryMap[parentId]) {
        categoryMap[parentId] = { ...parent, children: [] }
      }
    }

    if (child && child._id) {
      const childId = child._id.toString()
      if (!categoryMap[childId]) {
        categoryMap[childId] = { ...child, children: [] }
      }
    }
  })

  // Second pass: build tree structure based on relations
  relations.forEach(rel => {
    const parentId = rel.parentId?._id?.toString()
    const childId = rel.childId?._id?.toString()

    if (parentId && childId && categoryMap[parentId] && categoryMap[childId]) {
      categoryMap[parentId].children.push({
        ...categoryMap[childId],
        sortOrder: rel.sortOrder,
        realId: rel._id,
        relationParentId: parentId,  // explicitly add parentId here
        relationChildId: childId,
      })
    }
  })

  // Sort children by sortOrder
  Object.values(categoryMap).forEach(cat => {
    if (cat.children?.length) {
      cat.children.sort((a, b) => a.sortOrder - b.sortOrder)
    }
  })

  // Find root nodes: categories that never appear as childId
  const childIdSet = new Set(
    relations
      .map(rel => rel.childId?._id?.toString())
      .filter(Boolean),
  )

  return Object.values(categoryMap).filter(cat => !childIdSet.has(cat._id.toString()))
}

const modifyCategoryBuilder = async userData => {
  // refetch Category
  fetchCategoryBuilders()
}

const openForm = async (item = null) => {
  let data
  if(item.relationChildId) {
    data = await $api('/admin/settings/category-builders/respond-with/extra-options', {
      query: {
      // eslint-disable-next-line camelcase
        parentId: item.parentId,
        // eslint-disable-next-line camelcase
        parentId: item.relationParentId,
        childId: item.relationChildId,
      },
    }).catch(err => console.log(err))
  } else if(item.relationParentId) {
    data = await $api('/admin/settings/category-builders/respond-with/extra-options', {
      query: {
      // eslint-disable-next-line camelcase
        parentId: item.parentId,
        // eslint-disable-next-line camelcase
        parentId: item.relationParentId,
      },
    }).catch(err => console.log(err))
  } else {
    data = await $api('/admin/settings/category-builders/respond-with/extra-options', {
      query: {
      // eslint-disable-next-line camelcase
        parentId: item._id,
      },
    }).catch(err => console.log(err))
  }

  categoryOptions.value = data.categories

  categories.value = categoryOptions.value.map(item => ({
    value: item._id,
    title: item.name,
  }))
  parentId.value = item._id
  isCategoryBuilderDialogVisible.value = true
}

const deleteItem = item => {
  Swal.fire({
    title: 'Are You Sure?',
    html: 'Selecting Delete will <strong>permanently delete</strong> this item. This action cannot be undone.',
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'No, Cancel',
    confirmButtonText: 'Yes, Delete!',
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/settings/category-builders/${ item.realId }`, { method: 'DELETE' })
        fetchCategoryBuilders()
      }
    })
}

const onDrag = async evt => {
  if (!evt?.moved) return

  const parentNode = evt.moved.element.relationParentId // adjust based on your data structure
  const newChildren = tree.value.find(node => node._id === parentNode)?.children || []

  const payload = newChildren.map((child, index) => ({
    id: child.realId,            // ID of the relation (CategoryBuilder ID)
    sortOrder: index,             // New order
  }))

  await $api('/admin/settings/category-builders/update-sort-order', {
    method: 'POST',
    body: payload,
  })

  // You can handle drag result here (persist changes)
  toast.success('Drag completed')
}

watch(categoryBuilderData, newVal => {
  if (newVal?.categoryBuilders) {
    tree.value = buildTree(newVal.categoryBuilders)
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
              Category Builders
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
            @click="isAddNewCategoryDrawerVisible = true"
          >
            Create Category
          </VBtn>

          <!-- 👉 Create Category -->
          <VBtn
            v-if="can('admin-create-category-builders', 'Create Category Builders')"
            prepend-icon="tabler-plus"
            @click="addCategory"
          >
            Add Category
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <VCard
      title="Category Manager"
      class="mb-6"
    >
      <VCardText>
        <Draggable
          v-model="tree"
          group="categoryBuilders"
          item-key="realId"
          fallback-on-body
          :animation="200"
          @change="onDrag"
        >
          <template #item="{ element }">
            <CategoryBuilderNode
              :node="element"
              @add="openForm"
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
      @user-data="modifyCategoryBuilder"
    />

    <AddNewCategoryBuilderDrawer
      v-if="isCategoryBuilderDialogVisible"
      v-model:is-drawer-open="isCategoryBuilderDialogVisible"
      v-model:parent="parentId"
      v-model:categories="categories"
      @user-data="modifyCategoryBuilder"
    />
  </div>
</template>
