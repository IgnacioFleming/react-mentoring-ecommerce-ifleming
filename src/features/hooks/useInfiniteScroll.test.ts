import { describe, expect, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useInfiniteScroll, UseInfiniteScrollProps } from './useInfiniteScroll';

describe('useInfiniteScroll', () => {
  const mockLoadMore = vi.fn();

  const mockInitialProps = {
    loadMore: mockLoadMore,
    newItems: [],
    offset: 0,
    totalItems: 3,
  };
  const renderUseInfiniteScroll = (
    initialProps: UseInfiniteScrollProps<string> = mockInitialProps,
  ) =>
    renderHook(
      ({ loadMore, newItems, offset, totalItems }: UseInfiniteScrollProps<string>) =>
        useInfiniteScroll<string>({ loadMore, newItems, offset, totalItems }),
      { initialProps },
    );

  it('should return an empty array as accItems and loading false on first render', () => {
    const { result } = renderUseInfiniteScroll();
    expect(result.current.accItems).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(mockLoadMore).toHaveBeenCalledTimes(1);
  });

  it('should call loadMore function after first render', () => {
    const { rerender } = renderUseInfiniteScroll();
    rerender({ newItems: ['item_1'], loadMore: mockLoadMore, offset: 1, totalItems: 5 });
    expect(mockLoadMore).toHaveBeenCalledTimes(3);
  });

  it('should accumulate items correctly', () => {
    const mockItems = ['item_1', 'item_2'];
    const { result, rerender } = renderUseInfiniteScroll();
    rerender({ newItems: mockItems, loadMore: mockLoadMore, offset: 0, totalItems: 5 });
    expect(result.current.accItems).toEqual(mockItems);
    const moreMockItems = ['item_1', 'item_2', 'item_5'];
    rerender({ newItems: moreMockItems, loadMore: mockLoadMore, offset: 0, totalItems: 5 });
    expect(result.current.accItems).toEqual(mockItems.concat(moreMockItems));
    expect(mockLoadMore).toHaveBeenCalledTimes(4);
  });
});
