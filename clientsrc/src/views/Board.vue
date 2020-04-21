<template>
  <div class="board">
    <h1>{{board.title}}</h1>
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
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    }
  },
  props: ["boardId"],
  methods: {},
  components: {BoardDetails}
};
</script>
