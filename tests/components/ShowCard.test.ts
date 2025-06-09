import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import ShowCard from '~/components/shows/ShowCard.vue';

describe('ShowCard', () => {
  it('renders show title correctly', () => {
    const show = {
      id: 1,
      name: 'Test Show',
      image: { medium: 'test.jpg' },
      rating: { average: 8.5 },
    };

    render(ShowCard, {
      props: { show },
    });

    expect(screen.getByText('Test Show')).toBeInTheDocument();
  });
});
