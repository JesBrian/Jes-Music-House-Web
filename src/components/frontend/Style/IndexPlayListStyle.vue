<template>
  <div class="style-container glass-bg box-show">
    <i @click="closePlayListStyleContent" class="close-btn mh-if all-arrow"></i>
    <div class="style-container-top">
      <div @click="changePlayListStyle('全部')" class="super-btn-out">
        <span class="super-btn-in">全部风格</span>
      </div>
    </div>
    <div v-for="styleItem in styleList" :key="styleItem.id" class="style-list-content">
      <div class="style-list-content-title">
        <i :class="['mh-if', styleItem.icon]"></i>{{ styleItem.name }}
      </div>
      <div class="style-list-content-main">
        <span @click="changePlayListStyle(styleCellItem.name)"
              v-for="styleCellItem in styleItem['cell']"
              :key="styleCellItem.id"
              :class="['style-list-cell', {active : styleCellItem.id === nowStyleId}]">
          {{ styleCellItem.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPlayListStyle',

  props: {
    styleList: {
      type: Array,
      default: () => {
        return []
      }
    },
    nowStyleId: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
    }
  },

  methods: {
    changePlayListStyle (styleLabel) {
      this.$emit('changePlayListStyle', styleLabel)
      this.closePlayListStyleContent()
    },

    closePlayListStyleContent () {
      this.$parent.changeShowPlayListStyleContent()
    }
  }
}
</script>

<style lang="less" scoped>
  .style-container {
    width:840px; top:52px; left:-123%; position:absolute; z-index:9; line-height:1.68em;

    > .close-btn {
      top:4px; right:8px; position:absolute; font-size:18px; color:#BBB; cursor:pointer;
      &:hover {
        color:#00D8FF;
      }
    }

    &-top {
      width:100%; box-shadow:0 3px 3px -4px #FFF;
      .super-btn {
        &-out {
          width:86px; height:30px; margin:8px 28px 2px;
        }
        &-in {
          width:76px; height:23px; padding-left:1.5px; letter-spacing:1.2px;
        }
      }
    }

    .style-list {
      &-content {
        overflow:hidden;
        &:last-child {
          padding-bottom:15px;
        }
        &-title {
          width:12%; margin:0 0 -500px; padding:18px 0 500px;  float:left; border-right:1px solid #444; text-align:center;
          > .mh-if {
            margin:0 -3px 0 18px; float:left; font-size:23px;
          }
        }
        &-main {
          width:87%; padding:18px 8px 0 23px; display:inline-block; box-sizing:border-box;
        }
      }

      &-cell {
        margin-right:18px; display:inline-block; position:relative; cursor:pointer;
        &.active {
          color:#20dbfc; text-shadow:2px 2px 2px #000;
          &::after {
            content:''; width:100%; height:92%; top:56%; left:50%; padding:0 6px; position:absolute; display:block; transform:translate(-50%, -50%);
            z-index:-1; border:1px solid #000; border-radius:3px; background-image:linear-gradient(#444444, #373738, #222); box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727;
          }
        }
      }
    }
  }
</style>
