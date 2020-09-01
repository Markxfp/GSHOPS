<template>
  <div>
    <SwiperBanner :bannerList="bannerList"/>
  </div>
</template>

<script>
import SwiperBanner from '../../components/SwiperBanner/SwiperBanner.vue'
export default {
data() {
    return {
      bannerList:[
        {
          img:'https://mic.fjjxhl.com/Jx/Public/20200615/img05.png',
          url:'www.baidu.com'
        },{
          img:'https://mic.fjjxhl.com/Jx/Public/20200615/img02.png',
          url:'www.baidu.com'
        },{
          img:'https://mic.fjjxhl.com/Jx/Public/20200615/img04.png',
          url:'www.baidu.com'
        }
      ]
    }
  },
  methods: {
},
components:{
  SwiperBanner
}
};
</script>

<style scoped>

</style>
