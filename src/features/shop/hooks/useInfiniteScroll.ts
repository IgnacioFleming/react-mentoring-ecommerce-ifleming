/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useCallback, useEffect } from 'react';

type UseInfiniteScrollProps = {
  hasMore: boolean;
  setOffset: () => void;
  loadMore: () => void;
  ref: RefObject<HTMLElement | null>;
};

export const useInfiniteScroll = ({
  hasMore,
  setOffset,
  loadMore,
  ref,
}: UseInfiniteScrollProps) => {
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!hasMore) return;
      const sentinelEntry = entries[0];
      if (sentinelEntry.isIntersecting) setOffset();
      loadMore();
    },
    [hasMore, loadMore],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0,
      rootMargin: '-200px',
    });
    const sentinel = ref.current!;
    observer.observe(sentinel);
    return () => {
      if (sentinel) observer.unobserve(sentinel);
      observer.disconnect();
    };
  }, [ref, handleIntersect]);
};
