<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack"/>
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        @click-icon="username = ''"
      />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
      <van-field v-model="passwords" type="password" label="重复密码" placeholder="再次输入密码" required/>
      <div class="register-button">
        <van-button
          type="primary"
          size="large"
          @click="axiosReisteruser"
          :loading="openloading"
        >马上注册</van-button>
      </div>
      <p class="text">
        已有账号？
        <span @click="toclick">去登陆</span>
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
      passwords: "",
      openloading: false
    };
  },
  methods: {
    toclick() {
      this.$router.push({ name: "Login" });
    },
    goBack() {
      this.$router.go(-1);
    },
    axiosReisteruser() {
      Toast.success("进入函数");
      axios({
        url: urlapi.register,
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.status == "0") {
            Toast.success(res.data.message);
          } else {
            Toast.success("注册成功");
            this.$router.push({ name: "Login" });
          }
        })
        .catch(err => {
          Toast.success("注册失败");
          // console.log(error);
          this.openLoading = false;
        });
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