<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" class="modal-title-icon" />
      <span class="modal-title-label">创建新歌单</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-share-container">
      <div style="width:90%; margin:0 auto; text-align:center;">
        <p style="text-align:left; font-size:19px; color:#AAA; line-height:2.8em;">
          <i class="mh-if music-info" style="margin-right:8px; color:#00d8ff; font-size:21px;"></i>新歌单标题：
        </p>
        <input v-model="name" class="glass-bg box-show glow-input" style="width:88%; padding:6px 8px 4px; font-size:20px; line-height:1em; color:#CCC; letter-spacing:1.3px;" placeholder="请输入新歌单标题："/>

        <p style="text-align:left; line-height:2.8em;">可通过“收藏”将音乐添加到新歌单中</p>
      </div>

      <div style="width:90%; margin:0 auto;">
        <div @click="sureOperation" class="super-btn-out" style="width:108px; height:33px; margin-top:15px; float:left;">
          <span class="super-btn-in mh-if makesure" style="width:100px; height:24px; top:51%; line-height:25px;"> 确认新建</span>
        </div>
        <div @click="cancelOperation" class="super-btn-out" style="width:108px; height:33px; margin-top:15px; float:right;">
          <span class="super-btn-in mh-if cancel" style="width:100px; height:24px; top:51%; line-height:25px;"> 取消返回</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CreatePlayList',

  data () {
    return {
      name: ''
    }
  },

  methods: {
    sureOperation () {
      if (this.name === '') {
        this.$store.commit('SHOW_TIPS', {
          msg: '请输入歌单名',
          type: 'warning'
        })
        return false
      }

      this.cancelOperation()

      this.$store.commit('SHOW_TIPS', {
        msg: '已创建新歌单',
        type: 'info'
      })
    },

    cancelOperation () {
      this.$parent.closeShowModal()
    }
  }
}
</script>

<style lang="less" scoped>
  #modalType {
    .modal-title {
      width:100%; line-height:35px; text-align:center;

      &-icon {
        width:30px; height:30px; margin:0 8px -5px 0;
      }
      &-label {
        display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;
      }
    }

    .modal-share {
      &-container {
        width:100%; text-align:center;
      }
    }
  }
</style>
