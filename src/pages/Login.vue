<template>
  <main>
    <form @submit.prevent="onSubmit">
      <h2>Sign In</h2>
      <input type="email" v-model="email" name="email" />
      <input type="password" name="password" v-model="password" />
      <Button text="Login" />
    </form>
  </main>
</template>
<script>
import { auth } from "../firebase";
import Button from "../components/Button";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    onSubmit(e) {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => this.$router.replace("/"))
        .catch(e => {
          this.error = e;
          console.log({ e });
        });
    }
  },
  components: {
    Button
  }
};
</script>
<style lang="scss" scoped>
</style>
