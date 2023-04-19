<template>
  <div>
    <van-button @click="showFilterPanel=!showFilterPanel" type="info">点击打开筛选面板</van-button>
    <m-filter-panel ref="filterPanel" :show="showFilterPanel" :list="list" :title="title" @sure="sureFilter" :column="2" />
  </div>
</template>
  
  <script>
import { Button } from 'vant'
import 'vant/lib/index.css'
import FilterPanel from '../../../src/FilterPanel'

export default {
  components: {
    [Button.name]: Button,
    mFilterPanel: FilterPanel
  },
  data() {
    return {
      title: '花的种类',
      showFilterPanel: false,
      list: [
        { text: '全部', ischecked: true, type: '' },
        { text: '草本花卉', ischecked: false, type: 'Herbaceous' },
        { text: '木本花卉', ischecked: false, type: 'Woody' },
        { text: '观叶植物', ischecked: false, type: 'foliage' },
        { text: '盆栽花卉', ischecked: false, type: 'potting' },
        { text: '盆栽花卉', ischecked: false, type: 'potting' }
      ]
    }
  },
  methods: {
    sureFilter({ count, list, selected }) {
      this.showFilterPanel = false
      console.log(count) // 选中的分类数量
      console.log(list) // 获取更新后的分类
      console.log(selected) // 被选中的分类
    }
  }
}
</script>
  
  <style>
</style>