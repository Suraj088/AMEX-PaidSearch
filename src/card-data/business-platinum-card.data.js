// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
 module.exports = () => {
  const modeBenefitsIdAttr = 'business-platinum-card-more-benefits-status-boost';
  const ratesAndFeesUrl = `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd`;

  return {
    id: 'business-platinum-card',
    name: 'Business Platinum&nbsp;Card<sup>®</sup>',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/30214/`,
    pdpUrl:
      'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-platinum-credit-card-amex/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardArt-Platinum',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/business-platinum-charge-card/30214-9-0?intlink=US-Acq-NonBrandSearch-PlatinumCard-Apply-Platinum`,
    image: `assets/card-art-business-platinum-1624478767.png`,
    annualFee: 695,
    aprText:' ',
    membershipRewards:true,
    Dining:true,
    Retail:true,
    Technology:true,
    Best:true,
    Travel:true,
    Supplies:true,
    annualFeeSymbols: '¤',
    annualFeeSubtext: '',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl,
    quickCompareImage: 'assets/BPlat_Hero.png',
    quickCompareColor: '#F0F5F6',
    vacPopOut: [
      {
        kind: 'heading-5',
        content: 'The Card built for going places can take your business further',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Earn <span class="heading-4 font-weight-bold">120,000</span> Membership Rewards<sup>®</sup> points after you spend $15,000 on eligible purchases with the Business Platinum Card within the first 3 months of Card&nbsp;Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Earn <strong>1.5X points</strong> points on eligible purchases at US electronic goods retailers, software and cloud systems providers, and electronic goods and software providers. Terms and points cap applies.<sup>‡</sup>',
          'Complimentary access to 1,400+ American Express Global Lounge Collection<sup>®</sup> airport lounges worldwide.<sup>‡</sup>',
          `<strong>Unlock over $1,400</strong> per year in value with the Business Platinum Card<sup>®</sup> for statement credits on select purchases, including tech, recruiting, travel and more. Enrollment required. <a href="#${modeBenefitsIdAttr}" rel="noopener noreferrer">Learn more</a>.<sup>‡</sup> Benefits include:
          <ul>
          <li>Business Platinum Dell Technologies Benefit</li>
          <li>Business Platinum Indeed Benefit</li>
          <li>$200 Airline Fee Credit</li>
          <li>$179 CLEAR Credit</li>
          <li>Business Platinum Adobe Benefit</li>
          <li>Wireless Credit</li>
          </ul>`,
        ],
      },
      {
        kind: 'p',
        content: `<a href="#${modeBenefitsIdAttr}" rel="noopener noreferrer">View details</a>`,
      },
    ],
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'The Card built for going places can take your business further',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Earn <span class="heading-4 font-weight-bold">120,000</span> Membership Rewards<sup>®</sup> points after you spend $15,000 on eligible purchases with the Business Platinum Card within the first 3 months of Card&nbsp;Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>1.5X points</strong> on eligible purchases in key business categories + purchases of $5,000 or more everywhere&nbsp;else. Cap&nbsp;applies.<sup>‡</sup>',
          'Access to <strong>1,400+</strong> airport lounges worldwide<sup>‡</sup>',
          `<strong>Unlock over $1,400</strong> per year in value with your Business Platinum Card for statement credits on select purchases, including tech, recruiting, travel and more. Enrollment required. <a href="#${modeBenefitsIdAttr}" rel="noopener noreferrer">Learn more</a>.<sup>‡</sup><br />`,
        ],
      },
      {
        kind: 'p',
        content: `<a href="#${modeBenefitsIdAttr}" rel="noopener noreferrer">View details</a>`,
      },
    ],
    greatForTitle: 'Premium travel with built-in business value:',
    greatFor: [
      {
        iconKey: 'airplane',
        label: `<strong>1.5X points</strong> on eligible purchases in key business categories + purchases of $5,000 or more everywhere else. Cap applies.<sup>‡</sup>`,
      },
      {
        iconKey: 'travel-bag',
        label: `Access to <strong>1,400+</strong> airport lounges worldwide.<sup>‡</sup>`,
      },
      {
        iconKey: 'travel-bag',
        label: `<strong>Unlock over $1,400</strong> per year in value with your Business Platinum Card for statement credits on select purchases, including tech, recruiting, travel and more. Enrollment required. <a href="#${modeBenefitsIdAttr}" rel="noopener noreferrer">Learn more</a>.<sup>‡</sup><br /><br /><a href="#${modeBenefitsIdAttr}" rel="noopener noreferrer">View details</a>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">120,000</span>`,
      },
      {
        kind: 'p',
        content: `Membership Rewards<sup>®</sup> points after you spend $15,000 on eligible purchases with the Business Platinum Card within the first 3 months of Card Membership.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-business-platinum-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Membership Rewards<sup>®</sup>&nbsp;Points`,
      },
      {
        kind: 'p',
        content: `<strong>5X</strong> points on flights and prepaid hotels on <a href="http://amextravel.com" target="_blank" rel="noopener noreferrer">amextravel.com</a>.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1.5X</strong> points (that's an extra half point per dollar) on purchases at US construction material & hardware suppliers, electronic goods retailers and software & cloud system providers, and shipping providers, as well as on purchases of $5,000 or more everywhere else, up to $2 million of these purchases per calendar year.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1X</strong> points on other purchases. Terms and limitations apply.<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Business Platinum Dell Technologies Benefit`,
        id: modeBenefitsIdAttr,
      },
      {
        kind: 'p',
        content: `Get up to $200 in statement credits semi-annually toward U.S. purchases with Dell Technologies on the Business Platinum Card. That's up to $400 back per year. Enrollment required.`,
      },
      {
        kind: 'heading-3',
        content: `Business Platinum Adobe Benefit`,
      },
      {
        kind: 'p',
        content: `Get up to $150 in statement credits per year for eligible annual prepaid business plan purchases with Adobe on Creative Cloud for teams or Acrobat Pro DC with e-sign for teams on the Business Platinum Card. Enrollment required.<sup>[1]</sup>`,
      },
      {
        kind: 'p',
        content: `[1] Annual prepaid business plans automatically renew each year on your annual subscription date until cancelled.<sup>‡</sup>`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        content: `Business Platinum Indeed Benefit`,
      },
      {
        kind: 'p',
        content: `Get up to $90 in statement credits quarterly for purchases with Indeed on the Business Platinum Card. That's up to $360 back per year. Enrollment required.`,
      },
      {
        kind: 'heading-3',
        content: `Wireless Credit`,
      },
      {
        kind: 'p',
        content: `Enroll and get up to $120 in statement credits per year (up to $10 back per month) for wireless telephone service purchases made directly with a wireless provider in the U.S. on the Business Platinum Card.`,
      },
      {
        kind: 'heading-3',
        content: `$200 Airline Fee Credit<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Select one qualifying airline and then receive up to $200 in statement credits per calendar year when incidental fees, such as checked bags and in flight refreshments, are charged by the airline to your Business Platinum Card account.<sup>[1]</sup>`,
      },
      {
        kind: 'p',
        content: `[1] American Express relies on accurate airline transaction data to identify incidental fee purchases. If you do not see a credit for a qualifying incidental purchase on your eligible Card after 4 weeks, simply call the number on the back of your Card. See terms & conditions for more details.`,
        extraClasses: 'legal-1',
      },
      // {
      //   kind: 'p',
      //   content: `<a href="${ratesAndFeesUrl}" target="_blank" rel="noreferrer noopener"><sup>¤</sup>Rates &amp; Fees</a>`,
      //   extraClasses: 'legal-1 margin-1-t',
      // },
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
        content: `$189 CLEAR<sup>®</sup> Credit`,
      },
      {
        kind: 'p',
        content: `CLEAR<sup>®</sup> uses unique attributes, such as eyes or fingerprints, to digitally verify identity to help its members move faster through security at select airports, stadiums, and entertainment venues nationwide. You can cover the cost of a CLEAR membership with up to $189 in statement credits per year after you pay for CLEAR with your Business Platinum Card.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `35% Airline Bonus`,
      },
      {
        kind: 'p',
        content: `Use Membership Rewards® Pay with Points for all or part of an eligible fare and get 35% of those points back, up to 1,000,000 points back per calendar year.<sup>‡</sup>*`,
      },
      {
        kind: 'p',
        content: `*Eligible fares include First and Business Class tickets with all airlines available through American Express Travel, as well as any fare class with your selected qualifying airline.`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        content: `American Express Global Lounge Collection<sup>®</sup>`,
      },
      {
        kind: 'p',
        content: `Get complimentary access to the American Express Global Lounge Collection®  with your Card. With more than 1,400 airport lounges across 650 cities and counting, you have more lounge location options than any other credit card on the market<sup>[1]</sup>.<sup>‡</sup> Visit <a href="http://www.americanexpress.com/findalounge#/loungefinder">http://www.americanexpress.com/findalounge#/loungefinder</a> for more information`,
      },
      {
        kind: 'p',
        content: `[1] As of 9/2021`,
        extraClasses: 'legal-1 margin-1-t',
      },
    ],
    highlights:{
      payOverTime:true,
      noPresetSpendingLimit:false,
      employeeCards:true,
      connectToQuickBook:false,  
      vendorPayByBillcom:false, 
      payWithPoints:true,   
      noForeignTransactionFees:false,
      theHotelCollection:false,
      purchaseProtection:true,
      carRentalLossAndDamageInsurance:true,
      globalAssistHotline:false,
      wirelessCredit:true,
      airlineBonus:true,
      globalLoungeCollection:true,
      feeCreditForGlobalEntryorTSAPreCheck:false,
      priorityBoarding:false,
      },
    
  };
};
