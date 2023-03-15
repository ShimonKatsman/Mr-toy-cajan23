<!-- בס"ד -->

<template>
<section class="toy">
  <img src="/imgs/my-meme (3).jpg">
  <section class="toy-container item-box">
  <RouterLink :to="'/toy/details/' + toy._id">{{ toy.name }}</RouterLink>
  <h4 class="txt item-sale-box">{{ toy.price }}</h4>
  <RouterLink :to="'/toy/edit/' + toy._id">edit</RouterLink>
  </section>
  <button @click="remove">Delete</button>
</section>
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