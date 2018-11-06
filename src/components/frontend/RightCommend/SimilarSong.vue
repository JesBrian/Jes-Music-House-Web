<template>
  <div class="base-container">
    <div class="base-container-title">{{ title }}</div>

    <div v-for="item in dataSource" :key="item.id" class="similar-song box-shadow">
      <div class="similar-song-info">
        <router-link :to="`/song/${item.id}`" class="similar-song-info-name">{{ item.name }}</router-link>
        <router-link to="/singer-detail/hot-song/1" class="similar-song-info-singer">Singer 名称 Name</router-link>
      </div>
      <div class="similar-song-oper">
        <i class="mh-if play"></i>
        <i @click="showModal('Collection')" class="mh-if plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarSong',

  props: {
    title: {
      type: [String, Number],
      default: '相似的歌曲推荐'
    },

    dataSource: {
      type: Array,
      default: () => {
        return []
      }
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
  .base-container {
    margin-bottom:38px;
    &-title {
      margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;
    }
  }

  .similar-song {
    height:45px; display:flex;
    &-info {
      flex:1; display:flex; flex-direction:column; justify-content:center;
      &-name {
        color:#CCC; font-size:15px;
      }
      &-singer {
        margin-top:2px; color:#888; font-size:13px;
      }
    }
    &-oper {
      width:48px; margin-right:5px; display:flex; justify-content:space-around; align-items:center;
    }
  }
</style>
