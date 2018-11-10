<template>
  <gemini-scrollbar>
    <div id="backstageLayout">
      <title-bar />

      <div class="list-container" style="min-height:308px; position:relative;">
        <div class="glass-bg box-show" style="width:100%; margin:0 auto;">
          <div class="box-show" style="width:100%; height:38px; display:flex; border-radius:4px 4px 0 0; line-height:38px; align-items:center; color:#FFF;">
            <div style="width:60px; height:100%; border-right:1px solid #282828; text-align:center;">序号</div>
            <div style="width:138px; height:100%; border-right:1px solid #282828; text-align:center;">标题</div>
            <div style="flex:1; height:100%; border-right:1px solid #282828; text-align:center;">图片</div>
            <div style="flex:1; height:100%; border-right:1px solid #282828; text-align:center;">Url</div>
            <div style="width:128px; height:100%; border-right:1px solid #282828; text-align:center;">创建时间</div>
            <div style="width:80px; height:100%; border-right:1px solid #282828; text-align:center;">优先度</div>
            <div style="width:70px; height:100%; border-right:1px solid #282828; text-align:center;">状态</div>
            <div style="width:120px; height:100%; text-align:center;">操作</div>
          </div>

          <page-loading v-if="slideListData.length === 0" />

          <div v-for="(item, index) in slideListData" :key="index + 'a'" class="box-shadow" style="width:100%; height:35px; display:flex; align-items:center; color:#AAA;">
            <div style="width:60px; text-align:center;">{{ index + 1 }}</div>
            <div style="width:138px; text-align:center; overflow:hidden; word-break:break-all; text-overflow:ellipsis; white-space:nowrap;">{{ item.title }}</div>
            <div style="flex:1; text-align:center; overflow:hidden; word-break:break-all; text-overflow:ellipsis; white-space:nowrap;">{{ item.img }}</div>
            <div style="flex:1; text-align:center; overflow:hidden; word-break:break-all; text-overflow:ellipsis; white-space:nowrap;">Url</div>
            <div style="width:128px; text-align:center;">{{ item.createTime }}</div>
            <div style="width:80px; text-align:center;">{{ item.level }}</div>
            <div style="width:70px; text-align:center;">{{ item.status }}</div>
            <div style="width:120px; text-align:center;">操作</div>
          </div>
        </div>
      </div>

      <pagination v-if="slideListData" :all-page="pageCount" @changePage="getSlideListData" />
    </div>
  </gemini-scrollbar>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'
import Pagination from '../../../../../components/common/Pagination/Pagination.vue'
import PageLoading from '../../../../../components/common/Loading/PageLoading.vue'

export default {
  name: 'SlideList',

  components: {
    TitleBar, PageLoading, Pagination
  },

  data () {
    return {
      slideListData: [],
      pageCount: 0
    }
  },

  created () {
    this.getSlideListData()
  },

  methods: {
    getSlideListData (nowPage = 1) {
      this.slideListData = []

      let data = {
        nowPage: nowPage
      }

      this.$http.post('getSlideListPagination', data).then(result => {
        console.log(result)
        this.slideListData = result.data.data.slideData
        this.pageCount = result.data.data.pageCount
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
