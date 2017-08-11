<template>

    <el-row class="pormenor">
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>中介及商户管理</el-breadcrumb-item>
                <el-breadcrumb-item>中介资料管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="姓名" style="width: 180px"></el-input>
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
                width="160">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                label="电话"
                width="280">
                <template scope="scope">{{ scope.row.telephone }}</template>
            </el-table-column>

            <el-table-column
                prop="Email"
                label="邮箱"
                width="260">
            </el-table-column>
            <el-table-column
                prop="DocumentNumber"
                label="证件号码"
                width="220">
            </el-table-column>
            <el-table-column
                prop="area"
                label="区域"
                width="260">
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
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',
                }, {
                    date: '2016-12',
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',
                }, {
                    date: '2016-12',
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',
                }, {
                    date: '2016-12',
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',
                }, {
                    date: '2016-12',
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',
                }, {
                    date: '2016-12',
                    name:'林晓',
                    telephone:'13255486987',
                    DocumentNumber: '452122546658232268',
                    Email:'788859021@168.com',
                    area:'北京',
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
