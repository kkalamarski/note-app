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
          rendered: `
              <h2>Hello World</h2> <p>lorem ipsum dolor sit amet</p> 
              <script>alert(1)<\/script>
            `,
          content: `
            ## Hello world

            lorem ipsum dolor sit amet
          `,
          id: "dfsdgsrhgsr"
        },
        {
          rendered:
            "<h3>Another section</h3> <p>jsdksjdfnjsn eunf jenfkjsnef efjnskejfnksejn</p>",
          content: `### Another section
            jsdksjdfnjsn eunf jenfkjsnef efjnskejfnksejn`,
          id: "dfsdgsdfgrhgsr"
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
  width: 100%;
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
