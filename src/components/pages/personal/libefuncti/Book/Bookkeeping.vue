<template>
  <div>
    <van-nav-bar left-text="返回" title="结婚账本" left-arrow @click-left="onClickLeft"/>
    <!-- 内容 -->
    <div class="book-title">
      <div class="book-title-left" @click="exiet()">
        <div>已消费（元）</div>
        <div class="book-left-nubm">1000.00</div>
        <div class="book-title-left-jble">记笔账</div>
      </div>
      <div class="book-title-right" @click="exiet1()">
        <div>礼金收入（元）</div>
        <div class="book-left-nubm">1000.00</div>
        <div class="book-title-left-jbrig">记礼金</div>
      </div>
    </div>
    <!-- 提示 -->
    <div v-if="catlist!=null||gilist!=null">
      <div class="book-text">
        <div class="book-text-title">
          <div>支出</div>
          <div>￥{{catlist|zhichu}}</div>
        </div>
        <div class="book-text-lib" v-for="(item, index) in catlist" :key="index">
          <div class="book-text-lib-on">
            <img src="@/assets/bot.png">
          </div>
          <div class="book-text-lib-to">
            <div>{{item.category}}</div>
            <div></div>
          </div>
          <div class="book-text-lib-sw-red">￥{{item.sum}}</div>
        </div>
      </div>
      <div class="book-text">
        <div class="book-text-title">
          <div>收入</div>
          <div>￥{{gilist|shouru}}</div>
        </div>
        <div class="book-text-lib" v-for="(item, index) in gilist" :key="index">
          <div class="book-text-lib-on">
            <img src="@/assets/top.png">
          </div>
          <div class="book-text-lib-to">
            <div>{{item.guest}}</div>
            <div></div>
          </div>
          <div class="book-text-lib-sw-gren">￥{{item.gift}}</div>
        </div>
      </div>
    </div>
    <div class="book-text" v-else>
      <div class="book-tishi-title">
        <h3>hi，通过结婚账本，你可以</h3>
        <div>
          <van-icon class="book-tishi-title-ioc" name="success"/>随时随地记录结婚开销
        </div>
        <div>
          <van-icon class="book-tishi-title-ioc" name="success"/>绑定另一半，同步管理账本
        </div>
        <div>
          <van-icon class="book-tishi-title-ioc" name="success"/>掌握开销动态，合理控制预算
        </div>
      </div>
    </div>

    <!-- <div class="book-text">
      <div class="book-text-title">
        <div>收入</div>
        <div>￥10000</div>
      </div>
      <div class="book-text-lib">
        <div class="book-text-lib-on">
          <img src="@/assets/top.png">
        </div>
        <div class="book-text-lib-to">
          <div>张翰</div>
          <div>2018.12.23拍婚照</div>
        </div>
        <div class="book-text-lib-sw-gren">￥100000.00</div>
      </div>
    </div>-->
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :overlay="true" class="book-popup">
      <div class="book-popup-body">
        <div class="popup-title">消费支出</div>
        <div class="popup-input">
          ￥
          <input
            type="text"
            placeholder="0.00"
            v-model="sum"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
          >
        </div>
        <!-- 单选框 -->
        <van-tabs v-model="active">
          <form>
            <van-tab v-for="(item, index) in tab" :key="index">
              <div slot="title">{{item.lib}}</div>
              <!--  -->
              <van-row gutter="0">
                <van-col span="8" v-for="(it, index) in item.input" :key="index">
                  <label>
                    <input
                      name="sex"
                      type="radio"
                      v-model="category"
                      :value="it"
                      onkeyup="this.value=this.value.replace(/\D/g,'')"
                    >
                    <span>{{it}}</span>
                  </label>
                </van-col>
              </van-row>
              <!--  -->
            </van-tab>
          </form>
        </van-tabs>

        <!-- 备注 -->
        <div class="popup-textarea">
          <textarea rows="5" class="popup-textarea" placeholder="备注"></textarea>
        </div>
        <!-- 底部按钮 -->
        <div class="popup-bottom">
          <div>
            <van-button size="large" @click="exiet()">取消</van-button>
          </div>
          <div>
            <van-button size="large" type="danger" @click="categorys()">保存</van-button>
          </div>
        </div>
      </div>
    </van-popup>
    <!-- 弹出层1 -->
    <van-popup v-model="show1" position="bottom" :overlay="true" class="book-popup">
      <div class="book-popup-body">
        <div class="popup-title">礼金收入</div>
        <div class="popup-input" style="color:green;">
          ￥
          <input
            type="text"
            placeholder="0.00"
            v-model="gift"
            onkeyup="this.value=this.value.replace(/\D/g,'')"
          >
        </div>
        <!-- 送礼人 -->
        <van-cell-group>
          <van-field v-model="guest" placeholder="请输入送礼者姓名"/>
        </van-cell-group>
        <!-- 备注 -->
        <div class="popup-textarea">
          <textarea rows="5" class="popup-textarea" placeholder="备注"></textarea>
        </div>
        <!-- 底部按钮 -->
        <div class="popup-bottom">
          <div>
            <van-button size="large" @click="exiet1()">取消</van-button>
          </div>
          <div>
            <van-button size="large" type="danger" @click="incomes()">保存</van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import urlapi from "@/components/API/URLapi"; //api
