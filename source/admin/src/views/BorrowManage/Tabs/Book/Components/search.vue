<template>
    <el-form :model="searchForm" ref="searchForm" :rules="searchRule" label-width="80px" size="mini">
       <el-row>
           <el-col :span="6">
                <el-form-item label="ISBN" prop="isbn">
                    <el-input v-model="searchForm.isbn"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="6">
                <el-form-item label="书名" prop="title">
                    <el-input v-model="searchForm.title"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="6">
                <el-form-item label="所属区域" prop="company_id">
                    <el-select v-model="searchForm.company_id" placeholder="请选择">
                        <el-option
                          v-for="area in companyArea"
                          :key="area.id"
                          :label="area.value"
                          :value="area.id">
                        </el-option>
                    </el-select>
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
// api
import { getCompanyAreaList } from '@/api/common'
// custom Validator
import Validator from '@/utils/extendValidate'
// mixin
import { commonMixinsForSearch } from '@/utils/mixin'

export default {
  name: 'TabsBookQuerySearch',
  mixins: [commonMixinsForSearch],
  data () {
    return {
      companyArea: [],
      searchForm: {
        isbn: '',
        title: '',
        company_id: ''
      },
      searchRule: {
        isbn: [
          { validator: Validator.isbn, trigger: 'blur' }
        ]
      }
    }
  },
  async beforeMount () {
    const companyArea = await getCompanyAreaList()
    this.companyArea = [].concat(companyArea)
    if (this.companyArea.length) {
      this.searchForm.company_id = this.companyArea[0].id
    }
  }
}
</script>
