<template>
  <div id="homeLayout">

    <div style="width:88%; height:38px; margin:0 auto 10px; padding-top:28px; box-shadow:0 4px 3px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;">
      <div @click="changeSearchType('song')" :class="{'active' : searchType === 'song'}" class="super-btn-out">
        <span class="super-btn-in mh-if music-list"> 单曲</span>
      </div>
      <div @click="changeSearchType('album')" :class="{'active' : searchType === 'album'}" class="super-btn-out">
        <span class="super-btn-in mh-if music-albu"> 歌单</span>
      </div>
      <div @click="changeSearchType('singer')" :class="{'active' : searchType === 'singer'}" class="super-btn-out">
        <span class="super-btn-in mh-if singer"> 歌手</span>
      </div>
      <div @click="changeSearchType('user')" :class="{'active' : searchType === 'user'}" class="super-btn-out">
        <span class="super-btn-in mh-if datum"> 用户</span>
      </div>

      <label class="super-btn-out active" style="width:268px; height:32px; margin:-6px 28px 0; float:right; position:relative; border:none; border-radius:16px;">
        <input v-model="searchKey" type="text" class="super-btn-in" placeholder="搜索本歌单音乐" style="width:258px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;"/>
        <i @click="goSearch" class="mh-if search" style="top:2px; right:14px; position:absolute; z-index:5;"></i>
      </label>
    </div>

    <div style="width:88%; margin:0 auto; text-align:right;">
      <span style="margin-right:38px; color:#CCC; font-size:14px;">
        搜索 " <span style="color:#00d8ff; text-decoration:underline;">{{ searchKey }}</span> "，共找到 <span style="color:#00d8ff;">2222</span> 首单曲
      </span>
      <div style="width:100%; margin-top:6px;">
        <ul>
          <li v-for="n in 18" :key="n + 99" class="box-shadow">
            <div style="height:48px;"></div>
          </li>
        </ul>
      </div>
    </div>

    <pagination />

  </div>
</template>

<script>
import Pagination from '../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'search',

  components: {Pagination},

  data () {
    return {
      searchType: 'song',
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

<style scoped>

  .super-btn-out {
    width:88px; height:32px; margin:0 18px; display:inline-block;
  }
  .super-btn-out > .super-btn-in {
    width:79px; height:23px; line-height:23.8px;
  }
  .super-btn-out.active > .super-btn-in {
    line-height:22px;
  }
</style>
