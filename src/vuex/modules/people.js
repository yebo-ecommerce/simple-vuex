// Dependencies
import { getIdFrom } from './../getters'

//
const state = {
  list: [],
  species: {}
}

//
const mutations = {
  //
  GET_PEOPLE (state, people) {
    state.list = people.results
  },
  GET_SPECIE (state, specie) {
    specie.results.map(item => { state.species[getIdFrom(item.url)] = item })
  }
}

//
export default {
  state,
  mutations
}
