<template>
  <div class="all-disc-container">
    <disc-list-group :disc-list="discList" />

    <pagination />
  </div>
</template>

<script>
import DiscListGroup from '../Disc/DiscListGroup.vue'
import Pagination from '../../common/Pagination/Pagination.vue'

export default {
  name: 'AllDisc',

  components: {
    DiscListGroup, Pagination
  },

  data () {
    return {
      discList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'},
        {id: 444, title: 'play-list-444'},
        {id: 555, title: 'play-list-555'},
        {id: 666, title: 'play-list-666'},
        {id: 777, title: 'play-list-777'},
        {id: 888, title: 'play-list-888'},
        {id: 999, title: 'play-list-999'},
        {id: 101010, title: 'play-list-101010'},
        {id: 111111, title: 'play-list-111111'},
        {id: 121212, title: 'play-list-121212'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .all-disc-container {
    margin-top:28px;
  }
</style>
