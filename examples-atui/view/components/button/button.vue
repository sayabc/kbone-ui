<template>
  <ATView class="page button js_show">
    <ATView class="page__hd">
      <h1 class="page__title">ATButton</h1>
      <p class="page__desc">按钮</p>
    </ATView>
    <ATButtonArea>
      <ATButton type="primary" >页面主要操作</ATButton>
      <ATButton
        type="primary"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"> getUserInfo </ATButton>
      <ATButton
        :loading="true"
        type="primary">Loading</ATButton>
      <ATButton
        :disabled="true"
        type="primary">禁止点击</ATButton>
    </ATButtonArea>
    <ATButtonArea direction="horizontal">
      <ATButton size="mini" >btn</ATButton>
      <ATButton
        size="mini"
        type="primary">btn</ATButton>
      <ATButton
        size="mini"
        type="warn">btn</ATButton>
    </ATButtonArea>

    <ATView class="page__bottom_tips">
      <p>ATButton 应用场景: 用户操作交互</p>
      <p>展现形式: 填充有明显导向用户操作的文案</p>
      <p>展现方式: 任何位置</p>
    </ATView>
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
