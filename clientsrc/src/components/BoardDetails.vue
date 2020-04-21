<template>
  <div class="board-details">
  <p>something</p>
  </div>
</template>


<script>
export default {
  name: "board-details",
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
  components: {}
};
</script>
