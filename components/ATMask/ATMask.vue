<template>
  <ATView
    :class="{
      'weui-mask': !transparent,
      'weui-mask_transparent': transparent
    }"
    @click="clickHander"
  />
</template>
<script>
export default {
    name: 'ATMask',
    props: {
        transparent: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clickHander(event) {
            this.$emit('click', event)
        }
    }
}
</script>

