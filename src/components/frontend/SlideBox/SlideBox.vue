<template>
  <!--轮播图组件-->
  <div class="slider-box">
    <base-loading v-if="sliderData.length === 0" class="slider-box-loading" />
    <swiper v-else :options="swiperOption" class="slider-box-container">
      <swiper-slide v-for="(slide, index) in sliderData" :key="index">
        <img :src="slide.sliderImg" class="slider-box-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <a class="p-n-btn prev-btn ban-select"></a>
    <a class="p-n-btn next-btn ban-select"></a>
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

<style lang="less" scoped>
  .slider-box {
    width:100%; height:100%; position:relative;

    &-loading {
      top:108px;
    }

    &-container {
      width:100%; height:100%; position:relative;
    }
    &-img {
      width:100%; height:100%;
    }
  }

  .swiper-pagination {
    padding-bottom:4px; background:rgba(0,0,0,0.5);
    /deep/ .swiper-pagination-bullet {
      background:#888; opacity:1; border-radius:0;
      &-active {
        background:#24C9FF;
      }
    }
  }

  .p-n-btn {
    width:36px; height:68px; top:50%; position:absolute; display:inline-block; transform:translate(0,-50%);
    background:url('../../../../static/img/button/button.png') no-repeat; background-size:auto 103%;

    &.prev-btn {
      left:-50px; background-position:0 0;
      &:hover {
        background-position:-38px 0;
      }
    }

    &.next-btn {
      right:-255px; background-position:-78px 0;
      &:hover {
        background-position:-116px 0;
      }
    }
  }
</style>
