<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>

                        <template v-for="subItem in item.subs">
                            <template v-if="subItem.third_subs">
                                <el-submenu :index="subItem.index">
                                    <span slot="title">{{ subItem.title }}</span>
                                    <el-menu-item v-for="(thirdItem, j) in subItem.third_subs" :key="j" :index="thirdItem.index">{{ thirdItem.title}}

                                    </el-menu-item>
                                </el-submenu>
                            </template>
                            <template v-else>
                                <el-menu-item :index="subItem.index">
                                    <i :class="subItem.icon"/>{{ subItem.title}}
                                </el-menu-item >
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-upload',
                        index: 'readme',
                        title: '首页'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '0',
                        title: 'MLM平台分成管理',
                        subs: [
                            {
                                index: 'agent',
                                title: '中介及销售链管理'
                            },
                            {
                                index: 'bonus',
                                title: '销售分成及奖金计算记录'
                            },

                        ]
                    },

                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '中介及商户管理',
                        subs: [
                            {
                                index: '',
                                title: '1.中介资料管理',
                               third_subs:[
                                {
                                    index: 'AddAgent',
                                    title: '1.1.1新增中介管理',
                                },
                                {
                                    index: 'AgentMes',
                                    title: '1.1.2中介资料管理',
                                }

                               ]
                            },


                            {
                                index: 'AddMerchant',
                                title: '1.2.1新增商户管理',
                            },
                            {
                                index: 'MerchantMes',
                                title: '1.2.2商户资料管理',
                            },
                            {
                                index: '',
                                title: '2.中介及商户销售记录'
                            },

                            {
                                index: 'AgentSell',
                                title: '2.1中介销售记录'
                            },
                            {
                                index: 'MerchantSell',
                                title: '2.2商户销售记录'
                            },
                            {
                                index: '',
                                title: '3.中介及商户交易记录'
                            },
                            {
                                index: 'AgentTransaction',
                                title: '3.1中介交易记录'
                            },
                            {
                                index: 'MerchantTransaction',
                                title: '3.2商户交易记录'
                            },

                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '旅游产品管理',
                        subs: [
                            {
                                index: 'Preservetable',
                                title: '1.1票务产品管理',
                            },
                            {
                                index: 'Hoteltable',
                                title: '1.2酒店系统管理',
                            },
                            {
                                index: 'productDetails',
                                title: '1.3旅游产品管理',
                            },

//                            {
//                                index: 'Preservetable',
//                                title: '产品维护',
//                            },
                            {
                                index: 'Entryform',
                                title: '1.4旅游产品录入'
                            },
//                            {
//                                index: 'productDetails',
//                                title: '产品详情'
//                            },
                            {
                                index: 'basetable2',
                                title: '1.旅游产品目录'
                            },
                            {
                                index: 'CancellationPolicy',
                                title: '2.取消及退款政策'
                            },


                        ]
                    },
                    {
                        icon: 'el-icon-upload',
                        index: 'OrderManagement',
//                        index:'BaseCharts',
                        title: '订单管理及统计'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '5',
                        title: '提现及结算',
                        subs: [
                            {
                                index: 'Application',
                                title: '提现申请表格'
                            },
                            {
                                index: 'applicationStatus',
                                title: '申请状态查询'
                            },
                            {
                                index: 'Request',
                                title: '提现请求管理'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-upload',
                        index: 'CurrencyConversion',
                        title: '货币转换'
                    },

                    {
                        icon: 'el-icon-date',
                        index: '6',
                        title: '会员管理',
                        subs: [
                            {
                                index: 'AddMember',
                                title: '新增会员管理'
                            },
                            {
                                index: 'memberInformation',
                                title: '会员资料管理'
                            },
                            {
                                index: 'memberTransaction',
                                title: '会员交易记录'
                            },


                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: 'setting',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'statistics',
                                title: '系统统计及报告'
                            },
                            {
                                index: 'userPurview',
                                title: '用户权限'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
