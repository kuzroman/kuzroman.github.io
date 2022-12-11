// import { createStore } from "vuex";

export default {
  namespaced: true,
  state: {
    count: 0,
    some:1111
  },
  getters: {
    getCount: (state) => state.count
  },
  // state() {
  //   return {
  //     count: 0,
  //     some:1111
  //   };
  // },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
};