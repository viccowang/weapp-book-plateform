<template>
    <el-form :model="searchForm" ref="searchForm" :rules="searchRule" label-width="80px" size="mini">
       <el-row>
           <el-col :span="6">
                <el-form-item label="ISBN" prop="bookIsbn">
                    <el-input v-model="searchForm.bookIsbn"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="6">
                <el-form-item label="书名" prop="bookName">
                    <el-input v-model="searchForm.bookName"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="6">
                <el-form-item label="库存" prop="stockNumberGt">
                    <el-input v-model="searchForm.stockNumberGt"></el-input>
                </el-form-item>
           </el-col>
           <el-col :span="4" :offset="2">
               <div class="ctrl-buttons">
                <el-button type="primary" size="mini" @click="onSubmit('searchForm')">查询</el-button>
                <el-button size="mini" @click="resetForm('searchForm')">重置</el-button>
               </div>
            </el-col>
       </el-row>

    </el-form>
</template>

<script>
// custom Validator
import Validator from '@/utils/extendValidate'

export default {
  name: 'BookListSearch',
  data () {
    return {
      searchForm: {
        bookIsbn: '',
        bookName: '',
        stockNumberGt: ''
      },
      searchRule: {
        bookIsbn: [
          { validator: Validator.isbn, trigger: 'blur' }
        ],
        stockNumberGt: [
          { validator: Validator.strNumber, trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.search()
  },
  methods: {
    search () {
      this.$emit('search', this.searchForm)
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
