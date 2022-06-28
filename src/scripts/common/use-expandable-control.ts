import { useId } from '@reach/auto-id';
import { useState } from 'preact/hooks';

interface ExpandableControl {
  expanded: boolean;
  controlId: string;
  containerId: string;
  expand: () => void;
  collapse: () => void;
  toggle: () => void;
}

export function useExpandableControl(namespace: string, initialState: boolean): ExpandableControl {
  // Generated control Ids
  const id = useId();
  const controlId = `${namespace}-${id}-trigger`;
  const containerId = `${namespace}-${id}-container`;

  // Card details open/close state
  const [expanded, setExpanded] = useState(initialState);

  const expand = () => setExpanded(true);
  const collapse = () => setExpanded(false);
  const toggle = () => setExpanded((prev) => !prev);

  return { expanded, controlId, containerId, expand, collapse, toggle };
}
