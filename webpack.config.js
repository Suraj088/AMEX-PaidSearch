const { resolve } = require('path');
const { pathExists, readdirSync } = require('fs-extra');
const importFresh = require('import-fresh');
const { Environment, FileSystemLoader } = require('nunjucks');//These are components of the Nunjucks templating engine, used to set up Nunjucks for rendering HTML templates.
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //A Webpack plugin for cleaning the output directory before each build.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //A Webpack plugin for extracting CSS into separate files.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //A Webpack plugin for generating HTML files that include links to generated bundles.
const CopyWebpackPlugin = require('copy-webpack-plugin'); //A Webpack plugin for copying static assets from one location to another in the output directory.
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); //A Webpack plugin for type-checking TypeScript files in parallel.
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default; //A Webpack plugin for watching external files.

const { replaceExtension } = require('./tools/replace-extension');
const { SuppressExtractedTextChunks } = require('./tools/suppress-entry-chunks-webpack-plugin');

const stripIndent = require('strip-indent');
const markdownIt = require('markdown-it');
const markdownItSup = require('markdown-it-sup');
const markdown = markdownIt({ html: true, typographer: true }).use(markdownItSup);

const njkEnvironment = new Environment(
  [new FileSystemLoader(resolve('./src'), { noCache: true })],
  { throwOnUndefined: true }
);
njkEnvironment.addFilter('markdown', function (value, multi) {
  return multi ? markdown.render(stripIndent(value)) : markdown.renderInline(value);
});

const JSON_TEMPLATE_ENDING = '-json.njk';

function getTemplatePaths() {
  /** @type {string[]} */
  const htmlTemplatePaths = [];
  /** @type {string[]} */
  const jsonTemplatePaths = [];

  readdirSync('./src/views', { encoding: 'utf8' })
    .filter((f) => f.endsWith('.njk'))
    .forEach((f) => {
      if (f.endsWith(JSON_TEMPLATE_ENDING)) {
        jsonTemplatePaths.push(f);
      } else {
        htmlTemplatePaths.push(f);
      }
    });

  return { htmlTemplatePaths, jsonTemplatePaths };
}

/**
 * @returns {Promise<import('webpack').Configuration>}
 */
module.exports = async function config() {
  const { htmlTemplatePaths, jsonTemplatePaths } = getTemplatePaths();

  /**
   * Will provide an instance of HtmlWebpackPlugin for the following:
   * - One for each path in `htmlTemplatePaths` to output an `html` file
   * - One for each path in `jsonTemplatePaths` to output an `json` file
   */
  const htmlWebpackPlugins = [
    ...htmlTemplatePaths.map((viewName) => {
      return new HtmlWebpackPlugin({
        template: resolve(`./src/views/${viewName}`),
        filename: viewName.replace('.njk', '.html'),
        minify: false,
      });
    }),
    ...jsonTemplatePaths.map((viewName) => {
      return new HtmlWebpackPlugin({
        template: resolve(`./src/views/${viewName}`),
        filename: viewName.replace(JSON_TEMPLATE_ENDING, '.json'),
        inject: false,
        minify: false,
      });
    }),
  ];

  return {
    mode: 'production',
    entry: {
      main: './src/main.ts',
      styles: './src/styles.scss',
    },
    output: {
      path: resolve(__dirname, 'dist'),
      filename: '[name].[contenthash:10].js',
      chunkFilename: '[id].[contenthash:10].js',
    },
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash:8].[ext]',
                outputPath: 'assets/',
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash:8].[ext]',
                outputPath: 'assets/',
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.(mp4|vtt)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[contenthash:8].[ext]',
                outputPath: 'assets/',
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.njk$/,
          loader: 'html-loader',
          options: {
            preprocessor: async (content, loaderContext) => {
              try {
                // Retrieve global data
                // This is data that is exposed to all templates
                const getGlobalData = importFresh('./src/global.data.js');
                const globalData = await getGlobalData();

                // Retrieve local data
                // This file is optional, to complement the global data.
                // To be loaded, it should be adjacent to the source Nunjucks file.
                // If the template is `views/example.njk` the data file should be `views/example.data.js`
                const localDataPath = replaceExtension(loaderContext.resourcePath, '.data.js');
                const localDataExists = await pathExists(localDataPath);
                const getLocalData = localDataExists ? importFresh(localDataPath) : null;
                const localData = getLocalData ? await getLocalData() : {};

                // Combine global + local data
                const data = { ...globalData, ...localData };

                return njkEnvironment.renderString(content, data);
              } catch (error) {
                loaderContext.emitError(error);
                return content;
              }
            },
            minimize: false,
          },
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
                reloadAll: true,
              },
            },
            { loader: 'css-loader', options: { sourceMap: true } },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: process.env.NODE_ENV === 'development',
                reloadAll: true,
              },
            },
            { loader: 'css-loader', options: { sourceMap: true } },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  require('postcss-preset-env')({ stage: 4 }),
                  require('cssnano')({
                    preset: [
                      'default',
                      {
                        calc: false,
                      },
                    ],
                  }),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sourceMap: true,
                sassOptions: {
                  // Use `expanded`, otherwise autoprefixer comments are removed
                  outputStyle: 'expanded',
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:10].css',
        chunkFilename: '[id].[contenthash:10].css',
      }),
      new SuppressExtractedTextChunks(),
      new CopyWebpackPlugin({
        patterns: [{ from: './src/assets', to: 'assets' }],
      }),
      ...htmlWebpackPlugins,
      new ForkTsCheckerWebpackPlugin(),
      new WatchExternalFilesPlugin({
        files: ['./src/**/*.js', './src/**/*.njk'],
      }),
    ],
    optimization: {
      namedChunks: true,
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      },
    },
    devServer: {
      overlay: true,
    },
  };
};
