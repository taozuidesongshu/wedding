<template>
  <div>
    <div class="contact-img">
      <img :src="datas[0].contact" width="100%">
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
      datas: ""
    };
  },
  created() {
    axios({
      url: urlapi.contact,
      method: "get"
    })
      .then(res => {
        if (res.status == 200) {
          this.datas = res.data.data.filter(function(i) {
            //过滤掉删除数据Id为真的
            return i.id != 2;
          });
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