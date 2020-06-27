<template>
  <div>
    <van-nav-bar title="搜索结果" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <div class="hot-area">
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index" style=" padding: 5px;">
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
  </div>
</template>

<script>
import goodsinfo from "@/components/component/goodslnfo.vue"; //热销组建
export default {
  data() {
    return {
      hotGoods: ""
    };
  },
  mounted() {
    //获取页面传参
    // console.log(this.$route.params.text);
    this.hotGoods = this.$route.params.text;
  },
  methods: {
    onClickLeft() {
      //页面回退
      this.$router.go(-1);
    }
  },
  components: {
    goodsinfo
  }
};
</script>

<style scoped>
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
</style>