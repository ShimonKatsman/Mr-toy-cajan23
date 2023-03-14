<!-- בס"ד -->

<template>
  <form @submit.prevent="this.saveToy">
    <input v-model="this.toy.name" type="text" />
    <input v-model="this.toy.price" type="number" />
    <button>Save</button>
  </form>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      toy: {
        name: "",
        price: 0,
      },
    };
  },
  methods: {
    saveToy() {
      this.$store
        .dispatch({ type: "saveToy", toy: { ...this.toy } })
        .then(() => this.$router.push("/toy"))
    },
  },
  computed: {},
  created() {
    console.log("example", this.$store.getters.toysToDisplay);
    if (this.$route.params.toyId) {
      this.$store
        .dispatch({
          type: "getById",
          toyId: this.$route.params.toyId,
        })
        .then(() => {
          // this.toy.name = this.$store.getters.toy.name
          this.toy = this.$store.getters.toy;
          // this.toy.price = this.$store.getters.toy.price
        });
    }
  },
  computed: {
    // toy() {
    //   return this.$store.getters.toy;
    // },
  },
  components: {},
};
</script>

<style>
</style>