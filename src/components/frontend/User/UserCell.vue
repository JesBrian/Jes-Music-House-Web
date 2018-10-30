<template>
  <div>
    UserCell {{ userData.name }}
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

<style scoped>

</style>
