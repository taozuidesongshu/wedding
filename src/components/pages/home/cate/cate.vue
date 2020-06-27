<template>
  <div>
    <van-nav-bar left-text="返回" :title="datas.modulename" left-arrow @click-left="onClickLeft"/>
    <div class="cont">
      <img :src="datas.content" width="100%">
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
import urlapi from "@/components/API/URLapi"; //api
export default {
  data() {
    return {
      datas: null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },

  created() {
    // console.log(this.$route.params.id);
    if (this.$route.params.id) {
      let to = this.$route.params.id;
      axios({
        url: urlapi.buttondetails,
        method: "post",
        data: {
          id: to
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            this.datas = res.data.data;
          } else {
            Toast.fail("获取失败" + res.data.message);
          }
        })
        .catch(err => {
          Toast.fail("请求失败" + err);
        });
    }
  }
};
</script>

<style scoped>
</style>