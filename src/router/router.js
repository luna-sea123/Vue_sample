import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import menuVue from "../views/menuVue.vue";

Vue.use(Router);

//初期ロード負荷軽減のためにWebpackのCodeSplittingを用いたDynamic Importの使用例
//現状未使用
function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView(HomeView),
    },
    {
      path: "/about",
      name: "about",
      component: loadView("About"),
    },
    {
      path: "/menu",
      name: "menu",
      component: loadView(menuVue),
    },
  ],
});
