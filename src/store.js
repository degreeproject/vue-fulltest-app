import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userModule = {
  namespaced: true,
  state: {
    user: {
      name: "",
      token: null
    }
  },
  mutations: {
    logIn: (state, newUser) => {
      state.user = newUser;
    },
    logOut: state => {
      state.user.name = null;
      state.user.token = null;
    },
    addToken: (state, newToken) => {
      state.user.name = newToken.name;
      state.user.token = newToken.token;
    }
  },
  actions: {
    logIn: ({ commit }, payload) => {
      commit("logIn", payload);
    },
    logOut: ({ commit }) => {
      commit("logOut");
    },
    addToken: ({ commit }, payload) => {
      commit("addToken", payload);
    }
  }
};
const recipeModule = {
  namespaced: true,
  state: {
    recipes: []
  },
  mutations: {
    addRecipes: (state, recipes) => {
      state.recipes = recipes;
    }
  },
  actions: {
    addRecipes: ({ commit }, payload) => {
      commit("addRecipes", payload);
    }
  }
};

const store = new Vuex.Store({
  modules: {
    userModule,
    recipeModule
  }
});

export default store;
