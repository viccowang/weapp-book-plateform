<template>
  <el-container class="content">
    <div class="welcome">
      <div class="title">阅乎-图书借阅管理平台</div>
      <!-- 模块快速导航 -->
      <div class="menu">
        <dashboard-menu-item :menuList="menuList"></dashboard-menu-item>
      </div>
    </div>
  </el-container>
</template>

<script>
import DashboardMenuItem from './Components/DashboardMenuItem'
export default {
  name: 'Dashboard',
  data () {
    return {
      menuList: []
    }
  },
  mounted () {
    this.menuList = this.$store.getters.asyncRouter
  },
  components: {
    DashboardMenuItem
  }
}
</script>

<style lang="scss" scoped>
.content{

  .welcome{
    padding-top:50px;
    width:80%;
    margin:0 auto;

    .title {
      padding:10px 0;
      font-size:1.8rem;
      color: $base-blue-color;
      border-bottom: 1px solid $base-light-color;
    }

    .menu {
      width: 100%;
      padding-top:15px;
    }

  }
}
</style>
