<template>
  <div id="homeLayout">

    <div class="user-recom-left box-show">

      <div class="user-recom-title">
        <i class="mh-if hot"></i>
        <span class="user-recom-name">推荐列表</span>
        <span class="user-recom-num">30 首歌曲</span>

        <div class="user-recom-oper">
          <div class="super-btn-out ripple">
            <span class="super-btn-in mh-if play">&nbsp;播放</span>
          </div>
          <div class="super-btn-out ripple">
            <span class="super-btn-in mh-if menu">&nbsp;列表</span>
          </div>
          <div @click="showModal('Collection')" class="super-btn-out ripple">
            <span class="super-btn-in mh-if non-colloection">&nbsp;收藏</span>
          </div>
        </div>
      </div>

      <song-group :song-list="songList" />
    </div>

    <div class="user-recom-right">
      <div style="width:100%; margin-bottom:48px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">客户端多端下载</div>
      </div>
    </div>

  </div>
</template>

<script>
import SongGroup from '../../../../components/frontend/SongGroup/SongGroup.vue'

export default {
  name: 'Recommend',

  components: {
    SongGroup
  },

  data () {
    return {
      songList: [
        {id: 101, name: 'test1', singer: 'JesBrian', time: '00:58'},
        {id: 102, name: 'test2', singer: 'Jehfrian', time: '01:45'},
        {id: 103, name: 'test3', singer: '曾跟随', time: '01:30'},
        {id: 104, name: 'test4', singer: 'vsaguc', time: '11:30'},
        {id: 105, name: 'test5', singer: 'gqefyug', time: '03:33'},
        {id: 106, name: 'test6', singer: '参数部分', time: '12:05'},
        {id: 107, name: 'test7', singer: '二45幺', time: '08:45'},
        {id: 108, name: 'test8', singer: 'sxJcbh', time: '06:34'},
        {id: 109, name: 'test9', singer: '二45幺', time: '06:45'},
        {id: 110, name: 'test10', singer: 'ruqwoho', time: '06:45'},
        {id: 111, name: 'test11', singer: 'JesBrian', time: '00:58'},
        {id: 112, name: 'test12', singer: 'Jehfrian', time: '01:45'},
        {id: 113, name: 'test13', singer: '曾跟随', time: '01:30'},
        {id: 114, name: 'test14', singer: 'vsaguc', time: '11:30'},
        {id: 115, name: 'test15', singer: 'gqefyug', time: '03:33'},
        {id: 116, name: 'test16', singer: '参数部分', time: '12:05'},
        {id: 117, name: 'test17', singer: '二45幺', time: '08:45'},
        {id: 118, name: 'test18', singer: 'sxJcbh', time: '06:34'},
        {id: 119, name: 'test19', singer: '二45幺', time: '06:45'},
        {id: 120, name: 'test20', singer: 'ruqw45oho', time: '18:45'},
        {id: 111, name: 'test21', singer: 'JesBrian', time: '00:58'},
        {id: 112, name: 'test22', singer: 'Jehf68rian', time: '01:45'},
        {id: 113, name: 'test23', singer: '曾跟随', time: '01:30'},
        {id: 114, name: 'test24', singer: 'vsaguc', time: '11:30'},
        {id: 115, name: 'test25', singer: 'gqef7yug', time: '03:33'},
        {id: 116, name: 'test26', singer: '4参数部分', time: '12:05'},
        {id: 117, name: 'test27', singer: '11二45幺', time: '08:45'},
        {id: 118, name: 'test28', singer: 'sxJcbh', time: '06:34'},
        {id: 119, name: 'test29', singer: 'yt二45幺', time: '06:45'},
        {id: 120, name: 'test30', singer: 'ruqwoho', time: '18:45'}
      ]
    }
  },

  methods: {
    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .user-recom {
    &-left {
      min-height:608px; padding-bottom:18px; flex:1;

      .user-recom {
        &-title {
          margin-top:48px; padding:0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:38px;
          > .mh-if {
            float:left; color:#00d8ff; font-size:32px;
          }
        }
        &-name {
          margin:0 8px; font-size:23px; font-weight:700;
        }
        &-num {
          font-size:14px;
        }

        &-oper {
          margin-top:-8px; float:right; cursor:pointer;
          .super-btn {
            &-out {
              width:71px; height:31px;
            }
            &-in {
              width:63px; height:24px;
            }
          }
        }
      }
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
    }
  }
</style>
