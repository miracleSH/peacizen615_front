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
      path: '/register/introduce',
      name: 'register-introduce',
      component: loadView('register-introduce')
    },
    {
      path: '/register',
      name: 'register',
      component: loadView('register')
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
    {
      path: "/group-activity",
      name: "group-activity",
      component: loadView("group-activity")
    },
    {
      path: "/seminar",
      name: "seminar",
      component: loadView("seminar")
    },
    {
      path: "/library",
      name: "library",
      component: loadView("library")
    }
  ],
});
