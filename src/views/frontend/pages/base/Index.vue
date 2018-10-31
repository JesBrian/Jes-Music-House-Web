<template>
  <div id="homeLayout">

    <!-- 顶部推荐内容 -->
    <div class="top-container box-show">
      <!-- 轮播图区域 -->
      <div class="top-container-slider">
        <slide-box :slider-data="sliderData"/>
      </div>

      <!-- 下载区域 -->
      <div class="top-container-download box-show">
        <router-link to="/download/client" class="super-btn-out ripple">
          <span class="super-btn-in mh-if download">&nbsp;下载客户端</span>
        </router-link>
      </div>
    </div>

    <!-- 主页主体内容 -->
    <div class="main-container box-show">

      <!-- 左侧 -->
      <div class="main-container-left box-show">
        <!-- 热门推荐  -->
        <hot-album />

        <!-- 个性化推荐 -->
        <personal-recom />

        <!-- 新碟上架 -->
        <new-disc />

        <!-- 榜单 -->
        <recom-rank />
      </div>

      <!-- 右侧 -->
      <div class="main-container-right">
        <!-- 个人信息 -->
        <div class="user-info-container box-shadow">
          <router-link to="/user/1" class="user-info-avatar">
            <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'"
                 class="user-info-avatar-img box-show"/>
          </router-link>

          <router-link to="/user/1" class="user-info-name">JesBrian</router-link>

          <div class="super-btn-out ripple">
            <span class="super-btn-in mh-if sign-in">&nbsp;签到</span>
          </div>

          <div class="user-info-other-container">
            <div class="user-info-other-cell">
              <p class="user-info-other-cell-num">1222</p>
              <p class="user-info-other-cell-label">动态</p>
            </div>
            <div class="user-info-other-cell">
              <p class="user-info-other-cell-num">1222</p>
              <p class="user-info-other-cell-label">关注</p>
            </div>
            <div class="user-info-other-cell">
              <p class="user-info-other-cell-num">1222</p>
              <p class="user-info-other-cell-label">粉丝</p>
            </div>
          </div>
        </div>

        <!-- 推荐音乐人 -->
        <div class="recommend-container box-shadow">
          <div class="recommend-title">
            <span class="recommend-title-label">推荐歌手</span>
            <router-link to="/singer/11" class="show-all-recom-singer">
              <i class="mh-if refresh"></i> 查看全部
            </router-link>
          </div>

          <router-link v-for="n in 6" :key="n" to="/singer-detail/hot-song/1" class="singer-link box-show">
            <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" class="singer-link-img"/>
            <p class="singer-link-name">JesBrian</p>
            <p class="singer-link-label text-hidden">vghjbknlm;,.vdwjbknlm;,.vdwsvsd</p>
          </router-link>

          <router-link to="/musician" class="join-musician super-btn-out ripple">
            <span class="join-musician-label super-btn-in">申请入驻音乐人</span>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SlideBox from '../../../../components/frontend/SlideBox/SlideBox'
import NewDisc from '../../../../components/frontend/Index/NewDisc.vue'
import RecomRank from '../../../../components/frontend/Index/RecomRank.vue'
import PersonalRecom from '../../../../components/frontend/Index/PersonalRecom.vue'
import HotAlbum from '../../../../components/frontend/Index/HotAlbum.vue'

export default {
  name: 'index',

  components: {
    SlideBox, HotAlbum, PersonalRecom, RecomRank, NewDisc
  },

  data () {
    return {
      sliderData: []
    }
  },

  created () {
    this.$http.post('getFrontendSlider').then(res => {
      if (res.data.state === '200') {
        this.sliderData = res.data.data
      }
      console.log(this.sliderData)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="less" scoped>
  .top-container {
    height:328px; padding:2px 68px 0; position:relative;

    &-slider {
      width:76%; height:100%; padding:0.5px 0 0; float:left; box-sizing:border-box;
    }
    &-download {
      width:24%; height:100%; float:right; position:relative; z-index:9; background:url('../../../../../static/img/default/download.png') no-repeat; background-size:100% 100%;
      .super-btn {
        &-out {
          width:148px; height:43px; margin:238px 28px 0;
        }
        &-in {
          width:135px; height:30px; font-size:20px;
        }
      }
    }
  }

  .main-container {
    display:flex;

    &-left {
      flex:1; padding:13px 0 38px;
    }

    &-right {
      width:27.5%; height:100%;

      .user-info {
        &-container {
          height:138px; position:relative;
          .super-btn {
            &-out {
              width:70px; height:28px; top:42px; left:86px; position:absolute;
            }
            &-in {
              width:63px; height:22px; font-size:15px;
            }
          }
        }
        &-avatar {
          float:left;
          &-img {
            width:60px; height:60px; margin:13px; padding:3px; box-sizing:border-box; border-radius:3px;
          }
        }
        &-name {
          margin:14px 0 0; float:left; font-size:18px; color:#AAA;
        }

        &-other{
          &-container {
            width:88%; height:40px; top:86px; left:50%; position:absolute; display:flex; transform:translateX(-50%); text-align:center;
          }
          &-cell {
            flex:1; border-right:1px solid #222;
            &:last-child {
              border:none;
            }
            &-num {
              line-height:1.5em; font-size:14px; color:#999;
            }
            &-label {
              text-indent:12px; letter-spacing:8px; color:#DDD; font-weight:700;
            }
          }
        }
      }

      .recommend-container {
        .recommend-title {
          width:96%; height:40px; margin:8px auto; padding:0 12px; box-sizing:border-box; box-shadow:0 1.5px 3px -2px #AAA; line-height:42px;
          &-label {
            font-size:18px; font-weight:700;
          }

          .show-all-recom-singer {
            margin-top:4px; float:right; color:#999; font-size:16px; font-weight:700;
            &:hover {
              color: #DDD;
              > .mh-if {
                color: #19D6E6;
              }
            }
          }
        }

        .singer-link {
          width:94%; height:58px; margin:0 auto 8px; display:block;

          &-img {
            width:43px; height:43px; margin:7px 8px; float:left;
          }
          &-name {
            padding-top:8px; font-size:18px; font-weight:700; color:#BBB;
          }
          &-label {
            width:70%; color:#888; font-size:14px; line-height:1.8em;
          }
        }

        .join-musician {
          width:138px; height:38px; left:20%; margin-top:8px;

          &-label {
            width:126px; height:28px; top:48%;
          }
        }
      }
    }
  }
</style>
