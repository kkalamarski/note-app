<template>
  <article class="note">
    <CategoryBar :categories="categories" />
    <Section v-for="section in sections" :key="section.id" :section="section" />
    <button @click="onAddSection" class="note__add-section">+</button>
  </article>
</template>

<script>
import CategoryBar from "../components/CategoryBar";
import Section from "../components/Section";

export default {
  name: "Note",
  data() {
    return {
      categories: ["#notes/test", "#important/test"],
      sections: [],
      editing: false
    };
  },
  methods: {
    onCategoryChage() {},
    onAddSection() {
      this.sections = this.sections.concat({
        content: "## New Section",
        id: this.sections.length + 1
      });
    }
  },
  components: {
    CategoryBar,
    Section
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.note {
  position: relative;
  overflow: hidden;
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 30px);
  max-width: 1200px;
  margin: auto;
  margin-top: 15px;
}

.note__add-section {
  width: 50%;
  margin: 25px auto;
  padding: 5px;
  border: none;
  outline: none;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.6);
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
</style>
