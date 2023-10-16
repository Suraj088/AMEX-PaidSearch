// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'business-green-rewards-card',
    name: 'Business Green Rewards Card',
    url: `https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/30214/`,
    pdpUrl: 'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/american-express-business-green-card-amex/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-Green',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/business-green-rewards-charge-card/30214-9-0?intlink=US-Acq-NonBrandSearch-GreenCard-Apply-Green`,
    image: `assets/business-green-card-updated.png`,
    annualFee: '95',
    aprText: ' ',
    membershipRewards: true,
    BusinessServices: true,
    Travel: true,
    annualFeeSymbols: '¤',
    // annualFeeSubtext: 'for the first year, then&nbsp;$95<sup>†¤</sup>',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-green-rewards-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/business-green-rewards-charge-card/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-business-green-rewards-card-1635749061.png',
    quickCompareColor: '#F2F5F7',
    vacPopOut: [
      {
        kind: 'heading-5',
        content: 'Rewards and Purchasing Power in One Card',
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
          '<strong>2X points</strong> for each dollar you spend on eligible purchases at <a href="http://AmexTravel.com" target="_blank" rel="noopener noreferrer">AmexTravel.com</a><sup>‡</sup>',
          '<strong>1X points</strong> for each dollar you spend on eligible purchases<sup>‡</sup>',
          'Pay over time with interest, or pay your full balance each month, whichever is best for your business. See details below.<sup>‡¤</sup>',
        ],
      },
    ],
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Rewards and Purchasing Power in One Card',
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
          '<strong>2X points</strong> for each dollar you spend on eligible purchases at <a href="http://AmexTravel.com" target="_blank" rel="noopener noreferrer">AmexTravel.com</a><sup>‡</sup>',
          '<strong>1X points</strong> for each dollar you spend on eligible purchases<sup>‡</sup>',
          'Pay over time with interest, or pay your full balance each month, whichever is best for your business. See details below.<sup>‡¤</sup>',
        ],
      },
    ],
    greatForTitle: 'Earning points and managing business expenses:',
    greatFor: [
      {
        iconKey: 'point-2x',
        label: `<strong>2X points</strong> for each dollar you spend on eligible purchases at <a href="http://AmexTravel.com" target="_blank" rel="noopener noreferrer">AmexTravel.com</a><sup>‡</sup>`,
      },
      {
        iconKey: 'recent-points',
        label: `<strong>1X points</strong> for each dollar you spend on eligible purchases<sup>‡</sup>`,
      },
      {
        iconKey: 'pay-over-time',
        label: `Pay over time with interest, or pay your full balance each month, whichever is best for your business.<sup>‡¤</sup>`,
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
        content: `<strong>2X</strong> on each dollar you spend on eligible purchases at <a href="http://AmexTravel.com" target="_blank" rel="noopener noreferrer">AmexTravel.com</a><sup>‡</sup>`,
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
        content: `The Pay Over Time option lets you carry a balance with interest on eligible purchases.*<sup>¤</sup>`,
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
        content: `Unlike a traditional credit card, Business Green Rewards Card has no preset spending limit, a unique feature that gives you the ability to unlock more purchase power as you use your Card. The amount you can spend adapts based on factors such as your purchase, payment and credit history. You can use the Check Spending Power tool in your online account or mobile app to check if a large purchase will be approved.<sup>‡[1]</sup>`,
      },
      {
        kind: 'p',
        content: `[1]This means your spending limit is flexible. Unlike a traditional credit card with a set limit, the amount you can spend adapts based on factors such as your purchase, payment, and credit history.`,
        extraClasses: 'legal-1',
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
    highlights:{
      payOverTime:true,
      noPresetSpendingLimit:true,
      employeeCards:true,
      connectToQuickBook:false,
      vendorPayByBillcom:true,
      payWithPoints:false,
      noForeignTransactionFees:false,
      theHotelCollection:false,
      purchaseProtection:true,
      carRentalLossAndDamageInsurance:true,
      globalAssistHotline:false,
      wirelessCredit:false,
      airlineBonus:true,
      globalLoungeCollection:false,
      feeCreditForGlobalEntryorTSAPreCheck:false,
      priorityBoarding:false,
      },
  };
};
