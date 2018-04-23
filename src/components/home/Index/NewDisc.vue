<template>
  <div>
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <span style="float:left; font-size:23px; font-weight:700;">新碟上架</span>
      <router-link to="/disc" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>
    <div class="glass-bg box-show" style="width:93%; height:138px; margin:0 auto 18px; position:relative;">
      <a class="p-n-btn prev-btn ban-select" style="width:23px; height:43px; top:48%; left:13px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
      <a class="p-n-btn next-btn ban-select" style="width:23px; height:43px; top:48%; right:13px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
      <div style="width:100%; height:100%; padding:8px 43px; box-sizing:border-box;">
        <ul style="width:100%; height:100%;">
          <li v-for="n in 5" style="width:20%; height:100%; float:left;">
            <div class="new-disc-cell" style="width:100%; height:100%; position:relative; text-align:center;">
              <router-link to="playList" style="margin:6px 0 0 6px; position:relative; display:inline-block;">
                <img v-lazy="'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130'" style="width:65px; height:65px; top:5px; left:5px; position:absolute;"/>
                <img v-lazy="require('../../../../static/img/default/disc.png')" style="width:88px; height:75px;"/>
              </router-link>
              <i @click="playThisPlayList" class="mh-if play"></i>
              <p class="text-hidden" style="margin-left:26px; text-align:left;">
                <router-link to="playList" style="font-size:14.5px;">cx城市规划s市规划s</router-link>
              </p>
              <router-link to="singer" style="font-size:12.5px;">JesBrian</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDisc'
}
</script>

<style scoped>
  .read-more {
    margin-top:38px; float:right; font-size:13px; color:#888; line-height:1em;
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

  .p-n-btn {
    background:url('../../../../static/img/button/button.png') no-repeat;
    background-size:auto 103%;
  }
  .p-n-btn.prev-btn {
    background-position:0 0;
  }
  .p-n-btn.prev-btn:hover {
    background-position:-24px 0;
  }
  .p-n-btn.next-btn {
    background-position:-49px 0;
  }
  .p-n-btn.next-btn:hover {
    background-position:-73px 0;
  }

  .new-disc-cell>i.mh-if {
    top:60px; left:78px; position:absolute; display:none;
  }
  .new-disc-cell:hover>i.mh-if {
    display:inline-block;
  }
  .new-disc-cell>i.mh-if:hover {
    color:#20dbfc;
  }
</style>
