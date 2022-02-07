<template>
  <div id="divCentral">
    <h1>Clique no botão!</h1>
    <button v-on:click="clicar">Clique aqui!</button>
    <h2>Informações</h2>
    <h3>Número de vezes que o botão foi clicado: {{cliques}}</h3>
    <h3>Última vez que o botão foi clicado: {{dataHora}}</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      clique: 0,
      cliques: 0,
      dataHora: '07/02/2022 00:00:00'
    }
  },
  methods: {
    carregarTotal: async function(){
      let url = 'http://localhost:3000/getTotal'
      axios.get(url).then((data) => {
        this.cliques = data.data.length
      })
    },
    carregarUltimo: function(){
      let url = 'http://localhost:3000/getLast'
      axios.get(url).then((data) => {
        /*console.log(data) //resposta
        console.log(data.data) //conjunto de dados na resposta
        console.log(data.data.data) //horário no conjunto de dados*/
        this.dataHora = data.data.data
      })
    },
    clicar: function(){
      let url = 'http://localhost:3000/cadastrar'
      axios.post(url, this.clique).then(() =>{
          console.log('Clique registrado')
      })
      this.carregarTotal()
      this.carregarUltimo()
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background: linear-gradient(90deg, rgba(0,255,119,1) 0%, rgba(0,255,162,1) 50%, rgba(0,255,218,1) 100%); padding-top: 100px;')
  },
  created(){
    this.carregarTotal()
    this.carregarUltimo()
  }
}
</script>

<style>
#divCentral{
 text-align: center;
}
</style>
