import { CardCategoryControls, getCardCategoryControls } from './get-card-category-controls';
import { eventTargetIsInput } from '../common/event-target';

export interface RadioControlChangeParams {
  controls: CardCategoryControls;
  eventTarget: HTMLInputElement;
  event: Event;
}

export interface InitCardCategoryListenerParams {
  onRadioControlChange: (params: RadioControlChangeParams) => void;
}

interface TeardownFn {
  (): void;
}

export function initCardCategoryListener(handlers: InitCardCategoryListenerParams): TeardownFn {
  const controls = getCardCategoryControls();

  const radioInputHandler = (event: Event) => {
    const eventTarget = event.target;

    if (!eventTargetIsInput(eventTarget)) return;

    handlers.onRadioControlChange({
      controls,
      event,
      eventTarget,
    });
  };

  controls.radioGroup.addEventListener('input', radioInputHandler);

  return () => {
    controls.radioGroup.removeEventListener('input', radioInputHandler);
  };
}
