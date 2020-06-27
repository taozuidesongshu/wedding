<template>
  <div>
    <div class="main-div">
      <router-view/>
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)">
      <van-tabbar-item icon="shop" :to="{name:'shoppingmall'}">首页</van-tabbar-item>
      <van-tabbar-item icon="records" :to="{name:'Wedding'}">婚礼说</van-tabbar-item>
      <van-tabbar-item icon="chat-o" :to="{name:'contact'}">联系我们</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20" :to="{name:'personal'}">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    changeTabbar(active) {
      // console.log(active);
    }
  }
};
</script>

<style scoped>
.van-tabbar-item--active {
  color: rgb(247, 61, 82) !important;
}
</style>