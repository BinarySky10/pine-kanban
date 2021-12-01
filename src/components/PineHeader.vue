<template>
  <div id="pine-header-nav">
    <div class="pine-header-layout">
      <div class="pine-logo">松树板</div>
      <div class="pine-search">
        <input type="text" placeholder="搜索">
      </div>
      <div class="">
        工具
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PineHeader',
  
}
</script>

<style scoped lang="scss">
#pine-header-nav{
  //位
  position: fixed;
  top: 0;
  left: 0;
  
  //大
  width: 100%;
  height: 44px;
  //文

  //景

  //动
  background: gold;
}
</style>
