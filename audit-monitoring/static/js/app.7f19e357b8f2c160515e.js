webpackJsonp([1],{0:function(t,e){},"EKQ/":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[e("div",{staticClass:"framework-panel"},[this._m(0),this._v(" "),e("div",{staticClass:"bottom-content"},[this._m(1),this._v(" "),e("div",{staticStyle:{width:"calc(100% - 120px)",float:"left",height:"100%"}},[e("router-view")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-menu"},[e("div",{staticClass:"log"},[e("span",{staticClass:"log-img"}),this._v(" "),e("span",{staticClass:"log-text"},[this._v("稽查监控系统")]),this._v(" "),e("span",{staticStyle:{"font-size":"10px"}},[this._v("  2017 年 12 月 21 日    星期三    12`C   晴")])]),this._v(" "),e("div",{staticStyle:{float:"right",padding:"15px 20px",cursor:"pointer"}},[e("span",{staticClass:"logout"}),this._v(" "),e("span",{staticStyle:{"font-size":"15px"}},[this._v("退出")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-menu"},[a("div",{staticStyle:{"margin-bottom":"6px"}},[t._v("职位名称")]),t._v(" "),a("div",{staticClass:"item user-info",staticStyle:{height:"70px"}},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("姓名")])]),t._v(" "),a("div",{staticClass:"item user-profile"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("个人概述")])]),t._v(" "),a("div",{staticClass:"item affairs"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("日常事务")])]),t._v(" "),a("div",{staticClass:"item audit active"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("研判打逃")])]),t._v(" "),a("div",{staticClass:"item release"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("任务发布")])]),t._v(" "),a("div",{staticClass:"item work-plan"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("工作计划")])]),t._v(" "),a("div",{staticClass:"item statistics"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("统计报表")])]),t._v(" "),a("div",{staticClass:"item system"},[a("span",{staticClass:"image"}),t._v(" "),a("div",{staticClass:"text"},[t._v("系统维护")])])])}]};var c=a("VU/8")({name:"App"},i,!1,function(t){a("jNwj")},null,null).exports,n=a("/ocq"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-flex flow-y",staticStyle:{height:"100%"}},[t._m(0),t._v(" "),a("div",{staticClass:"content-box flex-box-1"},[a("div",{staticClass:"item-list-box"},[a("div",{staticClass:"item-box-title"},[t._v("\n        逃费类型\n      ")]),t._v(" "),a("div",{staticClass:"display-flex flow-x",staticStyle:{padding:"20px 30px","flex-wrap":"wrap"}},[a("div",{staticClass:"item total",on:{click:function(e){t.goTotal()}}},[a("span",{staticClass:"item-log"}),t._v(" "),a("div",{staticClass:"item-text"},[t._v("全计重逃费")])]),t._v(" "),a("div",{staticClass:"item peer",on:{click:function(e){t.goPeer()}}},[a("span",{staticClass:"item-log"}),t._v(" "),a("div",{staticClass:"item-text"},[t._v("非正常同行逃费")])]),t._v(" "),a("div",{staticClass:"item counterfeit",on:{click:function(e){t.goCounterfeit()}}},[a("span",{staticClass:"item-log"}),t._v(" "),a("div",{staticClass:"item-text"},[t._v("假冒优惠车逃费")])]),t._v(" "),a("div",{staticClass:"item critical",on:{click:function(e){t.goCritical()}}},[a("span",{staticClass:"item-log"}),t._v(" "),a("div",{staticClass:"item-text"},[t._v("临界车逃费")])]),t._v(" "),a("div",{staticClass:"item etc-mtc",on:{click:function(e){t.goEtcMtc()}}},[a("span",{staticClass:"item-log"}),t._v(" "),a("div",{staticClass:"item-text"},[t._v("ETC&MTC混合逃费")])]),t._v(" "),a("div",{staticClass:"item green",on:{click:function(e){t.goGreen()}}},[a("span",{staticClass:"item-log"}),t._v(" "),a("div",{staticClass:"item-text"},[t._v("假冒绿通行逃费")])])])]),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bread-crumbs"},[e("span",[this._v("当前位置：")]),this._v(" "),e("span",[this._v("研判打逃")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-list-box"},[e("div",{staticClass:"item-box-title"},[this._v("\n        智能稽查\n      ")]),this._v(" "),e("div",{staticClass:"display-flex flow-x",staticStyle:{padding:"20px 30px","flex-wrap":"wrap"}},[e("div",{staticClass:"item model"},[e("span",{staticClass:"item-log"}),this._v(" "),e("div",{staticClass:"item-text"},[this._v("单车模型分析")])]),this._v(" "),e("div",{staticClass:"item blacklist"},[e("span",{staticClass:"item-log"}),this._v(" "),e("div",{staticClass:"item-text"},[this._v("黑名单")])])])])}]};var r=a("VU/8")({name:"JudgmentHome",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{goTotal:function(){this.$router.replace({path:"/etc",query:{title:"全计重逃费"}})},goPeer:function(){this.$router.replace({path:"/etc",query:{title:"非正常同行逃费"}})},goCounterfeit:function(){this.$router.replace({path:"/etc",query:{title:"假冒优惠车逃费"}})},goCritical:function(){this.$router.replace({path:"/etc",query:{title:"临界车逃费"}})},goEtcMtc:function(){this.$router.replace({path:"/etc",query:{title:"ETC&MTC混合逃费"}})},goGreen:function(){this.$router.replace({path:"/etc",query:{title:"假冒绿通行逃费"}})}}},l,!1,function(t){a("U8/8")},"data-v-27ec944a",null).exports,o=a("BO1k"),h=a.n(o),d={name:"self-select",data:function(){return{showData:!1}},props:{dataList:Array,selectedValue:Object,widthData:{type:String,default:"160px"}},methods:{showDataList:function(){this.showData=!this.showData},select:function(t,e){this.showData=!1,console.log("选择"),console.log(t),console.log(e),this.selectedValue.key=t.key,this.selectedValue.value=t.value,this.$emit("select"),console.log("0"+this.selectedValue.value)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-select",style:{width:t.widthData},on:{click:t.showDataList}},[a("div",{staticClass:"sub-selected-value"},[a("span",[t._v(t._s(t.selectedValue.value))]),t._v(" "),t.showData?a("div",{staticClass:"sub-select-list",style:{width:t.widthData}},t._l(t.dataList,function(e,s){return a("div",{staticClass:"sub-select-item",on:{click:function(a){a.stopPropagation(),t.select(e,s)}}},[t._v("\n        "+t._s(e.value)+"\n      ")])})):t._e()])])},staticRenderFns:[]};var _=a("VU/8")(d,v,!1,function(t){a("uULp")},"data-v-1289559a",null).exports,u={name:"date-picker",props:{moment:{type:Number,default:function(){return(new Date).getTime()}}},data:function(){return{show:!1,selectYear:!1,current:"",select:{year:"",month:"",date:"",day:""},currentMonthFirstDay:null,currentMonthEndDate:null,currentMonthEndDay:null,lastMonthEndDate:null,list:[],years:[],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}},watch:{select:{handler:function(t){var e=void 0;e=1==t.month?new Date(t.year-1,12,0):new Date(t.year,t.month-1,0),this.lastMonthEndDate=e.getDate(),this.getDateList()},deep:!0},show:function(t){t?document.addEventListener("click",this.bindEvent):document.removeEventListener("click",this.bindEvent)},selectYear:function(t){var e=this;t&&this.$nextTick(function(){var t=e.$refs.year,a=e.$refs.month,s=t.getElementsByClassName("active")[0].innerHTML;a.getElementsByClassName("active")[0].innerHTML;t.scrollTop=30*(s-1900),a.scrollTop=30*(e.select.month-1)})}},created:function(){this.transform(this.moment),this.complete();for(var t=1900;t<=2100;t++)this.years.push(t)},filters:{dateFormat:function(t){return t?(t.year+"-"+t.month+"-"+t.date).replace(/\d+/g,function(t){return 4===t.length?t:2===t.length?t:"0"+t}):""}},methods:{transform:function(t){var e=new Date(t);this.select.year=e.getFullYear(),this.select.month=e.getMonth()+1,this.select.date=e.getDate(),this.select.day=e.getDay(),this.currentMonthFirstDay=new Date(this.select.year,this.select.month-1,1,0).getDay(),this.currentMonthEndDate=new Date(this.select.year,this.select.month,0).getDate(),this.currentMonthEndDay=new Date(this.select.year,this.select.month,0).getDay()},getDateList:function(){this.list=[];var t=this.lastMonthEndDate-(this.currentMonthFirstDay-1),e=this.numberList(t,this.lastMonthEndDate,!0).concat(this.numberList(1,7-this.currentMonthFirstDay));this.list.push(e),t=7-this.currentMonthFirstDay+1;for(var a=this.currentMonthEndDate-(7-this.currentMonthFirstDay),s=Math.ceil(a/7),i=7-a%7,c=0;c<s;c++)c===s-1&&i>0&&7!==i?this.list[s]=this.numberList(t,this.currentMonthEndDate).concat(this.numberList(1,i,!0)):this.list.push(this.numberList(t,t+6)),t+=7},numberList:function(t,e,a){for(var s=[],i=t;i<=e;i++)s.push({text:i,flag:!!a});return s},switchMonth:function(t){var e=this.select.year;if(-1===t){var a=1===this.select.month?12:this.select.month-1;12===a?this.transform(new Date(e-1,a-1,this.select.date)):this.transform(new Date(e,a-1,this.select.date))}else{var s=12===this.select.month?1:this.select.month+1;1===s?this.transform(new Date(e+1,s-1,this.select.date)):this.transform(new Date(e,s-1,this.select.date))}},pick:function(t){t.flag?parseInt(t.text)>15?this.transform(new Date(this.select.year,this.select.month-2,parseInt(t.text))):this.transform(new Date(this.select.year,this.select.month,parseInt(t.text))):this.transform(new Date(this.select.year,this.select.month-1,parseInt(t.text))),this.complete()},bindEvent:function(){this.show=!1,this.selectYear=!1},pickYear:function(t){this.transform(new Date(t,this.select.month-1,this.select.date)),this.complete()},pickMonth:function(t){this.transform(new Date(this.select.year,t-1,this.select.date)),this.complete()},complete:function(){this.$emit("picked",this.select.year,this.select.month,this.select.date),this.current={year:this.select.year,month:this.select.month,date:this.select.date}}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-datepicker"},[a("input",{attrs:{type:"text",readonly:""},domProps:{value:t._f("dateFormat")(t.current)},on:{click:function(e){e.stopPropagation(),t.show=!t.show}}}),t._v(" "),a("span",{staticClass:"data-log"}),t._v(" "),t.show?a("div",{staticClass:"vue-datepicker-wrap"},[a("div",{staticClass:"vue-datepicker-header",on:{click:function(t){t.stopPropagation()}}},[a("span",{staticClass:"vue-datepicker-header-btn vue-datepicker-header-btn-pre",on:{click:function(e){e.stopPropagation(),t.switchMonth(-1)}}},[t._v("<")]),t._v(" "),a("span",{staticClass:"vue-datepicker-header-btn vue-datepicker-header-btn-day",on:{click:function(e){e.stopPropagation(),t.selectYear=!t.selectYear}}},[t._v("\n                  "+t._s(t.select.year)+" 年 "+t._s(t.select.month)+" 月\n              ")]),t._v(" "),a("span",{staticClass:"vue-datepicker-header-btn vue-datepicker-header-btn-next",on:{click:function(e){e.stopPropagation(),t.switchMonth(1)}}},[t._v(">")])]),t._v(" "),a("div",{staticClass:"vue-datepicker-content"},[a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.list,function(e){return a("tr",t._l(e,function(e){return a("td",{class:{flag:e.flag,active:!e.flag&&e.text==t.current.date&&t.select.month==t.current.month&&t.select.year==t.current.year},on:{click:function(a){t.pick(e)}}},[t._v("\n            "+t._s(e.text)+"\n          ")])}))}))]),t._v(" "),t.selectYear?a("div",{staticClass:"vue-date-picker-year-panel"},[a("ul",{ref:"year"},t._l(t.years,function(e){return a("li",{class:{active:e==t.select.year},on:{click:function(a){a.stopPropagation(),t.pickYear(e)}}},[t._v(t._s(e))])})),t._v(" "),a("ul",{ref:"month"},t._l(t.months,function(e,s){return a("li",{class:{active:s+1==t.select.month},on:{click:function(e){e.stopPropagation(),t.pickMonth(s+1)}}},[t._v("\n            "+t._s(e)+"\n          ")])}))]):t._e()])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("日")]),t._v(" "),a("th",[t._v("一")]),t._v(" "),a("th",[t._v("二")]),t._v(" "),a("th",[t._v("三")]),t._v(" "),a("th",[t._v("四")]),t._v(" "),a("th",[t._v("五")]),t._v(" "),a("th",[t._v("六")])])}]};var f={name:"JudgmentEtcMtc",components:{SelfSelect:_,datepicker:a("VU/8")(u,p,!1,function(t){a("pxrg")},null,null).exports},data:function(){return{highSpeedList:[],tollList:[],catList:[],locList:[],tableList:[],colorList:[{key:"蓝色",value:"蓝色"},{key:"红色",value:"红色"},{key:"黑色",value:"黑色"}],carTypeList:[{key:"客车",value:"客车"},{key:"货车",value:"货车"}],axesList:[{key:"1",value:"1"},{key:"2",value:"2"}],highSpeed:{key:"",value:""},toll:{key:"",value:""},cat:"",org:"",loc:{key:"",value:""},carLicenceColor:{key:"",value:""},carType:{key:"",value:""},axesNumber:{key:"",value:""},startTime:"",endTime:"",widthData:"160px",isShowExact:!1,catTreeData:[{title:""}],orgTreeData:[{title:""}]}},methods:{selectCat:function(t){console.log("selected: ",t),this.cat=t.title},selectOrg:function(t){console.log("selected: ",t),this.org=t.id},highSpeedChanged:function(){var t=this;this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carStation/station",{highspeedName:this.highSpeed.key},{emulateJSON:!0}).then(function(e){if(e.data&&e.data.length){var a=!0,s=!1,i=void 0;try{for(var c,n=h()(e.data);!(a=(c=n.next()).done);a=!0){var l=c.value;t.tollList.push({key:l,value:l})}}catch(t){s=!0,i=t}finally{try{!a&&n.return&&n.return()}finally{if(s)throw i}}}})},exactSearch:function(){this.isShowExact=!0},cacelExact:function(){this.isShowExact=!1},searchList:function(){var t=this,e=this.getPrams();this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/selectAll",e,{emulateJSON:!0}).then(function(e){t.tableList=e.data.data||[]})},getPrams:function(){var t={};return this.highSpeed.key&&(t.highSpeed=this.highSpeed.key),this.cat&&(t.carCategory=this.cat),this.loc.key&&(t.carNoLocation=this.loc.key),this.startTime&&(t.startDate=this.startTime),this.org&&(t.org=this.org),this.endTime&&(t.endDate=this.endTime),this.isShowExact&&this.carLicenceColor&&(t.carLicenceColor=this.carLicenceColor.key),this.isShowExact&&this.carType&&(t.carType=this.carType.key),this.isShowExact&&this.axesNumber&&(t.axesNumber=this.axesNumber.key),t},showDetail:function(t){this.$router.replace({path:"/suspicious",query:{carFlag:t.carFlag,parentTitle:this.$route.query.title}})},showProject:function(){},startTimeSelect:function(t,e,a){this.startTime=t+"-"+e+"-"+a},endTimeSelect:function(t,e,a){this.endTime=t+"-"+e+"-"+a},addDark:function(t){var e=this;this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/addBlackList",{carFlag:t.carFlag},{emulateJSON:!0}).then(function(t){e.$alert(t.data.message),e.searchList()})},formatTreeData:function(t){if(t.title=t.name,t.children&&t.children.length){var e=!0,a=!1,s=void 0;try{for(var i,c=h()(t.children);!(e=(i=c.next()).done);e=!0){var n=i.value;this.formatTreeData(n)}}catch(t){a=!0,s=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw s}}}},formatOrgTreeData:function(t){if(t.id=t.orgId,t.title=t.orgName,t.children&&t.children.length){var e=!0,a=!1,s=void 0;try{for(var i,c=h()(t.children);!(e=(i=c.next()).done);e=!0){var n=i.value;this.formatOrgTreeData(n)}}catch(t){a=!0,s=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw s}}}}},created:function(){var t=this;this.searchList(),this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/category/tree",{},{emulateJSON:!0}).then(function(e){e.data&&(t.formatTreeData(e.data),t.catTreeData=[e.data])}),this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carOrg/tree",{},{emulateJSON:!0}).then(function(e){e.data&&(t.formatOrgTreeData(e.data),t.orgTreeData=[e.data],console.log("treeData: ",t.orgTreeData))}),this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carStation/highSpeed",{},{emulateJSON:!0}).then(function(e){if(e.data&&e.data.length){var a=!0,s=!1,i=void 0;try{for(var c,n=h()(e.data);!(a=(c=n.next()).done);a=!0){var l=c.value;t.highSpeedList.push({key:l,value:l})}}catch(t){s=!0,i=t}finally{try{!a&&n.return&&n.return()}finally{if(s)throw i}}}}),this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/category/tree",{},{emulateJSON:!0}).then(function(e){if(e.data&&e.data.length){var a=!0,s=!1,i=void 0;try{for(var c,n=h()(e.data);!(a=(c=n.next()).done);a=!0){var l=c.value;t.catList.push({key:l,value:l})}}catch(t){s=!0,i=t}finally{try{!a&&n.return&&n.return()}finally{if(s)throw i}}}}),this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/listLoc",{},{emulateJSON:!0}).then(function(e){if(e.data&&e.data.length){var a=!0,s=!1,i=void 0;try{for(var c,n=h()(e.data);!(a=(c=n.next()).done);a=!0){var l=c.value;t.locList.push({key:l,value:l})}}catch(t){s=!0,i=t}finally{try{!a&&n.return&&n.return()}finally{if(s)throw i}}}})}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-flex flow-y",staticStyle:{height:"100%"}},[a("div",{staticClass:"bread-crumbs"},[a("span",[t._v("当前位置：")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("研判打逃")]),t._v("\n    |\n    "),a("span",[t._v(t._s(this.$route.query.title))])],1),t._v(" "),a("div",{staticClass:"content-box flex-box-1 display-flex flow-y",staticStyle:{padding:"15px 15px 0 15px"}},[a("div",{staticClass:"filter-box"},[a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("高速名称：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("self-select",{attrs:{selectedValue:t.highSpeed,dataList:t.highSpeedList,widthData:t.widthData},on:{select:t.highSpeedChanged}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("收费站：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("self-select",{attrs:{selectedValue:t.toll,dataList:t.tollList,widthData:t.widthData},on:{select:t.showProject}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("车类别：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("v-select-tree",{attrs:{data:t.catTreeData},on:{"node-click":t.selectCat}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("车牌属地：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("self-select",{attrs:{selectedValue:t.loc,dataList:t.locList,widthData:t.widthData},on:{select:t.showProject}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("入库时间：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("datepicker",{attrs:{moment:0},on:{picked:t.startTimeSelect}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("至：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("datepicker",{on:{picked:t.endTimeSelect}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("单位选择：")]),t._v(" "),a("dd",{staticClass:"right-content",staticStyle:{position:"relative"}},[a("v-select-tree",{attrs:{data:t.orgTreeData},on:{"node-click":t.selectOrg}})],1)]),t._v(" "),t._m(0),t._v(" "),t.isShowExact?t._e():a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[a("div",{staticClass:"self-btn",on:{click:function(e){t.searchList()}}},[t._v("查询")])]),t._v(" "),a("dd",{staticClass:"right-content",staticStyle:{cursor:"pointer"},on:{click:function(e){t.exactSearch()}}},[a("span",{staticClass:"filter-btn"}),a("span",{staticClass:"filter-title"},[t._v("搜索工具")])])])]),t._v(" "),t.isShowExact?a("div",{staticClass:"list-box"},[t._m(1),t._v(" "),a("div",{staticClass:"filter-box"},[a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("车辆颜色：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("self-select",{attrs:{selectedValue:t.carLicenceColor,dataList:t.colorList,widthData:t.widthData}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("车型：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("self-select",{attrs:{selectedValue:t.carType,dataList:t.carTypeList,widthData:t.widthData}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[t._v("轴数：")]),t._v(" "),a("dd",{staticClass:"right-content"},[a("self-select",{attrs:{selectedValue:t.axesNumber,dataList:t.axesList,widthData:t.widthData}})],1)]),t._v(" "),a("dl",{staticClass:"left-right-box"},[a("dt",{staticClass:"left-title"},[a("div",{staticClass:"self-btn",staticStyle:{"background-color":"#FFFFFF",color:"#000000",border:"0.5px solid #919191","border-radius":"3px"},on:{click:function(e){t.cacelExact()}}},[t._v("取消")])]),t._v(" "),a("dd",{staticClass:"right-content",staticStyle:{"line-height":"26px"}},[a("div",{staticClass:"self-btn",staticStyle:{"margin-left":"25px"},on:{click:function(e){t.searchList()}}},[t._v("查询")])])])])]):t._e(),t._v(" "),a("div",{staticClass:"flex-box-1"},[a("div",{staticClass:"list-box"},[t._m(2),t._v(" "),a("div",{staticStyle:{overflow:"auto"}},[a("table",{staticClass:"self-table"},[t._m(3),t._v(" "),a("tbody",t._l(t.tableList,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.carNo))]),t._v(" "),a("td",[t._v(t._s(e.cardPrintNo))]),t._v(" "),a("td",[t._v(t._s(e.carType))]),t._v(" "),a("td",[t._v(t._s(e.carLicenceColor))]),t._v(" "),a("td",[t._v(t._s(e.frequency))]),t._v(" "),a("td",[a("div",{staticClass:"table-btn-box",on:{click:function(a){t.addDark(e)}}},[a("span",{staticClass:"table-btn add"}),a("span",{staticClass:"table-btn-text"},[t._v("加入黑名单")])]),t._v(" "),a("div",{staticClass:"table-btn-box",on:{click:function(a){t.showDetail(e)}}},[a("span",{staticClass:"table-btn history"}),a("span",{staticClass:"table-btn-text"},[t._v("车辆历史")])])])])}))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("dl",{staticClass:"left-right-box"},[e("dt",{staticClass:"left-title"},[this._v("关键字：")]),this._v(" "),e("dd",{staticClass:"right-content"},[e("input",{staticStyle:{width:"160px",height:"23px",border:"1px solid #c7d3ed"},attrs:{type:"text"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"12px 0","border-bottom":"1px solid #e6e6e6"}},[e("div",{staticStyle:{"border-left":"5px solid #5a78af","padding-left":"20px"}},[this._v("\n            精确查询\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{padding:"12px 0","border-bottom":"1px solid #e6e6e6"}},[e("div",{staticStyle:{"border-left":"5px solid #5a78af","padding-left":"20px"}},[this._v("\n            可疑车辆统计\n          ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("车牌号")]),t._v(" "),a("th",[t._v("卡印刷号")]),t._v(" "),a("th",[t._v("车型")]),t._v(" "),a("th",[t._v("颜色")]),t._v(" "),a("th",[t._v("次数")]),t._v(" "),a("th",{attrs:{width:"25%"}},[t._v("操作")])])])}]};var g=a("VU/8")(f,m,!1,function(t){a("d8JE")},"data-v-7195354a",null).exports,y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"bread-crumbs"},[a("span",[t._v("当前位置：")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("研判打逃")]),t._v("|\n    "),a("router-link",{attrs:{to:{path:"/etc",query:{title:"ETC&MTC混合逃费"}}}},[t._v(t._s(this.$route.query.parentTitle))]),t._v("|\n    "),a("span",[t._v(t._s(t.currentCarNo))])],1),t._v(" "),a("div",{staticClass:"content-box ",staticStyle:{padding:"15px 15px 0 15px",height:"calc(100% - 55px)"}},[a("div",{staticStyle:{height:"calc(100% - 12px)"}},[a("div",{staticClass:"list-box",staticStyle:{"margin-top":"0"}},[a("div",{staticStyle:{padding:"12px 0","border-bottom":"1px solid #e6e6e6"}},[a("div",{staticStyle:{"border-left":"5px solid #5a78af","padding-left":"20px",float:"left","margin-top":"3px"}},[t._v("\n            "+t._s(t.detailTile)+"\n          ")]),t._v(" "),"车辆可疑历史"===t.detailTile?a("div",{staticClass:"self-btn",staticStyle:{display:"inline-block","vertical-align":"top",height:"28px","line-height":"28px","margin-left":"20px",width:"120px"},on:{click:function(e){t.checkTitle()}}},[t._v("\n            显示车辆所有历史\n          ")]):t._e(),t._v(" "),"车辆历史统计"===t.detailTile?a("div",{staticClass:"self-btn",staticStyle:{display:"inline-block","vertical-align":"top",height:"28px","line-height":"28px","margin-left":"20px",width:"120px"},on:{click:function(e){t.checkTitle()}}},[t._v("\n            显示车辆可疑历史\n          ")]):t._e(),t._v(" "),"0"===t.selectedDetail.checkStatus?a("div",{staticClass:"self-btn",staticStyle:{display:"inline-block","vertical-align":"top",height:"28px","line-height":"28px","margin-left":"20px",width:"120px"},on:{click:function(e){t.review()}}},[t._v("\n            审核车辆\n          ")]):t._e(),t._v(" "),"1"===t.selectedDetail.escapeHistory?a("div",{staticClass:"self-btn",staticStyle:{display:"inline-block","vertical-align":"top",height:"28px","line-height":"28px","margin-left":"20px",width:"120px"},on:{click:function(e){t.deleteSuspicious()}}},[t._v("\n            删除可疑\n          ")]):t._e()]),t._v(" "),a("div",{staticStyle:{overflow:"auto","max-height":"240px"}},[a("table",{staticClass:"self-table",staticStyle:{width:"2000px"}},[t._m(0),t._v(" "),a("tbody",t._l(t.tableList,function(e,s){return a("tr",{on:{click:function(a){t.showDetail(e,s)}}},[a("td",[a("input",{attrs:{type:"checkbox"},domProps:{checked:s===t.currentIndex}}),t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.checkStatusDesc))]),t._v(" "),a("td",[t._v(t._s(e.escapeHistoryDesc))]),t._v(" "),a("td",[t._v(t._s(e.cardType))]),t._v(" "),a("td",[t._v(t._s(e.cardNo))]),t._v(" "),a("td",[t._v(t._s(e.entranceExitDesc))]),t._v(" "),a("td",[t._v(t._s(e.carSerial))]),t._v(" "),a("td",[t._v(t._s(e.stationName))]),t._v(" "),a("td",[t._v(t._s(e.timeInOut))]),t._v(" "),a("td",[t._v(t._s(e.laneAttr))]),t._v(" "),a("td",[t._v(t._s(e.laneNo))]),t._v(" "),a("td",[t._v(t._s(e.entranceCarCategory))]),t._v(" "),a("td",[t._v(t._s(e.entranceKind))]),t._v(" "),a("td",[t._v(t._s(e.carNoColor))]),t._v(" "),a("td",[t._v(t._s(e.stationCollector))]),t._v(" "),a("td",[t._v(t._s(e.amountExpect))]),t._v(" "),a("td",[t._v(t._s(e.amountReal))]),t._v(" "),a("td",[t._v(t._s(e.carMileage))]),t._v(" "),a("td",[t._v(t._s(e.carWeight))]),t._v(" "),a("td",[t._v(t._s(e.carBearingNum))]),t._v(" "),a("td",[t._v(t._s(e.carBearingType))]),t._v(" "),a("td",[t._v(t._s(e.carOverloadRate))]),t._v(" "),a("td",[t._v(t._s(e.storageStartDate))])])}))])])]),t._v(" "),t.isShowDetail&&"车辆可疑历史"===t.detailTile?a("div",{staticClass:"list-box",staticStyle:{"margin-top":"30px"}},[a("div",{staticStyle:{"border-bottom":"1px solid #e6e6e6","border-left":"none"}},[a("div",{staticClass:"self-tab",staticStyle:{display:"block"}},[a("ul",{staticStyle:{padding:"0",width:"100%"}},[a("li",{class:{active:"desc"===t.currentDetailTab},staticStyle:{padding:"10px 12px",width:"50%","border-radius":"0"},on:{click:function(e){t.showDetailTab("desc")}}},[t._v("车辆情况描述")]),t._v(" "),a("li",{class:{active:"state"===t.currentDetailTab},staticStyle:{padding:"10px 12px",width:"calc(44% + 10px)","border-radius":"0"},on:{click:function(e){t.showDetailTab("state")}}},[t._v("稽查情况")])])])]),t._v(" "),t._l(t.associationList,function(e){return a("div",["desc"===t.currentDetailTab?a("table",{staticClass:"self-table"},[a("thead",[a("tr",[a("th",[t._v(t._s(e.entranceExitDesc)+"卡类型")]),t._v(" "),a("th",[t._v(t._s(e.entranceExitDesc)+"卡印刷号")]),t._v(" "),a("th",[t._v(t._s(e.entranceExitDesc)+"车牌")]),t._v(" "),a("th",[t._v("车牌颜色")]),t._v(" "),a("th",[t._v(t._s(e.entranceExitDesc)+"时间")]),t._v(" "),a("th",[t._v(t._s(e.entranceExitDesc)+"收费站")]),t._v(" "),a("th",[t._v("车型")]),t._v(" "),a("th",[t._v("入口车道")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(e.cardType))]),t._v(" "),a("td",[t._v(t._s(e.cardNo))]),t._v(" "),a("td",[t._v(t._s(e.carNo))]),t._v(" "),a("td",[t._v(t._s(e.carNoColor))]),t._v(" "),a("td",[t._v(t._s(e.timeInOut))]),t._v(" "),a("td",[t._v(t._s(e.stationName))]),t._v(" "),a("td",[t._v(t._s(e.carType))]),t._v(" "),a("td",[t._v(t._s(e.laneNo))])])])]):t._e()])}),t._v(" "),"state"===t.currentDetailTab?a("table",{staticClass:"self-table"},[t._m(1),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(t.selectedDetail.checkTime))]),t._v(" "),a("td",[t._v(t._s(t.selectedDetail.checkOrg))]),t._v(" "),a("td",[t._v(t._s(t.selectedDetail.checkPerson))]),t._v(" "),a("td",[t._v(t._s(t.selectedDetail.checkDesc))])])])]):t._e()],2):t._e()])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("审核状态")]),t._v(" "),a("th",[t._v("是否可疑")]),t._v(" "),a("th",[t._v("出入口卡片类型")]),t._v(" "),a("th",[t._v("出口入卡印刷号")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("流水号")]),t._v(" "),a("th",[t._v("出入口收费站")]),t._v(" "),a("th",[t._v("出入口时间")]),t._v(" "),a("th",[t._v("出入口车道属性")]),t._v(" "),a("th",[t._v("出入口车道号")]),t._v(" "),a("th",[t._v("出入口客货车")]),t._v(" "),a("th",[t._v("出入口车种")]),t._v(" "),a("th",[t._v("出入口车牌颜色")]),t._v(" "),a("th",[t._v("出入口收费员")]),t._v(" "),a("th",[t._v("应收金额")]),t._v(" "),a("th",[t._v("实收金额")]),t._v(" "),a("th",[t._v("里程")]),t._v(" "),a("th",[t._v("总重")]),t._v(" "),a("th",[t._v("轴数")]),t._v(" "),a("th",[t._v("轴型")]),t._v(" "),a("th",[t._v("超限率")]),t._v(" "),a("th",[t._v("入库时间")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("稽查时间")]),this._v(" "),e("th",[this._v("稽查机构")]),this._v(" "),e("th",[this._v("稽查人")]),this._v(" "),e("th",{attrs:{width:"50%"}},[this._v("稽查详情描述")])])])}]};var C=a("VU/8")({name:"Suspicious",components:{},data:function(){return{detailTile:"车辆历史统计",currentIndex:"",isShowDetail:!1,currentCarNo:"",currentTab:"all",currentDetailTab:"desc",tableList:[],associationList:[],selectedDetail:{}}},methods:{checkTitle:function(){"车辆历史统计"===this.detailTile?this.detailTile="车辆可疑历史":this.detailTile="车辆历史统计",this.searchList()},searchList:function(){var t=this,e={carFlag:this.$route.query.carFlag};"车辆历史统计"===this.detailTile?e.escapeHistory="0":e.escapeHistory="1",this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/selectAll",e,{emulateJSON:!0}).then(function(e){t.tableList=e.data.data,t.tableList&&t.tableList.length&&t.showDetail(t.tableList[0],0)})},searchAssociationList:function(t){var e=this,a={carFlag:this.$route.query.carFlag};"车辆历史统计"===this.detailTile?a.escapeHistory="0":a.escapeHistory="1",t.associationFlagId&&(a.associationFlagId=t.associationFlagId),this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/selectAll",a,{emulateJSON:!0}).then(function(t){e.associationList=t.data.data})},showTab:function(t){this.currentTab=t},showDetailTab:function(t){this.currentDetailTab=t},showDetail:function(t,e){this.currentIndex=e,"1"===t.escapeHistory&&(this.isShowDetail=!0,this.searchAssociationList(t)),this.selectedDetail=t},addDark:function(t){var e=this;this.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfo/addBlackList",{carFlag:t.carFlag},{emulateJSON:!0}).then(function(t){e.$alert(t.data.message)})},review:function(){var t=this;this.$confirm("是否确认审核选择记录？").then(function(e){"success"===e&&t.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/check",{oid:t.selectedDetail.oid},{emulateJSON:!0}).then(function(e){t.$alert(e.data.message),"SUCCESS"===e.data.status&&t.searchList()})}).catch(function(t){})},deleteSuspicious:function(){var t=this;this.$confirm("是将该记录修改为非可疑记录？").then(function(e){"success"===e&&t.$http.post("http://47.96.250.153:8080/audit-0.0.1-SNAPSHOT/api/carInfoTrip/suspicious",{oid:t.selectedDetail.oid},{emulateJSON:!0}).then(function(e){t.$alert(e.data.message),"SUCCESS"===e.data.status&&t.searchList()})}).catch(function(t){})}},created:function(){this.currentCarNo=this.$route.query.carFlag,this.searchList()}},y,!1,function(t){a("cDOh")},"data-v-1263a774",null).exports;s.default.use(n.a);var x=new n.a({routes:[{path:"/",name:"JudgmentHome",component:r},{path:"/etc",name:"JudgmentEtcMtc",component:g},{path:"/suspicious",name:"Suspicious",component:C}]}),b=a("8+8L"),S=a("TJas"),D=(a("EKQ/"),a("ug9+"),a("lTSm"));s.default.use(D.VTree),s.default.use(D.VSelectTree),s.default.use(S.Alert),s.default.use(S.Confirm),s.default.use(S.Toast),s.default.use(b.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:x,components:{App:c},template:"<App/>"})},"U8/8":function(t,e){},cDOh:function(t,e){},d8JE:function(t,e){},jNwj:function(t,e){},pxrg:function(t,e){},uULp:function(t,e){},"ug9+":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7f19e357b8f2c160515e.js.map