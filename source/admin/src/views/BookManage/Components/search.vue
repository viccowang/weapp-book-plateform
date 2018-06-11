<template>
    <el-form :model="searchForm" ref="searchForm" :rules="searchRule" label-width="80px" size="mini">
       <el-row>
           <el-col :span="5">
                <el-form-item label="ISBN" prop="bookIsbn">
                    <el-input v-model="searchForm.bookIsbn"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="5">
                <el-form-item label="书名" prop="bookName">
                    <el-input v-model="searchForm.bookName"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="4">
                <el-form-item label="库存" prop="stockNumberGt">
                    <el-input v-model="searchForm.stockNumberGt"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="6">
                <el-form-item label="所属区域" prop="companyId">
                    <el-select v-model="searchForm.companyId" placeholder="请选择">
                        <el-option
                          v-for="area in companyArea"
                          :key="area.id"
                          :label="area.value"
                          :value="area.id">
                        </el-option>
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
// api
import { getCompanyAreaList } from '@/api/common'
// custom Validator
import Validator from '@/utils/extendValidate'
// mixin
import { commonMixinsForSearch } from '@/utils/mixin'

export default {
  name: 'BookListSearch',
  mixins: [commonMixinsForSearch],
  data () {
    return {
      companyArea: '',
      searchForm: {
        bookIsbn: '',
        bookName: '',
        companyId: '',
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
  async beforeMount () {
    const companyArea = await getCompanyAreaList()
    this.companyArea = [].concat(companyArea)
    if (this.companyArea.length) {
      this.searchForm.companyId = this.companyArea[0].id
    }
  }
}
</script>
