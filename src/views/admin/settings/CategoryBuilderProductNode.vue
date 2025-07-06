<script setup>
const props = defineProps({
  node: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  selected: {
    type: Array,
    required: false,
    default: () => ([]),
  },
})

const emit = defineEmits(['toggle-select'])

const getNodeId = node => node.realId || node._id

// Local checkbox state
const isChecked = ref(false)

// Sync checkbox when props.selected changes
watch(
  () => props.selected,
  () => {
    isChecked.value = props.selected.includes(getNodeId(props.node))
  },
  { immediate: true },
)

// Emit when checkbox toggled
watch(isChecked, val => {
  emit('toggle-select', { id: getNodeId(props.node), checked: val })
})
</script>

<template>
  <div class="mb-2 px-2 py-1 bg-grey-lighten-4 rounded">
    <div class="d-flex justify-between align-center">
      <div class="d-flex align-center">
        <VCheckbox
          v-model="isChecked"
          hide-details
          dense
          class="me-2"
        />
        <strong>{{ node.name }}</strong>
      </div>
    </div>
    <div
      v-if="node.children?.length"
      class="ms-4 mt-2"
    >
      <CategoryBuilderProductNode
        v-for="child in node.children"
        :key="child.realId"
        :node="child"
        :selected="selected"
        @toggle-select="$emit('toggle-select', $event)"
      />
    </div>
  </div>
</template>
