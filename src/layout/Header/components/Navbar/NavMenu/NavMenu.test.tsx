import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { NavMenu } from './NavMenu';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('MobileShopLink', () => {
  const mockOpen = false;
  const mockRef = React.createRef<HTMLDivElement>();

  const renderNavMenu = () =>
    render(
      <MemoryRouter>
        <NavMenu open={mockOpen} ref={mockRef} />
      </MemoryRouter>,
    );

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
});
