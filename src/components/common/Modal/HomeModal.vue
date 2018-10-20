<template>
  <div v-if="$store.state.Modal.modalType !== ''" id="modalComponent">

    <!-- 各种拟态框组件 -->
    <component :is="$store.state.Modal.modalType">
      <modal-close-btn />
    </component>

    <div id="modalMask" @click="closeShowModal"></div>
  </div>
</template>

<script>
import Warning from './type/Warning.vue'
import Login from './type/Login.vue'
import Register from './type/Register.vue'
import ModalCloseBtn from './ModalCloseBtn.vue'

export default {
  name: 'HomeModal',

  components: {
    ModalCloseBtn,
    Warning,
    Login,
    Register
  },

  methods: {
    closeShowModal () {
      this.$store.commit('CHANGE_MODAL_TYPE')
    }
  }
}
</script>

<style lang="less" scoped>
  #modalComponent {
    width:100%; height:100%; top:0; left:0; position:fixed; background:rgba(0, 0, 0, 0.5); z-index:9999;

    /deep/ #modalType {
      width:638px; top:50%; left:50%; padding:18px; position:absolute; transform:translate(-50%, -50%); box-sizing:border-box; z-index:5;
      box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 5px -1px #20DBFC, inset 0 0 0 1px #272727;
    }
  }

  #modalMask {
    width:100%; height:100%; position:relative; z-index:1;
  }
</style>
