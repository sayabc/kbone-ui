<template>
  <ATView v-show="isShow">
    <ATMask :transparent="true" />
    <ATView class="weui-toast">
      <ATIcon
        :type="iconType"
        class="weui-icon_toast" />
      <ATView class="weui-toast_content">
        <slot/>
      </ATView>
    </ATView>
  </ATView>
</template>
<script>
import ATIcon from '../ATIcon/'
import ATMask from '../ATMask'

export default {
    name: 'ATToast',
    components: {
        ATIcon,
        ATMask
    },
    props: {
        type: {
            type: String,
            default: 'success'
        },
        value: {
            type: Boolean,
            default: false
        },
        duration: {
            type: Number,
        }
    },
    data() {
        return {
            isShow: this.value
        }
    },
    computed: {
        iconType() {
            if (this.type === 'success') {
                return 'success-no-circle'
            }
            return this.type
        }
    },
    watch: {
        value(newValue) {
            if (newValue) {
                this.isShow = true
                if (this.duration) {
                    clearTimeout(this.timeout)
                    this.timeout = setTimeout(() => {
                        this.isShow = false
                        this.$emit('input', false)
                    }, this.duration)
                }
            } else {
                this.isShow = false
            }
        }
    },

}
</script>
