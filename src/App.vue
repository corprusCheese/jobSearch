<template>
  <div id="app">
    <Header></Header>
    <Vacancies></Vacancies>
  </div>
</template>

<script>
import Header from "./components/Header"
import Vacancies from "./components/Vacancies"

export default {
  name: 'App',
  components: {
    Header, Vacancies
  }
}
</script>

<style>
@import './css/style.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>