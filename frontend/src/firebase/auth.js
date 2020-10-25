import firebase from 'firebase/app';
import 'firebase/auth';
import store from '@/store';

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('fireAuth/SET_AUTH', { username: user.displayName, img: user.photoURL });
  }
});
