<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="2">
          <van-icon name="search" class="search-ioca"/>
        </van-col>
        <van-col span="3">
          <span style="font-weight: bold;font-size:16px;">搜索</span>
        </van-col>
        <van-col span="16">
          <div type="text" class="search-input" @click="tow()"></div>
        </van-col>
        <!-- <van-col span="5">
          <van-button size="mini">搜索</van-button>
        </van-col>-->
      </van-row>
      <!--  -->
    </div>
    <!-- 轮播 -->
    <div class="swiper-area">
      <van-swipe :autoplay="4000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <a :href="banner.url">
            <img :src="banner.img">
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--图标按钮-->
    <div class="type-bar">
      <div class="type-bar-div">
        <div
          v-for="(data,index) in category"
          :key="index"
          class="type-bar-div-lilb"
          @click="cate(data.id)"
        >
          <img v-lazy="data.image" width="80%">
          <span>{{data.name}}</span>
        </div>
      </div>
      <div class="type-bar-div">
        <div
          v-for="(data,index) in category2"
          :key="index"
          class="type-bar-div-lilb"
          @click="cate(data.id)"
        >
          <img v-lazy="data.image" width="80%">
          <span>{{data.name}}</span>
        </div>
      </div>
    </div>

    <!-- 广告条 -->
    <!-- <div>
      <img v-lazy="adbanner" width="100%">
    </div>-->
    <!-- 横向滑动商品 -->
    <!-- <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperoption">
          <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price|moneyFilter}}(￥{{item.mallPrice|moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>-->
    <!-- 模版 -->
    <!-- <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
                  <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>-->
    <!-- 热卖 -->
    <div class="hot-area">
      <div class="hot-title"></div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="30">
            <van-col
              v-for="(item,index) in hotGoods"
              :key="index"
              style=" padding: 5px;"
              class="floats"
            >
              <goodsinfo
                :goodsImage="item.nameimg"
                :goodsName="item.name"
                :goodsheight="item.height"
                :goodsex="item.sex"
                :goodage="item.age"
                :gooditem="item"
              ></goodsinfo>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper"; //滚动插件
import floorComponent from "@/components/component/floorComponent.vue";
import goodsinfo from "@/components/component/goodslnfo.vue"; //热销组建
import urlapi from "@/components/API/URLapi"; //api
import { toMoney } from "@/filter/moneyFilter"; //过滤器
import { Toast } from "vant";
export default {
  data() {
    return {
      swiperoption: {
        //横向滑动商品
        slidesPerView: 3
      },
      bannerPicArray: [],
      category: [
        {
          image: "https://s1.ax1x.com/2018/12/21/FrzTKI.png",
          name: "商家入驻",
          id: 10
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/FrzqVf.png",
          name: "婚品购置",
          id: 9
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/Frz7rt.png",
          name: "婚车预定",
          id: 8
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/FrzLa8.png",
          name: "婚纱摄影",
          id: 7
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/FrzvGQ.png",
          name: "二手闲置",
          id: 6
        }
      ],
      category2: [
        {
          image: "https://s1.ax1x.com/2018/12/21/FsSiZV.png",
          name: "婚纱礼服",
          id: 5
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/FsSpMn.png",
          name: "司仪跟妆",
          id: 4
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/Frzzxs.png",
          name: "婚礼策划",
          id: 3
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/FsSFaT.png",
          name: "婚房布置",
          id: 2
        },
        {
          image: "https://s1.ax1x.com/2018/12/21/FsSkIU.png",
          name: "婚宴酒席",
          id: 1
        }
      ],
      adbanner: "",
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: [],
      floorName: {},
      hotGoods: [] //相亲列表
    };
  },
  methods: {
    tow() {
      //跳转到搜索
      this.$router.push({ name: "search" });
    },
    cate(id) {
      //功能按钮
      this.$router.push({ name: "cate", params: { id } });
    }
  },
  filters: {
    moneyFilter(money) {
      //过滤器
      return toMoney(money);
    }
  },
  components: {
    //组件
    swiper,
    swiperSlide,
    floorComponent,
    goodsinfo
  },
  created() {
    axios({
      // url:
      //   "https://www.easy-mock.com/mock/5bdab4d0f1739457034b9487/example/index",
      url: urlapi.banner,
      method: "get"
    })
      .then(res => {
        // console.log(res);
        if (res.status == 200) {
          this.bannerPicArray = res.data.data;
          // this.category = response.data.data.category;
        }
      })
      .catch(error => {});

    //钩子函数
    axios({
      url: urlapi.home,
      method: "get"
    })
      .then(res => {
        // console.log(res);
        if (res.status == 200) {
          this.hotGoods = res.data.data;
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
.search-ioca {
  padding-top: 0.7rem;
  padding-left: 0.5rem;
  color: #f73d52;
}
.search-bar {
  height: 2rem;

  line-height: 2rem;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-radius: 1rem;
  border: 1px solid #ffffff !important ;
  background: #dfdede;
  color: #ffffff;
  margin-top: 0.5rem;
}
.swiper-area {
  width: 20rem;
  clear: both;
  text-align: center;
}
.swiper-area img {
  border-radius: 2rem;
  width: 95%;
}
.type-bar {
  background: #ffffff;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
}
.type-bar-div {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar-div-lilb {
  padding: 0.3rem;
  font-size: 10px;
  text-align: center;
}
.type-bar-div-lilb img {
  box-shadow: 0px 1px 3px #e0e0e0;
  border-radius: 5rem;
}

.recommend-area {
  background: #ffffff;
  margin-top: 0.3rem;
}
.recommend-title {
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eeeeee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eeeeee;
  font-size: 12px;
  text-align: center;
}
/*热卖*/
.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
/*热卖*/
.hot-goods {
  background: #f0f0f0;
  padding-bottom: 50px;
  overflow: hidden;
}
.floats:nth-child(even) {
  float: right;
  margin-right: 1rem;
  width: 45%;
}
.floats:nth-child(odd) {
  margin-left: 1rem;
  width: 45%;
}
</style>