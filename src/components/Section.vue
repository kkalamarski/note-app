<template>
  <article calss="section">
    <div class="section__rendered" v-html="section.rendered" />
  </article>
</template>
<script>
export default {
  name: "Section",
  props: {
    section: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
<style scoped>
.section {
  wdith: 100%;
  text-align: left;
}
.section__rendered {
  text-align: left;
}
</style>
