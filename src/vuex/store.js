import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
const state = {
  id: null //用户的id
};

const mutations = {
  add(state, newuser) {
    //用户登录后赋值操作
    state.id = newuser;
  }
};

export default new vuex.Store({
  state,
  mutations
});
