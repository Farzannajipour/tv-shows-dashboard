import { ref, onMounted } from 'vue';
import { fetchShows } from '@/api/shows';
import type { Show } from '@/types/show';

export function useFetchShows() {
  const shows = ref<Show[]>([]);
  const isLoading = ref(true);
  const error = ref<unknown>(null);

  const loadShows = async () => {
    isLoading.value = true;
    try {
      shows.value = await fetchShows(1);
      error.value = null;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(loadShows);

  return { shows, isLoading, error, loadShows };
}
