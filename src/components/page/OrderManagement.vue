<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-upload"></i>订单管理及统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="allActive">
            <el-row class="head">
                <el-col :span="18" style="padding:20px 0;background: #33CCCC;">
                    <el-col :span="8">
                        {{ Business_totalActiveNum }}<br>
                        <span>商家总数</span>
                    </el-col>
                    <el-col :span="8">
                        {{ Member_totalActiveNum }}<br>
                        <span>中介总数</span>
                    </el-col>
                    <el-col :span="8" style="border: none;">
                        {{ auditNum }}<br>
                        <span>订单总数</span>
                    </el-col>
                </el-col>

                <el-col :span="5" :offset="1" style="background:  #3091F2;padding:40px 0;">
                    {{ examineMember }}<br>
                    <span>查看会员</span>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'allActive',
        data: function(){
            return {
                Business_totalActiveNum:40,
                Member_totalActiveNum:13,
                auditNum: 15,
            }
        }
    }
</script>

<style>
    .ms-doc{
        width:100%;
        max-width: 980px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }
    .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    }
    .allActive > .head > .el-col > .el-col {
        padding: 20px 0;
        border-right: solid 1px #fff;
    }
    .allActive .head {
        text-align: center;
        color: #fff;
        font-size: 30px;
        margin-bottom: 50px;
    }
    .allActive .head span {
        font-size: 16px;
    }
</style>
