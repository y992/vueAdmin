<template>

    <el-row class="pormenor">
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>中介及商户管理</el-breadcrumb-item>
                <el-breadcrumb-item>中介销售记录</el-breadcrumb-item>
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
            :data="tableData6"
            border
            height="200"
            :summary-method="getSummaries"
            show-summary
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="id"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="amount1"
                label="旅游产品销售额（元）">
            </el-table-column>
            <el-table-column
                prop="amount2"
                label="酒店产品销售额（元）">
            </el-table-column>
            <el-table-column
                prop="amount3"
                label="票务产品销售额（元）">
            </el-table-column>
            <el-table-column
                prop="amount4"
                label="销售总额（元）">
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
                tableData6: [{
                    id: '2017-11',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount4:'1122',
                    amount3: 10

                }, {
                    id: '2017-1',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount4:'1158',
                    amount3: 12
                }, {
                    id: '2017-10',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount4:'1122',
                    amount3: 9
                }, {
                    id: '2017-5',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount4:'1122',
                    amount3: 17
                }, {
                    id: '2017-2',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount4:'1122',
                    amount3: 15
                }]
            };
        },
        methods: {
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总价';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += ' 元';
                    } else {
                        sums[index] = 'N/A';
                    }
                });

                return sums;
            }
        }
    };
</script>
