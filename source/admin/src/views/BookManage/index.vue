<template>
    <div>
        <nav-button>
          <el-button @click="deleteSelectedBooks">批量删除</el-button>
        </nav-button>
        <common-wrapper>
          <book-list-search @search="queryList" />
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="bookName" label="书名"></el-table-column>
                    <el-table-column prop="bookIsbn" label="ISBN"></el-table-column>
                    <el-table-column prop="total" label="总量"></el-table-column>
                    <el-table-column prop="stockNumber" label="库存"></el-table-column>
                    <el-table-column prop="grade" label="借阅评价"></el-table-column>
                    <el-table-column label="操作" width="150">
                      <template slot-scope="scope">
                        <el-button size="mini" type="text" @click.stop="deleteBook(scope.$index, scope.row)">删除</el-button>
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
import CommonSearch from '@/components/commonSearch'
import NavButton from '@/components/navButton'
import BookListSearch from './Components/search'

// api
import { getBookList, deleteBook } from '@/api/bookManage'

export default {
  name: 'BookManagement',
  data () {
    return {
      searchParams: {},
      selectedBookIds: [],
      tableData: [],
      pagination: { // 翻页数据
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  mounted () {
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
    queryAfterOperation () {
      const params = this.getQueryParams(this.searchParams)
      this.queryList(params)
    },
    async getBookQueryList (queryParams) {
      const result = await getBookList(queryParams)
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
    handleSelectionChange (rows) {
      this.selectedBookIds = rows.map(row => row.bookId)
    },
    deleteSelectedBooks () {
      this.deleteBooks(this.selectedBookIds)
    },
    /**
     * @param {books} [Array] or [Object] 需要删除的书籍ID数组或者单本书籍对象
     */
    async deleteBooks (books) {
      try {
        const isArray = Object.prototype.toString.call(books) === '[object Array]'
        const message = isArray ? `确认要删除这些书籍吗?` : `确认要删除<<${books.bookName}>>吗?`
        const res = await this.$confirm(message, '提醒', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        if (res === 'confirm') {
          try {
            await deleteBook(isArray ? {bookId: books} : {bookId: [books.bookId]})
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          } catch (error) {
            this.$message.error(error)
          }
        }
      } catch (error) {}
    },
    async deleteBook (indx, row) {
      await this.deleteBooks(row)
      this.queryAfterOperation()
    }
  },
  components: {
    CommonWrapper,
    CommonTable,
    CommonSearch,
    NavButton,
    BookListSearch
  }
}
</script>
