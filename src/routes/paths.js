export default [
  { path: '/news/pages/index', component: () => import('../views/pages/home_page') }, // 主页面
  { path: '/', component: () => import('../views/pages/home_page')}, // 主页面
  { path: '/news/pages/detail', component: () => import('../views/pages/home_page_detail') },
  { path: '/news/pages/phone', component: () => import('../views/pages/phone_page') },
];
