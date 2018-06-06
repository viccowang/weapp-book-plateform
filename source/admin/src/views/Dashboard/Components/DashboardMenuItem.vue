<template>
    <div class="menu-list">
        <div class="menu-list-item" v-for="(menu,index) in menuList" :key="index" v-if="!menu.hidden && menu.redirect !== '/dash' ">
            <div class="item" v-if="!menu.children" >
                <i class="el-icon-document"></i>
                <span class="title">{{ menu.meta.title }}</span>
            </div>
            <template v-else-if="menu.children && menu.children.length >= 1 ">
                 <span class="title" v-if="menu.meta && menu.meta.title">{{ menu.meta.title }}</span>
                 <ul v-for="(item, index) in menu.children" :key="index">
                     <template v-if="item.children && item.children.length >= 1">
                         <dashboard-menu-item :menuList="[item]"></dashboard-menu-item>
                     </template>
                     <template v-else>
                        <router-link tag="li" class="menu-item" :to="menu.path + '/' + item.path">
                            <i v-bind:class="item.meta.icon"></i>
                            <span class="list-title">{{ item.meta.title }}</span>
                        </router-link>
                     </template>
                 </ul>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DashboardMenuItem',
  props: {
    menuList: Array
  }
}
</script>

<style lang="scss" scoped>
.menu-list {
    width:100%;
    display:flex;
    flex-wrap: wrap;

    .menu-list-item{
        padding:10px 45px 20px 0;
        cursor: pointer;

        .title {
            display: inline-block;
            margin:0 0 8px 10px;
            font-size:14px;
            font-style:italic;
            white-space: nowrap;
            color: darken($base-light-color, 45%);
        }

        ul {
            li {
                display: flex;
                padding: 10px;
                transition: all .3s ease 0s;
                font-size:13px;
                border-radius:8px;

                i {
                    margin-right:5px;
                    color: darken($base-light-color, 25%);
                }

                .list-title {
                    white-space: nowrap;
                }

                &:hover {
                    background-color: $base-light-color;
                }
            }
        }

    }
}

</style>
