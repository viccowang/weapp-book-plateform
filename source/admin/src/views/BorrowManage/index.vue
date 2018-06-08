<template>
    <div class="container">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane name="book">
            <span slot="label"><i class="label-icon yuehufont icon-orderform"></i>按书籍查询</span>
           <tabs-book-query />
        </el-tab-pane>
        <el-tab-pane name="user">
          <span slot="label"><i class="label-icon yuehufont icon-login_user"></i>按用户查询</span>
            <tabs-user-query />
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import CommonWrapper from '@/components/commonWrapper'
import CommonTable from '@/components/commonTable'
import NavButton from '@/components/navButton'

import TabsBookQuery from './Tabs/Book'
import TabsUserQuery from './Tabs/User'

export default {
  name: 'BorrowManagement',
  data () {
    return {
      activeTab: 'book'
    }
  },
  mounted () {
  },
  methods: {
    handleTabClick () {
    }
  },
  components: {
    CommonWrapper,
    CommonTable,
    NavButton,
    TabsBookQuery,
    TabsUserQuery
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding:0 10px;
  box-sizing: border-box;

  .label-icon {
    font-size:14px;
    margin-right:5px;
  }
}
</style>
