import { useEffect, useState } from 'react';

export type UseInfiniteScrollProps<T> = {
  offset: number;
  loadMore: () => void;
  newItems: T[];
  totalItems: number | undefined;
  params: string;
};

export const useInfiniteScroll = <T>({
  loadMore,
  offset,
  newItems,
  totalItems = 0,
  params,
}: UseInfiniteScrollProps<T>) => {
  const [accItems, setAccItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (offset === 0) {
      setAccItems([]);
      loadMore();
      setHasMore(true);
    }
  }, [params, offset, loadMore]);

  useEffect(() => {
    if (offset > 0 && hasMore) {
      loadMore();
    }
  }, [offset, loadMore, hasMore]);

  useEffect(() => {
    if (newItems.length > 0 && totalItems > 0) {
      setAccItems((prevItems) => {
        const updatedItems = prevItems.concat(newItems);
        setHasMore(updatedItems.length < totalItems);
        return updatedItems;
      });
    }
  }, [newItems, totalItems]);

  return { accItems };
};
