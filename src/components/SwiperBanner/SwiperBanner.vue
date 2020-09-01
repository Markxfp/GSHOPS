<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index">
          <img :src="item.img" class="w100" @click="goBannerLink(item.url)" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: {
    bannerList: Array,
  },
  data() {
    return {};
  },
  mounted() {
    this.initSwiper();
    console.log(this.bannerList);
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: {
          delay: 2000,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        observer: true,
        observeParents: true,
      });
    },
    goBannerLink(url) {
      this.$route.push(url);
    },
  },
  watch: {
    bannerList(value) {
      this,
        this.$nextTick(() => {
          this.initSwiper();
        });
    },
  },
};
</script>

<style>
.w100 {
  width: 100%;
}
</style>
