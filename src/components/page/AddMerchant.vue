<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 中介及商户管理</el-breadcrumb-item>
                <el-breadcrumb-item>新增商户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="证件">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="类型">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="bbk" label="商户" value="bbk"></el-option>
                        <el-option key="xtc" label="中介" value="xtc"></el-option>
                        <el-option key="imoo" label="管理员" value="imoo"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>


                <el-form-item label="附言">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center;margin-top: 30px">
                    <el-button type="primary" @click="onSubmit">+ 新增</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>
