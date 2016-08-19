// Dependencies
import Vue from 'vue'

// Request
const req = function (path) {
  return Vue.http.get(`http://swapi.co/api/${path}`)
}

//
export const getPeople = ({ dispatch }) => {
  // Request People
  req('people').then((res) => {
    dispatch('GET_PEOPLE', res.data.results)
  })
}
