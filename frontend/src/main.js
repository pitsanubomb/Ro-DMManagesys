import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import * as auth from '@/firebase/auth';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .use(auth)
  .mount('#app');
