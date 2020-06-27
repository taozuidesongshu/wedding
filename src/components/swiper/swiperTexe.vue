<template>
    <div>
        <swiper class="swiper" :options="swiperoption">
            <swiper-slide class="text">
                    <div>
                        direction：'vertical'设置竖排显示

slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。

freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。

只要掌握好这些属性，其实做出文本滑动效果是非常简单的。direction：'vertical'设置竖排显示

slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。

freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。

只要掌握好这些属性，其实做出文本滑动效果是非常简单的。direction：'vertical'设置竖排显示

slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。

freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。

只要掌握好这些属性，其实做出文本滑动效果是非常简单的。direction：'vertical'设置竖排显示

slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。

freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。

只要掌握好这些属性，其实做出文本滑动效果是非常简单的。direction：'vertical'设置竖排显示

slidesPerView:'auto' 设置同屏显示的数量，默认为1，这里使用auto是随意的意思。

freeMode:true 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。

mousewheel:true 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。

只要掌握好这些属性，其实做出文本滑动效果是非常简单的。
                    </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      swiperoption: {
        direction: "vertical",
        slidesPerView: "auto", //一屏个数随意
        freeMode: true, //滚动不贴合
        mousewheel: true //允许Pc端鼠标滚轮滚动
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
.text {
  font-size: 18px;
  text-align: left;
  padding: 30px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>