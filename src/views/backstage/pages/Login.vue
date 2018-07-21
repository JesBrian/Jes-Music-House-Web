<template>
  <div id="login" style="width:100%; height:100%; position:absolute; z-index:-1; background:#222;">
    <div class="glass-bg box-show" style="width:908px; height:388px; top:50%; left:50%; padding:28px 0; box-sizing:border-box; transform:translate(-50%, -50%); position:fixed; display:inline-block; border-radius:12px;">
      <div style="width:58%; height:100%; float:left; box-sizing:border-box; border-right:1px solid; border-image:linear-gradient(to bottom, #111, #181818, #222, #383838, #222, #181818, #111)30 30;">
      </div>

      <div style="width:42%; height:100%; float:right;">
        <div style="width:100%; text-align:center;">

          <div style="width:83%; height:248px; margin:0 auto 8px; text-align:left;">
            <div style="margin-bottom:8px; text-align:center; letter-spacing:3px; font-size:25px; font-weight:700; color:#DDD; line-height:3.8em;">管理后台登录</div>

            <div style="width:90%; height:58px; margin:0 auto; font-size:19px;">
              <label class="MyIF IDcard-1" for="loginPhone" style="font-size:20px; line-height:2em; color:#2DBEFF;">
                <span style="color:#DDD;">
                  <i class="mh-if headphone" style="margin:0 8px 0 0;"></i>手机
                </span>
              </label>
              <input v-model="phone" id="loginPhone" type="text" class="cube-bg box-show" style="width:208px; margin-top:2px; padding:6px 10px; float:right; font-size:15px;" placeholder="请填写手机号码"/>
            </div>
            <div style="width:90%; height:58px; margin:0 auto; font-size:19px;">
              <label class="MyIF yuechi" for="loginPwd" style="font-size:20px; line-height:2em; color:#2DBEFF;">
                <span style="color:#DDD;">
                  <i class="mh-if headphone" style="margin:0 8px 0 0;"></i>密码
                </span>
              </label>
              <input v-model="passwd" id="loginPwd" type="password" class="cube-bg box-show" style="width:208px; margin-top:2px; padding:6px 10px; float:right; font-size:15px;" placeholder="请填写密码"/>
            </div>
          </div>

          <div class="super-btn-out" style="width:118px; height:38px; margin:0 18px;">
            <span class="super-btn-in" style="width:106px; height:26px; line-height:26px;">找回密码</span>
          </div>
          <div @keyup.enter="backstageLogin" @click="backstageLogin" class="super-btn-out" style="width:118px; height:38px; margin:0 18px;">
            <span class="super-btn-in" style="width:106px; height:26px; line-height:26px;">确认登陆</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      phone: '',
      passwd: ''
    }
  },

  beforeCreate () {
    this.localForage.getItem('backstageLogin', (result, value) => {
      if (value) {
        this.axios.post('checkBackstageVerification', {
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
      if (this.phone === '') {
        return false
      }
      if (this.passwd === '') {
        return false
      }

      this.axios.post('backstageLogin', {
        'phone': this.phone,
        'passwd': this.passwd
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

  input, textarea {
    border-radius:4px;
    border:2px solid #111;
    color:#888; letter-spacing:1px;
  }
  input:focus, textarea:focus {
    border-color: #2abae6;
    box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 10px -1px #00d8ff, 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
    color:#CCC;
  }
</style>
