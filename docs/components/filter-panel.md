# FilterPanel 筛选面板

## 默认单选

<filter-panel-default-demo></filter-panel-default-demo>

```vue
<template>
  <div>
    <van-button @click="showFilterPanel = !showFilterPanel" type="info">点击打开筛选面板</van-button>
    <m-filter-panel ref="filterPanel" :show="showFilterPanel" :list="list" :title="title" @sure="sureFilter" />
  </div>
</template>

<script>
export default {
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
```

## 多选状态

<filter-panel-multiple-demo></filter-panel-multiple-demo>

```vue
<template>
  <div>
    <van-button @click="showFilterPanel = !showFilterPanel" type="info">点击打开筛选面板</van-button>
    <m-filter-panel ref="filterPanel" :show="showFilterPanel" :list="list" :title="title" @sure="sureFilter" multiple />
  </div>
</template>

<script>
export default {
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
```

## 展示列数

<filter-panel-column-demo></filter-panel-column-demo>

```vue
<template>
  <div>
    <van-button @click="showFilterPanel = !showFilterPanel" type="info">点击打开筛选面板</van-button>
    <m-filter-panel ref="filterPanel" :show="showFilterPanel" :list="list" :title="title" @sure="sureFilter" :column="2" />
  </div>
</template>

<script>
export default {
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
```

### 属性

| 参数     | 说明         | 类型    | 默认值 |
| :------- | :----------- | :------ | :----- |
| list     | 列表展示数据 | Array   | []     |
| title    | 标题         | String  | ''     |
| multiple | 是否支持多选 | Boolean | false  |
| column   | 展示列数     | Number  | 3      |
| show     | 是否展示     | Boolean | false  |

### 事件

| 事件名 | 说明               | 参数                      |
| :----- | :----------------- | :------------------------ |
| sure   | 确定已选择的数据项 | { count, list, selected } |
