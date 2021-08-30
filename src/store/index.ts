import Vue from "vue";
import Vuex from "vuex";
import { SET_SELECT_HOUSE } from "./mutation-type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectHouseInfo: {},
  },
  mutations: {
    [SET_SELECT_HOUSE](state, payload) {
      state.selectHouseInfo = payload;
    },
  },
  actions: {},
  modules: {},
});
