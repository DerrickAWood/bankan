<template>
  <div class="boards">
    WELCOME TO THE BOARDS!!!
    <create-board></create-board>
    <div v-for="board in boards" :key="board.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}">{{board.title}}</router-link>
    </div>
  </div>
</template>

<script>
import CreateBoard from "../components/CreateBoard"
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
  },
  components: { CreateBoard}
};
</script>