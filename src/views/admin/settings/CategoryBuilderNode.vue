<script setup>
import { can } from '@layouts/plugins/casl'
import Draggable from 'vuedraggable'

const props = defineProps({
  node: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  level: {
    type: Number,
    required: false,
    default: 0,
  },
})

const emit = defineEmits([
  'edit',
  'add',
  'delete',
  'drag',
])

// Reactive state for this node's active status
const isActive = ref(false)

// Toggle function to switch active class on/off
function toggleClass() {
  isActive.value = !isActive.value
}
</script>

<template>
  <div
    class="mb-2 px-2 py-1 bg-grey-lighten-4 rounded master_div"
    :class="[
      node.children?.length ? 'has_child' : '',
      isActive ? 'active' : ''
    ]"
  >
    <div class="d-flex justify-between align-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c4c0c0"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 10h16" />
        <path d="M4 14h16" />
        <path d="M9 18l3 3l3 -3" />
        <path d="M9 6l3 -3l3 3" />
      </svg>
      <div
        class="cat_name"
        style="margin-inline-end: auto;"
        @click="toggleClass"
      >
        <strong>{{ node.name }}</strong>
      </div>
      <div
        class="cat_description"
        style="margin-inline-end: auto;"
      >
        <strong>{{ node.description }}</strong>
      </div>
      <div>
        <VBtn
          v-if="can('admin-create-categories', 'Create Categories')"
          icon
          size="x-small"
          color="primary"
          @click="$emit('add', node)"
        >
          <VIcon icon="tabler-plus" />
        </VBtn>
        <VBtn
          v-if="can('admin-update-categories', 'Update Categories')"
          icon
          size="x-small"
          color="primary"
          style="margin: 5px;"
          @click="$emit('edit', node)"
        >
          <VIcon icon="tabler-pencil" />
        </VBtn>
        <VBtn
          v-if="can('admin-delete-categories', 'Delete Categories')"
          icon
          size="x-small"
          color="error"
          style="margin: 5px;"
          @click="$emit('delete', node)"
        >
          <VIcon icon="tabler-trash" />
        </VBtn>
      </div>
    </div>

    <Draggable
      v-if="node.children?.length"
      v-model="node.children"
      group="categoryBuilders"
      item-key="_id"
      fallback-on-body
      :animation="200"
      @change="$emit('change', $event)"
    >
      <template #item="{ element }">
        <div class="ms-4 mt-2">
          <CategoryBuilderNode
            :node="{ ...element, parentNode: node }"
            :level="level + 1"
            :parent-node="node"
            @edit="$emit('edit', $event)"
            @delete="$emit('delete', $event)"
            @add="$emit('add', $event)"
            @change="$emit('change', $event)"
          />
        </div>
      </template>
    </Draggable>
  </div>
</template>
