import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutationTypes = {
  SET_STOCKS: "SET_STOCKS",
  RND_STOCKS: "RND_STOCKS"
};

const mutations = {
  [mutationTypes.SET_STOCKS](state, payload) {
    state.stocks = payload;
  },
  [mutationTypes.RND_STOCKS](state) {
    console.log(state);
  }
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  initStocks: ({ commit }) => {
    commit(mutationTypes.SET_STOCKS, stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit(mutationTypes.RND_STOCKS);
  }
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default { state, mutations, actions, getters };
