<template>
  <div class="goods-info" @click="one(gooditem)">
    <div class="goods-image">
      <img v-lazy="goodsImage">
    </div>
    <!-- <div class="goods-name">{{goodsName}}</div> -->
    <div class="goods-name">
      <van-row type="flex" justify="space-between">
        <van-col span="10">{{goodsName}}</van-col>
        <van-col span="10" style="color:red; ">{{goodage}}</van-col>
      </van-row>
    </div>
    <!-- <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div> -->
    <div class="goods-price">
      <van-row type="flex" justify="space-between">
        <van-col span="10" class="goods-price-left">&nbsp{{goodsheight}}</van-col>
        <van-col span="10">{{goodsex}}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { toMoney } from "@/filter/moneyFilter"; //过滤器
export default {
  props: [
    "goodsImage",
    "goodsName",
    "goodsheight",
    "goodsex",
    "goodage",
    "gooditem"
  ],
  data() {
    return {};
  },
  filters: {
    moneyFilter(money) {
      return toMoney(money);
    }
  },
  methods: {
    one(data) {
      this.$router.push({ name: "shoppnew", params: { data } });
    }
  }
};
</script>

<style scoped>
.goods-image {
  overflow: hidden;

  height: 10rem;
}
.goods-image img {
  width: 100%;
}
.goods-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
}

.goods-price-left {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 0.5rem;
}
</style>