<template>
  <div class="container-fluid">
    <p>{{listData.title}}</p>
    <button class="btn btn-sm btn-danger" @click="deleteList(listData)">DELETE LIST</button>
    <create-task :listData="listData"></create-task>
    <Task v-for="task in tasks" :key="task.id" :taskData="task"></Task>
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

