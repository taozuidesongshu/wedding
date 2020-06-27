<template>
  <!-- 消息页面 -->
  <div>
    <van-nav-bar title="消息" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item
        :title="item.title"
        :name="index"
        v-for="(item, index) in text"
        :key="index"
      >
      
        {{item.content}}
        <div>{{item.time}}</div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import axios from "axios";
import urlapi from "@/components/API/URLapi";
import { Toast } from "vant";
export default {
  data() {
    return {
      activeName: "1", //切换的标签
      text: []
    };
  },
  created() {
    axios({
      url: urlapi.inform,
      method: "get"
    })
      .then(res => {
        // console.log(res);
        if (res.data.status == 1) {
          this.text = res.data.data;
        } else {
          Toast.fail("获取资料失败");
        }
      })
      .catch(err => {
        Toast.fail(err + "获取资料失败");
      });
  },
  methods: {
    onClickLeft() {
      //页面回退
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
</style>