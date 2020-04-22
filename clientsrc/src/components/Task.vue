<template>
  <div class="container-fluid">
    <p>{{taskData.title}}</p>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-sm btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >Move Task</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Where do you want to move this task?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <button
              class="btn btn-sm btn-primary"
              v-for="list in lists"
              :key="list.id"
              :listData="list"
            >{{list.title}}</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <create-comment :taskData="taskData"></create-comment>
    <comment v-for="comment in comments" :key="comment.id" :commentData="comment"></comment>
  </div>
</template>


<script>
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import List from "./List";
export default {
  name: "task",
  data() {
    return {};
  },
  mounted() {
    //this.$store.dispatch("getTask", this.$route.params.taskId);
    this.$store.dispatch("getComments", this.taskData.id);
  },
  computed: {
    task() {
      return this.$store.state.activeTask;
    },
    comments() {
      return this.$store.state.comments[this.taskData.id] || [];
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  props: ["taskData", "listData"],
  methods: {},
  components: {
    Comment,
    CreateComment,
    List
  }
};
</script>


<style scoped>
</style>