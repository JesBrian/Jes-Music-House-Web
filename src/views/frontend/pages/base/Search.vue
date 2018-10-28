<template>
  <div id="homeLayout">

    <div class="search-container box-show">
      <div class="search-type-container">
        <p class="search-result-tips">
          搜索 " <span class="search-result-tips-key">{{ searchKey }}</span> "，共找到 <span class="search-result-tips-num">2222</span> 首单曲
        </p>

        <div @click="changeSearchType('song')" :class="{'active' : searchType === 'song'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if music-albu-2">&nbsp;单曲</span>
        </div>
        <div @click="changeSearchType('album')" :class="{'active' : searchType === 'album'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if redis">&nbsp;歌单</span>
        </div>
        <div @click="changeSearchType('singer')" :class="{'active' : searchType === 'singer'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if singer">&nbsp;歌手</span>
        </div>
        <div @click="changeSearchType('user')" :class="{'active' : searchType === 'user'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if avatar">&nbsp;用户</span>
        </div>

        <label class="search-input-container super-btn-out active">
          <input v-model="searchKey" type="text" class="super-btn-in" placeholder="搜索本歌单音乐"/>
          <i @click="goSearch" class="mh-if search"></i>
        </label>
      </div>

      <div class="search-result-container">
        <ul>
          <li v-for="n in 18" :key="n + 99" class="box-shadow">
            <div style="height:48px;"></div>
          </li>
        </ul>
      </div>

      <pagination />
    </div>

    <div class="search-recommend-container">
      <download-client />
    </div>

  </div>
</template>

<script>
import Pagination from '../../../../components/common/Pagination/Pagination.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'search',

  components: {
    Pagination, DownloadClient
  },

  data () {
    return {
      searchType: this.$route.params['searchType'],
      searchKey: this.$route.params['searchKey']
    }
  },

  watch: {
    searchType () {
      this.$router.push(`/search/${this.searchType}/${this.searchKey}`)
    }
  },

  methods: {
    changeSearchType (type = 'song') {
      this.searchType = type
    },

    goSearch () {
      if ((this.searchKey === this.$route.params['searchKey']) || (this.searchKey === '')) {
        return false
      }

      this.$router.push(`/search/${this.searchType}/${this.searchKey}`)
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    display:flex;
  }

  .search-container {
    flex:1;

    > .search-result-container {
      width:98%; margin:6px auto 0;
    }

    > .search-type-container {
      width:100%; margin:0 auto 10px; padding-top:28px; box-shadow:0 4px 3px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;

      .search-result-tips {
        margin-right:8px; text-align:right; color:#CCC; font-size:14px;
        &-key {
          color:#00d8ff; text-decoration:underline;
        }
        &-num {
          color:#00d8ff;
        }
      }

      .super-btn {
        &-out {
          width:88px; height:32px; margin:0 3px; display:inline-block;
        }
        &-in {
          width:79px; height:23px;
        }
      }

      > .search-input-container {
        width:238px; height:32px; margin:1px 8px 0; float:right; position:relative; border:none; border-radius:16px;
        > .super-btn-in {
          width:228px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;
        }
        > .search {
          top:2px; right:14px; position:absolute; z-index:5;
        }
      }
    }
  }

  .search-recommend-container {
    width:25%; height:100%; padding:34px 18px;
  }
</style>
