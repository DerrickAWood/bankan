<template>
  <div class="board">
    <h1 v-if="board.title">{{board.title}}</h1>
    <h1 v-else>Loading...</h1>
    <board-details></board-details>
  </div>
</template>

<script>
import BoardDetails from "../components/BoardDetails"
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
  components: { BoardDetails}
};
</script>
