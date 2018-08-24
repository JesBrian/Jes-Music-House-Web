<template>
  <div id="backstageLayout">
    <!--  -->
    <div class="cube-bg box-show" style="width:608px; height:52px; margin:28px auto 38px; position:relative; text-align:center; font-size:28px; line-height:45px; font-family:'Microsoft YaHei', '黑体', sans-serif; font-weight:700; color:#AAA; letter-spacing:1px;">
      <i class="mh-if double-arrow-left" style="font-size:22px; color:#24c9ff"></i>
      <a class="font-style" style="margin:0 28px;">主页/菜单</a>
      <i class="mh-if double-arrow-right" style="font-size:22px; color:#24c9ff"></i>
    </div>

    <div style="color:#DDD">
      <label>
        菜单名称
        <input v-model="name" type="text" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;" placeholder="请填写菜单名称"/>
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
    <div style="color:#DDD" v-if="isSecondMenu">
      <label>
        上级菜单
        <input v-model="parentMenuLabel" type="text" class="cube-bg box-show" disabled style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;"/>
        <div class="super-btn-out" style="width:68px; height:33px;">
          <span class="super-btn-in" style="width:58px; height:23px; line-height:23px;">选择</span>
        </div>
      </label>
    </div>
    <div style="color:#DDD" v-if="isSecondMenu">
      <label>
        页面链接
        <input v-model="url" type="text" class="cube-bg box-show" style="width:268px; margin-top:2px; padding:6px 10px; font-size:15px;"/>
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
export default {
  name: 'Menu',

  data () {
    return {
      icon: '',
      name: '',
      isSecondMenu: false,
      pid: 0,
      url: '',
      parentMenuLabel: ''
    }
  },

  methods: {
    createMenu () {
    },

    cancelToBack () {
    }
  }
}
</script>

<style scoped>

  /* 控制文本渐变效果 */
  .font-style {
    font-weight: 900;
    background-image: -webkit-linear-gradient(left, #2ed8ff, #2d95e5 25%, #2ed8ff 50%, #2d95e5 75%, #2ed8ff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 1.68s infinite linear;
  }
  @-webkit-keyframes masked-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

</style>
