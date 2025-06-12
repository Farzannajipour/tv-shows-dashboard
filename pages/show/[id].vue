<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import SkeletonLoader from '@/components/ui/SkeletonLoader.vue';
import ErrorFallback from '@/components/ui/ErrorFallback.vue';
import ShowDetails from '@/components/shows/ShowDetails.vue';
import { fetchShowById, fetchShows } from '@/api/shows';
import type { Show } from '@/types/show';

const route = useRoute();
const showId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const show = ref<Show | null>(null);
const isLoading = ref(true);
const error = ref<unknown>(null);
const allShows = ref<Show[]>([]);

const loadShow = async () => {
  isLoading.value = true;
  try {
    show.value = await fetchShowById(showId);
    allShows.value = await fetchShows(1); // Only first page for demo
  } catch (err) {
    error.value = err;
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadShow);

watch(show, (val) => {
  if (val) {
    useHead({
      title: val.name || 'Show Details | TV Shows Dashboard',
      meta: [
        { name: 'description', content: val.summary?.replace(/<[^>]+>/g, '') || 'Detailed information about the selected TV show.' },
        { property: 'og:title', content: val.name || 'Show Details | TV Shows Dashboard' },
        { property: 'og:image', content: val.image?.original || '/cover.png' },
      ],
      link: [{ rel: 'canonical', href: `https://tv-shows-dashboard.vercel.app/show/${showId}` }],
    });
  }
});
</script>

<template>
  <div>
    <div class="mb-8">
      <NuxtLink to="/" class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <span class="i-heroicons-arrow-left-20-solid mr-2" />
        Back to Shows
      </NuxtLink>
    </div>

    <SkeletonLoader v-if="isLoading" />
    <ErrorFallback v-else-if="error" />
    <ShowDetails v-else :show="show" :allShows="allShows" :maxRelated="2" />
  </div>
</template>
