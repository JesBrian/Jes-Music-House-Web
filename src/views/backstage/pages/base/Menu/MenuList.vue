<template>
  <div id="backstageLayout">
    <title-bar />

    <div class="glass-bg box-show" style="width:100%; margin:0 auto;">
      <div class="box-show" style="width:100%; height:38px; border-radius:4px 4px 0 0; line-height:36px; color:#FFF;">
        <div style="; display:inline-block;">序号</div>
        <div style="; display:inline-block;">操作</div>
        <div style="; display:inline-block;">图标</div>
        <div style="; display:inline-block;">名称</div>
        <div style="; display:inline-block;">优先度</div>
        <div style="; display:inline-block;">状态</div>
      </div>

      <page-loading v-if="menuListData === null" />

      <div v-for="n in menuListData" class="box-shadow" style="width:100%; height:35px;"></div>
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
