<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white">
          TV Shows
        </NuxtLink>
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <span v-if="isDark" class="i-heroicons-moon-20-solid" />
          <span v-else class="i-heroicons-sun-20-solid" />
        </button>
      </nav>
    </header>
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
};
</script> 