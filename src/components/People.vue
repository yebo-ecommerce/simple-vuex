<template>
  <table>
    <tbody>
      <tr v-for="person in people">
        <td>{{person.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    people: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}

