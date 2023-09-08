import { createRouter, createWebHashHistory } from "vue-router";
//import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import menuVue from "../views/menuVue.vue";

//ルーティング定義配列 ↓
const routes = [
  {
    path: "/",
    name: "home",
    //インポート
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    //相対パス指定
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    //インポート
    component: menuVue,
  },
];
//ここまで ↑

const router = createRouter({
  //ハッシュモードのルーティング履歴を作成
  history: createWebHashHistory(),

  // mode: "history",
  routes,
});

//他のファイルからアクセスできるようにする
export default router;
