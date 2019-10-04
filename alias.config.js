const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  '@': resolve('src'),
  '@src': resolve('src'),
  '@plugins': resolve('src/plugins'),
  '@router': resolve('src/router'),
  '@pages': resolve('src/pages'),
  '@layouts': resolve('src/layouts'),
  '@components': resolve('src/components'),
  '@assets': resolve('src/assets'),
  '@utils': resolve('src/utils'),
  '@vuex': resolve('src/vuex'),
  '@style': resolve('src/assets/style')
}
