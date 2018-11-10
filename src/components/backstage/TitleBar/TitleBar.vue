<template>
  <div class="title-bar cube-bg box-show">
    <i class="mh-if double-arrow-left"></i>
    <div class="title-bar-content">
      <router-link to="/" class="title-bar-link">主页</router-link>
      <router-link to="" class="title-bar-link">{{ title }}</router-link>
    </div>
    <i class="mh-if double-arrow-right"></i>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',

  props: {
    title: {
      type: String,
      default: '菜单'
    }
  }
}
</script>

<style lang="less" scoped>
  .title-bar {
    width:608px; height:52px; margin:28px auto 38px; position:relative; text-align:center; font-size:28px; line-height:45px; font-weight:700; color:#AAA; letter-spacing:1px;

    &-content {
      margin:0 28px; display:inline-block;
    }

    &-link {
      color:#DDD;
      &:hover {
        color:#2af1fc;
      }
      &::after {
        content:'/'; padding-left:8px; color:#888;
      }
      &:last-child::after {
        content:''; padding:0;
      }
    }
    > .mh-if {
      font-size:22px; color:#24c9ff;
    }
  }
</style>
