import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Hero, HeroProps } from './Hero';

describe('Hero', () => {
  const props: HeroProps = {
    eyebrow: 'Eyebrow text',
    title: 'Title text',
    subtitle: 'Subtitle text',
    cta: 'Call to action',
    ctaLink: '/shop',
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Hero {...props} />
      </MemoryRouter>,
    );
    expect(getByText('Eyebrow text')).toBeInTheDocument();
    expect(getByText('Title text')).toBeInTheDocument();
    expect(getByText('Subtitle text')).toBeInTheDocument();
    expect(getByText('Call to action')).toBeInTheDocument();
  });

  it('renders with correct link', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Hero {...props} />
      </MemoryRouter>,
    );
    const link = getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/shop');
  });
});
