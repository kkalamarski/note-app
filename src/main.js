import Vue from "vue";
import App from "./App";
import router from "./routes";
import firebase from "./firebase";

let app;
Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      el: "#app",
      components: { App },
      template: "<App/>"
    });
  }
});
