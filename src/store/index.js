import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
      console.log(state.authModalShow);
    },
    loginUser: (state) => {
      state.userLoggedIn = !state.userLoggedIn;
      console.log('User logged in: ' + state.userLoggedIn);
    },
    signout({commit}) {

    }
  },
  getters: {
    // authModalShow: (state) => state.authModalShow
  }
});
