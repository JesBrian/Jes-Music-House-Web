<template>
  <div id="leftMenu" class="glass-bg box-show" style="width:208px; height:100%; top:0; left:0; padding:50px 0 28px; box-sizing:border-box; position:fixed; z-index:9;">
    <div style="width:100%; height:100%; padding:13px 0 0; overflow-y:auto; color:#DDD; box-sizing:border-box;">
      <gemini-scrollbar class="my-scroll-bar">
        <div v-for="(firstMenuItem, index) in menuTreeData" :key="`${index}3`" class="first-menu" :class="{'active': firstMenuItem.id === nowFirstMenu}">
          <div @click="showThisFirstMenuSecondMenuContainer(firstMenuItem.id)" class="first-menu-link glass-bg box-show">
            <i class="mh-if menu-user" style="margin:0 8px 0 12px;"></i>
            <p class="first-menu-link-label text-hidden">{{ firstMenuItem.name }}</p>
            <div class="show-second-menu-btn cube-bg box-show">
              <i class="mh-if double-arrow-up" style="width:100%; height:100%; display:inline-block;"></i>
            </div>
          </div>
          <div class="second-menu">
            <router-link v-for="(secondMenuItem, index) in firstMenuItem.cell" :key="`${index}2`" :to="secondMenuItem.url" class="second-menu-link cube-bg box-show" :class="{'active': routerPath === secondMenuItem.url}">
              <i class="mh-if all-user"></i>
              <p class="second-menu-link-label text-hidden">{{ secondMenuItem.name }}</p>
              <i class="mh-if double-arrow-left"></i>
            </router-link>
          </div>
        </div>
      </gemini-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',

  data () {
    return {
      nowFirstMenu: 0, // 当前一级菜单
      nowSecondMenu: 0, // 当前二级菜单

      menuTreeData: null
    }
  },

  computed: {
    routerPath () {
      return this.$route.path
    }
  },

  watch: {
    routerPath (nVal) {
      console.log(nVal)
    }
  },

  created () {
    this.$http.post('getAllMenuTreeData').then(result => {
      this.menuTreeData = result.data.data
    }).catch(error => {
      console.log(error)
    })
  },

  methods: {
    showThisFirstMenuSecondMenuContainer (firstMenuId) {
      this.nowFirstMenu = firstMenuId === this.nowFirstMenu ? 0 : firstMenuId
    }
  }
}
</script>

<style scoped>
  .first-menu {
    width:100%; margin:0 0 8px;
  }
  .first-menu-link {
    width:93%; height:33px; margin:0 auto; position:relative; cursor:pointer;
  }
  .first-menu-link-label {
    display:inline-block; line-height:30px; font-size:16px;
  }

  .show-second-menu-btn {
    width: 23px;
    height: 22px;
    top: 4px;
    right: 4px;
    display: inline-block;
    position: absolute;
    color: #30cdff;
    text-align: center;
    opacity: 0.68;
  }
  .show-second-menu-btn:hover {
    opacity: 1;
  }
  .show-second-menu-btn > .mh-if {
    font-size: 14px;
    line-height: 16px;
    animation: menuSwitch 0.6s forwards;
    -webkit-animation: menuSwitch 0.6s forwards;
  }
  .show-second-menu-btn > .mh-if.active {
    animation: menuSwitchActive 0.6s forwards;
    -webkit-animation: menuSwitchActive 0.6s forwards;
  }

  .second-menu {
    width:100%; padding:6px 0; display:none;
  }
  .first-menu.active > .second-menu {
    display:block;
  }
  .second-menu-link {
    width:85%; height:28px; margin:2px auto 6px; display:block; line-height:26px;
  }
  .second-menu-link-label {
    margin-left:8px; display:inline-block; font-size:15px; color:#AAA;
  }
  .second-menu-link > .double-arrow-left {
    display:none;
  }
  .second-menu-link.active {
    margin-left:23px;
  }
  .second-menu-link.active > .second-menu-link-label {
    color:#FFF;
  }
  .second-menu-link.active > .double-arrow-left {
    margin-right:5px; float:right; display:block; font-size:12px; color:#38daf0;
  }
</style>
