import Layout from '@/views/Layout'

const _import_ = file => () => import('@/views/' + file + '.vue')
/**
 * 静态路由表配置
 *
 * 可根据{role}字段来模拟权限访问. 用户登录后必须含有{role}字段, 与之匹配的路由会被最终过滤出来供访问.
 * 不匹配的则不会包含在内.
 * 具体字段表说明可以访问平台文档查看详细资料.
 */
export const aysncRoutesMap = [
  {
    path: '/borrow-management',
    component: Layout,
    meta: { title: 'Borrow Management', icon: 'yuehufont icon-yuedureading19', role: ['admin'] },
    children: [
      {
        path: '',
        name: 'BorrowManagement',
        component: _import_('BorrowManage/index'),
        meta: { title: '借阅管理', icon: 'yuehufont icon-yuedureading19' }
      }
    ]
  },
  {
    path: '/book-management',
    component: Layout,
    meta: { title: 'Books Management', icon: 'yuehufont icon-cc-book', role: ['admin'] },
    children: [
      {
        path: '',
        name: 'BookManagement',
        component: _import_('BookManage/index'),
        meta: { title: '图书管理', icon: 'yuehufont icon-cc-book' }
      }
    ]
  },
  {
    path: '/user-management',
    component: Layout,
    meta: { title: 'Users Management', icon: 'yuehufont icon-user-group', role: ['admin'] },
    children: [
      {
        path: '',
        name: 'UserManagement',
        component: _import_('UserManage/index'),
        meta: { title: '用户管理', icon: 'yuehufont icon-user-group' }
      }
    ]
  }
]
