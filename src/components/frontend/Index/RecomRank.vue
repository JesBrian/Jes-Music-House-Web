<template>
  <div class="recom-rank">
    <div class="recom-rank-nav">
      <i class="recom-rank-nav-icon mh-if exponential"></i>
      <span class="recom-rank-nav-title">榜单</span>
      <router-link to="/rank" class="recom-rank-nav-read-more">
        更多 <i class="mh-if double-arrow-right"></i>
      </router-link>
    </div>

    <div class="recom-rank-container">
      <div v-for="n in 3" :key="n + '56'" class="recom-rank-cell">
        <div class="recom-rank-cell-title">
          <router-link to="rank">
            <img class="recom-rank-cell-title-img box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'"/>
          </router-link>
          <p class="recom-rank-cell-title-label text-hidden">
            <router-link to="rank" class="recom-rank-cell-title-label-link">XXXX飙升榜单</router-link>
          </p>
          <i class="mh-if play"></i>
          <i class="mh-if collection-music"></i>
          <i class="mh-if share"></i>
        </div>

        <ul class="recom-rank-cell-container">
          <li v-for="n in 10" :key="n + 99" class="song-cell">
            <span class="song-cell-index">{{ n }}</span>
            <p class="song-cell-title text-hidden">
              <router-link to="/song/1" class="song-cell-link">The Name of the Song {{ n }}</router-link>
            </p>
          </li>
          <li class="song-cell">
            <router-link to="rank" class="read-more">
              查看全部 <i class="mh-if double-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecomRank'
}
</script>

<style lang="less" scoped>
  .recom-rank {
    &-nav {
      width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;
      &-icon {
        margin-right:8px; color:#00d8ff; font-size:32px;
      }
      &-title {
        font-size:23px; font-weight:700;
      }
      &-read-more {
        margin-top:46px; float:right; font-size:13px; color:#888; line-height:1em;
        &:hover {
          color:#EEE; text-decoration:underline;
          > .mh-if {
            color: #20dbfc;
          }
        }

        > .mh-if {
          font-size:12.5px;
        }
      }
    }

    &-container {
      width:93%; height:100%; margin:0 auto; display:flex;
    }
    &-cell {
      flex:1; box-sizing:border-box; border:1px solid #282828; border-right:none;
      &:last-child {
        border-right:1px solid #282828;
      }

      &-title {
        width:100%; height:104px; overflow:auto;
        &-img {
          width:68px; height:68px; margin:16px 10px 0 16px; padding:3px; float:left;
        }
        &-label {
          margin:22px 0 12px; font-size:17px;
          &-link {
            color:#BBB;
          }
        }
        > .mh-if {
          margin:0 2px 0 0; font-size:23px; line-height:1.3em;
          &.play {
            font-size:26px;
          }
          &:hover {
            color:#00D8FF;
          }
        }
      }
      &-container {
        width:100%; line-height:32px;

        .song-cell {
          width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;
          &:nth-child(odd) {
            background:#181818;
          }

          &-index {
            width:20px; float:left; margin-right:8px; text-align:center;
          }
          &-title {
            max-width:80%; float:left;
          }
          &-link {
            color:#999;
            &:hover {
              color:#DDD;
            }
          }

          > .read-more {
            float:right; font-size:15px; color:#BBB;
          }
        }
      }
    }
  }
</style>
