<template>
  <article class="note">
    <h2 :contenteditable="editing" class="note__title" @input="saveNote">{{ note.title }}</h2>
    <small>Last edited {{ this.formatDate() }}</small>
    <div class="note__editor" v-html="rendered" :contenteditable="editing" @input="saveNote" />
    <Button variant="action" @click.native="enableEditing"><icon name="edit" scale="2" /></Button>
  </article>
</template>

<script>
import CategoryBar from "./CategoryBar";
import Button from "./Button";
import { db } from "../firebase";
import moment from "moment";
import marked from "marked";
import "vue-awesome/icons/edit";
import { debounce } from 'lodash';

export default {
  name: "Note",
  data() {
    return {
      id: this.$route.params.id,
      note: { content: "" },
      editing: false
    };
  },
  computed: {
    rendered: function() {
      return marked((this.note && this.note.content) || "", { sanitize: true });
    }
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;

      this.$bind("note", db.collection("notes").doc(this.id));
    }
  },
  firestore() {
    return {
      note: db.collection("notes").doc(this.id)
    };
  },
  methods: {
    formatDate() {
      if (this.note.lastEdited) {
        const now = moment().unix();
        const created = this.note.lastEdited.seconds;
        const diff = created - now;

        return moment.duration(diff).humanize(true);
      } else return "";
    },
    saveNote: debounce(function(e) {
      db
        .collection("notes")
        .doc(this.note.id)
        .update({
          title: this.note.title,
          content: e.target.innerText.trim(),
          lastEdited: new Date()
        });
      console.log('Saving...');
    }, 1000),
    enableEditing() {
      this.editing = true;
    }
  },
  components: {
    CategoryBar,
    Button
  }
};
</script>

<style scoped>
.note {
  flex: 1;
  position: relative;
  overflow: auto;
  padding: 15px;
  text-align: left;
}

.note__title {
  text-align: left;
  border-bottom: 1px #dddddd solid;
  padding: 10px 0;
}

.note__editor {
  flex: 1;
}

small {
  text-align: left;
  margin-bottom: 15px;
  display: block;
}
</style>
