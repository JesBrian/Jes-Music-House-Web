<template>
  <!--轮播图组件-->
  <div style="width:100%; height:100%; position:relative;">
    <!--<div style="height:5%;"></div>-->
    <swiper :options="swiperOption" style="width:100%; height:100%; position:relative;">
      <swiper-slide v-for="(slide, index) in swiperSlides" class="s1c-Bg" style="border-radius:3px;" :key="index">
        <img :data-src="slide" class="swiper-lazy" style="width:100%; height:100%;"/>
        <!--<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>-->
        <!--<baseLoading class="my-lazy-preloader" style="top:50%; left:50%; transform:translate(-50%, -50%); position:absolute;"/>-->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="padding-bottom:4px; background:rgba(0,0,0,0.3);"></div>
    </swiper>

    <a class="p-n-btn prev-btn ban-select" style="width:36px; height:68px; top:50%; left:-50px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
    <a class="p-n-btn next-btn ban-select" style="width:36px; height:68px; top:48%; right:-301px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import baseLoading from '../../../../components/common/loading/baseLoading.vue'

export default {
  name: 'SlideBox',

  components: {
    swiper,
    swiperSlide
    // baseLoading
  },

  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        navigation: {
          prevEl: '.prev-btn',
          nextEl: '.next-btn'
        },

        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

        loop: true, // 循环

        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
          preloaderClass: 'my-lazy-preloader'
        }

      },
      swiperSlides: [
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_ExcelSurfaceBook_886x510.png?version=b2e11d71-cffa-4e18-6145-330849b098de',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Hero_OfficeOnline-SamResume_1920x560.jpg?version=9a25ef6b-57d9-7117-f80b-83d467dda82a',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_FamiliarUI_240x140.png?version=743b6633-e9d8-91fb-4942-05ed748ea15c',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_WordTablet_v02_750x421.png?version=48ad4fda-d8ff-8e42-7303-5bb3bb1ae33a',
        'https://c.s-microsoft.com/zh-cn/CMSImages/Image_WordTablet_v02_750x421.png?version=48ad4fda-d8ff-8e42-7303-5bb3bb1ae33a'
      ]
    }
  }
}
</script>

<style scoped>
  .swiper-pagination >>> .swiper-pagination-bullet {
    background:#888;
    opacity:1;
    border-radius:0;
  }
  .swiper-pagination >>> .swiper-pagination-bullet-active {
    background:#24C9FF;
  }

  .p-n-btn {
    background:url('../../../../static/img/button/button.png') no-repeat;
    background-size:auto 103%;
  }
  .p-n-btn.prev-btn {
    background-position:0 0;
  }
  .p-n-btn.prev-btn:hover {
    background-position:-38px 0;
  }
  .p-n-btn.next-btn {
    background-position:-78px 0;
  }
  .p-n-btn.next-btn:hover {
    background-position:-116px 0;
  }
</style>
