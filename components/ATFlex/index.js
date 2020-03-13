import ATFlex from './ATFlex.vue'
import ATFlexItem from './ATFlexItem.vue'

ATFlex.install = function(Vue) {
    Vue.component(ATFlex.name, ATFlex)
}

ATFlexItem.install = function(Vue) {
    Vue.component(ATFlexItem.name, ATFlexItem)
}

export {
    ATFlex,
    ATFlexItem
}
