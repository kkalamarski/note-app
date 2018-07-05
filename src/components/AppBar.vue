<template>
  <header class="app-bar">
    <div class="container">
      <button class="flat-button">
        <icon name="arrow-left" scale="1.5" />
      </button>
      <h2 class="app-name">Notes</h2>
      <button class="flat-button">
        <icon name="times" scale="1.5" />
      </button>
    </div>
  </header>
</template>
<script>
import "vue-awesome/icons/arrow-left";
import "vue-awesome/icons/times";

export default {
  name: "AppBar"
};
</script>
<style lang="scss" scoped>
.app-bar {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: white;
  color: #485563;
  z-index: 10;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  max-width: 1200px;
  margin: auto;
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
