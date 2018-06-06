<template>
    <div class="container">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="按书籍查询" name="book">
           <tabs-book-query />
        </el-tab-pane>
        <el-tab-pane label="按用户查询" name="user">
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
}
</style>
