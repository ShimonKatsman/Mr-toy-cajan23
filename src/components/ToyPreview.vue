<!-- בס"ד -->

<template>
  <RouterLink :to="'/toy/details/' + toy._id">{{ toy.name }}</RouterLink>
  <h4>{{ toy.price }}</h4>
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
  methods: {},
  computed: {},
  created() {},
  components: {},
};
</script>

<style>
</style>