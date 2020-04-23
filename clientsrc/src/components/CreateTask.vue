<template>
  <div class="create-task">
    <form @submit.prevent="addTask">
      <input type="text" placeholder="enter task" v-model="newTask.title" required />
      <button class="btn btn-sm btn-info m-2" type="submit">Create Task</button>
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