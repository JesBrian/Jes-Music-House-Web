<template>
  <div id="app">
    <a href="/backstage.html#/login" style="position:fixed; top:0; left:0; z-index:9999999999;">666</a>
    <a href="/backstage.html" style="position:fixed; top:0; left:18px; z-index:9999999999;">666</a>

    <img src="./assets/img/pointer-loading.svg" style="width:18px; height:18px; position:fixed; top:0; left:38px; z-index:9999999999;" />

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
    position:relative;
    color:#CCC;
  }
</style>
