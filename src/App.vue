<template>
   <people :people="people" v-show="!loading"></people>
   <div v-show="loading" class="loader">Loading...</div>
</template>

<script>
import People from './components/People'

//
import { getPeople } from './vuex/actions'

// Export the main component
export default {
  vuex: {
    getters: {
      people: ({ people }) => people.list,
      loading: ({ people }) => people.list.length === 0
    },
    actions: {
      getPeople
    }
  },
  created () {
    // Execute the action
    this.getPeople()
  },
  components: {
    People
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
