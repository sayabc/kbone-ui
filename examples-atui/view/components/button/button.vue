<template>
  <ATView class="page button js_show">
    <ATView class="page__hd">
      <h1 class="page__title">Button</h1>
      <p class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</p>
    </ATView>
    <ATButtonArea>
      <ATButton type="primary" >页面主要操作</ATButton>
      <ATButton
        type="primary"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo" > getUserInfo </ATButton>
      <ATButton
        :loading="true"
        type="primary">Loading</ATButton>
      <ATButton
        :disabled="true"
        type="primary">禁止点击</ATButton>
      <ATButton >页面次要操作</ATButton>
      <ATButton type="warn">警告类操作</ATButton>
      <ATButton
        :loading="true"
        type="warn">警告类操作</ATButton>
      <ATButton
        :disabled="true"
        type="warn">警告类操作</ATButton>
    </ATButtonArea>
    <ATButtonArea direction="horizontal">
      <ATButton
        size="mini"
        type="primary">btn</ATButton>
      <ATButton size="mini" >btn</ATButton>
      <ATButton
        size="mini"
        type="warn">btn</ATButton>
    </ATButtonArea>
  </ATView>
</template>

<script>
export default {
    methods: {
        getUserInfo(e) {
            console.log(e)
        }
    }
}


</script>
