<template>

    <el-row class="pormenor">
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>提现及结算</el-breadcrumb-item>
                <el-breadcrumb-item>提现请求管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="申请名称" style="width: 180px"></el-input>
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
            style="width: 100%;margin-top:10px"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="120">
            </el-table-column>
            <el-table-column
                label="申请编号"
                width="180">
                <template scope="scope">{{ scope.row.ApplicationNumber }}</template>
            </el-table-column>
            <el-table-column
                prop="ApplicationDate"
                label="申请时间"
                show-overflow-tooltip>
            </el-table-column>

            <el-table-column
                prop="bank"
                label="到账银行"
                width="160">
            </el-table-column>
            <el-table-column
                prop="BankAccount"
                label="银行账号"
                width="220">
            </el-table-column>
            <el-table-column
                prop="sum"
                label="提现金额"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Fee"
                label="手续费"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Status"
                label="申请状态"
                width="120">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">详情</el-button>
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
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    ApplicationNumber: '2016221233',
                    name:'王云霄',
                    bank:'建设银行',
                    BankAccount: '45458238825144525',
                    tradingStatus: '成功',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
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
