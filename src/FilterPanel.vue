<template>
    <div>
        <van-popup v-model="show" position="top" :close-on-click-overlay="false" class="choose-area">
            <div class="header" v-if="title">{{ title }}</div>
            <div class="main">
                <van-button
                    v-for="(item, index) in list"
                    :key="index"
                    round
                    @click.stop="select(index)"
                    :class="item.ischecked ? 'active' : 'inactive'"
                >
                    {{ item.text }}
                </van-button>
            </div>
            <div class="footer">
                <van-button round @click="reset">重置</van-button>
                <van-button round color="#2E6BE5" @click="sure">确定{{ count>1 ? `(${count})` : '' }}</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
import { Popup, Button } from 'vant';
export default {
    components: {
        [Popup.name]: Popup,
        [Button.name]: Button
    },
    props: {
        // 控制是否展示
        show: {
            type: Boolean,
            default: false
        },
        // 分类选项-ischecked:是否选中 text：文本展示 type：类型（默认传空代表全部类型）
        list: {
            type: Array,
            default: ()=>[]
        },
        // 标题
        title: {
            type: String,
            default: '请选择'
        },
        // 是走支持多选
        multiple: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            count: 1,
            selectList: this.list[0]
        };
    },
    methods: {
        // 单独选择
        select(index) {
            this.count = 0;
            this.selectList = [];
            if (!this.multiple) {
                // 仅支持单选
                this.list.forEach((item) => {
                    item.ischecked = false;
                });
                this.list[index].ischecked = !this.list[index].ischecked;
                this.count = 1
                this.selectList.push(this.list[index])
            } else {
                // 多选——————————————————
                if (0 != index) {
                    this.list[0].ischecked = false;
                    this.list[index].ischecked = !this.list[index].ischecked;
                } else {
                    this.list[0].ischecked = true;
                }
                this.list.forEach((item,index) => {
                    if (this.list[0].ischecked && index!=0) {
                        item.ischecked = false;
                    } else if (item.ischecked) {
                        this.count++;
                        this.selectList.push(item);
                        // 除了全部以外都选中的
                        if(this.count==this.list.length-1){
                            this.reset()
                        }
                    }else if(this.list.slice(1).every(item=>item.ischecked===false)){
                        this.reset()
                    }
                });
            }
        },
        // 重置筛选
        reset() {
            this.list.forEach((item, index) => {
                item.ischecked = false;
            });

            this.list[0].ischecked = true;
            this.count = 1;
            this.selectList = [this.list[0]];

            // let data = {
            //     count: this.count,
            //     list: this.list,
            //     selected: this.selectList
            // };

            // this.$emit('reset', data); //可有可无，主要是为了测试父组件操作子组件的方法
        },
        // 确认筛选——最主要用途
        sure() {
            this.$emit('sure', {
                list: this.list,
                count:this.count,
                selected:this.selectList
            });
        }
    }
};
</script>

<style scoped lang="scss">
.choose-area.van-popup {
    position: fixed;
    padding-top: 24px;
    margin-top: -4px;

    .header {
        margin-left: 20px;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        margin-top: 15px;
        margin-left: 20px;

        .van-button {
            width: calc((100vw - 60px) / 3);
            margin-right: 10px;
            font-size: 12px;
        }

        .van-button:nth-child(n + 4) {
            margin-top: 12px;
            margin-bottom: 22px;
        }
    }

    .footer {
        border-top: 1px solid #dde0e4;
        display: flex;
        padding: 15px 0;
        padding-left: 20px;

        .van-button {
            margin-right: 15px;
            width: calc((100vw - 65px) / 2);
        }

        .van-button:last-child {
            margin-right: 0;
        }
    }

    .active {
        color: #fff;
        background: #2e6be5;
    }

    .inactive {
        color: #2e6be5;
        // background: #2E6BE5;
    }
}
</style>
