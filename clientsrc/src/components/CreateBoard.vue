<template>
  <div>
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    
  </div>
</template>

<script>

export default {
  name: "create-board",
  data(){
    return{
    newBoard: {
        title: "",
        description: ""
      }
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    }
  },
  }
</script>

<style></style>