import { Toast } from "vant";
export default {
  data() {
    return {
      gift: "", //礼金
      guest: "", //送礼人
      category: "", //支出消费名称
      sum: "", //支付消费金额
      show: false, //弹出框1
      show1: false, //弹出框2
      active: "1", //选项卡
      marrige: "", //单选框选择内容
      tab: [
        //单选按钮
        {
          lib: "拍婚照",
          input: ["拍婚照"]
        },
        {
          lib: "办婚礼",
          input: [
            "办婚礼",
            "婚宴酒店",
            "婚车",
            "婚礼策划",
            "婚礼摄影",
            "婚礼摄像",
            "主持司仪",
            "试装跟妆",
            "花艺甜品"
          ]
        },
        {
          lib: "礼服西服",
          input: ["礼服西服", "新娘礼服", "伴娘礼服", "新郎西服", "伴郎西服"]
        },
        {
          lib: "购婚品",
          input: [
            "购婚品",
            "婚房布置",
            "婚鞋箱包",
            "饰品装饰",
            "内衣胸贴",
            "喜糖喜酒",
            "婚礼百货",
            "婚戒珠宝",
            "婚庆床品"
          ]
        },
        {
          lib: "其他",
          input: ["其他"]
        }
      ],
      catlist: [], //记账列表
      gilist: [] //礼金列表
    };
  },
  created() {
    if (this.$store.state.id != null) {
      this.categorylists();
    } else {
      Toast.fail("请验证");
      this.$router.push({ name: "personal" });
    }
  },
  filters: {
    zhichu: function(mon) {
      let qian = null;
      for (const iterator of mon) {
        qian += parseInt(iterator.sum);
      }
      console.log(qian);

      return qian;
    },
    shouru: function(mos) {
      let qian = null;
      for (const iterator of mos) {
        qian += parseInt(iterator.gift);
      }
      return qian;
    }
  },
  methods: {
    incomes() {
      //收入提交
      axios({
        url: urlapi.gift,
        method: "post",
        data: {
          user_id: this.$store.state.id,
          gift: this.gift, //礼金
          guest: this.guest //送礼人
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            this.exiet1();
            this.categorylists();
          } else {
            Toast.fail("获取资料失败");
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
    },
    categorys() {
      //记账提交
      axios({
        url: urlapi.category,
        method: "post",
        data: {
          user_id: this.$store.state.id,
          category: this.category, //支出消费名称

          sum: this.sum //支付消费金额
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            this.exiet();
            this.categorylists();
          } else {
            Toast.fail("获取资料失败");
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
    },
    categorylists() {
      //记账列表
      axios({
        url: urlapi.categorylist,
        method: "post",
        data: {
          user_id: this.$store.state.id
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            this.catlist = res.data.data;
          } else {
            Toast.fail("获取资料失败");
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
      //礼金列表
      axios({
        url: urlapi.giftlist,
        method: "post",
        data: {
          user_id: this.$store.state.id
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.status == 1) {
            this.gilist = res.data.data;
          } else {
            Toast.fail("获取资料失败");
          }
        })
        .catch(err => {
          Toast.fail("获取资料失败" + err);
        });
    },
    exiet() {
      //推出方法
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    exiet1() {
      //推出方法

      if (this.show1) {
        this.show1 = false;
      } else {
        this.show1 = true;
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.book-title {
  display: flex;
  background: white;
}
.book-title-left,
.book-title-right {
  flex: 1;
  height: 8rem;
  text-align: left;
  color: white;
  margin: 1rem 0.5rem;

  border-radius: 5px;
  font-weight: bold;
}
.book-title-left-jble {
  width: 4rem;
  height: 1.5rem;
  border-radius: 1rem;
  background: white;
  line-height: 1.5rem;
  color: #fe5723;
  text-align: center;
  box-shadow: 0px 2px 10px 1px #fe5723;
}
.book-title-left-jbrig {
  width: 4rem;
  height: 1.5rem;
  border-radius: 1rem;
  background: white;
  line-height: 1.5rem;
  color: #fe9f00;
  text-align: center;
  box-shadow: 0px 2px 10px 1px #fe9f00;
}
.book-left-nubm {
  font-size: 1.2rem;
  margin: 0.5rem;
}
.book-title-left {
  background: #fe5723;
  box-shadow: 0px 1px 5px 1px #fe5723;
}
.book-title-right {
  background: #fe9f00;
  box-shadow: 0px 1px 5px 1px #fe9f00;
}
.book-title-left div,
.book-title-right div {
  margin: 0.8rem 1rem 0 1rem;
}
/* 简介 */
.book-text {
  text-align: left;
}
.book-tishi-title {
  width: 75%;
  margin: 0 auto;
}
.book-tishi-title div {
  line-height: 2rem;
}
.book-tishi-title-ioc {
  color: white;
  background: red;
  border-radius: 2rem;
  margin-right: 0.5rem;
}
/* 任务 */
.book-text-title {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  background: #f4f8f7;
}
.book-text-lib {
  display: flex;
  padding: 0.2rem 0.5rem 0.2rem 0;
  font-size: 0.8rem;
  background: white;
}
.book-text-lib-on {
  flex: 2;
  padding: 0.5rem;
}
.book-text-lib-on img {
  width: 90%;
  border-radius: 5rem;
}
.book-text-lib-to {
  flex: 7;
  text-align: left;
  padding-left: 10px;
  line-height: 2rem;
}

.book-text-lib-sw-red {
  flex: 2;
  color: red;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
}
.book-text-lib-sw-gren {
  flex: 2;
  color: green;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
}
/* 输入框 */
.popup-textarea {
  margin-top: 2rem;
}
/* 弹出层 */
.book-popup {
  height: 100%;
  overflow: hidden;
}
.book-popup-body {
  position: relative;
  height: 100%;
}
.popup-title {
  text-align: center;
  height: 3rem;
  line-height: 3rem;
}
.popup-input {
  font-size: 1.2rem;
  border-bottom: 1px solid red;
  color: red;
  margin: 1rem 0;
  padding: 0 1rem;
}
.popup-input input {
  border: none;
  padding: 0.8rem 0;
}
.popup-textarea {
  width: 100%;
  resize: none;
  border: none;
  font-size: 0.8rem;
  color: #9a9a9a;
  padding: 0 1rem;
}
.popup-bottom {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
}
.popup-bottom div {
  flex: 1;
}
/* 单选按钮 */
.van-col {
  font-size: 0.8rem;
  padding: 15px;
}
label {
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
}
label input {
  display: none;
}
label span {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  height: 30px;
  margin: auto;
  text-align: center;
  padding: 0.2rem;
  line-height: 30px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  font-size: 0.6rem;
  overflow: hidden;
}

label input:checked + span {
  border-color: #f73d52;
  background: #f73d52;
  color: white;
  z-index: -1;
}
</style>