import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import firebase from "./firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/note/:id",
    name: "Note",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  { path: "/login", name: "Login", component: Login }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(r => r.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("Login");
  else if (!requiresAuth && currentUser) next("Home");
  else next();
});

export default router;
