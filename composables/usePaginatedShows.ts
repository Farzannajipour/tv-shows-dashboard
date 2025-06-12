import { ref } from 'vue';
import { fetchShows } from '@/api/shows';
import type { Show } from '@/types/show';

export function usePaginatedShows() {
  const shows = ref<Show[]>([]);
  const isLoading = ref(false);
  const error = ref<unknown>(null);
  const page = ref(1);
  const cache = new Map<number, Show[]>();

  const loadShows = async (newPage = page.value) => {
    if (cache.has(newPage)) {
      shows.value = cache.get(newPage)!;
      page.value = newPage;
      return;
    }
    isLoading.value = true;
    error.value = null;
    try {
      const data = await fetchShows(newPage);
      shows.value = data;
      cache.set(newPage, data);
      page.value = newPage;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return { shows, isLoading, error, page, loadShows };
}
