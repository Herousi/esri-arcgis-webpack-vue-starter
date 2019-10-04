const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      '@src': resolve('src'),
      '@router': resolve('src/router'),
      '@views': resolve('src/router/views'),
      '@layouts': resolve('src/router/layouts'),
      '@components': resolve('src/components'),
      '@assets': resolve('src/assets'),
      '@utils': resolve('src/utils'),
      '@state': resolve('src/state'),
      '@design': resolve('src/design/index.scss')
    }
  }
}
