<script setup lang="ts">
import { ref, computed } from 'vue';
import { useFetchShows } from '@/composables/useFetchShows';
import { useGenres } from '@/composables/useGenres';
import GenreRow from '@/components/shows/GenreRow.vue';
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
import ErrorFallback from '@/components/ui/ErrorFallback.vue';
import SearchBar from '@/components/shows/SearchBar.vue';

const { shows, isLoading, error } = useFetchShows();
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
      <div class="mb-10">
        <label for="search-bar" class="block text-lg font-medium text-gray-700 mb-2">Search for a show:</label>
        <SearchBar id="search-bar" v-model="searchQuery" />
      </div>
      <h1 class="text-4xl font-extrabold text-primary mb-6 flex items-center gap-4">
        TV Shows by Genre
        <span class="block w-16 h-1 bg-primary-light rounded"></span>
      </h1>

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
      </div>
    </div>
  </main>
</template>