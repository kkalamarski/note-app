// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import routes from "./routes";
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.config.productionTip = false;

const router = new VueRouter({
  routes // short for `routes: routes`
});

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
