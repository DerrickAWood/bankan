<template>
  <div class="container-fluid">
    <p>{{taskData.title}}</p>
  </div>
</template>


<script>
export default {
  name: "task",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getTask", this.$route.params.taskId);
  },
  computed: {
    task() {
      return this.$store.state.activeTask;
    }
  },
  props: ["taskData"],
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>