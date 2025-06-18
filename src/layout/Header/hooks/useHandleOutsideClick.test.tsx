import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { useRef } from 'react';
import { useHandleOutsideClick } from './useHandleOutsideClick';

describe('useHandleOutsideClick', () => {
  const MockComponent = () => {
    const ref = useRef(null);
    useHandleOutsideClick(ref, mockHandler);
    return (
      <div>
        <div ref={ref} data-testid="inside-content">
          Inside Click
        </div>
        <div data-testid="outside-content">Outside Click</div>
      </div>
    );
  };
  const mockHandler = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call mock function when clicking outside content', () => {
    const { getByTestId } = render(<MockComponent />);
    fireEvent.mouseDown(getByTestId('outside-content'));
    expect(mockHandler).toHaveBeenCalled();
  });

  it('should not call mock function when clicking inside content', () => {
    const { getByTestId } = render(<MockComponent />);
    fireEvent.mouseDown(getByTestId('inside-content'));
    expect(mockHandler).not.toHaveBeenCalled();
  });
});
