import { useState } from 'react';

export const useHandleOffset = (incremental = 1) => {
  const [offset, setOffset] = useState<number>(0);
  const handleOffset = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setOffset((prevOffset) => prevOffset + incremental);
    }
  };
  return { offset, handleOffset };
};
