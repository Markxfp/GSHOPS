<template>
  <div>
    <van-tabbar v-model="active" active-color="#b0ce44" inactive-color="#c9cad3">
      <van-tabbar-item v-for="(item,index) in iconList" :key="index" :to="item.url">
        <span>{{item.text}}</span>
        <template #icon="props">
          <img :src="props.active ? iconList[index].active : iconList[index].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      iconList:[
        {
          text:'首页',
          url:'/msite',
          active:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/home-y.png',
          inactive:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/home-n.png'
        },{
          text:'考试',
          url:'/msite',
          active:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/kaoshi-y.png',
          inactive:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/kaoshi-n.png'
        },{
          text:'0元试听',
          url:'/msite',
          active:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/fudao-y.png',
          inactive:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/fudao-n.png'
        },{
          text:'课程',
          url:'/msite',
          active:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/kecheng-y.png',
          inactive:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/kecheng-n.png'
        },{
          text:'我的',
          url:'/msite',
          active:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/person-y.png',
          inactive:'https://mic.fjjxhl.com/Jx/Public/newstyle/image/newpage/person-n.png'
        },
      ]
    };
  },
  methods: {},
};
</script>

<style>
</style>
