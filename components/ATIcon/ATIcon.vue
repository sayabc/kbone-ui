<template>
  <i
    :class="classObject"
  />
</template>
<script>
export default {
    name: 'ATIcon',
    props: {
        type: {
            type: String,
            // success ,info ,waiting ,circle ,warn ,download ,info ,cancel ,clear ,search
            default: 'success'
        },
        size: {
            type: String,
            default: 'small'
        }
    },
    computed: {
        classObject() {
            return {
                ['weui-icon-' + this.type]: this.type !== 'loading',
                'weui-loading': this.type === 'loading',
                'weui-icon_msg': this.size === 'large'
            }
        }
    }
}
</script>

