import { createRouter, createWebHistory } from 'vue-router';
import fire from 'firebase/app';
import Login from '../views/Login.vue';
import mainUi from '../components/layout/defaultLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isGuest: true,
    },
  },
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    name: 'main',
    meta: {
      isAuthen: true,
    },
    component: mainUi,
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('../views/Main.vue'),
      },
    ],
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
