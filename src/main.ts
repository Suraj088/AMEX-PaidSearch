import { domReady } from './scripts/common/dom-ready';
import { emitControlValueEvent, isCustomEvent } from './scripts/card-category/custom-events';
import { initCardCategoryListener } from './scripts/card-category/init-listener';
import { renderCardCompare } from './scripts/card-compare/render';

const CARD_CATEGORY_CHANGE_EVENT = 'card-category-change';

domReady(() => {
  // Initialize card category behaviors
  try {
    initCardCategoryListener({
      onRadioControlChange: ({ eventTarget }) => {
        const { checked, value } = eventTarget;
       
        if (checked) {
         
          emitControlValueEvent(document.body, CARD_CATEGORY_CHANGE_EVENT, value);
        }
      },
    });
    

    // Listen to our own event emission for logging purposes
    document.body.addEventListener(CARD_CATEGORY_CHANGE_EVENT, (e) => {
      if (isCustomEvent(e) && e.detail.value) {
        console.debug(`Cart category value emitted for "${e.detail.value}"`);
      }
    });
  } catch (error:any) {
    console.warn(error.message);
  }


  // Render card compare
  try {
    renderCardCompare('card-compare-table-root');
  } catch (error:any) {
    console.warn(error.message);
  }
});
