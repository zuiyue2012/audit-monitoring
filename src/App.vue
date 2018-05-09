<template>
  <div id="app">
    <div class="framework-panel">
      <div class="top-menu">
        <div class="log">
          <span class="log-img"></span>
          <span class="log-text">稽查监控系统</span>
          <span style="font-size: 10px;">  2017 年 12 月 21 日    星期三    12`C   晴</span>
        </div>
        <div style="float: right; padding: 20px; cursor: pointer;">
          <span class="logout"></span>
          <span style="font-size:15px;">退出</span>
        </div>
      </div>
      <div class="bottom-content display-flex flow-x">
        <div class="left-menu">
          <div style="margin-bottom: 6px;">职位名称</div>
          <div class="item user-info" style="height: 70px;">
            <span class="image"></span>
            <div class="text">姓名</div>
          </div>
          <div class="item user-profile">
            <span class="image"></span>
            <div class="text">个人概述</div>
          </div>
          <div class="item affairs">
            <span class="image"></span>
            <div class="text">日常事务</div>
          </div>
          <div class="item audit active">
            <span class="image"></span>
            <div class="text">研判打逃</div>
          </div>
          <div class="item release">
            <span class="image"></span>
            <div class="text">任务发布</div>
          </div>
          <div class="item work-plan">
            <span class="image"></span>
            <div class="text">工作计划</div>
          </div>
          <div class="item statistics">
            <span class="image"></span>
            <div class="text">统计报表</div>
          </div>
          <div class="item system">
            <span class="image"></span>
            <div class="text">系统维护</div>
          </div>
        </div>
        <div class="flex-box-1">
          <router-view/>
        </div>
      </div>
    </div>
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
    height: 65px;
    width: 100%;
    background: #5b79af;
    color: #FFFFFF;
  }

  .top-menu .log {
    float: left;
    padding: 18px 30px 0;
  }

  .log .log-img {
    background: url("./assets/image/log.png") no-repeat;
    margin-top: 2px;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 12px;
    background-size: 100%;
    vertical-align: top;
  }

  .log .log-text {
    font-size: 20px;
    margin-right: 10px;
  }

  .logout {
    background: url("./assets/image/menu-logout.png") no-repeat;
    margin-top: 4px;
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 8px;
    background-size: 100%;
    vertical-align: top;
  }

  .bottom-content {
    width: 100%;
  }

  .bottom-content .left-menu {
    float: left;
    width: 120px;
    background: #262c38;
    color: #FFFFFF;
    text-align: center;
    font-size: 14px;
    padding: 12px 0;
  }

  .left-menu .item {
    width: 100%;
    height: 60px;
    text-align: center;
    padding: 5px 0;
  }

  .item .image {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-top: 8px;
  }

  .user-info .image{
    background: url("./assets/image/menu-photo.png") no-repeat;
    background-size: 100%;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    background-size: 35px 40px;
    background-position: 2px 3px;
  }

  .user-profile .image{
    background: url("./assets/image/menu-profile.png") no-repeat;
    background-size: 100%;
  }

  .affairs .image{
    background: url("./assets/image/menu-affairs.png") no-repeat;
    background-size: 100%;
  }

  .audit .image{
    background: url("./assets/image/menu-audit.png") no-repeat;
    background-size: 100%;
  }

  .release .image{
    background: url("./assets/image/menu-release.png") no-repeat;
    background-size: 100%;
  }

  .work-plan .image{
    background: url("./assets/image/menu-work-plan.png") no-repeat;
    background-size: 100%;
  }

  .statistics .image{
    background: url("./assets/image/menu-statistics.png") no-repeat;
    background-size: 100%;
  }

  .system .image{
    background: url("./assets/image/menu-system.png") no-repeat;
    background-size: 100%;
  }

  .item .text {
    font-size: 12px;
    margin-top: 2px;
  }

  .left-menu .item.active {
    background: #2b3244;
    color: #6388bb;
  }

  .bottom-content .right-content {
    float: right;
    width: calc(100% - 120px);
  }

  .display-flex {
    display: -webkit-flex;
    display: flex;
  }

  .flow-x {
    flex-flow: row;
  }

  .flow-y {
    flex-flow: column;
  }

  .flex-box-1 {
    flex: 1;
  }

  .flex-box-2 {
    flex: 2;
  }

  .flex-box-3 {
    flex: 3;
  }
</style>
