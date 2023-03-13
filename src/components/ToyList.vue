<!-- בס"ד -->

<template>
  <ul>
    <li v-for="toy in toys" :key="toy._id">
      <ToyPreview :toy="toy" />
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
  methods: {},
  computed: {},
  created() {
  },
  components: {
    ToyPreview,
  },
};
</script>

<style>
</style>
