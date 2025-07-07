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
  <div class="mb-2 px-2 py-1 bg-grey-lighten-4 rounded">
    <div class="d-flex justify-between align-center">
      <div class="d-flex align-center">
        <VCheckbox
          v-model="isChecked"
          hide-details
          dense
          class="me-2"
          :indeterminate="indeterminate"
          readonly
        />
        <strong>{{ node.name }}</strong>
      </div>
    </div>
    <div
      v-if="node.children?.length"
      class="ms-4 mt-2"
    >
      <CategoryBuilderProductDetailNode
        v-for="child in node.children"
        :key="child.realId"
        :node="child"
        :selected="selected"
      />
    </div>
  </div>
</template>
