<template>
  <div>
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required />
      <button type="submit">Create List</button>
    </form>
    
  </div>
</template>


<script>
// ANCHOR find out how to pass board id with the list
export default {
  name: "create-list",
  data(){
    return{
    newList: {
        title: ""
      }
    }
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", this.newList);
      this.newList = { title: ""};
    }
  },
  }
</script>

<style></style>
