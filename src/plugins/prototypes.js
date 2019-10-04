import Vue from 'vue'
import { EventBus } from './bus.js'
import lodash from 'lodash'
import localforage from 'localforage'

Vue.prototype.$bus = EventBus
Vue.prototype._ = lodash
Vue.prototype.$storage = localforage
