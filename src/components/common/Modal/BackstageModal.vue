<template>
  <div id="modalComponent">

    <!-- 各种拟态框组件 -->
    <transition name="updown">
      <component :is="$store.state.View.modalType">
        <modal-close-btn />
      </component>
    </transition>

    <div v-if="$store.state.View.modalType !== ''" id="modalMask" @click="closeShowModal"></div>
  </div>
</template>

<script>
import ModalCloseBtn from './ModalCloseBtn.vue'

export default {
  name: 'HomeModal',

  components: {
    ModalCloseBtn
  },

  methods: {
    closeShowModal () {
      this.$store.commit('CHANGE_MODAL_TYPE')
    }
  }
}
</script>

<style lang="less" scoped>
  #modalComponent /deep/ #modalType {
    width:638px; top:50%; left:50%; padding:18px; position:fixed; transform:translate(-50%, -50%); box-sizing:border-box; z-index:10000;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 5px -1px #20DBFC, inset 0 0 0 1px #272727;
  }

  #modalMask {
    width:100%; height:100%; top:0; left:0; position:fixed; background:rgba(0, 0, 0, 0.5); z-index:9999;
  }
</style>
