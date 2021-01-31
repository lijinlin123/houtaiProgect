import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 设置二级路由配置项
export const indexRouters = [
  {
    path:'/role',
    component: () => import('@/views/role/role'),
    name:'角色管理'
  },
  {
    path:'/manager',
    component: () => import('@/views/manger/manger'),
    name:'管理员管理'
  },
  {
    path:'/menu',
    component: () => import('@/views/menu/menu'),
    name:'菜单管理'
  },
  {
    path:'/goods',
    component: () => import('@/views/goods/goods'),
    name:'商品管理'
  },
  {
    path: "/cate",
    component: () => import("@/views/cate/cate"),
    name:'商品分类'
  },
  {
    path: "/specs",
    component: () => import("@/views/specs/specs"),
    name:'商品规格'
  },
  {
    path: "/banner",
    component: () => import("@/views/banner/banner"),
    name:'轮播图管理'
  },
  {
    path: "/seck",
    component: () => import("@/views/seck/seck"),
    name:'秒杀管理'
  },
  {
    path: "/member",
    component: () => import("@/views/member/member"),
    name:'会员管理'
  }
]

const router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/pages/login')
    },
    {
      path: '/index',
      component: () => import('@/pages/index'),
      children: [
        {
          path:'/home',
          component: () => import('@/views/home')
        },
        ...indexRouters,
        {
          path:'',
          redirect:'/home',
        }
      ]
    },
    // 一级路由重定向
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

// 全局导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/login'){
    next();
    return;
  }
  if(sessionStorage.getItem('loginInfo')){
    next();
    return;
  }
  next('/login');
})
export default router