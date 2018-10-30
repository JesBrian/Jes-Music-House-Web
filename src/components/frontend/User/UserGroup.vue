<template>
  <div>
    <user-cell v-for="item in userList" :key="item.id" :user-data="item" />
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

<style scoped>

</style>
