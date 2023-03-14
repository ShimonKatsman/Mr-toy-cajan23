<!-- בס"ד -->

<template>
  <ul>
    <li v-for="toy in toys" :key="toy._id">
      <ToyPreview :toy="toy" @remove="remove" />
    </li>
  </ul>
</template>

<script>
import ToyPreview from "../components/ToyPreview.vue";

export default {
  name: "ToyList",
  props: {
    toys: Array,
  },
  data() {
    return {};
  },
  methods: {
    remove(payload) {
      this.$emit("remove", payload);
    },
  },
  computed: {},
  created() {},
  components: {
    ToyPreview,
  },
  emits: ["remove"],
};
</script>

<style>
</style>
