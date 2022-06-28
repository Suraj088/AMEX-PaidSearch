import { useReducer, Reducer } from 'preact/hooks';

import { CardDynamicData } from './use-data-container-items';

interface CompareItemDisplayState {
  startIdxInView: number;
  endIdxInView: number;
  maxItemsInView: number;
  subsetItems: CardDynamicData[];
  allItems: CardDynamicData[];
}

const initialState: CompareItemDisplayState = {
  startIdxInView: 0,
  endIdxInView: 0,
  maxItemsInView: Infinity,
  subsetItems: [],
  allItems: [],
};

interface ResetAction {
  type: 'RESET';
}

interface ShowAllAction {
  type: 'SHOW_ALL';
}

interface PrevAction {
  type: 'PREV';
}

interface NextAction {
  type: 'NEXT';
}

interface SetIndexAction {
  type: 'SET_INDEX';
  payload: number;
}

interface SetMaxItemsInViewAction {
  type: 'SET_MAX_ITEMS_IN_VIEW';
  payload: number;
}

interface SetItemsAction {
  type: 'SET_ITEMS';
  payload: CardDynamicData[];
}

type CompareItemDisplayActions =
  | ResetAction
  | ShowAllAction
  | PrevAction
  | NextAction
  | SetIndexAction
  | SetMaxItemsInViewAction
  | SetItemsAction;

function clamp(value: number, min: number, max: number) {
  return min < max
    ? value < min
      ? min
      : value > max
      ? max
      : value
    : value < max
    ? max
    : value > min
    ? min
    : value;
}

const compareItemDisplayReducer: Reducer<CompareItemDisplayState, CompareItemDisplayActions> = (
  state,
  action
): CompareItemDisplayState => {
  switch (action.type) {
    case 'RESET': {
      return { ...initialState };
    }
    case 'PREV':
    case 'NEXT': {
      const maxItemsInView = state.maxItemsInView;
      const shiftStartIdx = action.type === 'PREV' ? -1 : 1;
      const maxStartIdx = Math.max(0, state.allItems.length - maxItemsInView);
      const startIdxInView = clamp(state.startIdxInView + shiftStartIdx, 0, maxStartIdx);
      const subsetItems = state.allItems.slice(startIdxInView, startIdxInView + maxItemsInView);
      const endIdxInView = startIdxInView + (subsetItems.length - 1);

      return {
        startIdxInView,
        endIdxInView,
        maxItemsInView,
        subsetItems,
        allItems: state.allItems,
      };
    }
    case 'SET_INDEX': {
      const maxItemsInView = state.maxItemsInView;
      const maxStartIdx = Math.max(0, state.allItems.length - maxItemsInView);
      const startIdxInView = clamp(action.payload, 0, maxStartIdx);
      const subsetItems = state.allItems.slice(startIdxInView, startIdxInView + maxItemsInView);
      const endIdxInView = startIdxInView + (subsetItems.length - 1);

      return {
        startIdxInView,
        endIdxInView,
        maxItemsInView,
        subsetItems,
        allItems: state.allItems,
      };
    }
    case 'SHOW_ALL':
    case 'SET_MAX_ITEMS_IN_VIEW': {
      if (action.type === 'SHOW_ALL' || !Number.isInteger(action.payload)) {
        return {
          startIdxInView: 0,
          endIdxInView: state.allItems.length - 1,
          maxItemsInView: Infinity,
          subsetItems: state.allItems,
          allItems: state.allItems,
        };
      }

      const maxItemsInView = action.payload;
      const startIdxInView = 0;
      const subsetItems = state.allItems.slice(startIdxInView, startIdxInView + action.payload);
      const endIdxInView = startIdxInView + (subsetItems.length - 1);

      return {
        startIdxInView,
        endIdxInView,
        maxItemsInView,
        subsetItems,
        allItems: state.allItems,
      };
    }
    case 'SET_ITEMS': {
      const allItems = action.payload;
      const startIdxInView = 0;
      const subsetItems = allItems.slice(startIdxInView, startIdxInView + state.maxItemsInView);
      const endIdxInView = startIdxInView + (subsetItems.length - 1);

      return {
        startIdxInView,
        endIdxInView,
        maxItemsInView: state.maxItemsInView,
        subsetItems,
        allItems,
      };
    }
  }
};

export function useCompareItemDisplayState(): {
  state: CompareItemDisplayState;
  reset: () => void;
  showAll: () => void;
  setPrev: () => void;
  setNext: () => void;
  setIdx: (v: number) => void;
  setMaxItemsInView: (v: number) => void;
  setItems: (v: CardDynamicData[]) => void;
} {
  const [state, dispatch] = useReducer(compareItemDisplayReducer, initialState);

  const reset = () => dispatch({ type: 'RESET' });
  const showAll = () => dispatch({ type: 'SHOW_ALL' });
  const setPrev = () => dispatch({ type: 'PREV' });
  const setNext = () => dispatch({ type: 'NEXT' });
  const setIdx = (v: number) => dispatch({ type: 'SET_INDEX', payload: v });
  const setMaxItemsInView = (v: number) => dispatch({ type: 'SET_MAX_ITEMS_IN_VIEW', payload: v });
  const setItems = (v: CardDynamicData[]) => dispatch({ type: 'SET_ITEMS', payload: v });

  return { state, reset, showAll, setPrev, setNext, setIdx, setMaxItemsInView, setItems };
}
