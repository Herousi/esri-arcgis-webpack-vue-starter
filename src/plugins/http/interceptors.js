import { Message } from 'element-ui'
import localforage from 'localforage'
import appConfig from '@/config'
import store from '@/store/store'
import router from '@/router/router'

export default http => {
  http.interceptors.request.use(
    async config => {
      let token = false
      if (store.state.token) {
        token = store.state.token
      } else {
        token = await localforage.getItem(appConfig.tokenKey)
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  http.interceptors.response.use(
    response => {
      return response.data
    },
    async error => {
      if (!error['response']) {
        return Promise.reject(error)
      }

      switch (error.response.status) {
        case 401:
          await store.dispatch('logout')
          router.push({ name: 'auth.login' })
          Message.error('无权访问，请重新登录。')
          break
        case 403:
          Message.error(error.response.data.message || '您没有此操作权限！')
          break
        case 500:
        case 501:
        case 503:
          Message.error('服务器出了点小问题，请联系技术支持！')
          break
        default:
          Message.error(error.response.data.message || '连接错误，请稍后再试')
          break
      }
      return Promise.reject(error.response)
    }
  )
}
