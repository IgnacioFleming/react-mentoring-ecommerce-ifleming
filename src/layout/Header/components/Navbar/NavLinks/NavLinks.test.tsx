import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { NavLinks } from './NavLinks';
import { MemoryRouter } from 'react-router-dom';

describe('NavLinks', () => {
  it('renders the component correctly', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>,
    );
    expect(getByRole('list')).toBeInTheDocument();
  });

  it('navigates correctly when clicking links', () => {
    const { getByRole, getAllByText } = render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>,
    );

    const homeLink = getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
    const shopLink = getAllByText('Shop');
    expect(shopLink[0]).toHaveAttribute('href', '/shop');
    const myAccountLink = getByRole('link', { name: 'My Account' });
    expect(myAccountLink).toHaveAttribute('href', '/my-account');
  });

  it('renders MobileShopLink by default and does not render DesktopShopLink', () => {
    const { getByTestId, queryByTestId } = render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>,
    );

    const mobileShopLink = getByTestId('mobile-shop-link');
    expect(mobileShopLink).toBeInTheDocument();
    const desktopShopLink = queryByTestId('desktop-shop-link');
    expect(desktopShopLink).not.toBeInTheDocument();
    expect(desktopShopLink).toBeNull();
  });
});
