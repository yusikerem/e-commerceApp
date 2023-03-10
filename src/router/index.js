import { createRouter, createWebHistory } from "vue-router";
import userLoginPage from "../views/userLoginPage.vue";
import sellerLoginPage from "../views/sellerLoginPage.vue";
import userRegisterPage from "../views/userRegisterPage.vue";
import sellerRegisterPage from "../views/sellerRegisterPage.vue";
import mainPage from "../views/mainPage.vue";
import sellerAccountSettingsPage from "../views/sellerAccountSettingsPage.vue";
const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "main",
    component: mainPage,
  },
  {
    path: "/user/login",
    name: "user/Login",
    component: userLoginPage,
  },
  {
    path: "/seller/register",
    name: "sellerRegister",
    component: sellerRegisterPage,
  },
  {
    path: "/sellerPage",
    name: "sellerAccountSettingsPage",
    component: sellerAccountSettingsPage,
  },
  {
    path: "/sellerLogin",
    name: "sellerLogin",
    component: sellerLoginPage,
  },
  {
    path: "/userRegister",
    name: "userRegister",
    component: userRegisterPage,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
