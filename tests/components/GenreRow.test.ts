import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import GenreRow from '@/components/shows/GenreRow.vue';

describe('GenreRow', () => {
  it('renders genre and show cards', () => {
    const shows = [
      { id: 1, name: 'Show 1', image: { medium: 'img1.jpg' }, rating: { average: 7 } },
      { id: 2, name: 'Show 2', image: { medium: 'img2.jpg' }, rating: { average: 8 } },
    ];
    render(GenreRow, {
      props: { genre: 'Drama', shows },
      global: {
        stubs: {
          NuxtImg: { template: '<img v-bind="$attrs" />' },
        },
      },
    });
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Show 1')).toBeInTheDocument();
    expect(screen.getByText('Show 2')).toBeInTheDocument();
  });

  it('shows skeletons when loading', () => {
    render(GenreRow, {
      props: { genre: 'Comedy', shows: [], loading: true },
      global: {
        stubs: {
          NuxtImg: { template: '<img v-bind="$attrs" />' },
        },
      },
    });
    expect(screen.getAllByRole('status').length).toBeGreaterThan(0);
  });
});
