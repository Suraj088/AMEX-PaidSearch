// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'amazon-business-prime-card',
    name: 'Amazon Business Prime Card',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/amazon-business-prime-card/30214/`,
    applyUrl: `https://www.amazon.com/dp/B07984JN3L?plattr=30214`,
    pdpUrl:`https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/amazon-business-prime-card/`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/amazon-business-prime-angled.png`,
    annualFee: 0,
    aprText:' ',
    NoAnnualFee:true,
    Retail:true,
    Supplies:true,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/partner/print/business-card/microsite/amz/amazon-prime-business-credit-card/ep-30214?print=false#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/partner/print/business-card/microsite/amz/amazon-prime-business-credit-card/ep-30214?print=false`,
    quickCompareImage: '',
    vacPopOut: [
      {
        kind: 'heading-5',
        content: 'Get a $125 Amazon.com Gift Card',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Get a <span class="heading-4 font-weight-bold">$125</span> Amazon.com Gift Card upon approval for the Amazon Business Prime American Express Card.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>5% Back</strong> or 90-day terms on U.S. purchases at Amazon. Terms and Cap Applies<sup>‡</sup>',
          '<strong>2% Back</strong> on U.S. Wireless Telephone Services<sup>‡</sup>',
          '<strong>2% Back</strong> at U.S. Restaurants<sup>‡</sup>',
        ],
      },
    ],
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Get a $125 Amazon.com Gift Card',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Get a <span class="heading-4 font-weight-bold">$125</span> Amazon.com Gift Card upon approval for the Amazon Business Prime American Express Card.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>5% Back</strong> or 90-day terms on U.S. purchases at Amazon. Terms and Cap Applies<sup>‡</sup>',
          '<strong>2% Back</strong> on U.S. Wireless Telephone Services<sup>‡</sup>',
          '<strong>2% Back</strong> at U.S. Restaurants<sup>‡</sup>',
        ],
      },
    ],
    greatForTitle: 'Great For Title',
    greatFor: [
      {
        iconKey: 'cart',
        label: `High-volume purchases`,
      },
      {
        iconKey: 'receipt-view',
        label: `Frequent purchases`,
      },
      {
        iconKey: 'no-fee',
        label: `No Annual Fee<sup>¤</sup>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4 margin-1-t"',
        content: `<span class="display-block heading-3 margin-1-b">Featured card benefit</span><span class="display-block heading-5 font-weight-bold margin-0">5% Back</span> or 90 day&nbsp;terms`,
      },
      {
        kind: 'p',
        content: `on U.S. purchases at Amazon.com with an eligible Prime&nbsp;membership.<sup>‡</sup> Terms and cap apply.`,
      },
    ],
    earningRewards: [
      {
        kind: 'heading-5',
        extraClasses: 'font-weight-bold',
        content: `5% Back`,
      },
      {
        kind: 'p',
        content: `or 90 Day Terms on U.S. purchases at Amazon Business, AWS, Amazon.com and Whole Foods Market with an Amazon Prime membership. On the first $120,000 in purchases each calendar year, 1% back&nbsp;thereafter.<sup>‡</sup>`,
      },
      {
        kind: 'heading-5',
        extraClasses: 'font-weight-bold',
        content: `2% Back`,
      },
      {
        kind: 'p',
        content: `at U.S. restaurants, U.S. gas stations, and on wireless telephone services purchased directly from U.S. service&nbsp;providers.<sup>‡</sup>`,
      },
      {
        kind: 'heading-5',
        extraClasses: 'font-weight-bold',
        content: `1% Back`,
      },
      {
        kind: 'p',
        content: `on other purchases.<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Amazon Business Enhanced Data&nbsp;Views`,
      },
      {
        kind: 'p',
        content: `Gain deeper insights on purchases and simplify expense reconciliation. With enhanced data views, you can see Amazon Business purchases listed item by item in an easily downloadable file from your online&nbsp;statement.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Amazon Shop with Points`,
      },
      {
        kind: 'p',
        content: `With rewards that don’t expire, you choose when to redeem. Decide to save on items at checkout on Amazon.com and Amazon Business (U.S.) or apply towards a purchase on your&nbsp;statement.<sup>‡</sup>`,
      },
    ],
    highlights:{
      payOverTime:false,
      noPresetSpendingLimit:false,
      employeeCards:true,
      connectToQuickBook:false,
      vendorPayByBillcom:false,
      payWithPoints:false,
      noForeignTransactionFees:false,
      theHotelCollection:false,
      purchaseProtection:true,
      carRentalLossAndDamageInsurance:true,
      globalAssistHotline:false,
      wirelessCredit:false,
      airlineBonus:false,
      globalLoungeCollection:false,
      feeCreditForGlobalEntryorTSAPreCheck:false,
      priorityBoarding:false,
      },
  };
};
