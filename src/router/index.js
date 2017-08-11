import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable1',
                    component: resolve => require(['../components/page/BaseTable1.vue'], resolve)
                },
                {
                    path: '/basetable2',
                    component: resolve => require(['../components/page/Basetable2.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/preservetable',
                    component: resolve => require(['../components/page/preservetable.vue'], resolve)  // 产品维护
                },
                {
                    path: '/Entryform',
                    component: resolve => require(['../components/page/Entryform.vue'], resolve)  // 产品录入
                },
                {
                    path: '/productDetails',
                    component: resolve => require(['../components/page/productDetails.vue'], resolve)  // 产品详情
                },
                {
                    path: '/handleDiary',
                    component: resolve => require(['../components/page/handleDiary.vue'], resolve)  // 产品详情
                },

                // {
                //     path: '/vueeditor',
                //     component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                // },
                // {
                //     path: '/markdown',
                //     component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                // },
                // {
                //     path: '/upload',
                //     component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                // },
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                },
                {
                    path: '/AddAgent',
                    component: resolve => require(['../components/page/AddAgent.vue'], resolve)   // 新增中介管理
                },
                {
                    path: '/AgentMes',
                    component: resolve => require(['../components/page/AgentMes.vue'], resolve)   // 中介资料管理
                },
                {
                    path: '/AddMerchant',
                    component: resolve => require(['../components/page/AddMerchant.vue'], resolve)   // 新增商户管理
                },
                {
                    path: '/MerchantMes',
                    component: resolve => require(['../components/page/MerchantMes.vue'], resolve)   // 商户资料管理
                },
                {
                    path: '/MerchantTransaction',
                    component: resolve => require(['../components/page/MerchantTransaction.vue'], resolve)   // 商户交易记录
                },
                {
                    path: '/MerchantSell',
                    component: resolve => require(['../components/page/MerchantSell.vue'], resolve)   // 商户销售记录
                },
                {
                    path: '/AgentTransaction',
                    component: resolve => require(['../components/page/AgentTransaction.vue'], resolve)   // 中介交易记录
                },
                {
                    path: '/AgentSell',
                    component: resolve => require(['../components/page/AgentSell.vue'], resolve)   // 中介销售记录
                },
                {
                    path: '/Hoteltable',
                    component: resolve => require(['../components/page/Hoteltable.vue'], resolve)   // 酒店产品管理
                },
                {
                    path: '/agent',
                    component: resolve => require(['../components/page/agent.vue'], resolve)   // 中介及销售链管理
                },
                {
                    path: '/bonus',
                    component: resolve => require(['../components/page/bonus.vue'], resolve)   // 分成及奖金计算
                },
                {
                    path: '/Application',
                    component: resolve => require(['../components/page/Application.vue'], resolve)   // 提现申请信息
                },
                {
                    path: '/Request',
                    component: resolve => require(['../components/page/Request.vue'], resolve)   // 提现请求管理
                },
                {
                    path: '/applicationStatus',
                    component: resolve => require(['../components/page/applicationStatus.vue'], resolve)   // 申请状态查询
                },
                {
                    path: '/statistics',
                    component: resolve => require(['../components/page/statistics.vue'], resolve)    // 系统统计及报告
                },
                {
                    path: '/OrderManagement',
                    component: resolve => require(['../components/page/OrderManagement.vue'], resolve)   // 订单管理及统计
                },
                // {
                //     path: '/ BaseCharts',
                //     component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // 订单管理及统计  柱形图
                // },
                {
                    path: '/userPurview',
                    component: resolve => require(['../components/page/userPurview.vue'], resolve)    // 用户权限
                },
                {
                    path: '/memberInformation',
                    component: resolve => require(['../components/page/memberInformation.vue'], resolve)    // 会员资料及状态管理
                },
                {
                    path: '/memberTransaction',
                    component: resolve => require(['../components/page/memberTransaction.vue'], resolve)    // 会员交易
                },
                {
                    path: '/AddMember',
                    component: resolve => require(['../components/page/AddMember.vue'], resolve)    // 新增会员
                },
                {
                    path: '/CancellationPolicy',
                    component: resolve => require(['../components/page/CancellationPolicy.vue'], resolve)    // 取消及退款政策
                },
                {
                    path: '/CurrencyConversion',
                    component: resolve => require(['../components/page/CurrencyConversion.vue'], resolve)    // 货币转换
                },
                {
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                },

                {
                    path: '/personal',
                    component: resolve => require(['../components/page/Personal.vue'], resolve)   // 个人信息组件
                },

                {
                    path: '/password',
                        component: resolve => require(['../components/page/changePassword.vue'], resolve)   //修改密码组件
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        }

    ]
})
