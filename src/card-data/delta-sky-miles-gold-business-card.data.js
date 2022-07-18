// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  return {
    id: 'delta-sky-miles-gold-business-card',
    name: 'Delta SkyMiles<sup>®</sup> Gold Business Card',
    url: `https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-gold/30214/`,
    pdpUrl: 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-gold/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-DeltaGold',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/delta-skymiles-gold/30214-9-0?intlink=US-Acq-NonBrandSearch-GoldDeltaSkymilesCard-Apply-GoldDeltaSkymiles`,
    image: `assets/delta-sky-miles-gold-business-card.png`,
    annualFee: 0,
    Airline:true,
    Dining:true,
    Travel:true,
    Advertising:true,
    Shipping:true,
    annualFeeSymbols: '¤',
    annualFeeSubtext: '$0 intro annual fee for the first year, then $99<sup>¤</sup>',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-gold/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-gold/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-delta-sky-miles-platinum-business-card-1635749061.png',
    quickCompareColor: '#E7EDF2',
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Fly in style and let your business&nbsp;soar',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          'Earn <span class="heading-4 font-weight-bold">75,000</span> bonus miles after spending $3,000 in purchases on your new Card in your first 3 months of Card Membership. Offer expires 8/3/22.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          '<strong>2X Miles</strong> on eligible U.S. purchases for shipping and adverNsing in select media<sup>‡</sup>',
          '<strong>2X Miles</strong> at Restaurants<sup>‡</sup>',
          'After you spend $10,000 in eligible purchases on the Card in a calendar year, you will receive a $100 Delta Flight Credit to inspire your next travel<sup>‡</sup>',
        ],
      },
    ],
    greatForTitle: 'Elevating business travel with Delta:',
    greatFor: [
      {
        iconKey: 'hotel',
        label: `<strong>2X</strong> Miles on eligible U.S. purchases for shipping and advertising in select media<sup>‡</sup>`,
      },
      {
        iconKey: 'receipt',
        label: `<strong>2X</strong> Miles at Restaurants<sup>‡</sup>`,
      },
      {
        iconKey: 'card-swipe',
        label: `<strong>$100</strong> Delta Flight Credit to use toward future travel after spending $10,000 in purchases<sup>‡</sup>`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">75,000</span> bonus miles`,
      },
      {
        kind: 'p',
        content: `after spending $3,000 in purchases on your new Card in your first 3 months of Card Membership. Offer expires 8/3/22.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/great-for-delta-sky-miles-platinum-business-card-1635749061.jpg`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Delta SkyMiles`,
      },
      {
        kind: 'p',
        content: `<strong>2X Miles</strong> on Delta Purchases<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>2X Miles</strong>`,
      },
      {
        kind: 'ul',
        content: [
          'at restaurants',
          'for every dollar spent on eligible U.S. purchases for Shipping and AdverNsing in select media‡<sup>‡</sup>',
        ],
      },
      {
        kind: 'p',
        content: `<strong>$100</strong> Delta Flight Credit to use toward future travel after spending $10,000 in purchases<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `First Checked Bag Free<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `As a benefit of Card Membership, you can check your first bag free on Delta flights. You can save up to $60 on a roundtrip Delta flight per person. For a family of four that's potential savings of up to $240 per round-trip flight.`,
      },
      {
        kind: 'heading-3',
        content: `Priority Boarding`,
      },
      {
        kind: 'p',
        content: `Receive Main Cabin 1 Priority Boarding on Delta flights; board early, stow your carry-on bag and settle in sooner.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `$100 Delta Flight Credit<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Get a head-start on your next adventure, compliments of your Card. After you spend $10,000 in eligible purchases on the Card in a calendar year, you will receive a $100 Delta Flight Credit to inspire your next travel.`,
      },
      {
        kind: 'heading-3',
        content: `Pay with Miles<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Want even more flexibility? Take up to $50 off the cost of your flight for every 5,000 miles you redeem with Pay with Miles when you book on delta.com.<sup>‡</sup>`,
      },
    ],
  };
};
