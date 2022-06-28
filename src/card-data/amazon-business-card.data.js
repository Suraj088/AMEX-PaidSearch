// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'amazon-business-card',
    name: 'Amazon American Express Business&nbsp;Card',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/amazon-business-card/30214/`,
    pdpUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/amazon-business-card/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-AmazonBusiness',
    applyUrl: `https://www.amazon.com/dp/B07984JN3L?plattr=30214`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/amazon-business-angled.png`,
    annualFee: 0,
    cardFeatures:'no fee',
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/partner/print/business-card/microsite/amz/amazon-core-business-credit-card/ep-30214?print=false#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/partner/print/business-card/microsite/amz/amazon-core-business-credit-card/ep-30214?print=false`,
    quickCompareImage: 'assets/lifestyle-amazon-business-card-1635749061.png',
    quickCompareColor: '#F0EBEA',
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'The choice is yours—3% Back or a 60-day repayment&nbsp;term<sup>‡</sup>',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Get a <span class="heading-4 font-weight-bold">$100</span> Amazon.com Gift Card upon approval for the Amazon Business American Express Card.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>3% Back or 60-day terms</strong> on U.S. purchases at Amazon Business, AWS, Amazon.com and Whole Foods Market. Earn 3% back on the first $120,00 in purchases each calendar year, 1% Back&nbsp;thereafter.',
          '<strong>2% Back</strong> on U.S. purchases<sup>‡</sup> at restaurants, gas stations, and wireless phone services purchased directly from service&nbsp;providers.',
        ],
      },
    ],
    greatForTitle: 'Choosing Cash Back or 60-day repayment terms:',
    greatFor: [
      {
        iconKey: 'recent-points',
        label: `<strong>3% Back or 60-day terms</strong> on U.S. purchases at Amazon Business, AWS, Amazon.com and Whole Foods Market. Earn 3% back on the first $120,00 in purchases each calendar year, 1% Back thereafter.`,
      },
      {
        iconKey: 'gas-station',
        label: `<strong>2% Back</strong> on U.S. purchases<sup>‡</sup> at restaurants, gas stations, and wireless phone services purchased directly from service providers.`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4 margin-1-t"',
        content: `Get a <span class="display-block heading-5 font-weight-bold margin-0">$100</span>`,
      },
      {
        kind: 'p',
        content: `Amazon.com Gift Card upon approval for the Amazon Business American Express&nbsp;Card.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-amazon-business-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Cash Back`,
      },
      {
        kind: 'p',
        content: `<strong>3% Back or 60-day terms</strong> on U.S. purchases (up to $120,000 per calendar year) at:`,
      },
      {
        kind: 'ul',
        content: ['Amazon Business', 'AWS', 'Amazon.com', 'Whole Foods Market'],
      },
      {
        kind: 'p',
        content: `<strong>2% Back</strong> on U.S. purchases<sup>‡</sup> at:`,
      },
      {
        kind: 'ul',
        content: [
          'Restaurants',
          'Gas stations',
          'Wireless phone services purchased directly from service providers<sup>‡</sup>',
        ],
      },
      {
        kind: 'p',
        content: `<strong>1% Back</strong> on all other eligible purchases<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Amazon Business Enhanced Data Views`,
      },
      {
        kind: 'p',
        content: `Get deeper insights on purchases and simplify your expense reconciliation. With enhanced data views, you’ll see purchases listed item by item in an easily downloadable file from your online statement.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Amazon Shop with Points`,
      },
      {
        kind: 'p',
        content: `Earn rewards that don't expire, so you can use them on your time. Save on items at checkout on Amazon.com and Amazon Business (U.S.) or apply towards a purchase on your statement.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `No Foreign Transaction Fees`,
      },
      {
        kind: 'p',
        content: `Travel anywhere in the world, knowing you won’t be charged a foreign transaction fee from American Express when you use your Card<sup>‡</sup>`,
      },
    ],
  };
};
