<template>
  <vue-tree v-model="checkedIds" :tree-data="treeData" :options="options"></vue-tree>
</template>

<script>
import VueTree from 'vue-simple-tree/src/components/VueTree.vue'

export default {
  name: 'tree-select',
  components: {VueTree},
  data: function () {
    return {}
  },
  props: {
    checkedIds: [4],
    selectedValue: Object,
    options: {
      label: 'label'
    },
    treeData: [
      {
        label: '根目录[1]',
        id: 1,
        children: [
          {
            label: '一级节点[4]',
            id: 4,
            children: [
              {
                label: '二级节点[5]',
                id: 5,
                children: [
                  {
                    label: '三级节点[6]',
                    id: 6
                  },
                  {
                    label: '三级节点[8]',
                    id: 8
                  },
                  {
                    label: '三级节点[30]',
                    id: 30
                  },
                  {
                    label: '三级节点[31]',
                    id: 31,
                    children: [
                      {
                        label: '四级节点[36]',
                        id: 36
                      },
                      {
                        label: '四级节点[38]',
                        id: 38
                      },
                      {
                        label: '四级节点[39]',
                        id: 39
                      },
                      {
                        label: '四级节点[48]',
                        id: 48
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    widthData: {
      type: String,
      default: '160px'
    }
  },
  methods: {
    handle (item) {
      console.log(`节点 ${JSON.stringify(item)} 作为事件参数传递`)
    }
  }
}
</script>

<style scoped>

</style>
