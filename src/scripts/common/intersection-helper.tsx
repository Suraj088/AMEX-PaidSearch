import type { FunctionComponent } from 'preact';
import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

interface IntersectionHelperProps {
  onIntersectChange: (isIntersecting: boolean) => void;
  observerOptions?: IntersectionObserverInit;
}

export const IntersectionHelper: FunctionComponent<IntersectionHelperProps> = ({
  onIntersectChange,
  observerOptions,
  children,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      ([entry]) => onIntersectChange(entry.isIntersecting),
      observerOptions
    );
    const target = targetRef.current;

    observerRef.current = observer;

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [observerOptions, onIntersectChange]);

  return <div ref={targetRef}>{children}</div>;
};
