<template>
  <!-- 结婚预算 -->
  <div>
    <van-nav-bar left-text="返回" title="结婚预算" left-arrow @click-left="onClickLeft"/>
    <div class="budget-box">
      <img src="@/assets/ioc.jpg" alt>
      <div class="budget-input">
        <input
          type="text"
          v-model="money"
          onkeyup="this.value=this.value.replace(/\D/g,'')"
          placeholder="请输入预算金额"
        >
      </div>
    </div>
    <div class="budget-bottom">
      <van-button
        round
        type="danger"
        size="large"
        style="box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);"
        @click="showsss"
      >开始计算</van-button>
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="bottom" :overlay="true" class="budget-popup">
      <!-- 头部 -->
      <van-nav-bar left-text="返回" left-arrow @click-left="showsss"/>
      <!-- 婚前消费 -->
      <div class="budgetcont">
        <div class="budgetcont-title">婚前消费</div>
        <!--  -->
        <div class="budgetcont-libo">
          <div class="libo-1">
            <img src="https://s2.ax1x.com/2019/01/30/klM0C8.png" height="100%">
          </div>
          <div class="libo-2">珠宝首饰</div>
          <div class="libo-3">￥{{money|jinqian(0.1)}}</div>
        </div>
        <div class="budgetcont-libo">
          <div class="libo-1">
            <img src="https://s2.ax1x.com/2019/01/30/klMJud.png" height="100%">
          </div>
          <div class="libo-2">婚纱摄影</div>
          <div class="libo-3">￥{{money|jinqian(0.03)}}</div>
        </div>
        <!--  -->
      </div>
      <!-- 婚礼消费 -->
      <div class="budgetcont">
        <div class="budgetcont-title">婚前消费</div>
        <!--  -->
        <div class="budgetcont-libo" v-for="(item, index) in consu" :key="index">
          <div class="libo-1">
            <img :src="item.img" height="100%">
          </div>
          <div class="libo-2">{{item.name}}</div>
          <div class="libo-3">￥{{money|jinqian(item.gives)}}</div>
        </div>

        <!--  -->
      </div>
      <!-- 婚后消费 -->
      <div class="budgetcont">
        <div class="budgetcont-title">婚后消费</div>
        <!--  -->
        <div class="budgetcont-libo">
          <div class="libo-1">
            <img src="https://s2.ax1x.com/2019/01/30/klMtHI.png" height="100%">
          </div>
          <div class="libo-2">蜜月旅行</div>
          <div class="libo-3">￥{{money|jinqian(0.1)}}</div>
        </div>

        <!--  -->
      </div>
      <!--  -->
      <div
        class="budgetcont-title"
        style="font-size:0.6rem; text-align:center;"
      >为了方便你的查看，显示数值小数位数自动四舍五入哦~</div>
      <!--  -->
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false, //弹出层
      money: null, //填写金额
      consu: [
        {
          name: "请帖喜糖",
          gives: 0.04,
          img: "https://s2.ax1x.com/2019/01/30/klMaUP.png"
        },
        {
          name: "婚礼礼服",
          gives: 0.03,
          img: "https://s2.ax1x.com/2019/01/30/klMUEt.png"
        },
        {
          name: "婚礼跟妆",
          gives: 0.01,
          img: "https://s2.ax1x.com/2019/01/30/klMB8S.png"
        },
        {
          name: "婚礼摄像",
          gives: 0.02,
          img: "https://s2.ax1x.com/2019/01/30/klMd4f.png"
        },
        {
          name: "婚礼摄影",
          gives: 0.02,
          img: "https://s2.ax1x.com/2019/01/30/klM13D.png"
        },
        {
          name: "婚礼司仪",
          gives: 0.03,
          img: "https://s2.ax1x.com/2019/01/30/klM3ge.png"
        },
        {
          name: "婚礼租凭",
          gives: 0.03,
          img: "https://s2.ax1x.com/2019/01/30/klM8jH.png"
        },
        {
          name: "婚礼策划",
          gives: 0.17,
          img: "https://s2.ax1x.com/2019/01/30/klMl9O.png"
        },
        {
          name: "婚宴酒店",
          gives: 0.43,
          img: "https://s2.ax1x.com/2019/01/30/klMYDA.png"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      //回退
      this.$router.go(-1);
    },
    showsss() {
      if (this.money != null) {
        if (this.show) {
          this.show = false;
        } else {
          this.show = true;
        }
      } else {
        Toast.fail("请填写金额");
      }
    }
  },
  filters: {
    //过滤器
    jinqian: function(value, propo) {
      let give = value * propo;
      return parseInt(give);
    }
  }
};
</script>

<style scoped>
.budget-box {
  height: 22rem;
  position: relative;
}
.budget-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 4rem 4rem;
}
.budget-input {
  position: absolute;
  bottom: 1rem;
  left: 20%;
}
.budget-input input {
  border-radius: 2rem;
  height: 40px;
  border: 1px solid rgb(148, 148, 148);
  text-align: center;
}
.budget-bottom {
  width: 10rem;
  margin: 2rem auto;
}
/* 弹出层 */
.budget-popup {
  height: 100%;
}
.budgetcont-title {
  font-size: 0.8rem;
  color: rgb(117, 117, 117);
  height: 2rem;
}
.budgetcont {
  padding: 0.5rem 0 0.5rem 1rem;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}
.budgetcont-libo {
  display: flex;
  height: 3rem;
  line-height: 3rem;
}
.libo-1 {
  flex: 2;
  overflow: hidden;
  text-align: center;
  padding: 10px 0;
}
.libo-2 {
  flex: 4;
  border-top: 1px solid rgb(172, 172, 172);
  /* font-weight: bold; */
  font-size: 0.8rem;
}
.libo-3 {
  flex: 4;
  border-top: 1px solid rgb(172, 172, 172);
  color: rgb(226, 0, 0);
  /* font-weight: bold; */
  font-size: 0.8rem;
}
</style>