<template>
    <div>
        <common-wrapper>
          <book-borrow-detail-search></book-borrow-detail-search>
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="isbn13" label="借阅人"></el-table-column>
                    <el-table-column prop="title" label="借阅日期"></el-table-column>
                    <el-table-column prop="borrowTotle" label="借阅数量"></el-table-column>
                    <el-table-column prop="borrowTotle" label="已借阅天数"></el-table-column>
                    <el-table-column prop="borrowTotle" label="是否已归还"></el-table-column>
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
import BookBorrowDetailSearch from './detailSearch'

export default {
  name: 'BookBorrowDetail',
  data () {
    return {
      comp: this,
      isShowSearch: false,
      tableData: []
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    CommonWrapper,
    CommonTable,
    BookBorrowDetailSearch
  }
}
</script>
