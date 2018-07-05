<template>
  <article class="section">
    <div class="section__rendered" v-if="!edit" v-html="rendered" />
    <div class="section__content" v-if="edit">
      <textarea class="section__textarea" v-model="section.content" />
    </div>
    <button class="section__edit" v-if="!edit" @click="enableEditing">
      <icon name="edit" scale="2"></icon>
    </button>

    <button class="section__edit" v-if="edit" @click="save">
      <icon name="save" scale="2"></icon>
    </button>
  </article>
</template>
<script>
import "vue-awesome/icons/edit";
import "vue-awesome/icons/save";
import marked from "marked";

export default {
  name: "Section",
  data() {
    return {
      rendered: marked(this.section.content.trim()),
      edit: false
    };
  },
  props: {
    section: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    enableEditing() {
      this.edit = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  position: relative;
  wdith: 100%;
  text-align: left;
  margin-top: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}
.section__rendered {
  text-align: left;
}
.section__edit {
  top: 20px;
  right: 20px;
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  color: #2c3e50;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.section__textarea {
  width: 100%;
  border: none;
  background: transparent;
  font-size: 2em;
}
</style>
