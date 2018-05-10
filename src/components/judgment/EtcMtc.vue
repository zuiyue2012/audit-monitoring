<template>
  <div class="display-flex flow-y" style="height: 100%;">
    <div class="bread-crumbs">
      <span>当前位置：</span>
      <router-link to="/">研判打逃</router-link>
      |
      <span>研判打逃</span>
    </div>
    <div class="content-box flex-box-1 display-flex flow-y" style="padding: 15px;">
      <div class="filter-box">
        <dl class="left-right-box">
          <dt class="left-title">高速名称：</dt>
          <dd class="right-content">
            <self-select v-on:select="showProject"
                         :selectedValue="projectName"
                         :dataList="list"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">收费站：</dt>
          <dd class="right-content">
            <self-select v-on:select="showProject"
                         :selectedValue="projectName"
                         :dataList="list"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">客货车：</dt>
          <dd class="right-content">
            <self-select v-on:select="showProject"
                         :selectedValue="projectName"
                         :dataList="list"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">车牌属地：</dt>
          <dd class="right-content">
            <self-select v-on:select="showProject"
                         :selectedValue="projectName"
                         :dataList="list"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">入库时间：</dt>
          <dd class="right-content">
            <datepicker v-on:picked="picked"></datepicker>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">至：</dt>
          <dd class="right-content">
            <datepicker v-on:picked="picked"></datepicker>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">关键字：</dt>
          <dd class="right-content">
            <input type="text" style="width: 160px; height: 23px; border: 1px solid #c7d3ed;"/>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">
            <div class="self-btn">查询</div>
          </dt>
          <dd class="right-content" style="cursor: pointer;">
            <span class="filter-btn"></span><span class="filter-title">搜索工具</span>
          </dd>
        </dl>
      </div>
      <div class="list-box">
        <div style="padding: 12px 0; border-bottom: 1px solid #e6e6e6;">
          <div style="border-left: 5px solid #5a78af; padding-left: 20px;">
            可疑车辆统计
          </div>
        </div>
        <table class="self-table">
          <thead>
            <tr>
              <th><input type="checkbox"/>序号</th>
              <th>车牌号</th>
              <th>卡印刷号</th>
              <th>车型</th>
              <th>颜色</th>
              <th>次数</th>
              <th width="20%">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import SelfSelect from '../common/SelfSelect'
  import datepicker from '../common/datepicker.vue'

  export default {
    name: 'JudgmentEtcMtc',
    components: {
      SelfSelect,
      datepicker
    },
    data() {
      return {
        list: [
          {key: "gd", value: "卫我好交换空间"},
          {key: "gx", value: "我去而且翁群无"},
          {key: "gx", value: "王企鹅群无科技二号"}
        ],
        projectName: {//岁子组件的选择值改变而改变的值
          key: "",
          value: ""
        },
        widthData: "160px",
      }
    },
    methods: {
      showProject() {
        console.log("下拉列表的值改变了");
        console.log("213122" + this.projectName.value);
        console.log("213122" + this.projectName.key);
      },
      picked(year, month, date) {
        console.warn(`你选择了${year}年${month}月${date}日`)
      }
    }
  }
</script>

<style scoped>
  .filter-box {
    background-color: #FFFFFF;
    padding: 12px 30px 20px;
    box-shadow: 0px 0px 10px #e6e6e6;
  }

  .filter-btn {
    background: url("../../assets/image/btn-filter.png") no-repeat;
    width: 14px;
    height: 14px;
    background-size: 100%;
    display: inline-block;
    margin-left: 24px;
    margin-top: 7px;
    vertical-align: top;

  }

  .filter-title {
    font-size: 14px;
    color: #0175ff;
    line-height: 26px;
    margin-left: 8px;
  }
</style>
