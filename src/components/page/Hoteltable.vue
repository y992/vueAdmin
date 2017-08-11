<template>
    <el-row class="warp">
        <!--产品维护页-->
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>旅游产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>酒店系统管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <!--查询区域-->
        <el-col :span="24" class="search_content" style="margin-top: 20px">
            <el-form class="search_list">
                <el-form-item >
                    <el-input type="text" placeholder="产品ID" style="width: 180px"></el-input>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary" @click="showAddDialog" style="margin: 20px 5px">+ 新增产品</el-button>

                </el-form-item>
            </el-form>
            </el-form>

        </el-col>
        <!--新增按钮-->
        <el-col :span="24" class="add_btn" style="width: 100%;height: 80px;">
            <el-button :plain="true" type="success" style="float: left;margin: 20px 0">批量删除</el-button>

            <!--<el-button type="primary" @click="showAddDialog" style="margin: 20px 5px">+ 新增产品</el-button>-->

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
                label="酒店编号"
                width="120">
                <template scope="scope">{{ scope.row.date }}</template>
            </el-table-column>

            <el-table-column
                prop="name"
                label="酒店名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="Rooms_name"
                label="房型"
                width="120">
            </el-table-column>
            <el-table-column
                prop="Rooms_description"
                label="描述"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="Rooms_price"
                label="价格"
                width="120">
            </el-table-column>
            <el-table-column
                prop="Contact_person"
                label="联系人"
                width="120">
            </el-table-column>
            <el-table-column
                prop="telephone"
                label="联系电话"
                width="160">
            </el-table-column>
            <el-table-column
                prop="Review"
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
        /*height: 80px;*/
    }
    .warp-main{
        width: 100%;
        height: 160px;
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
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
                    online:'已上线'
                }, {
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
                    online:'已上线'
                }, {
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
                    online:'已上线'
                },{
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
                    online:'已上线'
                }, {
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
                    online:'已上线'
                }, {
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
                    online:'已上线'
                }, {
                    name:'珠海旭日湾巢酒店',
                    telephone:'18511475592',
                    date: '201611',
                    Rooms_name: '森林主题房',
                    Rooms_description: '森林主题风格，有吊床，一张圆床2米，该客房有春夏秋冬四个场景，随机选择入住',
                    Rooms_price: '588/晚',
                    Contact_person:'王一',
                    Review:'已审核',
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
