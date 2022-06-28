const { WebpackPluginServe } = require('webpack-plugin-serve');
const getBaseConfig = require('./webpack.config');

/**
 * @returns {Promise<import('webpack').Configuration>}
 */
module.exports = async function config() {
  const config = await getBaseConfig();

  config.entry['webpack-plugin-serve/client'] = 'webpack-plugin-serve/client';
  config.output.filename = '[name].[hash].js';
  config.output.chunkFilename = '[id].[hash].js';
  config.plugins.unshift(
    new WebpackPluginServe({
      static: [config.output.path],
      host: 'localhost',
      liveReload: true,
      progress: 'minimal',
      port: 5555,
    })
  );
  config.watch = true;

  return config;
};
