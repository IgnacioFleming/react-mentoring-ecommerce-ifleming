import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { useHandleOffset } from './useHandleOffset';

describe('useHandleOffset', () => {
  const LIMIT_MOCK = 1;

  const wrapper = ({ children }: PropsWithChildren) => <MemoryRouter>{children}</MemoryRouter>;

  const renderUseHandleOffset = () => renderHook(() => useHandleOffset(LIMIT_MOCK), { wrapper });
  it('should start returning 0', () => {
    const { result } = renderUseHandleOffset();
    expect(result.current.offset).toBe(0);
  });

  it('should increment offset if intersects', () => {
    const { result } = renderUseHandleOffset();
    const entry: IntersectionObserverEntry = { isIntersecting: true } as IntersectionObserverEntry;
    act(() => {
      result.current.handleOffset([entry]);
    });
    expect(result.current.offset).toBe(LIMIT_MOCK);
  });

  it('should not increment offset if does not intersect', () => {
    const { result } = renderUseHandleOffset();
    const entry: IntersectionObserverEntry = { isIntersecting: false } as IntersectionObserverEntry;
    act(() => {
      result.current.handleOffset([entry]);
    });
    expect(result.current.offset).toBe(0);
  });
});
