<template>
  <ATView class="page toast js_show">
    <ATView class="page__hd">
      <h1 class="page__title">ATToast</h1>
      <p class="page__desc">弹出式提示</p>
    </ATView>
    <ATView class="page__bd page__bd_spacing">
      <ATButton @click="successShow">
        成功提示
      </ATButton>
      <ATButton @click="loadingShow">
        加载中提示
      </ATButton>
    </ATView>
    <ATToast
      :duration="1000"
      v-model="successTips"
      type="success"
    >已完成</ATToast>
    <ATToast
      v-model="loadingToast"
      type="loading"
    >加载中提示</ATToast>

    <ATView class="page__bottom_tips">
      <p>ATToast 应用场景: success  error</p>
      <p>展现形式: 标题+提示文字、提示文字、提示图片+提示文字</p>
      <p>展现方式: 上、中、下，动画可以自定义</p>
    </ATView>

  </ATView>
</template>

<script>

export default {
    data() {
        return {
            successTips: false,
            loadingToast: false,
        }
    },
    methods: {
        successShow() {
            this.successTips = true
        },
        loadingShow() {
            this.loadingToast = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.loadingToast = false
            }, 1000)
        }

    }
}
</script>
