const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = withTypescript(withSass({
  webpack:  (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    // Further custom configuration here
    config.devtool = 'source-map';

    if (!options.dev) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp(
            '\\.(css|js)$'
          ),
          threshold: 10240,
          // deleteOriginalAssets: true
        })
      );
    }
    return config;
  }
}));
