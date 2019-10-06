// import { Message } from 'element-ui'
import Auth from '@/plugins/auth'

export default http => {
  http.interceptors.request.use(
    config => {
      // config.withCredentials = true // 需要跨域打开此配置
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  http.interceptors.response.use(
    response => {
      // 判断一下响应中是否有 token，如果有就直接使用此 token 替换掉本地的 token。你可以根据你的业务需求自己编写更新 token 的逻辑
      var token = response.headers.authorization
      if (token) {
        // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
        Auth.setToken(token)
      }
      return response.data
    },
    async error => {
      if (!error['response']) {
        return Promise.reject(error)
      }

      switch (error.response.status) {
        case 401:
          // Message.error('无权访问，请重新登录。')
          Auth.logout()
          break
        case 403:
          // Message.error(error.response.data.message || '您没有此操作权限！')
          break
        case 500:
        case 501:
        case 503:
          // Message.error('服务器出了点小问题，请联系技术支持！')
          break
        default:
          // Message.error(error.response.data.message || '连接错误，请稍后再试')
          break
      }
      return Promise.reject(error.response)
    }
  )
}
