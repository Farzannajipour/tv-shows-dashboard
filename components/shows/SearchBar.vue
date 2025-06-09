<template>
  <div class="relative">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search shows..."
      class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-surface text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
      @input="handleSearch"
    />
    <Icon
      name="heroicons:magnifying-glass"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ modelValue: string }>();
const searchQuery = ref(props.modelValue);

const handleSearch = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target) {
    emit('update:modelValue', target.value);
  }
};

const emit = defineEmits(['update:modelValue']);
</script> 