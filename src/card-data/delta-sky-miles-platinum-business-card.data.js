// @ts-check

/**
 * @returns {import('../scripts/card-compare/use-data-container-items').CardDynamicData}
 */
module.exports = () => {
  const statusBoostBenefitIdAttr =
    'delta-sky-miles-platinum-business-card-more-benefits-status-boost';

  return {
    id: 'delta-sky-miles-platinum-business-card',
    name:
      'Delta&nbsp;SkyMiles<sup>®</sup>&nbsp;Platinum Business Card​',
    url: `https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-platinum/30214/`,
    pdpUrl: 'https://www.americanexpress.com/en-us/business/credit-cards/delta-skymiles-platinum/30214/?linknav=US-Acq-GCP-BusinessCards-ViewAllCards-CardTitle-DeltaPlatinum',
    applyUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/delta-skymiles-platinum/30214-9-0?intlink=US-Acq-NonBrandSearch-DeltaPlatinumCard-Apply-DeltaPlatinum`,
    image: `https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/platinum-delta-skymiles-business.png`,
    annualFee: 250,
    aprText:' ',
    Airline:true,
    BusinessServices:true,
    Retail:true,
    Travel:true,
    annualFeeSymbols: '¤',
    offerAndBenefitTermsUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-platinum/30214-9-0?key=tncBody&rwdFlag=rwd#offer-terms`,
    ratesAndFeesUrl: `https://www.americanexpress.com/us/credit-cards/card-application/apply/prospect/terms/delta-skymiles-platinum/30214-9-0?key=tncBody&rwdFlag=rwd`,
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
          'Earn <span class="heading-4 font-weight-bold">60,000</span> Bonus Miles after you spend $3,000 in purchases on your new Card in your first 3 months of Card Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Now take 15% off Award Travel on Delta flights. Anytime.<sup>[1]‡</sup><br><p class="legal-1">[1] Not applicable to partner-operated flights or to taxes and fees.</p>',
          '<strong>3X Miles</strong> on purchases made directly with hotels<sup>‡</sup> & eligible Delta purchases<sup>‡</sup>',
          '<strong>1.5X Miles</strong> per dollar on single eligible purchases of $5,000 or more (that’s an extra half mile per dollar), up to 50,000 additional miles per calendar year. If your purchase qualifies for a category that has a higher mileage accelerator, only the higher accelerator will apply<sup>‡</sup>',
          `Get closer to Medallion<sup>®</sup> Status with Status Boost<sup>®</sup>.<sup>‡</sup> <a href="https://www.americanexpress.com/en-us/business/credit-cards/campaign/travel/#delta-sky-miles-platinum-business-card-more-benefits-status-boost" rel="noopener noreferrer">Here&apos;s how</a>.`,
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
          'Earn <span class="heading-4 font-weight-bold">60,000</span> Bonus Miles after you spend $3,000 in purchases on your new Card in your first 3 months of Card Membership.<sup>†</sup>',
      },
      {
        kind: 'heading-4',
        content: 'Great For:',
        extraClasses: 'font-weight-bold',
      },
      {
        kind: 'ul',
        content: [
          'Now take 15% off Award Travel on Delta flights. Anytime.<sup>[1]‡</sup><br><p class="legal-1">[1] Not applicable to partner-operated flights or to taxes and fees.</p>',
          '<strong>3X Miles</strong> on purchases made directly with hotels<sup>‡</sup> & eligible Delta purchases<sup>‡</sup>',
          '<strong>1.5X Miles</strong> per dollar on single eligible purchases of $5,000 or more (that’s an extra half mile per dollar), up to 50,000 additional miles per calendar year. If your purchase qualifies for a category that has a higher mileage accelerator, only the higher accelerator will apply<sup>‡</sup>',
          `Get closer to Medallion<sup>®</sup> Status with Status Boost<sup>®</sup>.<sup>‡</sup> <a href="#${statusBoostBenefitIdAttr}" rel="noopener noreferrer">Here&apos;s how</a>.`,
        ],
      },
    ],
    greatForTitle: 'Elevating business travel with Delta:',
    greatFor: [
      {
        iconKey: 'hotel',
        label: `<strong>3X</strong> Miles on purchases made directly with hotels<sup>‡</sup> & eligible Delta purchases<sup>‡</sup>`,
      },
      {
        iconKey: 'receipt',
        label: `<strong>1.5X</strong> Miles per dollar on single eligible purchases of $5,000 or more, up to 50,000 additional Miles per calendar year<sup>‡</sup>`,
      },
      {
        iconKey: 'card-swipe',
        label: `Get closer to Medallion<sup>®</sup> Status with Status Boost<sup>®</sup>.<sup>‡</sup> <a href="#${statusBoostBenefitIdAttr}" rel="noopener noreferrer">Here&apos;s how</a>.`,
      },
    ],
    welcomeOffer: [
      {
        kind: 'heading-4',
        content: `Earn <span class="display-block heading-5 font-weight-bold margin-0">60,000</span> Bonus Miles`,
      },
      {
        kind: 'p',
        content: `after you spend $3,000 in purchases on your new Card in your first 3 months of Card Membership.<sup>†</sup>`,
      },
    ],
    earningRewards: [
      {
        kind: 'img',
        content: `assets/platinum-earning-rewards.png`,
        extraClasses: 'border-radius-1',
      },
      {
        kind: 'heading-4',
        content: `Earn Delta SkyMiles`,
      },
      {
        kind: 'p',
        content: `<strong>3X Miles</strong>`,
      },
      {
        kind: 'ul',
        content: [
          `on eligible purchases made directly with Delta<sup>‡</sup>`,
          `purchases made directly with hotels<sup>‡</sup>`,
        ],
      },
      {
        kind: 'p',
        content: `<strong>1.5X Miles</strong> per dollar on single eligible purchases of $5,000 or more (that’s an extra half mile per dollar), up to 50,000 additional miles per calendar year. If your purchase qualifies for a category that has a higher mileage accelerator, only the higher accelerator will apply (ex. you would earn 3X miles on purchases made directly with Delta and Hotel instead of 1.5X).<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `<strong>1X Miles</strong> on all other eligible purchases<sup>‡</sup>`,
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
        content: `Status Boost<sup>®</sup>: Get Closer to Medallion<sup>®</sup> Status`,
      },
      {
        kind: 'p',
        content: `Earn 10,000 Medallion<sup>®</sup> Qualification Miles (MQMs) after you spend $25,000 in purchases on your Card up to 2 times in a calendar year. Earn an additional 10,000 MQMs after you spend an additional $25,000 in purchases.<sup>‡</sup>`,
      },
      {
        kind: 'p',
        content: `MQMs are used to determine Medallion Status and are different from the miles you earn towards flights.`,
      },
      {
        kind: 'heading-3',
        content: `First Checked Bag Free`,
      },
      {
        kind: 'p',
        content: `As a benefit of Card Membership, you can check your first bag free on Delta flights. You can save up to $60 on a round-trip Delta flight per person. For a family of four that’s a potential savings of up to $240 per round-trip flight.<sup>‡</sup>`,
      },
      {
        kind: 'heading-3',
        content: `Companion Certificate`,
      },
      {
        kind: 'p',
        content: `Receive a Domestic Main Cabin round-trip companion certificate each year upon renewal of your Card.<sup>*‡</sup>`,
      },
      {
        kind: 'p',
        content: `<sup>*</sup>Payment of the government imposed taxes and fees of no more than $80 for roundtrip domestic flights (for itineraries with up to four flight segments) is required. Baggage charges and other restrictions apply. See terms and conditions for details.`,
        extraClasses: 'legal-1',
      },
      {
        kind: 'heading-3',
        content: `Delta Sky Club® Access`,
      },
      {
        kind: 'p',
        content: `You and up to two guests can enjoy snacks and beverages, Wi-Fi access, satellite TV, newspapers and magazines, personalized flight assistance, private restrooms and more at Delta Sky Club<sup>®</sup> for a per-visit rate of $50 per person.<sup>‡</sup>`,
      },
    ],
  };
};
