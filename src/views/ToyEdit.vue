<!-- בס"ד -->

<template>
  <section v-if="this.toy">
    <input v-model="this.name" type="text" />
    <input v-model="this.price" type="number" />
  </section>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      name: "",
      price: 0,
    };
  },
  methods: {},
  computed: {},
  created() {
    if (this.$route.params.toyId) {
      this.$store
        .dispatch({
          type: "getById",
          toyId: this.$route.params.toyId,
        })
        .then(() => {
          this.name = this.$store.getters.toy.name;
          this.price = this.$store.getters.toy.price;
        });
    }
  },
  computed: {
    toy() {
      return this.$store.getters.toy;
    },
  },
  components: {},
};
</script>

<style>
</style>