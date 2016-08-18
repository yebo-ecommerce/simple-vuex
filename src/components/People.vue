<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Genero</th>
        <th>Planeta de Origem</th>
        <th>Espécie</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people">
        <td>{{person.name}}</td>
        <td>{{person.name}}</td>
        <td>{{person.name}}</td>
        <td>{{person.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
//
import { bringSpecie } from './../vuex/getters'

//
export default {
  props: {
    people: Array
  },
  vuex: {
    getters: {
      bringSpecie
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}

