const state = () => ({
  objects: [],
});

const mutations = {
  ADD_OBJECT(state, object) {
    state.objects.push(object);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
