const CompressionWebpackPlugin = require('compression-webpack-plugin')
const withCss = require('@zeit/next-css')

const config = (phase, { defaultConfig }) => {
  return withCss({
    /* config options here */
    crossOrigin: 'anonymous',
    webpack: (config, { isServer, dev }) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }
      // Further custom configuration here
      config.devtool = 'source-map'

      if (!dev) {
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

      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      return config
    }
  })
}

module.exports = config
