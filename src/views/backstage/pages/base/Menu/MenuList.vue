<template>
  <div id="backstageLayout">
    <title-bar />

    <div class="glass-bg box-show" style="width:100%; margin:0 auto;">
      <dl class="box-show" style="width:100%; height:38px; display:flex; border-radius:4px 4px 0 0; align-items:center; color:#FFF;">
        <dt style="width:60px; text-align:center;">序号</dt>
        <dt style="width:80px; text-align:center;">图标</dt>
        <dt style="flex:1; text-align:center;">名称</dt>
        <dt style="width:80px; text-align:center;">优先度</dt>
        <dt style="width:80px; text-align:center;">状态</dt>
        <dt style="width:120px; text-align:center;">操作</dt>
      </dl>

      <page-loading v-if="menuListData === null" />

      <dl v-for="(item, index) in menuListData" :key="index + 'a'" class="box-shadow" style="width:100%; height:35px; display:flex; align-items:center; color:#AAA;">
        <dt style="width:60px; text-align:center;">{{ index }}</dt>
        <dt style="width:80px; text-align:center;">图标</dt>
        <dt style="flex:1; padding-left:28px;">{{ item.name }}</dt>
        <dt style="width:80px; text-align:center;">优先度</dt>
        <dt style="width:80px; text-align:center;">状态</dt>
        <dt style="width:120px; text-align:center;">操作</dt>
      </dl>
    </div>

    <pagination v-if="menuListData" />

  </div>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'
import Pagination from '../../../../../components/common/Pagination/Pagination.vue'
import PageLoading from '../../../../../components/common/Loading/PageLoading.vue'

export default {
  name: 'MenuList',

  components: {
    TitleBar, PageLoading, Pagination
  },

  data () {
    return {
      menuListData: null
    }
  },

  created () {
    this.$http.post('getMenuListPagination').then(result => {
      console.log(result)
      this.menuListData = result.data.data
    }).catch(error => {
      console.log(error)
    })
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
