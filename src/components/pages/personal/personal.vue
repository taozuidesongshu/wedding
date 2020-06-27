<template>
  <!-- 个人页面 -->
  <div style=" padding-bottom: 50px;background:#F2F3F7;">
    <!-- 头部 -->
    <div style="height:10rem;">
      <div class="pers-head">
        <!-- 头像容器-->
        <div class="pers-head-Avatar">
          <div class="Avatar-img" v-if="text.nameimg!=null">
            <img :src="text.nameimg">
          </div>
          <div class="Avatar-img" v-else>
            <img src="https://s1.ax1x.com/2018/12/16/FdVGlj.png">
          </div>

          <div class="Avatar-title" v-if="text.name==null||text.phonenumber==null">
            <div style=" font-weight: bold;">用户名</div>
            <div>手机号</div>
          </div>
          <div class="Avatar-title" v-else>
            <div>{{text.name}}</div>
            <div>{{text.phonenumber}}</div>
          </div>
          <!-- <div class="Avatar-div">
            <van-row type="flex" justify="center">
              <van-col span="6" style=" border-right: 1px solid #adabab;">
                <div>200</div>
                <div>我的朋友</div>
              </van-col>
              <van-col span="6" style=" border-right: 1px solid #adabab;">
                <div>200</div>
                <div>我的朋友</div>
              </van-col>
              <van-col span="6" style=" border-right: 1px solid #adabab;">
                <div>200</div>
                <div>我的朋友</div>
              </van-col>
              <van-col span="6">
                <div>我要</div>
                <div>发布</div>
              </van-col>
            </van-row>
          </div>-->
        </div>
        <!-- 头像容器 -->
        <!-- 设置 -->
        <div class="pers-tool">
          <van-row type="flex" justify="space-between">
            <van-col span="4">
              <van-icon name="more" @click="toclick('inform')"/>
            </van-col>
            <van-col span="4">
              <van-icon name="setting" @click="toclick('setting')"/>
            </van-col>
          </van-row>
        </div>
        <!-- 设置 -->
      </div>
    </div>
    <!-- 按钮 -->
    <div class="funbot">
      <van-list>
        <van-row gutter="20" style=" padding: 0.6rem;">
          <van-col span="12" v-for="(item,index) in images" :key="index" class="funbot-div">
            <!--  -->
            <div style="width: 1.5rem;height: 1.5rem;margin:0 auto">
              <!-- <van-icon name="@/assets/iocn.png"/> -->
              <img :src="item.img" width="100%">
            </div>
            <div class="funbot-text" @click="toclick(item.url)">
              <div class="funbot-tete-one">{{item.name}}</div>
              <div class="funbot-tete-tow">{{item.title}}</div>
            </div>
            <!--  -->
          </van-col>
        </van-row>
      </van-list>
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
      text: {},
      images: [
        {
          img: "https://s1.ax1x.com/2018/12/21/FrzIxA.png",
          name: "结婚任务",
          title: "记录结婚每一步",
          url: "task"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/FrzHqP.png",
          name: "结婚记账",
          title: "计算每笔进账",
          url: "Bookkeeping"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/Frz52d.png",
          name: "电子请柬",
          title: "分享精美相册",
          url: "Invitation"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/FrzOIS.png",
          name: "新婚贷款",
          title: "你结婚我买单",
          url: "loan"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/FrzjPg.png",
          name: "结婚预算",
          title: "为你合理分配",
          url: "budget"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/FsSCq0.png",
          name: "结婚登记",
          title: "登记处查询",
          url: "registr"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/Frzx2j.png",
          name: "结婚吉日",
          title: "选个好日子",
          url: "jiri"
        },
        {
          img: "https://s1.ax1x.com/2018/12/21/FsS9rq.png",
          name: "我是红娘",
          title: "选个好日子",
          url: "conn"
        }
      ]
    };
  },
  created() {
    axios({
      url: urlapi.sttingGet,
      method: "post",
      data: {
        user_id: this.$store.state.id
      }
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
        Toast.fail("获取资料失败" + err);
      });
  },
  methods: {
    toclick(url) {
      // console.log(url);
      //页面跳转
      this.$router.push({ name: url });
    }
  }
};
</script>

<style scoped>
.pers-head {
  position: relative;
  background: #12c2e9; /* fallback for old browsers */
  background-image: url("https://s1.ax1x.com/2018/12/16/FdiXrV.jpg");
}
/*头像容器*/
.pers-head-Avatar {
  width: 90%;
  height: 9rem;
  position: relative;
  left: 5%;
  top: 1rem;
  border-radius: 1rem;
}
.Avatar-img {
  border-radius: 6rem;
  overflow: hidden;
  width: 6rem;
  height: 6rem;
  position: relative;
  top: 1rem;
  left: 0.5rem;
}
.Avatar-img img {
  width: 100%;
}
/*用户名*/
.Avatar-title {
  text-align: center;
  position: relative;
  top: -4rem;
  font-size: 1rem;
  color: white;
}
/*用户信息*/
.Avatar-div {
  text-align: center;
  position: relative;
  top: -2rem;
  font-size: 0.5rem;
}
/*工具*/
.pers-tool {
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  color: white;
}
/*图标按钮*/
.funbot {
  margin: 0 auto;
  text-align: center;
  width: 90%;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.37);
}
.funbot-div {
  /* display: flex; */
  flex-direction: row;
  flex-wrap: nowrap;
  border-top: 1px solid #dedcdc;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.funbot-div:nth-last-of-type(8) {
  border-top: none;
}
.funbot-div:nth-last-of-type(7) {
  border-top: none;
}

.funbot-div div:nth-of-type(1) {
  text-align: center;
}
.funbot-div div:nth-of-type(2) {
  text-align: center;
}
.funbot-text {
  font-size: 0.6rem;
}
.funbot-text div {
  margin: 5px auto;
  text-align: left;
  padding: 0 0.2rem;
}
.funbot-tete-one {
  font-size: 0.8rem;
  /* font-weight: normal; */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
}
.funbot-tete-tow {
  overflow: hidden;
  color: rgb(197, 197, 197);
  white-space: nowrap;
  text-overflow: ellipsis;
}
.funbot-div:nth-child(odd) {
  border-right: 1px solid #dedcdc;
}
</style>
