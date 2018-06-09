<template>
    <div>
        <nav-button>
          <el-button @click="deleteSelectedUsers">批量删除</el-button>
        </nav-button>
        <common-wrapper>
          <user-list-search @search="queryList" />
        </common-wrapper>
        <common-wrapper>
            <common-table size="small">
                <template slot="table">
                <el-table :data="tableData" stripe @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="openId" label="OpenId"></el-table-column>
                    <el-table-column prop="userName" label="真实姓名"></el-table-column>
                    <el-table-column prop="createTime" label="注册日期"></el-table-column>
                    <el-table-column prop="companyName" label="所属区域"></el-table-column>
                    <el-table-column label="操作" width="150">
                      <template slot-scope="scope">
                        <el-button size="mini" type="text" @click.stop="editReader(scope.$index, scope.row)">修改</el-button>
                        <el-button size="mini" type="text" @click.stop="deleteReader(scope.$index, scope.row)">删除</el-button>
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

        <!-- 用户编辑 -->
        <edit-reader
          :isShow.sync="isEditUserDialogVisible"
          :user.sync="editUser"
          @query="queryAfterOperation"
        />
    </div>
</template>

<script>
import CommonWrapper from '@/components/commonWrapper'
import CommonTable from '@/components/commonTable'
import CommonSearch from '@/components/commonSearch'
import NavButton from '@/components/navButton'
import UserListSearch from './Components/search'
import EditReader from './Components/edit'

// api
import { getReaderList, deleteReader } from '@/api/readerManage'

export default {
  name: 'UserManagement',
  data () {
    return {
      searchParams: {},
      selectedUserIds: [],
      isEditUserDialogVisible: false,
      editUser: {},
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
    queryAfterOperation () {
      const params = this.getQueryParams(this.searchParams)
      this.queryList(params)
    },
    async getUserQueryList (queryParams) {
      const result = await getReaderList(queryParams)
      if (result) {
        this.tableData = result.list
        this.pagination.pageNum = result.pageNum
        this.pagination.pageSize = result.pageSize
        this.pagination.total = result.total
      }
    },
    changePage (pageNum) {
      this.pagination.pageNum = pageNum
      this.getUserQueryList(this.searchParams)
    },
    handleSelectionChange (rows) {
      this.selectedUserIds = rows.map(row => row.openId)
    },
    deleteSelectedUsers () {
      this.deleteUser(this.selectedUserIds)
    },
    /**
     * @param {users} [Array] or [Object] 需要删除的用户ID数组或者单个用户对象
     */
    async deleteUser (users) {
      try {
        const isArray = Object.prototype.toString.call(users) === '[object Array]'
        const message = isArray ? `确认要删除这些读者吗?` : `确认要删除读者${users.userName}吗?`
        const res = await this.$confirm(message, '提醒', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        if (res === 'confirm') {
          try {
            await deleteReader(isArray ? {userId: users} : {userId: [users.userId]})
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
    async deleteReader (idx, row) {
      await this.deleteUser(row)
      this.queryAfterOperation()
    },
    editReader (idx, row) {
      this.editUser = row
      this.isEditUserDialogVisible = true
    }
  },
  components: {
    CommonWrapper,
    CommonTable,
    CommonSearch,
    NavButton,
    UserListSearch,
    EditReader
  }
}
</script>
