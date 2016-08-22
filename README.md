# Comsumindo uma Api com Vue Vuex

O Vue por padrão nada mais é que um framework que define componentes utilizado geralmente para montar partes da sua interface. Por este motivo ele integra facilmente com outros frameworks e também com interfaces ja existentes. Por conta deste foco ele é bem leve e esta tendencia de ser nada mais que um componentizador de partes da interface segue para versão 2.0 que ja está na vesão Beta.

Neste tutorial, consumiremos uma api, e faremos a listagem de um conteudo, utilizando vuex.

Crie um dockerfile
`Dockerfile`
```code
FROM node
RUN npm install -g vue-cli
EXPOSE 8080
CMD npm run dev
```

Agora para o processo de build
```sh
$ docker build -t simple-vuex .
$ docker run -v $(pwd):/usr/src/simple-vuex -w /usr/src/simple-vuex -it --rm simple-vuex bash
# Agora rode os comandos dentro do container
# E responda o dialogo
$ vue init webpack .
? Generate project in current directory? Yes
? Project name simple-vuex
? Project description A Vue.js project
? Author 
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes
$ npm install --save vuex vue-resource
$ npm install
$ exit
# Agora fora do container, 
# você precisa mudar a permisão dos arquivos 
# pois o docker cria todos como root
$ cd .. && sudo chown -c -R <linux_user>:users ./simple-vuex && cd ./simple-vuex
$ docker run -v $(pwd):/usr/src/simple-vuex -w /usr/src/simple-vuex -it --rm -p 8080:8080 simple-vuex
```

Acesse seu localhost e você devera ver isso

![vue localhost](https://raw.githubusercontent.com/yebo-ecommerce/simple-vuex/master/static/image00.png)

Primeiro vamos criar o componente que será responsavel por listar as pessoas

`src/componets/People.vue`
```code
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
      <!-- For do vue para a propriedade passada -->
      <tr v-for="person in people">
        <td>{{person.name}}</td>
        <td>{{person.gender | capitalize}}</td>
        <td>{{person.height | height}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// declaração das propriedade que o componente irá receber
export default {
  props: {
    people: Array
  }
}
</script>

<style>
</style>
```
Agora criamos um arquivo de ações, que de acordo com a documentação do vue, são funções que despacham mutações

`src/vuex/actions.js`
```code
// Dependencias
import Vue from 'vue'

// Requisição
const req = function (path) {
  return Vue.http.get(`http://swapi.co/api/${path}`)
}

// Está é a ação que iremos utilizar para pegar todos as pessoas
export const getPeople = ({ dispatch }) => {
  // Requisição
  req('people').then((res) => {
    // Depois que a requisição terminar, passamos o resulado para função dispatch que se encarrega de atualizar a mutation
    dispatch('GET_PEOPLE', res.data.results)
  })
}
```
No proximo arquivo, definimos as mutações, mutações são exencialmente eventos, o primeiro atributo do dispatch chama a mutação com o respectivo nome

`src/vuex/modules/people.js`
```code
// Define a estrutura do estado
const state = {
  list: []
}

// Define as possiveis mutações do estado
const mutations = {
  //
  GET_PEOPLE (state, people) {
    // Put it into the state
    state.list = people
  }
}

// Exporta tudo
export default {
  state,
  mutations
}
```
Para lidar com os dados iremos utilizar alguns filters
`src/main.js`
```code

import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import store from './vuex/store'

//
Vue.use(VueResource)

// Declaramos alguns filters para poder utilizar no template
Vue.filter('capitalize', (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('height', (value) => {
  return `${Number(value) / 100}m`
})

/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
```
As mutations precisam ser declaradas em store
`src/vuex/store.js`
```code

import Vue from 'vue'
import Vuex from 'vuex'

import people from './modules/people'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people
  }
})
```
E finalmente colocamos tudo junto
`src/App.vue`
```code
<template>
   <people :people="people" v-show="!loading"></people>
   <div v-show="loading" class="loader">Loading...</div>
</template>

<script>
import People from './components/People'

// Importa a ação de recuperar os usuarios
import { getPeople } from './vuex/actions'

// Exporta o componente principal
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
    // Executa a ação
    this.getPeople()
  },
  components: {
    People
  }
}
</script>
```

Parabéns, você tem uma listagem de personages de star wars utilizando vuex.

![lista simples vuel](https://raw.githubusercontent.com/yebo-ecommerce/simple-vuex/master/static/image01.png)
