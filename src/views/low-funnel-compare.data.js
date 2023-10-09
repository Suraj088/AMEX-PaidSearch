module.exports = () => {
  const lowFunnelData = require('./low-funnel.data.js')();

  return {
    ...lowFunnelData,
    defaultCardCategory: 'compare',
  };
};