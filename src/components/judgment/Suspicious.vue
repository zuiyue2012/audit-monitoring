<template>
  <div class="" style="height: 100%;">
    <div class="bread-crumbs">
      <span>当前位置：</span>
      <router-link to="/">研判打逃</router-link>|
      <router-link :to="{path:'/etc', query: {title: 'ETC\&MTC混合逃费'}}">{{this.$route.query.parentTitle}}</router-link>|
      <span>{{currentCarNo}}</span>
    </div>
    <div class="content-box " style="padding: 15px 15px 0 15px;height: calc(100% - 55px);">
      <div class="" style="height: calc(100% - 12px);">
        <div class="list-box" style="margin-top: 0;">
          <div style="padding: 12px 0; border-bottom: 1px solid #e6e6e6;">
            <div style="border-left: 5px solid #5a78af; padding-left: 20px; float: left;margin-top: 3px;">
              {{detailTile}}
            </div>
            <div v-if="'车辆可疑历史' === detailTile" class="self-btn"
                 style="display: inline-block;vertical-align: top;height: 28px;line-height: 28px;margin-left: 20px;width: 120px;"
                 v-on:click="checkTitle()">
              显示车辆所有历史
            </div>
            <div v-if="'车辆历史统计' === detailTile" class="self-btn"
                 style="display: inline-block;vertical-align: top;height: 28px;line-height: 28px;margin-left: 20px;width: 120px;"
                 v-on:click="checkTitle()">
              显示车辆可疑历史
            </div>
            <!--<div class="self-tab">
              <ul>
                <li v-bind:class="{ active: 'all' === currentTab }" v-on:click="showTab('all')">显示车辆全部历史</li>
                <li v-bind:class="{ active: 'suspic' === currentTab }" v-on:click="showTab('suspic')">显示车辆可疑历史</li>
              </ul>
            </div>-->
            <div v-if="'0' === selectedDetail.checkStatus" class="self-btn"
                 style="display: inline-block;vertical-align: top;height: 28px;line-height: 28px;margin-left: 20px;width: 120px;"
                  v-on:click="review()">
              审核车辆
            </div>
            <div v-if="'1' === selectedDetail.escapeHistory" class="self-btn"
                 style="display: inline-block;vertical-align: top;height: 28px;line-height: 28px;margin-left: 20px;width: 120px;"
                 v-on:click="deleteSuspicious()">
              删除可疑
            </div>
          </div>
          <div style="overflow: auto; max-height: 240px;">
            <table class="self-table" style="width: 2000px;">
              <thead>
              <tr>
                <th>序号</th>
                <th>审核状态</th>
                <th>是否可疑</th>
                <th>出入口卡片类型</th>
                <th>出口入卡印刷号</th>
                <th>类型</th>
                <th>流水号</th>
                <th>出入口收费站</th>
                <th>出入口时间</th>
                <th>出入口车道属性</th>
                <th>出入口车道号</th>
                <th>出入口客货车</th>
                <th>出入口车种</th>
                <th>出入口车牌颜色</th>
                <th>出入口收费员</th>
                <th>应收金额</th>
                <th>实收金额</th>
                <th>里程</th>
                <th>总重</th>
                <th>轴数</th>
                <th>轴型</th>
                <th>超限率</th>
                <th>入库时间</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, index) of tableList" v-on:click="showDetail(item, index)">
                <td><input type="checkbox" :checked="index === currentIndex"/>{{index + 1}}</td>
                <td>{{item.checkStatusDesc}}</td>
                <td>{{item.escapeHistoryDesc}}</td>
                <td>{{item.cardType}}</td>
                <td>{{item.cardNo}}</td>
                <td>{{item.entranceExitDesc}}</td>
                <td>{{item.carSerial}}</td>
                <td>{{item.stationName}}</td>
                <td>{{item.timeInOut}}</td>
                <td>{{item.laneAttr}}</td>
                <td>{{item.laneNo}}</td>
                <td>{{item.entranceCarCategory}}</td>
                <td>{{item.entranceKind}}</td>
                <td>{{item.carNoColor}}</td>
                <td>{{item.stationCollector}}</td>
                <td>{{item.amountExpect}}</td>
                <td>{{item.amountReal}}</td>
                <td>{{item.carMileage}}</td>
                <td>{{item.carWeight}}</td>
                <td>{{item.carBearingNum}}</td>
                <td>{{item.carBearingType}}</td>
                <td>{{item.carOverloadRate}}</td>
                <td>{{item.storageStartDate}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-if="isShowDetail && '车辆可疑历史' === detailTile" class="list-box" style="margin-top: 30px;">
          <div style="border-bottom: 1px solid #e6e6e6; border-left: none;">
            <div class="self-tab" style="display: block;">
              <ul style="padding: 0; width: 100%;">
                <li v-bind:class="{ active: 'desc' === currentDetailTab }" v-on:click="showDetailTab('desc')" style="padding: 10px 12px; width: 50%;border-radius: 0;">车辆情况描述</li>
                <li v-bind:class="{ active: 'state' === currentDetailTab }" v-on:click="showDetailTab('state')" style="padding: 10px 12px; width: calc(44% + 10px);border-radius: 0;">稽查情况</li>
              </ul>
            </div>
          </div>
          <div v-for="item of associationList">
            <table v-if="'desc' === currentDetailTab" class="self-table">
              <thead>
              <tr>
                <th>{{item.entranceExitDesc}}卡类型</th>
                <th>{{item.entranceExitDesc}}卡印刷号</th>
                <th>{{item.entranceExitDesc}}车牌</th>
                <th>车牌颜色</th>
                <th>{{item.entranceExitDesc}}时间</th>
                <th>{{item.entranceExitDesc}}收费站</th>
                <th>车型</th>
                <th>入口车道</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{item.cardType}}</td>
                <td>{{item.cardNo}}</td>
                <td>{{item.carNo}}</td>
                <td>{{item.carNoColor}}</td>
                <td>{{item.timeInOut}}</td>
                <td>{{item.stationName}}</td>
                <td>{{item.carType}}</td>
                <td>{{item.laneNo}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <table v-if="'state' === currentDetailTab" class="self-table">
            <thead>
            <tr>
              <th>稽查时间</th>
              <th>稽查机构</th>
              <th>稽查人</th>
              <th width="50%">稽查详情描述</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{selectedDetail.checkTime}}</td>
              <td>{{selectedDetail.checkOrg}}</td>
              <td>{{selectedDetail.checkPerson}}</td>
              <td>{{selectedDetail.checkDesc}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Suspicious',
  components: {},
  data () {
    return {
      detailTile: '车辆历史统计',
      currentIndex: '',
      isShowDetail: false,
      currentCarNo: '',
      currentTab: 'all',
      currentDetailTab: 'desc',
      tableList: [],
      associationList: [],
      selectedDetail: {}
    }
  },
  methods: {
    checkTitle(){
      if('车辆历史统计' === this.detailTile){
        this.detailTile = '车辆可疑历史'
      } else {
        this.detailTile = '车辆历史统计'
      }
      this.searchList()
    },
    searchList () {
      let params = {
        carFlag: this.$route.query.carFlag
      }
      if('车辆历史统计' === this.detailTile){
        params.escapeHistory = '0'
      } else {
        params.escapeHistory = '1'
      }
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/selectAll',
        params, {emulateJSON: true}).then((res) => {
        this.tableList = res.data.data
        if(this.tableList && this.tableList.length){
          this.showDetail(this.tableList[0], 0)
        }
      })
    },
    searchAssociationList (_data) {
      let params = {
        carFlag: this.$route.query.carFlag
      }
      if('车辆历史统计' === this.detailTile){
        params.escapeHistory = '0'
      } else {
        params.escapeHistory = '1'
      }
      if(_data.associationFlagId){
        params.associationFlagId = _data.associationFlagId
      }
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/selectAll',
        params, {emulateJSON: true}).then((res) => {
        this.associationList = res.data.data
      })
    },
    showTab (value) {
      this.currentTab = value
    },
    showDetailTab (value) {
      this.currentDetailTab = value
    },
    showDetail (value, index) {
      this.currentIndex = index
      if('1' === value.escapeHistory){
        this.isShowDetail = true
        this.searchAssociationList(value)
      }
      this.selectedDetail = value
    },
    addDark (item) {
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/addBlackList',
        {
          carFlag: item.carFlag
        }, {emulateJSON: true}).then((res) => {
        this.$alert(res.data.message)
      })
    },
    review () {
      this.$confirm('是否确认审核选择记录？').then(data => {
        if (data === 'success') {
          this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/check',
            {
              oid: this.selectedDetail.oid
            }, {emulateJSON: true}).then((res) => {
            this.$alert(res.data.message)
            if (res.data.status === 'SUCCESS') {
              this.searchList()
            }
          })
        }
      }).catch(fail => {

      })
    },
    deleteSuspicious () {
      this.$confirm('是将该记录修改为非可疑记录？').then(data => {
        if (data === 'success') {
          this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/suspicious',
            {
              oid: this.selectedDetail.oid
            }, {emulateJSON: true}).then((res) => {
            this.$alert(res.data.message)
            if (res.data.status === 'SUCCESS') {
              this.searchList()
            }
          })
        }
      }).catch(fail => {

      })
    }
  },
  created () {
    this.currentCarNo = this.$route.query.carFlag
    this.searchList()
  }
}
</script>

<style scoped>
  .self-tab {
    display: inline-block;
  }

  .self-tab ul {
    margin: 0;
  }

  .self-tab ul li {
    display: inline-block;
    width: 120px;
    border-top: 1px solid #5b79af;
    border-bottom: 1px solid #5b79af;
    font-size: 14px;
    padding: 4px 12px;
    cursor: pointer;
    text-align: center;
  }

  .self-tab ul li:first-child {
    border-left: 1px solid #5b79af;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }

  .self-tab ul li:last-child {
    border-right: 1px solid #5b79af;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    margin-left: -5px;
  }

  .self-tab ul li.active {
    background-color: #5b79af;
    color: #FFFFFF;
  }
</style>
