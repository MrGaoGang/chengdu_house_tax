import Vue from "vue";
import Vuex from "vuex";
import { SET_DIFF_HOUSES, SET_SELECT_HOUSE } from "./mutation-type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectHouseInfo: {},
    oneInfo: {},
    twoInfo: {},
  },
  mutations: {
    [SET_SELECT_HOUSE](state, payload) {
      state.selectHouseInfo = payload;
    },
    [SET_DIFF_HOUSES](state, payload) {
      state.oneInfo = payload.oneInfo;
      state.twoInfo = payload.twoInfo;
    },
  },
  actions: {},
  modules: {},
});
