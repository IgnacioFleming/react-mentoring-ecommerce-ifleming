import { useRef } from 'react';

type UseHandleIntersectProps = {
  setOffset: () => void;
};

export const useHandleIntersect = ({ setOffset }: UseHandleIntersectProps) => {
  const firstRender = useRef(true);
  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !firstRender.current) {
      setOffset();
    }
    if (entry.isIntersecting && firstRender.current) return (firstRender.current = false);
  };
  return handleIntersect;
};
