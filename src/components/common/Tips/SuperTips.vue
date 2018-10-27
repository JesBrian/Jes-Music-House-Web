<template>
  <div :class="[$store.state.View.tipsType, {active: $store.state.View.topMenuIsShowSecond}]"
       class="super-tips glass-bg box-show">
    <div class="super-tips-icon">
      <i class="mh-if gear"></i>
    </div>
    <p class="super-tips-label">
      {{ $store.state.View.tips }}
    </p>
    <i @click="closeTips" class="close-button">×</i>
  </div>
</template>

<script>
export default {
  name: 'SuperTips',

  methods: {
    closeTips () {
      this.$store.commit('SHOW_TIPS', {})
    }
  }
}
</script>

<style lang="less" scoped>
  .super-tips {
    height:38px; top:68px; right:18px; padding:0 28px 0 0; position:fixed; z-index:9999; box-sizing:border-box;
    &.active {
      top:98px;
    }

    &-icon {
      width:38px; height:38px; margin-right:8px; display:inline-block; border-radius:4px 4px 6px 4px; line-height:37px; text-align:center; box-shadow:inset -2px 0 2px -2px #444, 2px 0 2px -2px #000;
      > .gear {
        font-size:18px;
      }
    }

    &-label {
      display:inline-block; line-height:36px; color:#AAA; letter-spacing:1.3px;
    }

    &.info {
      box-shadow:0 0 2px #00d8ff, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
      > .super-tips-icon > .gear {
        color:#00d8ff;
      }
    }
    &.warning {
      box-shadow:0 0 2px #FF92C3, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
      > .super-tips-icon > .gear {
        color:#FF92C3;
      }
    }

    > .close-button {
      top:-3px; right:2px; position:absolute; font-size:23px; color:#AAA; cursor:pointer;

      &:hover {
        color:#EEE;
      }
    }
  }
</style>
