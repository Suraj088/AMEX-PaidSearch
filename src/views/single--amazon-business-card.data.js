// @ts-check

const path = require('path');

module.exports = () => {
  const lowFunnelData = require('./low-funnel.data.js')();

  return {
    ...lowFunnelData,
    defaultCardCategory: 'cash-back',
    singleCardId: path.basename(__filename).replace('single--', '').replace('.data.js', ''),
  };
};
