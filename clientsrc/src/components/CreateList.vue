<template>
  <div>
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required />
      <button class="btn btn-sm btn-primary" type="submit">Create List</button>
    </form>
  </div>
</template>


<script>
// ANCHOR find out how to pass board id with the list
export default {
  name: "create-list",
  props: ["boardData"],
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId
      }
    };
  },
  methods: {
    addList() {
      console.log(this.newList, "this is from addList");
      this.$store.dispatch("addList", this.newList);
      this.newList = { title: "" };
    }
  }
};
</script>

<style></style>
