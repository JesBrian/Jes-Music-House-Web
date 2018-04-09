<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="cube-bg box-show" style="width:100%; height:42px; line-height:35px; text-align:center;">
      <img v-lazy="require('../../../../../static/img/icon/login.png')" style="width:30px; height:30px; margin:0 8px -5px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">用户登录</span>
    </div>

    <!-- 拟态框内容 -->
    <div style="width:100%; height:238px; padding-top:18px;">

      <!-- 注册本站用户登陆 -->
      <div style="width:72%; height:100%; float:left;">

        <div style="width:100%; height:32%; margin:0 auto; font-size:19px;">
          <label class="MyIF IDcard-1" for="loginUser" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
            <span style="margin-left:8px; color:#DDD;">用户名</span>
          </label>
          <input id="loginUser" type="text" class="s1c-Bg box-show" v-model="username" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写用户名"/>
        </div>

        <div style="width:83%; height:32%; margin:0 auto; font-size:19px;">
          <label class="MyIF yuechi" for="loginPwd" style="font-size:20px; line-height:1.8em; color:#2DBEFF;">
            <span style="margin-left:8px; color:#DDD;">密码</span>
          </label>
          <input id="loginPwd" type="password" class="s1c-Bg box-show" v-model="passwd" style="width:268px; padding:6px 12px; float:right;" placeholder="请填写密码"/>
        </div>

        <div style="text-align:center;">
          <span class="super-btn-out" style="width:108px; height:38px; margin:0 48px 0 0;">
            <button class="super-btn-in mh-if cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;"> 重新填写</button>
          </span>
          <span class="super-btn-out" @click="userLogin" style="width:108px; height:38px; margin:0 0 0 48px;">
            <button class="super-btn-in mh-if makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;"> 确认登陆</button>
          </span>
        </div>

        <p style="margin-right:18px; float:right; line-height:2.5em;">
          <a class="hover-underline" style="margin:0 18px;">忘记密码</a>/<a @click="showUserRegisterModal" class="hover-underline" style="margin:0 18px;">新用户注册</a>
        </p>
      </div>

      <!-- 其他授权登陆方式 -->
      <div style="width:28%; height:100%; padding-top:30px; float:right; box-sizing:border-box; border-left:1px solid #000; border-image:linear-gradient(#25b8dd, #3072cc, #25b8dd) 2; text-align:center;">
        <table style="width:100%;">
          <tr>
            <td style="text-align:right">
              <!-- 微信 -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Weixin'" target="_blank" @click="checkOAuthLogin" class="super-btn-out" title="微信登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF wechat" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
            <td>
              <!-- QQ -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=QQ'" target="_blank" @click="checkOAuthLogin" class="super-btn-out" title="QQ登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF qq" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
          </tr>
          <tr>
            <td style="text-align:right">
              <!-- 微博 -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Weibo'" target="_blank" @click="checkOAuthLogin" class="super-btn-out" title="微博登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF weibo" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
            <td>
              <!-- 百度 -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Baidu'" target="_blank" @click="checkOAuthLogin" class="super-btn-out" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF github" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
          </tr>
          <tr>
            <td style="text-align:right">
              <!-- Gitee -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Gitee'" target="_blank" @click="checkOAuthLogin" class="super-btn-out" title="码云登陆" style="width:40px; height:40px; margin:8px 0;">
                <span class="super-btn-in MyIF weibo" style="width:30px; height:30px; top:49%; left:50%; line-height:30px; font-size:20px;"></span>
              </a>
            </td>
            <td>
              <!-- Github -->
              <a :href="this.$store.state.baseHost + 'index.php/oauth/login?oauthType=Github'" target="_blank" @click="checkOAuthLogin" class="super-btn-out" title="Github登陆" style="width:40px; height:40px; margin:8px 0;">
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

  methods: {
    showUserRegisterModal () {
      this.$store.commit('changeModalType', 'register')
    }
  }
}
</script>

<style scoped>

</style>
