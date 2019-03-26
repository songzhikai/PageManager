export default [
  { path: '/', component: () => import('../views/pages/list_page')}, // 列表页面
  { path: '/pages/index', component: () => import('../views/pages/list_page') }, // 列表页面
  { path: '/pages/group', component: () => import('../views/pages/group_page') },
  { path: '/pages/add', component: () => import('../views/pages/add_page') },
  { path: '/pages/login', component: () => import('../components/layout/login.js') },
];
