<template>
  <div class="user-group">
    <user-cell v-for="item in userList" :key="item.id" :user-data="item" class="box-shadow" />
  </div>
</template>

<script>
import UserCell from './UserCell.vue'

export default {
  name: 'UserGroup',

  components: {
    UserCell
  },

  props: {
    userList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .user-group {
    padding:2px 0;
  }
</style>
