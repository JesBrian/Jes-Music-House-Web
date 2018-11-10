<template>
  <div id="leftMenu" class="glass-bg box-show" :class="{'active' : $store.state.View.showLeftMenu}">
    <div :class="{active: $store.state.View.showLeftMenu}" class="menu-bar-container">
      <gemini-scrollbar @ready="scrollbarOnReady">
        <div v-for="(firstMenuItem, index) in menuTreeData" :key="`${index}3`" class="first-menu" :class="{'active': firstMenuItem.id === nowFirstMenu}">
          <div @click="showThisFirstMenuSecondMenuContainer(firstMenuItem.id)" class="first-menu-link glass-bg box-show">
            <i class="mh-if menu-user"></i>
            <p class="first-menu-link-label text-hidden">{{ firstMenuItem.name }}</p>
            <div class="show-second-menu-btn cube-bg box-show">
              <i class="mh-if double-arrow-up"></i>
            </div>
          </div>
          <div class="second-menu">
            <router-link v-for="(secondMenuItem, index) in firstMenuItem.cell" :key="`${index}2`" :to="secondMenuItem.url"
                         class="second-menu-link cube-bg box-show" :class="{'active': routerPath === secondMenuItem.url}">
              <i class="mh-if all-user"></i>
              <p class="second-menu-link-label text-hidden">{{ secondMenuItem.name }}</p>
              <i class="mh-if double-arrow-left"></i>
            </router-link>
          </div>
        </div>
      </gemini-scrollbar>
    </div>
    <div @click="showLeftMenu" v-show="!$store.state.View.showLeftMenu" class="menu-bar-switch">
      <i class="mh-if double-arrow-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',

  data () {
    return {
      scrollbarObj: null,

      nowFirstMenu: 0, // 当前一级菜单
      nowSecondMenu: 0, // 当前二级菜单

      menuTreeData: null
    }
  },

  computed: {
    routerPath () {
      return this.$route.path.split('/')[1]
    }
  },

  created () {
    this.$http.post('getAllMenuTreeData').then(result => {
      let data = result.data.data
      this.menuTreeData = data

      let flag = false
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i].cell) {
          for (let j = 0, cellLen = data[i].cell.length; j < cellLen; j++) {
            if (data[i].cell[j].url === this.routerPath) {
              flag = true
              this.nowFirstMenu = data[i].id
              break
            }
            if (flag) break
          }
        } else {
          continue
        }
      }
    }).catch(error => {
      console.log(error)
    })
  },

  methods: {
    scrollbarOnReady (scrollbarObj) {
      this.scrollbarObj = scrollbarObj
    },

    showLeftMenu () {
      this.$store.commit('CHANGE_SHOW_LEFT_MENU')
    },

    showThisFirstMenuSecondMenuContainer (firstMenuId) {
      this.nowFirstMenu = firstMenuId === this.nowFirstMenu ? 0 : firstMenuId
      this.scrollbarObj.update()
    }
  }
}
</script>

<style lang="less" scoped>
  #leftMenu {
    width:28px; height:100%; top:0; left:0; padding:50px 0 28px; box-sizing:border-box; position:fixed; z-index:9;
    transition:all 1s;
    &.active {
      width:208px;
    }
  }

  .menu-bar {
    &-container {
      width:100%; height:100%; padding:13px 0 0; overflow-y:auto; color:#DDD; box-sizing:border-box; transition:all 2s; display:none;
      &.active {
        display:block;
      }
    }
    &-switch {
      width:100%; height:100%; padding-left:6px; position:relative; cursor:pointer;
      > .mh-if {
        top:50%; position:absolute; display:inline-block; transform:translateY(-50%); color:#FFF;
      }
    }
  }

  .first-menu {
    width:98%; margin:0 0 8px;
    &-link {
      width:93%; height:33px; margin:0 auto; position:relative; cursor:pointer;
      > .mh-if {
        margin:0 8px 0 12px;
      }
      &-label {
        width:72%; display:inline-block; line-height:30px; font-size:16.5px;
      }
    }

    &.active {
      .show-second-menu-btn > .mh-if {
        animation:menuSwitchOpen 0.6s forwards;
      }

      > .second-menu {
        height:100%; padding:6px 0; transform:scaleY(1);
      }
    }
  }

  .second-menu {
    width:100%; height:0; transform:scaleY(0); transition:all 380ms; transform-origin:0 0;
    &-link {
      width:85%; height:28px; margin:2px auto 6px; display:block; line-height:26px;
      &.active {
        background:#181818; animation:menuLinkActive 0.38s forwards;
        > .second-menu-link-label {
          color:#FFF;
        }
        > .double-arrow-left {
          margin-right:5px; float:right; display:block; font-size:12px; color:#38daf0;
        }
      }

      &-label {
        margin-left:8px; display:inline-block; font-size:14px; color:#AAA;
      }
      > .double-arrow-left {
        display:none;
      }
    }
  }

  .show-second-menu-btn {
    width:23px; height:22px; top:4px; right:4px; display:inline-block; position:absolute; color:#30cdff; text-align:center; opacity:0.68;
    &:hover {
      opacity: 1;
    }
    > .mh-if {
      width:100%; height:100%; display:inline-block; font-size:14px; line-height:20px; animation:menuSwitchClose 0.6s forwards;
    }
  }

  @keyframes menuSwitchOpen {
    to {transform:rotate(180deg);}
  }
  @keyframes menuSwitchClose {
    from {transform:rotate(-180deg);}
    to {transform:rotate(0deg);}
  }

  @keyframes menuLinkActive {
    to {
      transform:translateX(8px);
    }
  }

  #superScrollbar /deep/ .gm-scrollbar.-vertical {
    background:#111;
  }
</style>
