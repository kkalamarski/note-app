<template>
  <article class="note">
    <CategoryBar :categories="categories" />
    <Section v-for="section in sections" :key="section.id" :section="section" />
    <button @click="onAddSection" class="note__add-section">+</button>
  </article>
</template>

<script>
import CategoryBar from "./CategoryBar.vue";
import Section from "./Section.vue";

export default {
  name: "Note",
  data() {
    return {
      categories: ["#notes/test", "#important/test"],
      sections: [
        {
          content: `
## Hello world

lorem ipsum *dolor* sit **amet**
          `,
          id: "dfsdgsrhgsr"
        },
        {
          content: `
### Another section
jsdksjdfnjsn eunf jenfkjsnef efjnskejfnksejn`,
          id: "dfsdgsdfgrhgsr"
        },
        {
          content: `
## Hello world

lorem ipsum *dolor* sit **amet**
          `,
          id: "1241"
        },
        {
          content: `
### Another section
jsdksjdfnjsn eunf jenfkjsnef efjnskejfnksejn`,
          id: "515"
        },
        {
          content: `
## Hello world

lorem ipsum *dolor* sit **amet**
          `,
          id: "61"
        },
        {
          content: `
### Another section
jsdksjdfnjsn eunf jenfkjsnef efjnskejfnksejn`,
          id: "13613"
        },
        {
          content: `
## Hello world

lorem ipsum *dolor* sit **amet**
          `,
          id: "136136"
        },
        {
          content: `
### Another section
jsdksjdfnjsn eunf jenfkjsnef efjnskejfnksejn`,
          id: "13778"
        }
      ],
      editing: false
    };
  },
  methods: {
    onCategoryChage() {},
    onAddSection() {
      this.sections = this.sections.concat({
        content: "hue",
        rendered: "<strong>hue</strong>",
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
  overflow: auto;
  margin-top: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
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
