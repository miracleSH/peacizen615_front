import Vue from "vue";
import VueRouter from "vue-router";
//import MainPage from '../views/main-page.vue'

Vue.use(VueRouter);

function loadView(viewName) {
  return () => import(`../views/${viewName}.vue`);
}

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: loadView("main-page"),
    },
    {
      path: "/introduce",
      name: "introduce",
      component: loadView("introduce"),
    },
    {
      path: "/study",
      name: "study",
      component: loadView("study"),
    },
  ],
});
