<template>
  <div class="list">
    <p>{{listData.title}}</p>
  </div>
</template>


<script>
export default {
  name: "list",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getList", this.$route.params.boardId);
  },
  computed: {
    list() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeList;
    }
  },
  props: ["listData"],
  methods: {}
};
</script>

