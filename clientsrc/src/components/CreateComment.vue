<template>
  <div class="create-comment">
    <form @submit.prevent="addComment">
      <input type="text" placeholder="comments" v-model="newComment.title" required />
      <button class="btn btn-sm btn-primary m-2" type="submit">
        <small>Create Comment</small>
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "create-comment",
  props: ["taskData"],
  data() {
    return {
      newComment: {
        title: ""
      }
    };
  },
  computed: {},
  methods: {
    addComment() {
      this.newComment.taskId = this.taskData.id;
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = { title: "" };
    }
  },
  components: {}
};
</script>


<style scoped>
</style>