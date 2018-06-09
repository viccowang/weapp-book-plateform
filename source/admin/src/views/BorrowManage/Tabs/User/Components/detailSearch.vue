<template>
    <el-form :model="searchForm" ref="searchForm" :rules="searchRule" label-width="80px" size="mini">
       <el-row>
           <el-col :span="5">
                <el-form-item label="书籍名称" prop="bookName">
                    <el-input v-model="searchForm.bookName"></el-input>
                </el-form-item>
           </el-col>
           <el-col :span="6">
                <el-form-item label="ISBN" prop="bookIsbn">
                    <el-input v-model="searchForm.bookIsbn"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="8">
                <el-form-item label="借阅日期" prop="bookBorrowDate">
                    <el-date-picker
                      style="width:98%"
                      v-model="bookBorrowDate"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      @change="handleSelectedDate">
                    </el-date-picker>
                </el-form-item>
           </el-col>
           <el-col :span="5">
                <el-form-item label="是否归还" prop="isReturn">
                  <el-switch v-model="searchForm.isReturn"></el-switch>
                </el-form-item>
           </el-col>
       </el-row>
       <el-row>
            <el-col :span="5">
                <el-form-item label="借阅天数" prop="bookBorrowNumberGt">
                    <el-select v-model="searchForm.bookBorrowNumberGt" placeholder="请选择">
                        <el-option label="所有借阅" value="0"></el-option>
                        <el-option label="超过半月" value="15"></el-option>
                        <el-option label="超过一个月" value="30"></el-option>
                        <el-option label="超过三个月" value="90"></el-option>
                        <el-option label="超过半年" value="183"></el-option>
                        <el-option label="超过一年" value="365"></el-option>
                    </el-select>
                </el-form-item>
           </el-col>
           <el-col :span="4" :offset="15">
               <div class="ctrl-buttons">
                <el-button type="primary" size="mini" @click="onSubmit('searchForm')">查询</el-button>
                <el-button size="mini" @click="resetForm('searchForm')">重置</el-button>
               </div>
            </el-col>
       </el-row>

    </el-form>
</template>

<script>
import moment from 'moment'
// custom Validator
import Validator from '@/utils/extendValidate'

export default {
  name: 'UserBorrowDetailSearch',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      bookBorrowDate: [],
      searchForm: {
        userId: '',
        bookIsbn: '',
        bookBorrowStartDate: '',
        bookBorrowEndDate: '',
        isReturn: '0',
        bookBorrowNumberGt: '0'
      },
      searchRule: {
        bookIsbn: [
          { validator: Validator.isbn, trigger: 'blur' }
        ]
      }
    }
  },
  beforeMount () {
    this.searchForm.userId = this.user.userId
  },
  mounted () {
    this.search()
  },
  methods: {
    search () {
      this.$emit('search', this.searchForm)
      console.log(this.searchForm)
    },
    // 每当选择日期时格式化为查询条件
    handleSelectedDate () {
      this.searchForm.bookBorrowStartDate = moment(this.bookBorrowDate[0]).format('YYYY-MM-DD HH:mm:ss')
      this.searchForm.bookBorrowEndDate = moment(this.bookBorrowDate[1]).format('YYYY-MM-DD HH:mm:ss')
    },
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        this.search()
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
