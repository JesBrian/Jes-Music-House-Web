<template>
  <div>
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <i class="mh-if exponential" style="margin-right:8px; color:#00d8ff; font-size:32px;"></i><span style="font-size:23px; font-weight:700;">榜单</span>
      <router-link to="/rank" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>

    <div style="width:93%; height:100%; margin:0 auto;">
      <div class="" style="width:33%; height:100%; float:left; box-sizing:border-box; border:1px solid #282828;">
        <div style="width:100%; height:114px;">
          <router-link to="rank">
            <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
          </router-link>
          <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
        </div>
        <ul style="width:100%; line-height:32px;">
          <li v-for="n in 10" :key="n + 99" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;">
            <span style="width:23px; float:left; margin-right:8px; text-align:center;">{{ n }}</span>
            <p class="text-hidden" style="max-width:80%; float:left;">The Name of the Song {{ n }}</p>
          </li>
          <li class="rank-cell" style="width:100%; height:32px;">
            <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
          </li>
        </ul>
      </div>
      <div  style="width:34%; height:100%; float:left; box-sizing:border-box; border-top:1px solid #282828; border-bottom:1px solid #282828;">
        <div style="width:100%; height:114px;">
          <router-link to="rank">
            <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
          </router-link>
          <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
        </div>
        <ul style="width:100%; line-height:32px;">
          <li v-for="n in 10" :key="n + 99" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;">
            <span style="width:23px; float:left; margin-right:8px; text-align:center;">{{ n }}</span>
            <p class="text-hidden" style="max-width:80%; float:left;">The Name of the Song {{ n }}</p>
          </li>
          <li class="rank-cell" style="width:100%; height:32px;">
            <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
          </li>
        </ul>
      </div>
      <div style="width:33%; height:100%; float:left; box-sizing:border-box; border:1px solid #282828;">
        <div style="width:100%; height:114px;">
          <router-link to="rank">
            <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
          </router-link>
          <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
          <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
            <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
          </div>
        </div>
        <ul style="width:100%; line-height:32px;">
          <li v-for="n in 10" :key="n + 99" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;">
            <span style="width:23px; margin-right:8px; float:left; text-align:center;">{{ n }}</span>
            <p class="text-hidden" style="max-width:80%; float:left;">The Name of the Song {{ n }}</p>
          </li>
          <li class="rank-cell" style="width:100%; height:32px;">
            <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
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

<style scoped>
  .read-more {
    margin-top:46px; float:right; font-size:13px; color:#888; line-height:1em;
  }
  .read-more:hover {
    color:#EEE;
    text-decoration:underline;
  }
  .read-more > .mh-if {
    font-size:12.5px;
  }
  .read-more:hover > .mh-if {
    color: #20dbfc;
  }

  li.rank-cell:nth-child(odd) {
    background:#181818;
  }
</style>
