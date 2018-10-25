<template>
  <div id="homeLayout">
    <div class="album-title-container">
      <span class="album-title-label">{{ styleLabel }}</span>
      <div class="album-title-chooser">
        <div @click="changeShowPlayListStyleContent" class="super-btn-out ripple">
          <span class="super-btn-in">选择分类&nbsp;<i class="mh-if double-arrow-down"></i></span>
        </div>

        <IndexPlayListStyle v-if="showAlbumTypeContent" @changePlayListStyle="changePlayListStyle"
                            :style-list="styleList" :now-style-id="styleId" />
      </div>

      <div class="choose-type-container">
        <div @click="changeContentType('hot')" :class="contentType === 'hot' ? 'cube-bg' : 'glass-bg'"
             class="choose-type-btn left box-show">热门</div>
        <div @click="changeContentType('new')" :class="contentType === 'new' ? 'cube-bg' : 'glass-bg'"
             class="choose-type-btn right box-show">最新</div>
      </div>
    </div>

    <play-list-group :play-list-data="playList" />

    <!-- 分页组件 -->
    <pagination />
  </div>
</template>

<script>
import IndexPlayListStyle from '../../../../components/frontend/Style/IndexPlayListStyle.vue'
import PlayListGroup from '../../../../components/frontend/PlayList/PlayListGroup.vue'
import Pagination from '../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'album',

  components: {
    IndexPlayListStyle, PlayListGroup, Pagination
  },

  data () {
    return {
      styleId: 0,
      styleLabel: this.$route.params['label'],
      contentType: this.$route.params['type'],
      styleList: [],
      showAlbumTypeContent: false,
      playList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'},
        {id: 444, title: 'play-list-444'},
        {id: 555, title: 'play-list-555'},
        {id: 666, title: 'play-list-666'},
        {id: 777, title: 'play-list-777'},
        {id: 888, title: 'play-list-888'},
        {id: 999, title: 'play-list-999'},
        {id: 101010, title: 'play-list-101010'},
        {id: 1111, title: 'play-list-1111'},
        {id: 1222, title: 'play-list-1222'},
        {id: 1333, title: 'play-list-1333'},
        {id: 1444, title: 'play-list-1444'},
        {id: 1555, title: 'play-list-1555'},
        {id: 1666, title: 'play-list-1666'},
        {id: 1777, title: 'play-list-1777'},
        {id: 1888, title: 'play-list-1888'},
        {id: 1999, title: 'play-list-1999'},
        {id: 1101010, title: 'play-list-1101010'},
        {id: 11111, title: 'play-list-11111'},
        {id: 11222, title: 'play-list-11222'},
        {id: 11333, title: 'play-list-11333'},
        {id: 11444, title: 'play-list-11444'},
        {id: 11555, title: 'play-list-11555'},
        {id: 11666, title: 'play-list-11666'},
        {id: 11777, title: 'play-list-11777'},
        {id: 11888, title: 'play-list-11888'},
        {id: 11999, title: 'play-list-11999'},
        {id: 11101010, title: 'play-list-11101010'}
      ]
    }
  },

  created () {
    let nowTimeStamp = (new Date()).valueOf()

    this.$localForage.getItem('allStyle', (result, value) => {
      if (value && ((nowTimeStamp - value.time) < 86400000)) {
        this.styleList = value.style
        this.getNowStyleId()
      } else {
        this.$http.post('getAllStyle').then(response => {
          let result = response.data
          if (result.state === '200') {
            this.styleList = result.data
            this.$localForage.setItem('allStyle', {
              style: result.data,
              time: nowTimeStamp
            })
            this.getNowStyleId()
          }
        }).catch(error => {
          console.log(error)
        })
      }
    })
  },

  methods: {
    getNowStyleId () {
      for (let i = 0, fLen = this.styleList.length; i < fLen; i++) {
        for (let j = 0, sLen = this.styleList[i].cell.length; j < sLen; j++) {
          if (this.styleList[i].cell[j].name === this.styleLabel) {
            this.styleId = this.styleList[i].cell[j].id
            break
          }
        }
        if (this.styleId !== 0) break
      }
    },

    playThisPlayList () {
      alert(65666)
    },

    changeShowPlayListStyleContent () {
      this.showAlbumTypeContent = !this.showAlbumTypeContent
    },

    changeContentType (type) {
      this.$router.push(`/album/${encodeURIComponent(this.styleLabel)}/${type}`)
    },

    changePlayListStyle (label) {
      this.$router.push(`/album/${encodeURIComponent(label)}/${this.contentType}`)
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    padding:0 58px 28px; box-sizing:border-box;
  }

  .album-title {
    &-container {
      width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;
    }
    &-label {
      float:left; font-size:32px; font-weight:700;
    }
    &-chooser {
      width:128px; height:36px; margin:15px 28px 0; position:relative; display:inline-block;
      .super-btn {
        &-out {
          width:100%; height:100%;
        }
        &-in {
          width:118px; height:27px;
        }
      }
    }
  }

  .choose-type {
    &-container {
      width:108px; height:32px; margin-top:30px; float:right; display:flex; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;
    }

    &-btn {
      flex:1; text-shadow:1px 1px 2px #000;
      &.left {
        border-radius:6px 0 0 6px;
      }
      &.right {
        border-radius:0 6px 6px 0;
      }
    }
  }
</style>
