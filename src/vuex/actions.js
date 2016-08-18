// Dependencies
import Vue from 'vue'

// Request
const req = function (path) {
  return Vue.http.get(`http://swapi.co/api/${path}`)
}

//
export const getPeople = ({ dispatch }) => {
  // Request
  req('people').then(res => {
    dispatch('GET_PEOPLE', res.data)
  })
}

//
export const getSpecies = ({ dispatch }) => {
  req('species').then(res => dispatch('GET_SPECIE', res.data))
}
