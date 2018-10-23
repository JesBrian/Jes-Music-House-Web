<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/login.png')" class="modal-title-icon" />
      <span class="modal-title-label">用户登录</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-login-container">

      <!-- 注册本站用户登陆 -->
      <div class="modal-user-container">

        <form autocomplete="off" style="margin:28px 0 8px;">
          <div style="width:83%; height:58px; margin:0 auto; font-size:19px;">
            <label class="MyIF IDcard-1" for="loginPhone" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
            <span style="margin-left:8px; color:#DDD;">
              <i class="mh-if phone" style="margin:0 5px 0 0; font-size:23px;"></i>手机
            </span>
            </label>
            <input v-model="phone" id="loginPhone" type="text" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; float:right; font-size:15px;" placeholder="请填写手机号码"/>
          </div>
          <div style="width:83%; height:58px; margin:0 auto; font-size:19px;">
            <label class="MyIF yuechi" for="loginPwd" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
            <span style="margin-left:8px; color:#DDD;">
              <i class="mh-if key" style="margin:0 5px 0 0; font-size:23px;"></i>密码
            </span>
            </label>
            <input v-model="passwd" id="loginPwd" type="password" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; float:right; font-size:15px;" placeholder="请填写密码"/>
          </div>
        </form>

        <div style="text-align:center;">
          <span @click="resetForm" class="super-btn-out ripple" style="width:108px; height:38px; margin:0 18px;">
            <span class="super-btn-in mh-if cancel" style="width:98px; height:28px; top:49%; left:50%; font-size:16px;">&nbsp;重新填写</span>
          </span>
          <span @click="userPhoneLogin" class="super-btn-out ripple" style="width:108px; height:38px; margin:0 18px;">
            <span class="super-btn-in mh-if makesure" style="width:98px; height:28px; top:49%; left:50%; font-size:16px;">&nbsp;确认登陆</span>
          </span>
        </div>

        <p style="margin-right:18px; float:right; line-height:5em; font-size:14px;">
          <a @click="retrievePassword" class="hover-underline" style="margin:0 18px;">忘记密码</a>
          /
          <a @click="showUserRegisterModal" class="hover-underline" style="margin:0 18px;">新用户注册</a>
        </p>
      </div>

      <!-- 其他授权登陆方式 -->
      <div class="modal-oauth-container">
        <table style="width:100%;">
          <tr>
            <td style="text-align:right">
              <!-- 微信 -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Weixin'" target="_blank" class="super-btn-out ripple" title="微信登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF wechat" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
            <td>
              <!-- QQ -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=QQ'" target="_blank" class="super-btn-out ripple" title="QQ登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF qq" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
          </tr>
          <tr>
            <td style="text-align:right">
              <!-- 微博 -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Weibo'" target="_blank" class="super-btn-out ripple" title="微博登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF weibo" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
            <td>
              <!-- 百度 -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Baidu'" target="_blank" class="super-btn-out ripple" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF github" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
          </tr>
          <tr>
            <td style="text-align:right">
              <!-- Gitee -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Gitee'" target="_blank" class="super-btn-out ripple" title="码云登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF weibo" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
            <td>
              <!-- Github -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Github'" target="_blank" class="super-btn-out ripple" title="Github登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF github" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',

  data () {
    return {
      phone: '',
      passwd: ''
    }
  },

  computed: {
    userId () {
      return this.$store.state.User.id
    }
  },

  watch: {
    userId () {
      if (this.userId !== '0') {
        this.$store.commit('CHANGE_MODAL_TYPE')
      }
    }
  },

  methods: {
    resetForm () {
      this.phone = ''
      this.passwd = ''
    },

    showUserRegisterModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'register')
    },

    retrievePassword () {
      this.$store.commit('CHANGE_MODAL_TYPE')
      this.$router.push('/retrieve-password')
    },

    userPhoneLogin () {
      if (this.phone === '') {
        return false
      }
      if (this.passwd === '') {
        return false
      }
      this.$http.post('phoneLogin', {
        phone: this.phone,
        passwd: this.passwd
      }).then(response => {
        let result = response.data
        // let tipsType = 'warning'
        if (result.state === '200') {
          // tipsType = 'info'
          this.$store.commit('SAVE_LOGIN_USER_INFO', result.data)
          this.$localForage.setItem('user', result.data)
        }
        // this.$store.commit('SHOW_TIPS', {msg: result.msg, type: tipsType})
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #modalType {
    .modal-title {
      width:100%; height:42px; line-height:35px; text-align:center;

      &-icon {
        width:30px; height:30px; margin:0 8px -5px 0;
      }
      &-label {
        display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;
      }
    }

    .modal-login-container {
      width:100%; height:238px; padding-top:18px;

      .modal-user-container {
        width:72%; height:100%; float:left;
      }

      .modal-oauth-container {
        width:28%; height:100%; padding-top:30px; float:right; box-sizing:border-box; border-left:1px solid #000; border-image:linear-gradient(#25b8dd, #3072cc, #25b8dd) 2; text-align:center;
      }
    }
  }
</style>
