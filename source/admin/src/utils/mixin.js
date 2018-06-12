/**
 * COMPONENTS MIXINS
 */

// 通用列表查询模板混入
export const commonMixins = {
  // 全局数据对象都基本为一个列表以及基础查询条件
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
  methods: {
    // 根据查询条件生成接口查询对象
    getQueryParams (searchParams) {
      return {
        ...searchParams,
        ...this.pagination
      }
    },
    // 查询列表
    queryList (searchParams) {
      this.searchParams = searchParams || this.searchParams
      const queryParams = this.getQueryParams(this.searchParams)
      this.getQueryList(queryParams)
    },
    // 翻页
    changePage (pageNum) {
      this.pagination.pageNum = pageNum
      this.queryList()
    },
    initPagination (result) {
      if (result) {
        this.tableData = result.list
        this.pagination.pageNum = result.pageNum
        this.pagination.pageSize = result.pageSize
        this.pagination.total = result.total
      }
    },
    // 某些时候需要外部调用刷新页面,比如新增,修改,删除操作后,手动(按照当前查询条件)刷新一次列表
    queryAfterOperation () {
      const params = this.getQueryParams(this.searchParams)
      this.queryList(params)
    }
  }
}

// 通用查询混入
export const commonMixinsForSearch = {
  methods: {
    search () {
      this.$emit('search', this.searchForm)
    },
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        this.search()
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
