import { createStore } from 'vuex';
import fireAuthModule from './fireAuth';

export default createStore({
  modules: {
    fireAuth: fireAuthModule,
  },
});
