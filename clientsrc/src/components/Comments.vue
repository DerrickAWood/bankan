<template>
  <div class="container-fluid">
    <p>{{commentData.title}}</p>
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
  methods: {},
  props: ["commentData"],
  components: {}
};
</script>


<style scoped>
</style>