import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

vi.mock('../../hooks/useHandleOutsideClick', () => ({
  useHandleOutsideClick: vi.fn(),
}));

describe('Navbar', () => {
  const renderNavbar = () =>
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

  it('renders the component correctly', () => {
    const { getByRole, getByTestId } = renderNavbar();
    expect(getByRole('link', { name: /e-commerce/i })).toBeInTheDocument();
    expect(getByTestId('menu-icon')).toBeInTheDocument();
    expect(getByTestId('nav-menu')).toBeInTheDocument();
  });

  it('does not display mobile NavLinks initially', () => {
    const { getByTestId } = renderNavbar();
    const navMenu = getByTestId('nav-menu');
    expect(navMenu).not.toHaveClass(/navbar__nav--open/);
  });

  it('displays mobile NavLinks when clicking menu icon', () => {
    const { getByTestId } = renderNavbar();
    const navMenu = getByTestId('nav-menu');
    const menuIcon = getByTestId('menu-icon');
    fireEvent.click(menuIcon);
    expect(navMenu).toHaveClass(/navbar__nav--open/);
  });

  it('hides mobile NavLinks when clicking menu icon 2 times', () => {
    const { getByTestId } = renderNavbar();
    const navMenu = getByTestId('nav-menu');
    const menuIcon = getByTestId('menu-icon');
    fireEvent.click(menuIcon);
    fireEvent.click(menuIcon);
    expect(navMenu).not.toHaveClass(/navbar__nav--open/);
  });

  it('hides mobile NavLinks when clicking any link', () => {
    const { getByTestId, getByRole } = renderNavbar();
    const navMenu = getByTestId('nav-menu');
    const menuIcon = getByTestId('menu-icon');
    const link = getByRole('link', { name: /e-commerce/i });
    fireEvent.click(menuIcon);
    fireEvent.click(link);
    expect(navMenu).not.toHaveClass(/navbar__nav--open/);
  });
});
