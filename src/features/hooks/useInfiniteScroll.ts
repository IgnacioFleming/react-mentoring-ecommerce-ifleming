import { useEffect, useState } from 'react';

export type UseInfiniteScrollProps<T> = {
  offset: number;
  loadMore: () => void;
  newItems: T[];
  totalItems: number;
};

export const useInfiniteScroll = <T>({
  loadMore,
  offset,
  newItems,
  totalItems,
}: UseInfiniteScrollProps<T>) => {
  const [accItems, setAccItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasMore) return;
    setLoading(true);
    loadMore();
  }, [offset, hasMore, loadMore]);

  useEffect(() => {
    if (newItems.length > 0) {
      setAccItems((prevItems) => {
        const updatedItems = prevItems.concat(newItems);
        setHasMore(updatedItems.length < totalItems);
        return updatedItems;
      });
    }
    setLoading(false);
  }, [newItems, totalItems]);

  return { accItems, loading };
};
