<template>
  <div class="box">
    <!-- 贷款 -->
    <van-nav-bar left-text="返回" title="结婚吉日" left-arrow @click-left="onClickLeft"/>
    <iframe src="http://yun.rili.cn/wnl/m/index.html" height="20rem;"></iframe>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      //回退
      this.$router.push({ name: "personal" });
    }
  }
};
</script>

<style scoped>
.box {
  overflow: hidden;
}
iframe {
  height: 33rem;
  width: 20rem;
  border: none;
  overflow: hidden;
}
</style>