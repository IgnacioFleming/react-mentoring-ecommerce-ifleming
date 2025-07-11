import { RefObject, useEffect, useRef } from 'react';

type UseIntersectionObserverProps = {
  ref: RefObject<HTMLElement | null>;
  cb: (entries: IntersectionObserverEntry[]) => void;
  rootMargin?: `${number}${'px' | '%'}`;
  threshold?: number;
};

export const useIntersectionObserver = ({
  ref,
  cb,
  rootMargin = '0px',
  threshold = 0,
}: UseIntersectionObserverProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(cb, { rootMargin, threshold });

    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref, cb, rootMargin, threshold]);
};
