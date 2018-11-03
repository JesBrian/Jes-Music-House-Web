<template>
  <div class="modify-play-list">
    <div class="modify-play-list-nav">
      <i class="modify-play-list-nav-icon mh-if comment"></i>
      <router-link :to="`/user/music/play-list/${$route.params.id}`" class="modify-play-list-nav-title">
        the name of the play list
      </router-link>
    </div>

    <div style="width:93%; margin:0 auto; display:flex;">
      <div style="flex:1; background:lightblue">5</div>
      <div style="width:208px;">
        <img @click="toggleShow" :src="imgDataUrl" class="glass-bg box-show" style="width:138px; height:138px; margin:0 auto; padding:5px; display:block;"/>
        <div @click="toggleShow" class="super-btn-out" style="width:128px; height:32px; margin:12px auto 0; display:block;">
          <span class="super-btn-in mh-if comment" style="width:118px; height:24px; top:48%;">&nbsp;&nbsp;编辑封面</span>
        </div>
      </div>
    </div>

    <upload-img v-if="show" v-model="show" field="img" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" :width="60" :height="60" url="/upload" :params="params" :headers="headers" img-format="png"></upload-img>

  </div>
</template>

<script>
import UploadImg from '../../common/Upload/UploadImg.vue'

export default {
  name: 'ModifyPlayList',

  components: {
    UploadImg
  },

  data () {
    return {
      show: false,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: 'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'
    }
  },

  methods: {
    toggleShow () {
      this.show = !this.show
    },
    /**
     * crop success
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------')
      this.imgDataUrl = imgDataUrl
    },
    /**
     * upload success
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      console.log(jsonData)
      console.log('field: ' + field)
    },
    /**
     * upload fail
     * [param] status    server api return error status, like 500
     * [param] field
     */
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log(status)
      console.log('field: ' + field)
    }
  }
}
</script>

<style lang="less" scoped>
  .modify-play-list {
    padding:8px;

    &-nav {
      width:93%; height:38px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:38px;
      &-icon {
        margin-right:8px; color:#00d8ff;
      }
      &-title {
        font-size:16px;
      }
    }
  }
</style>
