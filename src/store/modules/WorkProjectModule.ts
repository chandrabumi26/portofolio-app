import { ActionContext } from "vuex";
import axios from "@/axios";

const state = () => ({
  workProjectList: [],
  workProjectDetail: {},
});

type State = ReturnType<typeof state>;

const getters = {
  ["GET_WORK_LIST"](state: State) {
    return state.workProjectList;
  },
  ["GET_WORK_DETAIL"](state: State) {
    return state.workProjectDetail;
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
  async ["CALL_WORK_PROJECT_DETAIL"](
    context: ActionContext<State, unknown>,
    id: string
  ) {
    await axios.get("/workprojects/detail/" + id).then((res: any) => {
      if (!res.data.isError) {
        const response = res.data.data;
        context.commit("SET_WORK_DETAIL", response);
      }
    });
  },
};

const mutations = {
  ["SET_WORK_LIST"](state: State, params: any) {
    state.workProjectList = params;
  },
  ["SET_WORK_DETAIL"](state: State, params: any) {
    state.workProjectDetail = params;
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
