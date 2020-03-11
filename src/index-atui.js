import {ismp} from './utils/util'
import ATView from '../components/ATView'
import ATButton from '../components/ATButton'
import {ATFlex, ATFlexItem} from '../components/ATFlex'
import ATButtonArea from '../components/ATButtonArea'

const components = [
    ATView,
    ATButton,
    ATFlex,
    ATFlexItem,
    ATButtonArea
]

const install = function(Vue, opts = {}) {
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
    window.Vue.use(WeUI)
}

export default {
    version: '0.5.9',
    ismp,
    install,
    ATView,
    ATButton,
    ATFlex,
    ATFlexItem,
    ATButtonArea
}
