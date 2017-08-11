<template>

    <el-row class="pormenor">
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>系统管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户权限</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="用户名" style="width: 180px"></el-input>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
            </el-form>

        </el-col>

        <!--列表-->
        <el-table
            ref="multipleTable"
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width: 100%;"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="date"
                label="注册时间"
                width="180">
            </el-table-column>

            <el-table-column
                prop="username"
                label="用户名"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="name"
                label="真实姓名"
                width="220">
            </el-table-column>
            <el-table-column
                prop="telephone"
                label="电话"
                width="220">
            </el-table-column>
            <el-table-column
                prop="Email"
                label="邮箱"
                width="220">
            </el-table-column>
            <el-table-column
                label="最后登录"
                width="220">
                <template scope="scope">{{ scope.row.RecentLogIn}}</template>
            </el-table-column>
            <el-table-column
                prop="status"
                label="状态"
                width="160">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <!--翻页-->
        <div class="pagination">
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>

    </el-row>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
                tableData3: [{
                    date: '2016-12',
                    name:'花生壳',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',

                }, {
                    date: '2016-12',
                    name:'土豆',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',

                }, {
                    date: '2016-12',
                    name:'西瓜',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',

                }, {
                    date: '2016-12',
                    name:'凉皮',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',

                }, {
                    date: '2016-12',
                    name:'好多鱼',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',
                }, {
                    date: '2016-12',
                    name:'真美味',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',

                }, {
                    date: '2016-12',
                    name:'凉瓜',
                    username:'admin',
                    telephone: '18845871595',
                    Email:'458758258@163.com',
                    RecentLogIn:'2017-8-3',
                    status:'启用',

                }],
                multipleSelection: []
            }
        },

        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>
