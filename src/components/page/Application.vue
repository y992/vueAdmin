<template>

    <el-row class="pormenor">
        <!--产品详情页-->
        <el-col :span="24" class="warp-breadcrum">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>提现及结算</el-breadcrumb-item>
                <el-breadcrumb-item>提现申请</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <div class="form-box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                <el-form-item label="申请名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="选择银行" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择银行">
                        <el-option label="建设银行" value="shanghai"></el-option>
                        <el-option label="中国银行" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="银行账号" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="申请时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="提现金额" prop="delivery">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="即时到账" prop="delivery">
                    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
                </el-form-item>

                <el-form-item label="说明" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
                    <el-button @click="resetForm('ruleForm')">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-row>
</template>
<style>
    .demo-ruleForm{
    margin-top: 30px;
}
    .form-box{

    }
</style>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入申请名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填申请说明', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
