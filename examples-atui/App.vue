<template>
  <ATView
    id="app"
    class="container">
    <router-link
      :to="routes.index"
      class="homeIcon">Back</router-link>
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
    position: fixed;
    z-index: 2;
    bottom: 10px;
    right: 10px;
    border: 1px solid gray;
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 12px;
}
</style>
