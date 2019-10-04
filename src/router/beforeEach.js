import NProgress from 'nprogress'
const beforeEach = async (to, from, next) => {
  NProgress.start()
  next()
}

export default beforeEach
