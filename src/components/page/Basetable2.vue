<template>
    <section class="table">
        <!--头部-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 产品管理</el-breadcrumb-item>
                <el-breadcrumb-item>产品详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <!--工具条-->
            <el-form :inline="true" :model="filters" class="demo-form-inline">

                <el-form-item >
                    <el-input v-model="filters.name" placeholder="商家ID"></el-input>
                </el-form-item>

                    <el-button type="primary" @click="getInfo(filters.name, tableData)">查询</el-button>

                    <el-button type="primary" @click="showAddDialog">新增</el-button>
            </el-form>

        </div>
        <div>
            <el-table
                :data="tableData"
                v-loading="loading"
                style="width: 100%">
                <!--复选框-->
                <el-table-column type="selection" width="55"></el-table-column>

                <el-table-column type="expand">
                    <!--折叠内容-->
                    <template scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商家名称">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                            <el-form-item label="所属区域">
                                <span>{{ props.row.shop }}</span>
                            </el-form-item>
                            <el-form-item label="商品 ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="商家 ID">
                                <span>{{ props.row.shopId }}</span>
                            </el-form-item>
                            <el-form-item label="商家分类">
                                <span>{{ props.row.category }}</span>
                            </el-form-item>
                            <el-form-item label="商家地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="商家描述">
                                <span>{{ props.row.desc }}</span>
                            </el-form-item>

                        </el-form>

                    </template>
                </el-table-column>
                    <!--列表-->
                <el-table-column
                    label="商品 ID"
                    prop="id">
                </el-table-column>
                <el-table-column
                    label="商品名称"
                    prop="commodity_name">
                </el-table-column>
                <el-table-column
                    label="描述"
                    prop="desc">
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template scope="scope">
                        <el-button size="small"
                                   @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger"
                                   @click="handleDelete(scope.$index, tableData)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--<el-col :span="24" class="toolbar">-->
            <!--<el-button type="danger" :disabled="" @click="batchRemove">批量删除</el-button>-->
            <!--<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">-->
            <!--</el-pagination>-->
        <!--</el-col>-->
        <!--分页-->
        <div class="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="total, sizes,prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>

    </section>
</template>
<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .toolbar{
        margin-top: 10px;
    }
</style>
<script>
    export default {

        methods: {

            //编辑
            handleEdit(index, rows) {
                console.log(index, rows);
            },
            //新增
            showAddDialog() {
                this.items.push({
                    value:null
                })
            },

            //删除
            handleDelete(index, rows) {
                rows.splice(index, 1);
            },
           //查询
            getInfo: function(user, rows){

                console.log(user);
                for ( var i = 0; i<rows.length; i++){

                    //改tableDatas的数据；
                    if (user == rows[i].id) {
                        //在这里不能获取到tabledata。所以只能通过函数调用

                        console.log(this.data.tableData.length);
                        console.log (rows[i].id);
                    }

                }
            }
        },
        data() {

            return {
                filters: {
                    name: '',
                    loading: false,
                    users: [],
                    items: []
                },

                tableData: [{
                    id: '12987122',
                    name: '	山西友谊国际旅行社有限公司',
                    category: '旅行',
                    desc: '泰国5天自由行',
                    address: '上海市普陀区真北路',
                    shop: '国内',
                    shopId: '10333',
                    commodity_name:'泰国自由行'
                }, {
                    id: '12987122',
                    name: '	山西友谊国际旅行社有限公司',
                    category: '旅行',
                    desc: '泰国5天自由行',
                    address: '上海市普陀区真北路',
                    shop: '国内',
                    shopId: '10333',
                    commodity_name:'泰国自由行'
                }, {
                    id: '12987122',
                    name: '	山西友谊国际旅行社有限公司',
                    category: '旅行',
                    desc: '泰国5天自由行',
                    address: '上海市普陀区真北路',
                    shop: '国内',
                    shopId: '10333',
                    commodity_name:'泰国自由行'
                }, {
                    id: '12987122',
                    name: '	山西友谊国际旅行社有限公司',
                    category: '旅行',
                    desc: '泰国5天自由行',
                    address: '上海市普陀区真北路',
                    shop: '国内',
                    shopId: '10333',
                    commodity_name:'泰国自由行'
                }],
            }
        }
    }
</script>
