<template>
  <div class="row mt-2">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "./Stock";

export default {
  name: "Stocks",
  components: {
    Stock
  },
  data() {
    return {
      stocks: [
        {
          id: "1",
          name: "BMW",
          price: 231
        },
        {
          id: "2",
          name: "Google",
          price: 224
        },
        {
          id: "3",
          name: "Apple",
          price: 122
        },
        {
          id: "4",
          name: "Twitter",
          price: 300
        },
        {
          id: "5",
          name: "Xiomi",
          price: 150
        }
      ]
    };
  }
};
</script>

<style></style>
