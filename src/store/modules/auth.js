import api from "../../api/imgur";
import qs from "qs";

import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("imgurToken")
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgurToken");
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    window.localStorage.setItem("imgurToken", query.access_token);
    router.push("/");
  },
  login: () => {
    api.login();
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
