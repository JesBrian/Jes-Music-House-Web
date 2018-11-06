<template>
  <div class="box-shadow">
    {{ itemData.content }}
  </div>
</template>

<script>
export default {
  name: 'FriendTipCell',

  props: {
    itemData: {
      type: Object,
      default: () => {
        return null
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
