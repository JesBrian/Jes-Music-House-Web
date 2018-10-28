<template>
  <div style="margin-bottom:38px;">
    <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">相似的歌曲</div>
    <div v-for="n in 5" :key="`${n}2288`" class="box-shadow" style="height:45px; display:flex;">
      <div style="flex:1; display:flex; flex-direction:column; justify-content:center;">
        <router-link to="/song" style="color:#CCC; font-size:15px;">Song Name</router-link>
        <router-link to="/singer-detail/hot-song/1" style="margin-top:2px; color:#888; font-size:13px;">Singer 名称 Name</router-link>
      </div>
      <div style="width:48px; margin-right:5px; display:flex; justify-content:space-around; align-items:center;">
        <i class="mh-if play"></i>
        <i @click="showModal('Collection')" class="mh-if plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarSong'
}
</script>

<style scoped>

</style>
