<template>

    <el-row class="pormenor">
        <!--产品详情页-->
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>会员管理</el-breadcrumb-item>
                <el-breadcrumb-item>会员交易记录</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="订单编号" style="width: 180px"></el-input>
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
                label="订单编号"
                width="180">
                <template scope="scope">{{ scope.row.OrderNumber }}</template>
            </el-table-column>
            <el-table-column
                prop="OrderName"
                label="订单名称"
                show-overflow-tooltip>
            </el-table-column>

            <el-table-column
                prop="telephone"
                label="联系电话"
                width="220">
            </el-table-column>

            <el-table-column
                prop="sum"
                label="交易金额"
                width="180">
            </el-table-column>
            <el-table-column
                prop="tradingStatus"
                label="交易状态"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Date"
                label="交易时间"
                width="180">
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
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
                }, {
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
                }, {
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
                }, {
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
                }, {
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
                }, {
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
                }, {
                    OrderNumber: '2016221233',
                    name:'王依依',
                    OrderName: '千岛湖3日自由行',
                    tradingStatus: '成功',
                    telephone: '18277483385',
                    Date:'2016-12-23 ',
                    sum:'3285',
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
