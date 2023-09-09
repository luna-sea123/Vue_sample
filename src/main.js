import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import Vue from "vue";

createApp(App).use(store).use(router).mount("#app");

// new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app')

// new Vue({
//     el: "#app",
//     data() {
//       return {
//         center: true,
//         left: false,
//         right: false,
//         leftSlideClass: "fadeInBottomLeft",
//         rightSlideClass: "fadeInBottomRight",
//       };
//     },
//     methods: {
//       watchCenter: function () {
//         this.center = true;
//         this.left = false;
//         this.right = false;
//       },
//       watchLeft: function () {
//         this.center = false;
//         this.left = true;
//         this.right = false;
//         this.leftSlideClass = "fadeInLeft";
//       },
//       watchRight: function () {
//         this.center = false;
//         this.left = false;
//         this.right = true;
//         this.rightSlideClass = "fadeInRight";
//       },
//     },
//   });