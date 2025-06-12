import { describe, it, expect, vi, beforeEach } from 'vitest';
import { usePaginatedShows } from '@/composables/usePaginatedShows';
import * as api from '@/api/shows';

const mockPage1 = [
  { id: 1, name: 'Show 1' },
  { id: 2, name: 'Show 2' },
];
const mockPage2 = [
  { id: 3, name: 'Show 3' },
  { id: 4, name: 'Show 4' },
];

describe('usePaginatedShows', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches and sets shows for a page', async () => {
    vi.spyOn(api, 'fetchShows').mockResolvedValueOnce(mockPage1);
    const { shows, page, loadShows } = usePaginatedShows();
    await loadShows(1);
    expect(shows.value).toEqual(mockPage1);
    expect(page.value).toBe(1);
  });

  it('caches pages and does not refetch cached pages', async () => {
    const fetchSpy = vi
      .spyOn(api, 'fetchShows')
      .mockResolvedValueOnce(mockPage1)
      .mockResolvedValueOnce(mockPage2);
    const { shows, page, loadShows } = usePaginatedShows();
    await loadShows(1);
    await loadShows(2);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
    // Now go back to page 1, should not call fetchShows again
    await loadShows(1);
    expect(shows.value).toEqual(mockPage1);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it('sets error if fetch fails', async () => {
    vi.spyOn(api, 'fetchShows').mockRejectedValueOnce(new Error('fail'));
    const { error, loadShows } = usePaginatedShows();
    await loadShows(1);
    expect(error.value).toBeInstanceOf(Error);
  });
});
