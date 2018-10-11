<template>
  <div @click.right="showAlertMenu" @dblclick="playThisSong" style="width:100%; height:28px; line-height:28px;">
    <p style="width:4.5%; float:left; box-sizing:border-box; text-align:right; font-size:14px; line-height:30px;">{{ index }}</p>
    <p style="width:15%; float:left; text-align:center;">
      <i class="mh-if play" style="margin:0 2px;"></i>
      <i class="mh-if non-colloection" style="margin:0 2px;"></i>
      <i class="mh-if download" style="margin:0 2px;"></i>
    </p>
    <p class="text-hidden" style="width:47%; padding:0 38px 0 3px; float:left; box-sizing:border-box;">66</p>
    <p class="text-hidden" style="width:22%; float:left;">66</p>
    <p style="width:10%; float:left; text-align:center;">59:59</p>
  </div>
</template>

<script>

export default {
  name: 'SongItem',

  props: {
    index: Number
  },

  methods: {
    playThisSong () {
    }
  }
}
</script>

<style scoped>

</style>
