<template>
  <div class="display-flex flow-y" style="height: 100%;">
    <div class="bread-crumbs">
      <span>当前位置：</span>
      <span>研判打逃</span>
    </div>
    <div class="content-box flex-box-1">
      <div class="item-list-box">
        <div class="item-box-title">
          逃费类型
        </div>
        <div class="display-flex flow-x" style="padding: 20px 30px;flex-wrap: wrap;">
          <div class="item total" v-on:click="goTotal()">
            <span class="item-log"></span>
            <div class="item-text">全计重逃费</div>
          </div>
          <div class="item peer" v-on:click="goPeer()">
            <span class="item-log"></span>
            <div class="item-text">非正常同行逃费</div>
          </div>
          <div class="item counterfeit" v-on:click="goCounterfeit()">
            <span class="item-log"></span>
            <div class="item-text">假冒优惠车逃费</div>
          </div>
          <div class="item critical" v-on:click="goCritical()">
            <span class="item-log"></span>
            <div class="item-text">临界车逃费</div>
          </div>
          <div class="item etc-mtc" v-on:click="goEtcMtc()">
            <span class="item-log"></span>
            <div class="item-text">ETC&MTC混合逃费</div>
          </div>
          <div class="item green" v-on:click="goGreen()">
            <span class="item-log"></span>
            <div class="item-text">假冒绿通行逃费</div>
          </div>
        </div>
      </div>
      <div class="item-list-box">
        <div class="item-box-title">
          智能稽查
        </div>
        <div class="display-flex flow-x" style="padding: 20px 30px;flex-wrap: wrap;">
          <div class="item model">
            <span class="item-log"></span>
            <div class="item-text">单车模型分析</div>
          </div>
          <div class="item blacklist">
            <span class="item-log"></span>
            <div class="item-text">黑名单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JudgmentHome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goTotal () {
      this.$router.replace({path: '/etc', query: {title: '全计重逃费'}})
    },
    goPeer () {
      this.$router.replace({path: '/etc', query: {title: '非正常同行逃费'}})
    },
    goCounterfeit () {
      this.$router.replace({path: '/etc', query: {title: '假冒优惠车逃费'}})
    },
    goCritical () {
      this.$router.replace({path: '/etc', query: {title: '临界车逃费'}})
    },
    goEtcMtc () {
      this.$router.replace({path: '/etc', query: {title: 'ETC\&MTC混合逃费'}})
    },
    goGreen () {
      this.$router.replace({path: '/etc', query: {title: '假冒绿通行逃费'}})
    }
  }
}
</script>

<style scoped>
  .disabled{
    opacity: 0.5;
    cursor: auto;
  }

  .item-list-box {

  }

  .item-list-box .item-box-title {
    border-left: 5px solid #5a78af;
    padding-left: 20px;
  }

  .item-list-box .item {
    width: 280px;
    height: 120px;
    box-shadow: 0px 0px 10px #e6e6e6;
    margin: 0 28px 20px;
    background-color: #FFFFFF;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }

  .item .item-log {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-top: 25px;
  }

  .item .item-text {
    font-size: 12px;
  }

  .blacklist .item-log {
    background: url("../../assets/image/item-blacklist.png") no-repeat;
    background-size: 100%;
  }
  .counterfeit .item-log {
    background: url("../../assets/image/item-counterfeit.png") no-repeat;
    background-size: 100%;
  }
  .critical .item-log {
    background: url("../../assets/image/item-critical.png") no-repeat;
    background-size: 100%;
  }
  .etc-mtc .item-log {
    background: url("../../assets/image/item-etc-mtc.png") no-repeat;
    background-size: 100%;
  }
  .green .item-log {
    background: url("../../assets/image/item-green.png") no-repeat;
    background-size: 100%;
  }
  .model .item-log {
    background: url("../../assets/image/item-model.png") no-repeat;
    background-size: 100%;
  }
  .peer .item-log {
    background: url("../../assets/image/item-peer.png") no-repeat;
    background-size: 100%;
  }
  .total .item-log {
    background: url("../../assets/image/item-total.png") no-repeat;
    background-size: 100%;
  }
</style>
