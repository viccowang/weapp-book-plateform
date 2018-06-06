<template>
    <div>
        <common-wrapper>
          <tabs-book-query-search></tabs-book-query-search>
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="name" label="书名"></el-table-column>
                    <el-table-column prop="name" label="ISBN"></el-table-column>
                    <el-table-column prop="name" label="总量"></el-table-column>
                    <el-table-column prop="address" label="库存"></el-table-column>
                    <el-table-column prop="date" label="借阅评价"></el-table-column>
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
import TabsBookQuerySearch from './Components/search'

export default {
  name: 'TabsBookQuery',
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
    TabsBookQuerySearch
  }
}
</script>
