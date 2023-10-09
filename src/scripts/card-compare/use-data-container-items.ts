import { useState, useEffect } from 'preact/hooks';

export interface CardDynamicContentNode {
  kind: string;
  id?: string;
  extraClasses?: string;
  content: string | string[];
}

export interface CardDynamicIconRowNode {
  iconKey: string;
  extraClasses?: string;
  label: string;
}

export interface CardDynamicHighLights {
  payOverTime:string,
  noPresetSpendingLimit:string,
  
}

export interface CardDynamicData {
  id: string;
  name: string;
  url: string;
  pdpUrl: string | undefined;
  applyUrl: string | null;
  image: string;
  annualFee?: number | string;
  annualFeeString?: string;
  aprText?: string | null;
  vacPopOut: CardDynamicContentNode[];
  NoAnnualFee?:boolean;
  Best?:boolean;
  membershipRewards?:boolean;
  CashBack?:boolean;
  Airline?:boolean;
  Hotel?:boolean;
  Dining?:boolean;
  Technology?:boolean;
  Gas?:boolean;
  BusinessServices?:boolean;
  Retail?:boolean;
  Travel?:boolean;
  Supplies?:boolean;
  Advertising?:boolean;
  Shipping?:boolean;
  annualFeeSymbols: string | null;
  annualFeeSubtext?: string;
  offerAndBenefitTermsUrl: string;
  learnMoreUrl?: string;
  ratesAndFeesUrl: string;
  quickCompareImage: string;
  quickCompareColor?: string | null;
  quickCompare: CardDynamicContentNode[];
  greatForTitle: string;
  greatFor: CardDynamicIconRowNode[];
  welcomeOffer: CardDynamicContentNode[];
  earningRewards: CardDynamicContentNode[];
  moreBenefits: CardDynamicContentNode[];
  highlights?:CardDynamicHighLights;
}

export function useDataContainerItems(): CardDynamicData[] {
  const [items, setItems] = useState<CardDynamicData[]>(() => []);

  useEffect(() => {
    const dataContainer = document.getElementById('data-container');

    if (!dataContainer) {
      console.error('Found no #data-container element');
      return;
    }

    // Initial item retrieval
    setItems(() => retrieveDataItems(dataContainer));

    // Subsequent item retrievals
    const observer = new MutationObserver((mutationsList, _observer) => {
      const hasChildListMutations = mutationsList.some((m) => m.type === 'childList');

      if (!hasChildListMutations) return;

      setItems(() => retrieveDataItems(dataContainer));
    });

    observer.observe(dataContainer, { childList: true });
    console.debug('Observing changes on data container...');

    return () => {
      observer.disconnect();
    };
  }, []);

  return items;
}

/**
 * Retrieves `item` elements from container
 */
function retrieveDataItems(container: HTMLElement) {
  const jsonCollection = ([] as HTMLScriptElement[]).slice.call(
    container.querySelectorAll('script[type="application/json"]')
  );
  const items = [];

  for (const jsonItem of jsonCollection) {
    try {
      const itemData = JSON.parse(jsonItem.textContent || '');
      items.push(itemData);
    } catch (error) {
      console.error('Failed to retrieve data from item', error);
    }
  }

  console.debug('Retrieved data from items', items);
  return items;
}
