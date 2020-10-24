import { createRouter, createWebHistory } from 'vue-router';
import fire from 'firebase/app';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isGuest: true,
    },
  },
  {
    path: '/',
    name: 'Main',
    meta: {
      isAuthen: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
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
        next('/login');
      }
    });
  } else if (to.matched.some((trace) => trace.meta.isGuest)) {
    fire.auth().onAuthStateChanged((d) => {
      if (!d) {
        next();
      } else {
        next('/');
      }
    });
  } else {
    next();
  }
});

export default router;
