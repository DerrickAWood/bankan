<template>
  <div class="board container-fluid">
    <div class="row">
      <div class="col-12 bg-info">
        <h1 v-if="board.title">{{board.title}}</h1>
        <h2 v-if="board.description">{{board.description}}</h2>
        <h1 v-else>Loading...</h1>
      </div>
    </div>
    <create-List class="mt-3" :boardData="board"></create-List>
    <div class="row">
      <List class="col-3" v-for="list in lists" :listData="list" :key="list._id"></List>
    </div>
  </div>
</template>

<script>
import CreateList from "../components/CreateList";
import List from "../components/List";
export default {
  name: "board",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getBoard", this.$route.params.boardId);
    this.$store.dispatch("getList", this.$route.params.boardId);
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    }
  },
  props: ["boardId"],
  methods: {},
  components: { List, CreateList }
};
</script>
