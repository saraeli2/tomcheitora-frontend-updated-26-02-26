<script setup>
import Draggable from 'vuedraggable'
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  node: {
    type: Object,
    required: false,
    default: () => ({}),
  },
})

const emit = defineEmits([
  'edit',
  'add',
  'delete',
  'drag',
])
</script>

<template>
  <div class="mb-2 px-2 py-1 bg-grey-lighten-4 rounded">
    <div class="d-flex justify-between align-center">
      <div>
        <strong>{{ node.name }}</strong>
      </div>
      <div>
        <VBtn
          v-if="can('admin-delete-category-builders', 'Delete Category Builders')"
          icon
          size="x-small"
          color="error"
          @click="$emit('delete', node)"
          style="margin: 5px;"
        >
          <VIcon icon="tabler-trash" />
        </VBtn>
        <VBtn
          v-if="can('admin-create-category-builders', 'Create Category Builders')"
          icon
          size="x-small"
          color="primary"
          @click="$emit('add', node)"
        >
          <VIcon icon="tabler-plus" />
        </VBtn>
      </div>
    </div>

    <Draggable
      v-if="node.children?.length"
      v-model="node.children"
      group="categoryBuilders"
      item-key="realId"
      fallback-on-body
      :animation="200"
      @change="$emit('change', $event)"
    >
      <template #item="{ element }">
        <div class="ms-4 mt-2">
          <CategoryBuilderNode
            :node="element"
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
