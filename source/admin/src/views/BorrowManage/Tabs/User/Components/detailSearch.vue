<template>
    <el-form :model="searchForm" ref="searchForm" :rules="searchRule" label-width="80px" size="mini">
       <el-row>
           <el-col :span="5">
                <el-form-item label="书籍名称" prop="userName">
                    <el-input v-model="searchForm.userName"></el-input>
                </el-form-item>
           </el-col>
           <el-col :span="5">
                <el-form-item label="ISBN" prop="userName">
                    <el-input v-model="searchForm.userName"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="5">
                <el-form-item label="借阅日期" prop="company">
                    <el-input v-model="searchForm.company"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="5">
                <el-form-item label="是否归还" prop="company">
                    <el-input v-model="searchForm.company"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="5">
                <el-form-item label="借阅天数" prop="sex">
                    <el-select v-model="searchForm.sex" placeholder="请选择">
                        <el-option label="男" value="0">男</el-option>
                        <el-option label="女" value="1">女</el-option>
                    </el-select>
                </el-form-item>
           </el-col>
           <el-col :span="4">
               <div class="ctrl-buttons">
                <el-button type="primary" size="mini" @click="onSubmit('searchForm')">查询</el-button>
                <el-button size="mini" @click="resetForm('searchForm')">重置</el-button>
               </div>
            </el-col>
       </el-row>

    </el-form>
</template>

<script>
export default {
  name: 'UserBorrowDetailSearch',
  data () {
    return {
      searchForm: {
        userName: '',
        company: '',
        userNo: '',
        sex: '',
        startDate: '',
        endDate: ''
      },
      searchRule: {},
      dateBefore: {
        disabledDate: (time) => {
          const endDate = this.searchForm.endDate
          return endDate === '' ? false : time.getTime() > endDate
        }
      },
      dateAfter: {
        disabledDate: (time) => {
          const startDate = this.searchForm.startDate
          return time.getTime() < startDate
        }
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
      // submit forms
        // callback
        this.$emit('resetSearch')
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
.ctrl-buttons {
    display: flex;
    justify-content: flex-end;
    padding-bottom:10px;
}
</style>
