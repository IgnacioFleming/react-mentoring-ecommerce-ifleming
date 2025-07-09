import { useRef, useState } from 'react';

export const useHandleOffset = (incremental = 1) => {
  const firstRender = useRef(true);
  const [offset, setOffset] = useState<number>(0);
  const handleOffset = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !firstRender.current) {
      setOffset((prevOffset) => prevOffset + incremental);
    }
    if (entry.isIntersecting && firstRender.current) return (firstRender.current = false);
  };
  return { offset, handleOffset };
};
