<template>
  <ATView class="page home js_show">
    <ATView class="page__hd">
      <h1 class="page__title">
        ATHM-UI
      </h1>
      <p class="page__desc">一处代码，同时用于 Web 端和 微信 小程序。</p>
      <p class="page__desc">基于we-ui，还原微信原生体验，借鉴kbone-ui设计思路，定制化UI库。</p>
    </ATView>
    <ATView class="page__bd page__bd_spacing">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          :class="{'js_show': item.active}" >
          <ATFlex
            class="js_category"
            @click="activeItem(index)" >
            <ATFlexItem>
              {{ item.title }}
            </ATFlexItem>
            <img
              :src="item.img"
              alt="">
          </ATFlex>
          <ATView class="page__category js_categoryInner">
            <ATView class="weui-cells page__category-content">
              <ATView
                v-for="(wrapItems,_index) in item.items"
                :key="_index"
                class="weui-cell weui-cell_access js_item"
                @click="jump2Url(wrapItems.link)"
              >
                <ATView class="weui-cell__bd">
                  <p>{{ wrapItems.text }}</p>
                </ATView>
                <ATView class="weui-cell__ft"/>
              </ATView>
            </ATView>
          </ATView>
        </li>
      </ul>
    </ATView>
  </ATView>
</template>

<script>

import Vue from 'vue'
import routes from '@/router/routeConfig'

export default Vue.extend({
    data() {
        return {
            routes,
            list: [
                {
                    title: 'Actions',
                    img: require('../../images/icon_nav_form.png'),
                    active: false,
                    items: [
                        {
                            text: 'ATButton',
                            link: '/button'
                        },
                        // {
                        //     text: 'Form',
                        //     link: '/form'
                        // },
                        // {
                        //     text: 'Cells',
                        //     link: '/cells'
                        // }
                    ]
                },
                {
                    title: 'Layout',
                    img: require('../../images/icon_nav_layout.png'),
                    active: false,
                    items: [
                        {
                            text: 'ATFlex',
                            link: '/flex'
                        },
                        // {
                        //     text: 'Progress',
                        //     link: '/progress'
                        // },
                        // {
                        //     text: 'Slider',
                        //     link: '/slider'
                        // },
                    ]
                },
                // {
                //     title: '视图组件',
                //     img: require('../../images/icon_nav_z-index.png'),
                //     active: false,
                //     items: [
                //         {
                //             text: 'Picker',
                //             link: '/picker'
                //         },
                //         {
                //             text: 'Swiper',
                //             link: '/swiper'
                //         },
                //         {
                //             text: 'ScrollView',
                //             link: '/scrollview'
                //         },
                //         {
                //             text: 'Movable',
                //             link: routes.pages.movable,
                //         },
                //     ]
                // },
                {
                    title: 'Show',
                    img: require('../../images/icon_nav_feedback.png'),
                    active: false,
                    items: [
                        // {
                        //     text: 'Actionsheet',
                        //     link: '/actionsheet'
                        // },
                        {
                            text: 'ATToast',
                            link: '/toast'
                        },
                        {
                            text: 'ATDialog',
                            link: '/dialog'
                        },
                        // {
                        //     text: 'Toptips',
                        //     link: '/toptips'
                        // }
                    ]
                }
            ]
        }
    },
    methods: {
        activeItem(order) {
            this.list.forEach((item, index) => {
                if (order === index) {
                    // eslint-disable-next-line
                    item.active = !item.active
                } else {
                    // eslint-disable-next-line
                    item.active = false
                }
            })
        },
        jump2Url(link) {
            this.$router.push(link)
        }
    }
})
</script>

<style lang="less">
.extra_class{
    padding-top: 20px;
}
</style>
