import { ActionContext } from "vuex";
import axios from "@/axios";

const state = () => ({
  data: null,
  error: null as string | null,
});

type State = ReturnType<typeof state>;

const getters = {
  ["GET_WORK_LIST"](state: State) {
    return state.data;
  },
};

const actions = {
  async ["CALL_WORK_LIST"](context: ActionContext<State, unknown>) {
    await axios.get("/workprojects").then((res: any) => {
      console.log(res);
    });
  },
};

const mutations = {};

// Export the Vuex module
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
