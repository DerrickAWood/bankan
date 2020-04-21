<template>
  <div class="list">
  <p>{{List.title}}</p>
  </div>
</template>


<script>
export default {
  name: "list",
  data(){
    return{

    }
  },
  mounted(){
    this.$store.dispatch("getList", this.$route.params.listId)
  },
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeList;
    }
  },
  props: ["listId"],
  methods: {},
};
</script>

