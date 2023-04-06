<template>
  <div id="app">
    <HomeTest msg="Oi sou o Componente Home" />
  </div>
</template>

<script>
import HomeTest from "./views/home/HomeTest.vue"

export default {
  name: "App",
  components: {
    HomeTest,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
