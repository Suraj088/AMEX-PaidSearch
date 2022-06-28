import { h, FunctionComponent, Fragment } from 'preact';
import { useRef } from 'preact/hooks';
import { createPortal } from 'preact/compat';

export const CardStickyNavPortal: FunctionComponent = ({ children }) => {
  const containerRef = useRef<HTMLElement | null>();

  if (!containerRef.current) {
    const targetEl = document.getElementById('block--card-sticky-nav');
    if (targetEl) {
      containerRef.current = targetEl;
    } else {
      console.error(`Failed to find 'block--card-sticky-nav'`);
    }
  }

  return containerRef.current
    ? createPortal(<Fragment>{children}</Fragment>, containerRef.current)
    : null;
};
