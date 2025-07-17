import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useHandleOffset = (incremental = 1) => {
  const { search } = useLocation();
  const [offset, setOffset] = useState<number>(0);
  const handleOffset = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setOffset((prevOffset) => prevOffset + incremental);
    }
  };
  useEffect(() => {
    setOffset(0);
  }, [search]);
  return { offset, handleOffset };
};
