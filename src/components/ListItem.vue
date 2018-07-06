<template>
  <Button variant="listItem" @click.native="openNote">
    <h3 class="title">{{ note.title }}</h3>
    <div>Content...</div>
    <div class="date">Edited...</div>
  </Button>
</template>
<script>
import Button from './Button'

export default {
  name: 'ListItem',
  props: {
    note: { type: Object }
  },
  methods: {
    openNote() {
      this.$router.push({ name: 'Note', params: { id: this.note.id }})
    }
  },
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
.date {
  text-align: right;
  color: #DDDDDD;
}
</style>

