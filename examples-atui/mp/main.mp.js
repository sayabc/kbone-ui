import Vue from 'vue'
import Router from 'vue-router'
import {sync} from 'vuex-router-sync'

import App from '../App.vue'
import store from '../store'
import ATUI from '../../src/index-atui'
import Home from '../view/homepage/Index.vue'
import ATButton from '../view/components/button/button.vue'
import ATFlex from '../view/components/flex/flex.vue'
// import ScrollView from '../view/components/scrollview/scrollview.vue'
// import Form from '../view/components/form/form.vue'
// import Slider from '../view/components/form/slider.vue'
// import ActionSheet from '../view/components/actionsheet/actionsheet.vue'
import ATDialog from '../view/components/dialog/dialog.vue'
import ATToast from '../view/components/toast/toast.vue'
// import Progress from '../view/components/progress/progress.vue'
// import Picker from '../view/components/picker/picker.vue'
// import Toptips from '../view/components/toptips/toptips.vue'
// import Swiper from '../view/components/swiper/swiper.vue'
// import Movable from '../view/components/movable/movable.vue'
// import Cells from '../view/components/cells/cells.vue'

import routeConfig from '../router/routeConfig'

Vue.use(Router)
Vue.use(ATUI)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/(home|index)?',
            name: 'Index',
            component: Home
        },
        {
            path: routeConfig.pages.button,
            name: 'Button',
            component: ATButton
        },
        {
            path: routeConfig.pages.flex,
            name: 'Flex',
            component: ATFlex
        },
        // {
        //     path: routeConfig.pages.scrollview,
        //     name: 'ScrollView',
        //     component: ScrollView
        // },
        // {
        //     path: routeConfig.pages.form,
        //     name: 'Form',
        //     component: Form
        // },
        // {
        //     path: routeConfig.pages.slider,
        //     name: 'Slider',
        //     component: Slider
        // },
        // {
        //     path: routeConfig.pages.actionsheet,
        //     name: 'ActionSheet',
        //     component: ActionSheet
        // },
        {
            path: routeConfig.pages.dialog,
            name: 'Dialog',
            component: ATDialog
        },
        {
            path: routeConfig.pages.toast,
            name: 'Toast',
            component: ATToast
        },
        // {
        //     path: routeConfig.pages.progress,
        //     name: 'Progress',
        //     component: Progress
        // },
        // {
        //     path: routeConfig.pages.picker,
        //     name: 'Picker',
        //     component: Picker
        // },
        // {
        //     path: routeConfig.pages.toptips,
        //     name: 'Toptips',
        //     component: Toptips
        // },
        // {
        //     path: routeConfig.pages.swiper,
        //     name: 'Swiper',
        //     component: Swiper
        // },
        // {
        //     path: routeConfig.pages.movable,
        //     name: 'Movable',
        //     component: Movable
        // },
        // {
        //     path: routeConfig.pages.cells,
        //     name: 'Cells',
        //     component: Cells
        // }
    ]
})

export default function createApp() {
    const container = document.createElement('div')
    container.id = 'app'
    document.body.appendChild(container)

    sync(store, router)

    return new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
}
