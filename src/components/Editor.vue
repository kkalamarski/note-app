<template>
  <article class="section">
    <div class="section__rendered" v-html="rendered" />
  </article>
</template>

<script>
import "vue-awesome/icons/edit";
import "vue-awesome/icons/save";
import "vue-awesome/icons/sticky-note";
import marked from "marked";
import { db } from "../firebase";

export default {
  name: "Editor",
  data() {
    return {
      rendered: marked(this.note.content.trim())
    };
  },
  props: {
    note: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    enableEditing() {
      this.edit = true;
      this.$modal.show("edit-section" + this.section.id);
    },
    save() {
      this.edit = false;
      this.$modal.hide("edit-section" + this.section.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.section {
  position: relative;
  display: flex;
  text-align: left;
  margin-top: 10px;

  &:hover {
    .section__edit {
      opacity: 1;
    }
  }
}
.section__handle {
  margin-right: 15px;
  color: black;
}
.section__rendered {
  text-align: left;
}
.section__edit {
  opacity: 0;
  top: 20px;
  right: 0;
  position: absolute;
  border: none;
  outline: none;
  background: transparent;
  color: #2c3e50;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.section__save {
  border: none;
  outline: none;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #45b649;
  color: white;
}

.section__textarea {
  border: none;
  background: transparent;
  font-size: 2em;
  flex: 1;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.section__modal-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
}
</style>
