<template>
  <div class="container-fluid">
    <p>{{taskData.title}}</p>
    <button class="btn btn-sm btn-danger m-2" @click="deleteTask(taskData)">
      <small>DELETE TASK</small>
    </button>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-sm btn-primary m-2"
      data-toggle="modal"
      :data-target="'#exampleModal-'+taskData.id"
    >Move Task</button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal-'+taskData.id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
            >Where do you want to move task {{taskData.title}}?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <button
              data-dismiss="modal"
              @click.prevent="moveTask(list.id)"
              class="btn btn-sm btn-primary"
              v-for="list in lists"
              :key="list.id"
              :listData="list"
            >{{list.title}}</button>
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
  methods: {
    moveTask(listId) {
      let newObject = {
        oldListId: this.taskData.listId,
        oldTaskId: this.taskData._id,
        listId
      };
      console.log(newObject.oldTaskId);

      this.$store.dispatch("moveTask", newObject);
      //this.$store.dispatch("getList", newObject);
    },

    deleteTask(taskData) {
      this.$store.dispatch("deleteTask", taskData);
    }
  },
  components: {
    Comment,
    CreateComment,
    List
  }
};
</script>


<style scoped>
</style>