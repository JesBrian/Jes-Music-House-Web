<template>
  <gemini-scrollbar>
    <div id="backstageLayout">
      <title-bar />

      <div class="glass-bg box-show" style="width:100%; margin:0 auto;">
        <div class="box-show" style="width:100%; height:38px; display:flex; border-radius:4px 4px 0 0; line-height:38px; align-items:center; color:#FFF;">
          <div style="width:60px; height:100%; border-right:1px solid #282828; text-align:center;">序号</div>
          <div style="width:80px; height:100%; border-right:1px solid #282828; text-align:center;">图标</div>
          <div style="flex:1; height:100%; border-right:1px solid #282828; text-align:center;">名称</div>
          <div style="width:80px; height:100%; border-right:1px solid #282828; text-align:center;">优先度</div>
          <div style="width:70px; height:100%; border-right:1px solid #282828; text-align:center;">状态</div>
          <div style="width:120px; height:100%; text-align:center;">操作</div>
        </div>

        <page-loading v-if="menuListData === null" />

        <div v-for="(item, index) in menuListData" :key="index + 'a'" class="box-shadow" style="width:100%; height:35px; display:flex; align-items:center; color:#AAA;">
          <div style="width:60px; text-align:center;">{{ index }}</div>
          <div style="width:80px; text-align:center;">图标</div>
          <div style="flex:1; padding-left:28px;">{{ item.name }}</div>
          <div style="width:80px; text-align:center;">优先度</div>
          <div style="width:70px; text-align:center;">状态</div>
          <div style="width:120px; text-align:center;">操作</div>
        </div>
      </div>

      <pagination v-if="menuListData" />

    </div>
  </gemini-scrollbar>
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
