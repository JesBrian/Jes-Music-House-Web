<template>
  <div id="homeLayout">

    <!-- 基本信息 -->
    <div style="width:62%; display:inline-block;">

      <div style="width:88%; margin:0 auto;">
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">昵称</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="username" type="text" class="glow-input cube-bg box-show"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">性别</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="sex" type="text" name="name" class="glow-input cube-bg box-show"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">生日</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="birth" type="text" name="name" class="glow-input cube-bg box-show"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">地区</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="address" type="text" name="name" class="glow-input cube-bg box-show"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">邮箱</div>
        <div style="width:88%; display:inline-block;">
          <input v-model="mail" type="text" name="name" class="glow-input cube-bg box-show"/>
        </div>
        <div style="width:12%; padding-bottom:18px; float:left; text-align:center;">介绍</div>
        <div style="width:88%; display:inline-block;">
          <textarea v-model="description" class="glow-input cube-bg box-show" style="width:100%; height:108px; padding:8px; background:#383838; font-size:15px; resize:none;"></textarea>
        </div>
      </div>

      <!-- 保存按钮区域 -->
      <div style="margin-top:28px; text-align:center;">
        <div @click="updateUserInfo" class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
          <span class="super-btn-in mh-if makesure" style="width:98px; height:22px; line-height:23px;"> 确认保存</span>
        </div>
        <div @click="goBack" class="super-btn-out" style="width:108px; height:32px; margin:0 18px;">
          <span class="super-btn-in mh-if cancel" style="width:98px; height:22px; line-height:23px;"> 取消返回</span>
        </div>
      </div>
    </div>

    <!-- 修改头像 -->
    <div style="width:38%; float:right; text-align:center;">
      <img @click="toggleShow" :src="imgDataUrl" class="glass-bg box-show" style="width:138px; height:138px; margin:0 auto; padding:5px; display:block;"/>
      <div @click="toggleShow" class="super-btn-out" style="width:128px; height:32px; margin-top:12px;">
        <span class="super-btn-in mh-if avatar" style="width:118px; height:24px; top:48%;">&nbsp;&nbsp;修改头像</span>
      </div>
    </div>

    <upload-img v-if="show" v-model="show" field="img" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" :width="60" :height="60" url="/upload" :params="params" :headers="headers" img-format="png"></upload-img>

  </div>
</template>

<script>
import UploadImg from '../../../../components/common/Upload/UploadImg.vue'
// import { validateInfoByReg } from '../../assets/js/utils/validateInfo.js'

export default {
  name: 'Update',

  components: {
    UploadImg
  },

  data () {
    return {
      username: '',
      sex: '',
      birth: '',
      address: '',
      mail: '',
      description: '',

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

  beforeMount () {
    this.$http.post('getUserBaseInfo', {
      id: this.$store.state.User.id
    }).then((response) => {
      if (response.data.state === '200') {
        let userInfo = response.data.data
        this.username = this.$store.state.User.username
        this.sex = userInfo.sex
        this.birth = userInfo.birth
        this.address = userInfo.address
        this.mail = userInfo.mail
        this.description = userInfo.description
      }
    }).catch((error) => {
      console.error(error)
    })
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
    },

    updateUserInfo () {
      if (this.username === '') {
        return false
      }

      // if ((this.mail !== '') && (!validateInfoByReg('mail', this.mail))) {
      //   return false
      // }

      this.$http.post('updateUserBaseInfo', {
        userId: this.$store.state.User.id,
        username: this.username,
        sex: this.sex,
        birth: this.birth,
        address: this.address,
        description: this.description,
        mail: this.mail
      }).then((response) => {
        // console.log(response)
        if (response.data.state === '200') {
          this.$store.commit('SHOW_TIPS', {
            msg: '信息修改成功',
            type: 'info'
          })
        }
      }).catch((error) => {
        console.error(error)
      })
    },

    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
