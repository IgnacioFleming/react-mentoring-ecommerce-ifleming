import { useEffect, useState } from 'react';
import { queryClient } from '../../main';

export type UseInfiniteScrollProps<T> = {
  offset: number;
  loadMore: () => void;
  newItems: T[];
  totalItems: number;
  params: string;
  queryKey: string;
};

export const useInfiniteScroll = <T>({
  loadMore,
  offset,
  newItems,
  totalItems,
  params,
  queryKey,
}: UseInfiniteScrollProps<T>) => {
  const [accItems, setAccItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!hasMore) return;
    setLoading(true);
    if (offset === 0) {
      setAccItems([]);
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    } else {
      loadMore();
    }
  }, [offset, hasMore, loadMore, queryKey, params]);

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
