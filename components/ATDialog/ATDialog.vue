<template>
  <ATView v-show="isShow">
    <ATMask @click="maskClick" />
    <ATView class="weui-dialog">
      <ATView
        v-if="title"
        class="weui-dialog__hd">
        <ATView class="weui-dialog__title">
          {{ title }}
        </ATView>
      </ATView>
      <ATView class="weui-dialog__bd">
        {{ desc }}
      </ATView>
      <ATView class="weui-dialog__ft">
        <ATView
          v-for="(item,index) in buttons"
          :key="index"
          class="weui-dialog__btn weui-dialog__btn_primary"
          @click="item.click" >
          {{ item.text }}
        </ATView>
      </ATView>
    </ATView>
  </ATView>
</template>
<script>
import ATMask from '../ATMask/index'

export default {
    name: 'ATDialog',
    components: {
        ATMask
    },
    props: {
        title: {
            type: String
        },
        desc: {
            type: String
        },
        buttons: {
            type: Array,
            default() { return [] }
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: this.value
        }
    },
    watch: {
        value(newValue) {
            this.isShow = newValue
            if (newValue === false) {
                // 弹窗关闭时，额外触发事件
                this.$emit('cancel')
            }
        }
    },
    methods: {
        maskClick(event) {
            this.isShow = false
            this.$emit('input', false)
            this.$emit('cancel', event)
        }
    }
}
</script>

