import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
];

const scrollBehavior = function (to, from, savedPostion) {
  const position = {};

  if (savedPostion) {
    console.log("savedPostion", savedPostion);
    return savedPostion;
  } else {
    console.log("hash", to);
    if (to.hash) {
      position.selector = to.hash;
      console.log("to hash", position);
    }
    return position;
  }

  // return new Promise(resolve => {
  //   if(to.matched.some(m => m.meta.scrollToTop)) {
  //     position.x = 0;
  //     position.y = 0;
  //   }

  //   // this.app.$root.$once("triggerScroll",() => {
  //     console.log("resolve",position)
  //     resolve(position)
  //   // })
  // });
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior,
  routes,
});

export default router;
