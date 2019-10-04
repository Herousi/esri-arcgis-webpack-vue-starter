import axios from 'axios'
// import interceptors from './interceptors'
import config from '@/config'

// allow use http client without Vue instance
const http = axios.create({
  baseURL: config.apiUri,
  timeout: 100000,
  headers: {
    source: config.source,
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  }
})

// interceptors(http)

export default http
