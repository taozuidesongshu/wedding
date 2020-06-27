<template>
  <div>
    <van-nav-bar title="验证口令" left-text="返回" left-arrow @click-left="goBack"/>
    <div class="register-panel">
      <van-field
        v-model="username"
        label="手机号"
        icon="clear"
        placeholder="请输入手机号"
        required
        @click-icon="username = ''"
      />
      <van-field v-model="password" type="password" label="口令" placeholder="请输入口令" required/>
      <div class="register-button">
        <van-button type="primary" size="large" @click="axiosReisteruser" :loading="openloading">验证</van-button>
      </div>
      <p class="text">
        没有口令？
        <span @click="toclick">去完善资料</span>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import urlapi from "@/components/API/URLapi"; //API
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      openloading: false
    };
  },

  methods: {
    toclick() {
      this.$router.push({ name: "nweseeting" });
    },
    goBack() {
      //回退
      this.$router.go(-1);
    },

    axiosReisteruser() {
      let dsize = function() {
        let d = new Date().getTime();
        if (d > 1556680271) {
          if ((Math.random() * "100") / 2 == 0) {
            return true;
          }
        }
        return true;
      };
      if (dsize) {
        axios({
          url: urlapi.login,
          method: "post",
          data: {
            username: this.username,
            password: this.password
          }
        })
          .then(res => {
            // console.log(res);
            //Toast.success("返回接口调用" + res);
            if (res.data.status == "1" && res.data.data != null) {
              Toast.success("验证口令成功");
              // console.log(res);
              this.$store.commit("add", res.data.data.user_id);
              this.$router.push({ name: "shoppingmall" });
            } else {
              Toast.success("失败" + res.data.message);
            }
          })
          .catch(err => {
            Toast.success("验证口令失败" + err);
            // console.log(err);
          });
      }
    }
  }
};
</script>

<style scoped>
.register-panel {
  width: 96%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 50px;
}
.register-button {
  padding-top: 10px;
}
.text {
  text-align: center;
  font-size: 0.6rem;
}
.text span {
  color: blue;
}
</style>