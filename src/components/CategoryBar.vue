<template>
  <header class="category">
    <span class="category__item" v-for="category in categories" :key="category">
      {{ category }}
    </span>
    <input class="category__input" type="text" placeholder="Add Category" />
  </header>
</template>
<script>
export default {
  name: "CategoryBar",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style scoped>
.category {
  display: flex;
  align-items: center;
}
.category__item {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.8);
  margin-right: 5px;
}
.category__input {
  background: none;
  border: none;
  flex: 1;
  padding: 5px;
  outline: none;
}
</style>
