import { useState, useEffect } from 'preact/hooks';

export function useMatchMedia(query: string): boolean {
  const mqList = window.matchMedia(query);

  const [matches, setMatches] = useState(() => mqList.matches);

  useEffect(() => {
    const onMatchMediaChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mqList.addListener(onMatchMediaChange);

    return () => mqList.removeListener(onMatchMediaChange);
  }, []);

  return matches;
}
