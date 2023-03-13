<!-- בס"ד -->

<template>
  <h1>toy index</h1>
  {{ msg }}
  <ToyFilter />
  <ToyList :toys="toys" />
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
    this.$store
      .dispatch({ type: "loadToys" })
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