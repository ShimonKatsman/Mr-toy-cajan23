<!-- בס"ד -->

<template>
<!-- <section v-if="this.show"> -->
<section v-if="this.$route.params.toyId">
  <section v-if="show">
  <p>ID: {{ this.toy._id }}</p>
  <p>Name: {{ this.toy.name }}</p>
  <p>Price: {{ this.toy.price }}</p>
  <p>Labels: <ul><li v-for="label in this.labels" :key="label">{{ label }}</li></ul></p>
  <p>In Stoke? {{ this.toy.inStoke? 'No': 'Yes!' }}</p>
  <p>Here since: {{ this.toy.createdAt }}</p>
  <p>Reviews: <ul><li v-for="review in this.reviews" :key="review">{{ review }}</li></ul></p>
  <RouterLink :to="'/toy/edit/' + this.toy._id">Edit</RouterLink>
  </section>
</section>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show: false,
    };
  },
  methods: {},
  computed: {},
  created() {
    this.$store
      .dispatch({ type: "getById", toyId: this.$route.params.toyId })
      .then(() => (this.show = true));
  },
  computed: {
    toy() {
      return this.$store.getters.toy;
    },
    labels() {
      return this.$store.getters.toy.labels;
    },
    reviews() {
      return this.$store.getters.toy.reviews;
    },
  },
  components: {},
};
</script>

<style>
</style>