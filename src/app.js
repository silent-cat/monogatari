import Vue from 'vue'
// 全局引入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入自己的组件
import FilterPanel from './FilterPanel'

// 注册vant组件
Vue.use(Vant)
// 注册自己的组件
Vue.component('m-filter-panel', FilterPanel)

new Vue({
	el: '#app',
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
			],
		}
	},
	methods: {
		sureFilter({count,list,selected}) {
			this.showFilterPanel = false
			console.log(count) // 选中的分类数量
			console.log(list) // 获取更新后的分类
			console.log(selected) // 被选中的分类
		},
	},
})
