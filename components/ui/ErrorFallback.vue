<template>
  <div class="text-center py-12">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h2>
    <p class="mb-6 text-gray-600">An unexpected error occurred. Please try again.</p>
    <button
      @click="$emit('reset')"
      class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
    >
      Try Again
    </button>
  </div>
</template> 

<script setup lang="ts">
defineEmits(['reset']);
</script> 