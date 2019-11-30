const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = (phase, { defaultConfig }) => {
  return {
    /* config options here */
    crossOrigin: 'anonymous',
    env: {
      PORT: 8080
    },
    webpack: (config, options) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }
      // Further custom configuration here
      config.devtool = 'source-map'

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
      return config
    }
  }
}

module.exports = config
