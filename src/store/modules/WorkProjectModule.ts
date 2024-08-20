import { ActionContext } from "vuex";
import axios from "@/axios";

const state = () => ({
  workProjectList: [],
});

type State = ReturnType<typeof state>;

const getters = {
  ["GET_WORK_LIST"](state: State) {
    return state.workProjectList;
  },
};

const actions = {
  async ["CALL_WORK_LIST"](context: ActionContext<State, unknown>) {
    await axios.get("/workprojects").then((res: any) => {
      if (!res.data.error) {
        const response = res.data.data;
        context.commit("SET_WORK_LIST", response);
      }
    });
  },
};

const mutations = {
  ["SET_WORK_LIST"](state: State, params: any) {
    console.log(params);
    state.workProjectList = params;
  },
};

// Export the Vuex module
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
