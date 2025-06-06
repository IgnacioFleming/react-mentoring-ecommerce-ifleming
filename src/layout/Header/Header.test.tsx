import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  describe('banner', () => {
    it('banner renders correctly', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      const banner = getByRole('banner');
      expect(banner).toBeInTheDocument();
    });

    it('banner displays 3 columns with its own styles', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      const columns = getByRole('banner').querySelectorAll('[class*="banner__column"]');

      expect(columns.length).toBe(3);
      expect(columns[0]).toHaveClass(/banner__column--left/);
      expect(columns[1]).toHaveClass(/banner__column--center/);
      expect(columns[2]).toHaveClass(/banner__column--right/);
    });

    it('left column displays phone and email', () => {
      const { getByText } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      const phone = getByText('(225) 555-0118');
      const email = getByText('test@test.com');

      expect(phone).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });

    it('center column displays promotional message', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      const promotionalMessage = getByRole('heading', {
        name: 'Follow Us and get a chance to win 80% off',
      });

      expect(promotionalMessage).toBeInTheDocument();
    });

    it('right column displays a heading and 4 social media icons', () => {
      const { getByRole, queryAllByRole } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const heading = getByRole('heading', { name: 'Follow Us :' });

      const icons = queryAllByRole('img');
      expect(heading).toBeInTheDocument();
      expect(icons).toHaveLength(4);
      icons.forEach((i) => {
        expect(i).toHaveClass(/banner__icon/);
      });
    });

    it('clicking any social media icon should redirect to #', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const links = getByRole('banner').querySelectorAll('[class*="banner__social-media"] a');
      links.forEach((l) => {
        expect(l).toHaveAttribute('href', '/');
      });
    });
  });
});
