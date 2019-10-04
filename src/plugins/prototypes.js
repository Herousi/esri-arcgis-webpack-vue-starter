import Vue from 'vue'
import { EventBus } from './event-bus.js'
import lodash from 'lodash'

Vue.prototype.$bus = EventBus
Vue.prototype._ = lodash
