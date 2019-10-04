import vuex from './vuex'
import api from '@/services/api'
import router from '@/router'
import localforage from 'localforage'
import { isEmpty, trim, replace } from 'lodash'
import { setToken as setAjaxToken } from '@/plugins/http'

export default {
  get token () {
    return vuex.state.auth.user
  },
  get loggedIn () {
    return !!this.token
  },
  get user () {
    return vuex.state.auth.user
  },
  login: {
    async password (account, password) {
      if (!account || !password) {
        // Toast.eror('Missing params')
        return
      }
      // let res = await api.auth.post(account, password)
      if (res) {
      // this.setToken(res.token)
      // this.setUSer(res.user)
      // Toast.success('Success!')
      // return res
      }
    },
    async code (account, code) {
      if (!account || !code) {
        // Toast.eror('Missing params')
        return
      }
      // let res = await api.auth.post(account, password)
      if (res) {
      // this.setToken(res.token)
      // this.setUSer(res.user)
      // Toast.success('Success!')
      // return res
      }
    }
  },
  async logout () {
    let res = await api.session.delete()
    if (res) {
      await this.removeToken()
      // Toast.success('Logout Success!')
      // !TODO might have bug with router refresh
      router.go(-1)
    }
  },
  async setUser (res) {
    if (!res) {
      res = await api.me.get()
    }
    vuex.dispatch('setUser', res)
  },
  async hasScope (scope = 'is_admin') {
    if (isEmpty(this.user)) {
      await this.setUser()
    }
    return this.user[scope]
  },
  async getToken () {
    if (this.token) {
      return this.token
    } else {
      let token = await localforage.getItem('token')
      await this.setToken(token)
      if (token) {
        return token
      } else {
        return false
      }
    }
  },
  async setToken (token = false) {
    if (!token) {
      return this.removeToken()
    }
    if (token.indexOf('Bearer' === 0)) {
      token = trim(replace(token, 'Bearer', ''))
    }
    if (token !== this.token || isEmpty(this.user)) {
      await localforage.setItem('token', token)
      vuex.dispatch('setToken', token)
      setAjaxToken(token)
      await this.setUser()
    }
  },
  async removeToken () {
    const result = await localforage.removeItem('token')
    if (result) {
      // !NOTE  ajax token not delete
      vuex.dispatch('setToken', null)
      vuex.dispatch('setUser', {})
      setAjaxToken(false)
      router.go(-1)
    }
  }
}
