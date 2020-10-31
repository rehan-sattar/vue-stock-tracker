<template>
  <div class="col-sm-12 col-md-4 col-lg-4 mt-3">
    <div class="card">
      <div class="card-header bg-dark text-white">
        <h5>
          {{ stock.name }} <small>Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</small>
        </h5>
      </div>
      <div class="card-body">
        <form action="" class="form-inline d-flex justify-content-between">
          <input type="number" class="form-control form-control-dark" min="0" v-model="quantity" />
          <button type="button" class="btn btn-info" @click="sellStock">
            Sell
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      sellStockAction: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellStockAction(order);
      this.quantity = 0;
    }
  }
};
</script>

<style></style>
