<template>
  <div>
    <van-nav-bar left-text="返回" title="我是红娘" left-arrow @click-left="onClickLeft"/>
    <div class="contact-img" v-if="datas[0].contact!=null">
      <img :src="datas[0].contact" width="100%">
    </div>
    <div class="contact-img"></div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
import urlapi from "@/components/API/URLapi"; //api
export default {
  data() {
    return {
      datas: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {
    axios({
      url: urlapi.contact,
      method: "get"
    })
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          this.datas = res.data.data.filter(function(i) {
            //过滤掉删除数据Id为真的
            return i.id != 1;
          });
          console.log(this.datas);
        } else {
          Toast.fail("获取失败");
        }
      })
      .catch(err => {
        Toast.fail("请求失败");
      });
  }
};
</script>

<style scoped>
.contact-img {
  margin-bottom: 2rem;
}
</style>