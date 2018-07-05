<template>
  <div id="app">
    <header class="app-bar">
      <button class="flat-button">
        <icon name="arrow-left" scale="1.5" />
      </button>
      <h2 class="app-name">Notes</h2>
      <button class="flat-button">
        <icon name="times" scale="1.5" />
      </button>
    </header>
    <Note/>
  </div>
</template>

<script>
import Note from "./components/Note";
import Icon from "vue-awesome/components/Icon";
import Vue from "vue";
import VModal from "vue-js-modal";
import "vue-awesome/icons/arrow-left";
import "vue-awesome/icons/times";

Vue.component("icon", Icon);
Vue.use(VModal);

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
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}

.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #45b649;
  z-index: 10;
}

.flat-button {
  border: none;
  background: transparent;
  outline: none;
}

.app-name {
  margin: 0;
}
</style>
