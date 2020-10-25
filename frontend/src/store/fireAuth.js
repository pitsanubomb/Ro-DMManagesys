const fireAuthModule = {
  namespaced: true,
  state: {
    user: {},
    isAuthen: false,
  },
  mutations: {
    SET_AUTH(state, user) {
      state.user = user;
      state.isAuthen = true;
    },
  },
};

export default fireAuthModule;
