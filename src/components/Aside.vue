<template>
  <aside class="aside">
    <nav>
      <ListItem v-for="note in notes" :key="note.id" :note="note" />
    </nav>
    <Button variant="large primary" text="Add New Note" @click.native="addNewNote" />
  </aside>
</template>

<script>
import Button from "./Button";
import ListItem from "./ListItem";
import { db, auth } from "../firebase";

export default {
  name: "Aside",
  methods: {
    addNewNote() {
      const createdAt = new Date();
      db.collection("notes").add({
        author: auth.currentUser.uid,
        title: "New Note",
        content: 'Your note comes here...',
        createdAt,
        lastEdited: createdAt
      });
    }
  },
  data() {
    return {
      notes: []
    };
  },
  firestore() {
    return {
      notes: db
        .collection("notes")
        .where("author", "==", auth.currentUser.uid)
        .orderBy("lastEdited")
    };
  },
  components: {
    Button,
    ListItem
  }
};
</script>
<style lang="scss" scoped>
.aside {
  flex: 0 0 25%;
  background: #485563; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #29323c,
    #485563
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #29323c,
    #485563
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

nav {
  display: flex;
  flex-direction: column;
}
</style>


