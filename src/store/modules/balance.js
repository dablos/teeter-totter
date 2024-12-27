const state = () => ({
  balance: 0,
});

const getters = {
  totalMomentum(state) {
    return state.balance * 10;
  },
};

const mutations = {
  UPDATE_BALANCE(state, newBalance) {
    state.balance = newBalance;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
