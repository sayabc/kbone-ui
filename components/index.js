import { ismp } from '../utils/index'
import ATView from './ATView/'
import ATButton from './ATButton/'

const components = [
  ATView,
  ATButton
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  // register variable for mp and h5
  Vue.prototype.$atui = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

  Vue.prototype.$ismp = typeof Page === 'function' && typeof Component === 'function'
}

if (typeof window !== 'undefined' && window.Vue) {
  // window.Vue.use(WeUI) // TODO 没找到在哪里
}
export default {
  version: '0.0.1',
  install,
  ismp,
  ATView,
  ATButton
}
