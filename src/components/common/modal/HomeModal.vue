<template>
  <div v-if="this.$store.state.modalType !== ''" style="width:100%; height:100%; top:0; left:0; position:fixed; background:rgba(0, 0, 0, 0.5); z-index:9999;">

    <!-- 各种拟态框组件 -->
    <component :is="this.$store.state.modalType" style="z-index:5">
      <!-- 关闭按钮 -->
      <div @click="closeShowModal" class="super-btn-out" style="width:28px; height:28px; top:-6px; right:-6px; position:absolute;">
        <div class="super-btn-in mh-if all-arrow" style="width:21px; height:20.5px; top:48%; font-size:17px; font-weight:500; line-height:23px;"></div>
      </div>
    </component>

    <div @click="closeShowModal" style="width:100%; height:100%; position:relative; z-index:1;"></div>
  </div>
</template>

<script>
import Warning from './tyep/Warning.vue'
import Login from './tyep/Login.vue'
import Register from './tyep/Register.vue'

export default {
  name: 'HomeModal',

  components: {
    Warning,
    Login,
    Register
  },

  methods: {
    closeShowModal () {
      this.$store.commit('changeModalType')
    }
  }
}
</script>

<style scoped>
  div >>> #modalType {
    width:638px; top:50%; left:50%; padding:18px; position:absolute; transform:translate(-50%, -50%); box-sizing:border-box;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 5px -1px #20DBFC, inset 0 0 0 1px #272727;
  }
</style>
