<template>
  <div class="base-select" v-on:click="showDataList" v-bind:style="{width: widthData}">
    <div class="sub-selected-value">
      <span>{{selectedValue.value}}</span>
      <div class="sub-select-list" v-bind:style="{width: widthData}" v-if="showData">
        <div class="sub-select-item" v-for="(item, index) in dataList" @click.stop="select(item, index)">
          {{item.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'self-select',
    data() {
      return {
        showData: false
      }
    },
    props: {
      dataList: Array,
      selectedValue: Object, // 传回父组件的选择值
      widthData: {
        type: String,
        default: '160px'
      }
    },
    methods: {
      showDataList() {
        this.showData = !this.showData
      },
      select(item, index) {
        this.showData = false
        console.log('选择')
        console.log(item)
        console.log(index)
        // this.selectedValue=item;
        // 赋值的时候要分开写
        this.selectedValue.key = item.key
        this.selectedValue.value = item.value
        this.$emit('select')
        console.log('0' + this.selectedValue.value)
      }
    }
  }
</script>

<style scoped>
  .base-select {
    position: relative;
    top: 0px;
    border: 1px solid #c7d3ed;
    height: 25px;
  }

  .base-select:after {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    content: '';
    width: 0;
    border-top: 5px solid black;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    height: 0;
  }

  .sub-selected-value {
    position: absolute;
    font-size: 12px;
  }

  .sub-selected-value span {
    margin: 5px;
    line-height: 24px;
  }

  .sub-select-list {
    position: absolute;
    top: 26px;
    background: white;
    box-shadow: 1px 1px 1px 1px #D9D9D9;
    z-index: 9;
  }

  .sub-select-item {
    width: auto;
    min-width: 7.25rem;
    position: relative;
    text-align: left;
    padding: 5px;
    cursor: pointer;
  }

  .sub-select-item:hover {
    background-color: cornflowerblue;
  }

  .sub-select-item img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-0.1rem, -50%);
    width: .8125rem;
    height: .625rem;
  }
</style>
