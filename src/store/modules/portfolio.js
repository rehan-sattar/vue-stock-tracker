const state = {
  funds: 10000,
  stocks: []
};

const mutationsType = {
  BUY_STOCK: "BUY_STOCK",
  SELL_STOCK: "SELL_STOCK"
};

const mutations = {
  [mutationsType.BUY_STOCK](state, order) {
    const { stockId, quantity, stockPrice } = order;
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record) {
      // update the quantity
      record.quantity += quantity;
    } else {
      // create a new record
      state.stocks.push({
        id: stockId,
        quantity,
        price: stockPrice
      });
    }
    state.funds -= stockPrice * quantity;
  },
  [mutationsType.SELL_STOCK](state, order) {
    const { stockId, quantity, stockPrice } = order;
    const record = state.stocks.find(stock => stock.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit(mutationsType.SELL_STOCK, order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);

      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
