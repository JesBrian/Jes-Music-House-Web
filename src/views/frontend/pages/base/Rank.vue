<template>
  <div id="homeLayout">

    <!-- 各类榜单 -->
    <div class="rank-category-container box-show">
      <dl>
        <dt class="rank-category-container-title box-shadow">云音乐特色榜</dt>

        <dd v-for="item in rankListData" :key="item.id" class="box-shadow">
          <router-link :to="`/rank/${item.id}`" :class="{active: item.id === Number($route.params['id'])}" class="rank-category-cell">
            <img v-lazy="item.logo" class="rank-category-cell-logo" />
            <span class="rank-category-cell-label">{{ item.name }}</span>
          </router-link>
        </dd>
      </dl>
    </div>

    <rank-detail />

  </div>
</template>

<script>
import RankDetail from '../../../../components/frontend/Rank/RankDetail.vue'

export default {
  name: 'Rank',

  components: {
    RankDetail
  },

  data () {
    return {
      rankListData: [
        {id: 111, name: '111 排行榜', logo: 'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'},
        {id: 112, name: '112 排行榜', logo: 'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40'},
        {id: 113, name: '113 排行榜', logo: 'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40'},
        {id: 114, name: '114 排行榜', logo: 'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40'},
        {id: 115, name: '115 排行榜', logo: 'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40'},
        {id: 116, name: '116 排行榜', logo: 'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40'},
        {id: 117, name: '117 排行榜', logo: 'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40'},
        {id: 118, name: '118 排行榜', logo: 'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40'}
      ]
    }
  },

  mounted () {
  },

  methods: {
    playThisRank () {

    }
  }
}
</script>

<style lang="less" scoped>
  .rank-category-container {
    width:20%; height:100%; float:left; position:absolute; box-sizing:border-box;

    &-title {
      width:100%; height:68px; font-size:22px; font-weight:700; line-height:75px; text-indent:1em;
    }

    .rank-category-cell {
      width:100%; height:53px; display:flex; flex-direction:row; align-items:center;

      &-logo {
        width:34px; height:34px; margin:10px;
      }
      &-label {
        color:#AAA;
      }

      &:hover > .rank-category-cell-label {
        color:#EEE;
      }
      &.active {
        > .rank-category-cell-label {
          color:#00d8ff;
        }
        background:#1D1D1D;
      }
    }
  }
</style>
