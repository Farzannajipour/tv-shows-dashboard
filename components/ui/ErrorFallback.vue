<template>
  <div class="flex flex-col items-center justify-center py-12">
    <h2 class="text-2xl font-bold text-error mb-4" aria-live="assertive">Something went wrong</h2>
    <p class="mb-6 text-gray-600 dark:text-gray-300">An unexpected error occurred. Please try again.</p>
    <button
      class="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      @click="$emit('reset')"
      aria-label="Retry"
    >
      Retry
    </button>
  </div>
</template> 