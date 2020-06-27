<template>
  <div style=" overflow: hidden;">
    <!-- 贷款 -->
    <van-nav-bar left-text="返回" title="新婚贷款" left-arrow @click-left="onClickLeft"/>
    <!-- 切换 -->
    <div class="titleimg" @click="to()">
      <img src="https://s2.ax1x.com/2019/01/28/kMi27j.jpg" alt>
    </div>
    <van-row gutter="10" class="loan-row">
      <van-col span="12" v-for="(item, index) in newdata" :key="index" class="loan-clo">
        <a :href="item.url">
          <div class="loan-div">
            <img :src="item.img" alt>
          </div>
        </a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
      newdata: [
        {
          img: "https://s2.ax1x.com/2019/01/28/kMPLfP.jpg",
          url: "https://m.360jie.com.cn/"
        },
        {
          img: "https://s2.ax1x.com/2019/01/28/kMPqYt.jpg",
          title: "51人品贷",
          url: "http://m.51rp.com/#/?_mhk_=t4zyv9"
        },
        {
          img: "https://s2.ax1x.com/2019/01/28/kMPoeH.jpg",
          title: "51即可有",

          url: "http://www.51jiedao.cn/"
        },
        {
          img: "https://s2.ax1x.com/2019/01/28/kMPbFI.jpg",
          title: "金象钱包",

          url: "https://m.taoqian123.com/"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      //回退
      this.$router.go(-1);
    },
    to() {
      this.$router.push({ name: "contact" });
    }
  }
};
</script>

<style scoped>
.titleimg {
  width: 20rem;
  height: 10rem;

  overflow: hidden;
}
.titleimg img {
  width: 100%;
}
/*  */
.loan-row {
  font-size: 0.9rem;
  text-align: center;
  padding: 5px;
}
.loan-clo {
  margin-bottom: 10px;
}
.loan-div {
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
/* 文本容器 */
.loan-div img {
  overflow: hidden;
  width: 100%;
}
/*.loan-box {
  padding: 10px 10px 10px 0;
}
.loan-title {
  color: blue;
}
.loan-font {
  font-size: 0.6rem;
  color: #8f8f8f;
  overflow: hidden;
  white-space: nowrap;
} */
</style>