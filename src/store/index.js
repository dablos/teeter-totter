import { createStore } from "vuex";
import objects from "./modules/objects";
import balance from "./modules/balance";

const store = createStore({
  modules: {
    objects,
    balance,
  },
});

export default store;
