<template>
  <div>
    <div class="weding-herd">婚礼说</div>
    <div class="weding-box">
      <!--  -->
      <div v-for="item in data" :key="item.id">
        <!--  -->
        <div class="wedding" @click="Jump(item)">
          <div class="wedd-portrait">
            <div class="wedd-portrait-left">
              <img v-lazy="item.nameimgs">
            </div>
            <div class="wedd-portrait-right">{{item.tname}}</div>
          </div>
          <div class="wedd-titel">
            <b>{{item.title}}</b>
          </div>
          <div class="wedd-body">{{item.intro}}</div>
          <van-row type="flex" justify="space-around">
            <van-col span="8">
              <div class="wedd-img">
                <img v-lazy="item.img1">
              </div>
            </van-col>
            <van-col span="8">
              <div class="wedd-img">
                <img v-lazy="item.img2">
              </div>
            </van-col>
            <van-col span="8">
              <div class="wedd-img">
                <img v-lazy="item.img3">
              </div>
            </van-col>
          </van-row>
        </div>
        <!--  -->
      </div>
      <!--  -->
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
      data: ""
    };
  },
  mounted() {
    // console.log("进入页面");
    axios({
      url: urlapi.wedding,
      method: "get"
    })
      .then(res => {
        // console.log(res.data);
        // console.log(res);
        if (res.data.status == 1) {
          this.data = res.data.data;
        } else {
          Toast.fail("获取资料失败");
        }
      })
      .catch(err => {
        Toast.fail("获取资料失败" + err);
      });
  },

  methods: {
    Jump(id) {
      // console.log(id);
      this.$router.push({ name: "wedding-data", params: { id } });
    }
  }
};
</script>

<style scoped>
.weding-herd {
  padding: 0.2rem 0.2rem 0.2rem 0.5rem;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
  background: #f73d52;
  color: white;
}
.weding-box {
  margin-bottom: 4rem;
}
.wedding {
  /* background: #f0f0f0; */
  padding: 0.5rem 0.2rem 0 0.2rem;
  margin: 0.5rem;
  border-radius: 10px;
}
/*昵称和头像*/
.wedd-portrait {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 1rem;
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
/*标题*/
.wedd-titel,
.wedd-body {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-top: 10px;
}
.wedd-titel {
  font-size: 18px;
}
.wedd-body {
  font-size: 14px;
  color: #606060;
}
/*图片*/
.wedd-img {
  overflow: hidden;
  height: 6rem;
  padding: 4px;
}
.wedd-img img {
  height: 6rem;
  width: 6rem;
  border-radius: 0.6rem;
}
</style>