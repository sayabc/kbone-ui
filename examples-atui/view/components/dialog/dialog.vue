<template>
  <ATView class="page dialog js_show">
    ddd
    <ATView class="page__hd">
      <h1 class="page__title">ATDialog</h1>
      <p class="page__desc">弹窗提示</p>
    </ATView>
    <ATView class="page__bd page__bd_spacing">
      <ATButton @click="openDialog">一个按钮</ATButton>
      <ATButton @click="openDualDialog">两个按钮</ATButton>
    </ATView>
    <ATDialog
      v-model="diaShow"
      :buttons="diaBtn"
      title="Dialog Title here"
      desc="提示信息可以单行、多行，控制住"
    />
    <ATDialog
      v-model="dualShow"
      :buttons="dualBtn"
      title="Dialog Title here"
      desc="提示信息可以单行、多行，控制住"
    />
    <ATView class="page__bottom_tips">
      <p>ATDialog 应用场景: 操作需要用户确认或者取消、需要用户输入信息</p>
      <p>展现形式: 标题+内容+按钮(确认)、标题+内容+按钮(主操作+辅操作)、内容+按钮(知道了)、标题+内容+按钮(知道了)；内容可单行可多行，尽量简短</p>
    </ATView>
  </ATView>
</template>

<script>
export default {
    data() {
        return {
            diaShow: false,
            dualShow: false,
            diaBtn: [
                {
                    text: '确定',
                    click: () => {
                        console.log('确定')
                        this.diaShow = false
                    }
                }
            ],
            dualBtn: [
                {
                    text: '确定',
                    click: () => {
                        console.log('确定')
                        this.dualShow = false
                    }
                },
                {
                    text: '取消',
                    click: () => {
                        console.log('取消')
                        this.dualShow = false
                    }
                },
            ]
        }
    },
    methods: {
        openDialog() {
            this.diaShow = true
        },
        openDualDialog() {
            this.dualShow = true
        }
    },
}
</script>
