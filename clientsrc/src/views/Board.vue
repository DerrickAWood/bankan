<template>
  <div class="board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h2 v-if="board.description">{{board.description}}</h2>
    <h1 v-else>Loading...</h1>
    <create-List></create-List>
    <List></List>
  </div>
</template>

<script>
import CreateList from "../components/CreateList"
import List from "../components/List"
export default {
  name: "board",
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch("getBoard", this.$route.params.boardId)
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"],
  methods: {},
  components: { List, CreateList }
};
</script>
