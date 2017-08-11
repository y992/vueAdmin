<template>

    <el-row class="pormenor">
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>MLM平台分成管理</el-breadcrumb-item>
                <el-breadcrumb-item>销售分成及奖金计算记录</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="日期" style="width: 180px"></el-input>
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
            style="width: 80%;margin-top:10px"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="date"
                label="销售日期"
                width="180">
            </el-table-column>
            <el-table-column
                label="等级"
                width="120">
                <template scope="scope">{{ scope.row.name1 }}</template>
            </el-table-column>
            <el-table-column
                prop="name2"
                label="姓名"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="name4"
                label="产品名称"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="name3"
                label="销售总额"
                width="220">
            </el-table-column>
            <el-table-column
                prop="total"
                label="奖金总额"
                width="220">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="160">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">详情</el-button>
                    <!--<el-button type="text" size="small">删除</el-button>-->
                </template>
            </el-table-column>

        </el-table>
        <!--翻页-->
        <div class="pagination" >
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                style="margin-right: 300px"
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
                    name1:'A级',
                    name2:'花生壳',
                    name3: '56713855.5',
                    name4:'小龙虾',
                    total: '4845435282.3',
                    Fee: '10.5',
                    ApplicationDate:'2016-12-23 ',
                    sum:'3285',
                    Status:'成功',
                }, {
                    date: '2016-1',
                    name1:'A级',
                    name2:'西瓜',
                    name3: '56713855.5',
                    name4:'好多鱼',
                    total: '4845435282.3',
                }, {
                    date: '2016-2',
                    name1:'C级',
                    name2:'哈密瓜',
                    name3: '56713855.5',
                    name4:'阿拉斯加蟹',
                    total: '4845435282.3',
                }, {
                    date: '2016-3',
                    name1:'C级',
                    name2:'土豆',
                    name3: '12114551',
                    name4:'蟹皇鸡',
                    total: '4845435282.3',
                }, {
                    date: '2016-5',
                    name1:'B级',
                    name2:'奇异果',
                    name3: '56713855.5',
                    name4:'花甲',
                    total: '4845435282.3',
                }, {
                    date: '2016-16',
                    name1:'A级',
                    name2:'百香果',
                    name3: '56713855.5',
                    name4:'椒盐虾',
                    total: '4845435282.3',
                }, {
                    date: '2016-11',
                    name1:'B级',
                    name2:'雪梨',
                    name4:'哈根达斯',
                    name3: '56713855.5',
                    total: '4845435282.3',
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
