<template>
    <el-form :model="searchForm" ref="searchForm" :rules="searchRule" label-width="80px" size="mini">
       <el-row>
           <el-col :span="6">
                <el-form-item label="OpenId" prop="openId">
                    <el-input v-model="searchForm.openId"></el-input>
                </el-form-item>
           </el-col>
            <el-col :span="6">
                <el-form-item label="真实姓名" prop="userName">
                    <el-input v-model="searchForm.userName"></el-input>
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

export default {
  name: 'TabsUserQuerySearch',
  data () {
    return {
      companyArea: [],
      searchForm: {
        openId: '',
        userName: '',
        company_id: ''
      },
      searchRule: {}
    }
  },
  async beforeMount () {
    const companyArea = await getCompanyAreaList()
    this.companyArea = [].concat(companyArea)
    if (this.companyArea.length) {
      this.searchForm.company_id = this.companyArea[0].id
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
