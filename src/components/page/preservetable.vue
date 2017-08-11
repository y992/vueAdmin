<template>
    <el-row class="warp">
        <!--产品维护页-->
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>旅游产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>票务管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <!--查询区域-->
        <el-col :span="24" class="warp-main">
            <el-form class="search_list ">
                <!--<el-form-item label="商家产品名" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="xx产品名" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->


                <el-form-item label="产品类型" class="search_title">
                    <el-input type="text"style="width: 180px;"></el-input>
                </el-form-item>
                <el-form-item label="产品ID" class="search_title ">
                    <el-input type="text"style="width: 180px;"></el-input>
                </el-form-item>
                <el-form-item label="产品名称" class="search_title">
                    <el-input type="text"style="width: 180px;"></el-input>
                </el-form-item>
                <!--<el-form-item label="上线时间" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->

                <el-form-item label="审核状态" class="search_title">
                    <el-input type="text"style="width: 180px;"></el-input>
                </el-form-item>
                <!--<el-form-item label="在线状态" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->

                <!--<el-form-item label="产品区域" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="国家" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="所在城市" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="联系人" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="出发地" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="目的地" class="search_title">-->
                    <!--<el-input type="text"style="width: 180px;"></el-input>-->
                <!--</el-form-item>-->
                <el-col :span="24" class="search_btn">
                    <!--<el-button type="primary" @click="showAddDialog" style="margin: 20px">查询</el-button>-->
                </el-col>
            </el-form>

        </el-col>
        <!--新增按钮-->
        <el-col :span="24" class="add_btn" style="width: 100%;height: 80px;">
            <el-button :plain="true" type="success" style="float: left;margin: 20px 0">批量删除</el-button>

            <el-button type="primary" @click="showAddDialog" style="margin: 20px 5px">+ 新增产品</el-button>

            <a href="#" style="text-decoration: underline;float: right;margin: 20px 0 ;color: #00d1b2">导出EXL</a>

        </el-col>
        <!--列表-->
        <el-table
            ref="multipleTable"
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="目的地"
                width="120">
                <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                prop="Rooms_name"
                label="航班"
                width="220">
            </el-table-column>
            <el-table-column
                prop="price"
                label="票价"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="date"
                label="起飞时间"
                width="220">
            </el-table-column>
            <el-table-column
                prop="date1"
                label="落地时间"
                width="220">
            </el-table-column>

            <el-table-column
                prop="type"
                label="航程类型"
                width="120">
            </el-table-column>
            <el-table-column
                prop="Contact_person"
                label="联系人"
                width="120">
            </el-table-column>
            <el-table-column
                prop="online"
                label="电话"
                width="120">
            </el-table-column>

            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template scope="scope">
                    <!--<el-button @click="handleClick" type="text" size="small">编辑</el-button>-->
                    <el-button type="text" size="small">详情</el-button>
                </template>
            </el-table-column>

        </el-table>
        <!--翻页-->
        <div class="pagination">
            <!--<el-button :plain="true" type="success" style="float: left">批量删除</el-button>-->
            <el-pagination
                @current-change ="handleCurrentChange"
                layout="prev, pager, next"
                style="float: right"
                :total="1000">
            </el-pagination>
        </div>
    </el-row>
</template>
<style>
    .search_title{
    /*border: 1px solid #00ff00;*/
    float: right;
    width: 280px;
    margin: 10px 20px

}
    .search_btn{
        height: 80px;
        /*border:1px solid #CCCC;*/
        text-align: center;
        margin-top: 0px
    }
    .search_list{
        width: 90%;
        /*border:1px solid #f9c855;*/
        height: 160px;
    }
    .warp-main{
        width: 100%;
        height: 60px;
        /*border: 1px solid #33CCCC;*/
        margin-top: 20px;
        text-align: right;
    }
</style>
<script>
    export default {
        data() {
            return {
                tableData3: [{
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
                }, {
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
                }, {
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
                },{
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
                }, {
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
                }, {
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
                }, {
                    date: '深圳',
                    Rooms_name: '浦东',
                    price: '1088/成人',
                    date: '2016-12-12',
                    date1: '2016-12-12',
                    Contact_person:'王一',
                    type:'单程',
                    online:'已上线'
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
