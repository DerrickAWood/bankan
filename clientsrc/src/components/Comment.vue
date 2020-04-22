<template>
  <div class="container-fluid">
    <p>{{commentData.title}}</p>
    <button class="btn btn-sm btn-danger" @click="deleteComment(commentData.id)">Delete</button>
  </div>
</template>


<script>
export default {
  name: "comment",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getComments", this.$route.params.commentId);
  },
  computed: {
    comment() {
      return this.$store.state.activeComment;
    }
  },
  methods: {
    async deleteComment(id) {
      await this.$store.dispatch("deleteComment", id);
      this.$store.dispatch("getComments", this.commentData.taskId);
    }
  },
  props: ["commentData"],
  components: {}
};
</script>


<style scoped>
</style>