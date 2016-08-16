const state = {
  list: {},
};

const mutations = {
  GET_PEOPLE(state, people) {
    people.forEach(person => state.list[person.id] = person);
  },
};


export default {
  state,
  mutations,
};

