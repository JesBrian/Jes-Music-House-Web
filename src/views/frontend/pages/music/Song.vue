<template>
  <div id="homeLayout">

    <div class="box-show" style="width:75%; height:100%; display:inline-block;">

      <!-- 歌曲基本信息 -->
      <div style="margin:28px 0 88px;">
        <div style="width:32%; margin-top:12px; float:left; text-align:center;">
          <div class="box-show" style="width:188px; height:188px; margin:4px 23px; padding:33px; display:flex; justify-content:center; align-items:center; border-radius:50%; background:url('../../../static/img/default/disk.png') no-repeat; background-size:100% 100%;">
            <img v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'" style="width:100%; height:100%; border-radius:50%;"/>
          </div>
        </div>

        <div style="width:68%; margin-top:3px; display:inline-block; position:relative; color:#999;">
          <p style="font-size:23px; color:#EEE;">歌曲名称 song name 1561561</p>
          <div style="height:32px; margin-top:18px; display:inline-block; line-height:32px;">

            <router-link to="/singer-detail/hot-song/1" style="width:26px; height:26px; margin:1px 12px 0 0; float:left; border-radius:50%;">
              <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%; padding:1px; border-radius:50%;"/>
            </router-link>
            <router-link to="/singer-detail/hot-song/1" style="margin-right:38px; font-size:20px;">JesBrian</router-link>
          </div>

          <div style="margin:18px 0;">
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if play" style="width:64px; height:23px;">&nbsp;播放</span>
            </div>
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if play" style="width:64px; height:23px;">&nbsp;列表</span>
            </div>
            <div @click="showModal('Collection')" class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if collection-music" style="width:64px; height:23px;">&nbsp;收藏</span>
            </div>
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if download" style="width:64px; height:23px;">&nbsp;下载</span>
            </div>
            <div @click="showModal('Share')" class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if share" style="width:64px; height:23px;">&nbsp;分享</span>
            </div>
          </div>

          <div style="width:88%; position:relative; letter-spacing:1px; font-size:14px;">
            <p ref="playListDescription" :style="isShowDescription ? 'height:100%;' : 'height:135px;'" style="width:92%; word-break:break-all; line-height:19px; overflow:hidden;">
              <span style="color:#DDD;">简介：</span>
              wsedjnm'fgvh测试jnkml,ws恐怕edjn4515gvhjnk486djnm相差谁vhjnkml,wsed场设jnm'fgvh4156jnkml,w现备和健康sedjnm'fgvhjnkml513vjv处理vhjnk产量数52edjnm急哦fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml
            </p>
            <i v-if="isShowDescriptionBtn" @click="isShowDescription = !isShowDescription" :class="['mh-if', isShowDescription ? 'double-arrow-up' : 'double-arrow-down']" class="show-description-btn"></i>
          </div>
        </div>
      </div>

      <comment-total />
    </div>

    <div style="width:25%; padding:34px 18px; float:right; box-sizing:border-box;">
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">相似的歌曲</div>
        <div v-for="n in 5" :key="`${n}2288`" class="box-shadow" style="height:45px; display:flex;">
          <div style="flex:1; display:flex; flex-direction:column; justify-content:center;">
            <router-link to="/song" style="color:#CCC; font-size:15px;">Song Name</router-link>
            <router-link to="/singer-detail/hot-song/1" style="margin-top:2px; color:#888; font-size:13px;">Singer 名称 Name</router-link>
          </div>
          <div style="width:48px; margin-right:5px; display:flex; justify-content:space-around; align-items:center;">
            <i class="mh-if play"></i>
            <i @click="showModal('Collection')" class="mh-if plus"></i>
          </div>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">包含这首歌的歌单</div>

        <div v-for="n in 3" :key="`${n}2288`" class="box-show" style="height:48px; margin:0 0 12px; display:block;">
          <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" style="width:40px; height:40px; margin:4px; float:left;"/>
          <router-link to="/play-list/song-group/1" style="font-size:15px; font-weight:700; line-height:2em; color:#BBB;">
            专辑 Play List 歌单
          </router-link>
          <router-link to="/singer-detail/hot-song/1" class="text-hidden" style="width:70%; color:#888; font-size:13px;">
            by JesBrian
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">喜欢这首歌的人</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
          <router-link v-for="n in 4" :key="`${n}88`" to="/user" style="margin-bottom:16px;">
            <img class="box-show" style="width:43px; height:43px; padding:2px;" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">客户端多端下载</div>
        <div>
          <p>同步歌单，随时畅听云音乐</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CommentTotal from '../../../../components/frontend/Comment/CommentTotal.vue'

export default {
  name: 'Song',

  components: {
    CommentTotal
  },

  data () {
    return {
      isShowDescriptionBtn: false,
      isShowDescription: false
    }
  },

  mounted () {
    if (this.$refs['playListDescription'].scrollHeight > this.$refs['playListDescription'].clientHeight) {
      this.isShowDescriptionBtn = true
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

  .show-description-btn {
    top:18px; right:6px; position:absolute; cursor:pointer;
  }
  .show-description-btn:hover {
    color: #00d8ff;
  }
</style>
