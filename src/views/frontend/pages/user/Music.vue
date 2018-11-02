<template>
  <div id="homeLayout">

    <div class="user-music-category-container">
      <div class="box-shadow"></div>
      <router-link to="/user/music/singer"
           :class="{active: type === 'collection-singer'}"
           class="user-music-category-cell box-shadow">
        <i class="user-music-category-cell-logo mh-if singer" ></i>
        <span class="user-music-category-cell-label">收藏的歌手</span>
      </router-link>

      <div @click="switchSecondMenu('create-play-list')"
           :class="{active: ['create-play-list', 'modify-play-list'].includes(type)}"
           class="user-music-category-cell box-shadow">
        <i class="user-music-category-cell-logo mh-if redis" ></i>
        <span class="user-music-category-cell-label">创建的歌单</span>

        <div @click.stop="showModal('CreatePlayList')" class="super-btn-out">
          <i class="super-btn-in mh-if add-collection"></i>
        </div>

        <i :class="createActive ? 'double-arrow-down' : 'double-arrow-up'" class="show-btn mh-if"></i>
      </div>
      <div v-if="createActive" class="box-shadow">
        <router-link :to="`/user/music/play-list/${item.id}`" v-for="(item, index) in createList" :key="item.id"
                     class="play-list-cell box-shadow" :class="{active: playListId === item.id}" >
          <img class="play-list-cell-img" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
          <div class="play-list-cell-info" >
            <p class="play-list-cell-title">{{ item.title }}</p>
            <p class="play-list-cell-other">{{ item.num }} 首</p>
          </div>
          <div class="play-list-cell-oper">
            <router-link :to="`/user/music/play-list/modify/${item.id}`" style="margin:1.5px 0;" class="mh-if comment"></router-link>
            <i @click="delPlayList(index, createList, $event)" style="margin:1.5px 0 1.5px -2px;" class="mh-if trash-1"></i>
          </div>
        </router-link>
      </div>

      <div @click="switchSecondMenu('collection-play-list')"
           :class="{active: type === 'collection-play-list'}"
           class="user-music-category-cell box-shadow">
        <i class="user-music-category-cell-logo mh-if add-collection" ></i>
        <span class="user-music-category-cell-label">收藏的歌单</span>
        <i :class="collectionActive ? 'double-arrow-down' : 'double-arrow-up'" class="show-btn mh-if"></i>
      </div>
      <div v-if="collectionActive" class="box-shadow">
        <router-link :to="`/user/music/play-list/${item.id}`" v-for="(item, index) in collectionList" :key="item.id"
                     class="play-list-cell box-shadow" :class="{active: playListId === item.id}" >
          <img class="play-list-cell-img" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
          <div class="play-list-cell-info" >
            <p class="play-list-cell-title">{{ item.title }}</p>
            <p class="play-list-cell-other">{{ item.num }} 首</p>
          </div>
          <div class="play-list-cell-oper">
            <i @click="delPlayList(index, collectionList, $event)" class="mh-if trash-1"></i>
          </div>
        </router-link>
      </div>
      <div class="box-shadow"></div>
    </div>

    <div class="user-music-detail-container box-show">
      <component :is="type" />
    </div>

  </div>
</template>

<script>
import CollectionSinger from '../../../../components/frontend/UserMusic/CollectionSinger.vue'
import UserPlayList from '../../../../components/frontend/UserMusic/UserPlayList.vue'
import ModifyPlayList from '../../../../components/frontend/UserMusic/ModifyPlayList.vue'

