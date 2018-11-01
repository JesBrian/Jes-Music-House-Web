<template>
  <div class="self-info box-shadow">
    <div class="self-info-base">
      <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="self-info-base-avatar cube-bg box-show"/>
      <p class="self-info-base-name">JesBrian</p>
      <p class="self-info-base-label text-hidden">JesBrianJesBrianJesBrianJesBrian</p>
    </div>
    <div class="self-info-statistics">
      <router-link to="/user-info/1" class="self-info-statistics-cell" >
        <p class="self-info-statistics-cell-num">0</p>
        <p class="self-info-statistics-cell-label">动态</p>
      </router-link>
      <router-link to="/user-info/1" class="self-info-statistics-cell active" >
        <p class="self-info-statistics-cell-num">0</p>
        <p class="self-info-statistics-cell-label">关注</p>
      </router-link>
      <router-link to="/user-info/1" class="self-info-statistics-cell" >
        <p class="self-info-statistics-cell-num">0</p>
        <p class="self-info-statistics-cell-label">粉丝</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelfInfo'
}
</script>

<style lang="less" scoped>
  .self-info {
    margin-bottom:38px;

    &-base {
      width:86%; height:43px; margin:18px auto 0;
      &-avatar {
        width:43px; height:43px; margin-right:13px; padding:2px; float:left; border-radius:0;
      }
      &-name {
        padding-top:1px; font-size:18px;
      }
      &-label {
        width:68%; font-size:14px; line-height:2em;
      }
    }

    &-statistics {
      height:43px; margin:16px auto 0; padding-bottom:12px; display:flex; text-align:center; font-weight:700;
      &-cell {
        flex:1;
        &.active {
          border:1px solid #383838; border-top:none; border-bottom:none;
        }
        &-num {
          font-size:20px; color:#DDD;
        }
        &-label {
          margin-left:9px; line-height:1.5em; letter-spacing:8px;
        }
      }
    }
  }
</style>
