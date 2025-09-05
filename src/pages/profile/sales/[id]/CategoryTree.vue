<template>
  <ul class="list-none pl-3">
    <li v-for="category in categories" :key="category._id" class="mb-1">
      <div class="flex items-center gap-2">
        <!-- Checkbox -->
         <VCheckbox
          :id="category._id"
          :value="category._id"
          v-model="modelValueProxy"
         />

        <label :for="category._id" class="cursor-pointer">
          {{ category.name }}
        </label>
      </div>

      <!-- Recursive Children -->
      <CategoryTree
        v-if="category.children && category.children.length"
        :categories="category.children"
        v-model:selected="modelValueProxy"
      />
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import CategoryTree from "./CategoryTree.vue";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  selected: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:selected"]);

// Proxy for v-model (read/write)
const modelValueProxy = computed({
  get: () => props.selected,
  set: (val) => emit("update:selected", val),
});
</script>
