import { useEffect } from 'react';

export const useHandleOutsideClick = (ref: React.RefObject<HTMLElement | null>, cb: () => void) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!ref.current?.contains(target)) return cb();
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [ref, cb]);
};
