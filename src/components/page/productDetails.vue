<template>

    <el-row class="pormenor">
        <!--产品详情页-->
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>产品详情</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="产品ID" style="width: 160px"></el-input>
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
                label="编号"
                width="120">
                <template scope="scope">{{ scope.row.nameID1 }}</template>
            </el-table-column>
            <el-table-column
                prop="nameID2"
                label="产品ID"
                width="120">
            </el-table-column>

            <el-table-column
                prop="name2"
                label="产品名称"
                width="320">
            </el-table-column>
            <el-table-column
                prop="type"
                label="产品描述"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格"
                width="120">
            </el-table-column>
            <el-table-column
                prop="linkman"
                label="联系人"
                width="120">
            </el-table-column>
            <el-table-column
                prop="check"
                label="审核状态"
                width="120">
            </el-table-column>
            <el-table-column
                prop="online"
                label="上线状态"
                width="120">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">查看</el-button>
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
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
                }, {
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
                }, {
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
                }, {
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
                }, {
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
                }, {
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
                }, {
                    nameID1: '201622',
                    nameID2: '27638',
                    price: '3088',
                    name2: '千岛湖3日自由行(5钻)',
                    type:'避暑圣地,成人减30,巴士往返+绿城度假酒店 ',
                    linkman:'小一',
                    check:'未审核',
                    online:'未上线'
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
