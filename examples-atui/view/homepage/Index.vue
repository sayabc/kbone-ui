<template>
  <ATView class="page home js_show">
    <ATView class="page__hd">
      <h1 class="page__title">
        ATHM-UI
      </h1>
      <p class="page__desc">ATHM-UI 是一套同微信原生视觉体验一致的基础样式库，同时适用于 Web 端和小程序。</p>
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
                    title: '表单',
                    img: require('../../images/icon_nav_form.png'),
                    active: false,
                    items: [
                        {
                            text: 'Button',
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
                // {
                //     title: '基础组件',
                //     img: require('../../images/icon_nav_layout.png'),
                //     active: false,
                //     items: [
                //         {
                //             text: 'Flex',
                //             link: '/flex'
                //         },
                //         {
                //             text: 'Progress',
                //             link: '/progress'
                //         },
                //         {
                //             text: 'Slider',
                //             link: '/slider'
                //         },
                //     ]
                // },
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
                // {
                //     title: '操作反馈',
                //     img: require('../../images/icon_nav_feedback.png'),
                //     active: false,
                //     items: [
                //         {
                //             text: 'Actionsheet',
                //             link: '/actionsheet'
                //         },
                //         {
                //             text: 'Toast',
                //             link: '/toast'
                //         },
                //         {
                //             text: 'Dialog',
                //             link: '/dialog'
                //         },
                //         {
                //             text: 'Toptips',
                //             link: '/toptips'
                //         }
                //     ]
                // }
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
