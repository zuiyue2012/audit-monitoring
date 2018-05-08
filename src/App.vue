<template>
  <div id="app">
    <div class="framework-panel">
      <div class="top-menu">
        <div class="log">
          稽查监控系统
        </div>
      </div>
      <div class="bottom-content">
        <div class="left-menu"></div>
        <div class="right-content"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .framework-panel {
    width: 100%;
    height: 100%;
  }

  .top-menu {
    height: 60px;
    width: 100%;
    background: cornflowerblue;
    color: #FFFFFF;
  }

  .bottom-content {

  }

  .bottom-content .left-menu{

  }

  .bottom-content .right-content{

  }
</style>
