// Define the structure of the state
const state = {
  list: []
}

// Define te possible mutations on the state
const mutations = {
  //
  GET_PEOPLE (state, people) {
    // Put it into the state
    state.list = people
  }
}

// Export everything
export default {
  state,
  mutations
}
