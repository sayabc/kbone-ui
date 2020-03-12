import ATToast from './ATToast.vue'

ATToast.install = function(Vue) {
    Vue.component(ATToast.name, ATToast)
}

export default ATToast
