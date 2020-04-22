<template>
  <div class="container-fluid">
    <p>{{taskData.title}}</p>
    <create-comment :taskData="taskData"></create-comment>
    <comments v-for="comment in comments" :key="comment.id" :commentData="comment"></comments>
  </div>
</template>


<script>
import Comments from "./Comments";
import CreateComment from "./CreateComment";
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
      return this.$store.state.comments[this.taskData.id];
    }
  },
  props: ["taskData"],
  methods: {},
  components: {
    Comments,
    CreateComment
  }
};
</script>


<style scoped>
</style>