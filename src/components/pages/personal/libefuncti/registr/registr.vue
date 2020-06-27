<template>
  <!-- 婚姻登记 -->
  <div>
    <van-nav-bar left-text="返回" title="结婚登记" left-arrow @click-left="onClickLeft"/>
    <!-- 图片 -->
    <div class="titleimg" @click="to()">
      <img src="https://s2.ax1x.com/2019/01/28/kMiWAs.jpg" alt>
    </div>
    <!-- 结婚地点 -->
    <div class="regist-box" v-for="(item, index) in key" :key="index">
      <div class="regist-box-1">{{item.adress}}</div>
      <div class="regist-box-2">{{item.location}}</div>
      <div class="regist-box-3">{{item.working_time}}</div>
      <div style="border-bottom:1px solid #969696;"></div>
      <div class="regist-box-4">
        <a :href="`tel:+${item.telephone}`">{{item.telephone}}</a>
      </div>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import urlapi from "@/components/API/URLapi";
import { Toast } from "vant";
export default {
  data() {
    return {
      key: ""
    };
  },
  created() {
    axios({
      url: urlapi.checkin,
      method: "get"
    })
      .then(res => {
        if (res.data.data != null) {
          this.key = res.data.data;
        } else {
          Toast.success("暂无资料");
        }
      })
      .catch(err => {
        Toast.success("网络错误");
      });
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
/* 地址 */
.regist-box {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
}
.regist-box div {
  margin-bottom: 0.5rem;
}
.regist-box-1 {
  font-weight: bold;
}
.regist-box-2 {
  font-size: 0.7rem;
  color: #969696;
}
.regist-box-3 {
  font-size: 0.8rem;
  color: #757575;
}
.regist-box-4 {
  text-align: center;
}
</style>