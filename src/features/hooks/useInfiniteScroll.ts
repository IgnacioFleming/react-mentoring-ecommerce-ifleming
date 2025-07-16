import { useEffect, useState } from 'react';

export type UseInfiniteScrollProps<T> = {
  offset: number;
  loadMore: () => void;
  newItems: T[];
  totalItems: number;
  params: string;
};

export const useInfiniteScroll = <T>({
  loadMore,
  offset,
  newItems,
  totalItems,
  params,
}: UseInfiniteScrollProps<T>) => {
  const [accItems, setAccItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (offset === 0) {
      setAccItems([]);
      loadMore();
      setHasMore(true);
      setLoading(true);
    }
  }, [params, offset, loadMore]);

  useEffect(() => {
    if (offset > 0 && hasMore) {
      loadMore();
      setLoading(true);
    }
  }, [offset, loadMore, hasMore]);

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
