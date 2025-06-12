import { ref } from 'vue';
import { describe, it, expect } from 'vitest';
import { useRelatedShows } from '@/composables/useRelatedShows';

const shows = [
  { id: 1, name: 'A', genres: ['Drama', 'Comedy'] },
  { id: 2, name: 'B', genres: ['Drama'] },
  { id: 3, name: 'C', genres: ['Action'] },
  { id: 4, name: 'D', genres: ['Comedy'] },
  { id: 5, name: 'E', genres: ['Sci-Fi'] },
];

describe('useRelatedShows', () => {
  it('returns related shows by genre, excluding the current show', () => {
    const currentShow = ref(shows[0]);
    const allShows = ref(shows);
    const related = useRelatedShows(currentShow, allShows);
    expect(related.value.map(s => s.id)).toEqual([2, 4]);
  });

  it('returns empty if no genres', () => {
    const currentShow = ref({ id: 10, name: 'X' });
    const allShows = ref(shows);
    const related = useRelatedShows(currentShow, allShows);
    expect(related.value).toEqual([]);
  });

  it('limits the number of related shows', () => {
    const currentShow = ref({
      id: 100,
      name: 'Y',
      genres: ['Drama', 'Comedy', 'Action', 'Sci-Fi'],
    });
    const allShows = ref([
      ...shows,
      { id: 6, name: 'F', genres: ['Drama'] },
      { id: 7, name: 'G', genres: ['Comedy'] },
      { id: 8, name: 'H', genres: ['Action'] },
      { id: 9, name: 'I', genres: ['Sci-Fi'] },
    ]);
    const related = useRelatedShows(currentShow, allShows, 3);
    expect(related.value.length).toBe(3);
  });
});
