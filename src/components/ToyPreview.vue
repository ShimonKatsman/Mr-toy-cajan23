<!-- בס"ד -->

<template>
  <RouterLink :to="'/toy/details/' + toy._id">{{ toy.name }}</RouterLink>
  <h4>{{ toy.price }}</h4>
  <RouterLink :to="'/toy/edit/' + toy._id">edit</RouterLink>
  <button @click="remove">Delete</button>
</template>

<script>
export default {
  name: "ToyPreview",
  props: {
    toy: Object,
  },
  data() {
    return {};
  },
  methods: {
    remove() {
      this.$emit("remove", this.toy._id);
    },
  },
  computed: {},
  created() {},
  components: {},
  emits: ["remove"],
};
</script>

<style>
</style>