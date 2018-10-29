<template>
  <div id="homeLayout">
    <div class="disc-title">
      <span class="disc-title-label">热门新碟</span>
    </div>
    <disc-list-group :disc-list="hotDiscList" />

    <div class="disc-title">
      <span class="disc-title-label">全部新碟</span>
    </div>
    <disc-list-group :disc-list="allDiscList" />

    <!-- 分页组件 -->
    <pagination />
  </div>
</template>

<script>
import DiscListGroup from '../../../../components/frontend/Disc/DiscListGroup.vue'
import Pagination from '../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'Disc',

  components: {
    DiscListGroup, Pagination
  },

  data () {
    return {
      hotDiscList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'},
        {id: 444, title: 'play-list-444'},
        {id: 555, title: 'play-list-555'},
        {id: 666, title: 'play-list-666'},
        {id: 777, title: 'play-list-777'},
        {id: 888, title: 'play-list-888'},
        {id: 999, title: 'play-list-999'},
        {id: 101010, title: 'play-list-101010'}
      ],

      allDiscList: [
        {id: 1111, title: 'play-list-1111'},
        {id: 2222, title: 'play-list-2222'},
        {id: 3333, title: 'play-list-3333'},
        {id: 4444, title: 'play-list-4444'},
        {id: 5555, title: 'play-list-5555'},
        {id: 6666, title: 'play-list-6666'},
        {id: 7777, title: 'play-list-7777'},
        {id: 8888, title: 'play-list-8888'},
        {id: 9999, title: 'play-list-9999'},
        {id: 10101010, title: 'play-list-10101010'},
        {id: 11111111, title: 'play-list-11111111'},
        {id: 12121212, title: 'play-list-12121212'},
        {id: 13131313, title: 'play-list-13131313'},
        {id: 14141414, title: 'play-list-14141414'},
        {id: 15151515, title: 'play-list-15151515'},
        {id: 16161616, title: 'play-list-16161616'},
        {id: 17171717, title: 'play-list-17171717'},
        {id: 18181818, title: 'play-list-18181818'},
        {id: 19191919, title: 'play-list-19191919'},
        {id: 20202020, title: 'play-list-20202020'}
      ]
    }
  },

  methods: {
    playThisPlayList () {
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    padding:0 58px 28px; box-sizing:border-box;
  }
  .disc-title {
    width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;
    &-label {
      float:left; font-size:32px; font-weight:700;
    }
  }
</style>
