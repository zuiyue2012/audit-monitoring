<template>
  <div class="display-flex flow-y" style="height: 100%;">
    <div class="bread-crumbs">
      <span>当前位置：</span>
      <router-link to="/">研判打逃</router-link>
      |
      <router-link to="/etc">ETC&MTC 逃费</router-link>
      |
      <span>{{currentCarNo}}</span>
    </div>
    <div class="content-box flex-box-1 display-flex flow-y" style="padding: 15px 15px 0 15px;">
      <div class="flex-box-1">
        <div class="list-box" style="margin-top: 0;">
          <div style="padding: 12px 0; border-bottom: 1px solid #e6e6e6;">
            <div style="border-left: 5px solid #5a78af; padding-left: 20px; float: left;margin-top: 3px;">
              可疑车辆统计
            </div>
            <div class="self-tab">
              <ul>
                <li v-bind:class="{ active: 'all' === currentTab }" v-on:click="showTab('all')">显示车辆全部历史</li>
                <li v-bind:class="{ active: 'suspic' === currentTab }" v-on:click="showTab('suspic')">显示车辆可疑历史</li>
              </ul>
            </div>
            <div v-if="'未审核' === selectedDetail.checkStatus" class="self-btn"
                 style="display: inline-block;vertical-align: top;height: 28px;line-height: 28px;margin-left: 20px;width: 120px;"
                  v-on:click="review()">
              审核车辆
            </div>
            <div v-if="'1' === selectedDetail.escapeHistroy" class="self-btn"
                 style="display: inline-block;vertical-align: top;height: 28px;line-height: 28px;margin-left: 20px;width: 120px;"
                 v-on:click="deleteSuspicious()">
              删除可疑
            </div>
          </div>
          <table class="self-table">
            <thead>
            <tr>
              <th>序号</th>
              <th>审核状态</th>
              <th>出口卡片类型</th>
              <th>出口卡印刷号</th>
              <th>入口卡片类型</th>
              <th>入口卡印刷号</th>
              <th>流水号</th>
              <th>出口收费站</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) of tableList" v-on:click="showDetail(item, index)">
              <td><input type="checkbox" :checked="index === currentIndex"/>{{index + 1}}</td>
              <td>{{item.checkStatus}}</td>
              <td>{{item.cardExitType}}</td>
              <td>{{item.cardExitNo}}</td>
              <td>{{item.cardEntranceType}}</td>
              <td>{{item.cardEntranceNo}}</td>
              <td>{{item.carSerial}}</td>
              <td>{{item.stationExitName}}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div v-if="isShowDetail" class="list-box" style="margin-top: 30px;">
          <div style="border-bottom: 1px solid #e6e6e6; border-left: none;">
            <div class="self-tab" style="display: block;">
              <ul style="padding: 0; width: 100%;">
                <li v-bind:class="{ active: 'desc' === currentDetailTab }" v-on:click="showDetailTab('desc')" style="padding: 10px 12px; width: 50%;border-radius: 0;">车辆情况描述</li>
                <li v-bind:class="{ active: 'state' === currentDetailTab }" v-on:click="showDetailTab('state')" style="padding: 10px 12px; width: calc(44% + 10px);border-radius: 0;">稽查情况</li>
              </ul>
            </div>
          </div>
          <table v-if="'desc' === currentDetailTab" class="self-table">
            <thead>
            <tr>
              <th>入口卡类型</th>
              <th>入口卡印刷号</th>
              <th>入口车牌</th>
              <th>车牌颜色</th>
              <th>入口时间</th>
              <th>入口收费站</th>
              <th>车型</th>
              <th>入口车道</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{selectedDetail.cardEntranceType}}</td>
              <td>{{selectedDetail.cardEntranceNo}}</td>
              <td>{{selectedDetail.carNoIn}}</td>
              <td>{{selectedDetail.carNoColor}}</td>
              <td>{{selectedDetail.timeEntrance}}</td>
              <td>{{selectedDetail.stationEntranceName}}</td>
              <td>{{selectedDetail.carType}}</td>
              <td>{{selectedDetail.laneEntrance}}</td>
            </tr>
            </tbody>
          </table>
          <table v-if="'desc' === currentDetailTab" class="self-table">
            <thead>
            <tr>
              <th>出口卡类型</th>
              <th>出口卡印刷号</th>
              <th>出口车牌</th>
              <th>车牌颜色</th>
              <th>出口时间</th>
              <th>出口收费站</th>
              <th>车型</th>
              <th>出口车道</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{selectedDetail.cardExitType}}</td>
              <td>{{selectedDetail.cardExitNo}}</td>
              <td>{{selectedDetail.carNoOut}}</td>
              <td>{{selectedDetail.carNoColor}}</td>
              <td>{{selectedDetail.timeExit}}</td>
              <td>{{selectedDetail.stationExitName}}</td>
              <td>{{selectedDetail.carType}}</td>
              <td>{{selectedDetail.laneExit}}</td>
            </tr>
            </tbody>
          </table>
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
      <div style="text-align: center; color: #5e5e5e; font-size: 8px;">
        <span>@2018 睿盈源科技版权所有V1.0.0.0          服务电话：028-62084609</span>
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
      currentIndex: '',
      isShowDetail: false,
      currentCarNo: '',
      currentTab: 'all',
      currentDetailTab: 'desc',
      tableList: [],
      selectedDetail: {}
    }
  },
  methods: {
    searchList () {
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/selectAll',
        {params: {
          carNo: this.$route.query.carNo,
          carType: this.$route.query.carType
        }}, {emulateJSON: true}).then((res) => {
        this.tableList = res.data.data
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
      this.isShowDetail = true
      this.selectedDetail = value
    },
    addDark (item) {
      this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/addBlackList',
        {
          params: {carNo: item.carNo, carType: item.carType}
        }, {emulateJSON: true}).then((res) => {
        this.$alert(res.data.message)
      })
    },
    review () {
      this.$confirm('是否确认审核选择记录？').then(data => {
        if (data === 'success') {
          this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/check',
            {
              params: {carNo: this.selectedDetail.carNo, carType: this.selectedDetail.carType, associationFlagId: this.selectedDetail.associationFlagId}
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
      this.$confirm('是否确认审核选择记录？').then(data => {
        if (data === 'success') {
          this.$http.post('http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/suspicious',
            {
              params: {carNo: this.selectedDetail.carNo, carType: this.selectedDetail.carType, associationFlagId: this.selectedDetail.associationFlagId}
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
    this.currentCarNo = this.$route.query.carNo
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
