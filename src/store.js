import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userModule = {
  namespaced: true,
  // plugins: [vuexLocalStorage.plugin],
  state: {
    user: {
      name: 'hellooooo from state',
      token: null,
    }
  },
  mutations: {
    logIn: (state, newUser) => {
      state.user = newUser;
    },
    logOut: (state) => {
      state.user.name = null;
      state.user.token = null;
    }
  },
  actions: {
    logIn: ({
      commit
    }, payload) => {
      commit('logIn', payload);
    },
    logOut: ({
      commit
    }) => {
      commit('logOut');
    }
  }
}

const store = new Vuex.Store({
  modules: {
    userModule
  }
})

export default store;