<template>
  <div class="display-flex flow-y" style="height: 100%;">
    <div class="bread-crumbs">
      <span>当前位置：</span>
      <router-link to="/">研判打逃</router-link>
      |
      <span>{{this.$route.query.title}}</span>
    </div>
    <div class="content-box flex-box-1 display-flex flow-y" style="padding: 15px 15px 0 15px;">
      <div class="filter-box">
        <dl class="left-right-box">
          <dt class="left-title">高速名称：</dt>
          <dd class="right-content">
            <self-select v-on:select="highSpeedChanged"
                         :selectedValue="highSpeed"
                         :dataList="highSpeedList"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">收费站：</dt>
          <dd class="right-content">
            <self-select v-on:select="showProject"
                         :selectedValue="toll"
                         :dataList="tollList"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">车类别：</dt>
          <dd class="right-content">
            <v-select-tree :data='catTreeData' v-on:node-click="selectCat"/>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">车牌属地：</dt>
          <dd class="right-content">
            <self-select v-on:select="showProject"
                         :selectedValue="loc"
                         :dataList="locList"
                         :widthData="widthData"></self-select>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">入库时间：</dt>
          <dd class="right-content">
            <datepicker v-on:picked="startTimeSelect" :moment="0"></datepicker>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">至：</dt>
          <dd class="right-content">
            <datepicker v-on:picked="endTimeSelect"></datepicker>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">单位选择：</dt>
          <dd class="right-content" style="position: relative;">
            <!--<v-tree ref='tree' :data='treeData'/>-->
            <!--<v-select-tree :data='treeData' v-model="selectedNode"/>-->
            <v-select-tree :data='orgTreeData' v-on:node-click="selectOrg"/>
          </dd>
        </dl>
        <dl class="left-right-box">
          <dt class="left-title">关键字：</dt>
          <dd class="right-content">
            <input type="text" style="width: 160px; height: 23px; border: 1px solid #c7d3ed;"/>
          </dd>
        </dl>
        <dl v-if="!isShowExact" class="left-right-box">
          <dt class="left-title">
            <div class="self-btn" v-on:click="searchList()">查询</div>
          </dt>
          <dd class="right-content" style="cursor: pointer;" v-on:click="exactSearch()">
            <span class="filter-btn"></span><span class="filter-title">搜索工具</span>
          </dd>
        </dl>
      </div>
      <div v-if="isShowExact" class="list-box">
          <div style="padding: 12px 0; border-bottom: 1px solid #e6e6e6;">
            <div style="border-left: 5px solid #5a78af; padding-left: 20px;">
              精确查询
            </div>
          </div>
          <div class="filter-box">
            <dl class="left-right-box">
              <dt class="left-title">车辆颜色：</dt>
              <dd class="right-content">
                <self-select :selectedValue="carLicenceColor"
                             :dataList="colorList"
                             :widthData="widthData"></self-select>
              </dd>
            </dl>
            <dl class="left-right-box">
              <dt class="left-title">车型：</dt>
              <dd class="right-content">
                <self-select :selectedValue="carType"
                             :dataList="carTypeList"
                             :widthData="widthData"></self-select>
              </dd>
            </dl>
            <dl class="left-right-box">
              <dt class="left-title">轴数：</dt>
              <dd class="right-content">
                <self-select :selectedValue="axesNumber"
                             :dataList="axesList"
                             :widthData="widthData"></self-select>
              </dd>
            </dl>
            <dl class="left-right-box">
              <dt class="left-title">
                <div class="self-btn" style="background-color: #FFFFFF;color: #000000;border: 0.5px solid #919191;border-radius: 3px;" v-on:click="cacelExact()">取消</div>
              </dt>
              <dd class="right-content" style="line-height: 26px;">
                <div class="self-btn" style="margin-left: 25px;" v-on:click="searchList()">查询</div>
              </dd>
            </dl>
          </div>
      </div>
      <div class="flex-box-1">
        <div class="list-box">
          <div style="padding: 12px 0; border-bottom: 1px solid #e6e6e6;">
            <div style="border-left: 5px solid #5a78af; padding-left: 20px;">
              可疑车辆统计
            </div>
          </div>
          <div style="overflow: auto;">
          <table class="self-table">
            <thead>
            <tr>
              <th>序号</th>
              <th>车牌号</th>
              <th>卡印刷号</th>
              <th>车型</th>
              <th>颜色</th>
              <th>次数</th>
              <th width="25%">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) of tableList">
              <td>{{index + 1}}</td>
              <td>{{item.carNo}}</td>
              <td>{{item.cardPrintNo}}</td>
              <td>{{item.carType}}</td>
              <td>{{item.carLicenceColor}}</td>
              <td>{{item.frequency}}</td>
              <td>
                <div class="table-btn-box" v-on:click="addDark(item)"><span class="table-btn add"></span><span class="table-btn-text">加入黑名单</span>
                </div>
                <div class="table-btn-box" v-on:click="showDetail(item)"><span class="table-btn history"></span><span
                  class="table-btn-text">车辆历史</span></div>
              </td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
     <!-- <div style="text-align: center; color: #5e5e5e; font-size: 8px;">
        <span>@2018 睿盈源科技版权所有V1.0.0.0          服务电话：028-62084609</span>
      </div>-->
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
  data () {
    return {
      highSpeedList: [],
      tollList: [],
      catList: [],
      locList: [],
      tableList: [],
      colorList: [{key: '蓝色', value: '蓝色'}, {key: '红色', value: '红色'}, {key: '黑色', value: '黑色'}],
      carTypeList: [{key: '客车', value: '客车'}, {key: '货车', value: '货车'}],
      axesList: [{key: '1', value: '1'}, {key: '2', value: '2'}],
      highSpeed: {
        key: '',
        value: ''
      },
      toll: {
        key: '',
        value: ''
      },
      cat: '',
      org: '',
      loc: {
        key: '',
        value: ''
      },
      carLicenceColor: {
        key: '',
        value: ''
      },
      carType: {
        key: '',
        value: ''
      },
      axesNumber: {
        key: '',
        value: ''
      },
      startTime: '',
      endTime: '',
      widthData: '160px',
      isShowExact: false,
      catTreeData: [{title: ''}],
      orgTreeData: [{title: ''}],
    }
  },
  methods: {
    selectCat(value){
      console.log('selected: ', value)
      this.cat = value.title
    },
    selectOrg(value){
      console.log('selected: ', value)
      this.org = value.id
    },
    highSpeedChanged(){
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carStation/station', {highspeedName: this.highSpeed.key}, {emulateJSON: true}).then((res) => {
        if (res.data && res.data.length) {
          for (let toll of res.data) {
            this.tollList.push({key: toll, value: toll})
          }
        }
      })
    },
    exactSearch(){
      this.isShowExact = true
    },
    cacelExact(){
      this.isShowExact = false
    },
    searchList () {
      let params = this.getPrams()
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/selectAll', params, {emulateJSON: true}).then((res) => {
        this.tableList = res.data.data || []
      })
    },
    getPrams () {
      let params = {}
      if (this.highSpeed.key) {
        params.highSpeed = this.highSpeed.key
      }
      if (this.cat) {
        params.carCategory = this.cat
      }
      if (this.loc.key) {
        params.carNoLocation = this.loc.key
      }
      if (this.startTime) {
        params.startDate = this.startTime
      }
      if (this.org) {
        params.org = this.org
      }
      if (this.endTime) {
        params.endDate = this.endTime
      }
      if (this.isShowExact && this.carLicenceColor) {
        params.carLicenceColor = this.carLicenceColor.key
      }
      if (this.isShowExact && this.carType) {
        params.carType = this.carType.key
      }
      if (this.isShowExact && this.axesNumber) {
        params.axesNumber = this.axesNumber.key
      }
      return params
    },
    showDetail (item) {
      this.$router.replace({path: '/suspicious', query: {carFlag: item.carFlag, parentTitle: this.$route.query.title}})
    },
    showProject () {
      // console.log('213122' + this.projectName.value)
      // console.log('213122' + this.projectName.key)
    },
    startTimeSelect (year, month, date) {
      this.startTime = year + '-' + month + '-' + date
    },
    endTimeSelect (year, month, date) {
      this.endTime = year + '-' + month + '-' + date
    },
    addDark (item) {
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/addBlackList',
        {
          carFlag: item.carFlag
        }, {emulateJSON: true}).then((res) => {
        this.$alert(res.data.message)
        this.searchList()
      })
    },
    formatTreeData(treeNode){
      treeNode.title = treeNode.name;
      if(treeNode.children && treeNode.children.length){
        for(let node of treeNode.children){
          this.formatTreeData(node)
        }
      }
    },
    formatOrgTreeData(treeNode){
      treeNode.id = treeNode.orgId;
      treeNode.title = treeNode.orgName;
      if(treeNode.children && treeNode.children.length){
        for(let node of treeNode.children){
          this.formatOrgTreeData(node)
        }
      }
    }
  },
  created () {
    this.searchList()
    this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/category/tree', {}, {emulateJSON: true}).then((res) => {
      if (res.data) {
        this.formatTreeData(res.data)
        this.catTreeData = [res.data]
      }
    })
    this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carOrg/tree', {}, {emulateJSON: true}).then((res) => {
      if (res.data) {
        this.formatOrgTreeData(res.data)
        this.orgTreeData = [res.data]
        console.log('treeData: ', this.orgTreeData)
      }
    })
    this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carStation/highSpeed', {}, {emulateJSON: true}).then((res) => {
      if (res.data && res.data.length) {
        for (let highSpeed of res.data) {
          this.highSpeedList.push({key: highSpeed, value: highSpeed})
        }
      }
    })
    this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/category/tree', {}, {emulateJSON: true}).then((res) => {
      if (res.data && res.data.length) {
        for (let cat of res.data) {
          this.catList.push({key: cat, value: cat})
        }
      }
    })
    this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/listLoc', {}, {emulateJSON: true}).then((res) => {
      if (res.data && res.data.length) {
        for (let loc of res.data) {
          this.locList.push({key: loc, value: loc})
        }
      }
    })
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
