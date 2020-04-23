<template>
  <div class="boards">
    <h1 class="bg-primary mb-3">WELCOME TO THE BOARDS!!!</h1>
    <create-board></create-board>
    <div class="row mt-2 ml-3" v-for="board in boards" :key="board.id">
      <router-link
        class="border border-dark m-2"
        :to="{name: 'board', params: {boardId: board.id}}"
      >{{board.title}}</router-link>
      <button
        class="btn btn-sm btn-danger"
        v-if="$auth.userInfo.email == board.creatorEmail"
        @click="deleteBoard(board)"
      >DELETE</button>
    </div>
  </div>
</template>

<script>
import CreateBoard from "../components/CreateBoard";
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {};
  },
  computed: {
    boards() {
      return this.$store.state.boards;
      return this.$store.state.activeBoard;
    }
  },
  methods: {
    deleteBoard(board) {
      debugger;
      //this.$route.push({ name: "Boards" });
      this.$store.dispatch("deleteBoard", board.id);
    }
  },
  components: { CreateBoard }
};
</script>