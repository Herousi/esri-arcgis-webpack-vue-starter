const ArcGISPlugin = require('@arcgis/webpack-plugin')
const path = require('path')

/** @type import('@vue/cli-service').ProjectOptions */
const alias = require('./alias.config')
module.exports = {
  // https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started
  chainWebpack (config) {
    config.module.rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.configFile = path.resolve(__dirname, '.eslintrc')
        return options
      })
    config.module.rule('strreplace').test(/\.js$/).use('string-replace-loader').loader('string-replace-loader').options({
      search: 'dojo/domReady!',
      replace: 'dojo/ready'
    })
    // Only enable performance hints for production builds,
    // outside of tests.
    config.performance.hints(
      process.env.NODE_ENV === 'production' &&
            !process.env.VUE_APP_TEST &&
            'warning'
    )
  },
  configureWebpack: {
    plugins: [
      new ArcGISPlugin({
        useDefaultAssetLoaders: false
      })
    ],
    node: {
      //process: false,
      global: false,
      //fs: "empty"
    },
    optimization: {
      minimize: true,
      splitChunks: {
        minChunks:Infinity,
        chunks: 'all',
      }
    },
    // Set up all the aliases we use in our app.
    resolve: {
      alias: alias
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "@/assets/style/empty/empty.sass"`
      },
      scss: {
        data: `@import "@/assets/style/empty/empty.scss"; @import "@/assets/style/_variables.scss";`
      }
    }
  }
}
