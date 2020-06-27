<template>
  <div>
    <div class="invdata"></div>
    <div class="botom-div">
      <div class="botom-div-on" @click="popup">设置</div>
      <div class="botom-div-to">发送</div>
      <!-- 弹出层 -->
      <van-popup v-model="show" position="bottom" :overlay="true" class="popup">
        <van-nav-bar left-text="返回" title="请帖信息" left-arrow @click-left="onClickLeft"/>
        <!-- 内容 -->
        <van-cell-group>
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
        </van-cell-group>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    popup() {
      this.show = true;
    },
    onClickLeft() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.botom-div {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  text-align: center;
}
.botom-div-on {
  flex: 1;
}
.botom-div-to {
  flex: 1;
}
/* 弹出 */
.popup {
  height: 100%;
}
</style>