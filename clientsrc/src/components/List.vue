<template>
  <div class="container-fluid">
    <div class="card m-2 shadow-lg">
      <p>{{listData.title}}</p>
      <button class="btn btn-sm btn-danger m-2" @click="deleteList(listData)">DELETE LIST</button>
      <create-task :listData="listData"></create-task>
      <Task class="border m-2" v-for="task in tasks" :key="task.id" :taskData="task"></Task>
    </div>
  </div>
</template>


<script>
import Task from "./Task";
import CreateTask from "./CreateTask";
export default {
  name: "list",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getList", this.$route.params.listId);
    this.$store.dispatch("getTask", this.listData.id);
  },
  computed: {
    list() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeList;
    },
    tasks() {
      return this.$store.state.tasks[this.listData.id];
    }
  },
  props: ["listData"],
  methods: {
    deleteList(listData) {
      this.$store.dispatch("deleteList", listData);
    }
  },
  components: {
    Task,
    CreateTask
  }
};
</script>

