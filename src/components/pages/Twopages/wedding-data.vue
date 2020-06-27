<template>
  <div style="overflow: hidden;">
    <!--  -->
    <van-nav-bar title="婚礼说" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="wedding">
      <div class="wedd-titel">
        <b>{{content.title}}</b>
      </div>
      <div class="wedd-portrait">
        <div class="wedd-portrait-left">
          <img v-lazy="content.nameimgs">
        </div>
        <div class="wedd-portrait-right">{{content.tname}}</div>
      </div>
      <div class="content">
        <div class="show-content-free">
          <div v-html="content.content" class="cont-img" ref="abc"></div>
          <!-- {{content.content}} -->
          <!---->
        </div>
        <!---->
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script>
import axios from "axios";
import urlapi from "@/components/API/URLapi";
import { Toast } from "vant";
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    onClickLeft() {
      //页面回退
      this.$router.go(-1);
    }
  },
  mounted() {
    //获取wedding页面的传参，并且发出请求
    let routerParams = this.$route.params.id;
    axios({
      url: urlapi.weddingData,
      method: "post",
      data: {
        id: routerParams.id
      }
    })
      .then(res => {
        // console.log(res);
        if (res.data.status == 1) {
          this.content = res.data.data;
        } else {
          Toast.fail("获取资料失败");
        }
      })
      .catch(err => {
        Toast.fail("获取资料失败" + err);
      });
    console.log(this.$refs);
  }
};
</script>

<style scoped>
img {
  width: 10rem;
}
.wedding {
  /* background: #f0f0f0; */
  margin: 0.5rem;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
}

/*昵称和头像*/
.wedd-portrait {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 1rem;
  margin: 0.5rem 0;
}
.wedd-portrait-left {
  border-radius: 1rem;
  overflow: hidden;
  width: 1rem;
}
.wedd-portrait-left img {
  width: 100%;
  height: 100%;
}
.wedd-portrait-right {
  line-height: 1rem;
  margin-left: 0.5rem;
  font-size: 12px;
}
/*正文*/
.content {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  color: #2f2f2f;
}
.cont-img {
  width: 100%;
}
</style>