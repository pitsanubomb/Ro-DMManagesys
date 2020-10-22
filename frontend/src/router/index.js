import { createRouter, createWebHistory } from 'vue-router';
import fire from 'firebase/app';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isGuest: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      isAuthen: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((trace) => trace.meta.isAuthen)) {
    fire.auth().onAuthStateChanged((d) => {
      if (d) {
        next();
      } else {
        next('/');
      }
    });
  } else if (to.matched.some((trace) => trace.meta.isGuest)) {
    fire.auth().onAuthStateChanged((d) => {
      if (!d) {
        next();
      } else {
        next('/about');
      }
    });
  } else {
    next();
  }
});

export default router;
