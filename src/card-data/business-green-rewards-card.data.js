// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'business-green-rewards-card',
    name: 'American&nbsp;Express<sup>®</sup> Business&nbsp;Green&nbsp;Card',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/30214/`,
    pdpUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-Green',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/business-green-rewards-charge-card/30214-9-0?intlink=US-Acq-NonBrandSearch-GreenCard-Apply-Green`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/business-green-rewards.png`,
    annualFee: '0 intro',
    NoAnnualFee:false,
    membershipRewards:true,
    CashBack:false,
    Airline:false,
    Hotel:false,
    annualFeeSymbols: null,
    annualFeeSubtext: 'for the first year, then&nbsp;$95<sup>†¤</sup>',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-green-rewards-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-green-rewards-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-business-green-rewards-card-1635749061.png',
    quickCompareColor: '#F2F5F7',
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Rewarding your travel plans, dinner plans and everything in&nbsp;between',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Earn <span class="heading-4 font-weight-bold">15,000</span> Membership Rewards<sup>®</sup> points after you spend $3,000 in eligible purchases on the Card within your first 3 months of Card&nbsp;Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>2X points</strong> for each dollar you spend on eligible purchases at <a href="http://amextravel.com" target="_blank" rel="noopener noreferrer">amextravel.com</a><sup>‡</sup>',
          '<strong>1X points</strong> for each dollar you spend on eligible purchases<sup>‡</sup>',
          'Pay Over Time Option<sup>‡</sup>',
        ],
      },
    ],
    greatForTitle: 'Earning points and managing business expenses:',
    greatFor: [
      {
        iconKey: 'point-2x',
        label: `<strong>2X points</strong> for each dollar you spend on eligible purchases at <a href="http://amextravel.com" target="_blank" rel="noopener noreferrer">amextravel.com</a><sup>‡</sup>`,
      },
      {
        iconKey: 'recent-points',
        label: `<strong>1X points</strong> for each dollar you spend on eligible purchases<sup>‡</sup>`,
      },
      {
        iconKey: 'pay-over-time',
        label: `Pay Over Time Option<sup>‡</sup>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">15,000</span>`,
      },
      {
        kind: 'p',
        content: `Membership Rewards<sup>®</sup> points After you spend $3,000 in eligible purchases on the Card within your first 3 months of Card&nbsp;Membership.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-business-green-rewards-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Membership Rewards<sup>®</sup> Points `,
      },
      {
        kind: 'p',
        content: `<strong>2X</strong> on each dollar you spend on eligible purchases at <a href="http://amextravel.com" target="_blank" rel="noopener noreferrer">amextravel.com</a><sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1X</strong> on each dollar you spend on eligible purchases<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Pay Over Time Option<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `The Pay Over Time option lets you carry a balance with interest on eligible purchases.*`,
      },
      {
        kind: 'p',
        content: `How it works:`,
      },
      {
        kind: 'ul',
        content: [
          'Eligible purchases can be paid over time, up to the amount of your Pay Over Time Limit on your account.',
          'You can choose to pay for these purchases over time with interest, or you can pay your full balance each month, whichever is best for your business.',
        ],
      },
      {
        kind: 'p',
        content: `*Card Members must pay in full all charges not included in a Pay Over Time balance.`,
      },
      {
        kind: 'heading-3',
        content: `No Preset Spending Limit`,
      },
      {
        kind: 'p',
        content: `Unlike a traditional credit card, Business Green Rewards Card has no preset spending limit, a unique feature that gives you the ability to unlock more purchase power as you use your Card. The amount you can spend adapts based on factors such as your purchase, payment and credit history. You can use the Check Spending Power tool in your online account or mobile app to check if a large purchase will be approved.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Vendor Pay by Bill.com`,
      },
      {
        kind: 'p',
        content: `You can make the most out of paying your business bills. Improve your cash flow and take advantage of Card benefits when you use your Card to pay bills with Vendor Pay by Bill.com.<sup>‡</sup>`,
      },
    ],
  };
};
