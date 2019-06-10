<template>
  <div id="app">
    <AddTodos></AddTodos>
    <FilterTodos></FilterTodos>
    <Todos></Todos>
  </div>
</template>

<script>
  import AddTodos from './components/AddTodos.vue';
  import Todos from './components/Todos.vue';
  import FilterTodos from './components/FilterTodos.vue';


export default {
  name: 'app',
  components: {
    Todos,
    AddTodos,
    FilterTodos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
