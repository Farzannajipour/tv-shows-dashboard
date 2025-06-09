import { computed } from 'vue';
import type { Ref } from 'vue';

interface Show {
  id: number;
  name: string;
  genres?: string[];
  rating?: { average: number };
}

export function useGenres(shows: Ref<Show[]>) {
  return computed(() => {
    const genreMap: Record<string, Show[]> = {};
    for (const show of shows.value) {
      if (show.genres) {
        for (const genre of show.genres) {
          if (!genreMap[genre]) genreMap[genre] = [];
          genreMap[genre].push(show);
        }
      }
    }
    // Sort each genre's shows by rating descending
    for (const genre in genreMap) {
      genreMap[genre].sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0));
    }
    return genreMap;
  });
}
