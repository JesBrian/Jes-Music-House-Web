<template>
  <div id="homeLayout">

    <div class="friend-left box-show">
      <friend-tip-group />
    </div>

    <div class="friend-right">
      <self-info />
      <download-client class="box-shadow" />
    </div>

  </div>
</template>

<script>
import FriendTipGroup from '../../../../components/frontend/Friend/FriendTipGroup.vue'
import SelfInfo from '../../../../components/frontend/RightCommend/SelfInfo.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'Friend',

  components: {
    FriendTipGroup, SelfInfo, DownloadClient
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    display:flex;
  }

  .friend {
    &-left {
      padding:8px; flex:1;
    }
    &-right {
      width:25%; height:100%; padding:34px 18px;
    }
  }
</style>
