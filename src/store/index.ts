import { createStore } from "vuex";
import WorkProjectModule from "./modules/WorkProjectModule"; // Adjust the import path accordingly

const store = createStore({
  modules: {
    WorkProjectModule,
  },
});

export default store;
