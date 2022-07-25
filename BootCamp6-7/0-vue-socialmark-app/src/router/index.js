import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomeCmp"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/LoginCmp"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/RegisterCmp"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/NewBookmarkCmp"),
  },
  {
    name: "Favorites",
    path: "/favorites",
    component: () => import("@/views/AccountCmp"),
  },
  {
    name: "Likes",
    path: "/likes",
    component: () => import("@/views/AccountCmp"),
  },
  {
    name: "Settings",
    path: "/settings",
    component: () => import("@/views/AccountCmp"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// navigation guardlar sayesinde bir cmp ye girmeden çıkmadan üretilmeden gibi aksiyonlar için hook funclar veriyordu. Tüm routelar için beforeEach kullanıyoruz burada
router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["HomePage"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
  const _isAuthenticated = store.getters._isAuthenticated;
  // next false geçişi engeller bir route dan diğerine
  // next(false);
  // if (to.name == "HomePage" && _isAuthenticated) {
  //   next();
  // }
  console.log(to, from);
  // Burada
  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
    next(false);
  }
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else {
    next();
  }
});

export default router;
