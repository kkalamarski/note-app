<template>
  <header class="app-bar">
    <h2 class="app-name">Notes</h2>
    <Button text="Sign Out" @click.native="onLogout" />
  </header>
</template>
<script>
import Button from "./Button";
import { auth } from "../firebase";

export default {
  name: "AppBar",
  methods: {
    onLogout() {
      auth.signOut().then(() => this.$router.replace("Login"));
    }
  },
  components: {
    Button
  }
};
</script>
<style lang="scss" scoped>
.app-bar {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: white;
  color: #485563;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}

.app-name {
  margin: 0;
}
</style>
