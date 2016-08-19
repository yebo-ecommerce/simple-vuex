<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Genero</th>
        <th>Altura</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people">
        <td>{{person.name}}</td>
        <td>{{person.gender | capitalize}}</td>
        <td>{{person.height | height}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
//
export default {
  props: {
    people: Array
  }
}
</script>

<style>
</style>
