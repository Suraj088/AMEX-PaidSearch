// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  const statusBoostBenefitIdAttr =
    'delta-sky-miles-reserve-business-card-more-benefits-status-boost';

  return {
    id: 'delta-sky-miles-reserve-business-card',
    name: 'Delta SkyMiles<sup>®</sup> Reserve Business Card',
    url: `https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/30214/`,
    pdpUrl: 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-reserve/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-DeltaReserve',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/delta-skymiles-reserve/30214-9-0?intlink=US-Acq-NonBrandSearch-DeltaReserveCard-Apply-DeltaSkyMilesReserve`,
    image: `assets/delta-sky-miles-reserve-business-card-updated.png`,
    annualFee: 550,
    aprText:' ',
    Airline:true,
    Retail:true,
    Travel:true,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-reserve/30214-9-0?key=tncBody&rwdFlag=rwd`,
    quickCompareImage: 'assets/lifestyle-delta-sky-miles-platinum-business-card-1635749061.png',
    quickCompareColor: '#E7EDF2',
    vacPopOut: [
      {
        kind: 'heading-5',
        content: 'Fly in style and let your business&nbsp;soar',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          `Earn <span class="heading-4 font-weight-bold">70,000</span> Bonus Miles after you spend $5,000 in purchases on your new Card in your first 3 months of Card Membership.<sup>†</sup>`,
      },
      // {
      //   kind: 'p',
      //   content:
      //     'after you spend $4,000 in purchases on your new Card in your first 3 months.<sup>†</sup>',
      // },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Now take 15% off Award Travel on Delta flights. Anytime.<sup>[1]‡</sup><br><p class="legal-1">[1] Not applicable to partner-operated flights or to taxes and fees.</p>',
          '<strong>3X Miles</strong> on Delta Purchases<sup>‡</sup>',
          '<strong>1.5X Miles</strong> on eligible purchases for the remainder of the calendar year after you spend $150,000 on your Card during that calendar year. If your purchase qualifies for a category that has a higher accelerator, only the higher accelerator will apply.<sup>‡</sup>',
          '<strong>1X Miles</strong> on every eligible dollar spent on other purchases<sup>‡</sup>',
          '<strong>Status Boost<sup>®</sup>: Get Closer to Medallion<sup>®</sup> Status<sup>‡</sup></strong> With Status Boost<sup>®</sup>, earn 15,000 Medallion<sup>®</sup> Qualification Miles (MQMs) after you spend $30,000 in purchases on your Card in a calendar year, up to 4 times per year getting you closer to Medallion Status. MQMs are used to determine Medallion Status and are different from the miles you earn towards flights.<sup>‡</sup>',
        ],
      },
    ],
    quickCompare: [
      {
        kind: 'heading-5',
        content: 'Fly in style and let your business&nbsp;soar',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'p',
        content:
          `Earn <span class="heading-4 font-weight-bold">70,000</span> Bonus Miles after you spend $5,000 in purchases on your new Card in your first 3 months of Card Membership.<sup>†</sup>`,
      },
      // {
      //   kind: 'p',
      //   content:
      //     'after you spend $4,000 in purchases on your new Card in your first 3 months.<sup>†</sup>',
      // },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Now take 15% off Award Travel on Delta flights. Anytime.<sup>[1]‡</sup><br><p class="legal-1">[1] Not applicable to partner-operated flights or to taxes and fees.</p>',
          '<strong>3X Miles</strong> on Delta Purchases<sup>‡</sup>',
          '<strong>1.5X Miles</strong> after you spend $150,000 on your Card in a calendar year<sup>‡</sup>',
          '<strong>1X Miles</strong> on every eligible dollar spent on other purchases<sup>‡</sup>',
          '<strong>Status Boost<sup>®</sup>: Get Closer to Medallion<sup>®</sup> Status<sup>‡</sup></strong> With Status Boost<sup>®</sup>, earn 15,000 Medallion<sup>®</sup> Qualification Miles (MQMs) after you spend $30,000 in purchases on your Card in a calendar year, up to 4 times per year getting you closer to Medallion Status. MQMs are used to determine Medallion Status and are different from the miles you earn toward flights.<sup>‡</sup>',
        ],
      },
    ],
    greatForTitle: 'Elevating business travel with Delta:',
    greatFor: [
      {
        iconKey: 'hotel',
        label: `<strong>3X</strong> Miles on Delta Purchases<sup>‡</sup>`,
      },
      {
        iconKey: 'receipt',
        label: `<strong>1.5X</strong> miles after you spend $150,000 on your Card in a calendar year<sup>‡</sup>`,
      },
      {
        iconKey: 'card-swipe',
        label: `Get closer to Medallion<sup>®</sup> Status with Status Boost<sup>®</sup>.<sup>‡</sup> <a href="#${statusBoostBenefitIdAttr}" rel="noopener noreferrer">Here&apos;s how</a>.`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">70,000</span> Bonus Miles`,
      },
      {
        kind: 'p',
        content: `after you spend $5,000 in purchases on your new Card in your first 3 months of Card Membership.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/reserve-earning-rewards.png`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Delta Miles`,
      },
      {
        kind: 'p',
        content: `<strong>3X Miles</strong> on every dollar spent on eligible purchases made directly with Delta.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1.5X Miles</strong> after you spend $150,000 on your Card in a calendar year, you earn 1.5 miles per dollar (that's an extra half mile per dollar) on eligible purchases the rest of the year. If your purchase qualifies for a category that has a higher mileage accelerator, only the higher accelerator will apply (ex. you would earn 3X miles on purchases made directly with Delta instead of 1.5X).<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1X Mile</strong> on every eligible dollar spent on other purchases.<sup>‡</sup>`,
      },
    ],
    moreBenefits: [
      {
        kind: 'heading-3',
        content: `New Benefit: Take Off with 15% Off Award Travel. Anytime<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Take 15% off when booking Award Travel with miles.<sup>[1]</sup> Here's how:<br>
        1. Visit delta.com or the Fly Delta app and log in to your Delta SkyMiles account<br>
        2. Choose “Shop with Miles” when searching for Delta flights for your itinerary<br>
        3. The 15% miles discount will automatically be reflected.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `[1] Discount not applicable to partner-operated flights or to taxes and fees.`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        id: statusBoostBenefitIdAttr,
        content:
          'Delta Sky Club<sup>®</sup> Access<sup>‡</sup> + 2 One-Time Guest Passes<sup>‡</sup>',
      },
      {
        kind: 'p',
        content: `With complimentary access into Delta Sky Club<sup>®</sup>, you can relax before your Delta flight, or find downtime between connections.<sup>‡</sup> You'll also receive two Delta Sky Club One-Time Guest Passes each year so you can share the experience with others when you're traveling together.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Status Boost<sup>®</sup>: Get Closer to Medallion<sup>®</sup> Status<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `With Status Boost<sup>®</sup>, earn 15,000 Medallion<sup>®</sup> Qualification Miles (MQMs) after you spend $30,000 in purchases on your Card in a calendar year, up to 4 times per year getting you closer to Medallion Status. MQMs are used to determine Medallion Status and are different from the miles you earn toward flights.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Companion Certificate<sup>**‡</sup> Upon Renewal`,
      },
      {
        kind: 'p',
        content: `Enjoy a domestic First Class, Delta Comfort+<sup>®</sup> or domestic Main Cabin roundtrip companion certificate each year upon renewal of your Reserve Card.<sup>**‡</sup>`,
      },
      {
        kind: 'p',
        extraClasses: 'legal-1',
        content: `<sup>**</sup>Payment of the government imposed taxes and fees of no more than $80 for roundtrip domestic flights (for itineraries with up to four flight segments) is required. Baggage charges and other restrictions apply. See terms and conditions for details.`,
      },
      {
        kind: 'heading-3',
        content: `First Checked Bag Free<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `As a benefit of Card Membership, you can check your first bag free on Delta flights. You can save up to $60 on a round-trip Delta flight per person. For a family of four that's a potential savings of up to $240 per round-trip flight.`,
      },
      {
        kind: 'heading-3',
        content: `Main Cabin 1 Priority Boarding<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `Enjoy early boarding on Delta flights as a benefit of Card Membership. You can board your flight when Main Cabin 1 priority boarding is called, so that you find room for your carry-on bag and settle into your seat sooner.`,
      },
      {
        kind: 'heading-3',
        content: `Fee Credit for Global Entry or TSA PreCheck<sup>®‡</sup>`,
      },
      {
        kind: 'p',
        content: `Stay focused on going where you need to go. Receive either a statement credit available every 4 years after you apply for Global Entry ($100) or a statement credit available every 4.5 years after you apply for a five-year membership through any Authorized Enrollment Provider for TSA PreCheck<sup>®</sup> (up to $85) when the application fee is charged to an eligible Card. If approved for Global Entry, at no additional charge, you will receive access to TSA PreCheck<sup>®</sup>. Only one credit will be given in a 4 year period for Global Entry or in a 4.5 year period for TSA PreCheck<sup>®</sup> for whichever application fee is charged to your Card first. [1]`,
      },
      {
        kind: 'p',
        extraClasses: 'legal-1',
        content: `[1] To read the full terms and conditions, visit <a href="https://www.americanexpress.com/expeditedtravel">www.americanexpress.com/expeditedtravel</a>`,
      },
    ],
  };
};
