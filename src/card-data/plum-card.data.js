// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'plum-card',
    name: 'The Plum Card<sup>®</sup>',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-plum-card-amex/30214/`,
    pdpUrl: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-plum-card-amex/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-Plum`,
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/the-plum-card-business-charge-card/30214-9-0?intlink=US-Acq-NonBrandSearch-PlumCard-Apply-Plum`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/plum.png`,
    annualFee: 250,
    aprText:' ',
    CashBack:true,
    BusinessServices:true,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/the-plum-card-business-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/the-plum-card-business-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-plum-card-1635749061.png',
    quickCompareColor: '#F5F1EC',
    vacPopOut: [
      {
        kind: 'heading-5',
        content: 'Cash back or more time to pay—the choice is&nbsp;yours',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content: 'Get built-in flexibility to help you manage your business cash flow',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Earn <strong>unlimited 1.5% cash back</strong> automatically when you pay in 10 days. No caps. No categories. No enrollment.<sup>‡</sup>',
          `<strong>OR</strong> get up to <strong>60 days to pay without interest</strong>. Just pay the Minimum Due by your Payment Due date and take care of the rest when it's due.<sup>‡</sup>`,
        ],
      },
    ],
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Cash back or more time to pay—the choice is&nbsp;yours',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content: 'Get built-in flexibility to help you manage your business cash flow',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Earn <strong>unlimited 1.5% cash back</strong> automatically when you pay in 10 days. No caps. No categories. No enrollment.<sup>‡</sup>',
          `<strong>OR</strong> get up to <strong>60 days to pay without interest</strong>. Just pay the Minimum Due by your Payment Due date and take care of the rest when it's due.<sup>‡</sup>`,
        ],
      },
    ],
    greatForTitle: 'Flexibility for your cash-flow cycle',
    greatFor: [
      {
        iconKey: 'cashback',
        label: `Earn <strong>unlimited 1.5% cash back</strong> automatically when you pay in 10 days. No caps. No categories. No enrollment.<sup>‡</sup>`,
      },
      {
        iconKey: 'calendar',
        label: `<strong>OR</strong> get up to <strong>60 days to pay without interest</strong>. . Just pay the Minimum Due by your Payment Due date and take care of the rest when it's due.<sup>‡</sup>`,
      },
    ],
    welcomeOffer: [],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-plum-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Get a discount for paying early or more time to pay`,
      },
      {
        kind: 'p',
        content: `<strong>1.5%</strong> discount on the portion of your balance you pay within 10 days of your statement closing date<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `OR`,
      },
      {
        kind: 'p',
        content: `<strong>Up to 60 days to pay without interest</strong>. Just pay the Minimum Due by your Payment Due date and take care of the rest when it's due.<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Early Pay Discount`,
      },
      {
        kind: 'p',
        content: `Save on your expenses with the Card that earns unlimited cash back. There are no caps on earnings and no categories to meet - just automatic 1.5% cash back on eligible charges when you pay within 10 days of your statement closing date. Simply pay your Minimum Payment Due by your Payment Due Date and see the discount applied to your next statement that you can add to your bottom line.`,
      },
      {
        kind: 'heading-3',
        content: `Extra time to pay`,
      },
      {
        kind: 'p',
        content: `When you need more time to pay your balance, we’ve got your back. Your Card offers up to 60 days to pay without interest when you pay the Minimum Due by the Payment Due date. Get back to business and cover the rest later.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `No Preset Spending Limit`,
      },
      {
        kind: 'p',
        content: `The Plum Card has No Preset Spending Limit, a unique feature that gives you the ability to unlock more purchase power as you use your Card. This means the spending limit is flexible. Unlike a traditional credit card with a set limit, the amount you can spend adapts based on factors such as your purchase, payment and credit history.`,
      },
      {
        kind: 'heading-3',
        content: `Choose Your Billing Cycle`,
      },
      {
        kind: 'p',
        content: `Choose the time most convenient for your business to receive your bill each month. Just let us know and we'll adjust it for you.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Connect to QuickBooks<sup>®</sup>`,
      },
      {
        kind: 'p',
        content: `Save time with auto-expense categorization in QuickBooks— Once enrolled, your Business Card transactions are automatically tagged with your QuickBooks categories.<sup>‡</sup>`,
      },
    ],
  };
};
