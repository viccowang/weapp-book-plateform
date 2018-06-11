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
// mixin
import { commonMixinsForSearch } from '@/utils/mixin'
// api
import { getCompanyAreaList } from '@/api/common'

export default {
  name: 'TabsUserQuerySearch',
  mixins: [commonMixinsForSearch],
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
  }
}
</script>
