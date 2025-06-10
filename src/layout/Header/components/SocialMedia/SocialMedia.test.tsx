import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SocialMedia } from './SocialMedia';

describe('SocialMedia', () => {
  it('component renders 4 social media icons', () => {
    const { queryAllByRole } = render(
      <MemoryRouter>
        <SocialMedia />
      </MemoryRouter>,
    );

    const icons = queryAllByRole('img');

    expect(icons).toHaveLength(4);
    icons.forEach((i) => {
      expect(i).toHaveClass(/social-media__icon/);
    });
  });

  it('clicking any social media icon should redirect to #', () => {
    const { queryAllByRole } = render(
      <MemoryRouter>
        <SocialMedia />
      </MemoryRouter>,
    );

    const links = queryAllByRole('link');
    links.forEach((l) => {
      expect(l).toHaveAttribute('href', '/');
    });
  });
});
