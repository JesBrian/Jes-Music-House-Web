<template>
  <div id="backstageLogin">
    <div class="login-container glass-bg box-show">
      <div class="login-poster">
      </div>

      <div class="login-operation">
        <div class="login-info">
          <div class="login-info-title">后台管理系统登录</div>

          <section class="login-info-section">
            <label class="login-info-section-label" for="loginPhone">
              <i class="mh-if phone"></i>手机
            </label>
            <input v-model="phone" id="loginPhone" type="text" class="glow-input cube-bg box-show" placeholder="请填写手机号码"/>
          </section>
          <section class="login-info-section">
            <label class="login-info-section-label" for="loginCode">
              <i class="mh-if code"></i>验证码
            </label>
            <div class="super-btn-out ripple" style="width:90px; height:30px; margin-top:3.5px; float:right;">
              <span class="super-btn-in" style="width:82px; height:23px; font-size:15px;">获取验证码</span>
            </div>
            <input v-model="code" id="loginCode" type="text" class="code glow-input cube-bg box-show" placeholder="请填写验证码"/>
          </section>
          <section class="login-info-section">
            <label class="login-info-section-label" for="loginPwd">
              <i class="mh-if key"></i>密码
            </label>
            <input v-model="passwd" id="loginPwd" type="password" class="glow-input cube-bg box-show" placeholder="请填写密码"/>
          </section>
        </div>

        <div class="login-btn super-btn-out ripple">
          <span class="super-btn-in">找回密码</span>
        </div>
        <div @keyup.enter="backstageLogin" @click="backstageLogin" class="login-btn super-btn-out ripple">
          <span class="super-btn-in">确认登陆</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { validateInfoByReg } from '../../../assets/js/utils.js'

export default {
  name: 'login',

  data () {
    return {
      phone: '',
      code: '',
      passwd: ''
    }
  },

  beforeCreate () {
    this.$localForage.getItem('backstageLogin', (result, value) => {
      if (value) {
        this.$http.post('checkBackstageVerification', {
        }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      } else {
      }
    })
  },

  methods: {
    backstageLogin () {
      if ((this.phone === '') || (!validateInfoByReg('phone', this.phone))) {
        this.$store.commit('SHOW_TIPS', {msg: '请填写正确的手机号码', type: 'warning'})
        return false
      }
      if (this.passwd === '') {
        this.$store.commit('SHOW_TIPS', {msg: '请填写密码', type: 'warning'})
        return false
      }

      this.$http.post('backstageLogin', {
        'phone': this.phone,
        'passwd': this.passwd
      }).then(response => {
        let result = response.data
        let tipsType = 'warning'
        if (result.state === '200') {
          tipsType = 'info'
          result.msg = '用户登录成功！'
          this.$store.commit('SAVE_LOGIN_USER_INFO', result.data)
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        }
        this.$store.commit('SHOW_TIPS', {msg: result.msg, type: tipsType})
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #backstageLogin {
    width:100%; height:100%; position:absolute; z-index:-1; background:#222;
  }

  .login {
    &-container {
      width:938px; height:388px; top:50%; left:50%; padding:28px 0; box-sizing:border-box; transform:translate(-50%, -50%); position:fixed; border-radius:12px;
    }
    &-poster {
      width:60%; height:100%; float:left; box-sizing:border-box; border-right:1px solid; border-image:linear-gradient(to bottom, #111, #181818, #222, #383838, #222, #181818, #111)30 30;
    }
    &-operation {
      width:40%; height:100%; float:right; text-align:center;
    }

    &-info {
      width:90%; height:268px; margin:0 auto 8px; text-align:left;
      &-title {
        text-align:center; letter-spacing:3px; font-size:25px; font-weight:700; color:#DDD; line-height:3.8em;
      }
      &-section {
        width:93%; height:58px; margin:0 auto; font-size:19px;
        &-label {
          font-size:20px; color:#DDD; line-height:1.9em; font-weight:700;
          > .mh-if {
            margin:0 8px 0 0; font-size:20px; color:#00D8FF; font-weight:500;
          }
        }

        > .glow-input {
          width:213px; margin-top:2px; padding:6px 8px; float:right; border-radius:4px; border:2px solid #111; font-size:15px; color:#DDD; letter-spacing:1px;
          &.code {
            width:118px; margin-right:3px;
          }
        }
      }
    }

    &-btn {
      width:118px; height:38px; margin:0 28px;
      > .super-btn-in {
        width:106px; height:28px;
      }
    }
  }
</style>
