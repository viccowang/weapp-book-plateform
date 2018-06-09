<template>
    <div>
        <common-wrapper>
            <user-borrow-detail-search />
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="name" label="书籍名称"></el-table-column>
                    <el-table-column prop="date" label="借阅日期"></el-table-column>
                    <el-table-column prop="date" label="借阅数量"></el-table-column>
                    <el-table-column prop="address" label="已借阅天数"></el-table-column>
                    <el-table-column prop="address" label="是否归还"></el-table-column>
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

import UserBorrowDetailSearch from './detailSearch'

export default {
  name: 'UserBorrowDetail',
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
    create () { },
    remove () { }
  },
  components: {
    CommonWrapper,
    CommonTable,
    UserBorrowDetailSearch
  }
}
</script>
