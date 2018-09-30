<template>
  <div id="backstageLayout">
    <!--  -->
    <title-bar />

    <div style="color:#DDD">
      <label>
        菜单名称
        <input @blur="checkMenuNameExist" v-model="name" type="text" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;" placeholder="请填写菜单名称"/>
      </label>
    </div>
    <div style="color:#DDD">
      <label>
        菜单图标
        <input v-model="icon" type="text" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;"/>
        <div class="super-btn-out" style="width:38px; height:38px;">
          <span class="super-btn-in mh-if" style="width:29px; height:29px;"></span>
        </div>
      </label>
    </div>
    <div style="color:#DDD">
      <label>
        是否二级菜单
        <input type="checkbox" v-model="isSecondMenu" />
      </label>
    </div>
    <div v-if="isSecondMenu">
      <div style="color:#DDD">
        <label>
          上级菜单
          <input v-model="parentMenuLabel" type="text" class="cube-bg box-show" disabled style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;"/>
          <div class="super-btn-out" style="width:68px; height:33px;">
            <span class="super-btn-in" style="width:58px; height:23px; line-height:23px;">选择</span>
          </div>
        </label>
      </div>
      <div style="color:#DDD">
        <label>
          页面链接
          <input v-model="url" type="text" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;"/>
        </label>
      </div>
    </div>

    <div style="color:#DDD">
      <label>
        是否启用
        <super-switch v-model="state" />
      </label>
    </div>
    <div style="color:#DDD">
      <div @click="createMenu" class="super-btn-out" style="width:118px; height:36px;">
        <span class="super-btn-in" style="width:108px; height:26px; line-height:25.5px;">确认创建</span>
      </div>
      <div @click="cancelToBack" class="super-btn-out" style="width:118px; height:36px;">
        <span class="super-btn-in" style="width:108px; height:26px; line-height:25.5px;">取消返回</span>
      </div>
    </div>

  </div>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'
import SuperSwitch from '../../../../../components/common/Switch/SuperSwitch.vue'

export default {
  name: 'Menu',

  components: {
    TitleBar, SuperSwitch
  },

  data () {
    return {
      icon: '',
      name: '',
      isSecondMenu: false,
      pid: 0,
      url: '',
      state: true,
      parentMenuLabel: ''
    }
  },

  methods: {
    checkMenuNameExist () {
      this.$http.post('checkMenuNameExist', {
        name: this.name
      }).then(response => {
        if (response.data.state === '200') {
        }
      }).catch(error => {
        console.log(error)
      })
    },

    createMenu () {
      let data = {
        name: this.name,
        icon: this.icon,
        isSecondMenu: this.isSecondMenu
      }

      if (data.isSecondMenu === true) {
        data.pid = this.pid
        data.url = this.url
      }

      this.$http.post('createMenu', data).then(response => {
        if (response.data.state === '200') {
          console.log(response.data)
        }
      }).catch(error => {
        console.log(error)
      })
    },

    cancelToBack () {
    }
  }
}
</script>

<style scoped>
</style>
