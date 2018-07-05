<template>
  <div id="app">
    <Note/>
  </div>
</template>

<script>
import Note from "./components/Note";

export default {
  name: "App",
  components: {
    Note
  }
};
</script>

<style>
body,
html {
  background: #45b649;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
