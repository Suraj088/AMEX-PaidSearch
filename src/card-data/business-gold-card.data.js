// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'business-gold-card',
    name: 'Business Gold&nbsp;Card',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-gold-card-amex/30214/`,
    pdpUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-gold-card-amex/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-Gold',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/businessgold-card/30214-9-0?intlink=US-Acq-NonBrandSearch-GoldCard-Apply-Gold`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/business-gold.png`,
    annualFee: 295,
    NoAnnualFee:true,
    membershipRewards:true,
    CashBack:true,
    Airline:true,
    Hotel:false,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/businessgold-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/businessgold-card/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-business-gold-card-1635749061.png',
    quickCompareColor: '#E4EFEF',
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Spend as usual. Watch the points add&nbsp;up.',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Earn <span class="heading-4 font-weight-bold">70,000</span> Membership Rewards<sup>®</sup> points after you spend $10,000 on eligible Card purchases within the first 3 months of Card&nbsp;Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>4X points</strong> on the 2 select categories where your business spends the most each billing cycle. Cap&nbsp;applies<sup>‡</sup>',
          '<strong>1X points</strong> on other eligible&nbsp;purchases<sup>‡</sup>',
          '<strong>25% Airline Bonus</strong><sup>‡</sup>',
        ],
      },
    ],
    greatForTitle: 'Business travel and everyday purchases:',
    greatFor: [
      {
        iconKey: 'recent-points',
        label: `<strong>4X points</strong> on the 2 select categories where your business spends the most each billing cycle. Cap applies<sup>‡</sup>`,
      },
      {
        iconKey: 'offers-desktop',
        label: `<strong>1X points</strong> on other eligible purchases<sup>‡</sup>`,
      },
      {
        iconKey: 'airplane',
        label: `<strong>25%</strong> Airline Bonus<sup>‡</sup>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">70,000</span>`,
      },
      {
        kind: 'p',
        content: `Membership Rewards<sup>®</sup> points after you spend $10,000 on eligible purchases with the Business Gold
        Card within the first 3 months of Card Membership. <sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-business-gold-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Membership Rewards<sup>®</sup>&nbsp;Points`,
      },
      {
        kind: 'p',
        content: `Earn 4X Membership Rewards<sup>®</sup> points on the top 2 categories where your business spent the most each billing cycle from the list below, plus earn 1X on other purchases.`,
      },
      {
        kind: 'ul',
        content: [
          'Airfare purchased directly from airlines',
          'U.S. purchases for advertising in select media (online, TV, radio)',
          'U.S. purchases made directly from select technology providers of computer hardware, software, and cloud solutions',
          'U.S. purchases at gas stations',
          'U.S. purchases at restaurants, including takeout and delivery',
          'U.S. purchases for shipping',
        ],
      },
      {
        kind: 'p',
        content: `Terms and limitations apply.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: [
          `<strong>4X</strong> points applies to the first $150,000 in combined purchases from these 2 categories each calendar year. Then earn 1 point per dollar.`,
          `To learn more about spending categories, visit <a href="https://www.americanexpress.com/rewards-info">americanexpress.com/rewards-info.</a>`,
          `There is no limit to the total number of points you can earn.<sup>‡</sup>`,
        ],
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `25% Airline Bonus`,
      },
      {
        kind: 'p',
        content: `Use Membership Rewards<sup>®</sup> Pay with Points for all or part of an eligible flight booked with American Express Travel and get 25% of those points back, up to 250,000 points back per calendar year.<sup>‡</sup>*`,
      },
      {
        kind: 'p',
        content: `*Eligible flights include First and Business Class tickets as well as any fare class with your selected qualifying airline booked through American Express Travel.`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        content: `The Hotel Collection<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Delight your senses when you book a two-night minimum The Hotel Collection stay through American Express Travel. Get a $100 experience credit to use during your stay.*`,
      },
      {
        kind: 'p',
        content: `*Experience credit varies by property.`,
        extraClasses: 'legal-1',
      },
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
        content: `No Preset Spending Limit<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `No Preset Spending Limit means your spending limit is flexible. Unlike a traditional card with a set limit, the
        amount you can spend adapts based on factors such as your purchase, payment, and credit history. <sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `No Foreign Transaction Fees<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Do business globally and pay no foreign transaction fees on your purchases.*`,
      },
      {
        kind: 'p',
        content: `*American Express will not charge any foreign transaction fee on the purchases you make outside of the United States with your Card. However, there may be circumstances where ATMs or merchants charge a fee on foreign transactions.`,
      },
    ],
  };
};
