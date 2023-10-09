// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'blue-business-cash-card',
    name: 'Blue Business Cash<sup>™</sup>&nbsp;Card',
    url: `https://www.americanexpress.com/en-us/business/credit-cards/blue-business-cash/30214/`,
    pdpUrl: 'https://www.americanexpress.com/en-us/business/credit-cards/blue-business-cash/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-BlueBusinessCash',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/bluebusinesscash-credit-card/30214-9-0?intlink=US-Acq-NonBrandSearch-BlueBusinessCashCard-Apply-BlueBusinessCash`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/blue-business-cash.png`,
    annualFee: 0,
    aprText:' ',
    learnMoreUrl: `#cardBenefitsAndFeatures`,
    NoAnnualFee:true,
    CashBack:true,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/bluebusinesscash-credit-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/bluebusinesscash-credit-card/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/BBC_Hero.png',
    quickCompareColor: '#E9F1F0',
    vacPopOut: [
      {
        kind: 'heading-5',
        content: 'Cash back to your business, so you can get back to&nbsp;business',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Enjoy a <b>Low Intro APR</b>, and <b>no annual fee</b>.<sup>¤</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>2% cash back</strong> on all eligible purchases on up to $50,000 per calendar year<sup>‡</sup>',
          '<strong>1% cash back</strong> on all eligible purchases thereafter.<sup>‡</sup> Cash back earned is automatically credited to your&nbsp;statement.',
          'No annual fee<sup>¤</sup>',
        ],
      },
    ],
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Cash back to your business, so you can get back to&nbsp;business',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Enjoy a <b>Low Intro APR</b>, and <b>no annual fee</b>.<sup>¤</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>2% cash back</strong> on all eligible purchases on up to $50,000 per calendar year<sup>‡</sup>',
          '<strong>1% cash back</strong> on all eligible purchases thereafter.<sup>‡</sup> Cash back earned is automatically credited to your&nbsp;statement.',
          'No annual fee<sup>¤</sup>',
        ],
      },
    ],
    greatForTitle: 'Cash back with no annual&nbsp;fee<sup>¤</sup>',
    greatFor: [
      {
        iconKey: 'cashback',
        label: `<strong>2% cash back</strong> on all eligible purchases on up to $50,000 per calendar year<sup>‡</sup>`,
      },
      {
        iconKey: 'cashback',
        label: `<strong>1% cash back</strong> on all eligible purchases thereafter.<sup>‡</sup> Cash back earned is automatically credited to your statement.`,
      },
      {
        iconKey: 'no-fee',
        label: `No Annual Fee<sup>¤</sup>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Enjoy a <b>Low Intro APR</b>, and <b>no annual fee</b>.<sup>¤</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-blue-business-cash-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Cash Back`,
      },
      {
        kind: 'p',
        content: `<strong>2%</strong> cash back on all eligible purchases on up to $50,000 per calendar year<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1%</strong> on purchases thereafter<sup>‡</sup> `,
      },
      {
        kind: 'p',
        content: `Cash back earned is automatically credited to your statement.`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Expanded Buying Power`,
      },
      {
        kind: 'p',
        content: `Expanded Buying Power<sup>‡</sup> gives you the freedom to spend beyond your credit limit and get business done. <i>Just remember, the amount you can spend above your credit limit is not unlimited. It adjusts with your use of the Card, your payment history, credit record, financial resources known to us and other factors.</i>`,
      },
      {
        kind: 'heading-3',
        content: `Connect to QuickBooks<sup>®</sup>`,
      },
      {
        kind: 'p',
        content: `Save time with auto-expense categorization in Intuit QuickBooks- Once enrolled, your Business Card transactions are automatically tagged with your QuickBooks categories.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Vendor Pay by Bill.com`,
      },
      {
        kind: 'p',
        content: `Take advantage of Vendor Pay by Bill.com by enrolling your Card. With the Basic plan, there is no monthly fee for the first user and no fee for a second user for six months. After six months, the second user will have a fee of $15 per month. Additional fees may apply based on plan type and number of users.<sup>‡</sup>`,
      },
    ],
  };
};
