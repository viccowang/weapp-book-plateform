<template>
    <div>
        <common-wrapper>
          <tabs-book-query-search @search="queryList"></tabs-book-query-search>
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="title" label="书名"></el-table-column>
                    <el-table-column prop="isbn13" label="ISBN"></el-table-column>
                    <el-table-column prop="borrowTotle" label="借阅次数"></el-table-column>
                    <el-table-column prop="lastBorrowUserName" label="最后借阅人"></el-table-column>
                    <el-table-column prop="lastBorrowDate" label="最后借阅日期"></el-table-column>
                    <el-table-column label="详情" width="150">
                      <template slot-scope="scope">
                        <el-button size="mini" round icon="yuehufont icon-shouquan" @click.stop="showDetail(scope.$index, scope.row)">查看详细列表</el-button>
                      </template>
                    </el-table-column>
                </el-table>
                </template>
                <template slot="pagination">
                   <el-pagination
                    background
                    layout="total, prev, pager, next"
                    :current-page.sync="pagination.pageNum"
                    :page-size="pagination.pageSize"
                    :total="pagination.total"
                    @current-change="changePage"
                    ></el-pagination>
                </template>
            </common-table>
        </common-wrapper>
    </div>
</template>

<script>
import CommonWrapper from '@/components/commonWrapper'
import CommonTable from '@/components/commonTable'
import TabsBookQuerySearch from './Components/search'
import BookBorrowDetail from './Components/detail'
// mixin
import { commonMixins } from '@/utils/mixin'
// api
import { getBorrowBookQueryList } from '@/api/borrowBook'

export default {
  name: 'TabsBookQuery',
  mixins: [commonMixins],
  methods: {
    async getQueryList (queryParams) {
      const result = await getBorrowBookQueryList(queryParams)
      this.initPagination(result)
    },
    showDetail (idx, row) {
      this.$nextPage({
        title: `[${row.title}]借阅详情`,
        props: {
          book: row
        },
        component: BookBorrowDetail
      })
    }
  },
  components: {
    CommonWrapper,
    CommonTable,
    TabsBookQuerySearch
  }
}
</script>
