<template>
  <div id="homeLayout">

    <!-- 各类榜单 -->
    <div class="box-show" style="width:20%; height:100%; float:left; position:absolute; box-sizing:border-box;">
      <ul>
        <li class="box-shadow">
          <div style="width:100%; height:68px; font-size:22px; font-weight:700; line-height:75px; text-indent:1em;">云音乐特色榜</div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px; background:#1D1D1D;">
            <img v-lazy="'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
      </ul>
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

  mounted () {
  },

  methods: {
    playThisRank () {

    }
  }
}
</script>

<style scoped>

</style>
