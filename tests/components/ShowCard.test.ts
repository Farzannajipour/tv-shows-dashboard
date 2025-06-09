import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import ShowCard from '@/components/shows/ShowCard.vue';

describe('ShowCard', () => {
  it('renders show name, rating, and alt text', () => {
    const show = {
      id: 1,
      name: 'Test Show',
      image: { medium: 'test.jpg' },
      rating: { average: 8.5 },
    };
    render(ShowCard, {
      props: { show },
      global: {
        stubs: {
          NuxtImg: { template: '<img v-bind="$attrs" />' },
        },
      },
    });
    expect(screen.getByText('Test Show')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
    const img = screen.getByAltText('Poster of Test Show');
    expect(img).toBeInTheDocument();
  });
});
