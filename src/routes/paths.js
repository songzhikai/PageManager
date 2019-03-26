export default [
  { path: '/', component: () => import('../views/pages/home_page')}, // 主页面
  { path: '/pages/index', component: () => import('../views/pages/home_page') }, // 主页面
  { path: '/pages/group', component: () => import('../views/pages/group_page') },
  { path: '/pages/add', component: () => import('../views/pages/add_page') },
];
