const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = withTypescript(withSass({
  webpack(config, options) {
    // Further custom configuration here
    config.devtool = 'source-map';

    if (!options.dev) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(css|js)$'
          ),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    return config;
  }
}));
