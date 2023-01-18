<template>
    <div class="hello">
      <h1>Esto es el inicio</h1>
      <p>
        Prueba xd HellowOrd
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <router-link to="/hello-world">Ir helloworld</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    props: {
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  