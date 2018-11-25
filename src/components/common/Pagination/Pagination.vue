<template>
  <div v-if="allPage > 1" class="pagination ban-select">
    <!-- 数据有分页的情况 -->
    <ul class="pagination-container cube-bg box-show" v-show="allPage !== 0">
      <li class="btn-cell no-select prev" @click="goto(current - 1)">
        <a class="btn glass-bg mh-if double-arrow-left" :class="{ban: (current === 1)}"></a>
      </li>
      <li class="btn-cell page-btn no-select" v-for="n in showPage" @click="goto(n)" :key="n">
        <a class="btn glass-bg" :class="{'active':current === n}">{{ n }}</a>
      </li>
      <li class="btn-cell no-select next" @click="goto(current + 1)">
        <a class="btn glass-bg mh-if double-arrow-right" :class="{ban: (allPage === current)}"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  data () {
    return {
      current: 1,
      showItem: 7
    }
  },

  props: {
    allPage: {
      type: Number,
      default: 0
    }
  },

  computed: {
    showPage () {
      let pag = []
      if (this.current < this.showItem) { // 如果当前的激活的项 小于要显示的条数
        // 总页数和要显示的条数那个大就显示多少条
        let i = Math.min(this.showItem, this.allPage)
        while (i) {
          pag.unshift(i--)
        }
      } else { // 当前页数大于显示页数了
        let middle = this.current - Math.floor(this.showItem / 2) // 从哪里开始
        let i = this.showItem
        if (middle > (this.allPage - this.showItem)) {
          middle = (this.allPage - this.showItem) + 1
        }
        while (i--) {
          pag.push(middle++)
        }
      }
      return pag
    }
  },
  methods: {
    goto: function (index) {
      // 如果 [ 要跳转的页数为当前页数 / 跳转页数 < 1 / 跳转页数 > 总页数 ] 都直接返回
      if (index === this.current || index < 1 || index > this.allPage) return false
      else { // 否则进行跳转 / 数据更新
        this.current = index
        this.$emit('changePage', index)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .pagination {
    width:100%; margin:0 auto; padding:38px 0; position:relative; clear:both; text-align:center;

    &-container {
      height: 68px; padding: 0 38px; display: inline-block; border-radius: 5px;

      > .prev, > .next {
        top:12px;
      }

      > .btn-cell {
        margin:0 5px; display:inline-block; position:relative; bottom:-11px; text-align:center; cursor:pointer;

        > .btn {
          width: 42px;
          display: block;
          border-radius: 3px;
          position: relative;
          text-decoration: none;
          height: 27px;
          color: #DDD;
          font-size: 13px;
          line-height: 28px;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), 0 4px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;

          &:hover {
            background: #080808;
            color: lightgreen;
          }
          &:active, &.active {
            background: #000;
            bottom: -1px;
            box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), inset 0 0 0 1px #272727, 0 2px #111, 0 4px 2px rgba(0, 0, 0, 0.3);
          }
          &.active {
            color: #2EE7FF;
            text-shadow: 0 0 5px #2ee7ff;
            cursor: not-allowed;
          }
          &.ban {
            bottom: 0;
            color: #333 !important;
            cursor: not-allowed !important;
            box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 4px 4px rgba(0, 0, 0, 0.5), 0 4px 4px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
          }

          &.mh-if {
            width: 40px;
            height: 38px;
            font-size: 20px;
            line-height: 38px;
            color: #84AAFF;

            &:hover {
              color: #2dbeff;
            }
          }
        }
      }
    }
  }
</style>
