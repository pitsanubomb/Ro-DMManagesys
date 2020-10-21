import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import firebase from 'firebase/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/auth';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const firebaseConfig = {
  apiKey: 'AIzaSyBPrhbCDpaXyVn4w0mtrRk1jxpVpl4WGFU',
  authDomain: 'dm-manage.firebaseapp.com',
  databaseURL: 'https://dm-manage.firebaseio.com',
  projectId: 'dm-manage',
  storageBucket: 'dm-manage.appspot.com',
  messagingSenderId: '55591847257',
  appId: '1:55591847257:web:fc4e95479d772dbabbb848',
  measurementId: 'G-WGY3YLN8KK',
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app');
