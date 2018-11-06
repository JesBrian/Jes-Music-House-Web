<template>
  <div id="homeLayout">

    <div class="listen-left box-show">
      <div class="listen-rank-title">
        <i class="listen-rank-title-icon mh-if exponential"></i>
        <span class="listen-rank-title-label">听歌排行</span>
        <span class="listen-rank-title-num">累积听歌18547首</span>

        <div class="listen-rank-category">
          <div @click="changeContentType('week')" :class="contentType === 'week' ? 'cube-bg' : 'glass-bg'" class="listen-rank-category-cell box-show">最近一周</div>
          <div @click="changeContentType('all')" :class="contentType === 'all' ? 'cube-bg' : 'glass-bg'" class="listen-rank-category-cell box-show">所有时间</div>
        </div>
      </div>

      <div class="listen-rank-container">
        <listen-group :list-data="listenList" />
      </div>
    </div>

    <div class="listen-right">
      <download-client />
    </div>
  </div>
</template>

<script>
import ListenGroup from '../../../../components/frontend/Listen/ListenGroup.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'Rank',

  components: {
    ListenGroup, DownloadClient
  },

  data () {
    return {
      contentType: 'week',

      listenList: [
        {id: 101, name: 'test1', singer: 'JesBrian', num: 45},
        {id: 102, name: 'test2', singer: 'Jehfrian', num: 4555},
        {id: 103, name: 'test3', singer: '曾56跟随', num: 235},
        {id: 104, name: 'test4', singer: 'vsaguc', num: 4},
        {id: 105, name: 'test5', singer: 'gqe8fyug', num: 78},
        {id: 106, name: 'test6', singer: '参数部分', num: 266},
        {id: 107, name: 'test7', singer: '二45幺', num: 12},
        {id: 108, name: 'test8', singer: 'sxJcbh', num: 554},
        {id: 109, name: 'test9', singer: '二45幺', num: 12},
        {id: 110, name: 'test10', singer: 'ruqwoho', num: 485},
        {id: 111, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 112, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 113, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 114, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 115, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 116, name: 'test16', singer: '参数55部分', num: 94},
        {id: 117, name: 'test17', singer: '二45幺', num: 456},
        {id: 118, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 119, name: 'test19', singer: '二45幺', num: 216},
        {id: 120, name: 'test20', singer: 'ruqwoho', num: 48},
        {id: 121, name: 'test1', singer: 'JesBrian', num: 45},
        {id: 122, name: 'test2', singer: 'Jehfrian', num: 4555},
        {id: 123, name: 'test3', singer: '曾56跟随', num: 235},
        {id: 124, name: 'test4', singer: 'vsaguc', num: 4},
        {id: 125, name: 'test5', singer: 'gqe8fyug', num: 78},
        {id: 126, name: 'test6', singer: '参数部分', num: 266},
        {id: 127, name: 'test7', singer: '二45幺', num: 12},
        {id: 128, name: 'test8', singer: 'sxJcbh', num: 554},
        {id: 129, name: 'test9', singer: '二45幺', num: 12},
        {id: 130, name: 'test10', singer: 'ruqwoho', num: 485},
        {id: 131, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 132, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 133, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 134, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 135, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 136, name: 'test16', singer: '参数55部分', num: 94},
        {id: 137, name: 'test17', singer: '二45幺', num: 456},
        {id: 138, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 139, name: 'test19', singer: '二45幺', num: 216},
        {id: 140, name: 'test20', singer: 'ruqwoho', num: 48},
        {id: 141, name: 'test1', singer: 'JesBrian', num: 45},
        {id: 142, name: 'test2', singer: 'Jehfrian', num: 4555},
        {id: 143, name: 'test3', singer: '曾56跟随', num: 235},
        {id: 144, name: 'test4', singer: 'vsaguc', num: 4},
        {id: 145, name: 'test5', singer: 'gqe8fyug', num: 78},
        {id: 146, name: 'test6', singer: '参数部分', num: 266},
        {id: 147, name: 'test7', singer: '二45幺', num: 12},
        {id: 148, name: 'test8', singer: 'sxJcbh', num: 554},
        {id: 149, name: 'test9', singer: '二45幺', num: 12},
        {id: 150, name: 'test10', singer: 'ruqwoho', num: 485},
        {id: 151, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 152, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 153, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 154, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 155, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 156, name: 'test16', singer: '参数55部分', num: 94},
        {id: 157, name: 'test17', singer: '二45幺', num: 456},
        {id: 158, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 159, name: 'test19', singer: '二45幺', num: 216},
        {id: 160, name: 'test20', singer: 'ruqwoho', num: 48},
        {id: 161, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 162, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 163, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 164, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 165, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 166, name: 'test16', singer: '参数55部分', num: 94},
        {id: 167, name: 'test17', singer: '二45幺', num: 456},
        {id: 168, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 169, name: 'test19', singer: '二45幺', num: 216},
        {id: 170, name: 'test20', singer: 'ruqwoho', num: 48},
        {id: 171, name: 'test1', singer: 'JesBrian', num: 45},
        {id: 172, name: 'test2', singer: 'Jehfrian', num: 4555},
        {id: 173, name: 'test3', singer: '曾56跟随', num: 235},
        {id: 174, name: 'test4', singer: 'vsaguc', num: 4},
        {id: 175, name: 'test5', singer: 'gqe8fyug', num: 78},
        {id: 176, name: 'test6', singer: '参数部分', num: 266},
        {id: 177, name: 'test7', singer: '二45幺', num: 12},
        {id: 178, name: 'test8', singer: 'sxJcbh', num: 554},
        {id: 179, name: 'test9', singer: '二45幺', num: 12},
        {id: 180, name: 'test10', singer: 'ruqwoho', num: 485},
        {id: 181, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 182, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 183, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 184, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 185, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 186, name: 'test16', singer: '参数55部分', num: 94},
        {id: 187, name: 'test17', singer: '二45幺', num: 456},
        {id: 188, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 189, name: 'test19', singer: '二45幺', num: 216},
        {id: 190, name: 'test20', singer: 'ruqwoho', num: 48},
        {id: 191, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 192, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 193, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 194, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 195, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 196, name: 'test16', singer: '参数55部分', num: 94},
        {id: 197, name: 'test17', singer: '二45幺', num: 456},
        {id: 198, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 199, name: 'test19', singer: '二45幺', num: 216},
        {id: 200, name: 'test20', singer: 'ruqwoho', num: 48}
      ]
    }
  },

  methods: {
    changeContentType (type) {
      this.contentType = type
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .listen {
    &-left {
      min-height:608px; padding-bottom:18px; flex:1;
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
    }

    &-rank {
      &-title {
        margin-top:48px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:38px;
        &-icon {
          float:left; color:#00d8ff; font-size:32px;
        }
        &-label {
          margin:0 8px; font-size:23px; font-weight:700;
        }
        &-num {
          font-size:14px;
        }
      }
      &-category {
        width:188px; height:32px; float:right; display:flex; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;
        &-cell {
          flex:1; border-radius:0; text-shadow:1px 1px 2px #000;
          &:first-child {
            border-radius:5px 0 0 5px;
          }
          &:last-child {
            border-radius:0 5px 5px 0;
          }
        }
      }
      &-container {
        margin:0 0 18px;
      }
    }
  }
</style>
