<template>
  <div class="container-fluid">
    <p>{{taskData.title}}</p>
    <create-comment :taskData="taskData"></create-comment>
    <comment v-for="comment in comments" :key="comment.id" :commentData="comment"></comment>
  </div>
</template>


<script>
import Comment from "./Comment";
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
      return this.$store.state.comments[this.taskData.id] || [];
    }
  },
  props: ["taskData"],
  methods: {},
  components: {
    Comment,
    CreateComment
  }
};
</script>


<style scoped>
</style>