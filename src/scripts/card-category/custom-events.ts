export interface ControlValueEventDetail {
  value: string;
}

/**
 * Created a control value event and emits it in a provided target and with the provided name.
 */
export function emitControlValueEvent(
  eventTarget: Document | HTMLElement,
  eventName: string,
  value: string
): CustomEvent<ControlValueEventDetail> {
  const event = new CustomEvent<ControlValueEventDetail>(eventName, {
    detail: { value },
    cancelable: false,
    bubbles: false,
  });
  console.log(event,'event')
  eventTarget.dispatchEvent(event);
  return event;
}

/**
 * Given an event, returns whether it's a CustomEvent or not.
 */
export function isCustomEvent(e: Event): e is CustomEvent {
  return (e as CustomEvent).detail !== undefined;
}
