<template>
  <div class="create-task">
    <form @submit.prevent="addTask">
      <input type="text" placeholder="title" v-model="newTask.title" required />
      <button type="submit">Create Task</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "create-task",
  props: ["listData"],
  data() {
    return {
      newTask: {
        title: ""
      }
    };
  },
  computed: {},
  methods: {
    addTask() {
      this.newTask.listId = this.listData.id;
      this.$store.dispatch("addTask", this.newTask);
      this.newTask = { title: "" };
    }
  },
  components: {}
};
</script>


<style scoped>
</style>