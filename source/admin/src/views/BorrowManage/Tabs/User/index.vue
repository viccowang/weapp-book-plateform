<template>
    <div>
        <common-wrapper>
          <tabs-user-query-search />
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="name" label="OpenId"></el-table-column>
                    <el-table-column prop="name" label="真实姓名"></el-table-column>
                    <el-table-column prop="date" label="注册日期"></el-table-column>
                    <el-table-column prop="address" label="所属区域"></el-table-column>
                    <el-table-column label="操作" width="150"></el-table-column>
                </el-table>
                </template>
                <template slot="pagination">
                  <el-pagination background  layout="prev, pager, next" :total="100"></el-pagination>
                </template>
            </common-table>
        </common-wrapper>
    </div>
</template>

<script>
import CommonWrapper from '@/components/commonWrapper'
import CommonTable from '@/components/commonTable'

import TabsUserQuerySearch from './Components/search'

export default {
  name: 'TabsUserQuery',
  data () {
    return {
      comp: this,
      isShowSearch: false,
      tableData: [],
      btnData: []
    }
  },
  mounted () {
  },
  methods: {
    create () { },
    remove () { }
  },
  components: {
    CommonWrapper,
    CommonTable,
    TabsUserQuerySearch
  }
}
</script>
