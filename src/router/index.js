import Vue from "vue";
import Router from "vue-router";

import store from "./../vuex/store"; //vuex
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/components/pages/main/main.vue"),
      children: [
        {
          path: "/", //首页
          name: "shoppingmall",
          component: () => import("@/components/pages/home/shoppingmall.vue")
        },
        {
          path: "/Wedding", //帖子
          name: "Wedding",
          component: () => import("@/components/pages/Twopages/Wedding.vue")
        },
        {
          path: "/contact", //二维码
          name: "contact",
          component: () => import("@/components/pages/contact/contact.vue")
        },
        {
          path: "/personal", //个人页面
          name: "personal",
          component: () => import("@/components/pages/personal/personal.vue")
        }
      ]
    },

    {
      path: "/conn", //红娘
      name: "conn",
      component: () =>
        import("@/components/pages/personal/libefuncti/contact/conn.vue")
    },
    {
      path: "/jiri", //日历
      name: "jiri",
      component: () =>
        import("@/components/pages/personal/libefuncti/jiri/jiri.vue")
    },
    {
      path: "/budget", //结婚预算
      name: "budget",
      component: () =>
        import("@/components/pages/personal/libefuncti/budget/budget.vue")
    },
    {
      path: "/registr", //婚姻登记
      name: "registr",
      component: () =>
        import("@/components/pages/personal/libefuncti/registr/registr.vue")
    },
    {
      path: "/loan", //贷款
      name: "loan",
      component: () =>
        import("@/components/pages/personal/libefuncti/loan/loan.vue")
    },
    {
      path: "/task", //结婚任务页面
      name: "task",
      component: () =>
        import("@/components/pages/personal/libefuncti/task/task.vue")
    },
    {
      path: "/Bookkeeping", //结婚记账页面
      name: "Bookkeeping",
      component: () =>
        import("@/components/pages/personal/libefuncti/Book/Bookkeeping.vue")
    },
    {
      path: "/Invitation", //结婚请柬页面
      name: "Invitation",
      component: () =>
        import("@/components/pages/personal/libefuncti/Invitation/Invitation.vue")
    },
    {
      path: "/invitationdata", //结婚请柬内容页面
      name: "invitationdata",
      component: () =>
        import("@/components/pages/personal/libefuncti/Invitation/invitation-data.vue")
    },
    {
      path: "/cate", //功能按钮
      name: "cate",
      component: () => import("@/components/pages/home/cate/cate.vue")
    },
    {
      path: "/search", //搜索
      name: "search",
      component: () => import("@/components/pages/home/search/search.vue")
    },
    {
      path: "/searchnew", //搜索展示
      name: "searchnew",
      component: () => import("@/components/pages/home/search/search-new.vue")
    },
    {
      path: "/setting", //设置
      name: "setting",
      component: () =>
        import("@/components/pages/personal/persinal-setting/setting.vue")
    },
    {
      path: "/nweseeting", //新用户设置
      name: "nweseeting",
      component: () =>
        import("@/components/pages/personal/persinal-setting/nweseeting.vue")
    },
    {
      path: "/inform", //通知
      name: "inform",
      component: () => import("@/components/pages/personal/inform/inform.vue")
    },
    {
      path: "/shoppnew", //个人资料详情页
      name: "shoppnew",
      component: () =>
        import("@/components/pages/home/shopp-new.vue/shoppnew.vue")
    },
    {
      path: "/wedding-data", //文章详情页
      name: "wedding-data",
      component: () => import("@/components/pages/Twopages/wedding-data.vue")
    },
    // {
    //   path: "/Landing", //注册
    //   name: "Landing",
    //   component: () => import("@/components/pages/register.vue")
    // },
    {
      path: "/Login", //登陆
      name: "Login",
      component: () => import("@/components/pages/Login.vue")
    }
  ]
});
// 路由白名单
router.beforeEach((to, from, next) => {
  if (store.state.id == null && to.path == "/shoppnew") {
    //未登录
    next("/login");
  } else {
    // console.log("跳转成功");

    next();
  }
});
export default router;
