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
    membershipRewards:true,
    Dining:true,
    Retail:true,
    Technology:true,
    Travel:true,
    Supplies:true,
    annualFeeSymbols: '¤',
    annualFeeSubtext: '',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-platinum-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl,
    quickCompareImage: 'assets/lifestyle-business-platinum-card-1635749061.png',
    quickCompareColor: '#F0F5F6',
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
        kind: 'p',
        content:
          'Plus, 0% Intro APR for 12 months from the date of the account opening on purchases eligible for Pay Over Time. After that, your APR will be 15.74% to 23.74% based on your credit worthiness and other factors as determined at the time of account opening.',
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
      {
        kind: 'p',
        content: `Plus, 0% Intro APR for 12 months from the date of the account opening on purchases eligible for Pay Over Time. After that, your APR will be 15.74% to 23.74% based on your credit worthiness and other factors as determined at the time of account opening.`,
      },
      {
        kind: 'p',
        content: `<a href="${ratesAndFeesUrl}" target="_blank" rel="noreferrer noopener"><sup>¤</sup>Rates &amp; Fees</a>`,
        extraClasses: 'legal-1 margin-1-t',
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
        content: `<strong>1.5X</strong> points for every dollar spent (an extra half point per dollar) on eligible purchases at US construction material and hardware suppliers, electronic goods retailers and software & cloud system providers, Shipping providers. Each eligible purchase of $5,000 or more everywhere else. Cap applies.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1X</strong> points on other purchases. Terms and limitations apply.<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `Business  Platinum  Dell  Technologies Benefit`,
        id: modeBenefitsIdAttr,
      },
      {
        kind: 'p',
        content: `Enroll  and get  up to  $400 in  statement credits  per  year toward  U.S. purchases with Dell  Technologies  on  the Business  Platinum Card. That’s up to $200 back semi-annually.`,
      },
      {
        kind: 'heading-3',
        content: `Business  Platinum  Adobe  Benefit`,
      },
      {
        kind: 'p',
        content: `Get  up  to $150 in  statement  credits  per  year for  purchases  with  Adobe  on  annual prepaid  plans  for  eligible  Creative  Cloud  for  teams and  Acrobat  Pro  DC  with  e-sign  for teams on  the  Business  Platinum  Card. Enrollment  required.<sup>[1]</sup>`,
      },
      {
        kind: 'p',
        content: `[1] Annual  prepaid  plans  automatically  renew  each  year on your  annual  subscription date  until  cancelled.`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        content: `Business  Platinum  Indeed  Benefit`,
      },
      {
        kind: 'p',
        content: `Enroll  and get  up to  $360 in  statement credits  per  year for  purchases  with  Indeed on the Business Platinum Card. That’s up to $90 back per quarter.`,
      },
      {
        kind: 'heading-3',
        content: `Wireless Credit`,
      },
      {
        kind: 'p',
        content: `Get up to $120 in statement credits per year for wireless telephone service purchases made directly with a wireless provider in the U.S. on the Business Platinum Card. That’s up to $10 back per month. Enrollment required.`,
      },
      {
        kind: 'heading-3',
        content: `$200 Airline Fee Credit<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Select one qualifying airline and then receive up to $200 in statement credits per calendar year when incidental fees are charged by the airline to your Card or any of the Additional Cards on your Platinum Card account.<sup>[1]</sup>`,
      },
      {
        kind: 'p',
        content: `[1] American Express relies on accurate airline transaction data to identify incidental fee purchases. If you do not see a credit for a qualifying incidental purchase on your eligible Card after 4 weeks, simply call the number on the back of your Card. See terms & conditions for more details.`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        content: `Annual Percentage Rate (APR) for Pay Over Time Feature`,
      },
      {
        kind: 'p',
        content: `Plus, 0% Intro APR for 12 months from the date of the account opening on purchases eligible for Pay Over Time. After that, your APR will be 15.74% to 23.74% based on your credit worthiness and other factors as determined at the time of account opening.`,
      },
      {
        kind: 'p',
        content: `<a href="${ratesAndFeesUrl}" target="_blank" rel="noreferrer noopener"><sup>¤</sup>Rates &amp; Fees</a>`,
        extraClasses: 'legal-1 margin-1-t',
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
        content: `$189 CLEAR<sup>®</sup> Credit`,
      },
      {
        kind: 'p',
        content: `CLEAR<sup>®</sup> uses biometrics to assign you a touchless ID, allowing you to move faster through security at selected airports and stadiums across the U.S. You can cover the cost of a CLEAR membership with up to $189 in statement credits per year after you pay for CLEAR with your Business Platinum Card.<sup>‡</sup>`,
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
        content: `The Global Lounge Collection`,
      },
      {
        kind: 'p',
        content: `The American Express Global Lounge Collection<sup>®</sup> can provide an escape at the airport. With more than 1,400 airport lounges across 650 cities and counting, you have more lounge location options than any other credit card on the market<sup>[1]</sup>.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `[1] As of 9/2021`,
        extraClasses: 'legal-1 margin-1-t',
      },
    ],
    
  };
};
