import { useState, useRef } from 'react';

/**
 * Custom hook for managing dropdown visibility with an optional close delay (timer).
 */
export function useDropdown(delay = 250) {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsOpen(true);
  };

  const close = (immediate = false) => {
    if (immediate) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsOpen(false);
    } else {
      timerRef.current = setTimeout(() => setIsOpen(false), delay);
    }
  };

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return { isOpen, open, close, toggle, setIsOpen };
}
