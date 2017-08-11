<template>
<div>
    <el-table
        :data="tableData"
        border
        style="width: 50%;text-align: center;margin: 0 auto">
        <el-table-column
            prop="type"
            label="货币类型"
            width="180">
        </el-table-column>
        <el-table-column
            prop="formula"
            label="兑换公式"
            width="220">
        </el-table-column>
        <el-table-column
            prop="date"
            label="更新时间">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    formula: '1人民币 = 0.1610美元',
                    type: 'RMB'
                }, {
                    date: '2016-03-02',
                    formula: '1欧元 = 1.821美元',
                    type: 'EUR'
                }, {
                    date: '2016-05-02',
                    formula: '1澳元 = 0.7963美元',
                    type: 'MOP'
                }, {
                    date: '2016-05-02',
                    formula: '1新台币 = 0.03309美元',
                    type: 'TWD'
                }]
            }
        }
    }
</script>
