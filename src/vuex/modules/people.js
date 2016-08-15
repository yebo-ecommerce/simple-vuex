import Vue from 'vue';

const state = {
  //
  list: {},
};

//
const mutations = {
  GET_PEOPLE() {
    Vue.http.get('http://swapi.co/api/people/').then(res => {
      state.list = res;
    });
  },
};

export default {
  state,
  mutations,
};
