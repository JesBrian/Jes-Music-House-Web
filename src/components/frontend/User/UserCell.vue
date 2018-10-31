<template>
  <div class="user-cell">
    <router-link :to="`/user/${userData.id}`">
      <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="user-avatar" />
    </router-link>
    <div class="user-name text-hidden">
      <router-link to="/user/1">
        UserCell {{ userData.name }}
        UserCell {{ userData.name }}
        UserCell {{ userData.name }}
      </router-link>
    </div>
    <div class="super-btn-out">
      <span class="super-btn-in">关注</span>
    </div>
    <span class="user-play-list">歌单：123</span>
    <span class="user-fans">粉丝：321</span>
  </div>
</template>

<script>
export default {
  name: 'UserCell',

  props: {
    userData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .user {
    &-cell {
      height:48px; display:flex; align-items:center;
      .super-btn {
        &-out {
          width:68px; height:28px; margin:0 18px;
        }
        &-in {
          width:61px; height:22px;
        }
      }
    }
    &-avatar {
      width:33px; height:33px; margin:0 13px 0 8px;
    }
    &-name {
      width:308px;
    }
    &-play-list, &-fans {
      width:82px; margin:0 8px; font-size:14px;
    }
  }
</style>
