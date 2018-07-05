<template>
  <div id="login" style="width:100%; height:100%; position:absolute; z-index:-1; background:#222;">
    <div class="glass-bg box-show" style="width:908px; height:408px; top:50%; left:50%; padding:28px 0; box-sizing:border-box; transform:translate(-50%, -50%); position:fixed; display:inline-block; border-radius:12px;">
      <div style="width:58%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #888;"></div>
      <div style="width:42%; height:100%; float:right;">
        <div style="width:100%; text-align:center;">
          <div class="super-btn-out" style="width:118px; height:38px; margin:0 12px;">
            <span class="super-btn-in" style="width:106px; height:26px; line-height:26px;">确认登陆</span>
          </div>
          <div class="super-btn-out" style="width:118px; height:38px; margin:0 12px;">
            <span class="super-btn-in" style="width:106px; height:26px; line-height:26px;">找回密码</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
