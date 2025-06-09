<template>
  <div class="w-full max-w-xl mx-auto mb-8">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-surface dark:bg-surface-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Search TV shows..."
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>();
</script> 