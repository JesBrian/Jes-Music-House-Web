<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" class="modal-title-icon" />
      <span class="modal-title-label">创建新歌单</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-create-play-list-container">
      <div class="modal-create-play-list-info">
        <p class="input-title">
          <i class="mh-if music-info"></i>新歌单标题：
        </p>
        <input v-model="name" class="glass-bg box-show glow-input" placeholder="请输入新歌单标题："/>

        <p class="input-label">可通过“收藏”将音乐添加到新歌单中</p>
      </div>

      <div class="modal-create-play-list-operation">
        <div @click="cancelOperation" class="super-btn-out ripple">
          <span class="super-btn-in mh-if cancel"> 取消返回</span>
        </div>
        <div @click="sureOperation" class="super-btn-out ripple">
          <span class="super-btn-in mh-if makesure"> 确认新建</span>
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

    .modal-create-play-list {
      &-container {
        width:100%; text-align:center;
      }

      &-info {
        width:90%; margin:0 auto; text-align:center;
        > .input-title {
          text-align:left; font-size:19px; color:#AAA; line-height:2.8em;
          > .mh-if {
            margin-right:12px; color:#00d8ff; font-size:22px;
          }
        }
        > .glow-input {
          width:92%; height:42px; padding:6px 8px 8px; box-sizing:border-box; font-size:18px; color:#CCC; letter-spacing:1.3px; border-radius:4px;
        }
        > .input-label {
          text-align:left; line-height:2.8em;
        }
      }

      &-operation {
        width:90%; margin:18px auto 8px; display:flex; justify-content:space-between;

        .super-btn {
          &-out {
            width:108px; height:33px;
          }
          &-in {
            width:100px; height:24px; top:51%;
          }
        }
      }
    }
  }
</style>
