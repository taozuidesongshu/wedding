<template>
    <div>
      <swiper class="swiper" :options="swiperoption">
            <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
            Slide {{item}} 
            </swiper-slide>
            <div class="swiper-pangination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      slide: [1, 2, 3, 4, 5, 6, 7],
      swiperoption: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pangination"
        }
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
.swiper-slide {
  height: 4rem;
  text-align: center;
  line-height: 4rem;
}
.swiper-pangination {
  text-align: center;
}
.swiper {
  height: 7rem;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
}
</style>