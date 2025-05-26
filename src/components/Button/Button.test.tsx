import '@testing-library/jest-dom';
import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import styles from './Button.module.scss';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button>Click me!</Button>);
    const button = getByRole('button', { name: 'Click me!' });
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click me!</Button>);
    const button = getByRole('button', { name: 'Click me!' });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with correct variant styles', () => {
    const { getByRole } = render(<Button variant="solid">Click me!</Button>);
    const button = getByRole('button', { name: 'Click me!' });
    expect(button.classList.contains(styles['button--variant-solid'])).toBe(true);
  });

  it('renders with correct size styles', () => {
    const { getByRole } = render(<Button size="lg">Click me!</Button>);
    const button = getByRole('button', { name: 'Click me!' });
    expect(button.classList.contains(styles['button--size-lg'])).toBe(true);
  });

  it('renders with correct rounded styles', () => {
    const { getByRole } = render(<Button rounded>Click me!</Button>);
    const button = getByRole('button', { name: 'Click me!' });
    expect(button.classList.contains(styles['button--rounded'])).toBe(true);
  });

  it('renders with left icon', () => {
    const { getByText } = render(<Button leftIcon={<div>Icon</div>}>Click me!</Button>);
    const icon = getByText('Icon');
    expect(icon).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    const { getByText } = render(<Button rightIcon={<div>Icon</div>}>Click me!</Button>);
    const icon = getByText('Icon');
    expect(icon).toBeInTheDocument();
  });
});
