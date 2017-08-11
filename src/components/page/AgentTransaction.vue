<template>

    <el-row class="pormenor">
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>中介及商户管理</el-breadcrumb-item>
                <el-breadcrumb-item>中介交易记录</el-breadcrumb-item>
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
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="productName"
                label="产品名称"
                width="220">
            </el-table-column>
            <el-table-column
                prop="productID"
                label="产品ID"
                width="220">
            </el-table-column>
            <el-table-column
                prop="type"
                label="产品类型"
                width="160">
            </el-table-column>
            <el-table-column
                label="销售数量"
                width="160">
                <template scope="scope">{{ scope.row.amount}}</template>
            </el-table-column>
            <el-table-column
                prop="sum"
                label="销售金额"
                width="160">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">详情</el-button>
                    <!--<el-button type="text" size="small">删除</el-button>-->
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
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

                }, {
                    date: '2016-12',
                    name:'林晓',
                    productName:'泰国普吉岛7日自由行',
                    productID: '12584122',
                    amount:'55',
                    sum:'155557元',
                    type:'酒店',

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
