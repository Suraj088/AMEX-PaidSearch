/**
 * Determines whether an EventTarget is an HTMLInputElement
 *
 * @param {(EventTarget | null)} target
 * @returns {target is HTMLInputElement}
 */
export function eventTargetIsInput(target: EventTarget | null): target is HTMLInputElement {
  return (
    !!target && 'tagName' in target && (target as HTMLElement).tagName.toUpperCase() === 'INPUT'
  );
}

/**
 * Determines whether an EventTarget is an HTMLSelectElement
 *
 * @param {(EventTarget | null)} target
 * @returns {target is HTMLSelectElement}
 */
export function eventTargetIsSelect(target: EventTarget | null): target is HTMLSelectElement {
  return (
    !!target && 'tagName' in target && (target as HTMLElement).tagName.toUpperCase() === 'SELECT'
  );
}
