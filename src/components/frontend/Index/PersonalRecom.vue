<template>
  <div class="personal-recom">
    <div class="personal-recom-nav">
      <i class="personal-recom-nav-icon mh-if music-info"></i>
      <span class="personal-recom-nav-title">个性化推荐</span>
      <router-link to="/user/recommend" class="personal-recom-nav-read-more">
        更多 <i class="mh-if double-arrow-right"></i>
      </router-link>
    </div>

    <div class="personal-recom-container">
      <div class="personal-recom-date">
        <router-link to="/user/recommend" class="personal-recom-date-link">
          <div class="personal-recom-date-cell">
            <b class="personal-recom-date-cell-label">{{ getDateMonth }}</b>
          </div>
          <div class="personal-recom-date-cell">
            <b class="personal-recom-date-cell-label">{{ getDateDay }}</b>
          </div>
        </router-link>
        <router-link to="user" class="personal-recom-date-label">每日歌曲推荐</router-link>
      </div>

      <div class="personal-recom-play-list">
        <play-list-group :play-list-data="playList" />
      </div>

    </div>
  </div>
</template>

<script>
import PlayListGroup from '../PlayList/PlayListGroup.vue'

export default {
  name: 'PersonalRecom',

  components: {
    PlayListGroup
  },

  data () {
    return {
      playList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'}
      ]
    }
  },

  computed: {
    getDateMonth () {
      return new Date().getMonth() + 1
    },
    getDateDay () {
      return new Date().getDate()
    }
  },

  methods: {
    playThisPlayList () {
    }
  }
}
</script>

<style lang="less" scoped>
  .personal-recom {
    &-nav {
      width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;
      &-icon {
        margin-right:8px; color:#00d8ff; font-size:32px;
      }
      &-title {
        font-size:23px; font-weight:700;
      }
      &-links {
        margin:5px 0 0 28px; display:inline-block; font-size:14px;
      }
      &-link {
        color:#999;
        &:hover {
          color:#DDD; text-decoration:underline;
        }
        &-split {
          margin:0 8px; color:#333;
        }
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
      width:93%; height:188px; margin:0 auto; display:flex;
    }

    &-date {
      width:208px; height:100%; padding:0 38px 0 0; float:left; text-align:center;
      &-link {
        width:100%; height:108px; margin-top:3px; display:flex; position:relative; line-height:103px;
        background:url('../../../../static/img/default/calendar.png') no-repeat; background-size:100% 100%;
      }
      &-cell {
        flex:1; margin-top:-3px;
        &-label {
          display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;
        }
      }
      &-label {
        color:#BBB; font-size:20px; font-weight:700; line-height:2.8em;
      }
    }

    &-play-list {
      flex:1;
      /deep/ .play-list-cell {
        margin:0;
      }
    }
  }
</style>
