<template>
  <div id="app">
    <AppBar />
    <router-view></router-view>
  </div>
</template>

<script>
import Note from "./pages/Note";
import Icon from "vue-awesome/components/Icon";
import AppBar from "./components/AppBar";
import Vue from "vue";
import VModal from "vue-js-modal";

Vue.component("icon", Icon);
Vue.use(VModal);

export default {
  name: "App",
  components: {
    Note,
    AppBar
  }
};
</script>

<style>
body,
html {
  background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #29323c,
    #485563
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #29323c,
    #485563
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>
