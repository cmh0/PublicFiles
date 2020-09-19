import Vue from 'vue'
import Router from 'vue-router'

// 这段代码为了解决 element-ui 同路由强制跳转到同路由报错问题，原因是 element-ui和路由的版本冲突！
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import store from "@/store"
Vue.use(Router)

let router = new Router({

  // 配置路由
  routes: [
    {
      path: '/login',
      component: () => import("@/views/Login" ) ,
      meta: { title: "登录" }
    },
    {
      path: '/',
      component: () => import( "@/views/Layout" ),
      meta: { title: "xxx管理系统" },
      redirect: "/index",
      children: [
        {
          path: "/index",
          component: () => import( "@/views/Index" ),
          meta: { title: "后台首页" },
        },
        {
          path: "/menu",
          component: () => import( "@/views/System/Menue" ),
          meta: { title: "菜单管理" },
        },
        {
          path: "/role",
          component: () => import( "@/views/System/Role" ),
          meta: { title: "角色管理" },
        },
        {
          path: "/admin",
          component: () => import( "@/views/System/User" ),
          meta: { title: "管理员管理" },
        },
        {
          path: "/category",
          component: () => import("@/views/Shops/Category"),
          meta: { title: "分类管理" },
        },
        {
          path: "/goods",
          component: () => import("@/views/Shops/Goods"),
          meta: { title: "商品管理" },
        },
        {
          path: "/specs",
          component: () => import("@/views/Shops/Specs"),
          meta: { title: "规格管理" },
        },
        {
          path: "/member",
          component: () => import("@/views/Shops/Member"),
          meta: { title: "会员管理" },
        },
        {
          path: "/seckill",
          component: () => import("@/views/Shops/Seckil"),
          meta: { title: "秒杀管理" },
        },
        {
          path: "/banner",
          component: () => import("@/views/Shops/Banner"),
          meta: { title: "轮播图管理" },
        },
      ]
    },
       {
          path: "*",
          name: "404",
          component: () => import("@/views/NotFound"),
          meta: { title: "页面走丢了！" }
        },

  ]
})


//全局守卫
router.beforeEach((to, from, next) => {
  next();
   // 去的地址是登录页面
  // if (to.path == "/login") { 
  //   document.title = to.meta.title
  //   next();
  // } else {
  //     // 不是登录页面  需要判断是否登录 登录了才可以访问！
  //   if (localStorage.getItem("userinfo")) {
  //     // 登录
  //     let whiteList = store.getters['user/menus_url'];
  //     whiteList.push('/index')
  //     if (whiteList.includes(to.path)) {
  //       // 去的地址在 该用户可以访问的地址池中
  //       document.title = to.meta.title
  //       next();
  //     }
  //   } else {
  //     // 没有登录就想访问是直接跳转到登录页面
  //     next('/login')
  //   }
  // }
})


// 暴露
export default router;
