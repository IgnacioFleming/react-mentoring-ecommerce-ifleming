/* eslint-disable react-hooks/exhaustive-deps */

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
  }, [offset, loadMore]);

  useEffect(() => {
    if (newItems.length > 0) {
      setAccItems((prevItems) => prevItems.concat(newItems));
      setHasMore([...accItems, ...newItems].length < totalItems);
    }
    setLoading(false);
  }, [newItems, totalItems]);

  return { accItems, loading };
};
