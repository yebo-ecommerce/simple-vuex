import Vue from 'vue'

export const getPeople = ({ dispatch }) => {
  Vue.http.get('http://swapi.co/api/people/').then(res => {
    dispatch('GET_PEOPLE', res)
  })
}