export default {
  name: 'Music',

  components: {
    CollectionSinger,
    'create-play-list': UserPlayList,
    'collection-play-list': UserPlayList,
    ModifyPlayList
  },

  data () {
    return {
      type: 'collection-singer',
      createActive: false,
      collectionActive: false,

      createList: [
        {id: 100, title: '我喜欢的歌曲', num: 100},
        {id: 101, title: '创建的歌单101', num: 62},
        {id: 102, title: '创建的歌单102', num: 22},
        {id: 103, title: '创建的歌单103', num: 105},
        {id: 104, title: '创建的歌单104', num: 116},
        {id: 105, title: '创建的歌单105', num: 13},
        {id: 106, title: '创建的歌单106', num: 5},
        {id: 107, title: '创建的歌单107', num: 182},
        {id: 108, title: '创建的歌单108', num: 87},
        {id: 109, title: '创建的歌单109', num: 8}
      ],
      collectionList: [
        {id: 111, title: '收藏的歌单111', num: 62},
        {id: 112, title: '收藏的歌单112', num: 22},
        {id: 113, title: '收藏的歌单113', num: 105},
        {id: 114, title: '收藏的歌单114', num: 116},
        {id: 115, title: '收藏的歌单115', num: 13},
        {id: 116, title: '收藏的歌单116', num: 5},
        {id: 117, title: '收藏的歌单117', num: 182},
        {id: 118, title: '收藏的歌单118', num: 87},
        {id: 119, title: '收藏的歌单119', num: 8}
      ]
    }
  },

  computed: {
    playListId () {
      return this.$route.params['id'] ? Number.parseInt(this.$route.params['id']) : 0
    }
  },

  created () {
    this.showSecondMenu()
  },

  methods: {
    showSecondMenu () {
      let playListId = this.$route.params['id'] ? Number.parseInt(this.$route.params['id']) : 0

      if (playListId !== 0) {
        for (let i = 0, len = this.createList.length; i < len; i++) {
          if (this.createList[i].id === playListId) {
            this.createActive = true
            this.type = this.$route.path.split('/')[4] === 'modify' ? 'modify-play-list' : 'create-play-list'
            return
          }
        }

        for (let i = 0, len = this.collectionList.length; i < len; i++) {
          if (this.collectionList[i].id === playListId) {
            this.collectionActive = true
            this.type = 'collection-play-list'
            return
          }
        }
      }
    },

    switchSecondMenu (type) {
      if (type === 'create-play-list') {
        this.createActive = !this.createActive
      } else {
        this.collectionActive = !this.collectionActive
      }
    },

    delPlayList (playListIndex, playList, event) {
      event.preventDefault() // 阻止 router-link 跳转事件
      // axios - ajax
      playList.splice(playListIndex, 1)
    },

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

  .user-music-category {
    &-container {
      width:20%; height:100%; padding:38px 0 3px;
    }

    &-cell {
      width:100%; height:43px; position:relative; display:flex; flex-direction:row; align-items:center; cursor:pointer;

      &-logo {
        margin:0 8px 0 13px; font-size:19px;
      }
      &-label {
        color:#AAA;
      }

      &:hover > .user-music-category-cell-label {
        color:#EEE;
      }
      &.active {
        > .user-music-category-cell-label {
          color:#00d8ff;
        }
        background:#1D1D1D;
      }

      > .super-btn-out {
        width:23px; height:23px; margin-left:18px;
        > .super-btn-in {
          width:18px; height:18px;
        }
      }

      > .show-btn {
        right:8px;
        position:absolute;
      }
    }
  }

  .play-list-cell {
    width:98%; height:43px; margin:0 auto; display:flex; align-items:center;
    &.active {
      background:#1D1D1D;
    }

    &-img {
      width:28px; height:28px; margin:0 8px 0 3px; border-radius:3px;
    }
    &-info {
      flex:1; box-sizing:border-box;
    }
    &-title {
      margin-bottom:2px; font-size:14px;
    }
    &-other {
      font-size:12px;
    }
    &-oper {
      width:28px; display:flex; flex-direction:column; justify-content:center; align-items:center;

      > .mh-if {
        &:hover {
          color:#EEE;
        }
        &:active {
          color:#00D8FF;
        }
      }
    }
  }

  .user-music-detail-container {
    padding:0 0 18px; flex:1;
  }
</style>
