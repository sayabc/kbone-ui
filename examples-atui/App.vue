<template>
  <ATView
    id="app"
    class="container">
    <router-link
      :to="routes.index"
      class="homeIcon">BACK HOME</router-link>
    <router-view/>
  </ATView>
</template>

<script>
import Vue from 'vue'
import routes from '@/router/routeConfig'

export default Vue.extend({
    data() {
        return {
            routes
        }
    }
})
</script>
<style lang="less">
@import "./example.less";
@import "./weui/weui.less";

.homeIcon{
    position: absolute;
    z-index: 2;
}
</style>
