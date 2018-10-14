<template>
  <!--轮播图组件-->
  <div style="width:100%; height:100%; position:relative;">
    <base-loading v-if="sliderData.length === 0" style="top:108px;" />
    <swiper v-else :options="swiperOption" style="width:100%; height:100%; position:relative;">
      <swiper-slide v-for="(slide, index) in sliderData" class="s1c-Bg" style="border-radius:3px;" :key="index">
        <img :src="slide.sliderImg" style="width:100%; height:100%;"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="padding-bottom:4px; background:rgba(0,0,0,0.5);"></div>
    </swiper>

    <a class="p-n-btn prev-btn ban-select" style="width:36px; height:68px; top:50%; left:-50px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
    <a class="p-n-btn next-btn ban-select" style="width:36px; height:68px; top:50%; right:-255px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import BaseLoading from '../../common/Loading/BaseLoading.vue'

import 'swiper/dist/css/swiper.css'

export default {
  name: 'SlideBox',

  components: {
    BaseLoading, swiper, swiperSlide
  },

  props: {
    sliderData: {
      type: Array,
      default: () => {
        return []
      }
    }
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

      }
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
