<template>
  <div class="box-shadow">
    {{ itemData.content }}
  </div>
</template>

<script>
export default {
  name: 'CommentCell',

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

<style scoped>

</style>
