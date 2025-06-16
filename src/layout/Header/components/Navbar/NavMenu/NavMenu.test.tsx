import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { NavMenu } from './NavMenu';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

type MockNavMenuProps = {
  open?: boolean;
  ref?: React.RefObject<HTMLDivElement | null>;
};

describe('MobileShopLink', () => {
  const mockOpen = false;
  const mockRef = React.createRef<HTMLDivElement>();

  const renderNavMenu = (props?: MockNavMenuProps) => {
    const defaultProps = {
      open: mockOpen,
      ref: mockRef,
      ...props,
    };
    return render(
      <MemoryRouter>
        <NavMenu {...defaultProps} />
      </MemoryRouter>,
    );
  };

  it('renders component correctly', () => {
    const { getByTestId } = renderNavMenu();
    expect(getByTestId('nav-menu')).toBeInTheDocument();
  });

  it('renders NavLinks component', () => {
    const { getByTestId } = renderNavMenu();
    expect(getByTestId('nav-links')).toBeInTheDocument();
  });

  it('renders NavActions component', () => {
    const { getByTestId } = renderNavMenu();
    expect(getByTestId('nav-actions')).toBeInTheDocument();
  });

  it('does not have navbar__nav--open styles when open prop is false', () => {
    const { getByTestId } = renderNavMenu();
    const navMenu = getByTestId('nav-menu');
    expect(navMenu).not.toHaveClass(/navbar__nav--open/);
  });

  it('has navbar__nav--open styles when open prop is true', () => {
    const { getByTestId } = renderNavMenu({ open: true });
    const navMenu = getByTestId('nav-menu');
    expect(navMenu).toHaveClass(/navbar__nav--open/);
  });
});
