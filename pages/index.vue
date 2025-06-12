<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { usePaginatedShows } from '@/composables/usePaginatedShows';
import { useGenres } from '@/composables/useGenres';
import GenreRow from '@/components/shows/GenreRow.vue';
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
import ErrorFallback from '@/components/ui/ErrorFallback.vue';
import SearchBar from '@/components/shows/SearchBar.vue';

const { shows, isLoading, error, page, loadShows } = usePaginatedShows();
const searchQuery = ref('');
const genreMap = useGenres(shows);

const filteredGenreMap = computed(() => {
  if (!searchQuery.value.trim()) return genreMap.value;
  const query = searchQuery.value.trim().toLowerCase();
  const filtered: Record<string, typeof shows.value> = {};
  for (const genre in genreMap.value) {
    const filteredShows = genreMap.value[genre].filter(show =>
      show.name.toLowerCase().includes(query)
    );
    if (filteredShows.length > 0) {
      filtered[genre] = filteredShows;
    }
  }
  return filtered;
});

onMounted(() => {
  loadShows(1);
});

// SEO (already included)
useHead({
  title: 'TV Shows Dashboard | Browse by Genre',
  meta: [
    { name: 'description', content: 'Browse TV shows by genre, rating, and more. Find your next favorite show!' },
    { property: 'og:title', content: 'TV Shows Dashboard | Browse by Genre' },
    { property: 'og:description', content: 'Browse TV shows by genre, rating, and more. Find your next favorite show!' },
    { property: 'og:image', content: '/cover.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://tv-shows-dashboard.vercel.app/' }],
});
</script>

<template>
  <main class="min-h-screen bg-background py-10">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-extrabold text-primary mb-6 flex items-center gap-4">
        TV Shows by Genre
        <span class="block w-16 h-1 bg-primary-light rounded"></span>
      </h1>
      <div class="mb-10">
        <label for="search-bar" class="block text-lg font-medium text-gray-700 mb-2">Search for a show:</label>
        <SearchBar id="search-bar" v-model="searchQuery" />
      </div>
      <ErrorFallback v-if="error" />
      <SkeletonLoader v-else-if="isLoading" />
      <div v-else>
        <section
          v-for="(shows, genre) in filteredGenreMap"
          :key="genre"
          class="mb-12 pb-8 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0"
        >
          <GenreRow :genre="genre" :shows="shows" />
        </section>
        <div v-if="Object.keys(filteredGenreMap).length === 0" class="text-gray-500 text-center py-8">
          No shows found for "{{ searchQuery }}".
        </div>
        <div class="flex justify-center gap-4 mt-8">
          <button
            :class="[
              'px-6 py-2 w-32 rounded font-semibold shadow focus:outline-none focus:ring-2 focus:ring-primary-dark transition-colors duration-150',
              page === 1 || isLoading
                ? 'bg-gray-200 text-black border border-gray-300 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-900'
            ]"
            :disabled="page === 1 || isLoading"
            @click="loadShows(page - 1)"
          >
            Previous
          </button>
          <span class="text-lg font-medium w-32 text-center flex items-center justify-center">Page {{ page }}</span>
          <button
            :class="[
              'px-6 py-2 w-32 rounded font-semibold shadow focus:outline-none focus:ring-2 focus:ring-primary-dark transition-colors duration-150',
              isLoading || Object.keys(filteredGenreMap).length === 0
                ? 'bg-gray-200 text-black border border-gray-300 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-900'
            ]"
            :disabled="isLoading || Object.keys(filteredGenreMap).length === 0"
            @click="loadShows(page + 1)"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </main>
</template>