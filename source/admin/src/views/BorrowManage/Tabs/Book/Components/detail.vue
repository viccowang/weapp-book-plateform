<template>
    <div>
        <common-wrapper>
          <book-borrow-detail-search :book="book" @search="queryList"></book-borrow-detail-search>
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="borrowUserName" label="借阅人"></el-table-column>
                    <el-table-column prop="borrowDate" label="借阅起始日期"></el-table-column>
                    <el-table-column label="借阅天数" :formatter="borrowTotalDate"></el-table-column>
                    <el-table-column prop="isReturn" label="归还情况" :formatter="formatReturn"></el-table-column>
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
import moment from 'moment'

import CommonWrapper from '@/components/commonWrapper'
import CommonTable from '@/components/commonTable'
import BookBorrowDetailSearch from './detailSearch'

// api
import { getBorrowBookQueryDetailList } from '@/api/borrowBook'

export default {
  name: 'BookBorrowDetail',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      searchParams: {},
      tableData: [],
      pagination: { // 翻页数据
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  beforeMount () {
  },
  methods: {
    getQueryParams (searchParams) {
      return {
        ...searchParams,
        ...this.pagination
      }
    },
    queryList (searchParams) {
      this.searchParams = searchParams
      const queryParams = this.getQueryParams(searchParams)
      this.getBookQueryList(queryParams)
    },
    async getBookQueryList (queryParams) {
      const result = await getBorrowBookQueryDetailList(queryParams)
      if (result) {
        this.tableData = result.list
        this.pagination.pageNum = result.pageNum
        this.pagination.pageSize = result.pageSize
        this.pagination.total = result.total
      }
    },
    changePage (pageNum) {
      this.pagination.pageNum = pageNum
      this.getBookQueryList(this.searchParams)
    },
    borrowTotalDate (row, column, cellValue, index) {
      const startDate = moment(row.borrowDate)
      const endDate = moment(row.isReturn === 'true' ? row.returnDate : moment())
      return Math.abs(startDate.diff(endDate, 'd')) + '天'
    },
    formatReturn (row, column, cellValue, index) {
      return cellValue === 'true' ? `已于${row.returnDate}归还` : '未归还'
    }
  },
  components: {
    CommonWrapper,
    CommonTable,
    BookBorrowDetailSearch
  }
}
</script>
