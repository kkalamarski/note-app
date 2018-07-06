<template>
  <button v-bind:class="variant">
    {{ text }}
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String
    },
    variant: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  outline: none;
  background: transparent;
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;

  &.large {
    font-size: 1.3em;
    padding: 15px 30px;
  }

  &.primary {
    background: #45b649;
    color: white;
  }

  &.listItem {
    color: white;
    text-align: left;
  }

  &.action {
    position: absolute;
    bottom: 30px;
    right: 30px;
  }
}
</style>
