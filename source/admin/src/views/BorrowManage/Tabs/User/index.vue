<template>
    <div>
        <common-wrapper>
          <tabs-user-query-search @search="queryList" />
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe >
                    <el-table-column prop="openId" label="OpenId" width="150"></el-table-column>
                    <el-table-column prop="userName" label="真实姓名"></el-table-column>
                    <el-table-column prop="borrowTotal" label="借阅书籍数"></el-table-column>
                    <el-table-column prop="unReturnTotal" label="未归还书籍数"></el-table-column>
                    <el-table-column prop="lastBorrowBookName" label="最后借阅书名"></el-table-column>
                    <el-table-column prop="lastBorrowBookDate" label="最后借阅日期"></el-table-column>
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
import TabsUserQuerySearch from './Components/search'
import UserBorrowDetail from './Components/detail'

// api
import { getBorrowUserQueryList } from '@/api/borrowBook'

export default {
  name: 'TabsUserQuery',
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
      this.getUserQueryList(queryParams)
    },
    async getUserQueryList (queryParams) {
      const result = await getBorrowUserQueryList(queryParams)
      if (result) {
        this.tableData = result.list
        this.pagination.pageNum = result.pageNum
        this.pagination.pageSize = result.pageSize
        this.pagination.total = result.total
      }
    },
    showDetail (idx, row) {
      this.$nextPage({
        title: `${row.userName}的借阅详情`,
        props: {
          user: row
        },
        component: UserBorrowDetail
      })
    },
    changePage (pageNum) {
      this.pagination.pageNum = pageNum
      this.getUserQueryList(this.searchParams)
    }
  },
  components: {
    CommonWrapper,
    CommonTable,
    TabsUserQuerySearch
  }
}
</script>
