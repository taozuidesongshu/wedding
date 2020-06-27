<template>
  <div>
    <van-nav-bar title="汉中相亲" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!--  -->
    <div class="shoppnew-box">
      <div class="shopp-head">
        <div class="shopp-img">
          <img :src="key.nameimg">
        </div>
        <div class="shopp-name">
          <div>{{key.name}}--{{key.sex}}</div>
          <div>
            <van-tag round type="danger">{{key.age}}</van-tag>
            <van-tag round type="danger">{{key.location}}</van-tag>
          </div>
        </div>
      </div>
      <!-- 个人资料 -->
      <div class="shopp-div">
        <div class="shopp-div-title">
          <span class="title-border"></span>个人资料
          <span style="color:#9a9a9a;">(ID:xxxxxxxxxx)</span>
        </div>
        <div>
          <van-tag round type="danger" color="#f3b1e1">{{key.height}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.weight}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.singz}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.blood}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.natia}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.education}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.location}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.marrige}}</van-tag>
          <van-tag round type="danger" color="#f3b1e1">{{key.housing}}</van-tag>
        </div>
      </div>
      <!-- 联系方式 -->
      <div class="shopp-div">
        <div class="shopp-div-title">
          <span class="title-border"></span>联系方式
        </div>
        <div>
          <span class="shopp-div-box" style="background:#F68791; color:white;">点击联系专属红娘为你牵线</span>
        </div>
      </div>
      <!-- 自我介绍 -->
      <div class="shopp-div">
        <div class="shopp-div-title">
          <span class="title-border"></span>自我介绍
        </div>
        <div>
          {{key.lntroduc}}
          <!-- <span
            class="shopp-div-box"
            style="background:#F68791; color:white;"
          >点击联系专属红娘为你牵线</span>-->
        </div>
      </div>
      <!-- 择偶条件 -->
      <!-- <div class="shopp-div">
        <div class="shopp-div-title">
          <span class="title-border"></span>择偶条件
        </div>
        <div>
          <span class="shopp-div-box" style="background:#a9d5f5; color:white;">点击联系专属红娘为你牵线</span>
        </div>
      </div>-->
      <!-- 其他要求 -->
      <div class="shopp-div">
        <div class="shopp-div-title">
          <span class="title-border"></span>其他要求
        </div>
        <div>
          <span class="shopp-div-box" style="background:#d0cece; color:white;">点击联系专属红娘为你牵线</span>
        </div>
      </div>
      <!-- 其他要求 -->
      <div class="shopp-Matc">
        <div>
          <img
            src="https://is2-ssl.mzstatic.com/image/thumb/Purple127/v4/73/fd/47/73fd47e3-3d60-e7df-b3ac-2e25ca279ffc/source/512x512bb.jpg"
            width="100%"
          >
        </div>
        <div style="margin-left: 10px;">
          <div>专属红娘</div>
          <div style="font-size: 0.6rem; color:;">对TA感兴趣，联系红娘为你牵线</div>
        </div>
        <div>
          <van-button round type="danger" class="shopp-Matc-bottom" size="small">立即联系</van-button>
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: ""
    };
  },
  mounted() {
    //获取详细参数
    let routerparams = this.$route.params.data;
    this.key = routerparams;
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.shoppnew-box {
  background: #f7f7f7;
  height: 100%;
  font-family: "Roboto", arial, sans-serif;
}
.shopp-head {
  background: url(https://s2.ax1x.com/2019/01/30/klwi6I.jpg); /* fallback for old browsers */

  padding: 0.5rem 1rem;
}
.shopp-img {
  width: 5rem;
  border-radius: 5px;
  overflow: hidden;
}
.shopp-img img {
  width: 100%;
  border-radius: 0.5rem;
}
/*  */
.shopp-div {
  margin-top: 1rem;
  background: white;
  padding: 0.5rem 1rem;
}
.shopp-div-title {
  border-left: 4px solid red;
  margin-bottom: 0.5rem;
}
.shop-div-tap {
  margin-right: 0.5rem;
}
/*  */
.shopp-div-box {
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
  font-size: 0.7rem;
  border-radius: 5rem;
}
.shopp-Matc {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background: white;
  margin-top: 0.5rem;
}
.shopp-Matc div:nth-of-type(1) {
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
}
.shopp-Matc div:nth-of-type(2) {
  flex: 3;
}
.shopp-Matc div:nth-of-type(3) {
  flex: 1.5;
  position: relative;
}
.shopp-Matc-bottom {
  position: absolute;
  bottom: 0px;
  left: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.22);
  background: #ff449a;
}
</style>