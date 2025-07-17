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
  indeterminate: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const emit = defineEmits(['toggle-select'])

const getNodeId = node => node.realId || node._id

// Computed checkbox state based on selected prop
const isChecked = computed({
  get() {
    return props.selected.includes(getNodeId(props.node))
  },
  set(value) {
    emit('toggle-select', { id: getNodeId(props.node), checked: value })
  },
})


// Ref to the checkbox component for setting indeterminate
const checkbox = ref(null)

// Watch and set indeterminate property on the actual checkbox input element
watch(
  () => props.indeterminate,
  newVal => {
    if (checkbox.value) {
      checkbox.value.indeterminate = newVal
    }
  },
  { immediate: true },
)

// Emit toggle-select on checkbox change event
function onCheckboxChange(val) {
  emit('toggle-select', { id: getNodeId(props.node), checked: val })
}
</script>

<template>
  <li>
    <!-- Category checkbox -->
    <label class="flex items-center space-x-2 font-semibold">
      <VCheckbox
        v-model="isChecked"
        hide-details
        dense
        class="me-2"
        :label="node.name"
        :indeterminate="indeterminate"
        @update:model-value="onCheckboxChange"
      />
    </label>

    <!-- Recursive children -->
    <ul
      v-if="node.children?.length"
      class="ml-5"
    >
      <CategoryTreeNode
        v-for="child in node.children"
        :key="child.realId"
        :node="child"
        :selected="selected"
        @toggle-select="$emit('toggle-select', $event)"
      />
    </ul>
  </li>
</template>
