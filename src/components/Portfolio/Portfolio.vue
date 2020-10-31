<template>
  <div class="row">
    <Stock v-for="stock in stocks" :stock="stock" :key="stock.id" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    Stock
  }
};
</script>

<style></style>
