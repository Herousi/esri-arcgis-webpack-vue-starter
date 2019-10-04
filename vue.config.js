
/** @type import('@vue/cli-service').ProjectOptions */
const fs = require('fs')
const alias = require('./alias.config')
module.exports = {
  // https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started
  chainWebpack (config) {
    // Only enable performance hints for production builds,
    // outside of tests.
    config.performance.hints(
      process.env.NODE_ENV === 'production' &&
            !process.env.VUE_APP_TEST &&
            'warning'
    )
  },
  configureWebpack: {
    // Set up all the aliases we use in our app.
    ...alias
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: fs.readFileSync('./src/assets/style/_variables.scss', 'utf-8')
      }
    }
  }
}
