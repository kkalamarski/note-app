<template>
  <main class="dashboard">
    <Aside :notes="notes" />
    <Note />
  </main>
</template>

<script>
import Note from "../components/Note";
import Aside from "../components/Aside";
export default {
  name: "Dashboard",
  data() {
    return {
      notes: [
        { title: "gsdgsdg" },
        { title: "dfsdf" },
        { title: "dsgs" },
        { title: "gsdgssdg" },
        { title: "wgw" }
      ]
    };
  },
  components: {
    Note,
    Aside
  }
};
</script>

<style>
.dashboard {
  display: flex;
  flex: 1;
  align-items: stretch;
}
</style>
