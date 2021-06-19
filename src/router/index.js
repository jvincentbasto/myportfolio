import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import error404 from "../components/errors/error404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/projects",
    name: "projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: error404,
  },
];

const scrollBehavior = function (to, from, savedPostion) {
  if (savedPostion) {
    return savedPostion;
  } else if (to.hash) {
    return { el: to.hash };
  } else {
    return { top: 0 };
  }

  // return new Promise(resolve => {
  //   if(to.matched.some(m => m.meta.scrollToTop)) {
  //     position.x = 0;
  //     position.y = 0;
  //   }

  //   this.app.$root.$once("triggerScroll",() => {
  //     console.log("resolve",position)
  //     resolve(position)
  //   })
  // });
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior,
  routes,
});

export default router;
