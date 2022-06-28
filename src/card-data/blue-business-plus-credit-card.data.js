// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'blue-business-plus-credit-card',
    name: 'Blue Business<sup>®</sup> Plus&nbsp;Card',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/30214/`,
    pdpUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-blue-business-plus-credit-card-amex/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardArt-BlueForBusinessPlus',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/bluebusinessplus-credit-card/30214-9-0?intlink=US-Acq-NonBrandSearch-BlueBusinessPlusCard-Apply-BlueForBusinessPlus`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/blue-business-plus.png`,
    annualFee: 0,
    NoAnnualFee:true,
    membershipRewards:true,
    dining:true,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/bluebusinessplus-credit-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/bluebusinessplus-credit-card/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-blue-business-plus-credit-card-1635749061.png',
    quickCompareColor: '#F7F3F0',
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'A simple solution that’s anything but&nbsp;basic',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Earn <span class="heading-4 font-weight-bold">15,000</span> Membership Rewards<sup>®</sup> points after you spend $3,000 in eligible purchases on the Card within the first 3 months of Card&nbsp;Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>2X points</strong> on the first $50,000 spent on purchases per&nbsp;year<sup>‡</sup>',
          '<strong>1X points</strong> on purchases&nbsp;thereafter<sup>‡</sup>',
          'No annual fee<sup>¤</sup>',
        ],
      },
    ],
    greatForTitle: 'A simple option with no annual fee:<sup>¤</sup>',
   
    greatFor: [
      {
        iconKey: 'point-2x',
        label: `<strong>2X points</strong> on the first $50,000 spent on purchases per year<sup>‡</sup>`,
      },
      {
        iconKey: 'recent-points',
        label: `<strong>1X points</strong> on purchases thereafter<sup>‡</sup>`,
      },
      {
        iconKey: 'no-fee',
        label: `No Annual Fee<sup>¤</sup>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">15,000</span>`,
      },
      {
        kind: 'p',
        content: `Membership Rewards<sup>®</sup> points after you spend $3,000 in eligible purchases on your Card in the first 3&nbsp;months.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-blue-business-plus-credit-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Membership Rewards<sup>®</sup>&nbsp;Points`,
      },
      {
        kind: 'p',
        content: `<strong>2X</strong> all eligible purchases up to $50,000 per calendar year`,
      },
      {
        kind: 'p',
        content: `<strong>1X</strong> all eligible purchases after`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Expanded Buying Power`,
      },
      {
        kind: 'p',
        content: `Expanded Buying Power gives you the freedom to spend beyond your credit limit and help get business done. While the amount you can spend above your credit limit isn't unlimited, it adjusts with your use of the Card, your payment history, credit record, financial resources known to us and other factors.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Vendor Pay by Bill.com`,
      },
      {
        kind: 'p',
        content: `Take advantage of Vendor Pay by Bill.com by enrolling your Card. With the Basic plan, there is no monthly fee for the first user. Additional fees may apply based on plan type and number of users.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Global Assist® Hotline<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Whenever you travel more than 100 miles from home, Global Assist® Hotline<sup>‡</sup> is available for 24/7 emergency assistance and coordination services, including medical and legal referrals, emergency cash wires, and missing luggage assistance. Card Members are responsible for the costs charged by third-party service providers.  Other terms and conditions apply.`,
      },
    ],
  };
};
