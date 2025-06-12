import { computed } from 'vue';
import type { Ref } from 'vue';
import type { Show } from '@/types/show';

export function useRelatedShows(
  currentShow: Ref<Show | null>,
  allShows: Ref<Show[]>,
  max: number = 6
) {
  return computed(() => {
    if (!currentShow.value || !currentShow.value.genres) return [];
    const genres = new Set(currentShow.value.genres);
    return allShows.value
      .filter(
        show =>
          show.id !== currentShow.value!.id && show.genres && show.genres.some(g => genres.has(g))
      )
      .slice(0, max);
  });
}
