<template>
  <div id="app">
    <AppBar />
    <router-view></router-view>
  </div>
</template>

<script>
import Icon from "vue-awesome/components/Icon";
import AppBar from "./components/AppBar";
import Vue from "vue";
import VModal from "vue-js-modal";

Vue.component("icon", Icon);
Vue.use(VModal);

export default {
  name: "App",
    data() {
    return {
      notes: [
        { title: 'gsdgsdg' },
        { title: 'dfsdf' },
        { title: 'dsgs' },
        { title: 'gsdgssdg' },
        { title: 'wgw' },
      ]
    };
  },
  components: {
    AppBar,
  }
};
</script>

<style>
body,
html {
  color: black;
  margin: 0;
  padding: 0;
  font-size: 16px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
