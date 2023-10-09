const { relative, resolve } = require('path');
const importFresh = require('import-fresh');

require('dotenv').config();

const viewsDirectory = resolve(__dirname, './views');
const assetsDirectory = resolve(__dirname, './assets');

const assetsPath = relative(viewsDirectory, assetsDirectory);

const AXP_STATIC_DLS_DIST =
  'https://www.aexp-static.com/cdaas/one/statics/@americanexpress/dls/6.18.4/package/dist';
const AXP_STATIC_ASSETS_DIST =
  'https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/2.24.1/package/dist';
const DENTSU_IS_DEMO =
  !!process.env.DENTSU_IS_DEMO && process.env.DENTSU_IS_DEMO.toString().toLowerCase() === 'true';

console.dir({ DENTSU_IS_DEMO });

module.exports = async () => {
  return {
    constants: {
      AXP_STATIC_DLS_DIST,
      AXP_STATIC_ASSETS_DIST,
      DENTSU_IS_DEMO,
    },
    title: 'American Express Credit Cards, Rewards, Travel and Business Services',
    description: 'American Express Credit Cards, Rewards, Travel and Business Services',
    header: {
      dontDoBusinessWithoutIt: {
        // Note: using PNG because it's _significantly_ smaller than the original SVG
        imageSrc: `${assetsPath}/dont-do-business-without-it.png`,
        imageAlt: `Don't do business without it`,
      },
      callNow: {
        label: 'Call Now to Apply',
        phone: '1-888-665-6736',
      },
    },
    hero: {
      default: {
        title:
          '<strong>Find the best American Express<sup>®</sup> Business Card for your&nbsp;business</strong>',
        subtitle:
          'Explore Business Credit Cards that offer rewards, travel benefits, and cash flow solutions for businesses like&nbsp;yours',
      },
      best: {
        title:
          '<strong>Find the best American Express<sup>®</sup> Business Card for your&nbsp;business</strong>',
        subtitle:
          'Explore Business Credit Cards that offer rewards, travel benefits, and cash flow solutions for businesses like&nbsp;yours',
      },
      'cash-back': {
        title: '<strong>Get Cash Back, when it counts the&nbsp;most</strong>',
        subtitle:
          'Explore American Express<sup>®</sup> cash back Cards that can help you get more out of your everyday business&nbsp;spending.',
      },
      rewards: {
        title:
          '<strong>Find the best American Express<sup>®</sup> Card to earn rewards for your&nbsp;business</strong>',
        subtitle: 'Built for business, backed by American&nbsp;Express',
      },
      travel: {
        title: '<strong>Redefine business travel, backed by American&nbsp;Express</strong>',
        subtitle:
          'Find the right American Express<sup>®</sup> travel rewards Card for your&nbsp;business',
      },
      'no-fee': {
        title:
          '<strong>Skip the annual fee<sup>¤</sup> and still enjoy great benefits&mdash;backed by American&nbsp;Express</strong>',
        subtitle:
          'Find the best American Express no annual fee<sup>¤</sup> Card for your&nbsp;business',
      },
    },
    cardComparison: {
      headline: '**Explore** Business Credit&nbsp;Cards',
    },
    singleCardId: null,
    defaultCardCategory: 'best',
    cardCategories: [
      {
        key: 'best',
        label: 'Best',
        iconClass: 'dls-icon-favorite',
        cards: [
          importFresh('./card-data/business-platinum-card.data.js')(),
          importFresh('./card-data/business-gold-card.data.js')(),
          importFresh('./card-data/blue-business-plus-credit-card.data.js')(),
        ],
      },
      {
        key: 'cash-back',
        label: 'Cash Back',
        iconClass: 'dls-icon-cashback',
        cards: [
          importFresh('./card-data/blue-business-cash-card.data.js')(),
          importFresh('./card-data/lowes-business-rewards-card.data.js')(),
          importFresh('./card-data/plum-card.data.js')(),
        ],
      },
      {
        key: 'rewards',
        label: 'Rewards',
        iconClass: 'dls-icon-rewards',
        cards: [
          importFresh('./card-data/business-platinum-card.data.js')(),
          importFresh('./card-data/business-gold-card.data.js')(),
          importFresh('./card-data/business-green-rewards-card.data.js')(),
        ],
      },
      {
        key: 'travel',
        label: 'Travel',
        iconClass: 'dls-icon-airplane',
        cards: [
          importFresh('./card-data/delta-sky-miles-platinum-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-gold-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-reserve-business-card.data.js')(),
          importFresh('./card-data/hilton-honors-business-card.data.js')(),
          importFresh('./card-data/marriott-bonvoy-business-card.data.js')(),
        ],
      },
      {
        key: 'no-fee',
        label: 'No Fee',
        iconClass: 'dls-icon-no-fee',
        cards: [
          importFresh('./card-data/blue-business-cash-card.data.js')(),
          importFresh('./card-data/blue-business-plus-credit-card.data.js')(),
          importFresh('./card-data/amazon-business-card.data.js')(),
        ],
      },
      {
        key: 'view-all-cards',
        label: 'View All Cards',
        iconClass: '',
        cards: [
          importFresh('./card-data/business-platinum-card.data.js')(),
          importFresh('./card-data/business-gold-card.data.js')(),
          importFresh('./card-data/business-green-rewards-card.data.js')(),
          importFresh('./card-data/plum-card.data.js')(),
          importFresh('./card-data/blue-business-plus-credit-card.data.js')(),
          importFresh('./card-data/blue-business-cash-card.data.js')(),
          importFresh('./card-data/lowes-business-rewards-card.data.js')(),
          importFresh('./card-data/hilton-honors-business-card.data.js')(),
          importFresh('./card-data/marriott-bonvoy-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-gold-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-platinum-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-reserve-business-card.data.js')(),
          importFresh('./card-data/amazon-business-card.data.js')(),
          importFresh('./card-data/amazon-business-prime-card.data.js')(),
        ],
      },
      {
        key: 'compare',
        label: 'Compare',
        iconClass: '',
        cards: [
          importFresh('./card-data/business-platinum-card.data.js')(),
          importFresh('./card-data/business-gold-card.data.js')(),
          importFresh('./card-data/business-green-rewards-card.data.js')(),
          importFresh('./card-data/plum-card.data.js')(),
          importFresh('./card-data/blue-business-plus-credit-card.data.js')(),
          importFresh('./card-data/blue-business-cash-card.data.js')(),
          importFresh('./card-data/lowes-business-rewards-card.data.js')(),
          importFresh('./card-data/hilton-honors-business-card.data.js')(),
          importFresh('./card-data/marriott-bonvoy-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-gold-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-platinum-business-card.data.js')(),
          importFresh('./card-data/delta-sky-miles-reserve-business-card.data.js')(),
          importFresh('./card-data/amazon-business-card.data.js')(),
          importFresh('./card-data/amazon-business-prime-card.data.js')(),
        ],
      },
    ],
    footer: {
      columns: [
        {
          title: 'About',
          links: [
            {
              text: 'About American Express',
              href: 'https://about.americanexpress.com/?inav=footer_about_american_express',
            },
            {
              text: 'Investor Relations',
              href: 'http://ir.americanexpress.com/?inav=footer_about_investor_relations',
            },
            {
              text: 'Careers',
              href: 'http://careers.americanexpress.com/?inav=footer_careers',
            },
            {
              text: 'Site Map',
              href: 'https://www.americanexpress.com/us/sitemap.html?inav=footer_sitemap',
            },
            {
              text: 'Contact Us',
              href: 'https://global.americanexpress.com/help?inav=footer_contact',
            },
          ],
        },
        {
          title: 'Products & Services',
          links: [
            {
              text: 'Credit Cards',
              href: 'https://www.americanexpress.com/us/credit-cards/?inav=footer_sitemap',
            },
            {
              text: 'Business Credit Cards',
              href:
                'https://www.americanexpress.com/us/credit-cards/business/business-credit-cards/?inav=footer_cards_bus_crdt_crd',
            },
            {
              text: 'Corporate Programs',
              href:
                'https://www.americanexpress.com/us/credit-cards/business/corporate-credit-cards/?inav=footer_corp_prg',
            },
            {
              text: 'Prepaid Cards',
              href:
                'https://www.serve.com/?SOLID=5AMEX&extlink=us-amex-home-footer&inav=footer_cards_reload',
            },
            {
              text: 'Savings Accounts & CDs',
              href:
                'https://www.americanexpress.com/personalsavings/home?extlink&inav=footer_personal_savings',
            },
            {
              text: 'Gift Cards',
              href: 'https://www.americanexpress.com/gift-cards/?inav=menu_cards_giftcards',
            },
          ],
        },
        {
          title: 'Links You May Like',
          links: [
            {
              text: 'Membership Rewards',
              href: 'https://global.americanexpress.com/rewards?us_nu=dd&inav=footer_mr',
            },
            {
              text: 'Free Credit Score & Report',
              href:
                'https://www.americanexpress.com/us/credit-cards/features-benefits/free-credit-score?inav=footer_credit_score',
            },
            {
              text: 'CreditSecure',
              href:
                'https://feeservices.americanexpress.com/premium/credit-report-monitoring/home.do?inav=footer_creditsecure',
            },
            {
              text: 'Bluebird',
              href:
                'https://www.bluebird.com/?solid=BBDAMEXHPBBAR&inav=footer_bluebird&extlink=us-amex-prepaid-bluebird-inav_footer_bluebird',
              target: '_blank',
            },
            {
              text: 'Accept Amex Cards',
              href:
                'https://www209.americanexpress.com/merchant/services/en_US/accept-credit-cards?merch_van=ENT_FOOT&intlink=us-mer-Ent_Foot&inav=footer_accept_amex',
            },
            {
              text: 'Refer A Friend',
              href:
                'https://americanexpress.com/en-us/referral?id=201279&intlink=US-MGM-Inav&inav=footer_refer_friend',
            },
          ],
        },
        {
          title: 'Additional Information',
          links: [
            {
              text: 'Credit Intel – Financial Education Center',
              href:
                'https://www.americanexpress.com/en-us/credit-cards/credit-intel/?inav=footer_financial_ed',
            },
            {
              text: 'Supplier Management',
              href:
                'https://www.americanexpress.com/us/supplier-management/?inav=footer_supplier_management',
            },
            {
              text: 'Credit 101',
              href:
                'https://www.americanexpress.com/en-us/credit-cards/credit-intel/credit/?inav=footer_credit_101',
            },
            {
              text: 'Money Management 101',
              href:
                'https://www.americanexpress.com/en-us/credit-cards/credit-intel/money/?inav=footer_money_management_101',
            },
          ],
        },
      ],
      logo: {
        text: 'American Express',
        imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/logos/dls-logo-line.svg`,
      },
      countrySelector: {
        current: {
          text: 'United States',
          imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/flags/dls-flag-us.svg`,
        },
        link: {
          text: 'Change Country',
          href: 'https://www.americanexpress.com/change-country/?inav=us_footer_choosecountry',
        },
      },
      social: {
        links: [
          {
            text: 'Facebook',
            href: 'https://www.facebook.com/AmericanExpressUS',
            imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/social/social-network-facebook.svg`,
            target: '_blank',
          },
          {
            text: 'Twitter',
            href: 'https://twitter.com/askamex',
            imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/social/social-network-twitter.svg`,
            target: '_blank',
          },
          {
            text: 'Instagram',
            href: 'https://www.instagram.com/AmericanExpress',
            imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/social/social-network-instagram.svg`,
            target: '_blank',
          },
          {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/company/american-express',
            imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/social/social-network-linkedin.svg`,
            target: '_blank',
          },
          {
            text: 'YouTube',
            href: 'https://www.youtube.com/user/AmericanExpress',
            imageSrc: `${AXP_STATIC_ASSETS_DIST}/img/social/social-network-youtube.svg`,
            target: '_blank',
          },
        ],
      },
      legal: {
        links: [
          {
            text: 'Terms of Service',
            href:
              'https://www.americanexpress.com/us/legal-disclosures/website-rules-and-regulations.html?inav=footer_Terms_of_Use',
          },
          {
            text: 'Privacy Center',
            href:
              'https://www.americanexpress.com/us/privacy-center/?inav=footer_privacy_statement',
          },
          {
            text: 'AdChoices',
            href: 'https://info.evidon.com/pub_info/1328?v=1&nt=1&nw=true&inav=footer_adChoices',
            target: '_blank',
          },
          {
            text: 'Security Center',
            href:
              'https://www.americanexpress.com/us/security-center/?inav=footer_fraud_protection_center',
          },
        ],
        disclaimer:
          'All users of our online services subject to Privacy Statements and agree to be bound by Terms of Service. Please review.',
        copyright: '(c) 2020 American Express Company. All rights reserved.',
      },
    },
  };
};
