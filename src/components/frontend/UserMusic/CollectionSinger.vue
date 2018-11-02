<template>
  <div class="collection-singer">

    <singer-group :singer-list="singerList" />

    <pagination />
  </div>
</template>

<script>
import SingerGroup from '../Singer/SingerGroup.vue'
import Pagination from '../../common/Pagination/Pagination.vue'

export default {
  name: 'CollectionSinger',

  components: {
    SingerGroup, Pagination
  },

  data () {
    return {
      singerList: [
        {id: 111, name: '歌手名称1'},
        {id: 112, name: 'The Name of the singer 2'},
        {id: 113, name: '歌手名称3'},
        {id: 114, name: 'xvagsyvcbhsdbchds'},
        {id: 115, name: '歌手名称1'},
        {id: 116, name: 'The Name of the singer 6'},
        {id: 117, name: 'The Name of the singer 7'},
        {id: 118, name: '歌手名称8'},
        {id: 119, name: '歌手名称9'},
        {id: 120, name: 'The Name of the singer 10'},
        {id: 1111, name: '歌手名称11'},
        {id: 1112, name: 'The Name of the singer 12'},
        {id: 1113, name: '歌手名称13'},
        {id: 1114, name: 'uriowqnofnvxst'},
        {id: 1115, name: '歌手名称15'},
        {id: 1116, name: 'The Name of the singer 16'},
        {id: 1117, name: 'The Name of the singer 17'},
        {id: 1118, name: '歌手名称18'},
        {id: 1119, name: '歌手名称19'},
        {id: 1120, name: 'The Name of the singer 110'}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .collection-singer {
    width:93%; margin:38px auto 0;
  }
</style>
