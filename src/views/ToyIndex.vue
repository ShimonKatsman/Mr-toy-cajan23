<!-- בס"ד -->

<template>
  <ToyFilter />
  <RouterLink to="/toy/edit">Add a toy</RouterLink>
  <ToyList :toys="toys" @remove="remove" />
</template>

<script>
import ToyList from "../components/ToyList.vue";
import ToyFilter from "../components/ToyFilter.vue";

export default {
  name: "ToyIndex",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  methods: {
    remove(payload) {
      this.$store.dispatch({ type: "removeToy", toyId: payload });
    },
  },
  computed: {
    msg() {
      console.log(this.$store.getters.getMsg);
      return this.$store.getters.getMsg;
    },
    toys() {
      return this.$store.getters.toysToDisplay;
    },
  },

  components: {
    ToyList,
    ToyFilter,
  },
};
</script>

<style></style>